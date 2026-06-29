<!-- ── STYLES ── -->
<style id="so-sidebar-styles">

/* ── Sidebar shell ── */
.so-sidebar {
  position: fixed;
  top: 0; left: 0;
  width: 220px;
  height: 100vh;
  background: #333F48;
  display: flex;
  flex-direction: column;
  z-index: 99999;
  box-shadow: 2px 0 16px rgba(0,0,0,0.18);
  font-family: 'DM Sans', sans-serif;
  display: none; /* JS shows it only on correct pages */
}

/* ── Logo ── */
.so-sidebar-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 14px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  text-decoration: none;
  flex-shrink: 0;
  background: transparent;
}

/* ── Nav ── */
.so-sidebar-nav { padding: 10px 0; }

.so-nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 18px;
  font-size: 13px;
  font-weight: 500;
  color: rgba(255,255,255,0.55);
  text-decoration: none;
  border-left: 2px solid transparent;
  transition: color 0.15s, background 0.15s, border-color 0.15s;
  font-family: 'DM Sans', sans-serif;
}
.so-nav-item:hover {
  color: #fff;
  background: rgba(255,255,255,0.06);
  text-decoration: none;
}
.so-nav-item.so-active {
  color: #fff;
  background: rgba(143,127,85,0.18);
  border-left-color: #8F7F55;
  font-weight: 600;
}
.so-nav-item svg { flex-shrink: 0; opacity: 0.6; }
.so-nav-item:hover svg,
.so-nav-item.so-active svg { opacity: 1; }

/* ── Divider ── */
.so-sidebar-divider {
  height: 1px;
  background: rgba(255,255,255,0.08);
  margin: 4px 0;
}

/* ── User footer ── */
.so-sidebar-user {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  border-top: 1px solid rgba(255,255,255,0.08);
  margin-top: auto;
}
.so-sidebar-avatar {
  width: 32px; height: 32px;
  border-radius: 50%;
  background: #8F7F55;
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 700; color: #fff;
  flex-shrink: 0;
}
.so-sidebar-user-name { font-size: 12px; font-weight: 600; color: #fff; }
.so-sidebar-logout { font-size: 11px; color: rgba(255,255,255,0.4); text-decoration: none; }
.so-sidebar-logout:hover { color: rgba(255,255,255,0.8); }

/* ── Chip filter bar (frontpage course categories) ── */
#so-cat-filter {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 7px;
  margin: 0 0 20px;
  padding-bottom: 2px;
  scrollbar-width: none;
}
#so-cat-filter::-webkit-scrollbar { display: none; }

.so-chip {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  border:none;
  padding: 6px 14px;
  border-radius: 99px;
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #637380;
  background: #fff;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
  flex-shrink: 0;
  user-select: none;
}
.so-chip:hover { background: #faf8f3; color: #333F48; border-color: #8F7F55; }
.so-chip.so-active { background: #333F48; color: #fff; border-color: #333F48; font-weight: 600; }
.so-chip-count {
  font-size: 10px; font-weight: 700;
  border-radius: 99px;
  padding: 1px 6px;
  background: #ECEEF2;
  color: #8F7F55;
}
.so-chip.so-active .so-chip-count { background: rgba(255,255,255,0.2); color: #ddd4bc; }

/* ── Category tag on course cards ── */
.so-card-cat {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #8F7F55;
  margin-bottom: 4px;
}

</style>


<!-- ── SIDEBAR HTML ── -->
<div class="so-sidebar" id="so-sidebar">

  <a href="https://smileon.rinseai.com.au/" class="so-sidebar-logo">
    <!-- Replace src with your logo URL or keep the base64 from your original -->
    <img style="mix-blend-mode:screen;width:160px;height:auto;object-fit:contain;display:block;"
         src="https://rinseaistorageprod.blob.core.windows.net/lms-icons/smileon Logo.png" alt="Smile On Clinics" />
  </a>

  <!-- Primary Navigation -->
  <nav class="so-sidebar-nav">
    <a href="/?redirect=0" class="so-nav-item" data-path="/">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" width="16" height="16">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
      <span>Home</span>
    </a>
    <a href="/user/profile.php" class="so-nav-item" data-path="/user/profile.php">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" width="16" height="16">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
      </svg>
      <span>My Profile</span>
    </a>
    <a id="site-admin" href="/admin/search.php#linkroot" class="so-nav-item " data-path="/admin">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" width="16" height="16">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
      <span>Site Admin</span>
    </a>
  </nav>

  <!-- User footer -->
  <div class="so-sidebar-user">
    <div class="so-sidebar-avatar">JB</div>
    <div>
      <div class="so-sidebar-user-name">My Account</div>
      <a href="/login/logout.php" class="so-sidebar-logout">Sign out</a>
    </div>
  </div>

</div>


<!-- ── JAVASCRIPT ── -->
<script>
  
  (function () {
  var path  = window.location.pathname;
  var href  = window.location.href;
  var el    = document.documentElement;

  // Detect login page as early as possible (before body exists)
  var isLogin =
    path.indexOf('/login/index.php') > -1 ||
    href.indexOf('login/index.php')  > -1;

  if (!isLogin) return;

  // 1. Hide <html> immediately — no flash possible
  el.style.cssText += 'background:#eceef2!important;';

  var s = document.createElement('style');
  s.id = '__so-login-flash-guard';
  s.textContent =
    'html,body { background:#eceef2!important; overflow:hidden!important; }' +
    'body > * { opacity:0!important; visibility:hidden!important; pointer-events:none!important; }';
  (document.head || el).appendChild(s);

  // 2. Inject a full-screen overlay (same spinner you use for course pages)
  function injectOverlay() {
    if (document.getElementById('__so-login-overlay')) return;
    if (!document.body) return;

    var overlay = document.createElement('div');
    overlay.id = '__so-login-overlay';
    overlay.style.cssText =
      'position:fixed;inset:0;background:#eceef2;z-index:2147483647;' +
      'display:flex;align-items:center;justify-content:center;' +
      'flex-direction:column;gap:16px;';
    overlay.innerHTML =
      '<div style="width:36px;height:36px;border:3px solid #ddd4bc;' +
      'border-top-color:#8f7f55;border-radius:50%;' +
      'animation:__so-spin 0.7s linear infinite;"></div>' +
      '<div style="font-family:DM Sans,sans-serif;font-size:12px;' +
      'font-weight:600;color:#8e9396;letter-spacing:0.3px;">Loading...</div>' +
      '<style>@keyframes __so-spin{to{transform:rotate(360deg)}}</style>';

    document.body.insertBefore(overlay, document.body.firstChild);

    // Also un-hide body but keep Moodle content invisible behind overlay
    s.textContent =
      'html,body { background:#eceef2!important; overflow:hidden!important; }' +
      'body > *:not(#__so-login-overlay) { opacity:0!important; visibility:hidden!important; }';
  }

  // 3. Remove overlay once your custom UI (#so-login-page) exists
  function removeGuard() {
    var guard   = document.getElementById('__so-login-flash-guard');
    var overlay = document.getElementById('__so-login-overlay');
    if (guard)   guard.remove();
    if (overlay) overlay.remove();
  }

  // Poll until #so-login-page appears, then clean up
  function watchForCustomUI() {
    injectOverlay();
    if (document.getElementById('so-login-page')) {
      removeGuard();
      return;
    }
    // Prefer MutationObserver for zero-delay detection
    if (window.MutationObserver) {
      var obs = new MutationObserver(function() {
        if (document.getElementById('so-login-page')) {
          obs.disconnect();
          removeGuard();
        }
      });
      obs.observe(document.documentElement, { childList: true, subtree: true });
    }
    // Hard fallback: force-remove after 4s no matter what
    setTimeout(removeGuard, 4000);
  }

  if (document.body) { watchForCustomUI(); }
  else { document.addEventListener('DOMContentLoaded', watchForCustomUI); }
}());

  
  // ── INSTANT FLASH PREVENTION ─────────────────────────────────────────────
// Runs synchronously, before paint, so Moodle's default UI never appears.
// REPLACE your existing flash guard IIFE with this:
(function () {
  var bc = document.body ? document.body.className : document.documentElement.className;
  var path = window.location.pathname;

  var isCourseView = path.indexOf('course/view.php') > -1;
  var isIncourse = bc.indexOf('pagelayout-incourse') > -1 || bc.indexOf('pagelayout-course') > -1;

  if (!isCourseView && !isIncourse) return;

  var s = document.createElement('style');
  s.id = '__so-flash-guard';

  if (isCourseView) {
    // Nuclear option for course/view.php — hide everything immediately
    s.textContent =
      'html { background: #eceef2 !important; }' +
      'body { background: #eceef2 !important; overflow: hidden !important; }' +
      '#page-wrapper, #page, .navbar, nav, header, #region-main, ' +
      '.drawer, #nav-drawer, footer, #page-footer, ' +
      '[id^="page-"], [class*="pagelayout"] > * { ' +
      '  opacity: 0 !important; ' +
      '  visibility: hidden !important; ' +
      '  pointer-events: none !important; ' +
      '}';
  } else {
    s.textContent =
      '#page, #page-wrapper, .navbar, #nav-drawer, .drawer { opacity: 0 !important; pointer-events: none !important; }' +
      'body { background: #eceef2 !important; }';
  }

  (document.head || document.documentElement).appendChild(s);

  // Add this INSIDE the flash guard IIFE, right before the closing })();
// It sets the body background color directly as an attribute, 
// which takes effect even before the stylesheet is parsed:
if (isCourseView && document.body) {
  document.body.style.cssText += 
    'background:#eceef2!important;overflow:hidden!important;';
  
  var overlay = document.createElement('div');
  overlay.id = '__so-overlay';
  overlay.style.cssText = 
    'position:fixed;inset:0;background:#eceef2;z-index:2147483647;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px;';

  overlay.innerHTML =
    '<div id="__so-spinner" style="' +
      'width:36px;height:36px;' +
      'border:3px solid #ddd4bc;' +
      'border-top-color:#8f7f55;' +
      'border-radius:50%;' +
      'animation:__so-spin 0.7s linear infinite;' +
    '"></div>' +
    '<div style="' +
      'font-family:DM Sans,sans-serif;' +
      'font-size:12px;' +
      'font-weight:600;' +
      'color:#8e9396;' +
      'letter-spacing:0.3px;' +
    '">Loading...</div>' +
    '<style>' +
      '@keyframes __so-spin {' +
        'to { transform: rotate(360deg); }' +
      '}' +
    '</style>';

  document.body.insertBefore(overlay, document.body.firstChild);
}
})();


/* ════════════════════════════════════════════════════════════
   LOGIN PAGE REDESIGN
   Only runs on body.pagelayout-login / #page-login-index
   Hides Moodle's default layout and injects a split-screen design.
   ════════════════════════════════════════════════════════════ */
(function() {
  var body = document.body;
  if (!body) return;
  var bodyId    = body.id || '';
  var bodyClass = body.className || '';

  var isLoginPage = bodyClass.indexOf('pagelayout-login') > -1 ||
                    bodyId === 'page-login-index';
  if (!isLoginPage) return;

  function buildLogin() {
    if (document.getElementById('so-login-page')) return;

    /* Wait for form to exist */
    var form       = document.getElementById('login');
    var usernameEl = document.getElementById('username');
    var passwordEl = document.getElementById('password');
    var submitBtn  = document.getElementById('loginbtn');
    if (!form || !usernameEl || !submitBtn) return false;

    var logoImg    = document.getElementById('logoimage');
    var forgotLink = document.querySelector('.login-form-forgotpassword a');
    var tokenInput = form.querySelector('input[name="logintoken"]');

    /* Build overlay */
    var pg = document.createElement('div');
    pg.id  = 'so-login-page';
    pg.innerHTML =
      /* LEFT — hero */
      '<div id="so-login-hero">' +
        '<div id="so-hero-img"></div>' +
        '<div id="so-hero-content">' +
          '<div id="so-hero-badge">' +
            '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" width="11" height="11"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>' +
            'Smile On Academy' +
          '</div>' +
          '<h1 id="so-hero-headline">Your Smile On<br>journey begins<br>today.</h1>' +
          '<p id="so-hero-sub">Access your training modules, track your progress, and earn your certificates — all in one place.</p>' +
          '<div id="so-hero-stats">' +
            '<div class="so-stat"><span class="so-stat-num">30+</span><span class="so-stat-lbl">Courses</span></div>' +
            '<span class="so-stat-div"></span>' +
            '<div class="so-stat"><span class="so-stat-num">100%</span><span class="so-stat-lbl">Online</span></div>' +
            '<span class="so-stat-div"></span>' +
            '<div class="so-stat"><span class="so-stat-num">5 ★</span><span class="so-stat-lbl">Rated</span></div>' +
          '</div>' +
        '</div>' +
      '</div>' +

      /* RIGHT — form */
      '<div id="so-login-right">' +
        '<div id="so-login-logo-wrap"></div>' +
        '<div id="so-login-heading">' +
          '<h2>Welcome back</h2>' +
          '<p>Sign in to your academy account</p>' +
        '</div>' +
        '<div id="so-login-fields">' +
          '<div class="so-login-field-group">' +
            '<label class="so-login-label" for="username">Username</label>' +
            '<div class="so-login-input-wrap" id="so-un-wrap">' +
              '<span class="so-login-icon"><svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" width="15" height="15"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg></span>' +
            '</div>' +
          '</div>' +
          '<div class="so-login-field-group">' +
            '<label class="so-login-label" for="password">Password</label>' +
            '<div class="so-login-input-wrap" id="so-pw-wrap">' +
              '<span class="so-login-icon"><svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" width="15" height="15"><rect x="3" y="11" width="18" height="11" rx="2"/><path stroke-linecap="round" d="M7 11V7a5 5 0 0110 0v4"/></svg></span>' +
            '</div>' +
          '</div>' +
          '<div id="so-forgot-wrap"></div>' +
          '<div id="so-submit-wrap"></div>' +
          '<div id="so-hidden-wrap" style="display:none"></div>' +
        '</div>' +
      '</div>';

        // At the end of buildLogin(), after appending pg:
    document.body.appendChild(pg);
    var g = document.getElementById('__so-login-overlay');
    if (g) g.remove();
    var s = document.getElementById('__so-login-flash-guard');
    if (s) s.remove();

    /* Move logo */
    var logoWrap = document.getElementById('so-login-logo-wrap');
    if (logoImg && logoWrap) {
      var cl = logoImg.cloneNode(true);
      cl.removeAttribute('class');
      cl.style.cssText = 'max-width:340px;max-height:48px;object-fit:contain;display:block;';
      logoWrap.appendChild(cl);
    }

    /* Move username input */
    var unWrap = document.getElementById('so-un-wrap');
    if (unWrap && usernameEl) {
      usernameEl.removeAttribute('class');
      usernameEl.style.cssText = 'all:unset;flex:1;height:46px;padding:0 14px 0 42px;font-family:DM Sans,sans-serif;font-size:14px;color:#333F48;background:transparent;width:100%;box-sizing:border-box;';
      unWrap.appendChild(usernameEl);
    }

    /* Move password (with toggle wrapper) */
    var pwWrap = document.getElementById('so-pw-wrap');
    var toggleWrap = form.querySelector('.toggle-sensitive-wrapper');
    if (pwWrap && toggleWrap) {
      toggleWrap.style.cssText = 'all:unset;display:flex;flex:1;align-items:center;';
      passwordEl.removeAttribute('class');
      passwordEl.style.cssText = 'all:unset;flex:1;height:46px;padding:0 44px 0 42px;font-family:DM Sans,sans-serif;font-size:14px;color:#333F48;background:transparent;width:100%;box-sizing:border-box;';
      var toggleBtn = toggleWrap.querySelector('.toggle-sensitive-btn');
      if (toggleBtn) {
        toggleBtn.style.cssText = 'all:unset;position:absolute;right:12px;cursor:pointer;color:#C9CCCE;display:flex;align-items:center;transition:color .15s;';
        toggleBtn.addEventListener('mouseover', function(){ toggleBtn.style.color = '#8F7F55'; });
        toggleBtn.addEventListener('mouseout',  function(){ toggleBtn.style.color = '#C9CCCE'; });
      }
      pwWrap.style.position = 'relative';
      pwWrap.appendChild(toggleWrap);
    } else if (pwWrap && passwordEl) {
      passwordEl.removeAttribute('class');
      passwordEl.style.cssText = 'all:unset;flex:1;height:46px;padding:0 14px 0 42px;font-family:DM Sans,sans-serif;font-size:14px;color:#333F48;background:transparent;width:100%;box-sizing:border-box;';
      pwWrap.appendChild(passwordEl);
    }

    /* Forgot link */
    var forgotWrap = document.getElementById('so-forgot-wrap');
    if (forgotWrap && forgotLink) {
      forgotWrap.appendChild(forgotLink);
    } else if (forgotWrap) {
      forgotWrap.innerHTML = '<a href="/login/forgot_password.php" style="font-size:12px;color:#8F7F55;font-weight:600;text-decoration:none;">Forgot password?</a>';
    }

    /* Submit button */
    var submitWrap = document.getElementById('so-submit-wrap');
    if (submitWrap && submitBtn) {
      submitBtn.removeAttribute('class');
      submitWrap.appendChild(submitBtn);
    }

    /* Hidden inputs */
    var hiddenWrap = document.getElementById('so-hidden-wrap');
    if (hiddenWrap && tokenInput) {
      hiddenWrap.appendChild(tokenInput.cloneNode(true));
    }


        /* Shared submit handler */
    /* Shared submit handler */
    function doSubmit() {
      var f = document.createElement('form');
      f.method = 'post';
      f.action = 'https://smileon.rinseai.com.au/login/index.php';
      var add = function(n, v) {
        var i = document.createElement('input');
        i.type = 'hidden'; i.name = n; i.value = v;
        f.appendChild(i);
      };
      var un = document.getElementById('username');
      var pw = document.getElementById('password');
      if (un) add('username', un.value);
      if (pw) add('password', pw.value);
      if (tokenInput) add('logintoken', tokenInput.value);
      document.body.appendChild(f);
      f.submit();
    }

    /* Wire up submit button */
    if (submitBtn) {
      submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        doSubmit();
      });
    }
/* Wire up Enter key — use delegation on containers to handle toggle-wrapper nesting */
    function onEnterKey(e) {
      if (e.key === 'Enter' || e.keyCode === 13) {
        e.preventDefault();
        doSubmit();
      }
    }

    var unInput = document.getElementById('username');
    if (unInput) unInput.addEventListener('keydown', onEnterKey);

    // Attach to the pw wrapper div, not the input itself
    var pwWrapEl = document.getElementById('so-pw-wrap');
    if (pwWrapEl) pwWrapEl.addEventListener('keydown', onEnterKey);

    /* Ken Burns effect */
    setTimeout(function() {
      var img = document.getElementById('so-hero-img');
      if (img) { img.style.transition = 'transform 8s ease'; img.style.transform = 'scale(1.04)'; }
    }, 100);
  }

  /* Retry until DOM ready */
  var att = 0;
  function tryBuild() {
    if (document.getElementById('so-login-page')) return;
    var r = buildLogin();
    if (r === false && ++att < 20) setTimeout(tryBuild, 200);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tryBuild);
  else tryBuild();
  window.addEventListener('load', function() { if (!document.getElementById('so-login-page')) tryBuild(); });
})();


document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.style.visibility = 'hidden';
});

