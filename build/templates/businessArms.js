'use strict';
var svgIcon = require('./layout').svgIcon;

function splitList(str) {
  return str
    .replace(/^and\s+/i, '')
    .split(';')
    .map(function (s) { return s.replace(/^\s*and\s+/i, '').trim(); })
    .filter(Boolean);
}

function capabilityGrid(items) {
  return '<div class="grid grid-3">' + items.map(function (item) {
    return '<div class="card"><div class="icon">' + svgIcon('gear') + '</div><p style="margin-bottom:0;font-weight:600;color:var(--text-primary);font-size:14.5px;">' + item + '</p></div>';
  }).join('') + '</div>';
}

function breadcrumb(current) {
  return '<div class="breadcrumb"><a href="../index.html">Home</a><span>/</span><a href="../about.html">Business Arms</a><span>/</span><span>' + current + '</span></div>';
}

function engineeringTechnology() {
  var capabilities = splitList('Analytical and laboratory instruments, including GC, HPLC, MS, and thermal analysis systems; research and specialized reactors, including plasma reactors; research and development equipment and proof-of-concept systems; materials processing and manufacturing technologies; injection molding and extrusion systems; additive manufacturing and 3D printing; laboratory equipment, supplies, and consumables; customized engineering and technology solutions; specialized-system supply and integration; technical support, applications support, and training.');

  return '' +
'<section class="page-hero ultra">\n' +
'  <div class="container">\n' + breadcrumb('DIWAN Engineering &amp; Technology') +
'    <span class="eyebrow ultra-eyebrow">Commercial &amp; Technology Arm</span>\n' +
'    <h1>DIWAN Engineering &amp; Technology Company</h1>\n' +
'    <p class="lede">DIWAN Engineering &amp; Technology Company represents the group’s commercial and technology-facing arm. It provides, integrates, and supports advanced technologies, equipment, and technical solutions for laboratories, research and development, and industrial applications.</p>\n' +
'    <div class="badge" style="margin-top:8px;">Technology Access &bull; Technical Solutions &bull; System Integration &bull; Commercialization</div>\n' +
'  </div>\n' +
'</section>\n' +

'<section>\n' +
'  <div class="container">\n' +
'    <div class="section-head"><div><span class="eyebrow ultra-eyebrow">Core Areas</span><h2>What we provide and support</h2></div></div>\n' +
capabilityGrid(capabilities) +
'  </div>\n' +
'</section>\n' +

'<section>\n' +
'  <div class="container">\n' +
'    <div class="section-head"><div><span class="eyebrow ultra-eyebrow">Representative Equipment</span><h2>Laboratory and process equipment we supply and support</h2></div></div>\n' +
'    <div class="photo-grid" style="grid-template-columns:repeat(3,1fr);">\n' +
'      <div class="photo-card"><img src="../assets/img/gallery-equipment-lab.jpg" alt="Laboratory equipment supplied by DIWAN"><div class="cap">Laboratory Equipment</div></div>\n' +
'      <div class="photo-card"><img src="../assets/img/gallery-catalytic-reactor.jpg" alt="Customized catalytic reactor"><div class="cap">Customized Catalytic Reactor</div></div>\n' +
'      <div class="photo-card"><img src="../assets/img/gallery-corrosion-testing.jpg" alt="Automatic corrosion testing platform"><div class="cap">Automatic Corrosion Testing Platform</div></div>\n' +
'    </div>\n' +
'  </div>\n' +
'</section>\n' +

'<section class="bg-tint">\n' +
'  <div class="container">\n' +
'    <div class="grid grid-2" style="align-items:center;gap:48px;">\n' +
'      <div>\n' +
'        <span class="eyebrow ultra-eyebrow">Value</span>\n' +
'        <h2>Technology matched to your technical requirement</h2>\n' +
'        <p class="section-lead">The company helps customers identify appropriate technologies, review technical requirements, source specialized systems, coordinate implementation, and access application support for research and industrial use.</p>\n' +
'        <a class="btn btn-primary" href="../contact.html" style="margin-top:12px;">Discuss Your Technology Requirement</a>\n' +
'      </div>\n' +
'      <div class="card" style="background:linear-gradient(145deg,var(--deep-navy),var(--ink-950));border-color:transparent;color:#fff;">\n' +
'        <div style="color:#fff;">\n' +
'          <h3 style="color:#fff;">Where DIWAN connects next</h3>\n' +
'          <p style="color:var(--text-on-dark-muted);">When a project moves from technology selection into manufacturing or localization, DIWAN connects it with <a href="advanced-composites.html" style="color:var(--accent-400);">Saudi Advanced Composites</a>. When it needs engineering direction first, DIWAN connects it with <a href="engineering-consultations.html" style="color:var(--accent-400);">Engineering Consultations</a>.</p>\n' +
'        </div>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'</section>\n' +

'<section>\n' +
'  <div class="container">\n' +
'    <div class="cta-band">\n' +
'      <span class="eyebrow ultra-eyebrow">Products</span>\n' +
'      <h2>Explore specialized technologies, instruments &amp; systems</h2>\n' +
'      <p>Each product category page groups the relevant models and provides clear manufacturer information, official source references, technical-document requests, and an enquiry path for specifications and quotation.</p>\n' +
'      <div class="actions">\n' +
'        <a class="btn btn-primary" href="../products/index.html">Browse the Product Catalog ' + svgIcon('arrow') + '</a>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'</section>\n';
}

