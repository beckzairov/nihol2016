const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');

const workspace = path.resolve(__dirname, '..');
const downloads = 'C:/Users/user/Downloads/Telegram Desktop';

function closeTo(pixel, color, threshold) {
  const distance = Math.hypot(pixel[0] - color[0], pixel[1] - color[1], pixel[2] - color[2]);
  return distance < threshold;
}

async function removeConnectedBackground(input, output, expected) {
  const image = sharp(input).ensureAlpha();
  const metadata = await image.metadata();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const background = expected === 'white' ? [255, 255, 255] : [0, 0, 0];
  const threshold = expected === 'white' ? 48 : 42;
  const visited = new Uint8Array(info.width * info.height);
  const queue = [];
  const add = (x, y) => {
    if (x < 0 || y < 0 || x >= info.width || y >= info.height) return;
    const index = y * info.width + x;
    if (visited[index]) return;
    visited[index] = 1;
    const offset = index * info.channels;
    const pixel = data.subarray(offset, offset + 3);
    if (!closeTo(pixel, background, threshold)) return;
    queue.push(index);
  };
  for (let x = 0; x < info.width; x++) { add(x, 0); add(x, info.height - 1); }
  for (let y = 0; y < info.height; y++) { add(0, y); add(info.width - 1, y); }
  while (queue.length) {
    const index = queue.pop();
    data[index * info.channels + 3] = 0;
    const x = index % info.width;
    const y = Math.floor(index / info.width);
    add(x - 1, y); add(x + 1, y); add(x, y - 1); add(x, y + 1);
  }
  await sharp(data, { raw: info }).trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(output);
  console.log(`Wrote ${path.basename(output)} (${metadata.width}×${metadata.height})`);
}

Promise.all([
  removeConnectedBackground(path.join(downloads, 'IMG_3389.JPG'), path.join(workspace, 'public/brand/nihol-real-light.png'), 'white'),
  removeConnectedBackground(path.join(downloads, 'IMG_3390.JPG'), path.join(workspace, 'public/brand/nihol-real-dark.png'), 'black'),
]).catch((error) => { console.error(error); process.exitCode = 1; });