window.addEventListener('load', function() {
    window.dispatchEvent(new Event('resize'));
    void document.documentElement.offsetHeight;
    document.documentElement.style.visibility = 'visible';
});

window.addEventListener('pageshow', function() {
    document.documentElement.style.visibility = 'hidden';
    setTimeout(function() {
        window.dispatchEvent(new Event('resize'));
        void document.documentElement.offsetHeight;
        document.documentElement.style.visibility = 'visible';
    }, 100);
});



  
(function () {
  'use strict';

  var body      = document.body;
  if (!body) return;
  var bodyId    = body.id || '';
  var bodyClass = body.className || '';
  var path      = window.location.pathname;

  /* ── Pages where sidebar must NOT show ── */
  var HIDE_LAYOUTS = ['pagelayout-login','pagelayout-secure','pagelayout-popup',
                      'pagelayout-embedded','pagelayout-maintenance','pagelayout-print'];
  var HIDE_IDS     = ['page-login-index','page-login-signup',
                      'page-login-forgot_password','page-login-change_password'];
  var HIDE_PATHS   = ['/login/', '/lib/', '/theme/'];

  var shouldHide = false;
  HIDE_LAYOUTS.forEach(function(c)  { if (bodyClass.indexOf(c)  > -1) shouldHide = true; });
  HIDE_IDS.forEach(function(id)     { if (bodyId === id)              shouldHide = true; });
  HIDE_PATHS.forEach(function(p)    { if (path.indexOf(p) === 0)      shouldHide = true; });
  if (shouldHide) return;

  /* ── Pages where sidebar SHOULD show ── */
var SHOW_LAYOUTS = ['pagelayout-frontpage','pagelayout-course','pagelayout-standard',
                    'pagelayout-admin','pagelayout-mydashboard','pagelayout-coursecategory','page-admin-cohort-index'];
var SHOW_IDS = ['page-user-profile', 'page-admin-cohort-index'];

var shouldShow = false;
SHOW_LAYOUTS.forEach(function(c) { if (bodyClass.indexOf(c) > -1) shouldShow = true; });
SHOW_IDS.forEach(function(id) { if (bodyId === id) shouldShow = true; });
if (!shouldShow) return;

  /* ── Show sidebar ── */
  var sidebar = document.getElementById('so-sidebar');
  if (sidebar) sidebar.style.display = 'flex';

  /* ── Shift page content ── */
  function setShift(px) {
    var s = document.getElementById('so-shift-style');
    if (!s) { s = document.createElement('style'); s.id = 'so-shift-style'; document.head.appendChild(s); }
    if (px > 0) {
      s.textContent =
        '#page, #page-wrapper {' +
        '  margin-left: ' + px + 'px !important;' +
        '  width: calc(100vw - ' + px + 'px) !important;' +
        '  min-width: 0 !important;' +
        '  overflow-x: hidden !important;' +
        '  transition: margin-left 0.2s ease, width 0.2s ease;' +
        '}' +
        'body { overflow-x: hidden !important; }';
    } else {
      s.textContent = '#page, #page-wrapper { margin-left: 0 !important; width: 100% !important; max-width: 100% !important; } body { overflow-x: hidden !important; }';
    }
  }

  /* ── Hide Moodle top navbar and left drawer ── */
  var navbar = document.querySelector('.navbar');
  if (navbar) navbar.style.display = 'none';
  ['#nav-drawer', '.drawer.drawer-left'].forEach(function(sel) {
    var el = document.querySelector(sel);
    if (el) el.style.display = 'none';
  });

  /* ── Active nav item highlighting ── */
  document.querySelectorAll('.so-nav-item').forEach(function(a) {
    a.classList.remove('so-active');
    var ap = a.getAttribute('data-path') || '';
    if (ap === '/' && (path === '/' || path === '/index.php')) {
      a.classList.add('so-active');
    } else if (ap.length > 1 && path.indexOf(ap) === 0) {
      a.classList.add('so-active');
    }
  });

  /* ── Hide unwanted secondary nav items (Filters / Content bank / Course reuse) ── */
  var KILL_KEYS  = ['filters', 'contentbank', 'coursereuse'];
  var KILL_TEXTS = ['filters', 'content bank', 'course reuse'];
  var KILL_CSS   = 'display:none!important;visibility:hidden!important;width:0!important;height:0!important;overflow:hidden!important;padding:0!important;margin:0!important;';

  function killUnwantedNavItems() {
    KILL_KEYS.forEach(function(k) {
      document.querySelectorAll('li[data-key="' + k + '"]').forEach(function(el) {
        el.style.cssText = KILL_CSS;
      });
    });
    document.querySelectorAll('.secondary-navigation a, .secondary-navigation .dropdown-item').forEach(function(a) {
      var txt = (a.textContent || '').trim().toLowerCase();
      if (KILL_TEXTS.indexOf(txt) > -1) {
        var li = a.closest('li') || a.parentElement;
        if (li) li.style.cssText = KILL_CSS;
        a.style.cssText = KILL_CSS;
      }
    });
  }

  // killUnwantedNavItems();
  // new MutationObserver(killUnwantedNavItems)
  //   .observe(document.documentElement, { childList: true, subtree: true });
  var t = 0;
  // var ki = setInterval(function() { killUnwantedNavItems(); if (++t > 10) clearInterval(ki); }, 500);

  /* ── Responsive sidebar ── */
  function applyResponsive() {
    if (!sidebar) return;
    var w = window.innerWidth;
    if (w <= 1100) {
      sidebar.style.display = 'flex';
      sidebar.style.width = '60px';
      setShift(60);
      sidebar.querySelectorAll('.so-nav-item span, .so-sidebar-user-name, .so-sidebar-logout')
             .forEach(function(el) { el.style.display = 'none'; });
      sidebar.querySelectorAll('.so-nav-item')
             .forEach(function(el) { el.style.justifyContent = 'center'; el.style.padding = '11px 0'; });
      sidebar.querySelector('.so-sidebar-logo').style.justifyContent = 'center';
      sidebar.querySelector('.so-sidebar-user').style.justifyContent = 'center';
      var img = sidebar.querySelector('.so-sidebar-logo img');
      if (img) {
        img.style.width = '36px';
        img.src = 'https://rinseaistorageprod.blob.core.windows.net/lms-icons/Image(1).png';
      
      }
    } else {
      sidebar.style.display = 'flex';
      sidebar.style.width = '220px';
      setShift(220);
      sidebar.querySelectorAll('.so-nav-item span, .so-sidebar-user-name, .so-sidebar-logout')
             .forEach(function(el) { el.style.display = ''; });
      sidebar.querySelectorAll('.so-nav-item')
        .forEach(function (el) { el.style.justifyContent = ''; el.style.padding = ''; });
      
      var img = sidebar.querySelector('.so-sidebar-logo img');
      if (img) {
        img.style.width = '160px';
        img.src = 'https://rinseaistorageprod.blob.core.windows.net/lms-icons/smileon Logo.png';
      
      }
    }
  }

  applyResponsive();
  window.addEventListener('resize', applyResponsive);

  /* ════════════════════════════════════════════════════════
     FRONTPAGE COURSE CARD GRID + CHIP FILTER
     Only runs on the front page
     ════════════════════════════════════════════════════════ */
  if (bodyClass.indexOf('pagelayout-frontpage') === -1) return;

  /* Course-ID → cover image map */
  var IMAGES = {
    "30":"https://rinseaistorageprod.blob.core.windows.net/lms-icons/employee0hand-book.png",
    "29":"https://rinseaistorageprod.blob.core.windows.net/lms-icons/2-WHS-Induction.png?w=400&h=200&fit=crop",
    "39":"https://rinseaistorageprod.blob.core.windows.net/lms-icons/infection-cntraol-induction.jpg",
    "40":"https://rinseaistorageprod.blob.core.windows.net/lms-icons/4-DA-introduction-training.jpg",
    "20":"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop",
    "22":"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=200&fit=crop",
    "38":"https://rinseaistorageprod.blob.core.windows.net/lms-icons/7-carestack-pt-communication.jpg",
    "37":"https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop",
    "36":"https://rinseaistorageprod.blob.core.windows.net/lms-icons/9-carestack-clipboard.jpg",
    "35":"https://rinseaistorageprod.blob.core.windows.net/lms-icons/10-Patient-Appointment.jpg",
    "34":"https://rinseaistorageprod.blob.core.windows.net/lms-icons/11-steri-tracking.png",
    "15":"https://rinseaistorageprod.blob.core.windows.net/lms-icons/12-hand-hygiene.jpg",
    "13":"https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=200&fit=crop",
    "14":"https://rinseaistorageprod.blob.core.windows.net/lms-icons/13-ppe.jpg",
    "16":"https://rinseaistorageprod.blob.core.windows.net/lms-icons/ultrasonic.webp?w=400&h=200&fit=crop",
    "12":"https://rinseaistorageprod.blob.core.windows.net/lms-icons/steriliser1.jpg?w=400&h=200&fit=crop",
    "23":"https://rinseaistorageprod.blob.core.windows.net/lms-icons/cattani.png?w=400&h=200&fit=crop",
    "21":"https://rinseaistorageprod.blob.core.windows.net/lms-icons/A-dec-dental-chair.jpg?w=400&h=200&fit=crop",
    "19":"https://rinseaistorageprod.blob.core.windows.net/lms-icons/m4103276-800x480px.jpeg?w=400&h=200&fit=crop",
    "17":"https://rinseaistorageprod.blob.core.windows.net/lms-icons/M4103416_Benelux_Variante_HG_monitor_schwarz-800x480px.jpg?w=400&h=200&fit=crop",
    "18":"https://rinseaistorageprod.blob.core.windows.net/lms-icons/PRIMUS-1058S-life_Greenery_4-3-3000px.png?w=400&h=200&fit=crop",
    "9" :"https://rinseaistorageprod.blob.core.windows.net/lms-icons/planmeca_coi_i5.jpg?w=400&h=200&fit=crop",
    "24":"https://rinseaistorageprod.blob.core.windows.net/lms-icons/23-handpiece-manual-oiling.jpg?w=400&h=200&fit=crop",
    "25":"https://rinseaistorageprod.blob.core.windows.net/lms-icons/Lubrina-Oiling-Machine-1.jpg?w=400&h=200&fit=crop",
    "28":"https://rinseaistorageprod.blob.core.windows.net/lms-icons/NSK-i-Care-img.png?w=400&h=200&fit=crop",
    "11":"https://rinseaistorageprod.blob.core.windows.net/lms-icons/41415_2025_8657_Fig1_HTML.jpg?w=400&h=200&fit=crop",
    "42":"https://rinseaistorageprod.blob.core.windows.net/lms-icons/Artboard-1.png?w=400&h=200&fit=crop",
    "44":"https://rinseaistorageprod.blob.core.windows.net/lms-icons/PACU-Nurse.jpg?w=400&h=200&fit=crop",
    "41":"https://rinseaistorageprod.blob.core.windows.net/lms-icons/dndc.png?w=400&h=200&fit=crop"
  };

  function applyImage(el, id) {
    var url = IMAGES[String(id)];
    if (url) {
      el.style.backgroundImage    = 'url(' + url + ')';
      el.style.backgroundSize     = 'cover';
      el.style.backgroundPosition = 'center';
    }
  }

  var built = false;

  function buildGrid() {
    if (built) return;
    var fl = document.getElementById('frontpage-course-list');
    if (!fl || !fl.querySelector('h4')) return;
    built = true;

    /* Collect category groups from the existing Moodle structure */
    var groups = [];
    var kids   = Array.from(fl.children);
    for (var i = 0; i < kids.length; i++) {
      if (kids[i].tagName === 'H4') {
        var grid = kids[i + 1];
        if (grid && grid.classList.contains('category-group')) {
          groups.push({
            label : kids[i].textContent.trim(),
            h4    : kids[i],
            grid  : grid,
            count : grid.querySelectorAll('.coursebox').length
          });
        }
      }
    }
    if (!groups.length) return;

    /* Build flat grid wrapper */
    var wrap     = document.createElement('div');
    wrap.id      = 'so-flat-grid';
    var allCards = [];

    groups.forEach(function(g) {
      Array.from(g.grid.querySelectorAll('.coursebox')).forEach(function(box) {
        var clone = box.cloneNode(true);

        /* Apply cover image */
        var ci = clone.querySelector('.courseimage');
        if (ci) applyImage(ci, box.getAttribute('data-courseid'));

        /* Inject category tag */
        var info = clone.querySelector('.info');
        if (info && !info.querySelector('.so-card-cat')) {
          var tag       = document.createElement('div');
          tag.className = 'so-card-cat';
          tag.textContent = g.label;
          info.insertBefore(tag, info.firstChild);
        }

        clone.dataset.socat = g.label;
        wrap.appendChild(clone);
        allCards.push({ node: clone, cat: g.label });
      });

      /* Hide original Moodle group headings and grids */
      g.h4.style.display  = 'none';
      g.grid.style.display = 'none';
    });

    /* ── Chip filter bar ── */
    var bar   = document.createElement('div');
    bar.id    = 'so-cat-filter';

    function setFilter(cat) {
      bar.querySelectorAll('.so-chip').forEach(function(c) { c.classList.remove('so-active'); });
      allCards.forEach(function(item) {
        item.node.style.display = (!cat || item.cat === cat) ? '' : 'none';
      });
    }

    /* "All" chip */
    var allChip       = document.createElement('div');
    allChip.className = 'so-chip so-active';
    allChip.innerHTML = 'All <span class="so-chip-count">' + allCards.length + '</span>';
    allChip.onclick   = function() { allChip.classList.add('so-active'); setFilter(null); };
    bar.appendChild(allChip);

    /* Per-category chips */
    groups.forEach(function(g) {
      var chip       = document.createElement('div');
      chip.className = 'so-chip';
      chip.innerHTML = g.label + ' <span class="so-chip-count">' + g.count + '</span>';
      chip.onclick   = function() {
        allChip.classList.remove('so-active');
        chip.classList.add('so-active');
        setFilter(g.label);
      };
      bar.appendChild(chip);
    });

    /* Insert chip bar and flat grid after the page's <h2> heading */
    var h2 = fl.querySelector('h2');
    if (h2) {
      h2.after(bar);
      bar.after(wrap);
    } else {
      fl.insertBefore(wrap, fl.firstChild);
    }
  }

  /* Retry until Moodle has rendered the course list */
  var attempts = 0;
  function tryBuild() {
    if (built) return;
    buildGrid();
    if (!built && ++attempts < 25) setTimeout(tryBuild, 400);
  }
  setTimeout(tryBuild, 200);
  window.addEventListener('load', function() { if (!built) setTimeout(tryBuild, 300); });

  })();



// COURSE PAGE ENHANCEMENTS
function getCertInfo() {
  var certLink = '';
  var certRestricted = false;
  var certRestrictionMsg = '';

  document.querySelectorAll('.courseindex-item').forEach(function (item) {
    var link = item.querySelector('a.courseindex-link');
    if (!link || !/certificate/i.test(link.textContent)) return;

    certLink = link.href;

    var isDimmed =
  link.getAttribute('aria-disabled') === 'true' ||
  !link.href ||
  link.href === '#' ||
  link.href === window.location.href + '#' ||
  (/customcert|certificate/i.test(link.href) === false && item.classList.contains('dimmed'));

    var hasAvailInfo =
      !!item.querySelector('.availabilityinfo, [data-region="availability-info"]');

    var cmid = (item.dataset.id || item.getAttribute('data-id') || '');
    if (!cmid) {
      var m = (link.href || '').match(/[?&]id=(\d+)/);
      if (m) cmid = m[1];
    }
    if (cmid) {
      var mainItem = document.querySelector(
        'li[data-id="' + cmid + '"], li.activity[data-cmid="' + cmid + '"]'
      );
      if (mainItem) {
        if (
          mainItem.classList.contains('restricted') ||
          mainItem.classList.contains('conditionalhidden') ||
          mainItem.classList.contains('dimmed_text')
        ) {
          isDimmed = true;
        }
        var ai = mainItem.querySelector('.availabilityinfo');
        if (ai) {
          var aiClone = ai.cloneNode(true);
          aiClone.querySelectorAll('.showmore, .showless, .accesshide, a').forEach(function(el) {
            el.remove();
          });
          var rawMsg = aiClone.textContent.replace(/show\s*more|show\s*less/gi, '').trim();
          rawMsg = rawMsg.replace(/\s{2,}/g, ' ');
          var firstCondition = rawMsg.match(/Not available unless[^.]+\./i);
          certRestrictionMsg = firstCondition
            ? firstCondition[0]
            : rawMsg.slice(0, 120) + (rawMsg.length > 120 ? '…' : '');
        }
      }
    }

    certRestricted = isDimmed || hasAvailInfo;
  });

  return { certLink: certLink, restricted: certRestricted, msg: certRestrictionMsg };
}

