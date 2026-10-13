import fs from 'fs';

const projectId = '2256533212898016551';
const screenId = 'a71d6ad9e59948c194e41c054bb2ff7c';
const dsId = '715f065349d44c309d9068b6ee6828df';

const res = await fetch(`https://stitch.withgoogle.com/project/${projectId}`);
const html = await res.text();
fs.mkdirSync('stitch-import', { recursive: true });
fs.writeFileSync('stitch-import/project-page.html', html);
console.log('len', html.length);

const urls = [...html.matchAll(/https:\/\/[^"'\\\s<>]+/g)].map((m) => m[0]);
const interesting = [...new Set(urls)].filter((u) =>
  /gstatic|googleusercontent|storage|screenshot|cdn|download|asset|blob|googleapis/i.test(u)
);
console.log('interesting count', interesting.length);
interesting.slice(0, 50).forEach((u) => console.log(u));
console.log('has screen id', html.includes(screenId));
console.log('has ds id', html.includes(dsId));
console.log('has DIWAN', html.includes('DIWAN'));
