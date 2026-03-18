#!/usr/bin/env node
import os from 'os';
import { estimateFit } from './core.mjs';

function detectProfile() {
  const totalMemGB = Math.round(os.totalmem() / (1024 ** 3));

  // Very rough CPU tier heuristic based on core count
  const cores = os.cpus()?.length ?? 4;
  let cpuTier = 'mid';
  if (cores <= 4) cpuTier = 'low';
  else if (cores >= 10) cpuTier = 'high';

  // We can’t reliably detect VRAM cross‑platform without extra deps;
  // use a conservative placeholder and let the user override.
  const vramGB = 8;

  // Platform mapping
  const platform = (() => {
    const p = os.platform();
    if (p === 'darwin') return 'apple-silicon';
    if (p === 'win32') return 'windows';
    return 'linux';
  })();

  return {
    ramGB: totalMemGB,
    vramGB,
    cpuTier,
    platform,
  };
}

const profile = detectProfile();
const rows = estimateFit(profile);

console.log('\nllm-fit — Auto-detected laptop profile (experimental)\n');
console.log(`Profile: RAM ${profile.ramGB}GB | VRAM ${profile.vramGB}GB (est.) | CPU ${profile.cpuTier} | ${profile.platform}`);
console.log('\nTip: override any field with flags, e.g. `llm-fit --ram=32 --vram=16`.');

for (const r of rows) {
  console.log(`${r.status}  ${r.name}`);
  console.log(`   ~${r.estTokSec} tok/s | min VRAM ${r.minVramGB}GB | cmd: ${r.cmd}`);
  console.log(`   ${r.reason}\n`);
}