(function () {
  var body = document.body;
  if (!body) return;
  var bodyClass = body.className || '';
  // Match all layouts reachable via the course secondary nav:
  // incourse/course  = activity & course pages
  // report/admin     = grades, reports, question banks, badges, competencies etc.
  // standard         = participants, course completion, some settings pages
  // base             = question banks, content bank, and other tool pages
  var isCourseRelatedPage =
    bodyClass.indexOf("pagelayout-incourse") > -1 ||
    bodyClass.indexOf("pagelayout-course") > -1 ||
    bodyClass.indexOf("pagelayout-report") > -1 ||
    bodyClass.indexOf("pagelayout-admin") > -1 ||
    bodyClass.indexOf("pagelayout-standard") > -1 ||
    bodyClass.indexOf("pagelayout-embedded") > -1 ||
    bodyClass.indexOf("pagelayout-base") > -1;

  if (!isCourseRelatedPage) return;

  // Extra guard: must have a course context — either sessionStorage has a course ID,
  // or the URL contains a known course-related path segment
  var hasCourseContext = (function() {
    try { if (sessionStorage.getItem('so_course_id')) return true; } catch(e) {}
    var p = window.location.href;
    return (
      p.indexOf('course/view.php') > -1 ||
      p.indexOf('course/edit.php') > -1 ||
      p.indexOf('user/index.php') > -1 ||
      p.indexOf('grade/report') > -1 ||
      p.indexOf('course/overview') > -1 ||
      p.indexOf('report/view.php') > -1 ||
      p.indexOf('question/banks') > -1 ||
      p.indexOf('question/bank') > -1 ||
      p.indexOf('contentbank/') > -1 ||
      p.indexOf('course/completion') > -1 ||
      p.indexOf('badges/index') > -1 ||
      p.indexOf('backup/view') > -1 ||
      p.indexOf('tool/lp/coursecompetencies') > -1 ||
      p.indexOf('filter/manage') > -1 ||
      p.indexOf('mod/lti/coursetools') > -1 ||
      p.indexOf('/mod/') > -1
    );
  })();

  if (!hasCourseContext) return;

  /* Hide original sidebar + navbar */
  var sb = document.getElementById("so-sidebar");
  if (sb) sb.style.display = "none";
  var ss = document.getElementById("so-shift-style");
  if (ss) ss.textContent = "#page,#page-wrapper{margin-left:0!important;}";
  var nb = document.querySelector(".navbar");
  if (nb) nb.style.display = "none";

  /* ── Capture nav + course ID from course/view.php before redirect fires ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', captureNavFromCourseView);
  } else {
    captureNavFromCourseView();
  }

  /* ── Extract course ID dynamically ── */
  function getCourseId() {
    // 1. On course/view.php the ID is directly in the URL as id=
    var onCourseView = window.location.href.indexOf('course/view.php') !== -1;
    if (onCourseView) {
      var m = window.location.href.match(/[?&]id=(\d+)/);
      if (m && m[1]) return m[1];
    }

    // 1b. Some pages (question banks, content bank, etc.) use courseid= in their URL
    var directCourseId = window.location.href.match(/[?&]courseid=(\d+)/);
    if (directCourseId && directCourseId[1]) {
      try { sessionStorage.setItem('so_course_id', directCourseId[1]); } catch(e) {}
      return directCourseId[1];
    }

    // 2. Activity/nav pages — read from sessionStorage (saved during course/view.php visit)
    try {
      var stored = sessionStorage.getItem('so_course_id');
      if (stored) return stored;
    } catch(e) {}

    // 3. Fallback: scan page links for explicit courseid= param
    var allLinks = document.querySelectorAll("a[href]");
    for (var i = 0; i < allLinks.length; i++) {
      var href = allLinks[i].href || "";
      var cm = href.match(/[?&]courseid=(\d+)/);
      if (cm && cm[1]) return cm[1];
      if (href.indexOf('/grade/report/') !== -1 || href.indexOf('/user/index.php') !== -1) {
        var gm = href.match(/[?&]id=(\d+)/);
        if (gm && gm[1]) return gm[1];
      }
    }

    // 4. Some Moodle themes expose data-courseid on <body>
    var bodyData = document.body.getAttribute("data-courseid") || "";
    if (bodyData) return bodyData;

    return null;
  }

  /* ── On course/view.php: scrape nav items & course ID into sessionStorage
        before the redirect script navigates away ── */
  function captureNavFromCourseView() {
    if (window.location.href.indexOf('course/view.php') === -1) return;

    // Save course ID
    var m = window.location.href.match(/[?&]id=(\d+)/);
    if (!m || !m[1]) return;
    try { sessionStorage.setItem('so_course_id', m[1]); } catch(e) {}

    // Scrape nav items from the DOM — Moodle renders these synchronously
    var mainItems = [];
    var moreItems = [];

    var mainLinks = document.querySelectorAll(
      '.secondary-navigation .more-nav > li:not([data-region="morebutton"]) a[role="menuitem"]'
    );
    
    mainLinks.forEach(function(a) {
      var label = a.textContent.trim();
      var href  = a.href || "";
      if (!label || !href) return;
      // Skip "Course" on course pages — it just reloads the same page
      if (label.toLowerCase() === "course") return;
      mainItems.push({ label: label, href: href });
    });

    var dropLinks = document.querySelectorAll(
      '.secondary-navigation [data-region="moredropdown"] a[role="menuitem"]'
    );
    dropLinks.forEach(function(a) {
      var label = a.textContent.trim();
      var href  = a.href || "";
      if (!label || !href) return;
      moreItems.push({ label: label, href: href });
    });

    if (mainItems.length || moreItems.length) {
      try {
        sessionStorage.setItem('so_nav_items', JSON.stringify({ main: mainItems, more: moreItems }));
      } catch(e) {}
    }
  }

  /* ── Build secondary nav HTML from sessionStorage (captured on course/view.php) ── */
  function buildSecondaryNav() {
    var stored = null;
    try { stored = JSON.parse(sessionStorage.getItem('so_nav_items') || 'null'); } catch(e) {}

    // Fallback: scrape current page if sessionStorage is empty (e.g. direct navigation)
    if (!stored) {
      var isCoursePage = window.location.href.indexOf('course/view.php') !== -1;
      var mainItems = [];
      var moreItems = [];

      document.querySelectorAll(
        '.secondary-navigation .more-nav > li:not([data-region="morebutton"]) a[role="menuitem"]'
      ).forEach(function(a) {
        var label = a.textContent.trim();
        var href  = a.href || "";
        if (!label || !href) return;
        if (isCoursePage && label.toLowerCase() === "course") return;
        mainItems.push({ label: label, href: href });
      });

      document.querySelectorAll(
        '.secondary-navigation [data-region="moredropdown"] a[role="menuitem"]'
      ).forEach(function(a) {
        var label = a.textContent.trim();
        var href  = a.href || "";
        if (!label || !href) return;
        moreItems.push({ label: label, href: href });
      });

      stored = { main: mainItems, more: moreItems };
    }

    if (!stored.main.length && !stored.more.length) return "";
          
    var itemsToRender = stored.main.length === 4 ? stored.main.slice(1) : stored.main;

    var mainHTML = itemsToRender.map(function(item) {
      var active = "";
      try {
        var u = new URL(item.href);
        if (u.pathname === window.location.pathname && u.search === window.location.search) {
          active = " so-snav-active";
        }
      } catch(e) {}
      return '<a class="so-snav-link' + active + '" href="' + item.href + '">' + item.label + '</a>';
    }).join("");

    var moreHTML = stored.more.map(function(item) {
      return '<a class="so-snav-drop-link" href="' + item.href + '">' + item.label + '</a>';
    }).join("");

    var moreDropHTML = stored.more.length
      ? '<div class="so-snav-more-wrap">' +
          '<button class="so-snav-link so-snav-more-btn" id="so-snav-more-btn">More ' +
            '<svg viewBox="0 0 24 24" fill="none" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>' +
          '</button>' +
          '<div class="so-snav-dropdown" id="so-snav-dropdown">' + moreHTML + '</div>' +
        '</div>'
      : "";

    return '<nav id="so-secondary-nav">' + mainHTML + moreDropHTML + '</nav>';
  }

  function build() {
    if (document.getElementById("so-course-page")) return;

    var sections = document.querySelectorAll(".courseindex-section");
    if (!sections.length) return false;

    /* ── Course name ── */
    var courseName = "";
    document.querySelectorAll('a[href*="/course/view.php"]').forEach(function(l) {
      var t = l.getAttribute("title") || l.textContent.trim();
      if (t && t.length > courseName.length) courseName = t;
    });
    if (!courseName || courseName.length < 3) {
      var tp = document.title.split("|");
      if (tp.length >= 2) courseName = tp[1].trim();
    }
    if (!courseName || courseName.length < 3) courseName = "Course";

    /* ── Activity name ── */
    var crumbs = document.querySelectorAll("ol.breadcrumb .breadcrumb-item");
    var actName = "";
    if (crumbs.length >= 1) actName = crumbs[crumbs.length - 1].textContent.trim();
    if (!actName) actName = document.title.split("|")[0].split(":").pop().trim();

    /* ── Progress ── */
    var allCM = document.querySelectorAll(".courseindex-item:not(.courseindex-section-title)");
    var doneCM = document.querySelectorAll(".completioninfo.completion-complete");
    var pct = allCM.length > 0 ? Math.round((doneCM.length / allCM.length) * 100) : 0;

    /* ── Next activity ── */
    var allActivityLinks = [];
    document.querySelectorAll(".courseindex-section").forEach(function(sec) {
      sec.querySelectorAll("li.courseindex-item").forEach(function(item) {
        var link = item.querySelector("a.courseindex-link");
        if (link && link.href) allActivityLinks.push(link.href.split("#")[0]);
      });
    });
    var currentUrlClean = window.location.href.split("#")[0];
    var currentIdx = allActivityLinks.indexOf(currentUrlClean);
    var nextVideoUrl = (currentIdx >= 0 && currentIdx < allActivityLinks.length - 1)
      ? allActivityLinks[currentIdx + 1] : null;

    /* ── Sections panel HTML ── */
    var sectionsHTML = "";
    var currentUrl = window.location.href.split("#")[0];
    document.querySelectorAll(".courseindex-section").forEach(function(sec, sIdx) {
      if (sIdx === 0) return;
      var secLink = sec.querySelector(".courseindex-section-title a");
      var titleEl = sec.querySelector(".courseindex-section-title a, .courseindex-section-title");
      var secRaw  = secLink ? secLink.textContent.trim() : (titleEl ? titleEl.textContent.trim() : "Section " + sIdx);
      var secTitle = secRaw.replace(/expand\s*collapse/gi,"").replace(/highlighted/gi,"").replace(/\s{2,}/g," ").trim() || "Section " + sIdx;
      var itemsHTML = "";

      sec.querySelectorAll("li.courseindex-item").forEach(function(item) {
        var link = item.querySelector("a.courseindex-link");
        if (!link) return;
        var isDone   = !!item.querySelector(".completion-complete");
        var isActive = link.href.split("#")[0] === currentUrl;
        var itemName = link.textContent.trim();
        var isCert   = /certificate/i.test(itemName);
        var href     = link.href;
        var dotCls   = isActive ? "so-dot active" : isDone ? "so-dot done" : "so-dot";
        var itemCls  = "so-panel-item" + (isActive ? " active" : "") + (isDone ? " watched" : "") + (isCert ? " so-cert-item" : "");
        var badge    = "";
        if (isActive) {
          badge = '<span class="so-item-badge so-badge-watching">Watching</span>';
        } else if (isDone && !isCert) {
          badge = '<span class="so-item-badge so-badge-done"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></span>';
        }
        if (isCert) {
          itemsHTML += '<div class="so-cert-row so-cert-trigger"><span class="' + itemCls + '"><span class="' + dotCls + '"></span><span class="so-item-name">' + itemName + '</span>' + badge + '</span></div>';
        } else {
          itemsHTML += '<a class="' + itemCls + '" href="' + href + '"><span class="' + dotCls + '"></span><span class="so-item-name">' + itemName + '</span>' + badge + '</a>';
        }
      });

      sectionsHTML += '<div class="so-panel-section">' + itemsHTML + '</div>';
    });

    /* ── Dynamic course ID & secondary nav ── */
    var courseId = getCourseId();
    var secondaryNavHTML = buildSecondaryNav();

    /* ── Build the wrapper ── */
    var wrapper = document.createElement("div");
    wrapper.id = "so-course-page";
    wrapper.innerHTML =
      '<div id="so-course-topbar">' +
        '<div id="so-topbar-left">' +
          '<button id="so-back-btn"><svg fill="none" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>Back to Home</button>' +
          '<span class="so-tb-divider"></span>' +
          '<span id="so-breadcrumb">' + courseName + ' &nbsp;/&nbsp; <strong>' + actName + '</strong></span>' +
        '</div>' +
        '<div id="so-topbar-right">' +
          (nextVideoUrl
            ? '<a id="so-next-btn" href="' + nextVideoUrl + '" class="so-topbar-action-btn"><svg fill="none" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>Watch Next</a>'
            : '<button id="so-next-btn" class="so-topbar-action-btn" disabled><svg fill="none" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>Watch Next</button>') +
        '</div>' +
      '</div>' +
      '<div id="so-course-body">' +
        '<div id="so-course-panel">' +
          '<div id="so-panel-header">' +
            '<div id="so-panel-course-meta"><h2 id="so-panel-course-title">' + courseName + '</h2></div>' +
            '<div id="so-panel-divider"></div>' +
            '<div id="so-panel-label-row"><span id="so-panel-label">Course Content</span></div>' +
          '</div>' +
          '<div id="so-panel-list">' + sectionsHTML + '</div>' +
        '</div>' +
        '<div id="so-moodle-slot">' +
          '<div id="so-slot-nav-bar">' + secondaryNavHTML + '</div>' +
        '</div>' +
      '</div>';

    document.body.appendChild(wrapper);

    /* ── Move Moodle's #page into our slot ── */
    var moodlePage = document.getElementById('page') || document.getElementById('page-wrapper');
    var slot = document.getElementById('so-moodle-slot');
    if (slot && moodlePage) {
      slot.appendChild(moodlePage);
    }

    /* ── Back button ── */
    document.getElementById('so-back-btn').addEventListener('click', function() {
      window.location.href = 'https://smileon.rinseai.com.au/';
    });

    /* ── Secondary nav More dropdown toggle ── */
    var moreBtn = document.getElementById('so-snav-more-btn');
    var moreDrop = document.getElementById('so-snav-dropdown');
    if (moreBtn && moreDrop) {
      moreBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        var isOpen = moreDrop.classList.contains('open');
        moreDrop.classList.toggle('open', !isOpen);
        moreBtn.classList.toggle('so-snav-active', !isOpen);
      });
      document.addEventListener('click', function() {
        moreDrop.classList.remove('open');
        moreBtn.classList.remove('so-snav-active');
      });
    }

    /* ── Certificate row click ── */
    var certTrigger = document.querySelector(".so-cert-trigger");
    if (certTrigger) {
      certTrigger.addEventListener("click", function () {
        var info = getCertInfo();

        if (!info.restricted && info.certLink) {
          window.location.href = info.certLink;
          return;
        }

        var sectionLink = document.querySelector(
          '.courseindex-section[data-number="3"] .courseindex-section-title a.courseindex-link'
        );
        if (sectionLink && sectionLink.href) {
          window.location.href = sectionLink.href;
          return;
        }

        var existing = document.getElementById("so-cert-modal");
        if (existing) existing.remove();
        var modal = document.createElement("div");
        modal.id = "so-cert-modal";
        modal.innerHTML =
          '<div id="so-cert-modal-box">' +
            '<div id="so-cert-modal-icon" class="locked">' +
              '<svg fill="none" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>' +
            '</div>' +
            '<h3 id="so-cert-modal-title">Certificate locked</h3>' +
            '<p id="so-cert-modal-msg">' + (info.msg || 'Complete all activities to unlock your certificate.') + '</p>' +
            '<button id="so-cert-modal-close">Got it</button>' +
          '</div>';

        document.getElementById("so-course-page").appendChild(modal);

        document.getElementById("so-cert-modal-close").addEventListener("click", function () {
          modal.remove();
        });
        modal.addEventListener("click", function (e) {
          if (e.target === modal) modal.remove();
        });
      });
    }

    /* ── CSS ── */
    var style = document.createElement('style');
    style.textContent = [
      '@import url("https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap");',
      '#so-course-page{position:fixed;inset:0;display:flex;flex-direction:column;font-family:"DM Sans",sans-serif;background:#eceef2;z-index:99999;overflow:hidden;}',

      /* ── Topbar ── */
      '#so-course-topbar{height:52px;min-height:52px;background:#fff;border-bottom:1.5px solid #eceef2;display:flex;align-items:center;justify-content:space-between;padding:0 16px 0 0;flex-shrink:0;box-shadow:0 1px 6px rgba(51,63,72,.06);gap:12px;}',
      '#so-topbar-left{display:flex;align-items:center;gap:12px;flex:1;min-width:0;overflow:hidden;}',
      '#so-back-btn{display:flex;align-items:center;justify-content:center;gap:5px;font-size:14px;height:52px;min-width:200px;padding:0 20px;font-weight:600;color:#ffffff;background:#8f7f55;border:none;cursor:pointer;white-space:nowrap;font-family:"DM Sans",sans-serif;transition:background .15s;flex-shrink:0;}',
      '#so-back-btn:hover{background:#7a6c47;color:#fff;}',
      '#so-back-btn svg{width:16px;height:16px;stroke:currentColor;}',
      '.so-tb-divider{width:1px;height:20px;background:#eceef2;flex-shrink:0;}',
      '#so-breadcrumb{font-size:12px;color:#8e9396;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}',
      '#so-breadcrumb strong{color:#333f48;font-weight:600;}',
      '#so-topbar-right{display:flex;align-items:center;gap:10px;flex-shrink:0;padding-right:16px;}',

      /* ── Secondary Nav (slot bar) ── */
      '#so-slot-nav-bar{position:sticky;top:0;z-index:50;background:#fff;border-bottom:1.5px solid #eceef2;box-shadow:0 1px 4px rgba(51,63,72,.06);display:flex;align-items:center;padding:0 20px;}',
      '#so-secondary-nav{display:flex;align-items:center;gap:0;height:44px;width:100%;}',
      '.so-snav-link{display:inline-flex;align-items:center;gap:4px;padding:0 13px;height:44px;font-family:"DM Sans",sans-serif;font-size:13px;font-weight:500;color:#637380;text-decoration:none;white-space:nowrap;border-bottom:2px solid transparent;transition:color .15s,border-color .15s;cursor:pointer;background:none;border-top:none;border-left:none;border-right:none;border-radius:0;}',
      '.so-snav-link:hover{color:#333f48;text-decoration:none;}',
      '.so-snav-active{color:#8f7f55 !important;border-bottom-color:#8f7f55 !important;font-weight:600 !important;}',

      /* More dropdown */
      '.so-snav-more-wrap{position:relative;height:44px;display:flex;align-items:center;margin-left:auto;}',
      '.so-snav-more-btn{display:inline-flex;align-items:center;gap:4px;}',
      '.so-snav-more-btn svg{width:12px;height:12px;stroke:currentColor;transition:transform .2s;}',
      '.so-snav-more-btn.so-snav-active svg{transform:rotate(180deg);}',
      '.so-snav-dropdown{display:none;position:absolute;top:calc(100% + 2px);right:0;background:#fff;border:1.5px solid #eceef2;border-radius:10px;box-shadow:0 8px 24px rgba(51,63,72,.12);min-width:190px;z-index:200;padding:6px;}',
      '.so-snav-dropdown.open{display:block;}',
      '.so-snav-drop-link{display:block;padding:8px 14px;font-family:"DM Sans",sans-serif;font-size:13px;font-weight:500;color:#637380;text-decoration:none;border-radius:6px;white-space:nowrap;transition:background .12s,color .12s;}',
      '.so-snav-drop-link:hover{background:#faf8f3;color:#333f48;text-decoration:none;}',

      /* Watch Next button */
      '.so-topbar-action-btn{display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:8px;font-family:"DM Sans",sans-serif;font-size:12px;font-weight:600;cursor:pointer;text-decoration:none;white-space:nowrap;transition:background .15s,color .15s;background:#333f48;color:#fff;border:none;}',
      '.so-topbar-action-btn svg{width:13px;height:13px;stroke:currentColor;flex-shrink:0;}',
      '.so-topbar-action-btn:hover:not(:disabled){background:#8f7f55;color:#fff;text-decoration:none;}',
      '.so-topbar-action-btn:disabled{opacity:.38;cursor:not-allowed;pointer-events:none;}',

      /* ── Body / Panel ── */
      '#so-course-body{display:flex;flex:1;overflow:hidden;min-height:0;}',
      '#so-course-panel{width:260px;min-width:260px;background:#fff;border-right:1.5px solid #eceef2;display:flex;flex-direction:column;overflow:hidden;flex-shrink:0;}',
      '#so-panel-header{padding:0;border-bottom:1.5px solid #eceef2;flex-shrink:0;}',
      '#so-panel-course-meta{padding:14px 16px;}',
      '#so-panel-course-title{font-family:"Sora",sans-serif;font-size:14px;font-weight:700;color:#333f48;margin:0;letter-spacing:-.2px;line-height:1.3;}',
      '#so-panel-divider{height:1px;background:#eceef2;}',
      '#so-panel-label-row{display:flex;align-items:center;justify-content:space-between;padding:10px 16px 6px;}',
      '#so-panel-label{font-family:"DM Sans",sans-serif;font-size:11px;font-weight:700;color:#8e9396;text-transform:uppercase;letter-spacing:.8px;}',
      '.so-progress-row{display:flex;justify-content:space-between;font-size:11px;color:#8e9396;margin-bottom:5px;padding:0 16px;}',
      '.so-progress-pct{color:#8f7f55;font-weight:700;}',
      '.so-progress-track{height:4px;background:#eceef2;border-radius:99px;overflow:hidden;margin:0 16px 12px;}',
      '.so-progress-fill{height:4px;background:linear-gradient(90deg,#726544,#8f7f55);border-radius:99px;}',
      '#so-panel-list{flex:1;overflow-y:auto;padding:4px 0 24px;}',
      '#so-panel-list::-webkit-scrollbar{width:3px;}',
      '#so-panel-list::-webkit-scrollbar-thumb{background:#ddd4bc;border-radius:99px;}',
      '.so-panel-section+.so-panel-section{border-top:1px solid #eceef2;margin-top:4px;padding-top:4px;}',
      '.so-section-label{display:block;padding:10px 16px 4px;font-size:10px;font-weight:700;color:#8e9396;text-transform:uppercase;letter-spacing:.8px;line-height:1.3;}',
      '.so-panel-item{display:flex;align-items:center;gap:9px;padding:8px 16px 8px 24px;font-size:13px;font-weight:400;color:#637380;border-left:2px solid transparent;text-decoration:none;cursor:pointer;transition:background .12s,color .12s,border-color .12s;}',
      '.so-panel-item:hover{background:#faf8f3;color:#333f48;text-decoration:none;}',
      '.so-panel-item.active{background:#faf8f3;color:#333f48;border-left-color:#8f7f55;font-weight:600;}',
      '.so-panel-item.watched{opacity:.75;}',
      '.so-dot{width:9px;height:9px;border-radius:50%;border:1.5px solid #c9ccce;background:transparent;flex-shrink:0;}',
      '.so-dot.done{background:#8f7f55;border-color:#8f7f55;}',
      '.so-dot.active{background:#333f48;border-color:#333f48;}',
      '.so-item-name{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}',
      '.so-item-badge{flex-shrink:0;margin-left:auto;display:flex;align-items:center;justify-content:center;border-radius:99px;}',
      '.so-badge-watching{font-family:"DM Sans",sans-serif;font-size:9px;font-weight:700;color:#8f7f55;background:rgba(143,127,85,.12);padding:2px 7px;border-radius:99px;letter-spacing:.3px;white-space:nowrap;text-transform:uppercase;}',
      '.so-badge-done{width:16px;height:16px;background:#8f7f55;border-radius:50%;}',
      '.so-badge-done svg{width:10px;height:10px;stroke:#fff;}',
      '.so-cert-row{padding:0;cursor:pointer;}',
      '.so-cert-row:hover .so-panel-item{background:#faf8f3;color:#333f48;}',
      '.so-panel-item.so-cert-item{color:#8f7f55;font-style:italic;font-size:12px;}',

      /* ── Moodle slot ── */
      '#so-moodle-slot{flex:1;overflow-y:auto;overflow-x:hidden;min-width:0;display:flex;flex-direction:column;}',
      '#so-moodle-slot #page,#so-moodle-slot #page-wrapper{margin:0!important;padding:0!important;width:100%!important;max-width:100%!important;background:transparent!important;box-shadow:none!important;border-radius:0!important;flex:1;}',
      '#so-moodle-slot .secondary-navigation{display:none!important;}',
      '#so-moodle-slot .activity-header{display:none!important;}',

      /* ── Cert modal ── */
      '#so-cert-modal{position:absolute;inset:0;background:rgba(30,35,40,.55);display:flex;align-items:center;justify-content:center;z-index:100000;}',
      '#so-cert-modal-box{background:#fff;border-radius:16px;padding:32px 28px;width:300px;display:flex;flex-direction:column;align-items:center;gap:12px;text-align:center;box-shadow:0 8px 32px rgba(0,0,0,.18);}',
      '#so-cert-modal-icon{width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;}',
      '#so-cert-modal-icon.locked{background:#eceef2;color:#8e9396;}',
      '#so-cert-modal-icon.unlocked{background:rgba(143,127,85,.15);color:#8f7f55;}',
      '#so-cert-modal-icon svg{width:26px;height:26px;stroke:currentColor;}',
      '#so-cert-modal-title{font-family:"Sora",sans-serif;font-size:15px;font-weight:700;color:#333f48;margin:0;}',
      '#so-cert-modal-msg{font-size:13px;color:#8e9396;margin:0;line-height:1.5;}',
      '#so-cert-modal-btn{display:inline-flex;align-items:center;justify-content:center;padding:10px 24px;background:linear-gradient(90deg,#726544,#8f7f55);color:#fff;border-radius:8px;font-family:"DM Sans",sans-serif;font-size:13px;font-weight:600;text-decoration:none;width:100%;box-sizing:border-box;}',
      '#so-cert-modal-btn:hover{background:linear-gradient(90deg,#8f7f55,#9b875f);text-decoration:none;}',
      '#so-cert-modal-close{background:none;border:none;font-family:"DM Sans",sans-serif;font-size:13px;color:#8e9396;cursor:pointer;padding:4px 0;}',
      '#so-cert-modal-close:hover{color:#333f48;}',
    ].join('\n');
    document.head.appendChild(style);

    var fg = document.getElementById('__so-flash-guard');
    if (fg) fg.remove();
  }

  var buildAttempts = 0;
  function tryBuild() {
    if (document.getElementById("so-course-page")) return;
    var result = build();
    if (result === false && ++buildAttempts < 25) setTimeout(tryBuild, 300);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() { setTimeout(tryBuild, 200); });
  } else {
    setTimeout(tryBuild, 200);
  }
  window.addEventListener("load", function() { setTimeout(tryBuild, 400); });

})();


