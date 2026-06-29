<script>
document.addEventListener("DOMContentLoaded", function () {

  // 1. Collect all course custom field texts
  const courseTexts = Array.from(
    document.querySelectorAll(
      "#frontpage-course-list .coursebox .customfields-container .customfieldvalue"
    )
  ).map(el => el.textContent.trim());

  // 2. Loop through categories
  const categories = document.querySelectorAll(
    "#frontpage-category-names .category"
  );

  categories.forEach(category => {
    const categoryTitle = category.querySelector("a");
    if (!categoryTitle) return;

    const categoryText = categoryTitle.textContent.trim();

    // 3. Check if ANY course text is contained in category text
    const matchFound = courseTexts.some(courseText =>
      categoryText.includes(courseText)
    );

    // 4. Show / hide category
    category.style.display = matchFound ? "" : "none";
  });

});
    
    (function () {
    const actionBar = document.getElementById('action_bar');
    if (!actionBar) return;

    const innerFlex = actionBar.querySelector('.d-flex');
    if (!innerFlex) return;

    const fallbackUrl = 'https://example.com'; // 👈 change this

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = '← Back';
    btn.className = 'btn btn-primary btn-back';

    btn.addEventListener('click', function () {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = fallbackUrl;
      }
    });

    // Put button INSIDE .d-flex
      innerFlex.prepend(btn);
  })();


document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".coursebox").forEach(card => {
    const link = card.querySelector(".coursename a");

    if (!link) return;

    card.style.cursor = "pointer";

    card.addEventListener("click", function (e) {
      // Prevent double navigation if user clicks the actual link
      if (e.target.closest("a")) return;

      window.location.href = link.href;
    });
  });
});
    
    {/* course page */}

   (function () {
  if (!document.body.classList.contains('pagelayout-course') && !document.body.classList.contains('pagelayout-incourse')) return;

  const actionBar = document.getElementById('page-header');
  if (!actionBar) return;

  // const innerFlex = actionBar.querySelector('.header-actions-container');
  // if (!innerFlex) return;

  const btn = document.createElement('button');
  btn.textContent = '← Back';
  btn.className = 'btn btn-primary btn-back';

  btn.onclick = () =>
    history.length > 1 ? history.back() : location.href = '/';

  actionBar.prepend(btn);
})();
    
    {/* Filter button rename */}

const btn = document.getElementById('dropdownFiltersButton');

if (btn) {
  const span = btn.querySelector('span');
  if (span) {
    span.textContent = 'Search Results';
  }
}
  
  {/* Course section non clickable */}
  document.querySelectorAll('#region-main .course-content-item').forEach(h3 => {
    const link = h3.querySelector('a');
    if (link) {
      h3.textContent = link.textContent;
    }
  });

  
  (function () {
  console.log("🚀 master watcher started");

  let activeInner = null;
  let lastCheckBtn = null;

  // =========================
  // OUTER IFRAME WATCHER
  // =========================

  setInterval(() => {
    const outer = document.querySelector(".h5p-player");
    if (!outer) {
      console.log("⏳ waiting outer iframe...");
      return;
    }

    let outerDoc;

    try {
      outerDoc = outer.contentDocument || outer.contentWindow.document;
    } catch {
      console.log("⛔ outer iframe not accessible yet");
      return;
    }

    // =========================
    // INNER IFRAME DETECTION
    // =========================

    const inner = outerDoc.querySelector(
      "iframe.h5p-iframe.h5p-initialized"
    );

    if (!inner) {
      if (activeInner) {
        console.log("🔄 inner iframe destroyed");
        activeInner = null;
        lastCheckBtn = null;
      }

      console.log("⏳ waiting inner iframe...");
      return;
    }

    if (inner === activeInner) return;

    console.log("✅ NEW inner iframe detected");

    activeInner = inner;
    lastCheckBtn = null;

    const innerDoc =
      inner.contentDocument || inner.contentWindow.document;

    // =========================
    // INTERACTION WATCHER
    // =========================

    const interactionLoop = setInterval(() => {
      if (!activeInner) {
        clearInterval(interactionLoop);
        return;
      }

      const interaction =
        innerDoc.querySelector(".h5p-interaction-outer");

      if (!interaction) return;

      const checkBtn = interaction.querySelector(
        ".h5p-question-check-answer.h5p-joubelui-button"
      );

      if (!checkBtn) return;
      if (checkBtn === lastCheckBtn) return;

      console.log("✅ Check button detected");

      lastCheckBtn = checkBtn;

      checkBtn.addEventListener("click", () => {
        console.log("🔥 CHECK clicked");

        waitForContinue(innerDoc);
      });
    }, 500);
  }, 500);

  // =========================
  // CONTINUE BUTTON LOGIC
  // =========================

  function waitForContinue(innerDoc) {
    console.log("⏳ waiting CONTINUE button...");

    const loop = setInterval(() => {
      const continueBtn = innerDoc.querySelector(
        ".h5p-question-iv-continue"
      );

      if (!continueBtn) return;

      console.log("➡ clicking CONTINUE");

      continueBtn.click();

      clearInterval(loop);

      waitForEndscreen(innerDoc);
    }, 500);
  }

  // =========================
  // ENDSCREEN BUTTON LOGIC
  // =========================

  function waitForEndscreen(innerDoc) {
    console.log("⏳ waiting END button...");

    let attempts = 0;

    const loop = setInterval(() => {
      attempts++;

      const endBtn = innerDoc.querySelector(
        ".h5p-interactive-video-endscreen-submit-button"
      );

      if (!endBtn) {
        if (attempts > 60) {
          console.log("❌ end button timeout");
          clearInterval(loop);
        }
        return;
      }

      console.log("🎯 clicking END button");

      endBtn.click();

      // backup forced click
      setTimeout(() => {
        const ev = new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: innerDoc.defaultView,
        });

        endBtn.dispatchEvent(ev);
      }, 200);

      clearInterval(loop);
    }, 500);
  }
})();
  
  {/* ending */}
  

document.addEventListener('DOMContentLoaded', function () {

  /* =========================
     1. MY COURSES (UNCHANGED)
  ========================== */
  (function () {
    const container = document.querySelector('#frontpage-course-list');
    if (!container) return;

    const courses = Array.from(container.querySelectorAll('.coursebox'));
    const grouped = {};

    courses.forEach(course => {
      const categoryEl = course.querySelector('.customfieldvalue');
      const category = categoryEl ? categoryEl.textContent.trim() : 'Uncategorized';

      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(course);
    });

    container.innerHTML = '';

    const mainTitle = document.createElement('h2');
    mainTitle.textContent = 'My Courses';
    mainTitle.style.marginBottom = '20px';
    container.appendChild(mainTitle);

    Object.keys(grouped).forEach(category => {
      const header = document.createElement('h4');
      header.textContent = category;
      header.style.marginTop = '20px';
      container.appendChild(header);

      const wrapper = document.createElement('div');
      wrapper.className = 'category-group';

      grouped[category].forEach(course => {
        wrapper.appendChild(course);
      });

      container.appendChild(wrapper);
    });
  })();


  /* =========================
     2. CATEGORY ACCORDION
  ========================== */
  
setTimeout(() => {
  const courseContainer = document.querySelector('#frontpage-course-list');
  const categoryContainer = document.querySelector('#frontpage-category-names');
  if (!courseContainer || !categoryContainer) return;

  // Group courses by their custom category field
  const courses = Array.from(courseContainer.querySelectorAll('.coursebox'));
  const categories = Array.from(categoryContainer.querySelectorAll('.category'));
  const grouped = {};

  courses.forEach(course => {
    const categoryEl = course.querySelector('.customfieldvalue');
    const category = categoryEl ? categoryEl.textContent.trim() : 'Uncategorized';
    if (!grouped[category]) grouped[category] = [];
    grouped[category].push(course);
  });

  categories.forEach(cat => {
    const titleEl = cat.querySelector('.categoryname a');
    const content = cat.querySelector('.content');
    const header = cat.querySelector('.categoryname');
    if (!titleEl || !content || !header) return;

    // ✅ Grab name BEFORE removing the anchor
    const categoryName = titleEl.textContent.trim();

    // ✅ Replace <a> with plain text
    const nameText = document.createTextNode(categoryName);
    titleEl.replaceWith(nameText);

    // ✅ Make h3 clickable (cursor style)
    header.style.cursor = 'pointer';
    header.style.userSelect = 'none';

    // Fill content with cloned grouped courses
    content.innerHTML = '';
    if (grouped[categoryName]) {
      grouped[categoryName].forEach(course => {
        content.appendChild(course.cloneNode(true));
      });
    }

    // ✅ Add toggle icon (prevent duplicates)
    if (!header.querySelector('.toggle-icon')) {
      const icon = document.createElement('img');
      icon.className = 'toggle-icon';
      icon.src = 'https://rinseaistorageprod.blob.core.windows.net/lms-icons/open-dropdown.svg';
      icon.style.cssText = 'margin-left:8px; width:16px; height:16px; cursor:pointer;';
      header.parentNode.appendChild(icon);
      content.style.display = 'none';

      // ✅ Shared toggle function
      function toggleContent() {
        const isOpen = content.style.display === 'flex';
        content.style.display = isOpen ? 'none' : 'flex';
        icon.src = isOpen
          ? 'https://rinseaistorageprod.blob.core.windows.net/lms-icons/open-dropdown.svg'
          : 'https://rinseaistorageprod.blob.core.windows.net/lms-icons/close-dropdown.svg';
      }

      // ✅ Both h3 and icon trigger the same toggle
      icon.addEventListener('click', e => {
        e.stopPropagation(); // prevent h3 from double-firing
        toggleContent();
      });
      header.addEventListener('click', toggleContent);
    }
  });
}, 500);

});
  
//   (function () {
//   // Check for the element
//   const courseIndex = document.querySelector('#theme_boost-drawers-courseindex');

//   if (courseIndex) {
//     // If exists → add class
//     courseIndex.classList.add('show');
//   }
// })();
  
  
  // remove announcements block if empty
(function () {
  const courseIndex = document.querySelector('#course-index');
  if (!courseIndex) return;

  const observer = new MutationObserver(() => {
    if (courseIndex.firstElementChild) {
      courseIndex.firstElementChild.style.display = 'none';
      observer.disconnect(); // stop after it works
    }
  });

  observer.observe(courseIndex, { childList: true });
})();
  
// REPLACE WITH THIS:
(function () {
  console.log('[so-redirect] Script started');
  console.log('[so-redirect] URL:', window.location.href);

  if (window.location.href.indexOf('course/view.php') === -1) {
    console.log('[so-redirect] Not a course page, exiting');
    return;
  }

  var courseIdMatch = window.location.href.match(/[?&]id=(\d+)/);
  if (!courseIdMatch) {
    console.log('[so-redirect] No course ID found in URL, exiting');
    return;
  }
  console.log('[so-redirect] Course ID:', courseIdMatch[1]);

  // ── Determine if we should redirect ──
  var shouldRedirect = false;
  try {
    var storedId = sessionStorage.getItem('so_redirect_course');
    console.log('[so-redirect] sessionStorage so_redirect_course:', storedId);
    if (storedId === courseIdMatch[1]) {
      shouldRedirect = true;
      sessionStorage.removeItem('so_redirect_course');
      console.log('[so-redirect] Redirect triggered via sessionStorage match');
    }
  } catch(err) {
    console.log('[so-redirect] sessionStorage error:', err);
  }

  if (!shouldRedirect) {
    var referrer = document.referrer;
    console.log('[so-redirect] document.referrer:', referrer || '(empty)');

    // Only SKIP redirect if the user came from an actual course activity page
    // (mod/, quiz/, lesson/, etc.) — NOT from homepage or any other page
    var cameFromActivity = referrer &&
      referrer.indexOf(window.location.origin) !== -1 &&
      (
        referrer.indexOf('/mod/') !== -1 ||
        referrer.indexOf('/quiz/') !== -1 ||
        referrer.indexOf('/lesson/') !== -1 ||
        referrer.indexOf('course/section.php') !== -1
      );

    console.log('[so-redirect] cameFromActivity:', cameFromActivity);

    if (!cameFromActivity) {
      shouldRedirect = true;
      console.log('[so-redirect] Redirect triggered — referrer is not a course activity');
    } else {
      console.log('[so-redirect] Skipping redirect — user came from an activity page');
    }
  }

  console.log('[so-redirect] shouldRedirect:', shouldRedirect);
  if (!shouldRedirect) {
    console.log('[so-redirect] No redirect needed, exiting');
    return;
  }

  function getFirstActivityLink() {
    var sections = document.querySelectorAll('.courseindex-section');
    console.log('[so-redirect] .courseindex-section count:', sections.length);

    if (sections.length === 0) {
      var courseIndex = document.querySelector('.courseindex');
      console.log('[so-redirect] .courseindex element exists:', !!courseIndex);
      var drawerContent = document.querySelector('[data-region="courseindex-drawer"]');
      console.log('[so-redirect] courseindex-drawer exists:', !!drawerContent);
    }

    for (var i = 0; i < sections.length; i++) {
      var sec = sections[i];
      var sectionNum = sec.getAttribute('data-number');
      if (sectionNum === '0') continue;

      var links = sec.querySelectorAll(
        '.courseindex-sectioncontent li.courseindex-item a.courseindex-link'
      );
      console.log('[so-redirect] Section', sectionNum, '- links found:', links.length);

      for (var j = 0; j < links.length; j++) {
        var href = links[j].href || '';
        console.log('[so-redirect] Evaluating link[' + j + ']:', href);

        var skip = false;
        if (!href)                                        { skip = true; console.log('[so-redirect] Skipped: empty href'); }
        if (href.indexOf('#') !== -1)                     { skip = true; console.log('[so-redirect] Skipped: anchor link'); }
        if (href === window.location.href)                { skip = true; console.log('[so-redirect] Skipped: same as current URL'); }
        if (href.indexOf('course/section.php') !== -1)   { skip = true; console.log('[so-redirect] Skipped: section page'); }
        if (href.indexOf('course/view.php') !== -1)       { skip = true; console.log('[so-redirect] Skipped: course view page'); }

        if (!skip) {
          console.log('[so-redirect] ✅ Valid first activity link found:', href);
          return href;
        }
      }
    }

    console.log('[so-redirect] ❌ No valid activity link found this pass');
    return null;
  }

  function doRedirect() {
    var link = getFirstActivityLink();
    if (link) {
      console.log('[so-redirect] 🚀 Redirecting to:', link);
      window.location.replace(link);
      return true;
    }
    return false;
  }

  function cleanup() {
    var fg = document.getElementById('__so-flash-guard');
    if (fg) fg.remove();
    var ov = document.getElementById('__so-overlay');
    if (ov) ov.remove();
  }

  function startWatching() {
    console.log('[so-redirect] startWatching() called, readyState:', document.readyState);
    if (doRedirect()) return;

    var mutationCount = 0;
    var observer = new MutationObserver(function() {
      mutationCount++;
      if (mutationCount <= 5 || mutationCount % 50 === 0) {
        console.log('[so-redirect] MutationObserver fired (#' + mutationCount + ')');
      }
      if (doRedirect()) {
        observer.disconnect();
        clearTimeout(giveUpTimer);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    console.log('[so-redirect] MutationObserver active, giving up in 15s');

    var giveUpTimer = setTimeout(function() {
      observer.disconnect();
      console.warn('[so-redirect] ⛔ Gave up after 15s');
      console.log('[so-redirect] .courseindex-section count:', document.querySelectorAll('.courseindex-section').length);
      var ci = document.querySelector('.courseindex');
      console.log('[so-redirect] .courseindex innerHTML (first 500):', ci ? ci.innerHTML.substring(0, 500) : 'N/A');
      cleanup();
    }, 15000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startWatching);
  } else {
    startWatching();
  }
})();
// links

(function () {
  'use strict';

  var ICONS = {
    cohort:  '<path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>',
    report:  '<path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>',
    adduser: '<path stroke-linecap="round" stroke-linejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>',
    default: '<path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>'
  };

  function getIcon(label) {
    var l = label.toLowerCase();
    if (l.indexOf('cohort') > -1)                        return ICONS.cohort;
    if (l.indexOf('report') > -1)                        return ICONS.report;
    if (l.indexOf('add') > -1 && l.indexOf('user') > -1) return ICONS.adduser;
    return ICONS.default;
  }

  function inject() {
    var sidebar = document.getElementById('so-sidebar');
    if (!sidebar || document.getElementById('so-activity-nav')) return;

    /* Scan activity cards rendered by Moodle in the frontpage section */
    var items = [];
    document.querySelectorAll('.activity-item[data-activityname]').forEach(function (card) {
      var name   = (card.getAttribute('data-activityname') || '').trim();
      var link   = card.querySelector('a.aalink');
      var href   = link ? (link.getAttribute('href') || '').trim() : '';
      if (name && href && href !== '#') items.push({ label: name, href: href });
    });

    if (!items.length) return;

    /* Divider */
    var divider = document.createElement('div');
    divider.className = 'so-sidebar-divider';

    /* Nav block */
    var nav = document.createElement('nav');
    nav.id  = 'so-activity-nav';
    nav.className = 'so-sidebar-nav';

    /* Section label */

    /* One item per activity */
    items.forEach(function (item) {
      var a = document.createElement('a');
      a.href      = item.href;
      a.className = 'so-nav-item';
      a.innerHTML = '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" width="16" height="16">' +
                    getIcon(item.label) + '</svg><span>' + item.label + '</span>';
      nav.appendChild(a);
    });

    /* Insert before the user footer */
    var footer = sidebar.querySelector('.so-sidebar-user');
    sidebar.insertBefore(nav,     footer || null);
    sidebar.insertBefore(divider, nav);

    /* Respect collapsed state (60px icon-only mode) */
    if (sidebar.style.width === '60px') {
      nav.querySelectorAll('span, .so-nav-label').forEach(function (el) { el.style.display = 'none'; });
      nav.querySelectorAll('.so-nav-item').forEach(function (el) { el.style.justifyContent = 'center'; el.style.padding = '11px 0'; });
    }
  }

  /* Retry until Moodle renders the activity list */
  var n = 0;
  function run() {
    inject();
    if (!document.getElementById('so-activity-nav') && ++n < 15) setTimeout(run, 400);
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', function () { setTimeout(run, 200); })
    : setTimeout(run, 200);

  window.addEventListener('load', function () {
    if (!document.getElementById('so-activity-nav')) run();
  });

})();

// REPLACE WITH THIS:
document.addEventListener("click", function (e) {
  const card = e.target.closest("#so-flat-grid .coursebox");
  if (!card) return;

  // Don't intercept if they clicked directly on a link
  if (e.target.closest("a")) return;

  e.preventDefault();

  const courseLink = card.querySelector(".coursename a");
  if (!courseLink) return;

  // Get the course/view.php URL from the card
  const courseViewUrl = courseLink.href;

  // Extract course ID
  const courseIdMatch = courseViewUrl.match(/[?&]id=(\d+)/);
  if (!courseIdMatch) {
    window.location.href = courseViewUrl;
    return;
  }
  const courseId = courseIdMatch[1];

  // Find the first activity link from the courseindex for this course
  // The courseindex in the sidebar has links with the course ID in the section URL
  // We need to fetch course/view.php and extract the first activity
  // Instead — use a smarter approach: store a flag and navigate to course/view.php
  // but with a marker so the redirect logic knows to fire immediately

  // Set sessionStorage flag so course/view.php knows to redirect fast
  try {
    sessionStorage.setItem('so_redirect_course', courseId);
  } catch(err) {}

  window.location.href = courseViewUrl;
});

document.addEventListener("click", function (e) {
  const chip = e.target.closest("#so-cat-filter .so-chip");
  if (!chip) return;

  const chips = document.querySelectorAll("#so-cat-filter .so-chip");
  const courses = document.querySelectorAll("#so-flat-grid .coursebox");

  // 1. Active class
  chips.forEach(c => c.classList.remove("so-active"));
  chip.classList.add("so-active");

  // 2. Get selected category
  let category = chip.childNodes[0].textContent.trim().toLowerCase();

  // 3. Filter (KEEP SAME CARDS)
  courses.forEach(course => {
    let courseCat = (course.getAttribute("data-socat") || "")
      .trim()
      .toLowerCase();

    if (category === "all" || courseCat === category) {
      // ✅ SHOW (keep original card)
      course.classList.remove("hidden-course");
    } else {
      // ❌ HIDE
      course.classList.add("hidden-course");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".primary-navigation .nav-item a");

  const hasSiteAdmin = Array.from(navLinks).some(link => 
    link.textContent.trim() === "Site administration"
  );

  if (!hasSiteAdmin) {
    const siteAdminEl = document.getElementById("site-admin");
    if (siteAdminEl) {
      siteAdminEl.style.display = "none";
    }
  }
});

// SCORM COURSE PAGE

(function () {
  var path = window.location.pathname;
  var isScormView = path.indexOf('/mod/scorm/view.php') > -1;
  if (!isScormView) return;

  // Hide the page immediately to prevent flash
  var style = document.createElement('style');
  style.textContent = 
    '#region-main, .activity-header, #page-content, .scorm-center, .box.py-3 { ' +
    'display: none !important; }';
  document.head.appendChild(style);

  function clickEnter() {
    var enterBtn = document.getElementById('n');
    if (enterBtn) {
      enterBtn.click();
      return true;
    }
    return false;
  }

  var attempts = 0;
  function tryClick() {
    if (clickEnter()) return;
    if (++attempts < 20) setTimeout(tryClick, 300);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(tryClick, 200); });
  } else {
    setTimeout(tryClick, 200);
  }
  window.addEventListener('load', function () { setTimeout(tryClick, 300); });
})();
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        var iframes = document.querySelectorAll('iframe.h5p-player');
        if (iframes.length === 1 && iframes[0].style.height === '0px') {
            window.location.reload();
        }
    }, 4000);
});




