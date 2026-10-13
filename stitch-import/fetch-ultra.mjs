import fs from 'fs';
import path from 'path';
import { Stitch, StitchToolClient } from '@google/stitch-sdk';

const PROJECT_ID = '2256533212898016551';
const SCREEN_ID = 'ef350409ba504a2cb09c03d5ceadd8f4';
const OUT = path.resolve('stitch-import');

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  return { bytes: buf.length, type: res.headers.get('content-type') };
}

async function main() {
  const apiKey = process.env.STITCH_API_KEY;
  if (!apiKey) {
    console.error('Missing STITCH_API_KEY');
    process.exit(1);
  }
  fs.mkdirSync(OUT, { recursive: true });
  const client = new StitchToolClient({ apiKey });
  const stitch = new Stitch(client);
  const project = stitch.project(PROJECT_ID);
  const screen = await project.getScreen(SCREEN_ID);
  const htmlUrl = await screen.getHtml();
  const imageUrl = await screen.getImage();
  console.log('html', Boolean(htmlUrl));
  console.log('image', Boolean(imageUrl));
  fs.writeFileSync(
    path.join(OUT, 'ultra-home-meta.json'),
    JSON.stringify({ id: screen.id, htmlUrl, imageUrl, data: screen.data }, null, 2)
  );
  if (htmlUrl) console.log(await download(htmlUrl, path.join(OUT, 'ultra-homepage.html')));
  if (imageUrl) {
    const candidates = [imageUrl, `${imageUrl}=w1920`, `${imageUrl}=w2560`];
    for (const u of candidates) {
      try {
        console.log(await download(u, path.join(OUT, 'ultra-homepage.png')));
        break;
      } catch (e) {
        console.error('img fail', e.message);
      }
    }
  }
  await client.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