(function () {
  var body = document.body;
  if (!body) return;
  var bodyClass = body.className || '';

  var isCertPage =
  bodyId === 'page-mod-customcert-view' ||
  bodyClass.indexOf('path-mod-customcert') > -1;

  var isCoursePage =
    (bodyClass.indexOf("pagelayout-incourse") > -1 ||
    bodyClass.indexOf("pagelayout-course") > -1) &&
    !isCertPage;

  if (!isCoursePage) return;

  var sb = document.getElementById('so-sidebar');
  if (sb) sb.style.display = 'none';
  var ss = document.getElementById('so-shift-style');
  if (ss) ss.textContent = '#page,#page-wrapper{margin-left:0!important;width:100%!important;}';
  var nb = document.querySelector('.navbar');
  if (nb) nb.style.display = 'none';

  function build() {
    if (document.getElementById('so-course-view-page')) return;

    var sections = document.querySelectorAll('.courseindex-section');
    if (!sections.length) return false;

    /* ── Course name ── */
    var courseName = '';
    var titleParts = document.title.split('|');
    if (titleParts.length >= 2) courseName = titleParts[0].replace('Course:', '').trim();
    if (!courseName) courseName = 'Course';

    /* ── Progress ── */
    var allItems = document.querySelectorAll('.courseindex-item:not(.courseindex-section-title)');
    var doneItems = document.querySelectorAll('.completion-complete, .completion_complete');
    var pct = allItems.length > 0 ? Math.round((doneItems.length / allItems.length) * 100) : 0;

    /* ── Certificate ── */
    var certInfo = getCertInfo();
    var certLink = certInfo.certLink;
    var certBtnHTML =
      '<div id="so-cert-btn-wrap">' +
        '<div id="so-cert-btn" class="so-cert-locked" title="Complete all activities to unlock your certificate">' +
          '<svg fill="none" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>' +
          'Certificate locked' +
        '</div>' +
      '</div>';

    /* ── Sections panel HTML ── */
    var sectionsHTML = '';
    var currentUrl = window.location.href.split('#')[0];

    sections.forEach(function(sec, sIdx) {
      if (sIdx === 0) return;
      var secLink = sec.querySelector('.courseindex-section-title a.courseindex-link');
      var secTitle = secLink ? secLink.textContent.trim() : 'Section ' + sIdx;
      secTitle = secTitle.replace(/expand\s*collapse/gi,'').replace(/highlighted/gi,'').replace(/\s{2,}/g,' ').trim();

      var itemsHTML = '';
      sec.querySelectorAll('li.courseindex-item').forEach(function(item) {
        var link = item.querySelector('a.courseindex-link');
        if (!link) return;
        var isDone   = !!item.querySelector('.completion-complete, .completion_complete');
        var isActive = link.href.split('#')[0] === currentUrl;
        var itemName = link.textContent.trim();
        var isCert   = /certificate/i.test(itemName);
        var href     = link.href;
        var dotCls   = isActive ? 'so-dot active' : isDone ? 'so-dot done' : 'so-dot';
        var itemCls  = 'so-panel-item' + (isActive ? ' active' : '') + (isDone ? ' watched' : '') + (isCert ? ' so-cert-item' : '');
        var badge    = '';
        if (isActive) {
          badge = '<span class="so-item-badge so-badge-watching">Watching</span>';
        } else if (isDone && !isCert) {
          badge = '<span class="so-item-badge so-badge-done"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></span>';
        }
        if (isCert) {
          itemsHTML += '<div class="so-cert-row"><a class="' + itemCls + '" href="' + href + '"><span class="' + dotCls + '"></span><span class="so-item-name">' + itemName + '</span>' + badge + '</a></div>';
        } else {
          itemsHTML += '<a class="' + itemCls + '" href="' + href + '"><span class="' + dotCls + '"></span><span class="so-item-name">' + itemName + '</span>' + badge + '</a>';
        }
      });

      var secLabel = /^section\s*\d/i.test(secTitle) ? secTitle : 'Section ' + sIdx + ' \u2014 ' + secTitle;
      sectionsHTML += '<div class="so-panel-section">' + itemsHTML + '</div>';
    });

    /* ── Build wrapper ── */
    var pg = document.createElement('div');
    pg.id = 'so-course-view-page';
    pg.innerHTML =
      /* Top bar */
      '<div id="so-course-topbar">' +
        '<div id="so-topbar-left">' +
          '<button id="so-back-btn"><svg fill="none" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>Back to Home</button>' +
          '<span class="so-tb-divider"></span>' +
          '<span id="so-breadcrumb"><strong>' + courseName + '</strong></span>' +
        '</div>' +
        '<div id="so-topbar-right">' +
          (certLink
            ? '<a href="' + certLink + '" class="so-topbar-action-btn so-action-ghost" target="_blank"><svg fill="none" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>View Certificate</a>'
            : '') +
        '</div>' +
      '</div>' +
      /* Body */
      '<div id="so-course-body">' +
        /* Left panel */
        '<div id="so-course-panel">' +
          '<div id="so-panel-header">' +
            '<div id="so-panel-course-meta"><h2 id="so-panel-course-title">' + courseName + '</h2></div>' +
            '<div id="so-panel-divider"></div>' +
            '<div id="so-panel-label-row"><span id="so-panel-label">Course Content</span></div>' +
          '</div>' +
          '<div id="so-panel-list">' + sectionsHTML + '</div>' +
        '</div>' +
        /* Moodle page slot */
        '<div id="so-moodle-slot"></div>' +
      '</div>';

    document.body.appendChild(pg);

    /* ── Move Moodle's #page into our slot ── */
    var moodlePage = document.getElementById('page') || document.getElementById('page-wrapper');
    var slot = document.getElementById('so-moodle-slot');
    if (slot && moodlePage) {
      slot.appendChild(moodlePage);
    }

    /* ── Back button ── */
    document.getElementById('so-back-btn').addEventListener('click', function() {
      window.location.href = 'https://smileon.rinseai.com.au/';
    });

    /* ── CSS ── */
    var style = document.createElement('style');
    style.textContent = [
      '@import url("https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap");',
      '#so-course-view-page{position:fixed;inset:0;display:flex;flex-direction:column;font-family:"DM Sans",sans-serif;background:#eceef2;z-index:99999;overflow:hidden;}',

      /* Topbar */
      '#so-course-topbar{height:52px;min-height:52px;background:#fff;border-bottom:1.5px solid #eceef2;display:flex;align-items:center;justify-content:space-between;padding:0 24px 0px 0px;flex-shrink:0;box-shadow:0 1px 6px rgba(51,63,72,.06);gap:16px;}',
      '#so-topbar-left{display:flex;align-items:center;gap:12px;flex:1;min-width:0;}',
      '#so-back-btn{display:flex;align-items:center;justify-content:center;gap:5px;font-size:16px;height:51px;width:259px;font-weight:600;color:#ffffff;background:#8f7f55;border:none;cursor:pointer;padding:0;white-space:nowrap;font-family:"DM Sans",sans-serif;transition:color .15s;}',
      '#so-back-btn:hover{color:#ffffff;}',
      '#so-back-btn svg{width:16px;height:16px;stroke:currentColor;}',
      '.so-tb-divider{width:1px;height:16px;background:#eceef2;flex-shrink:0;}',
      '#so-breadcrumb{font-size:12px;color:#333f48;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}',
      '#so-topbar-right{display:flex;align-items:center;gap:12px;flex-shrink:0;}',
      '.so-topbar-action-btn{display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:8px;font-family:"DM Sans",sans-serif;font-size:12px;font-weight:600;cursor:pointer;text-decoration:none;white-space:nowrap;transition:background .15s,color .15s;background:#333f48;color:#fff;border:none;}',
      '.so-topbar-action-btn svg{width:13px;height:13px;stroke:currentColor;flex-shrink:0;}',
      '.so-topbar-action-btn:hover{background:#8f7f55;color:#fff;text-decoration:none;}',
      '.so-action-ghost{background:transparent!important;color:#637380!important;border:1.5px solid #eceef2!important;}',
      '.so-action-ghost:hover{background:#faf8f3!important;color:#333f48!important;border-color:#8f7f55!important;}',

      /* Body */
      '#so-course-body{display:flex;flex:1;overflow:hidden;min-height:0;}',

      /* Left panel */
      '#so-course-panel{width:260px;min-width:260px;background:#fff;border-right:1.5px solid #eceef2;display:flex;flex-direction:column;overflow:hidden;flex-shrink:0;}',
      '#so-panel-header{padding:0;border-bottom:1.5px solid #eceef2;flex-shrink:0;}',
      '#so-panel-course-meta{padding:14px 16px;}',
      '#so-panel-course-title{font-family:"Sora",sans-serif;font-size:14px;font-weight:700;color:#333f48;margin:0;letter-spacing:-.2px;line-height:1.3;}',
      '#so-panel-divider{height:1px;background:#eceef2;}',
      '#so-panel-label-row{display:flex;align-items:center;justify-content:space-between;padding:10px 16px 6px;}',
      '#so-panel-label{font-family:"DM Sans",sans-serif;font-size:11px;font-weight:700;color:#8e9396;text-transform:uppercase;letter-spacing:.8px;}',
      '.so-progress-row{display:flex;justify-content:space-between;font-size:11px;color:#8e9396;margin-bottom:5px;padding:0 16px;}',
      '.so-progress-pct{color:#8f7f55;font-weight:700;}',
      '.so-progress-track{height:4px;background:#eceef2;border-radius:99px;overflow:hidden;margin:0 16px 12px;}',
      '.so-progress-fill{height:4px;background:linear-gradient(90deg,#726544,#8f7f55);border-radius:99px;}',
      '#so-panel-list{flex:1;overflow-y:auto;padding:4px 0 24px;}',
      '#so-panel-list::-webkit-scrollbar{width:3px;}',
      '#so-panel-list::-webkit-scrollbar-thumb{background:#ddd4bc;border-radius:99px;}',
      '.so-panel-section+.so-panel-section{border-top:1px solid #eceef2;margin-top:4px;padding-top:4px;}',
      '.so-section-label{display:block;padding:10px 16px 4px;font-size:10px;font-weight:700;color:#8e9396;text-transform:uppercase;letter-spacing:.8px;line-height:1.3;}',
      '.so-panel-item{display:flex;align-items:center;gap:9px;padding:8px 16px 8px 24px;font-size:16px;font-weight:400;color:#637380;border-left:2px solid transparent;text-decoration:none;cursor:pointer;transition:background .12s,color .12s,border-color .12s;}',
      '.so-panel-item:hover{background:#faf8f3;color:#333f48;text-decoration:none;}',
      '.so-panel-item.active{background:#faf8f3;color:#333f48;border-left-color:#8f7f55;font-weight:600;}',
      '.so-panel-item.watched{opacity:.75;}',
      '.so-panel-item.watched:hover{opacity:1;}',
      '.so-dot{width:9px;height:9px;border-radius:50%;border:1.5px solid #c9ccce;background:transparent;flex-shrink:0;}',
      '.so-dot.done{background:#8f7f55;border-color:#8f7f55;}',
      '.so-dot.active{background:#333f48;border-color:#333f48;}',
      '.so-item-name{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}',
      '.so-item-badge{flex-shrink:0;margin-left:auto;display:flex;align-items:center;justify-content:center;border-radius:99px;}',
      '.so-badge-watching{font-family:"DM Sans",sans-serif;font-size:9px;font-weight:700;color:#8f7f55;background:rgba(143,127,85,.12);padding:2px 7px;border-radius:99px;letter-spacing:.3px;white-space:nowrap;text-transform:uppercase;}',
      '.so-badge-done{width:16px;height:16px;background:#8f7f55;border-radius:50%;}',
      '.so-badge-done svg{width:10px;height:10px;stroke:#fff;}',
      '.so-cert-row{padding:0;}',
      '.so-panel-item.so-cert-item{color:#8f7f55;font-style:italic;font-size:12px;}',
      '#so-cert-btn-wrap{padding:12px 16px 4px;border-top:1.5px solid #eceef2;margin-top:8px;}',
      '#so-cert-btn{display:flex;align-items:center;justify-content:center;gap:7px;width:100%;padding:10px 16px;background:#eceef2;color:#8e9396;border-radius:10px;font-family:"DM Sans",sans-serif;font-size:13px;font-weight:600;cursor:not-allowed;pointer-events:none;}',
      '#so-cert-btn svg{width:15px;height:15px;stroke:currentColor;flex-shrink:0;}',

      /* Moodle slot */
      '#so-moodle-slot{flex:1;overflow-y:auto;overflow-x:hidden;min-width:0;}',
      '#so-moodle-slot #page,#so-moodle-slot #page-wrapper{margin:0!important;padding:0!important;width:100%!important;max-width:100%!important;background:transparent!important;box-shadow:none!important;border-radius:0!important;}',
      '#so-moodle-slot .secondary-navigation{position:sticky;top:0;z-index:50;}',
      '#so-moodle-slot .activity-header{display:none!important;}',
    ].join('\n');
    document.head.appendChild(style);
       var fg = document.getElementById('__so-flash-guard');
    if (fg) fg.remove();
  }

  var buildAttempts = 0;
  function tryBuild() {
    if (document.getElementById('so-course-view-page')) return;
    var result = build();
    if (result === false && ++buildAttempts < 25) setTimeout(tryBuild, 300);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { setTimeout(tryBuild, 200); });
  } else {
    setTimeout(tryBuild, 200);
  }
  window.addEventListener('load', function() { setTimeout(tryBuild, 400); });

})();

