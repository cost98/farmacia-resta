import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const INPUT = path.join(__dirname, '../public/images/logo.jpeg');
const OUTPUT = path.join(__dirname, '../public/images/logo_transparent.png');

// Tolerance: quanto distante dal bianco (0-255) per essere considerato sfondo
const TOLERANCE = 30;

const { data, info } = await sharp(INPUT)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const pixels = new Uint8Array(data);

for (let i = 0; i < pixels.length; i += channels) {
  const r = pixels[i];
  const g = pixels[i + 1];
  const b = pixels[i + 2];

  // Se il pixel è vicino al bianco, rendilo trasparente
  if (r > 255 - TOLERANCE && g > 255 - TOLERANCE && b > 255 - TOLERANCE) {
    pixels[i + 3] = 0;
  }
}

await sharp(pixels, { raw: { width, height, channels } })
  .png()
  .toFile(OUTPUT);

console.log(`✅ Salvato: ${OUTPUT}`);
