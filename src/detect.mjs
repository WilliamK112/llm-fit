import { execSync } from 'node:child_process';

function parseAppleSiliconChip(spText = '') {
  const chipMatch = spText.match(/Chip:\s*(.+)/i);
  const memMatch = spText.match(/Memory:\s*(\d+)\s*GB/i);
  const chip = chipMatch ? chipMatch[1].trim() : 'Apple Silicon';
  const ramGB = memMatch ? Number(memMatch[1]) : 16;

  const lowEnd = /M1\b|M2\b/i.test(chip);
  const highEnd = /M3 Max|M3 Ultra|M4 Pro|M4 Max|M4 Ultra|M2 Max|M2 Ultra|M1 Max|M1 Ultra/i.test(chip);
  const cpuTier = highEnd ? 'high' : (lowEnd ? 'mid' : 'mid');

  return {
    platform: 'apple-silicon',
    cpuTier,
    ramGB,
    vramGB: Math.max(8, Math.floor(ramGB * 0.5)),
    source: 'system_profiler',
    chip,
  };
}

export function detectHardware() {
  try {
    if (process.platform === 'darwin') {
      const out = execSync('system_profiler SPHardwareDataType', { encoding: 'utf8' });
      return parseAppleSiliconChip(out);
    }
  } catch {
    // fall through to defaults
  }

  return {
    platform: 'cpu',
    cpuTier: 'mid',
    ramGB: 16,
    vramGB: 0,
    source: 'fallback',
    chip: 'unknown',
  };
}
