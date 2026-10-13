(function () {
  'use strict';

  // Mobile nav toggle
  var MOBILE_NAV_MAX = 1100;
  var navToggle = document.querySelector('.nav-toggle');
  var mainNav = document.querySelector('.main-nav');
  var setNavOpen = function (isOpen) {
    if (!mainNav || !navToggle) return;
    mainNav.classList.toggle('open', isOpen);
    document.body.classList.toggle('nav-open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  };
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      setNavOpen(!mainNav.classList.contains('open'));
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > MOBILE_NAV_MAX) setNavOpen(false);
    });
  }

  // Touch-friendly dropdown toggling on mobile
  document.querySelectorAll('.nav-item').forEach(function (item) {
    var link = item.querySelector(':scope > a.nav-link');
    if (!link) return;
    link.addEventListener('click', function (e) {
      if (window.innerWidth > MOBILE_NAV_MAX) return;
      var dropdown = item.querySelector('.dropdown');
      if (!dropdown) return;
      e.preventDefault();
      item.classList.toggle('open');
    });
  });

  // Product accordion (category pages)
  document.querySelectorAll('.product-card-head').forEach(function (head) {
    head.addEventListener('click', function () {
      var card = head.closest('.product-card');
      var body = card.querySelector('.product-card-body');
      var isOpen = card.classList.contains('open');
      if (isOpen) {
        card.classList.remove('open');
        body.style.maxHeight = null;
      } else {
        card.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  // Auto-open a product if URL hash matches its anchor
  if (window.location.hash) {
    var target = document.querySelector(window.location.hash);
    if (target && target.classList.contains('product-card')) {
      target.classList.add('open');
      var body = target.querySelector('.product-card-body');
      if (body) body.style.maxHeight = body.scrollHeight + 'px';
      setTimeout(function () { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
    }
  }

  // Catalog search/filter (products index)
  var catalogSearch = document.getElementById('catalogSearch');
  if (catalogSearch) {
    var cards = Array.prototype.slice.call(document.querySelectorAll('.category-card'));
    var countEl = document.getElementById('resultCount');
    var updateCount = function (n) {
      if (countEl) countEl.textContent = n + (n === 1 ? ' category' : ' categories');
    };
    updateCount(cards.length);
    catalogSearch.addEventListener('input', function () {
      var q = catalogSearch.value.trim().toLowerCase();
      var visible = 0;
      cards.forEach(function (card) {
        var haystack = card.getAttribute('data-search') || '';
        var match = haystack.indexOf(q) !== -1;
        card.style.display = match ? '' : 'none';
        if (match) visible++;
      });
      updateCount(visible);
    });
  }

  // Within-category product search
  var productSearch = document.getElementById('productSearch');
  if (productSearch) {
    var pCards = Array.prototype.slice.call(document.querySelectorAll('.product-card'));
    var pCount = document.getElementById('productResultCount');
    var updatePCount = function (n) {
      if (pCount) pCount.textContent = n + (n === 1 ? ' model' : ' models');
    };
    updatePCount(pCards.length);
    productSearch.addEventListener('input', function () {
      var q = productSearch.value.trim().toLowerCase();
      var visible = 0;
      pCards.forEach(function (card) {
        var haystack = card.getAttribute('data-search') || '';
        var match = haystack.indexOf(q) !== -1;
        card.style.display = match ? '' : 'none';
        if (match) visible++;
      });
      updatePCount(visible);
    });
  }

  // Pre-fill enquiry form from query params (?category=...&product=...)
  var params = new URLSearchParams(window.location.search);
  var subjectField = document.getElementById('field-subject');
  var messageField = document.getElementById('field-message');
  if (subjectField && (params.get('category') || params.get('product'))) {
    var parts = [];
    if (params.get('product')) parts.push(params.get('product'));
    if (params.get('category')) parts.push(params.get('category'));
    subjectField.value = parts.join(' — ');
    if (messageField && !messageField.value) {
      messageField.value = 'I would like technical information and a quotation for: ' + parts.join(' — ') + '.';
    }
  }

  // Contact / enquiry form submit (client-side placeholder — routes to mailto until CRM integration is connected)
  var enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(enquiryForm);
      var lines = [];
      data.forEach(function (value, key) {
        if (value) lines.push(key + ': ' + value);
      });
      var status = document.getElementById('formStatus');
      var to = 'info@diwanetc.com';
      var subject = encodeURIComponent('Website enquiry — ' + (data.get('subject') || 'General'));
      var body = encodeURIComponent(lines.join('\n'));
      window.location.href = 'mailto:' + to + '?subject=' + subject + '&body=' + body;
      if (status) {
        status.textContent = 'Your email client is opening with this enquiry pre-filled. Prefer not to use email? Call +966 13 361 3003.';
        status.classList.add('show');
      }
    });
  }

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sticky header depth on scroll
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Scroll reveal for sections / cards
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
      revealEls.forEach(function (el) { io.observe(el); });
    }
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