function forceRepaint() {
    // Hide immediately to prevent flash
    document.documentElement.style.visibility = 'hidden';
    
    setTimeout(function() {
        // Trigger resize to fix layout
        window.dispatchEvent(new Event('resize'));
        
        // Force reflow
        void document.documentElement.offsetHeight;
        
        // Show again
        document.documentElement.style.visibility = 'visible';
    }, 100);
}

window.addEventListener('load', forceRepaint);
    window.addEventListener('pageshow', forceRepaint);
    



(function () {
  if (document.body.id !== 'page-admin-user-editadvanced') return;

  // ── Hide chrome ──────────────────────────────────────────────────────────
  document.querySelectorAll('.collapsible-actions').forEach(el => el.style.setProperty('display', 'none', 'important'));
  document.querySelectorAll('fieldset').forEach(el => el.style.setProperty('display', 'none', 'important'));

  // ── Show & expand the General section ───────────────────────────────────
  const generalSection = document.getElementById('id_moodle');
  const generalContainer = document.getElementById('id_moodlecontainer');
  if (generalSection) generalSection.style.setProperty('display', 'block', 'important');
  if (generalContainer) {
    generalContainer.classList.add('show');
    generalContainer.classList.remove('collapse');
    generalContainer.style.setProperty('display', 'block', 'important');
    generalContainer.querySelectorAll('.fitem').forEach((el, index) => {
      if (index !== 3) {
        el.style.setProperty('display', 'none', 'important');
      }
    });
  }

  // ── Find both checkbox rows by their inner input IDs ────────────────────
  const createpasswordInput = document.getElementById('id_createpassword');
  const notifyRow = createpasswordInput ? createpasswordInput.closest('.fitem') : null;
  if (notifyRow) {
    notifyRow.id = 'fitem_id_notifyuser';
    notifyRow.style.setProperty('display', '', 'important');
  }

  const suspendedInput = document.getElementById('id_suspended');
  const suspendedRow = suspendedInput ? suspendedInput.closest('.fitem') : null;
  if (suspendedRow) {
    suspendedRow.style.setProperty('display', 'none', 'important');
  }

  // ── Show & expand the Dental Practice section ────────────────────────────
  const dentalSection = document.getElementById('id_category_1');
  const dentalContainer = document.getElementById('id_category_1container');
  if (dentalSection) dentalSection.style.setProperty('display', 'none', 'important');
  if (dentalContainer) {
    dentalContainer.classList.add('show');
    dentalContainer.classList.remove('collapse');
    dentalContainer.style.setProperty('display', 'block', 'important');
  }

  // ── Show all relevant fields ─────────────────────────────────────────────
  const allFieldIds = [
    'fitem_id_username',
    'fitem_id_firstname',
    'fitem_id_lastname',
    'fitem_id_email',
    'fitem_id_newpassword',
    'fitem_id_passwordpolicyinfo',
    'fitem_id_notifyuser',
    'fitem_id_timezone',
    'fitem_id_profile_field_DentalPractice',
  ];
  allFieldIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.setProperty('display', '', 'important');
  });

  // ── Required fields — add asterisk ───────────────────────────────────────
  const REQUIRED_FIELDS = [
    'fitem_id_username',
    'fitem_id_firstname',
    'fitem_id_lastname',
    'fitem_id_email',
    'fitem_id_newpassword',
  ];
  REQUIRED_FIELDS.forEach(id => {
    const fitem = document.getElementById(id);
    if (!fitem) return;
    const label = fitem.querySelector('label');
    if (!label) return;
    if (!label.querySelector('.required-star')) {
      const star = document.createElement('span');
      star.className = 'required-star';
      star.textContent = ' *';
      star.style.color = '#ef4444';
      label.appendChild(star);
    }
  });

  // ── Build layout ─────────────────────────────────────────────────────────
  // Row 1: username, firstname, lastname — three columns
  // Row 2: email, dental practice, timezone — three columns
  // Row 3: [newpassword + notifyuser stacked] | passwordpolicyinfo — two columns
  const ROWS = [
    ['fitem_id_username', 'fitem_id_firstname', 'fitem_id_lastname'],
    ['fitem_id_email', 'fitem_id_profile_field_DentalPractice', 'fitem_id_timezone'],
    // Row 3 — special: first entry is an array meaning "stack these in one column"
    [['fitem_id_newpassword', 'fitem_id_notifyuser'], 'fitem_id_passwordpolicyinfo'],
  ];

  const firstEl = document.getElementById('fitem_id_username');
  const anchorContainer = firstEl ? firstEl.parentNode : null;

  if (anchorContainer) {
    ROWS.forEach(rowIds => {
      const wrapper = document.createElement('div');
      wrapper.className = 'custom-field-row';

      rowIds.forEach(id => {
        if (Array.isArray(id)) {
          // Stacked group — wrap multiple fields in a flex-column inner div
          const stack = document.createElement('div');
          stack.className = 'custom-field-stack';
          id.forEach(innerid => {
            const el = document.getElementById(innerid);
            if (el) {
              el.style.setProperty('display', '', 'important');
              stack.appendChild(el);
            }
          });
          wrapper.appendChild(stack);
        } else {
          const el = document.getElementById(id);
          if (el) {
            el.style.setProperty('display', '', 'important');
            wrapper.appendChild(el);
          }
        }
      });

      anchorContainer.appendChild(wrapper);
    });
  }

  // ── Show submit button row ───────────────────────────────────────────────
  const buttonRow = document.getElementById('fgroup_id_buttonar');
  if (buttonRow) buttonRow.style.setProperty('display', '', 'important');

  // ── Hide required note ───────────────────────────────────────────────────
  const requiredNote = document.querySelector('.fdescription.required');
  if (requiredNote) requiredNote.style.setProperty('display', 'none', 'important');

  // ── Fonts ────────────────────────────────────────────────────────────────
  const fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Serif+Display&display=swap';
  document.head.appendChild(fontLink);

  // ── Styles ───────────────────────────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    #page, #page-wrapper { background: #f2f4f6 !important; }
    #page-header, .navbar, nav.navbar { display: none !important; }

    #page-admin-user-editadvanced #region-main .mform {
      font-family: "Sora", sans-serif !important;
      background: #ffffff !important;
      border-radius: 16px !important;
      position: relative !important;
      border: none !important;
    }

    #page-admin-user-editadvanced #region-main .mform::before {
      content: 'Create New User' !important;
      display: block !important;
      font-family: "Sora", sans-serif !important;
      font-size: 22px !important;
      color: #333f48 !important;
      border-bottom: 1.5px solid #f4f5f7 !important;
      font-weight: 700 !important;
      margin-bottom: 24px !important;
      padding-bottom: 16px !important;
    }

    #page-admin-user-editadvanced #id_moodle,
    #id_category_1 {
      border: none !important;
      padding: 0 !important;
      margin: 0 !important;
      box-shadow: none !important;
    }

    #page-admin-user-editadvanced #id_moodle > .d-flex,
    #id_category_1 > .d-flex {
      display: none !important;
    }

    #page-admin-user-editadvanced #id_category_1 {
      display: none;
      margin-top: 4px !important;
      padding-top: 0 !important;
      border: none !important;
    }

    /* ── Multi-field rows ── */
    .custom-field-row {
      display: flex !important;
      gap: 16px !important;
      width: 100% !important;
      margin-bottom: 0 !important;
    }

    .custom-field-row .fitem {
      flex: 1 1 0 !important;
      min-width: 0 !important;
    }

    /* ── Stacked group (col 1 of row 3) ── */
    .custom-field-stack {
      flex: 1 1 0 !important;
      min-width: 0 !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 0 !important;
      max-width: 250px;
    }

    /* Password field inside stack takes up its natural space */
    .custom-field-stack #fitem_id_newpassword {
      flex: 0 0 auto !important;
    }

    /* Notify checkbox sits snugly below the password field */
    .custom-field-stack #fitem_id_notifyuser {
      flex: 0 0 auto !important;
      margin-top: 10px !important;
      margin-bottom: 0 !important;
    }

    @media (max-width: 600px) {
      .custom-field-row {
        flex-direction: column !important;
        gap: 0 !important;
      }
      .custom-field-stack {
        width: 100% !important;
      }
    }

    /* ── Field items ── */
    #page-admin-user-editadvanced .fitem.mb-3 {
      display: block !important;
    }

    #page-admin-user-editadvanced .fitem .row { display: block !important; }

    #page-admin-user-editadvanced .fitem .col-md-3,
    #page-admin-user-editadvanced .fitem .col-md-9 {
      flex: 0 0 100% !important;
      max-width: 250px !important;
      width: 100% !important;
      padding: 0 !important;
    }

    /* ── Labels ── */
    #page-admin-user-editadvanced .fitem .col-form-label,
    #page-admin-user-editadvanced .fitem .col-form-label label {
      font-family: "Sora", sans-serif !important;
      font-size: 11px !important;
      font-weight: 600 !important;
      color: #637380 !important;
      text-transform: uppercase !important;
      letter-spacing: 0.7px !important;
      padding: 0 0 6px 0 !important;
      display: block !important;
    }

    #page-admin-user-editadvanced .fitem .form-label-addon { display: none !important; }

    .required-star {
      color: #ef4444 !important;
      font-weight: 700 !important;
    }

    /* ── Text inputs ── */
    #page-admin-user-editadvanced .fitem:not(#fitem_id_newpassword) .form-control {
      font-family: "Sora", sans-serif !important;
      width: 100% !important;
      border: 1.5px solid #C9CCCE !important;
      border-radius: 10px !important;
      padding: 11px 14px !important;
      font-size: 14px !important;
      color: #333f48 !important;
      background: #fafafa !important;
      transition: border-color 0.2s, box-shadow 0.2s !important;
      outline: none !important;
      box-shadow: none !important;
    }

    #page-admin-user-editadvanced .fitem:not(#fitem_id_newpassword) .form-control:focus {
      border-color: #8f7f55 !important;
      background: #fff !important;
      box-shadow: 0 0 0 3px rgba(99,102,241,0.1) !important;
    }

    /* ── Select inputs ── */
    #page-admin-user-editadvanced .fitem .form-select {
      font-family: "Sora", sans-serif !important;
      width: 100% !important;
      border: 1.5px solid #C9CCCE !important;
      border-radius: 10px !important;
      padding: 11px 14px !important;
      font-size: 14px !important;
      color: #333f48 !important;
      background: #fafafa !important;
    }

    /* ── Password policy info ── */
    #page-admin-user-editadvanced #fitem_id_passwordpolicyinfo .form-control-static {
      font-size: 11.5px !important;
      color: #8e9396 !important;
      background: #f8f9f9 !important;
      border: 1px solid #f4f5f7 !important;
      border-radius: 8px !important;
      padding: 10px 12px !important;
      line-height: 1.6 !important;
    }

    /* ── Generate password / notify user checkbox row ── */
    #fitem_id_notifyuser {
      margin-bottom: 18px !important;
    }

    #fitem_id_notifyuser .col-form-label { display: none !important; }

    #fitem_id_notifyuser .form-check-label {
      font-family: "Sora", sans-serif !important;
      font-size: 13px !important;
      color: #637380 !important;
      cursor: pointer !important;
    }

    /* ── Buttons ── */
    #page-admin-user-editadvanced #fgroup_id_buttonar .col-md-3 { display: none !important; }
    #page-admin-user-editadvanced #fgroup_id_buttonar .col-md-9 {
      flex: 0 0 100% !important;
      max-width: 100% !important;
      padding: 0 !important;
    }

    #page-admin-user-editadvanced #fgroup_id_buttonar .d-flex {
      gap: 12px !important;
      border-top: none !important;
      padding-top: 0px !important;
      margin-top: 0px !important;
    }

    #page-admin-user-editadvanced #id_submitbutton {
      font-family: "Sora", sans-serif !important;
      background: #333f48 !important;
      color: #fff !important;
      border: none !important;
      border-radius: 10px !important;
      padding: 11px 28px !important;
      font-size: 14px !important;
      font-weight: 600 !important;
      cursor: pointer !important;
      transition: background 0.2s, transform 0.1s !important;
      letter-spacing: 0.2px !important;
    }

    #page-admin-user-editadvanced #id_submitbutton:hover {
      background: #8f7f55 !important;
      transform: translateY(-1px) !important;
    }

    #page-admin-user-editadvanced #id_cancel {
      font-family: "Sora", sans-serif !important;
      background: transparent !important;
      color: #637380 !important;
      border: 1.5px solid #C9CCCE !important;
      border-radius: 10px !important;
      padding: 11px 20px !important;
      font-size: 14px !important;
      font-weight: 500 !important;
      cursor: pointer !important;
      transition: border-color 0.2s, color 0.2s !important;
    }

    #page-admin-user-editadvanced #id_cancel:hover {
      border-color: #333f48 !important;
      color: #333f48 !important;
    }

    #page-admin-user-editadvanced .text-danger[title="Required"] { display: none !important; }
    #page-admin-user-editadvanced .invalid-feedback { font-size: 12px !important; margin-top: 4px !important; }
  `;
  document.head.appendChild(style);

  console.log('✅ Form cleaned, reordered, and styled');
})();
    
    
/**
 * Smile On — Cohort Page UI v3
 * Paste into: Site Admin → Appearance → Additional HTML → Within HEAD
 * IMPORTANT: Remove any previous version of this script first.
 */
(function () {
  'use strict';

  if (window.location.pathname.indexOf('/cohort/index.php') === -1) return;

  /* ── Kill any previous version of this UI ── */
  ['so-cohort-ui', 'so-cohort-style', 'so-ui', 'so-cohort-v2-style', 'sov3', 'sov3-style'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.remove();
  });

  /* ── Wait for Moodle table ── */
  function waitFor(selector, cb, maxMs) {
    var start = Date.now();
    var t = setInterval(function () {
      var el = document.querySelector(selector);
      if (el) { clearInterval(t); cb(el); }
      else if (Date.now() - start > (maxMs || 10000)) clearInterval(t);
    }, 250);
  }

  /* ── Color palette ── */
  var PALETTE = [
    { bg: '#EEF4FF', border: '#C7D9F8', txt: '#1D4ED8' },
    { bg: '#F0FDF4', border: '#BBF7D0', txt: '#166534' },
    { bg: '#FFF7ED', border: '#FED7AA', txt: '#9A3412' },
    { bg: '#F5F3FF', border: '#DDD6FE', txt: '#5B21B6' },
    { bg: '#FFF1F2', border: '#fcebeb', txt: '#9F1239' },
    { bg: '#F0FDFA', border: '#99F6E4', txt: '#115E59' },
    { bg: '#FEFCE8', border: '#FEF08A', txt: '#854f0b' },
  ];
  function paletteFor(name) {
    var h = 0;
    for (var i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) & 0xffff;
    return PALETTE[h % PALETTE.length];
  }
  function initials(name) {
    var w = name.trim().split(/\s+/).filter(Boolean);
    if (!w.length) return '??';
    if (w.length === 1) return w[0].substring(0, 2).toUpperCase();
    return (w[0][0] + w[1][0]).toUpperCase();
  }

  /* ── Read clean text from an inplaceeditable cell ── */
  function readEditable(cell) {
    if (!cell) return '';
    var editable = cell.querySelector('[data-inplaceeditabletype]');
    if (editable) {
      var val = editable.getAttribute('data-value') || '';
      if (val) {
        var d = document.createElement('div'); d.innerHTML = val;
        val = d.textContent.trim();
        if (val) return val;
      }
    }
    var link = cell.querySelector('a');
    if (link) {
      var clone = link.cloneNode(true);
      clone.querySelectorAll('.accesshide, .sr-only, [aria-hidden="true"]').forEach(function (n) { n.remove(); });
      var t = clone.textContent.trim();
      t = t.replace(/edit cohort name/gi, '').replace(/edit cohort id/gi, '').trim();
      if (t) return t;
    }
    return cell.textContent
      .replace(/edit cohort name/gi, '')
      .replace(/edit cohort id/gi, '')
      .trim();
  }

  /* ── Scrape rows ── */
  function scrapeRows() {
    var rows = [];
    var trs = document.querySelectorAll('table.reportbuilder-table tbody tr:not(.emptyrow)');

    trs.forEach(function (tr) {
      var cells = tr.querySelectorAll('td.cell');
      if (cells.length < 5) return;

      /* Detect which cell has action buttons by scanning backwards */
      var actCell = null;
      for (var i = cells.length - 1; i >= 0; i--) {
        if (cells[i].querySelector('a[aria-label="Edit"], a[aria-label="Assign"], a[data-action="cohort-delete"]')) {
          actCell = cells[i]; break;
        }
      }

      /* Standard Moodle cohort table: [0]=checkbox [1]=category [2]=name [3]=id [4]=desc [5]=members [6]=? [7]=actions */
      var catCell  = cells[1] || null;
      var nameCell = cells[2] || null;
      var idCell   = cells[3] || null;
      var descCell = cells[4] || null;
      var sizeCell = cells[5] || null;

      var cat  = catCell && catCell.querySelector('a')
        ? catCell.querySelector('a').textContent.trim()
        : (catCell ? catCell.textContent.trim() : '');

      var name     = readEditable(nameCell);
      var cohortId = readEditable(idCell);
      var desc     = descCell ? descCell.textContent.trim() : '';
      var size     = sizeCell ? (parseInt(sizeCell.textContent.trim()) || 0) : 0;

      var editEl   = actCell && actCell.querySelector('a[aria-label="Edit"]');
      var assignEl = actCell && actCell.querySelector('a[aria-label="Assign"]');
      var deleteEl = actCell && actCell.querySelector('a[data-action="cohort-delete"]');

      if (!name) return;

      rows.push({
        cat:        cat,
        name:       name,
        cohortId:   cohortId,
        desc:       desc,
        size:       size,
        editHref:   editEl   ? editEl.href   : '',
        assignHref: assignEl ? assignEl.href : '',
        deleteEl:   deleteEl || null,
      });
    });
    return rows;
  }

  /* ── Inject styles — all under #sov3 namespace ── */
  function injectStyles() {
    if (document.getElementById('sov3-style')) return;
    var s = document.createElement('style');
    s.id = 'sov3-style';
    s.textContent = [
      '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap");',

      '#sov3 { padding: 0 0 3rem; }',

      /* Toolbar */
      '#sov3-toolbar { display: flex; align-items: start; margin-bottom: 20px; flex-wrap: wrap; flex-direction: column; }',
      '#sov3-toolbar .v3-title { font-size: 22px; font-weight: 700; color: #333f48; }',
      '#sov3-toolbar .v3-subtitle { font-size: 14px; font-weight: 400; color: #637380; margin-right: auto; }',

      '.v3-search { display: flex; align-items: center; gap: 8px; background: #fff; border: 1px solid #C9CCCE; border-radius: 10px; padding: 8px 14px; min-width: 220px; transition: border-color .15s, box-shadow .15s; }',
      '.v3-search:focus-within { border-color: #637380; box-shadow: 0 0 0 3px rgba(107,114,128,.08); }',
      '.v3-search input { background: transparent; border: none; outline: none; font-size: 13px; color: #333f48; width: 100%; font-family: inherit; }',
      '.v3-search input::placeholder { color: #8e9396; }',

      '.v3-toggle-wrap { display: flex; background: #f4f5f7; border-radius: 9px; padding: 3px; gap: 2px; }',
      '.v3-tog { border: none; background: transparent; color: #637380; border-radius: 7px; padding: 6px 9px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all .12s; width: 38px; height:38px}',
      '.v3-tog.on { background: #fff; color: #333f48; box-shadow: 0 1px 3px rgba(0,0,0,.1); }',

      /* Stats */
      '#sov3-stats { display: flex; gap: 10px; margin-bottom: 18px; justify-content: space-between; align-items: center; }',
      '.sov3-stat-value { display: flex; gap: 10px; }',
      '.sov3-stat-search { border: 1px solid #f4f5f7; border-radius: 12px; padding: 16px 18px; }',
      '.v3-stat { border: 1px solid #f4f5f7; border-radius: 12px; padding: 16px 18px; width:200px; background: #333f48; }',
      '.v3-stat-group { display: flex; align-items: center; justify-content: space-between;}',
      '.v3-stat-label { font-size: 10px; font-weight: 600; color: #fff; text-transform: uppercase; letter-spacing: .7px; margin-bottom: 6px; }',
      '.v3-stat-val { font-size: 24px; font-weight: 600; color: #fff; letter-spacing: -0.6px; line-height: 1; }',

      /* Chips */
      '#sov3-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 20px; }',
      '.v3-chip { padding: 5px 14px; border-radius: 99px; font-size: 12px; font-weight: 500; border: 1px solid #C9CCCE; background: #fff; color: #637380; cursor: pointer; white-space: nowrap; font-family: inherit; transition: all .12s; line-height: 1.4; }',
      '.v3-chip:hover { border-color: #8e9396; color: #637380; }',
      '.v3-chip.on { background: #333f48; color: #fff; border-color: #333f48; }',

      /* Grid */
      '#sov3-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 12px; }',

      /* Card */
      '.v3-card { background: #fff; border: 0.5px solid #C9CCCE; border-radius: 10px; padding: 16px; display: flex; flex-direction: column; transition: box-shadow .15s, border-color .15s; }',
      '.v3-card:hover { border-color: #c2cad1; box-shadow: 0 2px 12px rgba(0,0,0,.06); }',

      '.v3-card-top { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 2px; }',
      '.v3-ava { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; flex-shrink: 0; letter-spacing: 0.3px; }',
      '.v3-card-meta { flex: 1; min-width: 0; }',
      '.v3-card-name { font-size: 13px; font-weight: 500; color: #333f48; }',
      '.v3-badges { display: flex; gap: 5px; flex-wrap: wrap; align-items: center; }',
      '.v3-badge { display: inline-flex; align-items: center; font-size: 10.5px; font-weight: 500; padding: 2px 8px; border-radius: 5px; line-height: 1.6; max-width: 170px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }',
      '.v3-bid { background: #f4f5f7; color: #637380; border: 1px solid #C9CCCE; font-family: "Sora", sans-serif !important; }',
      '.v3-bcat { background: #EFF6FF; color: #1D4ED8; border: 1px solid #DBEAFE; }',

      '.v3-divider { height: 0.5px; background: #ECEEF2; margin: 0 0px 7.5px; }',

      '.v3-desc { font-size: 12px; color: #637380; line-height: 1.55; margin-bottom: 16px; flex: 1; min-height: 18px; }',
      '.v3-desc.empty { font-style: italic; color: #c2cad1; }',

      '.v3-foot { display: flex; align-items: center; justify-content: space-between; margin-bottom: 13px; }',
      '.v3-members { display: flex; align-items: center; gap: 5px; font-size: 11px; color: #8F7F55; }',
      '.v3-members b { font-size: 13px; font-weight: 600; color: #637380; }',
      '.v3-actions { display: flex; gap: 6px; }',

      '.v3-btn { font-size: 11px; font-weight: 500; padding: 5px 11px; border-radius: 4px; color: #fff; background: #333F48; cursor: pointer; font-family: inherit; text-decoration: none !important; display: inline-block; line-height: 1.4; transition: background .1s, border-color .1s; white-space: nowrap; }',
      '.v3-btn:hover { background: #8F7F55; color: #fff; text-decoration: none !important; }',
      '.v3-del { color: #CF826A !important; background: #FDF0ED !important; border:none !important; }',
      '.v3-edt { background: #fff !important; color: #333f48 !important; border-color: #ECEEF2 !important; }',

      /* Table */
      '#sov3-table-wrap { background: #fff; border: 1px solid #C9CCCE; border-radius: 14px; overflow: hidden; }',
      '#sov3-tbl { width: 100%; border-collapse: collapse; font-size: 13px; }',
      '#sov3-tbl thead th { text-align: left; font-size: 10px; font-weight: 600; color: #8e9396; text-transform: uppercase; letter-spacing: .7px; padding: 12px 16px; border-bottom: 1px solid #f4f5f7; white-space: nowrap; background: #FAFAFA; }',
      '#sov3-tbl tbody tr { border-bottom: 1px solid #f8f9f9; }',
      '#sov3-tbl tbody tr:last-child { border-bottom: none; }',
      '#sov3-tbl tbody tr:hover { background: #FAFAFA; }',
      '#sov3-tbl td { padding: 11px 16px; color: #637380; vertical-align: middle; }',

      '.v3-empty { text-align: center; padding: 3rem; color: #8e9396; font-size: 13px; }',
      '.v3-hide { display: none !important; }',
    ].join('\n');
    document.head.appendChild(s);
  }

  function memberSvg() {
    return '<svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7" style="flex-shrink:0;color:#8e9396"><circle cx="8" cy="5" r="3"/><path d="M2.5 14c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" stroke-linecap="round"/></svg>';
  }

  /* ── Build UI ── */
  function buildUI(data) {
    injectStyles();

    /* Hide Moodle native report */
    var reportWrap = document.querySelector('.reportbuilder-wrapper, [data-region="core_reportbuilder/report"]');
    if (reportWrap) reportWrap.style.display = 'none';

    /* Remove stale UIs */
    ['so-cohort-ui', 'so-ui', 'sov3'].forEach(function (id) {
      var el = document.getElementById(id); if (el) el.remove();
    });

    var ui = document.createElement('div');
    ui.id = 'sov3';

    var tabNav = document.querySelector('#region-main .nav.nav-tabs');
    var anchor = tabNav || reportWrap;
    if (anchor && anchor.parentNode) {
      anchor.parentNode.insertBefore(ui, anchor.nextSibling);
    } else {
      (document.getElementById('region-main') || document.body).appendChild(ui);
    }

    var filter   = 'All';
    var search   = '';
    var viewMode = 'card';

    var catSet = [];
    data.forEach(function (d) {
      if (d.cat && catSet.indexOf(d.cat) === -1) catSet.push(d.cat);
    });
    catSet.sort();
    var cats = ['All'].concat(catSet);
    var totalMembers = data.reduce(function (s, d) { return s + d.size; }, 0);

    ui.innerHTML = ''
      + '<div id="sov3-toolbar">'
      +   '<span class="v3-title">Cohorts</span>'
      +   '<span class="v3-subtitle">view and assign cohor</span>'
      + '</div>'

    + '<div id="sov3-stats">'
      +   '<div class="sov3-stat-value">'
      +   '<div class="v3-stat"><div class="v3-stat-label">Total Cohorts</div><div class="v3-stat-val">' + data.length + '</div></div>'
      +   '<div class="v3-stat"><div class="v3-stat-label">Categories</div><div class="v3-stat-val">' + catSet.length + '</div></div>'
      +'</div>'

      +   '<div class="v3-stat-search">'
        +       '<div class="v3-stat-group">'
                +   '<div class="v3-search">'
      +     '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#8e9396" stroke-width="1.8"><circle cx="6.5" cy="6.5" r="4.5"/><path d="M10.5 10.5l3.5 3.5" stroke-linecap="round"/></svg>'
      +     '<input id="sov3-search-input" type="text" placeholder="Search cohorts…" autocomplete="off">'
      +   '</div>'
          +   '<div class="v3-toggle-wrap">'
      +     '<button class="v3-tog on" id="sov3-tog-card" title="Card view">'
      +       '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="1" y="1" width="6" height="6" rx="1.5"/><rect x="9" y="1" width="6" height="6" rx="1.5"/><rect x="1" y="9" width="6" height="6" rx="1.5"/><rect x="9" y="9" width="6" height="6" rx="1.5"/></svg>'
      +     '</button>'
      +     '<button class="v3-tog" id="sov3-tog-tbl" title="Table view">'
      +       '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M1 5h14M1 9h14M1 13h14M5 1v14" stroke-linecap="round"/></svg>'
      +     '</button>'
      +   '</div>'
      +       '</div>'
      +   '</div>'
      + '</div>'

      + '<div id="sov3-chips"></div>'

      + '<div id="sov3-card-view">'
      +   '<div id="sov3-grid"></div>'
      +   '<div class="v3-empty v3-hide" id="sov3-card-empty">No cohorts match your search.</div>'
      + '</div>'

      + '<div id="sov3-tbl-view" class="v3-hide">'
      +   '<div id="sov3-table-wrap">'
      +     '<table id="sov3-tbl">'
      +       '<thead><tr><th>Cohort name</th><th>Cohort ID</th><th>Category</th><th>Description</th><th>Members</th><th>Actions</th></tr></thead>'
      +       '<tbody id="sov3-tbody"></tbody>'
      +     '</table>'
      +     '<div class="v3-empty v3-hide" id="sov3-tbl-empty">No cohorts match your search.</div>'
      +   '</div>'
      + '</div>';

    /* Chips */
    var chipsEl = document.getElementById('sov3-chips');

    document.getElementById('sov3-search-input').addEventListener('input', function (e) {
      search = e.target.value.toLowerCase();
      render();
    });

    document.getElementById('sov3-tog-card').addEventListener('click', function () {
      viewMode = 'card';
      document.getElementById('sov3-tog-card').classList.add('on');
      document.getElementById('sov3-tog-tbl').classList.remove('on');
      document.getElementById('sov3-card-view').classList.remove('v3-hide');
      document.getElementById('sov3-tbl-view').classList.add('v3-hide');
    });
    document.getElementById('sov3-tog-tbl').addEventListener('click', function () {
      viewMode = 'table';
      document.getElementById('sov3-tog-tbl').classList.add('on');
      document.getElementById('sov3-tog-card').classList.remove('on');
      document.getElementById('sov3-tbl-view').classList.remove('v3-hide');
      document.getElementById('sov3-card-view').classList.add('v3-hide');
    });

    function filtered() {
      return data.filter(function (d) {
        var catOk  = filter === 'All' || d.cat === filter;
        var textOk = !search || [d.name, d.cat, d.cohortId, d.desc].some(function (v) {
          return (v || '').toLowerCase().indexOf(search) !== -1;
        });
        return catOk && textOk;
      });
    }

    function render() {
      var rows      = filtered();
      var grid      = document.getElementById('sov3-grid');
      var cardEmpty = document.getElementById('sov3-card-empty');
      var tbody     = document.getElementById('sov3-tbody');
      var tblEmpty  = document.getElementById('sov3-tbl-empty');

      if (!rows.length) {
        grid.innerHTML = ''; cardEmpty.classList.remove('v3-hide');
        tbody.innerHTML = ''; tblEmpty.classList.remove('v3-hide');
        return;
      }
      cardEmpty.classList.add('v3-hide');
      tblEmpty.classList.add('v3-hide');

      /* Cards */
      grid.innerHTML = rows.map(function (d) {
        var p   = paletteFor(d.name);
        var ini = initials(d.name);
        var idB  = d.cohortId ? '<span class="v3-badge v3-bid">' + d.cohortId + '</span>' : '';
        var catB = d.cat      ? '<span class="v3-badge v3-bcat">' + d.cat + '</span>' : '';
        var desc = d.desc
          ? '<p class="v3-desc">' + d.desc + '</p>'
          : '<p class="v3-desc empty">No description</p>';
        var acts = '';
        if (d.assignHref) acts += '<a class="v3-btn" href="' + d.assignHref + '">Assign</a>';
        if (d.editHref)   acts += '<a class="v3-btn v3-edt" href="' + d.editHref   + '">Edit</a>';
        if (d.deleteEl)   acts += '<button class="v3-btn v3-del" data-di="' + data.indexOf(d) + '">Delete</button>';

        return '<div class="v3-card">'
          + '<div class="v3-card-top">'
          +   '<div class="v3-card-meta">'
          +     '<div class="v3-card-name">' + d.name + '</div>'
          +   '</div>'
          + '</div>'
          + '<div class="v3-foot">'
          +   '<div class="v3-members">' + d.size + '</b>&nbsp;member' + (d.size !== 1 ? 's' : '') + '</div>'
          
        + '</div>'
      + '<hr class="v3-divider" />'
      +   '<div class="v3-actions">' + acts + '</div>'
          + '</div>';
      }).join('');

      /* Table */
      tbody.innerHTML = rows.map(function (d) {
        var p   = paletteFor(d.name);
        var ini = initials(d.name);
        var acts = '';
        if (d.assignHref) acts += '<a class="v3-btn" href="' + d.assignHref + '">Assign</a>';
        if (d.editHref)   acts += '<a class="v3-btn v3-edt" href="' + d.editHref   + '">Edit</a>';
        if (d.deleteEl)   acts += '<button class="v3-btn v3-del" data-di="' + data.indexOf(d) + '">Delete</button>';

        return '<tr>'
          + '<td><div style="display:flex;align-items:center;gap:10px;">'
          +   '<span style="font-weight:600;color:#333f48;">' + d.name + '</span>'
          + '</div></td>'
          + '<td style="font-family:\'SF Mono\',Consolas,monospace;font-size:11.5px;color:#637380;">' + (d.cohortId || '—') + '</td>'
          + '<td style="font-size:12px;color:#637380;">' + (d.cat || '—') + '</td>'
          + '<td style="font-size:12px;color:#8e9396;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + (d.desc || '—') + '</td>'
          + '<td style="font-weight:600;color:#637380;text-align:center;">' + d.size + '</td>'
          + '<td><div style="display:flex;gap:5px;">' + acts + '</div></td>'
          + '</tr>';
      }).join('');
    }

    /* Delete delegation */
    ui.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-di]');
      if (!btn) return;
      var d = data[parseInt(btn.getAttribute('data-di'))];
      if (d && d.deleteEl) d.deleteEl.click();
    });

    render();
  }

  /* ── Entry point ── */
  waitFor('table.reportbuilder-table tbody tr', function () {
    setTimeout(function () {
      var rows = scrapeRows();
      if (rows.length) buildUI(rows);
    }, 400);
  });

})();


    
(function () {
  if (!window.location.href.includes("reportbuilder/view.php?id=56")) return;

  const IGNORED_EMAILS = [];

  const wrapper = document.querySelector(".reportbuilder-wrapper");
  if (wrapper) wrapper.style.display = "none";

  const shell = `
    <div id="moodle-custom-report">
      <style>
        #moodle-custom-report {
          font-family: "Sora", sans-serif !important;
          background: #fff;
          border-radius: 12px;
          border: 0.5px solid #dfe1e3;
          overflow: hidden;
          margin: 24px 0;
          position: relative;
          min-height: 220px;
        }
        #mcr-spinner-overlay {
          position: absolute; inset: 0;
          background: #fff;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 16px; z-index: 100;
          border-radius: 12px;
        }
        .mcr-spinner {
          width: 40px; height: 40px;
          border: 3px solid #dfe1e3;
          border-top-color: #637380;
          border-radius: 50%;
          animation: mcr-spin 0.75s linear infinite;
        }
        @keyframes mcr-spin { to { transform: rotate(360deg); } }
        .mcr-spinner-text { font-size: 13px; color: #888; }
        .mcr-content { display: none; }
        .mcr-content.ready { display: block; }
        .mcr-topbar {
          padding: 20px 24px 16px;
          border-bottom: 0.5px solid #dfe1e3;
          display: flex; align-items: flex-start;
          justify-content: space-between; flex-wrap: wrap; gap: 12px;
        }
        .mcr-title { font-size: 22px; font-weight: 700; color: #333f48; }
        .mcr-subtitle { font-size: 14px; color: #637380; margin-top: 2px; }
        .mcr-topbar-right { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
        .mcr-pill-group { display: flex; gap: 8px; }
        .mcr-pill {
          background: #eff0f1; border: 0.5px solid #dfe1e3;
          border-radius: 8px; padding: 6px 16px; text-align: center;
        }
        .mcr-pill-val { font-size: 20px; font-weight: 500; color: #333f48; display: block; }
        .mcr-pill-lbl { font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 0.6px; }
        .mcr-switcher {
          display: flex; gap: 2px;
          background: #eff0f1; border: 0.5px solid #dfe1e3;
          border-radius: 8px; padding: 3px;
        }
        .mcr-switcher-btn {
          background: transparent; border: none; border-radius: 6px;
          padding: 6px 10px; cursor: pointer; color: #888;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.15s, color 0.15s;
        }
        .mcr-switcher-btn:hover { background: #fff; color: #333f48; }
        .mcr-switcher-btn.active { background: #fff; color: #637380; box-shadow: 0 0 0 0.5px #dfe1e3; }
        .mcr-switcher-btn svg { width: 16px; height: 16px; }
        .mcr-toolbar { padding: 12px 24px; border-bottom: 0.5px solid #dfe1e3; }
        .mcr-search {
          width: 100%; padding: 8px 14px;
          border: 0.5px solid #dfe1e3; border-radius: 8px;
          font-size: 14px; background: #eff0f1; color: #333f48;
          outline: none; transition: border-color 0.15s, box-shadow 0.15s;
          box-sizing: border-box;
        }
        .mcr-search:focus { border-color: #637380; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); background: #fff; }
        .mcr-card-grid {
          padding: 20px 24px;
          display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 12px;
        }
        .mcr-card {
          background: #fff; border: 0.5px solid #dfe1e3; border-radius: 10px; overflow: hidden;
          transition: box-shadow 0.15s, border-color 0.15s;
        }
        .mcr-card:hover { box-shadow: 0 2px 12px rgba(0,0,0,0.07); border-color: #ccc; }
        .mcr-card-header {
          padding: 12px 14px; border-bottom: 0.5px solid #dfe1e3; background: #f9f9f9;
        }
        .mcr-card-title { font-size: 13px; font-weight: 500; color: #333f48; line-height: 1.35; }
        .mcr-card-body { padding: 14px; display: flex; align-items: center; justify-content: space-around; gap: 6px; }
        .mcr-card-stat { display: flex; flex-direction: column; align-items: center; gap: 3px; flex: 1; }
        .mcr-card-stat-val { font-size: 16px; font-weight: 500; color: #333f48; }
        .mcr-card-stat-lbl { font-size: 10px; color: #888; text-transform: uppercase; letter-spacing: 0.5px; }
        .mcr-card-divider { width: 0.5px; height: 30px; background: #dfe1e3; flex-shrink: 0; }
        .mcr-table-wrap { overflow-x: auto; display: none; }
        table.mcr-table { width: 100%; border-collapse: collapse; font-size: 13px; }
        .mcr-table thead th {
          padding: 10px 16px; text-align: left;
          font-size: 11px; font-weight: 500; text-transform: uppercase;
          letter-spacing: 0.6px; color: #888;
          border-bottom: 0.5px solid #dfe1e3; background: #f9f9f9;
        }
        .mcr-td { padding: 10px 16px; border-bottom: 0.5px solid #dfe1e3; vertical-align: middle; color: #333f48; }
        .mcr-num { color: #aaa; font-size: 12px; width: 36px; }
        .mcr-center { text-align: center; }
        .mcr-row:hover { background: #f9f9f9; }
        .mcr-count-badge {
          display: inline-block; background: #f0f0f0;
          border: 0.5px solid #dfe1e3; border-radius: 20px;
          padding: 2px 12px; font-size: 12px; font-weight: 500; color: #333f48;
        }
        .mcr-grade { display: inline-block; border-radius: 20px; padding: 2px 10px; font-size: 12px; font-weight: 500; }
        .mcr-grade-high { background: #eaf3de; color: #166534; }
        .mcr-grade-mid  { background: #faeeda; color: #854f0b; }
        .mcr-grade-low  { background: #fcebeb; color: #a32d2d; }
        .mcr-grade-na   { background: #f0f0f0; color: #888; }
        .mcr-footer {
          padding: 10px 24px; border-top: 0.5px solid #dfe1e3;
          font-size: 12px; color: #888;
        }
        .mcr-hidden { display: none !important; }
        @media (max-width: 768px) {
          .mcr-switcher { display: none; }
          .mcr-table-wrap { display: none !important; }
          .mcr-card-grid { display: grid !important; }
        }
      </style>

      <div id="mcr-spinner-overlay">
        <div class="mcr-spinner"></div>
        <span class="mcr-spinner-text">Loading report data...</span>
      </div>

      <div class="mcr-content" id="mcr-content">
        <div class="mcr-topbar">
          <div>
            <div class="mcr-title">Category Report</div>
            <div class="mcr-subtitle">Grouped by category</div>
          </div>
          <div class="mcr-topbar-right">
            <div class="mcr-pill-group">
              <div class="mcr-pill">
                <span class="mcr-pill-val" id="mcr-total-cats">—</span>
                <span class="mcr-pill-lbl">Categories</span>
              </div>
              <div class="mcr-pill">
                <span class="mcr-pill-val" id="mcr-total-enrol">—</span>
                <span class="mcr-pill-lbl">Enrolments</span>
              </div>
            </div>
            <div class="mcr-switcher">
              <button class="mcr-switcher-btn active" id="mcr-btn-card" title="Card view">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
              </button>
              <button class="mcr-switcher-btn" id="mcr-btn-table" title="Table view">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/><line x1="8" y1="3" x2="8" y2="21"/></svg>
              </button>
            </div>
          </div>
        </div>

        <div class="mcr-toolbar">
          <input class="mcr-search" id="mcr-search-input" type="text" placeholder="Search categories...">
        </div>

        <div class="mcr-card-grid" id="mcr-card-grid"></div>

        <div class="mcr-table-wrap" id="mcr-table-wrap">
          <table class="mcr-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Category name</th>
                <th style="text-align:center">Enrolled users</th>
                <th style="text-align:center">Avg grade</th>
                <th style="text-align:center">Courses</th>
              </tr>
            </thead>
            <tbody id="mcr-tbody"></tbody>
          </table>
        </div>

        <div class="mcr-footer" id="mcr-footer">Loading...</div>
      </div>
    </div>
  `;

  const moodleWrapper = document.querySelector(".reportbuilder-wrapper");
  if (moodleWrapper) {
    moodleWrapper.style.display = "none";
    moodleWrapper.insertAdjacentHTML("beforebegin", shell);
  } else {
    document.querySelector("#region-main").insertAdjacentHTML("afterbegin", shell);
  }

  const waitForLink = setInterval(() => {
    const link = document.querySelector('a[data-action="showcount"][data-target-page-size="5000"]');
    const rows = document.querySelectorAll('[data-region="reportbuilder-table"] tbody tr');

    if (link && rows.length === 30) {
      clearInterval(waitForLink);
      setTimeout(() => {
        link.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));
        const poll = setInterval(() => {
          const current = document.querySelectorAll('[data-region="reportbuilder-table"] tbody tr').length;
          if (current > 30) {
            clearInterval(poll);
            extractAndReport();
          }
        }, 2000);
      }, 1000);
    } else if (rows.length > 30) {
      clearInterval(waitForLink);
      extractAndReport();
    }
  }, 500);

  function extractAndReport() {
    const rows = document.querySelectorAll('[data-region="reportbuilder-table"] tbody tr');
    const records = [];
    const ignoredLower = IGNORED_EMAILS.map((e) => e.toLowerCase());

    for (const row of rows) {
      const cells = row.querySelectorAll("td.cell");
      const categoryName = cells[8]?.innerText.trim() || "";
      if (!categoryName) continue;
      const email = cells[3]?.innerText.trim() || "";
      if (!email || ignoredLower.includes(email.toLowerCase())) continue;

      const courseName = cells[0]?.innerText.trim() || "";
      const gradeRaw = cells[6]?.innerText.trim();
      const grade = gradeRaw !== "" && gradeRaw !== null && !isNaN(parseFloat(gradeRaw))
        ? parseFloat(gradeRaw)
        : 0;

      records.push({ email, categoryName, courseName, grade });
    }

    console.log(`[Moodle] Valid records: ${records.length}`);
    renderReport(records);
  }

  function renderReport(records) {
    const categoryMap = {};

    records.forEach((r) => {
      if (!categoryMap[r.categoryName]) {
        categoryMap[r.categoryName] = {
          categoryName: r.categoryName,
          uniqueEmails: new Set(),
          uniqueCourses: new Set(),
          grades: [],
        };
      }
      const cat = categoryMap[r.categoryName];

      cat.uniqueEmails.add(r.email.toLowerCase());
      cat.uniqueCourses.add(r.courseName);
      cat.grades.push(r.grade);
    });

    const categories = Object.values(categoryMap).sort((a, b) =>
      a.categoryName.localeCompare(b.categoryName)
    );

    const totalCats = categories.length;
    const totalEnrol = categories.reduce((sum, c) => sum + c.uniqueEmails.size, 0);

    document.getElementById("mcr-total-cats").textContent = totalCats;
    document.getElementById("mcr-total-enrol").textContent = totalEnrol;
    document.getElementById("mcr-footer").textContent =
      `Showing ${totalCats} categories · ${totalEnrol} total enrolled users`;

    function getStats(cat) {
      const enrolledCount = cat.uniqueEmails.size;
      const courseCount = cat.uniqueCourses.size;
      const avg = cat.grades.length
        ? (cat.grades.reduce((a, b) => a + b, 0) / cat.grades.length).toFixed(1)
        : "0.0";
      const gradeClass =
        parseFloat(avg) >= 80 ? "mcr-grade-high"
        : parseFloat(avg) >= 50 ? "mcr-grade-mid"
        : parseFloat(avg) > 0 ? "mcr-grade-low"
        : "mcr-grade-na";
      return { enrolledCount, courseCount, avg, gradeClass };
    }

    document.getElementById("mcr-card-grid").innerHTML = categories.map((cat) => {
      const { enrolledCount, courseCount, avg, gradeClass } = getStats(cat);
      return `
        <div class="mcr-card" data-search="${cat.categoryName.toLowerCase()}">
          <div class="mcr-card-header"><div class="mcr-card-title">${cat.categoryName}</div></div>
          <div class="mcr-card-body">
            <div class="mcr-card-stat">
              <span class="mcr-card-stat-val">${enrolledCount}</span>
              <span class="mcr-card-stat-lbl">Enrolled</span>
            </div>
            <div class="mcr-card-divider"></div>
            <div class="mcr-card-stat">
              <span class="mcr-grade ${gradeClass}">${avg}%</span>
              <span class="mcr-card-stat-lbl">Avg grade</span>
            </div>
            <div class="mcr-card-divider"></div>
            <div class="mcr-card-stat">
              <span class="mcr-card-stat-val">${courseCount}</span>
              <span class="mcr-card-stat-lbl">Courses</span>
            </div>
          </div>
        </div>`;
    }).join("");

    document.getElementById("mcr-tbody").innerHTML = categories.map((cat, i) => {
      const { enrolledCount, courseCount, avg, gradeClass } = getStats(cat);
      return `
        <tr class="mcr-row" data-search="${cat.categoryName.toLowerCase()}">
          <td class="mcr-td mcr-num">${i + 1}</td>
          <td class="mcr-td"><strong style="font-weight:500">${cat.categoryName}</strong></td>
          <td class="mcr-td mcr-center"><span class="mcr-count-badge">${enrolledCount}</span></td>
          <td class="mcr-td mcr-center"><span class="mcr-grade ${gradeClass}">${avg}%</span></td>
          <td class="mcr-td mcr-center"><span class="mcr-count-badge">${courseCount}</span></td>
        </tr>`;
    }).join("");

    document.getElementById("mcr-spinner-overlay").style.display = "none";
    document.getElementById("mcr-content").classList.add("ready");

    let currentView = "card";
    const cardGrid = document.getElementById("mcr-card-grid");
    const tableWrap = document.getElementById("mcr-table-wrap");
    const btnCard = document.getElementById("mcr-btn-card");
    const btnTable = document.getElementById("mcr-btn-table");

    btnCard.addEventListener("click", () => {
      currentView = "card";
      cardGrid.style.display = "";
      tableWrap.style.display = "none";
      btnCard.classList.add("active");
      btnTable.classList.remove("active");
      document.getElementById("mcr-search-input").dispatchEvent(new Event("input"));
    });

    btnTable.addEventListener("click", () => {
      currentView = "table";
      tableWrap.style.display = "block";
      cardGrid.style.display = "none";
      btnTable.classList.add("active");
      btnCard.classList.remove("active");
      document.getElementById("mcr-search-input").dispatchEvent(new Event("input"));
    });

    document.getElementById("mcr-search-input").addEventListener("input", function () {
      const q = this.value.toLowerCase();
      let visible = 0;
      document.querySelectorAll("#mcr-card-grid .mcr-card").forEach((el) => {
        const m = el.dataset.search.includes(q);
        el.classList.toggle("mcr-hidden", !m);
        if (m && currentView === "card") visible++;
      });
      document.querySelectorAll("#mcr-tbody .mcr-row").forEach((el) => {
        const m = el.dataset.search.includes(q);
        el.classList.toggle("mcr-hidden", !m);
        if (m && currentView === "table") visible++;
      });
      if (!visible) visible = totalCats;
      document.getElementById("mcr-footer").textContent =
        `Showing ${visible} categories · ${totalEnrol} total enrolled users`;
    });

    console.log(`[Moodle] Report injected — ${totalCats} categories.`);
  }
})();

  // ASSIGN COHORT RE-DESIGN
  
 (function () {
  /* ─── 1. INJECT STYLES ─────────────────────────────────────────────────── */
  var css = `
    /* Reset Moodle table layout */
    #assignform table.generaltable { display: block; }
    #assignform table.generaltable tbody { display: grid; grid-template-columns: 1fr auto 1fr; gap: 0; align-items: start; }
    #assignform table.generaltable tr { display: contents; }
    #assignform table.generaltable td { display: block; }

    /* Page title */
    .cohort-assign-title {
      font-size: 18px;
      font-weight: 500;
      color: #1c242b;
      margin-bottom: 6px;
    }
    .cohort-assign-subtitle {
      font-size: 13px;
      color: #71777b;
  margin-bottom: 18px;
      display:none;
    }

    /* Warning banner */
    .alert-danger.alert-block {
      background: #fffbeb !important;
      border: 0.5px solid #f5c842 !important;
      border-radius: 8px !important;
      padding: 12px 16px !important;
      font-size: 13px !important;
      color: #854f0b !important;
      margin-bottom: 24px !important;
      box-shadow: none !important;
    }

    /* Panel cards */
    #existingcell,
    #potentialcell {
      background: #fff;
      border: 0.5px solid #ddd4bc;
      border-radius: 12px;
      overflow: hidden;
      padding: 0 !important;
    }

    /* Panel labels */
    #existingcell > p,
    #potentialcell > p {
      font-size: 13px;
      font-weight: 500;
      color: #555b5e;
      padding: 14px 16px 0;
      margin: 0 0 10px;
    }
    #existingcell > p label,
    #potentialcell > p label { cursor: default; }

    /* Search inputs */
    input[id="removeselect_searchtext"],
    input[id="addselect_searchtext"] {
      width: 100% !important;
      border: 0.5px solid #ddd4bc !important;
      border-radius: 6px !important;
      padding: 7px 10px !important;
      font-size: 13px !important;
      color: #1c242b !important;
      background: #fff !important;
      outline: none !important;
      box-shadow: none !important;
    }
    input[id="removeselect_searchtext"]:focus,
    input[id="addselect_searchtext"]:focus {
      border-color: #71777b !important;
    }

    /* Search row wrapper */
    .d-flex.flex-wrap.align-items-center {
      padding: 8px 12px 12px;
      border-bottom: 0.5px solid #ddd4bc;
      gap: 8px !important;
    }
    .d-flex.flex-wrap.align-items-center label {
      font-size: 12px;
      color: #71777b;
      white-space: nowrap;
    }

    /* Select boxes */
    select#removeselect,
    select#addselect {
      width: 100% !important;
      border: none !important;
      border-radius: 0 !important;
      padding: 0 !important;
      font-size: 13px !important;
      color: #1c242b !important;
      background: #fff !important;
      box-shadow: none !important;
      outline: none !important;
      max-height: 340px;
    }
    select#removeselect option,
    select#addselect option {
      padding: 9px 14px;
      border-bottom: 0.5px solid #f1efe8;
      font-size: 13px;
      color: #1c242b;
      cursor: pointer;
    }
    select#removeselect option:checked,
    select#addselect option:checked {
      background: #8F7F55;
      color: #ffffff;
    }
    select#removeselect optgroup,
    select#addselect optgroup {
      font-size: 12px;
      color: #71777b;
      font-weight: 400;
      padding: 6px 14px 4px;
    }

    /* Buttons column */
    #buttonscell {
      display: flex !important;
      flex-direction: column !important;
      gap: 10px !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 60px 14px 0 !important;
    }
    #buttonscell .btn,
    input#add,
    input#remove {
      border-radius: 8px !important;
      padding: 9px 18px !important;
      font-size: 13px !important;
      cursor: pointer !important;
      border: 0.5px solid #ddd4bc !important;
      transition: background 0.12s !important;
      min-width: 100px;
    }
    input#add {
      background: #1c242b !important;
      color: #fff !important;
      border-color: #1c242b !important;
    }
    input#add:hover { background: #2c2c2a !important; }
    input#remove {
      background: #fff !important;
      color: #1c242b !important;
    }
    input#remove:hover { background: #f5f5f3 !important; }

    /* Back button */
    #backcell {
      grid-column: 1 / -1;
      padding: 16px 0 0 !important;
      border: none !important;
      background: none !important;
    }
    input[name="cancel"] {
      background: #fff !important;
      border: 0.5px solid #ddd4bc !important;
      border-radius: 8px !important;
      padding: 9px 18px !important;
      font-size: 13px !important;
      color: #555b5e !important;
      cursor: pointer !important;
    }
    input[name="cancel"]:hover { background: #f5f5f3 !important; }

    /* Hide Moodle search options collapsible */
    #userselector_options { display: none !important; }
    input[id="removeselect_clearbutton"],
    input[id="addselect_clearbutton"] { display: none !important; }

    /* Count badges — injected via JS */
    .cohort-count-badge {
      font-size: 12px;
      color: #71777b;
      background: #f1efe8;
      padding: 2px 8px;
      border-radius: 20px;
      margin-left: 8px;
    }
  `;

  var styleEl = document.createElement("style");
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ─── 2. INJECT PAGE TITLE ──────────────────────────────────────────────── */
  var h2 = document.querySelector("h2");
  if (h2) {
    var cohortName = h2.textContent
      .replace("Cohort '", "")
      .replace("' members", "");
    h2.outerHTML =
      '<h2 class="cohort-assign-title">Cohort members — ' +
      cohortName +
      "</h2>" +
      '<p class="cohort-assign-subtitle">Manage who belongs to this cohort</p>';
  }

  /* ─── 3. ADD MEMBER COUNT BADGE TO PANEL LABELS ────────────────────────── */
  function addBadge(labelFor, selectId) {
    var label = document.querySelector('label[for="' + labelFor + '"]');
    var select = document.getElementById(selectId);
    if (!label || !select) return;
    var count = select.querySelectorAll("option").length;
    var badge = document.createElement("span");
    badge.className = "cohort-count-badge";
    badge.textContent = count;
    label.parentNode.appendChild(badge);
  }
  addBadge("removeselect", "removeselect");
  addBadge("addselect", "addselect");

  /* ─── 4. CLEAN UP OPTION TEXT ──────────────────────────────────────────── */
  /*
   * Moodle renders option text as:  "Full Name (, email@example.com)"
   * We reformat it to:              "Full Name  ·  email@example.com"
   * Regex captures:
   *   group 1 → name  (everything before " (,")
   *   group 2 → email (everything between "(, " and ")")
   */
  function cleanOptionText(selectId) {
    var select = document.getElementById(selectId);
    if (!select) return;
    var options = select.querySelectorAll("option");
    options.forEach(function (opt) {
      var match = opt.textContent.match(/^(.+?)\s*\(,\s*(.+?)\)\s*$/);
      if (match) {
        var name = match[1].trim();
        var email = match[2].trim();
        opt.textContent = name + "  -  " + email;
      }
    });
  }
  cleanOptionText("removeselect");
  cleanOptionText("addselect");

  /* ─── 5. UPDATE COUNTS ON FORM SUBMIT (OPTIONAL) ───────────────────────── */
  var form = document.getElementById("assignform");
  if (form) {
    form.addEventListener("submit", function () {
      /* Counts update on page reload naturally */
    });
  }
})();

  

(function () {
  const target = document.getElementById("topofscroll");
  if (!target) return;

  // Gate 1: correct body id
  if (document.body.id !== "page-admin-search") return;


  const containerFluid = target.querySelector('#linkusers .container-fluid');

  if (!containerFluid) {
  console.log("CONTAINER FLUID NOT EXISTS");
  
    return;
  }

  const rows = containerFluid.querySelectorAll('.row');
  
  if (rows.length > 3) {
    return;
  } 


  // All gates passed — safe to inject

  // Hide secondary nav
  const secondaryNav = target.querySelector(".secondary-navigation");
  if (secondaryNav) secondaryNav.style.display = "none";

  const html = `
<div id="custom-admin-panel" style="padding: 1.5rem 0 1.5rem 1.5rem;">
  <div style="margin-bottom: 2rem;">
    <h1 style="font-size: 22px; font-weight: 700; margin: 0 0 4px;">Admin panel</h1>
    <p style="font-size: 14px; color: #637380; margin: 0;">Manage your site from one place</p>
  </div>

  <div style="display: grid; gap: 2rem;">

    <section>
      <p style="font-size: 12px; font-weight: 600; color: #8e9396; text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 10px;">Courses</p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; max-width: 700px;">
        <a href="https://smileon.rinseai.com.au/course/management.php" class="admin-card" style="display:flex;align-items:center;gap:12px;background:#fff;border:0.5px solid #c2cad1;border-radius:12px;padding:14px 16px;text-decoration:none;color:#111;">
          <div style="width:34px;height:34px;border-radius:8px;background:#f4f5f7;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="2" width="14" height="10" rx="1.5" stroke="#637380" stroke-width="1.2" fill="none"/><line x1="4" y1="13" x2="12" y2="13" stroke="#637380" stroke-width="1.2" stroke-linecap="round"/><line x1="8" y1="12" x2="8" y2="13" stroke="#637380" stroke-width="1.2"/></svg>
          </div>
          <div>
            <p style="font-size:14px;font-weight:500;margin:0 0 2px;">Manage courses</p>
            <p style="font-size:12px;color:#637380;margin:0;">View, edit and organise</p>
          </div>
        </a>
      </div>
    </section>

    <section>
      <p style="font-size:12px;font-weight:600;color:#8e9396;text-transform:uppercase;letter-spacing:0.06em;margin:0 0 10px;">Users</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;max-width:700px;">

        <a href="https://smileon.rinseai.com.au/admin/user.php" class="admin-card" style="display:flex;align-items:center;gap:12px;background:#fff;border:0.5px solid #c2cad1;border-radius:12px;padding:14px 16px;text-decoration:none;color:#111;">
          <div style="width:34px;height:34px;border-radius:8px;background:#f4f5f7;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5.5" r="2.5" stroke="#637380" stroke-width="1.2" fill="none"/><path d="M2.5 13c0-2.485 2.462-4.5 5.5-4.5s5.5 2.015 5.5 4.5" stroke="#637380" stroke-width="1.2" stroke-linecap="round" fill="none"/></svg>
          </div>
          <div>
            <p style="font-size:14px;font-weight:500;margin:0 0 2px;">Browse all users</p>
            <p style="font-size:12px;color:#637380;margin:0;">Search and manage accounts</p>
          </div>
        </a>

        <a href="https://smileon.rinseai.com.au/cohort/index.php?contextid=1&showall=1" class="admin-card" style="display:flex;align-items:center;gap:12px;background:#fff;border:0.5px solid #c2cad1;border-radius:12px;padding:14px 16px;text-decoration:none;color:#111;">
          <div style="width:34px;height:34px;border-radius:8px;background:#f4f5f7;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="5" cy="5.5" r="2" stroke="#637380" stroke-width="1.2" fill="none"/><circle cx="11" cy="5.5" r="2" stroke="#637380" stroke-width="1.2" fill="none"/><path d="M1 13c0-1.934 1.79-3.5 4-3.5" stroke="#637380" stroke-width="1.2" stroke-linecap="round" fill="none"/><path d="M15 13c0-1.934-1.79-3.5-4-3.5" stroke="#637380" stroke-width="1.2" stroke-linecap="round" fill="none"/><path d="M5.5 13c0-1.657 1.12-3 2.5-3s2.5 1.343 2.5 3" stroke="#637380" stroke-width="1.2" stroke-linecap="round" fill="none"/></svg>
          </div>
          <div>
            <p style="font-size:14px;font-weight:500;margin:0 0 2px;">Cohorts</p>
            <p style="font-size:12px;color:#637380;margin:0;">Group and manage users</p>
          </div>
        </a>

        <a href="https://smileon.rinseai.com.au/user/editadvanced.php?id=-1" class="admin-card" style="display:flex;align-items:center;gap:12px;background:#fff;border:0.5px solid #c2cad1;border-radius:12px;padding:14px 16px;text-decoration:none;color:#111;">
          <div style="width:34px;height:34px;border-radius:8px;background:#f4f5f7;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="5.5" r="2.5" stroke="#637380" stroke-width="1.2" fill="none"/><path d="M1.5 13c0-2.485 2.462-4.5 5.5-4.5" stroke="#637380" stroke-width="1.2" stroke-linecap="round" fill="none"/><line x1="12" y1="9" x2="12" y2="15" stroke="#637380" stroke-width="1.2" stroke-linecap="round"/><line x1="9" y1="12" x2="15" y2="12" stroke="#637380" stroke-width="1.2" stroke-linecap="round"/></svg>
          </div>
          <div>
            <p style="font-size:14px;font-weight:500;margin:0 0 2px;">Add new user</p>
            <p style="font-size:12px;color:#637380;margin:0;">Create a user account</p>
          </div>
        </a>

      </div>
      </section>
    <section>
      <p style="font-size:12px;font-weight:600;color:#8e9396;text-transform:uppercase;letter-spacing:0.06em;margin:0 0 10px;">Reports</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;max-width:700px;">

        <a href="https://smileon.rinseai.com.au/reportbuilder/view.php?id=56" class="admin-card" style="display:flex;align-items:center;gap:12px;background:#fff;border:0.5px solid #c2cad1;border-radius:12px;padding:14px 16px;text-decoration:none;color:#111;">
          <div style="width:34px;height:34px;border-radius:8px;background:#f4f5f7;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="6" height="6" rx="1" stroke="#637380" stroke-width="1.2" fill="none"/>
              <rect x="9" y="1" width="6" height="6" rx="1" stroke="#637380" stroke-width="1.2" fill="none"/>
              <rect x="1" y="9" width="6" height="6" rx="1" stroke="#637380" stroke-width="1.2" fill="none"/>
              <rect x="9" y="9" width="6" height="6" rx="1" stroke="#637380" stroke-width="1.2" fill="none"/>
              <line x1="10.5" y1="11.5" x2="13.5" y2="11.5" stroke="#637380" stroke-width="1" stroke-linecap="round"/>
              <line x1="10.5" y1="13" x2="13.5" y2="13" stroke="#637380" stroke-width="1" stroke-linecap="round"/>
            </svg>
          </div>
          <div>
            <p style="font-size:14px;font-weight:500;margin:0 0 2px;">Category Report</p>
            <p style="font-size:12px;color:#637380;margin:0;">Search and view category report</p>
          </div>
        </a>

        <a href="https://smileon.rinseai.com.au/reportbuilder/view.php?id=15" class="admin-card" style="display:flex;align-items:center;gap:12px;background:#fff;border:0.5px solid #c2cad1;border-radius:12px;padding:14px 16px;text-decoration:none;color:#111;">
          <div style="width:34px;height:34px;border-radius:8px;background:#f4f5f7;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="4" r="2" stroke="#637380" stroke-width="1.2" fill="none"/>
              <path d="M4 13c0-2.209 1.791-4 4-4s4 1.791 4 4" stroke="#637380" stroke-width="1.2" stroke-linecap="round" fill="none"/>
              <rect x="10" y="8" width="5" height="6" rx="1" stroke="#637380" stroke-width="1.2" fill="none"/>
              <line x1="11.5" y1="10.5" x2="13.5" y2="10.5" stroke="#637380" stroke-width="1" stroke-linecap="round"/>
              <line x1="11.5" y1="12" x2="13.5" y2="12" stroke="#637380" stroke-width="1" stroke-linecap="round"/>
            </svg>
          </div>
          <div>
            <p style="font-size:14px;font-weight:500;margin:0 0 2px;">Student Report</p>
            <p style="font-size:12px;color:#637380;margin:0;">Search and view student report</p>
          </div>
        </a>

      </div>
      </section>
      

  </div>
</div>`;

  // Hide original page content, inject ours before it
  const pageContent = target.querySelector("#page-content");
  if (pageContent) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html;
    pageContent.parentNode.insertBefore(wrapper.firstElementChild, pageContent);
    pageContent.style.display = "none";
  }

  // Hover styles
  const style = document.createElement("style");
  style.textContent =
    ".admin-card:hover { border-color: #c2cad1 !important; background: #f8f9f9 !important; }";
  document.head.appendChild(style);
})();
  
  
(function () {
  if (document.body.id !== "page-user-profile") return;

  function getInitials(name) {
    if (!name) return "??";
    return name
      .trim()
      .split(/\s+/)
      .map(function (w) {
        return w[0].toUpperCase();
      })
      .slice(0, 2)
      .join("");
  }

  function injectStyles() {
    if (document.getElementById("cps-styles")) return;
    var s = document.createElement("style");
    s.id = "cps-styles";
    s.textContent = [
      "#cps-wrap *,#cps-wrap *::before,#cps-wrap *::after{box-sizing:border-box;margin:0;padding:0}",
      "#cps-wrap{font-family:inherit;background:#fff;border:0.5px solid rgba(0,0,0,0.1);border-radius:14px;max-width:420px;overflow:hidden;margin:16px 0 20px;}",
      "#cps-wrap .cps-top{display:flex;align-items:center;justify-content:space-between;padding:16px 20px 12px;border-bottom:0.5px solid rgba(0,0,0,0.07);}",
      "#cps-wrap .cps-name{font-size:15px;font-weight:600;color:#111;display:flex;align-items:center;gap:10px;}",
      "#cps-wrap .cps-avatar{width:36px;height:36px;border-radius:50%;background:#e8e7fd;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;color:#333F48;flex-shrink:0;}",
      "#cps-wrap .cps-edit{font-size:12px;color:#333F48;text-decoration:none;padding:5px 12px;border:0.5px solid #333F48;border-radius:7px;white-space:nowrap;}",
      "#cps-wrap .cps-edit:hover{background:#8F7F55; color:#fff;}",
      "#cps-wrap .cps-fields{padding:4px 0;}",
      "#cps-wrap .cps-field{display:flex;align-items:flex-start;padding:11px 20px;border-bottom:0.5px solid rgba(0,0,0,0.06);gap:16px;}",
      "#cps-wrap .cps-field:last-child{border-bottom:none}",
      "#cps-wrap .cps-lbl{font-size:11px;font-weight:600;color:#999;letter-spacing:0.06em;text-transform:uppercase;min-width:82px;padding-top:2px;flex-shrink:0;}",
      "#cps-wrap .cps-val{font-size:13px;color:#222;line-height:1.5;flex:1;}",
      "#cps-wrap .cps-val a{color:#333F48;text-decoration:none;}",
      "#cps-wrap .cps-val a:hover{text-decoration:underline}",
      "#cps-wrap .cps-footer{padding:14px 20px;}",
      "#cps-wrap .cps-cert{display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:600;color:#fff;background:#333F48;padding:8px 18px;border-radius:8px;text-decoration:none;}",
      "#cps-wrap .cps-cert:hover{background:#8F7F55;}",
      "#cps-wrap .cps-cert-icon{width:16px;height:16px;flex-shrink:0;}",
    ].join("");
    document.head.appendChild(s);
  }

  function buildCard() {
    if (document.getElementById("cps-wrap")) return;

    var profileTree = document.querySelector(".profile_tree");
    if (!profileTree) return;

    var allSections = [].slice.call(
      document.querySelectorAll(".profile_tree .node_category"),
    );
    var userSec = null,
      miscSec = null;

    allSections.forEach(function (el) {
      var h = el.querySelector("h3");
      if (!h) return;
      var t = h.textContent.trim();
      if (t === "User details") userSec = el;
      if (t === "Miscellaneous") miscSec = el;
    });

  if (!userSec || !miscSec) return;
    
  const oldHeader = document.querySelector('#page-user-profile h2.cohort-assign-title');
  oldHeader.textContent="Edit Profile";
  const subHeader = document.querySelector('#page-user-profile p.cohort-assign-subtitle');
  subHeader.textContent="edit and view user profile";

    var detailMap = {};
    userSec.querySelectorAll("dl").forEach(function (dl) {
      var dt = dl.querySelector("dt");
      var dd = dl.querySelector("dd");
      if (dt && dd) detailMap[dt.textContent.trim()] = dd;
    });

    var editLink = userSec.querySelector("li.editprofile a");
    var certLink = null;
    [].slice.call(miscSec.querySelectorAll("a")).forEach(function (a) {
      if (a.textContent.trim() === "My certificates") certLink = a;
    });

    var nameEl = document.querySelector(".page-header-headings h1");
    var fullName = nameEl ? nameEl.textContent.trim() : "";
    var initials = getInitials(fullName);

    var wrap = document.createElement("div");
    wrap.id = "cps-wrap";

    // Top bar
    var top = document.createElement("div");
    top.className = "cps-top";

    var nameGroup = document.createElement("div");
    nameGroup.className = "cps-name";

    var avatar = document.createElement("div");
    avatar.className = "cps-avatar";
    avatar.textContent = initials;
    nameGroup.appendChild(avatar);

    if (fullName) {
      var nameSpan = document.createElement("span");
      nameSpan.textContent = fullName;
      nameGroup.appendChild(nameSpan);
    }
    top.appendChild(nameGroup);

    if (editLink) {
      var editA = document.createElement("a");
      editA.className = "cps-edit";
      editA.href = editLink.href;
      editA.textContent = "Edit profile";
      top.appendChild(editA);
    }
    wrap.appendChild(top);

    // Fields
    var fields = document.createElement("div");
    fields.className = "cps-fields";

    ["Email address", "Country", "Timezone"].forEach(function (key) {
      var dd = detailMap[key];
      if (!dd) return;
      var row = document.createElement("div");
      row.className = "cps-field";

      var lbl = document.createElement("span");
      lbl.className = "cps-lbl";
      lbl.textContent = key;

      var val = document.createElement("span");
      val.className = "cps-val";
      val.innerHTML = dd.innerHTML;

      row.appendChild(lbl);
      row.appendChild(val);
      fields.appendChild(row);
    });
    wrap.appendChild(fields);

    // Footer
    if (certLink) {
      var footer = document.createElement("div");
      footer.className = "cps-footer";

      var certA = document.createElement("a");
      certA.className = "cps-cert";
      certA.href = certLink.href;

      var icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      icon.setAttribute("class", "cps-cert-icon");
      icon.setAttribute("viewBox", "0 0 16 16");
      icon.setAttribute("fill", "none");
      icon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      icon.innerHTML =
        '<rect x="1" y="1" width="14" height="11" rx="2" stroke="white" stroke-width="1.2"/>' +
        '<path d="M5 14l3-2 3 2" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<path d="M4 5h8M4 8h5" stroke="white" stroke-width="1.2" stroke-linecap="round"/>';

      certA.appendChild(icon);
      certA.appendChild(document.createTextNode("My Certificates"));
      footer.appendChild(certA);
      wrap.appendChild(footer);
    }

    // Insert BEFORE profile_tree (outside it, as sibling)
    profileTree.parentNode.insertBefore(wrap, profileTree);

    // Hide each <section> inside profile_tree individually — NOT profile_tree itself
    allSections.forEach(function (el) {
      var sec = el.closest("section");
      if (sec) sec.style.cssText = "display:none!important";
    });
  }

  function run() {
    injectStyles();
    buildCard();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
    
    
(function () {
  if (document.body.id !== "page-user-editadvanced") return;

  // ── Hide chrome ──────────────────────────────────────────────────────────
  document
    .querySelectorAll(".collapsible-actions")
    .forEach((el) => el.style.setProperty("display", "none", "important"));
  document
    .querySelectorAll("fieldset")
    .forEach((el) => el.style.setProperty("display", "none", "important"));

  // ── Show & expand the General section ───────────────────────────────────
  const generalSection = document.getElementById("id_moodle");
  const generalContainer = document.getElementById("id_moodlecontainer");
  if (generalSection)
    generalSection.style.setProperty("display", "block", "important");
  if (generalContainer) {
    generalContainer.classList.add("show");
    generalContainer.classList.remove("collapse");
    generalContainer.style.setProperty("display", "block", "important");
    generalContainer.querySelectorAll(".fitem").forEach((el) => {
      el.style.setProperty("display", "none", "important");
    });
  }

  // ── Find notify & suspended rows by inner input ID ───────────────────────
  const createpasswordInput = document.getElementById("id_createpassword");
  const notifyRow = createpasswordInput
    ? createpasswordInput.closest(".fitem")
    : null;
  if (notifyRow) {
    notifyRow.id = "fitem_id_notifyuser";
    notifyRow.style.setProperty("display", "", "important");
  }

  const suspendedInput = document.getElementById("id_suspended");
  const suspendedRow = suspendedInput
    ? suspendedInput.closest(".fitem")
    : null;
  if (suspendedRow) {
    suspendedRow.style.setProperty("display", "none", "important");
  }

  // ── Show & expand the Dental Practice section ────────────────────────────
  const dentalSection = document.getElementById("id_category_1");
  const dentalContainer = document.getElementById("id_category_1container");
  if (dentalSection)
    dentalSection.style.setProperty("display", "block", "important");
  if (dentalContainer) {
    dentalContainer.classList.add("show");
    dentalContainer.classList.remove("collapse");
    dentalContainer.style.setProperty("display", "block", "important");
  }

  // ── Show all relevant fields ─────────────────────────────────────────────
  const allFieldIds = [
    "fitem_id_username",
    "fitem_id_firstname",
    "fitem_id_lastname",
    "fitem_id_email",
    "fitem_id_newpassword",
    "fitem_id_timezone",
    "fitem_id_profile_field_DentalPractice",
  ];
  allFieldIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.style.setProperty("display", "", "important");
  });

  // ── Build layout ─────────────────────────────────────────────────────────
  // Row 1: username, firstname, lastname
  // Row 2: email, dental practice, timezone
  // Row 3: password, policy info, notify user
  const ROWS = [
    ["fitem_id_username", "fitem_id_firstname", "fitem_id_lastname"],
    ["fitem_id_email", "fitem_id_profile_field_DentalPractice", "fitem_id_timezone"],
    ["fitem_id_newpassword"],
  ];

  const firstEl = document.getElementById("fitem_id_username");
  const anchorContainer = firstEl ? firstEl.parentNode : null;

  if (anchorContainer) {
    ROWS.forEach((rowIds) => {
      if (rowIds.length === 1) {
        const el = document.getElementById(rowIds[0]);
        if (el) anchorContainer.appendChild(el);
      } else {
        const wrapper = document.createElement("div");
        wrapper.className = "custom-field-row";

        rowIds.forEach((id) => {
          const el = document.getElementById(id);
          if (el) {
            el.style.setProperty("display", "", "important");
            wrapper.appendChild(el);
          }
        });

        anchorContainer.appendChild(wrapper);
      }
    });
  }

  // ── Show submit button row ───────────────────────────────────────────────
  const buttonRow = document.getElementById("fgroup_id_buttonar");
  if (buttonRow) buttonRow.style.setProperty("display", "", "important");

  // ── Hide required note ───────────────────────────────────────────────────
  const requiredNote = document.querySelector(".fdescription.required");
  if (requiredNote)
    requiredNote.style.setProperty("display", "none", "important");

  // ── Fonts ────────────────────────────────────────────────────────────────
  const fontLink = document.createElement("link");
  fontLink.rel = "stylesheet";
  fontLink.href =
    "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Serif+Display&display=swap";
  document.head.appendChild(fontLink);

  // ── Styles ───────────────────────────────────────────────────────────────
  const style = document.createElement("style");
  style.textContent = `
    #page, #page-wrapper { background: #f2f4f6 !important; }
    #page-header, .navbar, nav.navbar { display: none !important; }

    #page-user-editadvanced #region-main .mform {
      font-family: "Sora", sans-serif !important;
      background: #ffffff !important;
      border-radius: 16px !important;
      box-shadow: none !important;
    position: relative !important;
      border:none !important;
    }

    #page-user-editadvanced #region-main .mform::before {
      content: 'Edit Profile' !important;
      display: block !important;
      font-family: "Sora", sans-serif !important;
      font-size: 22px !important;
      color: #333f48 !important;
      border: none !important;
      font-weight: 700 !important;
      padding-bottom: 32px !important;
    }

    #page-user-editadvanced #id_moodle,
    #page-user-editadvanced #id_moodle_picture,
    #page-user-editadvanced #id_category_1 {
      border: none !important;
      padding: 0 !important;
      margin: 0 !important;
      box-shadow: none !important;
    }

    #page-user-editadvanced #id_moodle > .d-flex,
    #page-user-editadvanced #id_category_1 > .d-flex {
      display: none !important;
    }

    #page-user-editadvanced #fitem_id_currentpicture {
      display: none !important;
    }

    #page-user-editadvanced #id_category_1 {
      margin-top: 4px !important;
      padding-top: 0 !important;
      border: none !important;
    }

    /* ── Multi-field rows ── */
    .custom-field-row {
      display: flex !important;
      gap: 16px !important;
      width: 100% !important;
      margin-bottom: 0 !important;
    }

    .custom-field-row .fitem {
      flex: 1 1 0 !important;
      min-width: 0 !important;
    }

    @media (max-width: 600px) {
      .custom-field-row {
        flex-direction: column !important;
        gap: 0 !important;
      }
    }

    /* ── Field items ── */
    #page-user-editadvanced .fitem.mb-3 {
      display: block !important;
      margin-bottom: 18px !important;
    }

    #page-user-editadvanced .fitem .row { display: block !important; }

    #page-user-editadvanced .fitem .col-md-3,
    #page-user-editadvanced .fitem .col-md-9 {
      flex: 0 0 100% !important;
      max-width: 250px !important;
      width: 100% !important;
      padding: 0 !important;
    }

    /* ── Labels ── */
    #page-user-editadvanced .fitem .col-form-label,
    #page-user-editadvanced .fitem .col-form-label label {
      font-family: "Sora", sans-serif !important;
      font-size: 11px !important;
      font-weight: 600 !important;
      color: #637380 !important;
      text-transform: uppercase !important;
      letter-spacing: 0.7px !important;
      padding: 0 0 6px 0 !important;
      display: block !important;
    }

    #page-user-editadvanced .fitem .form-label-addon { display: none !important; }

    /* ── Text inputs ── */
    #page-user-editadvanced .fitem:not(#fitem_id_newpassword) .form-control {
      font-family: "Sora", sans-serif !important;
      width: 100% !important;
      border: none !important;
      border-radius: 10px !important;
      padding: 11px 14px !important;
      font-size: 14px !important;
      color: #333f48 !important;
      background: #fafafa !important;
      transition: border-color 0.2s, box-shadow 0.2s !important;
      outline: none !important;
    box-shadow: none !important;
  border: 1.5px solid #C9CCCE !important;
    }

    #page-user-editadvanced .fitem:not(#fitem_id_newpassword) .form-control:focus {
      border-color: #8f7f55 !important;
      background: #fff !important;
      box-shadow: 0 0 0 3px rgba(99,102,241,0.1) !important;
    }

    /* ── Select inputs ── */
    #page-user-editadvanced .fitem .form-select {
      font-family: "Sora", sans-serif !important;
      width: 100% !important;
      border: 1.5px solid #C9CCCE !important;
      border-radius: 10px !important;
      padding: 11px 14px !important;
      font-size: 14px !important;
      color: #333f48 !important;
      background: #fafafa !important;
    }

    /* ── Password policy info ── */
    #page-user-editadvanced #fitem_id_passwordpolicyinfo .form-control-static {
      font-size: 11.5px !important;
      color: #8e9396 !important;
      background: #f8f9f9 !important;
      border: 1px solid #f4f5f7 !important;
      border-radius: 8px !important;
      padding: 10px 12px !important;
      line-height: 1.6 !important;
    }

    /* ── Notify user checkbox row ── */
    #fitem_id_notifyuser {
      margin-bottom: 18px !important;
    }

    #fitem_id_notifyuser .col-form-label { display: none !important; }

    #fitem_id_notifyuser .form-check-label {
      font-family: "Sora", sans-serif !important;
      font-size: 13px !important;
      color: #637380 !important;
      cursor: pointer !important;
    }

    /* ── Buttons ── */
    #page-user-editadvanced #fgroup_id_buttonar .col-md-3 { display: none !important; }
    #page-user-editadvanced #fgroup_id_buttonar .col-md-9 {
      flex: 0 0 100% !important;
      max-width: 100% !important;
      padding: 0 !important;
    }

    #page-user-editadvanced #fgroup_id_buttonar .d-flex {
      gap: 12px !important;
      border: none !important;
    }

    #page-user-editadvanced #id_submitbutton {
      font-family: "Sora", sans-serif !important;
      background: #333f48 !important;
      color: #fff !important;
      border: none !important;
      border-radius: 10px !important;
      padding: 11px 28px !important;
      font-size: 14px !important;
      font-weight: 600 !important;
      cursor: pointer !important;
      transition: background 0.2s, transform 0.1s !important;
      letter-spacing: 0.2px !important;
    }

    #page-user-editadvanced #id_submitbutton:hover {
      background: #8f7f55 !important;
      transform: translateY(-1px) !important;
    }

    #page-user-editadvanced #id_cancel {
      font-family: "Sora", sans-serif !important;
      background: transparent !important;
      color: #637380 !important;
      border: 1.5px solid #C9CCCE !important;
      border-radius: 10px !important;
      padding: 11px 20px !important;
      font-size: 14px !important;
      font-weight: 500 !important;
      cursor: pointer !important;
      transition: border-color 0.2s, color 0.2s !important;
    }

    #page-user-editadvanced #id_cancel:hover {
      border-color: #333f48 !important;
      color: #333f48 !important;
    }

    #page-user-editadvanced .text-danger[title="Required"] { display: none !important; }
    #page-user-editadvanced .invalid-feedback { font-size: 12px !important; margin-top: 4px !important; }
  `;
  document.head.appendChild(style);

  console.log("✅ Edit Profile form cleaned, reordered, and styled");
})();

    
    // Back button to assign cohort page
    
(function () {
  const body = document.getElementById('page-cohort-assign');
  if (!body) return;

  const mainContent = document.getElementById('region-main');
  if (!mainContent) return;

  // Get the h2 title text
  const h2 = document.querySelector('#page-cohort-assign #region-main h2');
  const titleText = h2 ? h2.textContent.trim() : 'Assign Cohort';

  // Create wrapper div
    const wrapper = document.createElement('div');
  wrapper.id="header-group";
  wrapper.style.cssText = `
    display: block;
  `;

  // Create back button
  const btn = document.createElement('button');
  btn.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#fff"><path d="M384-288 192-480l192-192 51 51-105 105h438v72H330l105 105-51 51Z"/></svg> Back`;
  btn.type = 'button';
  btn.className = 'btn btn-back';

  btn.addEventListener('click', function () {
    history.back();
  });

  // Create title element
  const title = document.createElement('h2');
  title.textContent = titleText;
  title.style.cssText = `
    margin: 0;
    font-size: 1.5rem;
    font-weight: 500;
  `;

  // Append button and title side by side
  wrapper.appendChild(btn);
  // wrapper.appendChild(title);

  // Insert wrapper after #maincontent
  mainContent.insertAdjacentElement('afterbegin', wrapper);
})();
    
