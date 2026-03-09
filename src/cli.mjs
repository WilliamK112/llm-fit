#!/usr/bin/env node
import { estimateFit } from './core.mjs';
import { detectHardware } from './detect.mjs';

const args = Object.fromEntries(process.argv.slice(2).map((arg) => {
  const [k, v] = arg.replace(/^--/, '').split('=');
  return [k, v ?? true];
}));

const profile = args.detect
  ? detectHardware()
  : {
      ramGB: Number(args.ram ?? 16),
      vramGB: Number(args.vram ?? 8),
      cpuTier: String(args.cpu ?? 'mid'),
      platform: String(args.platform ?? 'apple-silicon'),
    };

const rows = estimateFit(profile);

console.log('\nllm-fit — Can my laptop run this model?\n');
console.log(`Profile: RAM ${profile.ramGB}GB | VRAM ${profile.vramGB}GB | CPU ${profile.cpuTier} | ${profile.platform}${args.detect ? ` | detect:${profile.source}` : ''}\n`);

for (const r of rows) {
  console.log(`${r.status}  ${r.name}`);
  console.log(`   ~${r.estTokSec} tok/s | min VRAM ${r.minVramGB}GB | cmd: ${r.cmd}`);
  console.log(`   ${r.reason}\n`);
}