function advancedComposites() {
  var capabilities = splitList('Advanced composite materials; polymer and composite processing; injection molding; advanced manufacturing; prototyping and product development; manufacturing of engineering parts and components; materials and manufacturing-process development; technology transfer; and localization of advanced manufacturing technologies.');

  return '' +
'<section class="page-hero ultra">\n' +
'  <div class="container">\n' + breadcrumb('Saudi Advanced Composites') +
'    <span class="eyebrow ultra-eyebrow">Industrial &amp; Manufacturing Arm</span>\n' +
'    <h1>Saudi Advanced Composites</h1>\n' +
'    <p class="lede">Saudi Advanced Composites is DIWAN’s industrial and manufacturing arm. It focuses on developing and manufacturing advanced materials, products, and engineering solutions while building local manufacturing capability and added value within Saudi Arabia.</p>\n' +
'    <div class="badge" style="margin-top:8px;">Materials &bull; Manufacturing &bull; Industrialization &bull; Localization</div>\n' +
'  </div>\n' +
'</section>\n' +

'<section>\n' +
'  <div class="container">\n' +
'    <div class="section-head"><div><span class="eyebrow ultra-eyebrow">Core Areas</span><h2>What we develop and manufacture</h2></div></div>\n' +
capabilityGrid(capabilities) +
'  </div>\n' +
'</section>\n' +

'<section>\n' +
'  <div class="container">\n' +
'    <div class="section-head"><div><span class="eyebrow ultra-eyebrow">Advanced Manufacturing in Practice</span><h2>Representative capability applications</h2></div></div>\n' +
'    <div class="photo-grid">\n' +
'      <div class="photo-card"><img src="../assets/img/gallery-afp-system.jpg" alt="AFP-X automated fiber placement system"><div class="cap">AFP-X System</div></div>\n' +
'      <div class="photo-card"><img src="../assets/img/gallery-afp-multitow.jpg" alt="AFP-X multi tow automated fiber placement system"><div class="cap">AFP-X Multi Tow System</div></div>\n' +
'      <div class="photo-card"><img src="../assets/img/gallery-turbo-blades.jpg" alt="Ultra-lightweight turbo jet blades"><div class="cap">Ultra-Lightweight Turbo Jet Blades</div></div>\n' +
'      <div class="photo-card"><img src="../assets/img/gallery-h2-vessels.jpg" alt="Hydrogen pressure vessels"><div class="cap">Hydrogen Pressure Vessels</div></div>\n' +
'      <div class="photo-card"><img src="../assets/img/gallery-battery-enclosure.jpg" alt="Battery enclosure system for EV automobiles"><div class="cap">EV Battery Enclosure System</div></div>\n' +
'      <div class="photo-card"><img src="../assets/img/gallery-wing-skin.jpg" alt="Wing skin for air taxis"><div class="cap">Wing Skin for Air Taxis</div></div>\n' +
'      <div class="photo-card"><img src="../assets/img/gallery-solar-panel.jpg" alt="Solar panel skins made with AFP for satellite"><div class="cap">Satellite Solar Panel Skins</div></div>\n' +
'      <div class="photo-card"><img src="../assets/img/gallery-hydrofoils.jpg" alt="Reinforced hydrofoils made with AFP"><div class="cap">Reinforced Hydrofoils</div></div>\n' +
'    </div>\n' +
'  </div>\n' +
'</section>\n' +

'<section class="bg-tint">\n' +
'  <div class="container">\n' +
'    <div class="grid grid-2" style="align-items:center;gap:48px;">\n' +
'      <div>\n' +
'        <span class="eyebrow ultra-eyebrow">Value</span>\n' +
'        <h2>From materials knowledge to industrial application</h2>\n' +
'        <p class="section-lead">Saudi Advanced Composites converts materials knowledge and selected technologies into prototypes, manufactured components, production methods, localized capabilities, and industrial applications.</p>\n' +
'        <a class="btn btn-primary" href="../contact.html" style="margin-top:12px;">Discuss Your Manufacturing Requirement</a>\n' +
'      </div>\n' +
'      <div class="card" style="background:linear-gradient(145deg,var(--deep-navy),var(--ink-950));border-color:transparent;color:#fff;">\n' +
'        <div style="color:#fff;">\n' +
'          <h3 style="color:#fff;">Where DIWAN connects next</h3>\n' +
'          <p style="color:var(--text-on-dark-muted);">Manufacturing projects often start with technology selection through <a href="engineering-technology.html" style="color:var(--accent-400);">DIWAN Engineering &amp; Technology</a>, or with an engineering study through <a href="engineering-consultations.html" style="color:var(--accent-400);">Engineering Consultations</a>.</p>\n' +
'        </div>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'</section>\n' +

'<section>\n' +
'  <div class="container">\n' +
'    <div class="cta-band">\n' +
'      <span class="eyebrow ultra-eyebrow">Manufacturing &amp; Industrialization</span>\n' +
'      <h2>Advanced materials, composites, and localized production</h2>\n' +
'      <p>Advanced materials, composites, polymer processing, injection molding, prototyping, product development, component manufacturing, technology transfer, and localization.</p>\n' +
'      <div class="actions">\n' +
'        <a class="btn btn-primary" href="../contact.html">Start a Manufacturing Project</a>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'</section>\n';
}

