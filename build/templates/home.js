'use strict';
var svgIcon = require('./layout').svgIcon;

function home(catalogStats) {
  return '' +
'<section class="stitch-hero dark">\n' +
'  <div class="container stitch-hero-grid">\n' +
'    <div class="hero-tech-meta">SYS.REQ // 04.992<br>COORD: 24.7136&deg; N, 46.6753&deg; E</div>\n' +
'    <div class="stitch-hero-copy">\n' +
'      <span class="eyebrow ultra-eyebrow">Science. Knowledge. Technology.</span>\n' +
'      <h1 class="display-hero">From Knowledge to Technology.<br><span class="hero-gradient">From Technology to Industry.</span></h1>\n' +
'      <p class="lede lede-accent">DIWAN connects engineering knowledge, advanced technologies, and manufacturing capability to develop practical solutions for research, industry, and technical applications in Saudi Arabia.</p>\n' +
'      <div class="hero-actions">\n' +
'        <a class="btn btn-primary" href="business-arms/engineering-technology.html">Explore Our Business Arms ' + svgIcon('arrow') + '</a>\n' +
'        <a class="btn btn-ghost-light" href="contact.html">Start a Project with DIWAN</a>\n' +
'      </div>\n' +
'    </div>\n' +
'    <div class="stitch-hero-media">\n' +
'      <div class="stitch-hero-glass">\n' +
'        <span class="corner tl"></span><span class="corner tr"></span><span class="corner br"></span>\n' +
'        <div class="stitch-hero-frame">\n' +
'          <img src="assets/img/stitch-hero-dark.jpg" alt="Advanced laboratory reactors and technical systems">\n' +
'        </div>\n' +
'      </div>\n' +
'      <div class="stitch-stats-card glass">\n' +
'        <div class="stat"><b>3</b><span>Integrated Arms</span></div>\n' +
'        <div class="stat accent"><b>' + catalogStats.categories + '+</b><span>Tech Categories</span></div>\n' +
'      </div>\n' +
'      <div class="hero-status"><span class="pulse"></span> STATUS: ONLINE</div>\n' +
'    </div>\n' +
'  </div>\n' +
'</section>\n' +

'<section class="ultra-arms">\n' +
'  <div class="container">\n' +
'    <div class="section-head ultra-head reveal">\n' +
'      <div>\n' +
'        <span class="eyebrow ultra-eyebrow"><span class="mono-index">01</span><span class="amber-rule"></span>One Group</span>\n' +
'        <h2>One Integrated Saudi<br>Technology Ecosystem</h2>\n' +
'      </div>\n' +
'      <p class="section-lead side-lead">DIWAN supports the full journey from an initial idea and engineering study to technology selection, implementation, manufacturing, and localization.</p>\n' +
'    </div>\n' +
'    <div class="arm-bento ultra">\n' +
'      <article class="arm-tile arm-tile-dark arm-tile-featured reveal reveal-delay-1" style="background-image:linear-gradient(160deg, rgba(10,25,47,.92), rgba(15,23,42,.96)), url(\'assets/img/stitch-arm-tech.jpg\');">\n' +
'        <div>\n' +
'          <div class="role">Commercial &amp; Technology Arm</div>\n' +
'          <h3>DIWAN Engineering &amp; Technology Company</h3>\n' +
'          <p>Provides advanced technologies, equipment, specialized systems, integration, applications support, training, and commercialization for laboratories, research and development, and industrial applications.</p>\n' +
'        </div>\n' +
'        <div class="arm-tile-footer">\n' +
'          <a class="btn btn-amber-ghost" href="business-arms/engineering-technology.html">View this arm ' + svgIcon('arrow') + '</a>\n' +
'        </div>\n' +
'      </article>\n' +
'      <article class="arm-tile arm-tile-glass arm-tile-solid reveal reveal-delay-2">\n' +
'        <div>\n' +
'          <div class="role">Industrial &amp; Manufacturing Arm</div>\n' +
'          <h3>Saudi Advanced Composites</h3>\n' +
'          <p>Develops advanced materials, engineering products, prototypes, components, manufacturing processes, and localized industrial capabilities in Saudi Arabia.</p>\n' +
'        </div>\n' +
'        <a class="link-arrow" href="business-arms/advanced-composites.html">View this arm ' + svgIcon('arrow') + '</a>\n' +
'      </article>\n' +
'      <article class="arm-tile arm-tile-row arm-tile-glass reveal reveal-delay-3">\n' +
'        <div>\n' +
'          <div class="role">Engineering &amp; Consulting Arm</div>\n' +
'          <h3>Diwan of Excellence Engineering Consultations</h3>\n' +
'          <p>Provides chemical engineering, materials consulting, technical studies, process development, feasibility work, technical evaluation, and engineering support for research and industrial projects.</p>\n' +
'        </div>\n' +
'        <a class="btn btn-navy btn-sm" href="business-arms/engineering-consultations.html">View this arm</a>\n' +
'      </article>\n' +
'    </div>\n' +
'  </div>\n' +
'</section>\n' +

'<section>\n' +
'  <div class="container">\n' +
'    <div class="section-head reveal">\n' +
'      <div>\n' +
'        <span class="eyebrow ultra-eyebrow"><span class="mono-index">02</span><span class="amber-rule"></span>The Journey</span>\n' +
'        <h2>One Group. Three Connected Stages.</h2>\n' +
'      </div>\n' +
'    </div>\n' +
'    <div class="journey reveal">\n' +
'      <div class="journey-step">\n' +
'        <div class="num">1</div>\n' +
'        <h3>Knowledge &amp; Engineering</h3>\n' +
'        <p>Research, studies, consulting, process development, technical evaluation, and engineering direction.</p>\n' +
'      </div>\n' +
'      <div class="journey-step">\n' +
'        <div class="num">2</div>\n' +
'        <h3>Technology &amp; Solutions</h3>\n' +
'        <p>Technology selection, equipment supply, system integration, applications support, training, and commercialization.</p>\n' +
'      </div>\n' +
'      <div class="journey-step">\n' +
'        <div class="num">3</div>\n' +
'        <h3>Manufacturing &amp; Industrialization</h3>\n' +
'        <p>Materials development, prototyping, manufacturing, product development, technology transfer, and localization.</p>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'</section>\n' +

'<section class="bg-tint">\n' +
'  <div class="container">\n' +
'    <div class="section-head reveal">\n' +
'      <div>\n' +
'        <span class="eyebrow ultra-eyebrow"><span class="mono-index">03</span><span class="amber-rule"></span>Technology Catalog</span>\n' +
'        <h2>Specialized Technologies, Instruments &amp; Systems</h2>\n' +
'        <p class="section-lead">Explore ' + catalogStats.categories + ' product categories spanning analytical instrumentation, materials testing, manufacturing systems, and advanced sensing.</p>\n' +
'      </div>\n' +
'      <a class="btn btn-navy" href="products/index.html">Browse the full catalog ' + svgIcon('arrow') + '</a>\n' +
'    </div>\n' +
'    <div class="grid grid-4">\n' +
'      <div class="card reveal reveal-delay-1"><div class="icon">' + svgIcon('flask') + '</div><h3>Analytical &amp; Testing</h3><p>Thermal analysis, chromatography, mass spectrometry, and materials-testing instrumentation.</p></div>\n' +
'      <div class="card reveal reveal-delay-2"><div class="icon">' + svgIcon('gear') + '</div><h3>Process &amp; Pilot Systems</h3><p>Reactors, autoclaves, high-pressure equipment, and lab-to-pilot scale systems.</p></div>\n' +
'      <div class="card reveal reveal-delay-3"><div class="icon">' + svgIcon('layers') + '</div><h3>Manufacturing &amp; Composites</h3><p>Injection moulding, 3D printing, automated fiber placement, and composite manufacturing.</p></div>\n' +
'      <div class="card reveal"><div class="icon">' + svgIcon('search') + '</div><h3>Imaging &amp; Sensing</h3><p>Machine-vision lenses, industrial cameras, SEM systems, and remote-sensing instrumentation.</p></div>\n' +
'    </div>\n' +
'  </div>\n' +
'</section>\n' +

'<section>\n' +
'  <div class="container">\n' +
'    <div class="section-head reveal">\n' +
'      <div>\n' +
'        <span class="eyebrow ultra-eyebrow">Trusted Network</span>\n' +
'        <h2>Partners, manufacturers, and clients</h2>\n' +
'      </div>\n' +
'    </div>\n' +
'    <div class="grid grid-2 reveal">\n' +
'      <div class="partner-strip"><img src="assets/img/partners-manufacturers.png" alt="Represented manufacturer partners"><div class="cap">Represented manufacturer partners</div></div>\n' +
'      <div class="partner-strip"><img src="assets/img/partners-clients.png" alt="Clients and institutional partners"><div class="cap">Clients and institutional partners</div></div>\n' +
'    </div>\n' +
'  </div>\n' +
'</section>\n' +

'<section class="bg-dark">\n' +
'  <div class="container">\n' +
'    <div class="cta-band reveal" style="background:transparent;padding:0;border:0;box-shadow:none;">\n' +
'      <span class="eyebrow">Start a Conversation</span>\n' +
'      <h2>Have a technical, materials, or industrial challenge?</h2>\n' +
'      <p>Tell us your objective, technical requirement, project stage, sector, and expected outcome. DIWAN will route the enquiry to the appropriate business arm.</p>\n' +
'      <div class="actions">\n' +
'        <a class="btn btn-primary" href="contact.html">Discuss Your Project</a>\n' +
'        <a class="btn btn-ghost" href="about.html">Learn About DIWAN</a>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'</section>\n';
}

module.exports = home;
