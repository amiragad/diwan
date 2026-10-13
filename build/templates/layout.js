'use strict';

// root-relative path -> resolves correctly whether the page lives at
// the site root (depth 0) or one folder down (depth 1, e.g. /products/x.html)
function href(target, depth) {
  if (depth === 0) return target;
  return '../' + target;
}

function svgIcon(name) {
  var icons = {
    menu: '<path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    chevron: '<path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
    mail: '<path d="M4 4h16v16H4z" stroke="currentColor" stroke-width="2" fill="none"/><path d="m4 6 8 7 8-7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    pin: '<path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0Z" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2" fill="none"/>',
    flask: '<path d="M9 3h6M10 3v6l-6 10a1 1 0 0 0 1 1.5h14a1 1 0 0 0 1-1.5L14 9V3" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    layers: '<path d="m12 2 9 5-9 5-9-5 9-5Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/>',
    gear: '<circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" fill="none"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" stroke="currentColor" stroke-width="1.6" fill="none"/>',
    search: '<circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" fill="none"/><path d="m21 21-4.3-4.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
  };
  return '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">' + (icons[name] || '') + '</svg>';
}

var NAV = [
  { label: 'Home', target: 'index.html' },
  {
    label: 'About DIWAN', target: 'about.html',
    children: [
      { label: 'About DIWAN', sub: 'Group overview, purpose and Saudi impact', target: 'about.html' },
      { label: 'Leadership', sub: 'Dr. Mansour Albareeki, Founder &amp; CEO', target: 'leadership.html' }
    ]
  },
  {
    label: 'Business Arms', target: 'business-arms/engineering-technology.html',
    children: [
      { label: 'DIWAN Engineering &amp; Technology', sub: 'Technology access, systems, commercialization', target: 'business-arms/engineering-technology.html' },
      { label: 'Saudi Advanced Composites', sub: 'Materials, manufacturing, localization', target: 'business-arms/advanced-composites.html' },
      { label: 'Engineering Consultations', sub: 'Chemical &amp; materials consulting, studies', target: 'business-arms/engineering-consultations.html' }
    ]
  },
  { label: 'Products', target: 'products/index.html' },
  { label: 'Contact', target: 'contact.html' }
];

function renderNav(depth, activePath) {
  return NAV.map(function (item) {
    var isActive = item.target === activePath || (item.children && item.children.some(function (c) { return c.target === activePath; }));
    var hasChildren = !!item.children;
    var link = '<a class="nav-link' + (isActive ? ' active' : '') + '" href="' + href(item.target, depth) + '">' + item.label + (hasChildren ? svgIcon('chevron') : '') + '</a>';
    var dropdown = hasChildren
      ? '<div class="dropdown">' + item.children.map(function (c) {
          return '<a href="' + href(c.target, depth) + '"><span>' + c.label + '</span><span class="arm-tag">' + c.sub + '</span></a>';
        }).join('') + '</div>'
      : '';
    return '<li class="nav-item' + (hasChildren ? '' : '') + '">' + link + dropdown + '</li>';
  }).join('');
}

