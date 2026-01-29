// Simple JS: burger menu toggle and smooth scroll
document.addEventListener('DOMContentLoaded', function () {
  var burger = document.getElementById('burger');
  var nav = document.getElementById('main-nav');

  function closeNav() {
    if (!nav) return;
    nav.classList.remove('open');
    if (burger) burger.classList.remove('open');
    if (burger) burger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  }

  function openNav() {
    if (!nav) return;
    nav.classList.add('open');
    if (burger) burger.classList.add('open');
    if (burger) burger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');
  }

  if (burger && nav) {
    burger.addEventListener('click', function (e) {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      if (expanded) closeNav();
      else openNav();
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !burger.contains(e.target)) {
        if (nav.classList.contains('open')) closeNav();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });

    // Close nav when resizing to desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth > 700) {
        closeNav();
      }
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (!href || href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile nav
        if (nav && burger && window.getComputedStyle(burger).display !== 'none') {
          closeNav();
        }
      }
    });
  });
 
  // Movie card click => open simple modal
  var modal = null;
  function createModal() {
    modal = document.createElement('div');
    modal.className = 'simple-modal';
    modal.setAttribute('role','dialog');
    modal.innerHTML = '<div class="modal-backdrop"></div><div class="modal-panel" role="document"><button class="modal-close" aria-label="Close">✕</button><div class="modal-content"></div></div>';
    document.body.appendChild(modal);
    modal.querySelector('.modal-close').addEventListener('click', function(){ closeModal(); });
    modal.querySelector('.modal-backdrop').addEventListener('click', function(){ closeModal(); });
  }
  function openModal(contentHtml) {
    if (!modal) createModal();
    modal.querySelector('.modal-content').innerHTML = contentHtml || '<p>Details</p>';
    modal.classList.add('open');
    document.body.classList.add('modal-open');
    // focus management
    modal._lastActive = document.activeElement;
    var closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
    // simple focus trap
    modal.addEventListener('keydown', trapTabKey);
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
    // restore focus
    if (modal._lastActive) modal._lastActive.focus();
    modal.removeEventListener('keydown', trapTabKey);
  }
  document.querySelectorAll('.movie-card').forEach(function (card) {
    card.addEventListener('click', function (e) {
      // avoid clicks on buttons inside card
      if (e.target.closest('button')) return;
      var id = this.getAttribute('data-movie-id') || '0';
      openModal('<h3>Movie details #' + id + '</h3><p>Replace with real content.</p>');
    });
  });

  // Tabs for filters
  document.querySelectorAll('.tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.tab').forEach(function (t) { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
      this.classList.add('active');
      this.setAttribute('aria-selected','true');
      // optionally, load content/filter here
    });
  });

  function trapTabKey(e) {
    if (e.key !== 'Tab') return;
    var focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (!focusable.length) return;
    focusable = Array.prototype.slice.call(focusable);
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

});

