/**
 * Normalize all page heroes to the ultra-modern light theme used on the homepage.
 */
const fs = require('fs');
const path = require('path');

const files = [
  'about.js',
  'leadership.js',
  'contact.js',
  'businessArms.js',
  'catalog.js',
].map((f) => path.join(__dirname, 'templates', f));

for (const file of files) {
  let src = fs.readFileSync(file, 'utf8');
  const before = src;

  // Convert dark photo heroes to ultra light heroes
  src = src.replace(/class="page-hero photo"[^>]*>/g, 'class="page-hero ultra">');
  src = src.replace(/class="page-hero">/g, 'class="page-hero ultra">');

  // Remove leftover dark container class where paired with ultra heroes
  src = src.replace(/class="container on-dark"/g, 'class="container"');

  // Upgrade plain eyebrows inside templates to ultra style where still plain
  src = src.replace(
    /<span class="eyebrow">([^<]+)<\/span>/g,
    '<span class="eyebrow ultra-eyebrow">$1</span>'
  );

  // Remove obsolete inline white button styles on arm cards
  src = src.replace(
    / style="border-color:rgba\(255,255,255,\.25\);color:#fff;"/g,
    ''
  );

  // Soften ghost buttons on dark CTAs remain; convert page-level btn-ghost next to primary in light sections if needed
  // Make dark panel cards glass-friendly in businessArms
  src = src.replace(
    /style="background:var\(--ink-900\);border-color:var\(--border-dark\);"/g,
    'style="background:linear-gradient(145deg,var(--deep-navy),var(--ink-950));border-color:transparent;color:#fff;"'
  );

  if (src !== before) {
    fs.writeFileSync(file, src);
    console.log('updated', path.basename(file));
  } else {
    console.log('unchanged', path.basename(file));
  }
}