(function () {
  if (!window.location.href.includes("reportbuilder/view.php?id=15")) return;

  const IGNORED_EMAILS = [];
  const PAGE_SIZE = 20;

  const wrapper = document.querySelector(".reportbuilder-wrapper");
  if (wrapper) wrapper.style.display = "none";

  const shell = `
    <div id="moodle-student-report">
      <style>
        #moodle-student-report {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: #fff;
          border-radius: 12px;
          border: 0.5px solid #dfe1e3;
          overflow: hidden;
          margin: 24px 0;
          position: relative;
          min-height: 220px;
        }
        #msr-spinner-overlay {
          position: absolute; inset: 0;
          background: #fff;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 16px; z-index: 100;
          border-radius: 12px;
        }
        .msr-spinner {
          width: 40px; height: 40px;
          border: 3px solid #dfe1e3;
          border-top-color: #637380;
          border-radius: 50%;
          animation: msr-spin 0.75s linear infinite;
        }
        @keyframes msr-spin { to { transform: rotate(360deg); } }
        .msr-spinner-text { font-size: 13px; color: #888; font-family: "Sora", sans-serif !important; }
        .msr-content { display: none; }
        .msr-content.ready { display: block; }

        /* Top bar */
        .msr-topbar {
          padding: 20px 24px 16px;
          border-bottom: 0.5px solid #dfe1e3;
          display: flex; align-items: flex-start;
          justify-content: space-between; flex-wrap: wrap; gap: 12px;
        }
        .msr-title { font-size: 22px; font-weight: 700; color: #333f48; letter-spacing: -0.3px; }
        .msr-subtitle { font-size: 14px; color: #637380; margin-top: 3px; font-family: "Sora", sans-serif !important; }
        .msr-pill-group { display: flex; gap: 8px; align-items: center; }
        .msr-pill {
          background: #eff0f1; border: 0.5px solid #dfe1e3;
          border-radius: 8px; padding: 6px 16px; text-align: center;
        }
        .msr-pill-val { font-size: 20px; font-weight: 600; color: #333f48; display: block; }
        .msr-pill-lbl { font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 0.6px; font-family: "Sora", sans-serif !important; }

        /* Filters */
        .msr-filters {
          padding: 14px 24px;
          border-bottom: 0.5px solid #dfe1e3;
          display: flex; gap: 10px; flex-wrap: wrap;
        }
        .msr-filter-wrap { flex: 1; min-width: 160px; position: relative; }
        .msr-filter-label {
          font-size: 10px; text-transform: uppercase; letter-spacing: 0.7px;
          color: #aaa; margin-bottom: 4px; display: block;
          font-family: "Sora", sans-serif !important;
        }
        .msr-filter {
          width: 100%; padding: 8px 12px;
          border: 0.5px solid #dfe1e3; border-radius: 8px;
          font-size: 13px; background: #f9f9f9; color: #333f48;
          outline: none; transition: border-color 0.15s, box-shadow 0.15s, background 0.15s;
          box-sizing: border-box;
          font-family: "Sora", sans-serif !important;
          appearance: none; -webkit-appearance: none;
        }
        .msr-filter:focus {
          border-color: #637380;
          box-shadow: 0 0 0 3px rgba(107,114,128,0.1);
          background: #fff;
        }
        .msr-clear-btn {
          margin-top: 20px;
          background: transparent; border: 0.5px solid #dfe1e3;
          border-radius: 8px; padding: 8px 14px;
          font-size: 12px; color: #888; cursor: pointer;
          font-family: "Sora", sans-serif !important;
          white-space: nowrap;
          transition: background 0.15s, color 0.15s;
          align-self: flex-end;
        }
        .msr-clear-btn:hover { background: #f0f0f0; color: #555; }

        /* ── DESKTOP: Table ── */
        .msr-table-wrap { overflow-x: auto; }
        table.msr-table { width: 100%; border-collapse: collapse; font-size: 13px; font-family: "Sora", sans-serif !important; }
        .msr-table thead th {
          padding: 10px 16px; text-align: left;
          font-size: 10px; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.7px; color: #aaa;
          border-bottom: 0.5px solid #dfe1e3; background: #f9f9f9;
          white-space: nowrap;
        }
        .msr-td { padding: 11px 16px; border-bottom: 0.5px solid #f0f0f0; vertical-align: middle; color: #333f48; }
        .msr-td-num { color: #bbb; font-size: 12px; width: 36px; }
        .msr-row:hover { background: #fafafa; }
        .msr-row:last-child td { border-bottom: none; }

        /* ── MOBILE: Cards ── */
        .msr-cards { display: none; padding: 12px 16px; gap: 10px; flex-direction: column; }
        .msr-card {
          border: 0.5px solid #dfe1e3;
          border-radius: 12px;
          background: #fff;
          overflow: hidden;
        }
        .msr-card-top {
          padding: 13px 14px 10px;
          display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;
        }
        .msr-card-course {
          font-size: 13px; font-weight: 600; color: #333f48;
          line-height: 1.4; flex: 1;
        }
        .msr-card-grade-wrap { flex-shrink: 0; }
        .msr-card-student {
          font-size: 13px; color: #555;
          padding: 0 14px 4px;
        }
        .msr-card-email {
          font-size: 11px; color: #aaa;
          padding: 0 14px 12px;
          word-break: break-all;
        }
        .msr-card-footer {
          background: #f9f9f9;
          border-top: 0.5px solid #f0f0f0;
          padding: 9px 14px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .msr-card-progress {
          font-size: 12px; color: #777;
        }
        .msr-card-num {
          font-size: 11px; color: #ccc;
        }

        @media (max-width: 640px) {
          .msr-table-wrap { display: none; }
          .msr-cards { display: flex; }
          .msr-filters { padding: 14px 16px; }
          .msr-topbar { padding: 16px; }
        }

        /* Badges */
        .msr-badge {
          display: inline-block; border-radius: 20px; padding: 3px 10px;
          font-size: 12px; font-weight: 500;
        }
        .msr-grade-high { background: #eaf3de; color: #166534; }
        .msr-grade-mid  { background: #faeeda; color: #854f0b; }
        .msr-grade-low  { background: #fcebeb; color: #a32d2d; }
        .msr-grade-na   { background: #f0f0f0; color: #888; }
        .msr-completed-yes { background: #eaf3de; color: #166534; }
        .msr-completed-no  { background: #f0f0f0; color: #888; }

        /* Progress */
        .msr-progress-text { font-size: 13px; color: #555; }

        /* Pagination */
        .msr-pagination {
          padding: 14px 16px 0px 0px;
          border-top: 0.5px solid #dfe1e3;
          display: flex; align-items: center; justify-content: space-between;
          gap: 12px; flex-wrap: wrap;
          font-family: "Sora", sans-serif !important;
        }
        .msr-page-info { font-size: 12px; color: #888; }
        .msr-page-controls { display: flex; gap: 6px; align-items: center; }
        .msr-page-btn {
          background: #eff0f1; border: 0.5px solid #dfe1e3;
          border-radius: 7px; padding: 6px 12px;
          font-size: 12px; color: #555; cursor: pointer;
          font-family: "Sora", sans-serif !important;
          transition: background 0.15s, color 0.15s;
          white-space: nowrap;
        }
        .msr-page-btn:hover:not(:disabled) { background: #ebebeb; color: #333; }
        .msr-page-btn:disabled { opacity: 0.35; cursor: default; }
        .msr-page-btn.msr-page-active {
          background: #333f48; color: #fff; border-color: #333f48;
        }
        .msr-page-numbers { display: flex; gap: 4px; }

        /* Footer */
        .msr-footer {
          padding: 10px 24px; border-top: 0.5px solid #dfe1e3;
          font-size: 12px; color: #888;
          font-family: "Sora", sans-serif !important;
        }
        .msr-hidden { display: none !important; }
        .msr-no-results {
          padding: 40px 24px; text-align: center; color: #aaa;
          font-size: 14px; font-family: "Sora", sans-serif !important;
        }
      </style>

      <div id="msr-spinner-overlay">
        <div class="msr-spinner"></div>
        <span class="msr-spinner-text">Loading report data...</span>
      </div>

      <div class="msr-content" id="msr-content">
        <div class="msr-topbar">
          <div>
            <div class="msr-title">Student Report</div>
            <div class="msr-subtitle">Individual student records</div>
          </div>
          <div class="msr-pill-group">
            <div class="msr-pill">
              <span class="msr-pill-val" id="msr-total-records">—</span>
              <span class="msr-pill-lbl">Records</span>
            </div>
          </div>
        </div>

        <div class="msr-filters">
          <div class="msr-filter-wrap">
            <label class="msr-filter-label" for="msr-filter-course">Course name</label>
            <input class="msr-filter" id="msr-filter-course" type="text" placeholder="Filter by course…">
          </div>
          <div class="msr-filter-wrap">
            <label class="msr-filter-label" for="msr-filter-student">Student name</label>
            <input class="msr-filter" id="msr-filter-student" type="text" placeholder="Filter by student…">
          </div>
          <div class="msr-filter-wrap">
            <label class="msr-filter-label" for="msr-filter-practice">Dental practice</label>
            <input class="msr-filter" id="msr-filter-practice" type="text" placeholder="Filter by practice…">
          </div>
          <button class="msr-clear-btn" id="msr-clear-btn">Clear filters</button>
        </div>

        <!-- Desktop table -->
        <div class="msr-table-wrap" id="msr-table-wrap">
          <table class="msr-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Course</th>
                <th>Student</th>
                <th>Email</th>
                <th>Progress</th>
                <th>Completed</th>
                <th>Grade</th>
                <th>Dental Practice</th>
              </tr>
            </thead>
            <tbody id="msr-tbody"></tbody>
          </table>
        </div>

        <!-- Mobile cards -->
        <div class="msr-cards" id="msr-cards"></div>

        <div class="msr-no-results msr-hidden" id="msr-no-results">No records match your filters.</div>

        <!-- Pagination -->
        <div class="msr-pagination" id="msr-pagination">
          <span class="msr-page-info" id="msr-page-info"></span>
          <div class="msr-page-controls">
            <button class="msr-page-btn" id="msr-page-prev">← Prev</button>
            <div class="msr-page-numbers" id="msr-page-numbers"></div>
            <button class="msr-page-btn" id="msr-page-next">Next →</button>
          </div>
        </div>

        <div class="msr-footer" id="msr-footer">Loading...</div>
      </div>
    </div>
  `;

  const moodleWrapper = document.querySelector(".reportbuilder-wrapper");
  if (moodleWrapper) {
    moodleWrapper.style.display = "none";
    moodleWrapper.insertAdjacentHTML("beforebegin", shell);
  } else {
    document.querySelector("#region-main").insertAdjacentHTML("afterbegin", shell);
  }

  const waitForLink = setInterval(() => {
    const link = document.querySelector('a[data-action="showcount"][data-target-page-size="5000"]');
    const rows = document.querySelectorAll('[data-region="reportbuilder-table"] tbody tr');

    if (link && rows.length === 30) {
      clearInterval(waitForLink);
      setTimeout(() => {
        link.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));
        const poll = setInterval(() => {
          const current = document.querySelectorAll('[data-region="reportbuilder-table"] tbody tr').length;
          if (current > 30) {
            clearInterval(poll);
            extractAndReport();
          }
        }, 2000);
      }, 1000);
    } else if (rows.length > 30) {
      clearInterval(waitForLink);
      extractAndReport();
    }
  }, 500);

  function extractAndReport() {
    const rows = document.querySelectorAll('[data-region="reportbuilder-table"] tbody tr');
    const records = [];
    const ignoredLower = IGNORED_EMAILS.map((e) => e.toLowerCase());

    for (const row of rows) {
      const cells = row.querySelectorAll("td.cell");
      const email = cells[3]?.innerText.trim() || "";
      if (!email || ignoredLower.includes(email.toLowerCase())) continue;

      const courseName    = cells[0]?.innerText.trim() || "";
      const studentName   = cells[1]?.innerText.trim() || "";
      const progress      = cells[4]?.innerText.trim() || "";
      const completed     = cells[5]?.innerText.trim() || "";
      const gradeRaw      = cells[6]?.innerText.trim() || "";
      const dentalPractice = cells[7]?.innerText.trim() || "";

      const grade = gradeRaw !== "" && !isNaN(parseFloat(gradeRaw))
        ? parseFloat(gradeRaw)
        : null;

      records.push({ courseName, studentName, email, progress, completed, grade, gradeRaw, dentalPractice });
    }

    console.log(`[Moodle] Valid records: ${records.length}`);
    renderReport(records);
  }

  function gradeClass(grade) {
    if (grade === null) return "msr-grade-na";
    if (grade >= 80) return "msr-grade-high";
    if (grade >= 50) return "msr-grade-mid";
    return "msr-grade-low";
  }

  function renderReport(records) {
    document.getElementById("msr-total-records").textContent = records.length;

    let filteredRecords = records.slice();
    let currentPage = 1;

    // ── Helpers ──────────────────────────────────────────────

    function totalPages() {
      return Math.max(1, Math.ceil(filteredRecords.length / PAGE_SIZE));
    }

    function pageSlice() {
      const start = (currentPage - 1) * PAGE_SIZE;
      return filteredRecords.slice(start, start + PAGE_SIZE);
    }

    function gradeDisplay(r) {
      return r.grade !== null ? `${r.grade.toFixed(1)}%` : "—";
    }

    function completedClass(r) {
      return (r.completed.toLowerCase().includes("yes") || r.completed === "1" || r.completed.toLowerCase() === "true")
        ? "msr-completed-yes" : "msr-completed-no";
    }

    // ── Desktop table rows ────────────────────────────────────

    function buildTableRows(list) {
      const offset = (currentPage - 1) * PAGE_SIZE;
      return list.map((r, i) => {
        const gClass = gradeClass(r.grade);
        const cClass = completedClass(r);
        const completedLabel = r.completed || "—";
        return `
          <tr class="msr-row"
            data-course="${r.courseName.toLowerCase()}"
            data-student="${r.studentName.toLowerCase()}"
            data-practice="${r.dentalPractice.toLowerCase()}">
            <td class="msr-td msr-td-num">${offset + i + 1}</td>
            <td class="msr-td" style="max-width:220px">${r.courseName}</td>
            <td class="msr-td" style="white-space:nowrap">${r.studentName}</td>
            <td class="msr-td" style="color:#888;font-size:12px">${r.email}</td>
            <td class="msr-td"><span class="msr-progress-text">${r.progress || "—"}</span></td>
            <td class="msr-td"><span class="msr-badge ${cClass}">${completedLabel}</span></td>
            <td class="msr-td"><span class="msr-badge ${gClass}">${gradeDisplay(r)}</span></td>
            <td class="msr-td">${r.dentalPractice || "—"}</td>
          </tr>`;
      }).join("");
    }

    // ── Mobile cards ──────────────────────────────────────────

    function buildCards(list) {
      const offset = (currentPage - 1) * PAGE_SIZE;
      return list.map((r, i) => {
        const gClass = gradeClass(r.grade);
        return `
          <div class="msr-card">
            <div class="msr-card-top">
              <div class="msr-card-course">${r.courseName}</div>
              <div class="msr-card-grade-wrap">
                <span class="msr-badge ${gClass}" style="font-size:11px;padding:3px 9px">${gradeDisplay(r)}</span>
              </div>
            </div>
            <div class="msr-card-student">${r.studentName}</div>
            <div class="msr-card-email">${r.email}</div>
            <div class="msr-card-footer">
              <span class="msr-card-progress">${r.progress || "—"}</span>
              <span class="msr-card-num">#${offset + i + 1}</span>
            </div>
          </div>`;
      }).join("");
    }

    // ── Pagination controls ───────────────────────────────────

    function renderPagination() {
      const tp = totalPages();
      const info = document.getElementById("msr-page-info");
      const numbersEl = document.getElementById("msr-page-numbers");
      const prevBtn = document.getElementById("msr-page-prev");
      const nextBtn = document.getElementById("msr-page-next");
      const paginationEl = document.getElementById("msr-pagination");

      // Hide pagination entirely if only one page
      paginationEl.classList.toggle("msr-hidden", tp <= 1);

      const start = (currentPage - 1) * PAGE_SIZE + 1;
      const end = Math.min(currentPage * PAGE_SIZE, filteredRecords.length);
      info.textContent = `Page ${currentPage} of ${tp} · ${start}–${end} of ${filteredRecords.length}`;

      prevBtn.disabled = currentPage === 1;
      nextBtn.disabled = currentPage === tp;

      // Build page number buttons (show up to 7 with ellipsis)
      const pages = buildPageNumbers(currentPage, tp);
      numbersEl.innerHTML = pages.map(p => {
        if (p === "…") return `<span style="padding:0 4px;color:#bbb;font-size:13px;line-height:30px">…</span>`;
        return `<button class="msr-page-btn${p === currentPage ? " msr-page-active" : ""}" data-page="${p}">${p}</button>`;
      }).join("");

      numbersEl.querySelectorAll("[data-page]").forEach(btn => {
        btn.addEventListener("click", () => {
          currentPage = parseInt(btn.dataset.page);
          renderPage();
        });
      });
    }

    function buildPageNumbers(current, total) {
      if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
      const pages = [];
      if (current <= 4) {
        pages.push(1, 2, 3, 4, 5, "…", total);
      } else if (current >= total - 3) {
        pages.push(1, "…", total - 4, total - 3, total - 2, total - 1, total);
      } else {
        pages.push(1, "…", current - 1, current, current + 1, "…", total);
      }
      return pages;
    }

    // ── Render current page ───────────────────────────────────

    function renderPage() {
      const slice = pageSlice();
      document.getElementById("msr-tbody").innerHTML = buildTableRows(slice);
      document.getElementById("msr-cards").innerHTML = buildCards(slice);

      const noResults = document.getElementById("msr-no-results");
      noResults.classList.toggle("msr-hidden", filteredRecords.length > 0);

      document.getElementById("msr-footer").textContent =
        `Showing ${filteredRecords.length} record${filteredRecords.length !== 1 ? "s" : ""}`;

      renderPagination();

      // Scroll back to top of report on page change
      document.getElementById("moodle-student-report").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // ── Filtering ─────────────────────────────────────────────

    function applyFilters() {
      const qCourse   = document.getElementById("msr-filter-course").value.toLowerCase().trim();
      const qStudent  = document.getElementById("msr-filter-student").value.toLowerCase().trim();
      const qPractice = document.getElementById("msr-filter-practice").value.toLowerCase().trim();

      filteredRecords = records.filter(r => {
        const matchCourse   = !qCourse   || r.courseName.toLowerCase().includes(qCourse);
        const matchStudent  = !qStudent  || r.studentName.toLowerCase().includes(qStudent);
        const matchPractice = !qPractice || r.dentalPractice.toLowerCase().includes(qPractice);
        return matchCourse && matchStudent && matchPractice;
      });

      currentPage = 1;
      renderPage();
    }

    ["msr-filter-course", "msr-filter-student", "msr-filter-practice"].forEach(id => {
      document.getElementById(id).addEventListener("input", applyFilters);
    });

    document.getElementById("msr-clear-btn").addEventListener("click", () => {
      document.getElementById("msr-filter-course").value = "";
      document.getElementById("msr-filter-student").value = "";
      document.getElementById("msr-filter-practice").value = "";
      applyFilters();
    });

    document.getElementById("msr-page-prev").addEventListener("click", () => {
      if (currentPage > 1) { currentPage--; renderPage(); }
    });

    document.getElementById("msr-page-next").addEventListener("click", () => {
      if (currentPage < totalPages()) { currentPage++; renderPage(); }
    });

    // ── Initial render ────────────────────────────────────────

    document.getElementById("msr-spinner-overlay").style.display = "none";
    document.getElementById("msr-content").classList.add("ready");
    renderPage();

    console.log(`[Moodle] Report injected — ${records.length} records.`);
  }
})();
    
    
(function () {
  // Guard: only run on the Browse users page
  const isCorrectPage =
    window.location.pathname.includes("admin/user.php") &&
    document.body.id === "page-admin-user";
  if (!isCorrectPage) return;

  // ── Inject shell immediately ──────────────────────────────────────────────
  const shell = `
    <div id="mul-report">
      <style>
        #mul-report {
          font-family: "Sora", sans-serif !important;
          background: #fff;
          border-radius: 12px;
          border: 0.5px solid #dfe1e3;
          overflow: hidden;
          margin: 24px 0;
          position: relative;
          min-height: 260px;
        }

        /* ── Spinner ── */
        #mul-spinner {
          position: absolute; inset: 0;
          background: #fff;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 14px; z-index: 100;
          border-radius: 12px;
        }
        .mul-spin {
          width: 38px; height: 38px;
          border: 3px solid #dfe1e3;
          border-top-color: #637380;
          border-radius: 50%;
          animation: mul-spin 0.7s linear infinite;
        }
        @keyframes mul-spin { to { transform: rotate(360deg); } }
        .mul-spin-text { font-size: 13px; color: #999; }

        /* ── Content ── */
        .mul-content { display: none; }
        .mul-content.ready { display: block; }

        /* ── Top bar ── */
        .mul-topbar {
          padding: 20px 24px 16px;
          border-bottom: 0.5px solid #dfe1e3;
          display: flex; align-items: flex-start;
          justify-content: space-between; flex-wrap: wrap; gap: 12px;
        }
        .mul-title { font-size: 22px; font-weight: 700; color: #333f48; letter-spacing: -0.3px; }
        .mul-subtitle { font-size: 14px; color: #637380; margin-top: 3px; }
        .mul-pill {
          background: #eff0f1; border: 0.5px solid #dfe1e3;
          border-radius: 8px; padding: 6px 18px; text-align: center;
          align-self: flex-start;
        }
        .mul-pill-val { font-size: 20px; font-weight: 600; color: #333f48; display: block; }
        .mul-pill-lbl { font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 0.6px; }

        /* ── Toolbar ── */
        .mul-toolbar {
          padding: 12px 24px;
          border-bottom: 0.5px solid #dfe1e3;
          display: flex; gap: 10px; align-items: center;
        }
        .mul-search-wrap { flex: 1; position: relative; }
        .mul-search-icon {
          position: absolute; left: 11px; top: 50%; transform: translateY(-50%);
          color: #bbb; pointer-events: none;
          display: flex; align-items: center;
        }
        .mul-search {
          width: 100%; padding: 8px 12px 8px 34px;
          border: 0.5px solid #dfe1e3; border-radius: 8px;
          font-size: 13px; background: #f9f9f9; color: #333f48;
          outline: none; transition: border-color 0.15s, box-shadow 0.15s, background 0.15s;
          box-sizing: border-box;
        }
        .mul-search:focus {
          border-color: #637380;
          box-shadow: 0 0 0 3px rgba(107,114,128,0.1);
          background: #fff;
        }
        .mul-add-btn {
          display: inline-flex; align-items: center; gap: 6px;
          background: #333f48; color: #fff;
          border: none; border-radius: 8px;
          padding: 8px 16px; font-size: 13px; font-weight: 500;
          cursor: pointer; white-space: nowrap;
          text-decoration: none;
          transition: background 0.15s;
        }
        .mul-add-btn:hover { background: #4a5568; color: #fff; text-decoration: none; }

        /* ── Table ── */
        .mul-table-wrap { overflow-x: auto; }
        table.mul-table {
          width: 100%; border-collapse: collapse;
          font-size: 13px;
        }
        .mul-table thead th {
          padding: 10px 16px; text-align: left;
          font-size: 10px; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.7px; color: #aaa;
          border-bottom: 0.5px solid #dfe1e3; background: #f9f9f9;
          white-space: nowrap;
        }
        .mul-td {
          padding: 11px 16px;
          border-bottom: 0.5px solid #f0f0f0;
          vertical-align: middle; color: #333f48;
        }
        .mul-row:hover { background: #fafafa; }
        .mul-row:last-child td { border-bottom: none; }
        .mul-row.is-suspended { opacity: 0.65; }

        /* ── User cell ── */
        .mul-user-cell { display: flex; align-items: center; gap: 10px; }
        .mul-avatar {
          width: 32px; height: 32px; border-radius: 50%;
          object-fit: cover; flex-shrink: 0;
          border: 0.5px solid #dfe1e3;
        }
        .mul-user-name { font-weight: 500; color: #333f48; }
        .mul-suspended-badge {
          display: inline-block;
          background: #f0f0f0; color: #888;
          border-radius: 20px; padding: 2px 8px;
          font-size: 11px; margin-left: 6px;
        }

        /* ── Email ── */
        .mul-email { color: #888; font-size: 12px; }

        /* ── Last access ── */
        .mul-access { color: #555; font-size: 12px; }
        .mul-access-never { color: #bbb; }

        /* ── Actions ── */
        .mul-actions { display: flex; align-items: center; gap: 4px; }
        .mul-action-btn {
          display: inline-flex; align-items: center; justify-content: center;
          width: 30px; height: 30px;
          border-radius: 6px;
          text-decoration: none; cursor: pointer;
          border: 0.5px solid transparent;
          transition: background 0.15s, border-color 0.15s, color 0.15s;
        }
        .mul-action-btn svg { width: 14px; height: 14px; flex-shrink: 0; }

        .mul-btn-edit {
          background: #eff0f1; color: #555; border-color: #dfe1e3;
        }
        .mul-btn-edit:hover { background: #eaeaea; color: #333; text-decoration: none; }

        .mul-btn-suspend {
          background: #fff8ec; color: #854f0b; border-color: #faeeda;
        }
        .mul-btn-suspend:hover { background: #faeeda; color: #6b3f08; text-decoration: none; }

        .mul-btn-activate {
          background: #eaf3de; color: #166534; border-color: #166534;
        }
        .mul-btn-activate:hover { background: #d8ecbe; color: #2d5409; text-decoration: none; }

        .mul-btn-delete {
          background: #fff0f0; color: #a32d2d; border-color: #fcebeb;
        }
        .mul-btn-delete:hover { background: #fcebeb; color: #7a1f1f; text-decoration: none; }

        /* ── Footer ── */
        .mul-footer {
          padding: 10px 24px; border-top: 0.5px solid #dfe1e3;
          font-size: 12px; color: #888;
        }

        /* ── Empty state ── */
        .mul-empty {
          padding: 40px 24px; text-align: center;
          color: #aaa; font-size: 14px;
          display: none;
        }

        .mul-hidden { display: none !important; }
      </style>

      <div id="mul-spinner">
        <div class="mul-spin"></div>
        <span class="mul-spin-text">Loading users...</span>
      </div>

      <div class="mul-content" id="mul-content">
        <div class="mul-topbar">
          <div>
            <div class="mul-title">User Management</div>
            <div class="mul-subtitle">Browse and manage site users</div>
          </div>
          <div class="mul-pill">
            <span class="mul-pill-val" id="mul-total">—</span>
            <span class="mul-pill-lbl">Users</span>
          </div>
        </div>

        <div class="mul-toolbar">
          <div class="mul-search-wrap">
            <span class="mul-search-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </span>
            <input class="mul-search" id="mul-search" type="text" placeholder="Search by name or email…">
          </div>
          <a id="mul-add-btn" href="#" class="mul-add-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Add user
          </a>
        </div>

        <div class="mul-table-wrap">
          <table class="mul-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Full name</th>
                <th>Email address</th>
                <th>Last access</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="mul-tbody"></tbody>
          </table>
          <div class="mul-empty" id="mul-empty">No users match your search.</div>
        </div>

        <div class="mul-footer" id="mul-footer">Loading…</div>
      </div>
    </div>
  `;

  // Hide the native Moodle wrapper and inject our shell before it
  const nativeWrapper = document.querySelector(
    '[data-region="report-user-list-wrapper"]',
  );
  if (nativeWrapper) {
    nativeWrapper.style.display = "none";
    nativeWrapper.insertAdjacentHTML("beforebegin", shell);
  } else {
    document
      .querySelector("#region-main")
      .insertAdjacentHTML("afterbegin", shell);
  }

  // Also hide the bulk action form below
  const bulkForm = document.querySelector("#user-bulk-action-form");
  if (bulkForm) bulkForm.style.display = "none";

  // Wire up the "Add user" button using Moodle's existing link
  const moodleAddBtn = document.querySelector('a[data-action="add-user"]');
  if (moodleAddBtn) {
    document.getElementById("mul-add-btn").href = moodleAddBtn.href;
  }

  // ── Wait for "Show all" link, click it, then extract ─────────────────────
  const waitForLink = setInterval(() => {
    const showAllLink = document.querySelector(
      'a[data-action="showcount"][data-target-page-size="5000"]',
    );
    const rows = document.querySelectorAll(
      '[data-region="reportbuilder-table"] tbody tr:not(.emptyrow)',
    );

    if (showAllLink && rows.length > 0) {
      const totalAttr = document.querySelector("[data-table-total-rows]");
      const totalRows = totalAttr
        ? parseInt(totalAttr.dataset.tableTotalRows)
        : null;
      const currentCount = rows.length;

      // If we already have all rows (no pagination needed), go straight to extract
      if (totalRows && currentCount >= totalRows) {
        clearInterval(waitForLink);
        extractAndRender();
        return;
      }

      // Otherwise click "Show all"
      clearInterval(waitForLink);
      document
        .getElementById("mul-spinner")
        .querySelector(".mul-spin-text").textContent = "Loading all users…";

      setTimeout(() => {
        showAllLink.dispatchEvent(
          new MouseEvent("click", { bubbles: true, cancelable: true }),
        );

        const poll = setInterval(() => {
          const current = document.querySelectorAll(
            '[data-region="reportbuilder-table"] tbody tr:not(.emptyrow)',
          ).length;
          if (current > currentCount) {
            clearInterval(poll);
            extractAndRender();
          }
        }, 1500);
      }, 800);
    } else if (!showAllLink && rows.length > 0) {
      // No pagination link — already have all rows
      clearInterval(waitForLink);
      extractAndRender();
    }
  }, 500);

  // ── Extract user data from the native Moodle table ───────────────────────
  function extractAndRender() {
    const rows = document.querySelectorAll(
      '[data-region="reportbuilder-table"] tbody tr:not(.emptyrow)',
    );
    const users = [];

    for (const row of rows) {
      // Skip truly empty rows
      const nameCell = row.querySelector("td.cell.c1");
      if (!nameCell || !nameCell.innerText.trim()) continue;

      // Full name (strip avatar alt text — get text node content)
      const nameLink = nameCell.querySelector("a");
      let fullName = "";
      if (nameLink) {
        // Text node after the img
        for (const node of nameLink.childNodes) {
          if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
            fullName = node.textContent.trim();
            break;
          }
        }
        if (!fullName) fullName = nameLink.innerText.trim();
      }
      if (!fullName) continue;

      // Avatar src
      const avatarImg = nameCell.querySelector("img.userpicture");
      const avatarSrc = avatarImg ? avatarImg.src : "";

      // Profile link
      const profileHref = nameLink ? nameLink.href : "";

      // Suspended?
      const isSuspended = !!nameCell.querySelector(".badge");

      // Email — c3
      const emailCell = row.querySelector("td.cell.c3");
      const email = emailCell ? emailCell.innerText.trim() : "";

      // Last access — c4
      const accessCell = row.querySelector("td.cell.c4");
      const lastAccess = accessCell ? accessCell.innerText.trim() : "";

      // Actions — c5 (last cell)
      const actionCell = row.querySelector("td.cell.c5");
      const actionLinks = actionCell
        ? actionCell.querySelectorAll("a.menu-action")
        : [];

      const actions = [];
      for (const link of actionLinks) {
        const label = link.getAttribute("aria-label") || link.innerText.trim();
        const href = link.href;
        // Grab data-modal attrs if present (for delete confirmation)
        const isDelete =
          link.classList.contains("text-danger") ||
          label.toLowerCase() === "delete";
        const modalDestination = link.dataset.modalDestination || null;
        const modalContent = link.dataset.modalContentStr || null;
        actions.push({ label, href, isDelete, modalDestination, modalContent });
      }

      users.push({
        fullName,
        avatarSrc,
        profileHref,
        isSuspended,
        email,
        lastAccess,
        actions,
      });
    }

    renderTable(users);
  }

  // ── Render ────────────────────────────────────────────────────────────────
  function renderTable(users) {
    const total = users.length;
    document.getElementById("mul-total").textContent = total;
    document.getElementById("mul-footer").textContent =
      `Showing ${total} users`;

    function actionButtonHTML(action) {
      const lbl = action.label.toLowerCase();
      let cls = "mul-btn-edit";
      let icon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`;

      if (lbl.includes("suspend")) {
        cls = "mul-btn-suspend";
        icon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;
      } else if (lbl.includes("activate")) {
        cls = "mul-btn-activate";
        icon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
      } else if (lbl.includes("delete")) {
        cls = "mul-btn-delete";
        icon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>`;
      }

      // Delete: keep Moodle's confirmation flow by linking to destination (which has confirm token)
      const finalHref =
        action.isDelete && action.modalDestination
          ? action.modalDestination
          : action.href;

      // For delete, add a simple JS confirm as UX fallback
      const onclick = action.isDelete
        ? `onclick="return confirm('Are you sure you want to delete this user? This cannot be undone.')"`
        : "";

      return `<a href="${finalHref}" class="mul-action-btn ${cls}" title="${action.label}" ${onclick}>${icon}</a>`;
    }

    const tbody = document.getElementById("mul-tbody");
    tbody.innerHTML = users
      .map((u, i) => {
        const accessClass =
          u.lastAccess.toLowerCase() === "never"
            ? "mul-access mul-access-never"
            : "mul-access";
        const suspendedClass = u.isSuspended
          ? "mul-row is-suspended"
          : "mul-row";
        const suspendedBadge = u.isSuspended
          ? `<span class="mul-suspended-badge">Suspended</span>`
          : "";
        const actionsHTML = u.actions.map(actionButtonHTML).join("");

        const avatarHTML = u.avatarSrc
          ? `<img src="${u.avatarSrc}" class="mul-avatar" alt="">`
          : `<div class="mul-avatar" style="background:#dfe1e3;display:flex;align-items:center;justify-content:center;font-size:13px;color:#999">${u.fullName.charAt(0)}</div>`;

        return `
        <tr class="${suspendedClass}"
          data-search="${u.fullName.toLowerCase()} ${u.email.toLowerCase()}">
          <td class="mul-td" style="color:#bbb;font-size:12px;width:36px">${i + 1}</td>
          <td class="mul-td">
            <div class="mul-user-cell">
              ${avatarHTML}
              <div>
                <a href="${u.profileHref}" class="mul-user-name" style="text-decoration:none">${u.fullName}</a>
                ${suspendedBadge}
              </div>
            </div>
          </td>
          <td class="mul-td"><span class="mul-email">${u.email || "—"}</span></td>
          <td class="mul-td"><span class="${accessClass}">${u.lastAccess || "—"}</span></td>
          <td class="mul-td">
            <div class="mul-actions">${actionsHTML}</div>
          </td>
        </tr>`;
      })
      .join("");

    // Show content, hide spinner
    document.getElementById("mul-spinner").style.display = "none";
    document.getElementById("mul-content").classList.add("ready");

    // ── Search filter ──
    document
      .getElementById("mul-search")
      .addEventListener("input", function () {
        const q = this.value.toLowerCase().trim();
        let visible = 0;
        document.querySelectorAll("#mul-tbody .mul-row").forEach((row) => {
          const match = !q || row.dataset.search.includes(q);
          row.classList.toggle("mul-hidden", !match);
          if (match) visible++;
        });
        const empty = document.getElementById("mul-empty");
        empty.style.display = visible === 0 ? "block" : "none";
        document.getElementById("mul-footer").textContent =
          `Showing ${visible} of ${total} users`;
      });

    console.log(`[Moodle Users] Rendered ${total} users.`);
  }
})();
    

