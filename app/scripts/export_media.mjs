import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'images');
const WP_MEDIA = 'https://ruralcan.com/wp-json/wp/v2/media?per_page=100';

async function download(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} al descargar ${url}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(destPath, buffer);
}

async function main() {
  try {
    fs.mkdirSync(OUT_DIR, { recursive: true });
    const res = await fetch(WP_MEDIA);
    if (!res.ok) throw new Error(`HTTP ${res.status} al consultar media`);
    const media = await res.json();
    let count = 0;
    for (const m of media) {
      const url = m?.source_url;
      if (!url) continue;
      const basename = path.basename(new URL(url).pathname);
      const dest = path.join(OUT_DIR, basename);
      try {
        await download(url, dest);
        count++;
        console.log(`Descargado: ${basename}`);
      } catch (e) {
        console.warn(`Fallo al descargar ${url}: ${e?.message || e}`);
      }
    }
    console.log(`Total imágenes descargadas: ${count} en ${OUT_DIR}`);
  } catch (err) {
    console.error('Error exportando media de WordPress:', err?.message || err);
    process.exitCode = 1;
  }
}

main();
