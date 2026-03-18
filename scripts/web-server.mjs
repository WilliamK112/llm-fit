import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { estimateFit } from '../src/core.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(__dirname, '../web');
const port = Number(process.env.PORT || 4173);

const server = http.createServer(async (req, res) => {
  if (!req.url) return res.end();

  if (req.url.startsWith('/api/fit')) {
    const u = new URL(req.url, `http://localhost:${port}`);
    const profile = {
      ramGB: Number(u.searchParams.get('ram') || 16),
      vramGB: Number(u.searchParams.get('vram') || 8),
      cpuTier: String(u.searchParams.get('cpu') || 'mid'),
      platform: String(u.searchParams.get('platform') || 'apple-silicon'),
    };
    const data = estimateFit(profile);
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ profile, data }));
  }

  const filePath = req.url === '/' ? path.join(webRoot, 'index.html') : path.join(webRoot, req.url);
  try {
    const content = await fs.readFile(filePath);
    const type = filePath.endsWith('.js') ? 'text/javascript' : 'text/html';
    res.setHeader('Content-Type', type);
    res.end(content);
  } catch {
    res.statusCode = 404;
    res.end('Not found');
  }
});

server.listen(port, () => {
  console.log(`llm-fit web on http://localhost:${port}`);
});