function layout(opts) {
  var depth = opts.depth || 0;
  var title = opts.title ? opts.title + ' | DIWAN' : 'DIWAN | Science. Knowledge. Technology.';
  var description = opts.description || 'DIWAN is a Saudi technology, engineering, manufacturing and knowledge group connecting materials science, advanced technologies and industrial capability into one integrated value chain.';
  var cssHref = href('assets/css/style.css', depth);
  var jsHref = href('assets/js/main.js', depth);
  var homeHref = href('index.html', depth);
  var contactHref = href('contact.html', depth);
  var productsHref = href('products/index.html', depth);

  return '<!DOCTYPE html>\n' +
'<html lang="en">\n' +
'<head>\n' +
'<meta charset="UTF-8">\n' +
'<meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
'<title>' + title + '</title>\n' +
'<meta name="description" content="' + description.replace(/"/g, '&quot;') + '">\n' +
'<link rel="preconnect" href="https://fonts.googleapis.com">\n' +
'<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n' +
'<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">\n' +
'<link rel="stylesheet" href="' + cssHref + '">\n' +
'<link rel="icon" type="image/png" href="' + href('assets/img/favicon.png', depth) + '">\n' +
'</head>\n' +
'<body class="theme-dark">\n' +
'<a class="skip-link" href="#main">Skip to content</a>\n' +
'<header class="site-header theme-dark">\n' +
'  <div class="container">\n' +
'    <a class="brand" href="' + homeHref + '">\n' +
'      <span class="brand-logo-wrap"><img class="brand-logo" src="' + href('assets/img/logo.png', depth) + '" alt="DIWAN — Diwan of Excellence Trading Company" width="220" height="56"></span>\n' +
'    </a>\n' +
'    <nav class="main-nav" aria-label="Primary">\n' +
'      <ul>' + renderNav(depth, opts.activePath || '') + '</ul>\n' +
'    </nav>\n' +
'    <div class="header-cta">\n' +
'      <a class="btn btn-primary btn-sm" href="' + contactHref + '">Start a Project</a>\n' +
'      <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">' + svgIcon('menu') + '</button>\n' +
'    </div>\n' +
'  </div>\n' +
'</header>\n' +
'<main id="main">\n' +
opts.body +
'\n</main>\n' +
renderFooter(depth) +
'<script src="' + jsHref + '"></script>\n' +
'</body>\n' +
'</html>\n';
}

function renderFooter(depth) {
  var homeHref = href('index.html', depth);
  var aboutHref = href('about.html', depth);
  var leadershipHref = href('leadership.html', depth);
  var contactHref = href('contact.html', depth);
  var productsHref = href('products/index.html', depth);
  var armET = href('business-arms/engineering-technology.html', depth);
  var armAC = href('business-arms/advanced-composites.html', depth);
  var armEC = href('business-arms/engineering-consultations.html', depth);

  return '<footer class="site-footer">\n' +
'  <div class="container">\n' +
'    <div class="footer-grid">\n' +
'      <div class="footer-brand">\n' +
'        <a class="footer-wordmark" href="' + homeHref + '">DIWAN</a>\n' +
'        <p>Connecting materials development, advanced technologies, manufacturing and engineering consultancy into one integrated value chain.</p>\n' +
'      </div>\n' +
'      <div>\n' +
'        <h4>Business Arms</h4>\n' +
'        <ul>\n' +
'          <li><a href="' + armET + '">Engineering &amp; Tech</a></li>\n' +
'          <li><a href="' + armAC + '">Advanced Composites</a></li>\n' +
'          <li><a href="' + armEC + '">Consultations</a></li>\n' +
'        </ul>\n' +
'      </div>\n' +
'      <div>\n' +
'        <h4>About DIWAN</h4>\n' +
'        <ul>\n' +
'          <li><a href="' + aboutHref + '">About DIWAN</a></li>\n' +
'          <li><a href="' + leadershipHref + '">Leadership</a></li>\n' +
'          <li><a href="' + productsHref + '">Products</a></li>\n' +
'          <li><a href="' + contactHref + '">Contact Us</a></li>\n' +
'        </ul>\n' +
'      </div>\n' +
'      <div>\n' +
'        <h4>Contact</h4>\n' +
'        <ul>\n' +
'          <li>Jubail, Saudi Arabia</li>\n' +
'          <li><a href="tel:+966133613003">+966 13 361 3003</a></li>\n' +
'          <li><a href="mailto:info@diwanetc.com">info@diwanetc.com</a></li>\n' +
'        </ul>\n' +
'      </div>\n' +
'    </div>\n' +
'    <div class="footer-bottom">\n' +
'      <span>&copy; <span id="year">2026</span> DIWAN Group. All rights reserved. Precision Engineering for Saudi Vision 2030.</span>\n' +
'    </div>\n' +
'  </div>\n' +
'</footer>\n';
}

module.exports = { layout: layout, href: href, svgIcon: svgIcon };
