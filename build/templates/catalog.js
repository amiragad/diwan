'use strict';
var svgIcon = require('./layout').svgIcon;

function initials(text) {
  var words = text.replace(/[^A-Za-z0-9 ]/g, ' ').trim().split(/\s+/).slice(0, 2);
  return words.map(function (w) { return w.charAt(0).toUpperCase(); }).join('') || 'DX';
}

function splitClean(str, sep) {
  if (!str) return [];
  return str.split(sep).map(function (s) { return s.trim(); }).filter(Boolean);
}

function firstSentence(str) {
  if (!str) return '';
  return str.split(';')[0].trim().replace(/[.;]?$/, '.');
}

function categoryIndexPage(categories, totalProducts) {
  var cards = categories.map(function (c) {
    var searchBlob = (c.name + ' ' + c.partners.join(' ')).toLowerCase().replace(/"/g, '&quot;');
    return '' +
'      <a class="category-card" data-search="' + searchBlob + '" href="' + c.slug + '.html">\n' +
'        <div class="badge muted" style="margin-bottom:12px;">' + c.count + ' model' + (c.count === 1 ? '' : 's') + '</div>\n' +
'        <h3>' + c.name + '</h3>\n' +
'        <div class="meta">' + c.partners.slice(0, 2).join(', ') + (c.partners.length > 2 ? ' +' + (c.partners.length - 2) + ' more' : '') + '</div>\n' +
'      </a>\n';
  }).join('');

  return '' +
'<section class="page-hero ultra">\n' +
'  <div class="container">\n' +
'    <div class="breadcrumb"><a href="../index.html">Home</a><span>/</span><span>Products</span></div>\n' +
'    <span class="eyebrow ultra-eyebrow">Technology &amp; Product Catalog</span>\n' +
'    <h1>Specialized technologies, instruments &amp; systems</h1>\n' +
'    <p class="lede">Explore ' + categories.length + ' product categories grouping ' + totalProducts + ' represented models. Each category page provides manufacturer information and a direct enquiry route for specifications and quotation.</p>\n' +
'  </div>\n' +
'</section>\n' +
'<section class="tight">\n' +
'  <div class="container">\n' +
'    <div class="catalog-toolbar">\n' +
'      <input type="search" id="catalogSearch" placeholder="Search categories or manufacturers, e.g. thermal analysis, HST Group...">\n' +
'      <span class="result-count" id="resultCount">' + categories.length + ' categories</span>\n' +
'    </div>\n' +
'    <div class="category-grid">\n' +
cards +
'    </div>\n' +
'  </div>\n' +
'</section>\n' +
'<section class="bg-dark">\n' +
'  <div class="container">\n' +
'    <div class="cta-band" style="background:transparent;padding:0;">\n' +
'      <span class="eyebrow ultra-eyebrow">Can\'t find what you need?</span>\n' +
'      <h2>Tell us the technical requirement directly</h2>\n' +
'      <p>DIWAN sources and integrates specialized technologies beyond this catalog. Send your requirement and a technical specialist will follow up.</p>\n' +
'      <div class="actions"><a class="btn btn-primary" href="../contact.html">Discuss Your Requirement</a></div>\n' +
'    </div>\n' +
'  </div>\n' +
'</section>\n';
}

function productCard(p) {
  var features = splitClean(p.features, ';');
  var applications = splitClean(p.applications, ';');
  var related = splitClean(p.relatedProducts, ';');
  var specs = splitClean(p.specs, ';').map(function (s) {
    var idx = s.indexOf(':');
    if (idx === -1) return { label: '', value: s };
    return { label: s.slice(0, idx).trim(), value: s.slice(idx + 1).trim() };
  });
  var searchBlob = [p.model, p.partner, p.country, p.keywords].join(' ').toLowerCase().replace(/"/g, '&quot;');

  return '' +
'<article class="product-card" id="' + p.slug + '">\n' +
'  <div class="product-card-head">\n' +
'    <div class="thumb">' + svgIcon('flask') + '</div>\n' +
'    <div class="titles">\n' +
'      <h3>' + p.model + '</h3>\n' +
'      <div class="manufacturer">Manufacturer: ' + p.partner + ' &middot; Country of origin: ' + p.country + '</div>\n' +
'    </div>\n' +
'    <div class="chev">' + svgIcon('chevron') + '</div>\n' +
'  </div>\n' +
'  <div class="product-card-body" data-search="' + searchBlob + '">\n' +
'    <div class="product-card-body-inner">\n' +
'      <div class="spec-block">\n' +
'        <h4>Overview</h4>\n' +
'        <p>' + (p.overview || p.shortDesc) + '</p>\n' +
(features.length ? '        <h4>Key Features &amp; Benefits</h4>\n        <div class="tag-row" style="margin-bottom:18px;">' + features.map(function (f) { return '<span class="tag">' + f + '</span>'; }).join('') + '</div>\n' : '') +
(applications.length ? '        <h4>Applications &amp; Industries</h4>\n        <p>' + applications.join('; ') + '</p>\n' : '') +
(specs.length ? '        <h4>Technical Specifications</h4>\n        <div class="tag-row">' + specs.map(function (s) { return '<span class="tag">' + (s.label ? '<strong>' + s.label + ':</strong> ' : '') + s.value + '</span>'; }).join('') + '</div>\n' : '') +
'      </div>\n' +
'      <div>\n' +
'        <div class="product-actions">\n' +
'          <a class="btn btn-primary" href="../contact.html?category=' + encodeURIComponent(p.category) + '&product=' + encodeURIComponent(p.model) + '">' + p.cta + '</a>\n' +
'          <span class="form-note" style="text-align:center;">Datasheet available on request</span>\n' +
'        </div>\n' +
(related.length ? '        <h4 style="margin-top:22px;">Related Products</h4>\n        <div class="tag-row">' + related.map(function (r) { return '<span class="tag">' + r + '</span>'; }).join('') + '</div>\n' : '') +
'        <p class="form-note" style="margin-top:18px;">' + firstSentence(p.availabilityPolicy) + ' Lead time is confirmed in the formal quotation.</p>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'</article>\n';
}

function categoryPage(category, products) {
  var partners = Array.from(new Set(products.map(function (p) { return p.partner; })));
  var countries = Array.from(new Set(products.map(function (p) { return p.country; })));

  return '' +
'<section class="page-hero ultra">\n' +
'  <div class="container">\n' +
'    <div class="breadcrumb"><a href="../index.html">Home</a><span>/</span><a href="index.html">Products</a><span>/</span><span>' + category + '</span></div>\n' +
'    <span class="eyebrow ultra-eyebrow">Product Category</span>\n' +
'    <h1>' + category + '</h1>\n' +
'    <p class="lede">' + products.length + ' model' + (products.length === 1 ? '' : 's') + ' from ' + partners.join(', ') + '. Request technical information, configuration guidance, or a formal quotation from a DIWAN technology specialist.</p>\n' +
'    <div class="hero-actions"><a class="btn btn-primary" href="../contact.html?category=' + encodeURIComponent(category) + '">Discuss Your Requirement in ' + category + '</a></div>\n' +
'  </div>\n' +
'</section>\n' +
'<section class="tight">\n' +
'  <div class="container">\n' +
'    <div class="catalog-toolbar">\n' +
'      <input type="search" id="productSearch" placeholder="Search models within ' + category + '...">\n' +
'      <span class="result-count" id="productResultCount">' + products.length + ' models</span>\n' +
'    </div>\n' +
'    <div class="product-list">\n' +
products.map(productCard).join('') +
'    </div>\n' +
'  </div>\n' +
'</section>\n' +
'<section class="bg-dark tight">\n' +
'  <div class="container">\n' +
'    <div class="cta-band" style="background:transparent;padding:0;">\n' +
'      <span class="eyebrow ultra-eyebrow">' + category + '</span>\n' +
'      <h2>Discuss your requirement with a DIWAN technology specialist</h2>\n' +
'      <p>Manufacturer sources: ' + partners.join(', ') + ' (' + countries.join(', ') + ').</p>\n' +
'      <div class="actions">\n' +
'        <a class="btn btn-primary" href="../contact.html?category=' + encodeURIComponent(category) + '">Request Technical Information</a>\n' +
'        <a class="btn btn-ghost" href="index.html">Back to Full Catalog</a>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'</section>\n';
}

module.exports = { categoryIndexPage: categoryIndexPage, categoryPage: categoryPage };
