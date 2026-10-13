'use strict';
var svgIcon = require('./layout').svgIcon;

function contact(categories) {
  var categoryOptions = categories.map(function (c) {
    return '<option value="' + c.replace(/"/g, '&quot;') + '">' + c + '</option>';
  }).join('');

  return '' +
'<section class="page-hero ultra">\n' +
'  <div class="container">\n' +
'    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span><span>Contact</span></div>\n' +
'    <span class="eyebrow ultra-eyebrow">Start a Project with DIWAN</span>\n' +
'    <h1>Start a Project with DIWAN</h1>\n' +
'    <p class="lede">Tell us your objective, technical requirement, project stage, sector, and expected outcome. DIWAN will route the enquiry to the appropriate business arm or coordinate a combined response where the project requires engineering, technology, and manufacturing support.</p>\n' +
'  </div>\n' +
'</section>\n' +

'<section>\n' +
'  <div class="container contact-grid">\n' +
'    <div>\n' +
'      <span class="eyebrow ultra-eyebrow">Get in touch</span>\n' +
'      <h2>Contact Information</h2>\n' +
'      <div class="info-item">\n' +
'        <div class="icon">' + svgIcon('phone') + '</div>\n' +
'        <div><h4>Phone</h4><p><a href="tel:+966133613003">+966 13 361 3003</a></p></div>\n' +
'      </div>\n' +
'      <div class="info-item">\n' +
'        <div class="icon">' + svgIcon('mail') + '</div>\n' +
'        <div><h4>Email</h4><p><a href="mailto:info@diwanetc.com">info@diwanetc.com</a></p></div>\n' +
'      </div>\n' +
'      <div class="info-item">\n' +
'        <div class="icon">' + svgIcon('pin') + '</div>\n' +
'        <div><h4>Registered Address</h4><p>3271 Al-Fayha, 33 Road, 7524 Al-Fayha District, Jubail Industrial City, Saudi Arabia 35811</p></div>\n' +
'      </div>\n' +
'      <div class="info-item" style="border-bottom:none;">\n' +
'        <div class="icon">' + svgIcon('gear') + '</div>\n' +
'        <div><h4>Business Hours</h4><p>Sunday &ndash; Thursday, 9:00 AM &ndash; 5:00 PM (AST)</p></div>\n' +
'      </div>\n' +

'      <div class="card" style="margin-top:32px;">\n' +
'        <h3>Not sure which business arm you need?</h3>\n' +
'        <p style="margin-bottom:16px;">Send your requirement through the form and DIWAN will route it to Engineering &amp; Technology, Saudi Advanced Composites, or Engineering Consultations &mdash; or coordinate a combined response.</p>\n' +
'        <div style="display:flex;flex-direction:column;gap:8px;">\n' +
'          <a class="btn btn-outline btn-sm" href="business-arms/engineering-technology.html">DIWAN Engineering &amp; Technology</a>\n' +
'          <a class="btn btn-outline btn-sm" href="business-arms/advanced-composites.html">Saudi Advanced Composites</a>\n' +
'          <a class="btn btn-outline btn-sm" href="business-arms/engineering-consultations.html">Engineering Consultations</a>\n' +
'        </div>\n' +
'      </div>\n' +
'    </div>\n' +

'    <div class="form-panel">\n' +
'      <h2 style="margin-bottom:6px;">Discuss Your Project</h2>\n' +
'      <p style="margin-bottom:24px;">Fields marked * are required.</p>\n' +
'      <form id="enquiryForm">\n' +
'        <div class="field-row">\n' +
'          <div class="field"><label for="field-name">Name *</label><input id="field-name" name="name" type="text" minlength="2" required></div>\n' +
'          <div class="field"><label for="field-company">Company / Organization *</label><input id="field-company" name="company" type="text" required></div>\n' +
'        </div>\n' +
'        <div class="field-row">\n' +
'          <div class="field"><label for="field-email">Business Email *</label><input id="field-email" name="email" type="email" required></div>\n' +
'          <div class="field"><label for="field-phone">Phone *</label><input id="field-phone" name="phone" type="tel" required></div>\n' +
'        </div>\n' +
'        <div class="field-row">\n' +
'          <div class="field"><label for="field-country">Country / City *</label><input id="field-country" name="country_city" type="text" required></div>\n' +
'          <div class="field"><label for="field-arm">Business Arm *</label>\n' +
'            <select id="field-arm" name="business_arm" required>\n' +
'              <option value="">Select...</option>\n' +
'              <option>Engineering &amp; Technology</option>\n' +
'              <option>Saudi Advanced Composites</option>\n' +
'              <option>Engineering Consultations</option>\n' +
'              <option>Unsure &mdash; please advise</option>\n' +
'            </select>\n' +
'          </div>\n' +
'        </div>\n' +
'        <div class="field-row">\n' +
'          <div class="field"><label for="field-category">Product Category</label>\n' +
'            <select id="field-category" name="product_category">\n' +
'              <option value="">Not applicable</option>\n' +
categoryOptions +
'            </select>\n' +
'          </div>\n' +
'          <div class="field"><label for="field-subject">Product / Model</label><input id="field-subject" name="subject" type="text" placeholder="e.g. STA 1000 / 1600 Simultaneous Thermal Analyzer"></div>\n' +
'        </div>\n' +
'        <div class="field-row">\n' +
'          <div class="field"><label for="field-stage">Project Stage *</label>\n' +
'            <select id="field-stage" name="project_stage" required>\n' +
'              <option value="">Select...</option>\n' +
'              <option>Research</option>\n' +
'              <option>Evaluation</option>\n' +
'              <option>Procurement</option>\n' +
'              <option>Implementation</option>\n' +
'              <option>Support</option>\n' +
'            </select>\n' +
'          </div>\n' +
'          <div class="field"><label for="field-timeline">Timeline</label>\n' +
'            <select id="field-timeline" name="timeline">\n' +
'              <option value="">Select...</option>\n' +
'              <option>Immediate</option>\n' +
'              <option>Under 3 months</option>\n' +
'              <option>3&ndash;6 months</option>\n' +
'              <option>Over 6 months</option>\n' +
'            </select>\n' +
'          </div>\n' +
'        </div>\n' +
'        <div class="field">\n' +
'          <label for="field-message">Requirement / Message *</label>\n' +
'          <textarea id="field-message" name="message" rows="5" minlength="30" required placeholder="Describe your technical requirement, process, material, or project."></textarea>\n' +
'        </div>\n' +
'        <div class="field">\n' +
'          <label for="field-attachment">Attachment (specifications or RFQ)</label>\n' +
'          <input id="field-attachment" name="attachment" type="file" accept=".pdf,.doc,.docx,.xls,.xlsx">\n' +
'        </div>\n' +
'        <label class="consent">\n' +
'          <input type="checkbox" name="consent" required style="margin-top:3px;">\n' +
'          <span>I agree to be contacted by DIWAN regarding this enquiry and consent to my information being processed in line with DIWAN’s privacy notice. *</span>\n' +
'        </label>\n' +
'        <button class="btn btn-primary btn-block" type="submit">Discuss Your Project</button>\n' +
'        <div id="formStatus"></div>\n' +
'        <p class="form-note">Submitting opens a pre-filled email to info@diwanetc.com. Prefer to talk? Call +966 13 361 3003.</p>\n' +
'      </form>\n' +
'    </div>\n' +
'  </div>\n' +
'</section>\n';
}

module.exports = contact;
