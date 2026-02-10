import fs from 'fs';
import path from 'path';

const WP_API = 'https://ruralcan.com/wp-json/wp/v2/pages?per_page=100';
const OUT_DIR = path.resolve(process.cwd(), 'src', 'data');
const OUT_FILE = path.join(OUT_DIR, 'wp_pages.json');

async function main() {
  try {
    const res = await fetch(WP_API);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status} al consultar WP API`);
    }
    const pages = await res.json();
    const mapped = pages.map(p => ({
      id: p.id,
      slug: p.slug,
      title: p.title?.rendered ?? '',
      link: p.link ?? '',
      content_html: p.content?.rendered ?? '',
      modified: p.modified ?? '',
    }));
    fs.mkdirSync(OUT_DIR, { recursive: true });
    fs.writeFileSync(OUT_FILE, JSON.stringify(mapped, null, 2), 'utf-8');
    console.log(`Exportadas ${mapped.length} páginas a ${OUT_FILE}`);
  } catch (err) {
    console.error('Error exportando páginas de WordPress:', err?.message || err);
    process.exitCode = 1;
  }
}

main();