(function () {
  var body = document.body;
  if (!body) return;
  var bodyClass = body.className || '';

  /* Only run on quiz activity pages */
  var isQuizPage =
    bodyClass.indexOf('cm-type-quiz') > -1 ||
    bodyClass.indexOf('path-mod-quiz') > -1;

  if (!isQuizPage) return;

  /* ════════════════════════════════════════════════════════════
     QUIZ PAGE — full custom injection (matches EH2 / course-page style)
  ════════════════════════════════════════════════════════════ */

  /* Hide sidebar, navbar, shift styles */
  var sb = document.getElementById('so-sidebar');
  if (sb) sb.style.display = 'none';
  var ss = document.getElementById('so-shift-style');
  if (ss) ss.textContent = '#page,#page-wrapper{margin-left:0!important;width:100%!important;}';
  var nb = document.querySelector('.navbar');
  if (nb) nb.style.display = 'none';

  function build() {
    if (document.getElementById('so-quiz-page')) return;

    /* ── Wait for course index ── */
    var sections = document.querySelectorAll('.courseindex-section');
    if (!sections.length) return false;

    /* ── Course & activity name ── */
    var courseName = '';
    var titleParts = document.title.split('|');
    if (titleParts.length >= 2) courseName = titleParts[titleParts.length - 2].trim();
    if (!courseName || courseName.length < 3) courseName = 'Hand Hygiene';

    var actName = '';
    var h1 = document.querySelector('.page-header-headings h1, h1.h2');
    if (h1) actName = h1.textContent.trim();
    if (!actName) {
      titleParts = document.title.split('|');
      actName = titleParts[0].trim();
    }
    /* Strip "HHH:" prefix if present */
    actName = actName.replace(/^[A-Z]+:\s*/,'');

    /* ── Extract secondary nav tab URLs ── */
    var tabUrls = {};
    document.querySelectorAll('.secondary-navigation a[role="menuitem"]').forEach(function(a){
      var txt = (a.textContent||'').trim().toLowerCase();
      if (txt && a.href) tabUrls[txt] = a.href;
    });
    var quizHref    = tabUrls['quiz']          || window.location.href;
    var settingsHref= tabUrls['settings']      || '#';
    var questionsHref=tabUrls['questions']     || '#';
    var resultsHref = tabUrls['results']       || '#';

    /* ── Breadcrumb: find course link ── */
    var courseHref = '#';
    document.querySelectorAll('ol.breadcrumb a').forEach(function(a){
      if (a.href.indexOf('/course/view.php') > -1) courseHref = a.href;
    });

    /* ── Find certificate link from course index ── */
    var certLink = '';
    document.querySelectorAll('.courseindex-item a.courseindex-link').forEach(function(a){
      if (/certificate/i.test(a.textContent) && !certLink) certLink = a.href;
    });

    /* ── All activity links for "next" navigation ── */
    var allActivityLinks = [];
    document.querySelectorAll('.courseindex-section').forEach(function(sec){
      sec.querySelectorAll('li.courseindex-item').forEach(function(item){
        var link = item.querySelector('a.courseindex-link');
        if (link && link.href) allActivityLinks.push(link.href.split('#')[0]);
      });
    });
    var currentUrlClean = window.location.href.split('#')[0].split('?')[0];
    /* Match by mod/quiz/view.php?id=X */
    var currentIdx = -1;
    allActivityLinks.forEach(function(href, i){
      if (href.indexOf('mod/quiz/view.php') > -1 && currentUrlClean.indexOf('mod/quiz/view.php') > -1) {
        /* Match on id param */
        var m1 = href.match(/id=(\d+)/);
        var m2 = currentUrlClean.match(/id=(\d+)/);
        if (m1 && m2 && m1[1] === m2[1]) currentIdx = i;
      }
    });
    var nextUrl = (currentIdx >= 0 && currentIdx < allActivityLinks.length - 1)
      ? allActivityLinks[currentIdx + 1] : null;

    /* ── Progress ── */
    var allCM = document.querySelectorAll('.courseindex-item:not(.courseindex-section-title)');
    var doneCM = document.querySelectorAll('.completioninfo.completion-complete, .completioninfo.completion_complete');
    var pct = allCM.length > 0 ? Math.round((doneCM.length / allCM.length) * 100) : 0;

    /* ── Build sections HTML for left panel ── */
    var sectionsHTML = '';
    sections.forEach(function (sec, sIdx) {
      if (sIdx === 0) return;
      var secLink = sec.querySelector('.courseindex-section-title a.courseindex-link');
      var secTitle = secLink ? secLink.textContent.trim() : 'Section ' + (sIdx);
      secTitle = secTitle.replace(/expand\s*collapse/gi,'').replace(/highlighted/gi,'').replace(/\s{2,}/g,' ').trim();

      var itemsHTML = '';
      sec.querySelectorAll('li.courseindex-item').forEach(function(item){
        var link = item.querySelector('a.courseindex-link');
        if (!link) return;

        var isDone = !!item.querySelector('.completion-complete, .completion_complete');
        var itemName = link.textContent.trim();
        var href = link.href;
        var isCert = /certificate/i.test(itemName);

        /* Mark current quiz as active */
        var isActive = false;
        var lm1 = href.match(/id=(\d+)/);
        var lm2 = window.location.href.match(/id=(\d+)/);
        if (lm1 && lm2 && lm1[1] === lm2[1] && href.indexOf('mod/quiz/view.php') > -1) isActive = true;

        var dotCls   = isActive ? 'so-dot active' : isDone ? 'so-dot done' : 'so-dot';
        var itemCls  = 'so-panel-item' + (isActive ? ' active' : '') + (isDone ? ' watched' : '') + (isCert ? ' so-cert-item' : '');

        var badge = '';
        if (isActive) badge = '<span class="so-item-badge so-badge-watching">Active</span>';
        else if (isDone && !isCert) badge = '<span class="so-item-badge so-badge-done"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></span>';

        if (isCert){
          itemsHTML += '<div class="so-cert-row"><a class="'+itemCls+'" href="'+href+'"><span class="'+dotCls+'"></span><span class="so-item-name">'+itemName+'</span>'+badge+'</a></div>';
        } else {
          itemsHTML += '<a class="'+itemCls+'" href="'+href+'"><span class="'+dotCls+'"></span><span class="so-item-name">'+itemName+'</span>'+badge+'</a>';
        }
      });

      var secLabel = /^section\s*\d/i.test(secTitle) ? secTitle : 'Section '+(sIdx)+' \u2014 '+secTitle;
      sectionsHTML += '<div class="so-panel-section"><span class="so-section-label">'+secLabel+'</span>'+itemsHTML+'</div>';
    });

    /* Certificate btn */
    var certInfo   = getCertInfo();
var certLink   = certInfo.certLink;

var certBtnHTML = '';
certBtnHTML =
  '<div id="so-cert-btn-wrap">' +
    '<div id="so-cert-btn" class="so-cert-locked" title="Complete all activities to unlock your certificate">' +
      '<svg fill="none" viewBox="0 0 24 24" stroke-width="2">' +
        '<path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>' +
      '</svg>' +
      'Certificate locked' +
    '</div>' +
  '</div>';

    /* ── Extract quiz content from Moodle DOM ── */
    /* Completion badges */
    var completionBadgesHTML = '';
    document.querySelectorAll('.activity-information .badge, .completion-info .badge, [data-region="activity-information"] .badge').forEach(function(b){
      var txt = b.textContent.trim();
      if (txt) completionBadgesHTML += '<span class="so-completion-badge">'+
        '<svg fill="none" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>'+
        txt+'</span>';
    });

    /* Quiz info box: grading method, time limit, grade to pass etc */
    var quizInfoHTML = '';
    var quizInfoBox = document.querySelector('.quizinfo');
    if (quizInfoBox) {
      quizInfoBox.querySelectorAll('p').forEach(function(p){
        var txt = p.textContent.trim();
        if (txt) quizInfoHTML += '<div class="so-quiz-info-row">'+txt+'</div>';
      });
    }
    /* Also capture time limit, attempts allowed from anywhere */
    document.querySelectorAll('.quizinfo p, .box.py-3 p').forEach(function(p){
      var txt = p.textContent.trim();
      if (txt && quizInfoHTML.indexOf(txt) === -1) quizInfoHTML += '<div class="so-quiz-info-row">'+txt+'</div>';
    });

    /* Highest grade / attempts count */
    var gradeHTML = '';
    var gradeEl = document.querySelector('h2.quizattemptcounts, .quizattemptcounts, h3.quizattemptcounts');
    /* look for "Highest grade" heading */
    document.querySelectorAll('h3, h2, p, strong').forEach(function(el){
      if (/highest grade/i.test(el.textContent) && !gradeHTML) {
        gradeHTML = '<div class="so-grade-display">'+el.textContent.trim()+'</div>';
      }
    });

    /* Attempts count link */
    var attemptsCountHTML = '';
    var attCountEl = document.querySelector('.quizattemptcounts a, .quizattemptcounts');
    if (attCountEl) attemptsCountHTML = '<div class="so-attempts-count">'+attCountEl.textContent.trim()+'</div>';

    /* Action button: Re-attempt / Start quiz / Continue */
    var actionBtnHTML = '';
    var startBtn = document.querySelector('.quizstartbuttondiv button, .quizstartbuttondiv input[type="submit"], form.quizstartbuttondiv button');
    if (startBtn) {
      var btnLabel = startBtn.value || startBtn.textContent || 'Attempt quiz';
      var btnForm  = startBtn.closest('form');
      var formAction = btnForm ? btnForm.getAttribute('action') : '#';
      /* Build hidden inputs */
      var hiddenInputs = '';
      if (btnForm) {
        btnForm.querySelectorAll('input[type="hidden"]').forEach(function(inp){
          hiddenInputs += '<input type="hidden" name="'+inp.name+'" value="'+inp.value+'">';
        });
      }
      actionBtnHTML = '<form method="post" action="'+formAction+'" class="so-quiz-action-form">'+hiddenInputs+'<button type="submit" class="so-quiz-start-btn">'+btnLabel.trim()+'</button></form>';
    }

    /* Attempt cards */
    var attemptsHTML = '';
    document.querySelectorAll('li.col.ps-0, ul.list-unstyled li').forEach(function(li){
      var card = li.querySelector('.card');
      if (!card) return;
      var cardTitle = (card.querySelector('.card-title') || {}).textContent || '';
      cardTitle = cardTitle.trim();

      var rows = '';
      card.querySelectorAll('tr').forEach(function(tr){
        var th = (tr.querySelector('th') || {}).textContent || '';
        var td = (tr.querySelector('td') || {}).textContent || '';
        if (th.trim() && td.trim()){
          var isGrade = /grade/i.test(th);
          rows += '<div class="so-attempt-row">' +
            '<span class="so-attempt-label">'+th.trim()+'</span>' +
            '<span class="so-attempt-value'+(isGrade?' so-attempt-grade':'')+'">'+td.trim()+'</span>' +
            '</div>';
        }
      });

      /* Review link */
      var reviewLink = card.querySelector('a[href*="review"]');
      var reviewHTML = reviewLink
        ? '<div class="so-attempt-review"><a href="'+reviewLink.href+'">Review this attempt →</a></div>'
        : '';

      attemptsHTML +=
        '<div class="so-attempt-card">' +
          '<div class="so-attempt-card-header">'+cardTitle+'</div>' +
          rows +
          reviewHTML +
        '</div>';
    });

    var yourAttemptsSection = attemptsHTML
      ? '<div class="so-your-attempts"><h3 class="so-section-heading">Your attempts</h3>'+attemptsHTML+'</div>'
      : '';

    /* ── Assemble page ── */
    var pg = document.createElement('div');
    pg.id = 'so-quiz-page';
    pg.innerHTML =
      /* Top bar */
      '<div id="so-course-topbar">' +
        '<div id="so-topbar-left">' +
          '<button id="so-back-btn">' +
            '<svg fill="none" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>' +
            'Back' +
          '</button>' +
          '<span class="so-tb-divider"></span>' +
          '<span id="so-breadcrumb"><a href="'+courseHref+'" class="so-breadcrumb-course">'+courseName+'</a> &nbsp;/&nbsp; <strong>'+actName+'</strong></span>' +
        '</div>' +
        '<div id="so-topbar-right">' +
          (nextUrl
            ? '<a id="so-next-video-btn" href="'+nextUrl+'" class="so-topbar-action-btn">' +
                '<svg fill="none" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>' +
                'Next' +
              '</a>'
            : '<button class="so-topbar-action-btn" disabled>' +
                '<svg fill="none" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>' +
                'Next' +
              '</button>') +
        '</div>' +
      '</div>' +

      /* Body */
      '<div id="so-course-body">' +

        /* Left panel */
        '<div id="so-course-panel">' +
          '<div id="so-panel-header">' +
            '<div id="so-panel-course-meta">' +
              '<h2 id="so-panel-course-title">'+courseName+'</h2>' +
            '</div>' +
            '<div id="so-panel-divider"></div>' +
            '<div id="so-panel-label-row"><span id="so-panel-label">Course Content</span></div>' +
          '</div>' +
          '<div id="so-panel-list">'+sectionsHTML+'</div>' +
        '</div>' +

        /* Main */
        '<div id="so-course-main">' +

          /* Tab nav */
          '<div id="so-tab-nav">' +
            '<button class="so-tab so-tab-active" data-tab="quiz">Quiz</button>' +
            '<a class="so-tab" href="'+settingsHref+'">Settings</a>' +
            '<a class="so-tab" href="'+questionsHref+'">Questions</a>' +
            '<a class="so-tab" href="'+resultsHref+'">Results</a>' +
            '<div id="so-more-tab">' +
              '<button id="so-more-btn">More' +
                '<svg fill="none" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>' +
              '</button>' +
              '<div id="so-more-dropdown">' +
                '<a class="so-dropdown-item" href="'+quizHref.replace('view.php','report.php').replace(/view\.php.*$/,'report.php?id='+(window.location.href.match(/id=(\d+)/)||['',''])[1]+'&mode=overview')+'">'+
                  '<svg fill="none" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>' +
                  'Attempts report' +
                '</a>' +
              '</div>' +
            '</div>' +
          '</div>' +

          /* Quiz tab panel */
          '<div class="so-tab-panel so-panel-active" id="so-panel-quiz">' +
            '<div id="so-quiz-inner">' +

              /* Completion badges */
              (completionBadgesHTML
                ? '<div id="so-completion-badges">'+completionBadgesHTML+'</div>'
                : '') +

              /* Action button */
              (actionBtnHTML
                ? '<div id="so-action-wrap">'+actionBtnHTML+'</div>'
                : '') +

              /* Quiz info card */
              (quizInfoHTML
                ? '<div class="so-info-card"><div class="so-info-card-body">'+quizInfoHTML+'</div></div>'
                : '') +

              /* Grade display */
              (gradeHTML
                ? '<div id="so-grade-wrap">'+gradeHTML+'</div>'
                : '') +

              /* Your attempts */
              yourAttemptsSection +

            '</div>' +
          '</div>' +

        '</div>' + /* end so-course-main */
      '</div>'; /* end so-course-body */

    document.body.appendChild(pg);

    /* ── Back button ── */
    document.getElementById('so-back-btn').addEventListener('click', function() {
      window.location.href = 'https://smileon.rinseai.com.au/';
    });

    /* ── Breadcrumb course link ── */
    var bcCourse = document.querySelector('.so-breadcrumb-course');
    if (bcCourse) {
      bcCourse.addEventListener('click', function(e){
        e.preventDefault();
        window.location.href = courseHref;
      });
    }

    /* ── Tab switching ── */
    document.querySelectorAll('.so-tab[data-tab]').forEach(function(tab){
      tab.addEventListener('click', function(){
        document.querySelectorAll('.so-tab').forEach(function(t){ t.classList.remove('so-tab-active'); });
        document.querySelectorAll('.so-tab-panel').forEach(function(p){ p.classList.remove('so-panel-active'); });
        tab.classList.add('so-tab-active');
        var panel = document.getElementById('so-panel-'+tab.dataset.tab);
        if (panel) panel.classList.add('so-panel-active');
      });
    });

    /* ── More dropdown ── */
    var moreBtn      = document.getElementById('so-more-btn');
    var moreDropdown = document.getElementById('so-more-dropdown');
    if (moreBtn){
      moreBtn.addEventListener('click', function(e){
        e.stopPropagation();
        var open = moreDropdown.classList.toggle('so-open');
        moreBtn.classList.toggle('so-open', open);
      });
    }
    document.addEventListener('click', function(){
      if (moreDropdown) moreDropdown.classList.remove('so-open');
      if (moreBtn) moreBtn.classList.remove('so-open');
    });

    /* ── Inject CSS ── */
    var style = document.createElement('style');
    style.textContent = [
      '@import url("https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap");',

      '#so-quiz-page{position:fixed;inset:0;display:flex;flex-direction:column;font-family:"DM Sans",sans-serif;background:#eceef2;z-index:99999;overflow:hidden;}',

      /* Topbar */
      '#so-course-topbar{height:52px;min-height:52px;background:#fff;border-bottom:1.5px solid #eceef2;display:flex;align-items:center;justify-content:space-between;padding:0 24px 0px 0px;flex-shrink:0;box-shadow:0 1px 6px rgba(51,63,72,.06);gap:16px;}',
      '#so-topbar-left{display:flex;align-items:center;gap:12px;flex:1;min-width:0;}',
      '#so-back-btn{display:flex;align-items:center;justify-content:center;gap:5px;font-size:16px;height:51px;width:259px;font-weight:600;color:#ffffff;background:#8f7f55;border:none;cursor:pointer;padding:0;white-space:nowrap;font-family:"DM Sans",sans-serif;transition:color .15s;}',
      '#so-back-btn:hover{color:#ffffff;}',
      '#so-back-btn svg{width:16px;height:16px;stroke:currentColor;}',
      '.so-tb-divider{width:1px;height:16px;background:#eceef2;flex-shrink:0;}',
      '#so-breadcrumb{font-size:12px;color:#8e9396;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}',
      '#so-breadcrumb strong{color:#333f48;font-weight:600;}',
      '.so-breadcrumb-course{color:#8e9396;text-decoration:none;cursor:pointer;}',
      '.so-breadcrumb-course:hover{color:#8f7f55;}',
      '#so-topbar-right{display:flex;align-items:center;gap:12px;flex-shrink:0;}',
      '.so-topbar-action-btn{display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:8px;font-family:"DM Sans",sans-serif;font-size:12px;font-weight:600;cursor:pointer;text-decoration:none;white-space:nowrap;transition:background .15s,color .15s;background:#333f48;color:#fff;border:none;}',
      '.so-topbar-action-btn svg{width:13px;height:13px;stroke:currentColor;flex-shrink:0;}',
      '.so-topbar-action-btn:hover:not(:disabled){background:#8f7f55;color:#fff;text-decoration:none;}',
      '.so-topbar-action-btn:disabled{opacity:.38;cursor:not-allowed;pointer-events:none;}',

      /* Body */
      '#so-course-body{display:flex;flex:1;overflow:hidden;min-height:0;}',

      /* Left panel — identical to EH2 */
      '#so-course-panel{width:260px;min-width:260px;background:#fff;border-right:1.5px solid #eceef2;display:flex;flex-direction:column;overflow:hidden;flex-shrink:0;}',
      '#so-panel-header{padding:0;border-bottom:1.5px solid #eceef2;flex-shrink:0;}',
      '#so-panel-course-meta{padding:14px 16px;}',
      '#so-panel-course-title{font-family:"Sora",sans-serif;font-size:14px;font-weight:700;color:#333f48;margin:0;letter-spacing:-.2px;line-height:1.3;}',
      '#so-panel-divider{height:1px;background:#eceef2;}',
      '#so-panel-label-row{display:flex;align-items:center;justify-content:space-between;padding:10px 16px 6px;}',
      '#so-panel-label{font-family:"DM Sans",sans-serif;font-size:11px;font-weight:700;color:#8e9396;text-transform:uppercase;letter-spacing:.8px;}',
      '.so-progress-row{display:flex;justify-content:space-between;font-size:11px;color:#8e9396;margin-bottom:5px;padding:0 16px;}',
      '.so-progress-pct{color:#8f7f55;font-weight:700;}',
      '.so-progress-track{height:4px;background:#eceef2;border-radius:99px;overflow:hidden;margin:0 16px 12px;}',
      '.so-progress-fill{height:4px;background:linear-gradient(90deg,#726544,#8f7f55);border-radius:99px;}',
      '#so-panel-list{flex:1;overflow-y:auto;padding:4px 0 24px;}',
      '#so-panel-list::-webkit-scrollbar{width:3px;}',
      '#so-panel-list::-webkit-scrollbar-thumb{background:#ddd4bc;border-radius:99px;}',
      '.so-panel-section+.so-panel-section{border-top:1px solid #eceef2;margin-top:4px;padding-top:4px;}',
      '.so-section-label{display:block;padding:10px 16px 4px;font-size:10px;font-weight:700;color:#8e9396;text-transform:uppercase;letter-spacing:.8px;line-height:1.3;}',
      '.so-panel-item{display:flex;align-items:center;gap:9px;padding:8px 16px 8px 24px;font-size:13px;font-weight:400;color:#637380;border-left:2px solid transparent;text-decoration:none;cursor:pointer;transition:background .12s,color .12s,border-color .12s;}',
      '.so-panel-item:hover{background:#faf8f3;color:#333f48;text-decoration:none;}',
      '.so-panel-item.active{background:#faf8f3;color:#333f48;border-left-color:#8f7f55;font-weight:600;}',
      '.so-panel-item.watched{opacity:.75;}',
      '.so-dot{width:9px;height:9px;border-radius:50%;border:1.5px solid #c9ccce;background:transparent;flex-shrink:0;}',
      '.so-dot.done{background:#8f7f55;border-color:#8f7f55;}',
      '.so-dot.active{background:#333f48;border-color:#333f48;}',
      '.so-item-name{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}',
      '.so-item-badge{flex-shrink:0;margin-left:auto;display:flex;align-items:center;justify-content:center;border-radius:99px;}',
      '.so-badge-watching{font-family:"DM Sans",sans-serif;font-size:9px;font-weight:700;color:#8f7f55;background:rgba(143,127,85,.12);padding:2px 7px;border-radius:99px;letter-spacing:.3px;white-space:nowrap;text-transform:uppercase;}',
      '.so-badge-done{width:16px;height:16px;background:#8f7f55;border-radius:50%;}',
      '.so-badge-done svg{width:10px;height:10px;stroke:#fff;}',
      '.so-cert-row{padding:0;}',
      '.so-panel-item.so-cert-item{color:#8f7f55;font-style:italic;font-size:12px;}',
      '#so-cert-btn-wrap{padding:12px 16px 4px;border-top:1.5px solid #eceef2;margin-top:8px;}',
      '#so-cert-btn{display:flex;align-items:center;justify-content:center;gap:7px;width:100%;padding:10px 16px;background:linear-gradient(135deg,#333f48,#4a5a66);color:#fff;border-radius:10px;font-family:"DM Sans",sans-serif;font-size:13px;font-weight:600;text-decoration:none;transition:background .15s,transform .1s;box-shadow:0 2px 8px rgba(51,63,72,.2);}',
      '#so-cert-btn:hover{background:linear-gradient(135deg,#8f7f55,#726544);transform:translateY(-1px);text-decoration:none;color:#fff;}',
      '#so-cert-btn svg{width:15px;height:15px;stroke:currentColor;flex-shrink:0;}',

      /* Main */
      '#so-course-main{flex:1;overflow:hidden;background:#eceef2;min-width:0;display:flex;flex-direction:column;min-height:0;}',

      /* Tab nav */
      '#so-tab-nav{background:#fff;border-bottom:1.5px solid #eceef2;padding:0 28px;display:flex;align-items:center;flex-shrink:0;position:relative;z-index:50;box-shadow:0 1px 4px rgba(51,63,72,.04);}',
      '.so-tab{display:inline-flex;align-items:center;gap:6px;padding:12px 16px;font-size:13px;font-weight:500;color:#8e9396;text-decoration:none;border-bottom:2px solid transparent;margin-bottom:-1.5px;cursor:pointer;transition:color .15s,border-color .15s;white-space:nowrap;background:none;border-top:none;border-left:none;border-right:none;font-family:"DM Sans",sans-serif;}',
      '.so-tab:hover{color:#333f48;}',
      '.so-tab.so-tab-active{color:#333f48;border-bottom-color:#8f7f55;font-weight:600;}',
      '#so-more-tab{position:relative;}',
      '#so-more-btn{display:inline-flex;align-items:center;gap:5px;padding:12px 16px;font-size:13px;font-weight:500;color:#8e9396;background:none;border:none;border-bottom:2px solid transparent;margin-bottom:-1.5px;cursor:pointer;font-family:"DM Sans",sans-serif;}',
      '#so-more-btn svg{width:12px;height:12px;stroke:currentColor;transition:transform .2s;}',
      '#so-more-btn.so-open svg{transform:rotate(180deg);}',
      '#so-more-dropdown{display:none;position:absolute;top:calc(100% + 2px);left:0;background:#fff;border:.5px solid #eceef2;border-radius:10px;box-shadow:0 8px 24px rgba(51,63,72,.12);min-width:200px;z-index:100;padding:4px 0;overflow:hidden;}',
      '#so-more-dropdown.so-open{display:block;}',
      '.so-dropdown-item{display:flex;align-items:center;gap:10px;padding:10px 16px;font-size:13px;color:#637380;text-decoration:none;transition:background .12s,color .12s;font-family:"DM Sans",sans-serif;}',
      '.so-dropdown-item:hover{background:#faf8f3;color:#333f48;}',
      '.so-dropdown-item svg{width:14px;height:14px;stroke:currentColor;opacity:.6;flex-shrink:0;}',

      /* Tab panel */
      '.so-tab-panel{display:none;flex:1;min-height:0;overflow-y:auto;overflow-x:hidden;}',
      '.so-tab-panel.so-panel-active{display:flex;flex-direction:column;}',
      '#so-panel-quiz{overflow-y:auto;}',
      '#so-quiz-inner{padding:20px 24px 32px;display:flex;flex-direction:column;gap:16px;max-width:760px;}',

      /* Completion badges */
      '#so-completion-badges{display:flex;flex-wrap:wrap;gap:8px;}',
      '.so-completion-badge{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:99px;background:#166534;color:#fff;font-family:"DM Sans",sans-serif;font-size:11px;font-weight:600;}',
      '.so-completion-badge svg{width:13px;height:13px;stroke:#fff;flex-shrink:0;}',

      /* Action button */
      '#so-action-wrap{display:flex;}',
      '.so-quiz-start-btn{display:inline-flex;align-items:center;gap:8px;padding:10px 22px;background:#333f48;color:#fff;border:none;border-radius:9px;font-family:"DM Sans",sans-serif;font-size:13px;font-weight:600;cursor:pointer;transition:background .15s;}',
      '.so-quiz-start-btn:hover{background:#8f7f55;}',
      '.so-quiz-action-form{margin:0;}',

      /* Info card */
      '.so-info-card{background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 1px 4px rgba(51,63,72,.08);}',
      '.so-info-card-body{padding:16px 20px;display:flex;flex-direction:column;gap:8px;}',
      '.so-quiz-info-row{font-size:13px;color:#637380;font-family:"DM Sans",sans-serif;}',

      /* Grade */
      '#so-grade-wrap{background:#fff;border-radius:12px;padding:18px 20px;box-shadow:0 1px 4px rgba(51,63,72,.08);}',
      '.so-grade-display{font-family:"Sora",sans-serif;font-size:22px;font-weight:700;color:#333f48;letter-spacing:-.4px;}',

      /* Your attempts heading */
      '.so-your-attempts{display:flex;flex-direction:column;gap:12px;}',
      '.so-section-heading{font-family:"Sora",sans-serif;font-size:13px;font-weight:700;color:#333f48;margin:0;letter-spacing:-.2px;}',

      /* Attempt cards */
      '.so-attempt-card{background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 1px 4px rgba(51,63,72,.08);}',
      '.so-attempt-card-header{font-family:"Sora",sans-serif;font-size:14px;font-weight:700;color:#333f48;padding:14px 20px;border-bottom:1px solid #eceef2;}',
      '.so-attempt-row{display:flex;align-items:center;padding:10px 20px;border-bottom:1px solid #eceef2;gap:16px;}',
      '.so-attempt-row:last-of-type{border-bottom:none;}',
      '.so-attempt-label{font-size:12px;font-weight:600;color:#8e9396;width:100px;flex-shrink:0;text-align:right;}',
      '.so-attempt-value{font-size:13px;color:#333f48;}',
      '.so-attempt-grade{font-weight:700;color:#166534;font-size:14px;}',
      '.so-attempt-review{padding:12px 20px;border-top:1px solid #eceef2;}',
      '.so-attempt-review a{font-size:12px;font-weight:600;color:#8f7f55;text-decoration:none;}',
      '.so-attempt-review a:hover{color:#726544;text-decoration:underline;}',
    ].join('\n');
    document.head.appendChild(style);

  } /* end build() */

  var buildAttempts = 0;
  function tryBuild(){
    if (document.getElementById('so-quiz-page')) return;
    var result = build();
    if (result === false && ++buildAttempts < 50) setTimeout(tryBuild, 300);
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){ setTimeout(tryBuild, 200); });
  } else {
    setTimeout(tryBuild, 200);
  }
  window.addEventListener('load', function(){ setTimeout(tryBuild, 400); });

})();

