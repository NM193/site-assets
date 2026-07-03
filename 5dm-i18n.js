/* ============================================================
   5DM - i18n ENGINE
   Menja jezik bez Webflow lokalizacije i bez dupliranja sekcija.
   Ucitaj OVAJ fajl POSLE 5dm-i18n-dict.js.

   Markiranje elemenata u Webflow-u (Element Settings -> Custom attributes):
     data-i18n="key"          -> menja textContent
     data-i18n-html="key"     -> menja innerHTML (za naslove sa <span>)
     data-i18n-attr="placeholder:key, aria-label:key2"
                              -> menja atribute (placeholder, aria-label, value...)

   Ponasanje:
     - Slusa 'languagechange' event koji vec salje postojeci .language-wrapper toggle.
     - Pamti izbor u localStorage ('dm-lang') i vraca ga na reload.
     - Sinhronizuje vizuelno stanje toggle-a (is-active, thumb pozicija).
     - Originalni DOM tekst se kesira kao fallback ako kljuc fali u recniku.
     - Primeni se na DOMContentLoaded -> iza loadera -> BEZ flash-a pogresnog jezika.

   Zavisnosti: nema (vanilla JS).
   ============================================================ */
(function () {
  'use strict';

  var STORE_KEY = 'dm-lang';
  var DEFAULT_LANG = 'de';
  var TAG = '[5dm-i18n]';

  function dict() { return window.DM_I18N || null; }

  function saveLang(lang) {
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
  }

  function readLang() {
    var d = dict();
    var saved = null;
    try { saved = localStorage.getItem(STORE_KEY); } catch (e) {}
    if (saved && (!d || d[saved])) return saved;
    return DEFAULT_LANG;
  }

  // Kesiraj originalnu DOM vrednost jednom, da missing key padne na nju.
  function original(el, kind, attr) {
    var slot = '_i18n_' + kind + (attr ? '_' + attr : '');
    if (el[slot] === undefined) {
      el[slot] = (kind === 'attr') ? el.getAttribute(attr) : el[kind];
    }
    return el[slot];
  }

  function lookup(lang, key) {
    var d = dict();
    if (!d) return undefined;
    if (d[lang] && d[lang][key] != null) return d[lang][key];
    // fallback: druga strana recnika (npr. de -> en)
    for (var k in d) {
      if (k !== lang && d[k] && d[k][key] != null) return d[k][key];
    }
    return undefined;
  }

  function applyText(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = lookup(lang, key);
      el.textContent = (val != null) ? val : original(el, 'textContent');
    });
  }

  function applyHTML(lang) {
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      var val = lookup(lang, key);
      el.innerHTML = (val != null) ? val : original(el, 'innerHTML');
    });
  }

  function applyAttrs(lang) {
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var spec = el.getAttribute('data-i18n-attr'); // "placeholder:key, aria-label:key2"
      spec.split(',').forEach(function (pair) {
        var parts = pair.split(':');
        if (parts.length < 2) return;
        var attr = parts[0].trim();
        var key = parts.slice(1).join(':').trim();
        var val = lookup(lang, key);
        var out = (val != null) ? val : original(el, 'attr', attr);
        if (out != null) el.setAttribute(attr, out);
      });
    });
  }

  // Vizuelno stanje toggle-a bez ponovnog dispatch-a event-a (izbegava petlju).
  function syncToggle(lang) {
    document.querySelectorAll('.language-wrapper').forEach(function (root) {
      var items = root.querySelectorAll('.language-text');
      items.forEach(function (el, i) {
        var active = el.getAttribute('data-lang') === lang;
        el.classList.toggle('is-active', active);
        el.setAttribute('aria-pressed', active ? 'true' : 'false');
        if (active) root.style.setProperty('--active-index', i);
      });
      root.setAttribute('data-active', lang);
    });
  }

  var currentLang = null;

  function applyLang(lang, opts) {
    if (!lang) return;
    currentLang = lang;
    applyText(lang);
    applyHTML(lang);
    applyAttrs(lang);
    document.documentElement.lang = lang;
    if (!opts || opts.sync !== false) syncToggle(lang);
    if (!opts || opts.save !== false) saveLang(lang);
  }

  // 1) Slusaj toggle event (listener se kaci ODMAH, pre Webflow.push callback-a).
  document.addEventListener('languagechange', function (e) {
    var lang = e && e.detail && e.detail.lang;
    if (lang && lang !== currentLang) applyLang(lang);
  });

  // 2) Primeni pocetni jezik (iza loadera -> bez flash-a).
  function init() {
    if (!dict()) {
      console.warn(TAG, 'window.DM_I18N nije nadjen - ucitaj 5dm-i18n-dict.js PRE ovog fajla.');
    }
    applyLang(readLang());
  }

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);

  // Public API (za rucni poziv / debug iz konzole)
  window.dmI18n = {
    set: function (lang) { applyLang(lang); },
    get: function () { return currentLang; },
    refresh: function () { applyLang(currentLang || readLang()); }
  };
})();
