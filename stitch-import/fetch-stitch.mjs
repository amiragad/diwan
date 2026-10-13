import fs from 'fs';
import path from 'path';
import { Stitch, StitchToolClient } from '@google/stitch-sdk';

const PROJECT_ID = '2256533212898016551';
const HOME_SCREEN_ID = 'a71d6ad9e59948c194e41c054bb2ff7c';
const DS_ASSET_ID = '715f065349d44c309d9068b6ee6828df';
const OUT = path.resolve('stitch-import');

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed ${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  return { bytes: buf.length, contentType: res.headers.get('content-type') };
}

async function tryDownloadImage(imageUrl, dest) {
  const candidates = [
    imageUrl,
    imageUrl.includes('=w') ? imageUrl : `${imageUrl}=w1920`,
    `${imageUrl}${imageUrl.includes('?') ? '&' : '?'}w=1920`,
  ];
  for (const u of candidates) {
    try {
      const r = await download(u, dest);
      console.log('saved image', dest, r.bytes, u.slice(0, 120));
      return;
    } catch (e) {
      console.error('image candidate failed', e.message);
    }
  }
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

  console.log('listTools...');
  try {
    const tools = await client.listTools();
    const names = (tools.tools || []).map((t) => t.name);
    console.log('tools', names);
    fs.writeFileSync(path.join(OUT, 'tools.json'), JSON.stringify(names, null, 2));
  } catch (e) {
    console.error('listTools failed', e.message);
  }

  console.log('screens...');
  try {
    const screens = await project.screens();
    console.log(
      'screens',
      screens.map((s) => s.id)
    );
    fs.writeFileSync(
      path.join(OUT, 'screens.json'),
      JSON.stringify(
        screens.map((s) => ({ id: s.id, data: s.data })),
        null,
        2
      )
    );
  } catch (e) {
    console.error('screens failed', e.code, e.message);
  }

  console.log('get homepage...');
  const home = await project.getScreen(HOME_SCREEN_ID);
  const htmlUrl = await home.getHtml();
  const imageUrl = await home.getImage();
  console.log('htmlUrl ok', Boolean(htmlUrl), typeof htmlUrl === 'string' ? htmlUrl.slice(0, 100) : htmlUrl);
  console.log('imageUrl ok', Boolean(imageUrl), typeof imageUrl === 'string' ? imageUrl.slice(0, 100) : imageUrl);
  fs.writeFileSync(
    path.join(OUT, 'home-meta.json'),
    JSON.stringify({ id: home.id, htmlUrl, imageUrl, data: home.data }, null, 2)
  );
  if (htmlUrl) console.log('homepage.html', await download(htmlUrl, path.join(OUT, 'homepage.html')));
  if (imageUrl) await tryDownloadImage(imageUrl, path.join(OUT, 'homepage.png'));

  console.log('design systems...');
  try {
    const systems = await project.listDesignSystems();
    console.log(
      'ds',
      systems.map((d) => ({ id: d.id, assetId: d.assetId }))
    );
    fs.writeFileSync(
      path.join(OUT, 'design-systems.json'),
      JSON.stringify(
        systems.map((d) => ({ id: d.id, assetId: d.assetId, data: d.data })),
        null,
        2
      )
    );
  } catch (e) {
    console.error('listDesignSystems failed', e.code, e.message);
  }

  // Probe MCP tools with common arg shapes
  const probes = [
    ['get_screen', { name: `projects/${PROJECT_ID}/screens/${HOME_SCREEN_ID}` }],
    ['get_screen', { projectId: PROJECT_ID, screenId: HOME_SCREEN_ID }],
    ['list_design_systems', { projectId: PROJECT_ID }],
    ['list_design_systems', { name: `projects/${PROJECT_ID}` }],
    ['get_design_system', { name: `projects/${PROJECT_ID}/assets/${DS_ASSET_ID}` }],
    ['get_design_system', { projectId: PROJECT_ID, assetId: DS_ASSET_ID }],
  ];

  for (const [name, args] of probes) {
    try {
      const result = await client.callTool(name, args);
      const file = path.join(OUT, `tool-${name}-${Object.keys(args).join('-')}.json`);
      fs.writeFileSync(file, JSON.stringify(result, null, 2));
      console.log('tool ok', name, Object.keys(args).join(','));
    } catch (e) {
      console.error('tool fail', name, Object.keys(args).join(','), e.message);
    }
  }

  await client.close();
}

main().catch((e) => {
  console.error('FATAL', e);
  process.exit(1);
});