(function () {
  // Page guard
  if (document.body.id !== 'page-course-management') return;

  // ============================================================
  // 1. REPLACE HEADER
  // ============================================================
  const oldHeader = document.querySelector('h2.cohort-assign-title');
  const oldSubHeader = document.querySelector('p.cohort-assign-subtitle');

  if (oldHeader) {
    const headerWrapper = document.createElement('div');
    headerWrapper.style.cssText = `
      padding: 24px 28px 20px 28px;
      border-radius: 10px;
      margin-bottom: 24px;
    `;

    const newHeader = document.createElement('h2');
    newHeader.textContent = 'Manage Course';
    newHeader.style.cssText = `
      margin: 0 0 6px 0;
      font-size: 22px;
      font-weight: 700;
      color: #333f48;
      letter-spacing: 0.3px;
    `;

    const newSubHeader = document.createElement('p');
    newSubHeader.textContent = 'View and manage courses';
    newSubHeader.style.cssText = `
      margin: 0;
      font-size: 14px;
      color: #637380;
      font-weight: 400;
      letter-spacing: 0.2px;
    `;

    headerWrapper.appendChild(newHeader);
    headerWrapper.appendChild(newSubHeader);

    oldHeader.replaceWith(headerWrapper);

    if (oldSubHeader) oldSubHeader.remove();
  }

  // ============================================================
  // 2. CHANGE ICON COLORS + HOVER
  // ============================================================
  const style = document.createElement('style');
  style.textContent = `
    #page-course-management .action-menu-item a i,
    #page-course-management .action-moveup i,
    #page-course-management .action-movedown i,
    #page-course-management .action-hide i,
    #page-course-management .action-show i,
    #page-course-management .categoryname,
    #page-course-management .coursename,
    #page-course-management .action-menu-trigger a i {
      color: #333f48 !important;
      transition: color 0.2s ease;
    }

    #page-course-management .action-menu-item a:hover i,
    #page-course-management .action-moveup:hover i,
    #page-course-management .action-movedown:hover i,
    #page-course-management .action-hide:hover i,
    #page-course-management .action-show:hover i,
    #page-course-management .action-menu-trigger a:hover i {
      color: #8f7f55 !important;
    }

    #page-course-management .categoryname:hover,
    #page-course-management .coursename:hover {
      color: #8f7f55 !important;
    }

    #page-course-management .dropdown-menu .menu-action i {
      color: #333f48 !important;
      transition: color 0.2s ease;
    }

    #page-course-management .dropdown-menu .menu-action:hover i {
      color: #8f7f55 !important;
    }

    #page-course-management .course-count i {
      color: #333f48 !important;
    }

    #page-course-management .drag-handle i {
      color: #333f48 !important;
      transition: color 0.2s ease;
    }

    #page-course-management .drag-handle:hover i {
      color: #8f7f55 !important;
    }
  `;
  document.head.appendChild(style);

})();
    
