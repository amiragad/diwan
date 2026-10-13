import fs from 'fs';
import path from 'path';
import { Stitch, StitchToolClient } from '@google/stitch-sdk';

const PROJECT_ID = '2256533212898016551';
const SCREEN_ID = 'a923db14757a4a869c81ccb3d6e39499';
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
  const screen = await stitch.project(PROJECT_ID).getScreen(SCREEN_ID);
  const htmlUrl = await screen.getHtml();
  const imageUrl = await screen.getImage();
  console.log('html', Boolean(htmlUrl), 'image', Boolean(imageUrl));
  fs.writeFileSync(
    path.join(OUT, 'dark-home-meta.json'),
    JSON.stringify({ id: screen.id, htmlUrl, imageUrl, data: screen.data }, null, 2)
  );
  if (htmlUrl) console.log(await download(htmlUrl, path.join(OUT, 'dark-homepage.html')));
  if (imageUrl) {
    for (const u of [imageUrl, `${imageUrl}=w1920`, `${imageUrl}=w2560`]) {
      try {
        console.log(await download(u, path.join(OUT, 'dark-homepage.png')));
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