function engineeringConsultations() {
  var services = [
    { title: 'Chemical &amp; Process Engineering', copy: 'Process analysis and development; process optimization; chemical-engineering calculations and technical review; operating-condition assessment; and support for laboratory, pilot, and industrial process requirements.' },
    { title: 'Materials &amp; Product Consulting', copy: 'Materials selection and evaluation; polymer and composite guidance; material-performance review; product-development support; and recommendations connecting material requirements with processing and application needs.' },
    { title: 'Technical &amp; Feasibility Studies', copy: 'Technical feasibility assessment; option comparison; preliminary process and technology review; requirement definition; risk and constraint identification; and decision-support recommendations for research and industrial initiatives.' },
    { title: 'Technical Evaluation &amp; Project Support', copy: 'Technical evaluation of proposed solutions, equipment, suppliers, and project approaches; specification review; vendor-document review; commissioning support; and coordination of technical requirements across project stakeholders.' },
    { title: 'Research &amp; Development Engineering', copy: 'Engineering support for experiments, proof-of-concept work, scale-up planning, test-method development, technical problem solving, and the translation of research outcomes into practical development pathways.' }
  ];

  var steps = [
    'Define the challenge and intended outcome.',
    'Review available data, constraints, and technical requirements.',
    'Develop the study, evaluation, or engineering approach.',
    'Present findings, options, and recommendations.',
    'Support the next stage through technology, development, or manufacturing when required.'
  ];

  return '' +
'<section class="page-hero ultra">\n' +
'  <div class="container">\n' + breadcrumb('Engineering Consultations') +
'    <span class="eyebrow ultra-eyebrow">Engineering Consultations</span>\n' +
'    <h1>Engineering knowledge for confident technical and industrial decisions.</h1>\n' +
'    <p class="lede">We support research, industrial, and development projects with chemical and materials expertise, engineering studies, process guidance, technical evaluation, and practical recommendations tailored to each project stage.</p>\n' +
'    <div class="hero-actions">\n' +
'      <a class="btn btn-primary" href="../contact.html">Discuss Your Engineering or Consulting Requirement</a>\n' +
'      <a class="btn btn-ghost" href="#services">Explore Our Consulting Services</a>\n' +
'    </div>\n' +
'    <div class="badge" style="margin-top:20px;">Engineering &bull; Consulting &bull; Studies &bull; Knowledge</div>\n' +
'  </div>\n' +
'</section>\n' +

'<section id="services">\n' +
'  <div class="container">\n' +
'    <div class="section-head"><div><span class="eyebrow ultra-eyebrow">Our Services</span><h2>From an engineering question to a clear path forward</h2><p class="section-lead">Our consulting services help clients define technical requirements, evaluate options, develop processes and materials, assess feasibility, and prepare a clear path from an engineering question to implementation.</p></div></div>\n' +
'    <div class="grid grid-3">\n' +
services.map(function (s) {
  return '<div class="card"><div class="icon">' + svgIcon('flask') + '</div><h3>' + s.title + '</h3><p>' + s.copy + '</p></div>';
}).join('') +
'    </div>\n' +
'  </div>\n' +
'</section>\n' +

'<section class="bg-tint">\n' +
'  <div class="container">\n' +
'    <div class="section-head"><div><span class="eyebrow ultra-eyebrow">Who We Support</span><h2>Audience</h2></div></div>\n' +
'    <div class="grid grid-4">\n' +
['Research institutions and universities', 'Industrial companies and manufacturers', 'Government and development entities', 'Technology owners and project developers', 'Laboratories', 'Engineering and procurement teams', 'Organizations evaluating new materials or processes', 'Organizations evaluating products or technical investments'].map(function (a) {
  return '<div class="card"><p style="margin-bottom:0;font-weight:600;color:var(--text-primary);font-size:14.5px;">' + a + '</p></div>';
}).join('') +
'    </div>\n' +
'  </div>\n' +
'</section>\n' +

'<section>\n' +
'  <div class="container">\n' +
'    <div class="section-head"><div><span class="eyebrow ultra-eyebrow">Engagement Model</span><h2>A five-step process</h2></div></div>\n' +
'    <div class="grid grid-4">\n' +
steps.map(function (step, i) {
  return '<div class="card"><div class="icon">' + (i + 1) + '</div><p style="margin-bottom:0;font-size:14.5px;">' + step + '</p></div>';
}).join('') +
'    </div>\n' +
'    <p style="margin-top:24px;font-size:13.5px;color:var(--text-muted);">Deliverables may include technical assessments, engineering studies, feasibility inputs, requirement documents, option comparisons, materials or process recommendations, development plans, technical-review comments, and implementation roadmaps &mdash; depending on the agreed project scope.</p>\n' +
'  </div>\n' +
'</section>\n' +

'<section class="bg-dark">\n' +
'  <div class="container">\n' +
'    <div class="grid grid-2" style="align-items:center;gap:48px;">\n' +
'      <div>\n' +
'        <span class="eyebrow ultra-eyebrow">DIWAN Pathway</span>\n' +
'        <h2>When a project moves beyond the study stage</h2>\n' +
'        <p class="section-lead" style="color:var(--text-on-dark-muted);">DIWAN can connect the approved engineering direction with specialized technology and system solutions through <a href="engineering-technology.html" style="color:var(--accent-400);">DIWAN Engineering &amp; Technology Company</a>, or with prototyping, materials development, and manufacturing through <a href="advanced-composites.html" style="color:var(--accent-400);">Saudi Advanced Composites</a>.</p>\n' +
'      </div>\n' +
'      <div class="cta-band" style="padding:36px;text-align:left;">\n' +
'        <h2 style="font-size:24px;">Start with the engineering question.</h2>\n' +
'        <p style="margin:0 0 20px;">Tell us about your process, material, product, study, or technical challenge. The DIWAN team will review your requirement and route it to the appropriate engineering and consulting expertise.</p>\n' +
'        <a class="btn btn-primary" href="../contact.html">Request an Engineering Consultation</a>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'</section>\n';
}

module.exports = { engineeringTechnology: engineeringTechnology, advancedComposites: advancedComposites, engineeringConsultations: engineeringConsultations };