(function () {
  var body = document.body;
  if (!body) return;
  var bodyId    = body.id || '';
  var bodyClass = body.className || '';

  /* Only run on quiz ATTEMPT pages (not view/summary) */
  var isAttemptPage = bodyId === 'page-mod-quiz-attempt' ||
    bodyClass.indexOf('page-mod-quiz-attempt') > -1;

  if (!isAttemptPage) return;

  /* ════════════════════════════════════════════════════════════
     QUIZ ATTEMPT PAGE — wrap native form in EH2-style shell
     Strategy: keep the real Moodle quiz form intact (timer, autosave,
     keyboard nav all work) but style the container to match other pages.
  ════════════════════════════════════════════════════════════ */

  /* Hide sidebar + navbar */
  var sb = document.getElementById('so-sidebar');
  if (sb) sb.style.display = 'none';
  var ss = document.getElementById('so-shift-style');
  if (ss) ss.textContent = '#page,#page-wrapper{margin-left:0!important;width:100%!important;}';
  var nb = document.querySelector('.navbar');
  if (nb) nb.style.display = 'none';

  function build() {
    if (document.getElementById('so-attempt-shell')) return;

    /* Need both course index sections and the quiz form */
    var sections  = document.querySelectorAll('.courseindex-section');
    var quizForm  = document.getElementById('responseform');
    if (!sections.length || !quizForm) return false;

    /* ── Names ── */
    var courseName = '';
    var courseLink = document.querySelector('ol.breadcrumb a[href*="/course/view.php"]');
    if (courseLink) courseName = courseLink.getAttribute('title') || courseLink.textContent.trim();
    if (!courseName) {
      var tp = document.title.split('|');
      if (tp.length >= 2) courseName = tp[tp.length - 2].trim();
    }
    if (!courseName) courseName = 'Course';

    var actName = '';
    var h1 = document.querySelector('.page-header-headings h1');
    if (h1) actName = h1.textContent.trim();
    if (!actName) actName = document.title.split('|')[0].trim();
    actName = actName.replace(/^[A-Z0-9]+:\s*/,'');

    var courseHref = (courseLink && courseLink.href) ? courseLink.href : 'https://smileon.rinseai.com.au/';

    /* ── Certificate link ── */
    var certLink = '';
    document.querySelectorAll('.courseindex-item a.courseindex-link').forEach(function(a){
      if (/certificate/i.test(a.textContent) && !certLink) certLink = a.href;
    });

    /* ── Progress ── */
    var allCM = document.querySelectorAll('.courseindex-item:not(.courseindex-section-title)');
    var doneCM = document.querySelectorAll('.completioninfo.completion-complete,.completioninfo.completion_complete');
    var pct = allCM.length ? Math.round((doneCM.length / allCM.length) * 100) : 0;

    /* ── Build left panel sections HTML ── */
    var sectionsHTML = '';
    sections.forEach(function (sec, sIdx) {
      if (sIdx === 0) return;
      var secLink = sec.querySelector('.courseindex-section-title a.courseindex-link');
      var secTitle = secLink ? secLink.textContent.trim() : 'Section ' + (sIdx);
      secTitle = secTitle.replace(/expand\s*collapse/gi,'').replace(/highlighted/gi,'').replace(/\s{2,}/g,' ').trim();

      var itemsHTML = '';
      sec.querySelectorAll('li.courseindex-item').forEach(function(item){
        var link = item.querySelector('a.courseindex-link');
        if (!link) return;
        var isDone  = !!item.querySelector('.completion-complete,.completion_complete');
        var itemName = link.textContent.trim();
        var href     = link.href;
        var isCert   = /certificate/i.test(itemName);

        /* Mark the quiz item as active — match by quiz id in URL */
        var isActive = false;
        var cmidMatch = window.location.href.match(/cmid=(\d+)/);
        var cmid = cmidMatch ? cmidMatch[1] : '';
        if (cmid && href.indexOf('id=' + cmid) > -1 && href.indexOf('quiz') > -1) isActive = true;

        var dotCls  = isActive ? 'so-dot active' : isDone ? 'so-dot done' : 'so-dot';
        var itemCls = 'so-panel-item' + (isActive ? ' active' : '') + (isDone ? ' watched' : '') + (isCert ? ' so-cert-item' : '');
        var badge   = isActive
          ? '<span class="so-item-badge so-badge-watching">Active</span>'
          : isDone && !isCert
            ? '<span class="so-item-badge so-badge-done"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></span>'
            : '';

        var row = isCert
          ? '<div class="so-cert-row"><a class="'+itemCls+'" href="'+href+'"><span class="'+dotCls+'"></span><span class="so-item-name">'+itemName+'</span>'+badge+'</a></div>'
          : '<a class="'+itemCls+'" href="'+href+'"><span class="'+dotCls+'"></span><span class="so-item-name">'+itemName+'</span>'+badge+'</a>';
        itemsHTML += row;
      });

      var secLabel = /^section\s*\d/i.test(secTitle) ? secTitle : 'Section '+(sIdx)+' \u2014 '+secTitle;
      sectionsHTML += '<div class="so-panel-section"><span class="so-section-label">'+secLabel+'</span>'+itemsHTML+'</div>';
    });

    var certInfo   = getCertInfo();
var certLink   = certInfo.certLink;

var certBtnHTML = '';
certBtnHTML =
  '<div id="so-cert-btn-wrap">' +
    '<div id="so-cert-btn" class="so-cert-locked" title="Complete all activities to unlock your certificate">' +
      '<svg fill="none" viewBox="0 0 24 24" stroke-width="2">' +
        '<path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>' +
      '</svg>' +
      'Certificate locked' +
    '</div>' +
  '</div>';

    /* ── Quiz nav buttons (from the right drawer) ── */
    var navBtns = document.querySelector('.qn_buttons');
    var finishLink = document.querySelector('a.endtestlink');
    var navHTML = '';
    if (navBtns) {
      var btns = navBtns.querySelectorAll('a.qnbutton');
      var btnRowHTML = '';
      btns.forEach(function(btn){
        var num = btn.textContent.replace(/[^0-9]/g,'').trim();
        var isAnswered = btn.classList.contains('answersaved') || btn.classList.contains('complete');
        var isCurrent  = btn.classList.contains('thispage');
        var cls = 'so-qnav-btn' + (isAnswered ? ' answered' : '') + (isCurrent ? ' current' : '');
        btnRowHTML += '<a class="'+cls+'" href="'+btn.href+'">'+num+'</a>';
      });
      navHTML =
        '<div id="so-quiz-nav-block">' +
          '<div id="so-qnav-label">Quiz Navigation</div>' +
          '<div id="so-qnav-grid">'+btnRowHTML+'</div>' +
          (finishLink
            ? '<a id="so-finish-link" href="'+finishLink.href+'">Finish attempt \u2192</a>'
            : '') +
        '</div>';
    }

    /* ── Timer ── */
    var timerWrap = document.getElementById('quiz-timer-wrapper');
    var timerHTML = timerWrap ? timerWrap.outerHTML : '';

    /* ── Build the full shell ── */
    var shell = document.createElement('div');
    shell.id = 'so-attempt-shell';
    shell.innerHTML =
      /* Top bar */
      '<div id="so-course-topbar">' +
        '<div id="so-topbar-left">' +
          '<button id="so-back-btn">' +
            '<svg fill="none" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>' +
            'Back' +
          '</button>' +
          '<span class="so-tb-divider"></span>' +
          '<span id="so-breadcrumb">' +
            '<a href="'+courseHref+'" class="so-bc-link">'+courseName+'</a>' +
            ' &nbsp;/&nbsp; <strong>'+actName+'</strong>' +
          '</span>' +
        '</div>' +
        '<div id="so-topbar-right">' +
          '<div id="so-timer-slot"></div>' +
        '</div>' +
      '</div>' +

      /* Body row */
      '<div id="so-course-body">' +

        /* Left panel */
        '<div id="so-course-panel">' +
          '<div id="so-panel-header">' +
            '<div id="so-panel-course-meta"><h2 id="so-panel-course-title">'+courseName+'</h2></div>' +
            '<div id="so-panel-divider"></div>' +
            '<div id="so-panel-label-row"><span id="so-panel-label">Course Content</span></div>' +
          '</div>' +
          '<div id="so-panel-list">'+sectionsHTML+'</div>' +
        '</div>' +

        /* Main */
        '<div id="so-course-main">' +

          /* Sub-header: quiz title + nav */
          '<div id="so-attempt-subheader">' +
            '<div id="so-attempt-title">'+actName+'</div>' +
            navHTML +
          '</div>' +

          /* Quiz content area — form will be moved here */
          '<div id="so-attempt-content">' +
            '<div id="so-quiz-form-slot"></div>' +
          '</div>' +

        '</div>' + /* end so-course-main */
      '</div>'; /* end so-course-body */

    document.body.appendChild(shell);

    /* ── Move timer into topbar ── */
    var timerSlot = document.getElementById('so-timer-slot');
    if (timerSlot && timerWrap) {
      timerSlot.appendChild(timerWrap);
    }

    /* ── Move the quiz form into our content slot ── */
    var formSlot = document.getElementById('so-quiz-form-slot');
    if (formSlot && quizForm) {
      formSlot.appendChild(quizForm);
    }

    /* ── Move the connection-error/ok alerts too ── */
    ['connection-error','connection-ok'].forEach(function(id){
      var el = document.getElementById(id);
      if (el && formSlot) formSlot.appendChild(el);
    });

    /* ── Back button ── */
    document.getElementById('so-back-btn').addEventListener('click', function() {
      window.location.href = 'https://smileon.rinseai.com.au/';
    });

    /* ── Breadcrumb link ── */
    var bcLink = document.querySelector('.so-bc-link');
    if (bcLink) bcLink.addEventListener('click', function(e){
      e.preventDefault();
      window.location.href = courseHref;
    });

    /* ── Inject CSS ── */
    var style = document.createElement('style');
    style.textContent = [
      '@import url("https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap");',

      /* Shell wrapper */
      '#so-attempt-shell{position:fixed;inset:0;display:flex;flex-direction:column;font-family:"DM Sans",sans-serif;background:#eceef2;z-index:99999;overflow:hidden;}',

      /* Top bar */
      '#so-course-topbar{height:52px;min-height:52px;background:#fff;border-bottom:1.5px solid #eceef2;display:flex;align-items:center;justify-content:space-between;padding:0 24px 0px 0px;flex-shrink:0;box-shadow:0 1px 6px rgba(51,63,72,.06);gap:16px;}',
      '#so-topbar-left{display:flex;align-items:center;gap:12px;flex:1;min-width:0;}',
      '#so-back-btn{display:flex;align-items:center;justify-content:center;gap:5px;font-size:16px;height:51px;width:259px;font-weight:600;color:#ffffff;background:#8f7f55;border:none;cursor:pointer;padding:0;white-space:nowrap;font-family:"DM Sans",sans-serif;transition:color .15s;}',
      '#so-back-btn:hover{color:#ffffff;}',
      '#so-back-btn svg{width:16px;height:16px;stroke:currentColor;}',
      '.so-tb-divider{width:1px;height:16px;background:#eceef2;flex-shrink:0;}',
      '#so-breadcrumb{font-size:12px;color:#8e9396;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}',
      '#so-breadcrumb strong{color:#333f48;font-weight:600;}',
      '.so-bc-link{color:#8e9396;text-decoration:none;cursor:pointer;}',
      '.so-bc-link:hover{color:#8f7f55;}',
      '#so-topbar-right{display:flex;align-items:center;gap:12px;flex-shrink:0;}',
      '#so-timer-slot{display:flex;align-items:center;gap:8px;}',

      /* Timer — restyle Moodle's timer to fit topbar */
      '#so-timer-slot #quiz-timer-wrapper{display:flex!important;align-items:center;gap:8px;margin:0!important;}',
      '#so-timer-slot #quiz-timer{background:#fff;border:1.5px solid #eceef2;border-radius:8px;padding:5px 12px;font-family:"DM Sans",sans-serif;font-size:12px;font-weight:600;color:#333f48;display:flex;align-items:center;gap:6px;}',
      '#so-timer-slot #quiz-time-left{color:#8f7f55;font-size:13px;font-weight:700;font-variant-numeric:tabular-nums;}',
      '#so-timer-slot .quiz-timer-inner.late #quiz-time-left{color:#ef4444;}',
      '#so-timer-slot #toggle-timer{background:#eceef2;border:none;border-radius:6px;padding:4px 10px;font-size:11px;font-weight:600;color:#637380;cursor:pointer;font-family:"DM Sans",sans-serif;}',
      '#so-timer-slot #toggle-timer:hover{background:#ddd4bc;color:#333f48;}',

      /* Body */
      '#so-course-body{display:flex;flex:1;overflow:hidden;min-height:0;}',

      /* Left panel */
      '#so-course-panel{width:260px;min-width:260px;background:#fff;border-right:1.5px solid #eceef2;display:flex;flex-direction:column;overflow:hidden;flex-shrink:0;}',
      '#so-panel-header{padding:0;border-bottom:1.5px solid #eceef2;flex-shrink:0;}',
      '#so-panel-course-meta{padding:14px 16px;}',
      '#so-panel-course-title{font-family:"Sora",sans-serif;font-size:14px;font-weight:700;color:#333f48;margin:0;letter-spacing:-.2px;line-height:1.3;}',
      '#so-panel-divider{height:1px;background:#eceef2;}',
      '#so-panel-label-row{display:flex;align-items:center;padding:10px 16px 6px;}',
      '#so-panel-label{font-size:11px;font-weight:700;color:#8e9396;text-transform:uppercase;letter-spacing:.8px;}',
      '.so-progress-row{display:flex;justify-content:space-between;font-size:11px;color:#8e9396;margin-bottom:5px;padding:0 16px;}',
      '.so-progress-pct{color:#8f7f55;font-weight:700;}',
      '.so-progress-track{height:4px;background:#eceef2;border-radius:99px;overflow:hidden;margin:0 16px 12px;}',
      '.so-progress-fill{height:4px;background:linear-gradient(90deg,#726544,#8f7f55);border-radius:99px;}',
      '#so-panel-list{flex:1;overflow-y:auto;padding:4px 0 24px;}',
      '#so-panel-list::-webkit-scrollbar{width:3px;}',
      '#so-panel-list::-webkit-scrollbar-thumb{background:#ddd4bc;border-radius:99px;}',
      '.so-panel-section+.so-panel-section{border-top:1px solid #eceef2;margin-top:4px;padding-top:4px;}',
      '.so-section-label{display:block;padding:10px 16px 4px;font-size:10px;font-weight:700;color:#8e9396;text-transform:uppercase;letter-spacing:.8px;line-height:1.3;}',
      '.so-panel-item{display:flex;align-items:center;gap:9px;padding:8px 16px 8px 24px;font-size:13px;font-weight:400;color:#637380;border-left:2px solid transparent;text-decoration:none;cursor:pointer;transition:background .12s,color .12s,border-color .12s;}',
      '.so-panel-item:hover{background:#faf8f3;color:#333f48;text-decoration:none;}',
      '.so-panel-item.active{background:#faf8f3;color:#333f48;border-left-color:#8f7f55;font-weight:600;}',
      '.so-panel-item.watched{opacity:.75;}',
      '.so-dot{width:9px;height:9px;border-radius:50%;border:1.5px solid #c9ccce;background:transparent;flex-shrink:0;}',
      '.so-dot.done{background:#8f7f55;border-color:#8f7f55;}',
      '.so-dot.active{background:#333f48;border-color:#333f48;}',
      '.so-item-name{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}',
      '.so-item-badge{flex-shrink:0;margin-left:auto;display:flex;align-items:center;border-radius:99px;}',
      '.so-badge-watching{font-size:9px;font-weight:700;color:#8f7f55;background:rgba(143,127,85,.12);padding:2px 7px;border-radius:99px;text-transform:uppercase;}',
      '.so-badge-done{width:16px;height:16px;background:#8f7f55;border-radius:50%;}',
      '.so-badge-done svg{width:10px;height:10px;stroke:#fff;}',
      '.so-cert-row{padding:0;}',
      '.so-panel-item.so-cert-item{color:#8f7f55;font-style:italic;font-size:12px;}',
      '#so-cert-btn-wrap{padding:12px 16px 4px;border-top:1.5px solid #eceef2;margin-top:8px;}',
      '#so-cert-btn{display:flex;align-items:center;justify-content:center;gap:7px;width:100%;padding:10px 16px;background:linear-gradient(135deg,#333f48,#4a5a66);color:#fff;border-radius:10px;font-family:"DM Sans",sans-serif;font-size:13px;font-weight:600;text-decoration:none;transition:background .15s;box-shadow:0 2px 8px rgba(51,63,72,.2);}',
      '#so-cert-btn:hover{background:linear-gradient(135deg,#8f7f55,#726544);text-decoration:none;color:#fff;}',
      '#so-cert-btn svg{width:15px;height:15px;stroke:currentColor;flex-shrink:0;}',

      /* Main */
      '#so-course-main{flex:1;overflow:hidden;background:#eceef2;min-width:0;display:flex;flex-direction:column;min-height:0;}',

      /* Sub-header: quiz title + nav block side by side */
      '#so-attempt-subheader{background:#fff;border-bottom:1.5px solid #eceef2;padding:0 24px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;gap:16px;min-height:48px;box-shadow:0 1px 4px rgba(51,63,72,.04);}',
      '#so-attempt-title{font-family:"Sora",sans-serif;font-size:14px;font-weight:700;color:#333f48;letter-spacing:-.2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}',

      /* Quiz navigation block in subheader */
      '#so-quiz-nav-block{display:flex;align-items:center;gap:12px;flex-shrink:0;}',
      '#so-qnav-label{font-size:11px;font-weight:700;color:#8e9396;text-transform:uppercase;letter-spacing:.7px;white-space:nowrap;}',
      '#so-qnav-grid{display:flex;flex-wrap:wrap;gap:4px;max-width:320px;}',
      '.so-qnav-btn{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:6px;font-family:"DM Sans",sans-serif;font-size:11px;font-weight:600;color:#637380;background:#eceef2;text-decoration:none;transition:background .12s,color .12s;border:1.5px solid transparent;}',
      '.so-qnav-btn:hover{background:#ddd4bc;color:#333f48;text-decoration:none;}',
      '.so-qnav-btn.answered{background:#8f7f55;color:#fff;border-color:#8f7f55;}',
      '.so-qnav-btn.current{border-color:#333f48;color:#333f48;font-weight:700;background:#fff;}',
      '.so-qnav-btn.answered.current{background:#726544;border-color:#726544;color:#fff;}',
      '#so-finish-link{display:inline-flex;align-items:center;padding:6px 14px;background:#333f48;color:#fff;border-radius:8px;font-family:"DM Sans",sans-serif;font-size:12px;font-weight:600;text-decoration:none;white-space:nowrap;transition:background .15s;flex-shrink:0;}',
      '#so-finish-link:hover{background:#8f7f55;color:#fff;text-decoration:none;}',

      /* Quiz content area */
      '#so-attempt-content{flex:1;overflow-y:auto;overflow-x:hidden;padding:0;}',
      '#so-quiz-form-slot{padding:20px 24px 40px;max-width:900px;margin:0 auto;}',

      /* ══ RESTYLE MOODLE QUIZ QUESTIONS ══ */

      /* Each question block */
      '#so-quiz-form-slot .que{background:#fff;border-radius:12px;margin-bottom:14px;overflow:hidden;box-shadow:0 1px 4px rgba(51,63,72,.08);display:flex;gap:0;}',

      /* Info sidebar (question number, state, grade) */
      '#so-quiz-form-slot .que .info{width:110px;min-width:110px;background:#f8f9f9;border-right:1px solid #eceef2;padding:14px 12px;display:flex;flex-direction:column;gap:4px;flex-shrink:0;}',
      '#so-quiz-form-slot .que .info .no{font-family:"Sora",sans-serif;font-size:12px;font-weight:700;color:#333f48;margin:0 0 2px;}',
      '#so-quiz-form-slot .que .info .no .qno{color:#8f7f55;}',
      '#so-quiz-form-slot .que .info .state{font-size:10px;font-weight:500;color:#8e9396;padding:2px 6px;background:#eceef2;border-radius:99px;display:inline-block;width:fit-content;}',
      '#so-quiz-form-slot .que .info .grade{font-size:10px;color:#8e9396;margin-top:2px;}',
      '#so-quiz-form-slot .que .info .questionflag{margin-top:6px;}',
      '#so-quiz-form-slot .que .info .questionflag a{font-size:10px;color:#c9ccce;text-decoration:none;display:flex;align-items:center;gap:3px;}',
      '#so-quiz-form-slot .que .info .questionflag img{width:12px;height:12px;}',
      '#so-quiz-form-slot .que .info .questionflag a:hover{color:#8f7f55;}',

      /* Content area */
      '#so-quiz-form-slot .que .content{flex:1;padding:16px 20px;min-width:0;}',
      '#so-quiz-form-slot .que .qtext{font-family:"DM Sans",sans-serif;font-size:14px;font-weight:500;color:#333f48;line-height:1.6;margin-bottom:14px;}',
      '#so-quiz-form-slot .que .qtext p{margin:0;}',
      '#so-quiz-form-slot .que .qtext a{color:#8f7f55;}',

      /* Answer choices */
      '#so-quiz-form-slot .que .answer{display:flex;flex-direction:column;gap:8px;}',
      '#so-quiz-form-slot .que .answer .r0,#so-quiz-form-slot .que .answer .r1{display:flex;align-items:flex-start;gap:10px;padding:10px 14px;border-radius:8px;border:1.5px solid #eceef2;background:#fafafa;cursor:pointer;transition:border-color .15s,background .15s;}',
      '#so-quiz-form-slot .que .answer .r0:hover,#so-quiz-form-slot .que .answer .r1:hover{border-color:#ddd4bc;background:#faf8f3;}',
      '#so-quiz-form-slot .que .answer input[type="radio"]{width:16px;height:16px;min-width:16px;margin-top:1px;accent-color:#8f7f55;cursor:pointer;}',
      '#so-quiz-form-slot .que .answer .answernumber{font-size:13px;font-weight:600;color:#8f7f55;white-space:nowrap;min-width:20px;}',
      '#so-quiz-form-slot .que .answer .flex-fill{font-size:13px;color:#333f48;line-height:1.5;}',

      /* Highlight selected answer row */
      '#so-quiz-form-slot .que .answer input[type="radio"]:checked ~ .d-flex,'+
      '#so-quiz-form-slot .que .answer .r0:has(input:checked),'+
      '#so-quiz-form-slot .que .answer .r1:has(input:checked){border-color:#8f7f55;background:#faf8f3;}',

      /* Submit / Finish button */
      '#so-quiz-form-slot .submitbtns{margin-top:20px;padding:0 0 8px;}',
      '#so-quiz-form-slot .mod_quiz-next-nav{background:#333f48;color:#fff;border:none;border-radius:9px;padding:10px 24px;font-family:"DM Sans",sans-serif;font-size:13px;font-weight:600;cursor:pointer;transition:background .15s;}',
      '#so-quiz-form-slot .mod_quiz-next-nav:hover{background:#8f7f55;}',

      /* Tertiary nav (Back link) — hide, we have our own */
      '#so-quiz-form-slot .tertiary-navigation{display:none!important;}',

      /* Connection alerts */
      '#connection-error,#connection-ok{margin:8px 0;padding:12px 16px;border-radius:8px;font-size:13px;font-family:"DM Sans",sans-serif;}',
      '#connection-error{background:#fff5f5;color:#a32d2d;border:1px solid #f09595;}',
      '#connection-ok{background:#f0fff4;color:#166534;border:1px solid #166534;}',

      /* Accessibility hides */
      '#so-quiz-form-slot .accesshide{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;}',
      '#so-quiz-form-slot .qtype_multichoice_clearchoice{display:none!important;}',
    ].join('\n');
    document.head.appendChild(style);

  } /* end build() */

  var buildAttempts = 0;
  function tryBuild() {
    if (document.getElementById('so-attempt-shell')) return;
    var result = build();
    if (result === false && ++buildAttempts < 30) setTimeout(tryBuild, 300);
    var fg = document.getElementById('__so-flash-guard');
    if (fg) fg.remove();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { setTimeout(tryBuild, 200); });
  } else {
    setTimeout(tryBuild, 200);
  }
  window.addEventListener('load', function() { setTimeout(tryBuild, 400); });

})();