(function () {

  var MOBILE_BREAKPOINT = 767;

  // ─── Truncate option text to name only on mobile ────────────────────────────
  function trimOptionLabels() {
    if (window.innerWidth > MOBILE_BREAKPOINT) return;

    var selects = document.querySelectorAll('#removeselect option, #addselect option');
    selects.forEach(function (opt) {
      if (!opt.dataset.fullText) {
        opt.dataset.fullText = opt.textContent;
      }
      var parts = opt.dataset.fullText.split(' - ');
      opt.textContent = parts[0].trim();
    });
  }

  // ─── Shared: inject mobile buttons above existingcell ───────────────────────
  function injectMobileButtons() {
    if (window.innerWidth > MOBILE_BREAKPOINT) return;
    if (document.getElementById('mobile-cohort-buttons')) return;

    var existingCell = document.getElementById('existingcell');
    var addBtn       = document.getElementById('add');
    var removeBtn    = document.getElementById('remove');

    if (!existingCell || !addBtn || !removeBtn) return;

    var mobileBar = document.createElement('div');
    mobileBar.id  = 'mobile-cohort-buttons';

    var addClone    = addBtn.cloneNode(true);
    var removeClone = removeBtn.cloneNode(true);

    addClone.removeAttribute('id');
    removeClone.removeAttribute('id');

    addClone.addEventListener('click', function (e) {
      e.preventDefault();
      addBtn.click();
    });
    removeClone.addEventListener('click', function (e) {
      e.preventDefault();
      removeBtn.click();
    });

    mobileBar.appendChild(addClone);
    mobileBar.appendChild(removeClone);

    existingCell.parentNode.insertBefore(mobileBar, existingCell);
  }

  // ─── Shared: inject CSS scoped to a given body ID ───────────────────────────
  function injectStyles(bodyId, extraStyles) {
    var style = document.createElement('style');
    style.innerHTML = `
      @media (max-width: ` + MOBILE_BREAKPOINT + `px) {

        body#` + bodyId + ` #assignform table.generaltable,
        body#` + bodyId + ` #assignform table.generaltable tbody,
        body#` + bodyId + ` #assignform table.generaltable tr {
          display: block !important;
          width: 100% !important;
        }

        body#` + bodyId + ` #assignform #buttonscell {
          display: none !important;
        }

        body#` + bodyId + ` #assignform #existingcell,
        body#` + bodyId + ` #assignform #potentialcell {
          display: block !important;
          width: 100% !important;
          padding: 8px 0 !important;
          box-sizing: border-box !important;
        }

        body#` + bodyId + ` #assignform #removeselect,
        body#` + bodyId + ` #assignform #addselect {
          width: 100% !important;
          height: 200px !important;
          box-sizing: border-box !important;
        }

        body#` + bodyId + ` #mobile-cohort-buttons {
          display: flex !important;
          gap: 12px !important;
          padding: 10px 0 !important;
          width: 100% !important;
        }

        body#` + bodyId + ` #mobile-cohort-buttons input[type="submit"] {
          flex: 1 !important;
          padding: 10px !important;
          font-size: 15px !important;
        }

        ` + (extraStyles || '') + `
      }
    `;
    document.head.appendChild(style);
  }

  // ─── Page: page-cohort-assign ────────────────────────────────────────────────
  function initCohortAssign() {
    injectStyles('page-cohort-assign', `
      body#page-cohort-assign #assignform #backcell {
        display: block !important;
        width: 100% !important;
        padding-top: 8px !important;
      }
      body#page-cohort-assign #assignform #backcell input[type="submit"] {
        width: 100% !important;
        padding: 10px !important;
      }
    `);
    injectMobileButtons();
    trimOptionLabels();
  }

  // ─── Page: page-admin-roles-assign ──────────────────────────────────────────
  function initRolesAssign() {
    injectStyles('page-admin-roles-assign');
    injectMobileButtons();
    trimOptionLabels();
  }

  // ─── Page: page-admin-roles-admins ──────────────────────────────────────────
  function initRolesAdmins() {
    injectStyles('page-admin-roles-admins');
    injectMobileButtons();
    trimOptionLabels();
  }

  // ─── Router ──────────────────────────────────────────────────────────────────
  function init() {
    var bodyId = document.body.id;

    if (bodyId === 'page-cohort-assign') {
      initCohortAssign();
    } else if (bodyId === 'page-admin-roles-assign') {
      initRolesAssign();
    } else if (bodyId === 'page-admin-roles-admins') {
      initRolesAdmins();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
    
</script>
