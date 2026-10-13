'use strict';
var fs = require('fs');
var path = require('path');

var layout = require('./templates/layout').layout;
var home = require('./templates/home');
var about = require('./templates/about');
var leadership = require('./templates/leadership');
var businessArms = require('./templates/businessArms');
var contact = require('./templates/contact');
var catalog = require('./templates/catalog');

var ROOT = path.join(__dirname, '..');
var products = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'products.json'), 'utf8'));

function write(relPath, html) {
  var full = path.join(ROOT, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, html, 'utf8');
}

function categorySlug(p) {
  return p.categoryPath.replace(/^\/products\//, '').replace(/\/$/, '');
}

// Group products by category
var byCategory = {};
products.forEach(function (p) {
  var key = p.category;
  if (!byCategory[key]) {
    byCategory[key] = { name: key, slug: categorySlug(p), products: [], partners: new Set() };
  }
  byCategory[key].products.push(p);
  byCategory[key].partners.add(p.partner);
});

var categoryList = Object.keys(byCategory).sort().map(function (k) { return byCategory[k]; });
var categorySummaries = categoryList.map(function (c) {
  return { name: c.name, slug: c.slug, count: c.products.length, partners: Array.from(c.partners) };
});
var totalCountries = new Set(products.map(function (p) { return p.country; })).size;

// -------- Root pages (depth 0) --------
write('index.html', layout({
  depth: 0,
  activePath: 'index.html',
  title: 'DIWAN | Saudi Technology, Engineering and Advanced Manufacturing Group',
  description: 'DIWAN connects engineering knowledge, advanced technologies, and manufacturing capability to create practical research, industrial, and technical solutions in Saudi Arabia.',
  body: home({ categories: categoryList.length, products: products.length, countries: totalCountries })
}));

write('about.html', layout({
  depth: 0,
  activePath: 'about.html',
  title: 'About DIWAN',
  description: 'DIWAN is a Saudi technology, engineering, manufacturing, and knowledge group operating through three integrated business arms with one shared vision.',
  body: about()
}));

write('leadership.html', layout({
  depth: 0,
  activePath: 'leadership.html',
  title: 'Dr. Mansour Albareeki | Founder & CEO of DIWAN',
  description: 'Meet Dr. Mansour Albareeki, a Saudi materials and polymer engineer, researcher, and founder of DIWAN Engineering & Technology Company.',
  body: leadership()
}));

write('contact.html', layout({
  depth: 0,
  activePath: 'contact.html',
  title: 'Contact DIWAN',
  description: 'Start a project with DIWAN. Tell us your objective, technical requirement, project stage, sector, and expected outcome.',
  body: contact(categorySummaries.map(function (c) { return c.name; }))
}));

// -------- Business arms (depth 1) --------
write('business-arms/engineering-technology.html', layout({
  depth: 1,
  activePath: 'business-arms/engineering-technology.html',
  title: 'DIWAN Engineering & Technology Company',
  description: 'DIWAN Engineering & Technology Company provides advanced technologies, equipment, specialized systems, integration, applications support, training, and commercialization.',
  body: businessArms.engineeringTechnology()
}));

write('business-arms/advanced-composites.html', layout({
  depth: 1,
  activePath: 'business-arms/advanced-composites.html',
  title: 'Saudi Advanced Composites',
  description: 'Saudi Advanced Composites develops advanced materials, engineering products, prototypes, components, manufacturing processes, and localized industrial capabilities in Saudi Arabia.',
  body: businessArms.advancedComposites()
}));

write('business-arms/engineering-consultations.html', layout({
  depth: 1,
  activePath: 'business-arms/engineering-consultations.html',
  title: 'Engineering Consultations | DIWAN Saudi Arabia',
  description: 'DIWAN provides chemical and materials consulting, engineering studies, process development, technical evaluation, and project support for research and industrial applications in Saudi Arabia.',
  body: businessArms.engineeringConsultations()
}));

// -------- Products catalog (depth 1) --------
write('products/index.html', layout({
  depth: 1,
  activePath: 'products/index.html',
  title: 'Product Catalog',
  description: 'Browse ' + categoryList.length + ' DIWAN product categories covering analytical instrumentation, materials testing, manufacturing systems, and advanced sensing.',
  body: catalog.categoryIndexPage(categorySummaries, products.length)
}));

categoryList.forEach(function (c) {
  write('products/' + c.slug + '.html', layout({
    depth: 1,
    activePath: 'products/index.html',
    title: c.name,
    description: c.name + ': ' + c.products.length + ' models from ' + Array.from(c.partners).join(', ') + '. Request technical information or a quotation from DIWAN.',
    body: catalog.categoryPage(c.name, c.products)
  }));
});

console.log('Generated ' + (4 + 3 + 1 + categoryList.length) + ' pages:');
console.log('  Root pages: 4 (index, about, leadership, contact)');
console.log('  Business arms: 3');
console.log('  Products index: 1');
console.log('  Category pages: ' + categoryList.length);
console.log('  Total products listed: ' + products.length);
