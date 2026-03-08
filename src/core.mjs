import models from './data/models.json' with { type: 'json' };

function cpuFactor(cpuTier = 'mid') {
  return { low: 0.7, mid: 1, high: 1.2 }[cpuTier] ?? 1;
}

function platformFactor(platform = 'apple-silicon') {
  return {
    'apple-silicon': 1.15,
    nvidia: 1.2,
    amd: 1.0,
    cpu: 0.45,
  }[platform] ?? 1;
}

export function estimateFit({ ramGB = 16, vramGB = 8, cpuTier = 'mid', platform = 'apple-silicon' }) {
  const perf = cpuFactor(cpuTier) * platformFactor(platform);

  return models.map((m) => {
    const fitsVram = vramGB >= m.minVramGB;
    const fitsRam = ramGB >= Math.max(8, Math.ceil(m.paramsB * 1.2));
    const status = fitsVram && fitsRam ? '✅ Good fit' : (ramGB >= 16 && vramGB >= Math.max(4, m.minVramGB - 2) ? '🟡 Possible' : '❌ Not recommended');

    const speed = Math.max(0.8, (m.baseTokSec * perf) * (vramGB / Math.max(m.minVramGB, 1)));

    return {
      ...m,
      status,
      estTokSec: Number(speed.toFixed(1)),
      reason: status === '✅ Good fit'
        ? `VRAM ${vramGB}GB and RAM ${ramGB}GB satisfy baseline.`
        : status === '🟡 Possible'
          ? 'May run with lower context / slower speed.'
          : 'Insufficient VRAM/RAM for stable local inference.'
    };
  }).sort((a, b) => b.estTokSec - a.estTokSec);
}
