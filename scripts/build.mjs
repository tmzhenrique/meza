// Gera dist/meza.html: o index.html com o CSS e o JS embutidos, num arquivo único.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const ler = p => readFileSync(resolve(root, p), 'utf8');

let html = ler('index.html');
const trocar = (de, para) => {
  if (!html.includes(de)) throw new Error(`Não encontrei no index.html: ${de}`);
  html = html.replace(de, () => para);
};

trocar('<link rel="stylesheet" href="src/styles.css">', `<style>\n${ler('src/styles.css')}</style>`);
trocar('<link rel="icon" type="image/svg+xml" href="src/favicon.svg">', `<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,${encodeURIComponent(ler('src/favicon.svg').trim())}">`);
trocar('<script src="src/app.js"></script>', `<script>\n${ler('src/app.js')}</script>`);

mkdirSync(resolve(root, 'dist'), { recursive: true });
writeFileSync(resolve(root, 'dist/meza.html'), html);
console.log(`dist/meza.html gerado (${Math.round(Buffer.byteLength(html) / 1024)} KB)`);