(function () {
  var body = document.body;
  if (!body) return;
  var bodyId    = body.id || '';
  var bodyClass = body.className || '';

  /* Only run on customcert view pages */
  var isCertPage =
    bodyId === 'page-mod-customcert-view' ||
    bodyClass.indexOf('cm-type-customcert') > -1 ||
    bodyClass.indexOf('path-mod-customcert') > -1;

  if (!isCertPage) return;

  /* Hide sidebar, navbar */
  var sb = document.getElementById('so-sidebar');
  if (sb) sb.style.display = 'none';
  var ss = document.getElementById('so-shift-style');
  if (ss) ss.textContent = '#page,#page-wrapper{margin-left:0!important;width:100%!important;}';
  var nb = document.querySelector('.navbar');
  if (nb) nb.style.display = 'none';

  function build() {
    if (document.getElementById('so-cert-page')) return true;

    var sections = document.querySelectorAll('.courseindex-section');
    if (!sections.length) return false;

    /* ── Names ── */
    var courseLink = document.querySelector('ol.breadcrumb a[href*="/course/view.php"]');
    var courseName = courseLink
      ? (courseLink.getAttribute('title') || courseLink.textContent.trim())
      : '';
    if (!courseName) {
      var tp = document.title.split('|');
      courseName = tp.length >= 2 ? tp[tp.length - 2].trim() : 'Course';
    }
    var courseHref = (courseLink && courseLink.href) ? courseLink.href : 'https://smileon.rinseai.com.au/';

    var h1 = document.querySelector('.page-header-headings h1');
    var actName = h1 ? h1.textContent.trim() : document.title.split('|')[0].trim();
    actName = actName.replace(/^[A-Z]+:\s*/, '');

    /* ── Progress ── */
    var allCM = document.querySelectorAll('.courseindex-item:not(.courseindex-section-title)');
    var doneCM = document.querySelectorAll('.completioninfo.completion-complete, .completioninfo.completion_complete');
    var pct = allCM.length ? Math.round((doneCM.length / allCM.length) * 100) : 0;

    /* ── Completion status ── */
    var isCompleted = !!document.querySelector('.completion-complete, .completion_complete');
    var badgeEl = document.querySelector('.automatic-completion-conditions .badge, .completion-info .badge');
    var completionBadge = badgeEl ? badgeEl.textContent.trim() : '';

    /* ── Certificate form ── */
    var certForm = document.querySelector('.singlebutton form[action*="customcert"]');
    var certFormAction = certForm ? certForm.getAttribute('action') : '#';
    var certFormMethod = certForm ? certForm.getAttribute('method') : 'get';
    var certHiddenInputs = '';
    if (certForm) {
      certForm.querySelectorAll('input[type="hidden"]').forEach(function(inp) {
        certHiddenInputs += '<input type="hidden" name="' + inp.name + '" value="' + inp.value + '">';
      });
    }

    /* ── Previous activity link ── */
    var allActivityLinks = [];
    sections.forEach(function(sec) {
      sec.querySelectorAll('li.courseindex-item').forEach(function(item) {
        var link = item.querySelector('a.courseindex-link');
        if (link && link.href) allActivityLinks.push(link.href.split('#')[0]);
      });
    });
    var currentUrlClean = window.location.href.split('#')[0].split('?')[0];
    var currentIdx = -1;
    allActivityLinks.forEach(function(href, i) {
      if (href.split('?')[0] === currentUrlClean) currentIdx = i;
    });
    var prevUrl = currentIdx > 0 ? allActivityLinks[currentIdx - 1] : null;

    /* ── Left panel sections HTML ── */
    var sectionsHTML = '';
    sections.forEach(function(sec, sIdx) {
      if (sIdx === 0) return;
      var secLink = sec.querySelector('.courseindex-section-title a.courseindex-link');
      var secTitle = secLink ? secLink.textContent.trim() : 'Section ' + sIdx;
      secTitle = secTitle.replace(/expand\s*collapse/gi, '').replace(/highlighted/gi, '').replace(/\s{2,}/g, ' ').trim();

      var itemsHTML = '';
      sec.querySelectorAll('li.courseindex-item').forEach(function(item) {
        var link = item.querySelector('a.courseindex-link');
        if (!link) return;
        var isDone   = !!item.querySelector('.completion-complete, .completion_complete');
        var itemName = link.textContent.trim();
        var href     = link.href;
        var isCert   = /certificate/i.test(itemName) || href.indexOf('customcert') > -1;
        var isActive = href.split('#')[0].split('?')[0] === currentUrlClean;
        var dotCls   = isActive ? 'so-dot active' : isDone ? 'so-dot done' : 'so-dot';
        var itemCls  = 'so-panel-item' + (isActive ? ' active' : '') + (isDone ? ' watched' : '') + (isCert ? ' so-cert-item' : '');
        var badge    = isActive
          ? '<span class="so-item-badge so-badge-watching">Viewing</span>'
          : (isDone && !isCert ? '<span class="so-item-badge so-badge-done"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></span>' : '');
        itemsHTML += '<a class="' + itemCls + '" href="' + href + '"><span class="' + dotCls + '"></span><span class="so-item-name">' + itemName + '</span>' + badge + '</a>';
      });

      sectionsHTML += '<div class="so-panel-section"><span class="so-section-label">Section ' + sIdx + ' \u2014 ' + secTitle + '</span>' + itemsHTML + '</div>';
    });

    /* ── Secondary nav tabs from Moodle ── */
    var tabsHTML = '';
    var navItems = document.querySelectorAll('.secondary-navigation ul.nav-tabs > li.nav-item[data-key]');
    navItems.forEach(function(li) {
      var a = li.querySelector('a[role="menuitem"]');
      if (!a) return;
      var label = a.textContent.trim();
      if (!label || label === 'More') return;
      var href = a.href || '#';
      var isActive = a.classList.contains('active') || a.getAttribute('aria-current') === 'true';
      tabsHTML += '<a class="so-tab' + (isActive ? ' so-tab-active' : '') + '" href="' + href + '">' + label + '</a>';
    });
    if (!tabsHTML) return false; /* Nav not ready yet, retry */

    /* ── Build page ── */
    var pg = document.createElement('div');
    pg.id = 'so-cert-page';
    pg.innerHTML =
      '<div id="so-course-topbar">' +
        '<div id="so-topbar-left">' +
          '<button id="so-back-btn"><svg fill="none" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>Back to Home</button>' +
          '<span class="so-tb-divider"></span>' +
          '<span id="so-breadcrumb"><a href="' + courseHref + '" class="so-bc-link">' + courseName + '</a> &nbsp;/&nbsp; <strong>' + actName + '</strong></span>' +
        '</div>' +
        '<div id="so-topbar-right">' +
          (prevUrl ? '<a id="so-prev-btn" href="' + prevUrl + '" class="so-topbar-action-btn so-action-ghost"><svg fill="none" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>Previous</a>' : '') +
        '</div>' +
      '</div>' +
      '<div id="so-course-body">' +
        '<div id="so-course-panel">' +
          '<div id="so-panel-header">' +
            '<div id="so-panel-course-meta"><h2 id="so-panel-course-title">' + courseName + '</h2></div>' +
            '<div id="so-panel-divider"></div>' +
            '<div id="so-panel-label-row"><span id="so-panel-label">Course Content</span></div>' +
          '</div>' +
          '<div id="so-panel-list">' + sectionsHTML + '</div>' +
        '</div>' +
        '<div id="so-course-main">' +
          '<div id="so-tab-nav">' + tabsHTML + '</div>' +
          '<div id="so-panel-cert">' +
            '<div id="so-cert-inner">' +
              '<div id="so-cert-hero">' +
                '<div id="so-cert-hero-icon">' +
                  '<svg fill="none" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">' +
                    '<circle cx="40" cy="40" r="38" stroke="#ddd4bc" stroke-width="2" fill="#faf8f3"/>' +
                    '<path d="M40 20 L44.9 33.8 L59.5 33.8 L47.8 42.2 L52.7 56 L40 47.5 L27.3 56 L32.2 42.2 L20.5 33.8 L35.1 33.8 Z" fill="#8f7f55" stroke="none"/>' +
                  '</svg>' +
                '</div>' +
                '<div id="so-cert-hero-text">' +
                  '<h1 id="so-cert-title">' + actName + '</h1>' +
                  '<p id="so-cert-subtitle">You have earned this certificate for completing the course.</p>' +
                '</div>' +
              '</div>' +
              '<div class="so-cert-status-card">' +
                '<div class="so-cert-status-row">' +
                  '<div class="so-cert-status-icon">' +
                    (isCompleted
                      ? '<svg fill="none" viewBox="0 0 24 24" stroke-width="2.5"><circle cx="12" cy="12" r="10" fill="#166534" stroke="none"/><path stroke-linecap="round" stroke-linejoin="round" stroke="#fff" d="M7 12l3 3 7-7"/></svg>'
                      : '<svg fill="none" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" stroke="#8e9396" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>') +
                  '</div>' +
                  '<div class="so-cert-status-info">' +
                    '<div class="so-cert-status-label">Completion Status</div>' +
                    '<div class="so-cert-status-value">' + (isCompleted ? 'Certificate earned' : (completionBadge || 'To do: View certificate')) + '</div>' +
                  '</div>' +
                '</div>' +
              '</div>' +
              '<div class="so-cert-action-card">' +
                '<div class="so-cert-action-left">' +
                  '<div class="so-cert-action-title">Download your certificate</div>' +
                  '<div class="so-cert-action-desc">Click the button to view and download your personalised PDF certificate.</div>' +
                '</div>' +
                '<form method="' + certFormMethod + '" action="' + certFormAction + '" class="so-cert-form">' +
                  certHiddenInputs +
                  '<button type="submit" id="so-view-cert-btn"><svg fill="none" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>View Certificate</button>' +
                '</form>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';

    document.body.appendChild(pg);

    /* ── Back button — bind directly, no clone needed since pg is freshly created ── */
    document.getElementById('so-back-btn').addEventListener('click', function() {
      window.location.href = 'https://smileon.rinseai.com.au/';
    });

    /* ── Inject CSS ── */
    var style = document.createElement('style');
    style.textContent = [
      '@import url("https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap");',
      '#so-cert-page{position:fixed;inset:0;display:flex;flex-direction:column;font-family:"DM Sans",sans-serif;background:#eceef2;z-index:99999;overflow:hidden;}',
      '#so-course-topbar{height:52px;min-height:52px;background:#fff;border-bottom:1.5px solid #eceef2;display:flex;align-items:center;justify-content:space-between;padding:0 24px 0px 0px;flex-shrink:0;box-shadow:0 1px 6px rgba(51,63,72,.06);gap:16px;}',
      '#so-topbar-left{display:flex;align-items:center;gap:12px;flex:1;min-width:0;}',
      '#so-back-btn{display:flex;align-items:center;justify-content:center;gap:5px;font-size:16px;height:51px;width:259px;font-weight:600;color:#ffffff;background:#8f7f55;border:none;cursor:pointer;padding:0;white-space:nowrap;font-family:"DM Sans",sans-serif;transition:color .15s;}',
      '#so-back-btn:hover{color:#ffffff;}',
      '#so-back-btn svg{width:16px;height:16px;stroke:currentColor;}',
      '.so-tb-divider{width:1px;height:16px;background:#eceef2;flex-shrink:0;}',
      '#so-breadcrumb{font-size:12px;color:#8e9396;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}',
      '#so-breadcrumb strong{color:#333f48;font-weight:600;}',
      '.so-bc-link{color:#8e9396;text-decoration:none;}',
      '.so-bc-link:hover{color:#8f7f55;}',
      '#so-topbar-right{display:flex;align-items:center;gap:12px;flex-shrink:0;}',
      '.so-topbar-action-btn{display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:8px;font-family:"DM Sans",sans-serif;font-size:12px;font-weight:600;cursor:pointer;text-decoration:none;background:#333f48;color:#fff;border:none;transition:background .15s;}',
      '.so-topbar-action-btn svg{width:13px;height:13px;stroke:currentColor;flex-shrink:0;}',
      '.so-topbar-action-btn:hover{background:#8f7f55;color:#fff;text-decoration:none;}',
      '.so-action-ghost{background:transparent!important;color:#637380!important;border:1.5px solid #eceef2!important;}',
      '.so-action-ghost:hover{background:#faf8f3!important;color:#333f48!important;border-color:#8f7f55!important;text-decoration:none!important;}',
      '#so-course-body{display:flex;flex:1;overflow:hidden;min-height:0;}',
      '#so-course-panel{width:260px;min-width:260px;background:#fff;border-right:1.5px solid #eceef2;display:flex;flex-direction:column;overflow:hidden;flex-shrink:0;}',
      '#so-panel-header{padding:0;border-bottom:1.5px solid #eceef2;flex-shrink:0;}',
      '#so-panel-course-meta{padding:14px 16px;}',
      '#so-panel-course-title{font-family:"Sora",sans-serif;font-size:14px;font-weight:700;color:#333f48;margin:0;letter-spacing:-.2px;line-height:1.3;}',
      '#so-panel-divider{height:1px;background:#eceef2;}',
      '#so-panel-label-row{padding:10px 16px 6px;}',
      '#so-panel-label{font-size:11px;font-weight:700;color:#8e9396;text-transform:uppercase;letter-spacing:.8px;}',
      '.so-progress-row{display:flex;justify-content:space-between;font-size:11px;color:#8e9396;margin-bottom:5px;padding:0 16px;}',
      '.so-progress-pct{color:#8f7f55;font-weight:700;}',
      '.so-progress-track{height:4px;background:#eceef2;border-radius:99px;overflow:hidden;margin:0 16px 12px;}',
      '.so-progress-fill{height:4px;background:linear-gradient(90deg,#726544,#8f7f55);border-radius:99px;}',
      '#so-panel-list{flex:1;overflow-y:auto;padding:4px 0 24px;}',
      '#so-panel-list::-webkit-scrollbar{width:3px;}',
      '#so-panel-list::-webkit-scrollbar-thumb{background:#ddd4bc;border-radius:99px;}',
      '.so-panel-section+.so-panel-section{border-top:1px solid #eceef2;margin-top:4px;padding-top:4px;}',
      '.so-section-label{display:block;padding:10px 16px 4px;font-size:10px;font-weight:700;color:#8e9396;text-transform:uppercase;letter-spacing:.8px;line-height:1.3;}',
      '.so-panel-item{display:flex;align-items:center;gap:9px;padding:8px 16px 8px 24px;font-size:13px;font-weight:400;color:#637380;border-left:2px solid transparent;text-decoration:none;cursor:pointer;transition:background .12s,color .12s,border-color .12s;}',
      '.so-panel-item:hover{background:#faf8f3;color:#333f48;text-decoration:none;}',
      '.so-panel-item.active{background:#faf8f3;color:#333f48;border-left-color:#8f7f55;font-weight:600;}',
      '.so-panel-item.watched{opacity:.75;}',
      '.so-dot{width:9px;height:9px;border-radius:50%;border:1.5px solid #c9ccce;background:transparent;flex-shrink:0;}',
      '.so-dot.done{background:#8f7f55;border-color:#8f7f55;}',
      '.so-dot.active{background:#333f48;border-color:#333f48;}',
      '.so-item-name{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}',
      '.so-item-badge{flex-shrink:0;margin-left:auto;display:flex;align-items:center;border-radius:99px;}',
      '.so-badge-watching{font-size:9px;font-weight:700;color:#8f7f55;background:rgba(143,127,85,.12);padding:2px 7px;border-radius:99px;text-transform:uppercase;}',
      '.so-badge-done{width:16px;height:16px;background:#8f7f55;border-radius:50%;}',
      '.so-badge-done svg{width:10px;height:10px;stroke:#fff;}',
      '.so-cert-row{padding:0;}',
      '.so-panel-item.so-cert-item{color:#8f7f55;font-style:italic;font-size:12px;}',
      '#so-course-main{flex:1;overflow:hidden;background:#eceef2;min-width:0;display:flex;flex-direction:column;min-height:0;}',
      '#so-tab-nav{background:#fff;border-bottom:1.5px solid #eceef2;padding:0 28px;display:flex;align-items:center;flex-shrink:0;box-shadow:0 1px 4px rgba(51,63,72,.04);}',
      '.so-tab{display:inline-flex;align-items:center;padding:12px 16px;font-size:13px;font-weight:500;color:#8e9396;text-decoration:none;border-bottom:2px solid transparent;margin-bottom:-1.5px;cursor:pointer;white-space:nowrap;background:none;border-top:none;border-left:none;border-right:none;font-family:"DM Sans",sans-serif;transition:color .15s,border-color .15s;}',
      '.so-tab:hover{color:#333f48;text-decoration:none;}',
      '.so-tab.so-tab-active{color:#333f48;border-bottom-color:#8f7f55;font-weight:600;}',
      '#so-panel-cert{flex:1;overflow-y:auto;display:flex;flex-direction:column;}',
      '#so-cert-inner{padding:32px 32px 48px;display:flex;flex-direction:column;gap:20px;max-width:680px;margin:0 auto;width:100%;box-sizing:border-box;}',
      '#so-cert-hero{display:flex;align-items:center;gap:24px;background:#fff;border-radius:16px;padding:28px;box-shadow:0 2px 8px rgba(51,63,72,.08);border:1px solid #eceef2;}',
      '#so-cert-hero-icon svg{width:80px;height:80px;flex-shrink:0;display:block;}',
      '#so-cert-hero-text{flex:1;min-width:0;}',
      '#so-cert-title{font-family:"Sora",sans-serif;font-size:20px;font-weight:700;color:#333f48;margin:0 0 6px;letter-spacing:-.3px;line-height:1.3;}',
      '#so-cert-subtitle{font-size:13px;color:#8e9396;margin:0;line-height:1.5;}',
      '.so-cert-status-card{background:#fff;border-radius:12px;padding:16px 20px;box-shadow:0 1px 4px rgba(51,63,72,.08);}',
      '.so-cert-status-row{display:flex;align-items:center;gap:14px;}',
      '.so-cert-status-icon svg{width:22px;height:22px;flex-shrink:0;display:block;}',
      '.so-cert-status-label{font-size:11px;font-weight:700;color:#8e9396;text-transform:uppercase;letter-spacing:.7px;margin-bottom:2px;}',
      '.so-cert-status-value{font-size:13px;font-weight:600;color:#333f48;}',
      '.so-cert-action-card{background:linear-gradient(135deg,#333f48 0%,#4a5a66 100%);border-radius:14px;padding:24px 28px;display:flex;align-items:center;justify-content:space-between;gap:20px;box-shadow:0 4px 16px rgba(51,63,72,.2);}',
      '.so-cert-action-left{}',
      '.so-cert-action-title{font-family:"Sora",sans-serif;font-size:15px;font-weight:700;color:#fff;margin-bottom:4px;letter-spacing:-.2px;}',
      '.so-cert-action-desc{font-size:12px;color:rgba(255,255,255,.6);line-height:1.5;}',
      '.so-cert-form{flex-shrink:0;}',
      '#so-view-cert-btn{display:inline-flex;align-items:center;gap:8px;padding:12px 22px;background:#8f7f55;color:#fff;border:none;border-radius:10px;font-family:"DM Sans",sans-serif;font-size:13px;font-weight:700;cursor:pointer;transition:background .15s,transform .1s;white-space:nowrap;}',
      '#so-view-cert-btn:hover{background:#726544;transform:translateY(-1px);}',
      '#so-view-cert-btn svg{width:16px;height:16px;stroke:currentColor;flex-shrink:0;}',
    ].join('\n');
    document.head.appendChild(style);
       var fg = document.getElementById('__so-flash-guard');
    if (fg) fg.remove();
    return true;
  }

  var buildAttempts = 0;
  function tryBuild() {
    if (document.getElementById('so-cert-page')) return;
    var result = build();
    if (result === false && ++buildAttempts < 40) setTimeout(tryBuild, 500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { setTimeout(tryBuild, 200); });
  } else {
    setTimeout(tryBuild, 200);
  }
  window.addEventListener('load', function() { setTimeout(tryBuild, 400); });

})();




</script>
