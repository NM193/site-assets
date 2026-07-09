/* ============================================================
   5DM - i18n AUTO-TAGGER  (v2)
   Dodeljuje data-i18n / data-i18n-html elementima koji se NE tagguju
   pojedinacno preko Webflow-a: ponavljajuce liste + par jedinstvenih
   elemenata koji su "zarobljeni" u Webflow komponentama.

   Zasto ovaj fajl postoji uz eksplicitne atribute:
     - Radi na RENDEROVANOM HTML-u, gde Webflow komponente ne postoje.
       Zato lako hvata .faq-wrapper (komponenta x5), .film-item, itd.
     - Eksplicitno tagovanje takvih preko API-ja je po-instanci i krhko.

   Load order (Footer, pre </body>):
     dict  ->  auto  ->  engine
     5dm-i18n-dict.js
     5dm-i18n-auto.js   <-- OVAJ
     5dm-i18n.js

   Rucni/eksplicitni atribut UVEK pobedjuje: auto preskace elemente
   koji vec imaju data-i18n ili data-i18n-html.
   ============================================================ */
(function () {
  'use strict';

  // 1) FLAT liste: selektor -> key-evi po redosledu u DOM-u (text mode)
  const FLAT = [
    {
      sel: '.nav-link',
      keys: ['nav.workshop', 'nav.gallery', 'nav.material', 'nav.process', 'nav.contact']
    },
    {
      // tab labele u meniju (ugnjezdeni div u holderu)
      sel: '.disciplines-tab-link .discipline-tab-link-holder > div',
      keys: ['disc.tab1.label', 'disc.tab2.label', 'disc.tab3.label', 'disc.tab4.label']
    },
    {
      // PPF self-healing celije (4 reda podataka, bez header reda)
      sel: '.film-comparison-wrap:not(.heading-fc) .film-wrap-text-h3 > div',
      keys: ['ppf.heal.a60', 'ppf.heal.a50', 'ppf.heal.a45', 'ppf.heal.none']
    },
    {
      // PPF use-case celije (4 reda podataka)
      sel: '.film-comparison-wrap:not(.heading-fc) .film-wrap-text-h5 > div',
      keys: ['ppf.use.fullbody', 'ppf.use.matte', 'ppf.use.front', 'ppf.use.detail']
    }
  ];

  // 2) BLOCK liste: ponovi kontejner, mapiraj dete-selektor -> key.
  //    {n} = 1-based indeks kontejnera (korak 1..4, faq 1..5, tab 1..4).
  const BLOCKS = [
    {
      container: '.four-step-wrap',
      fields: [
        { sel: 'h3', key: 'step{n}.title' },
        { sel: 'p',  key: 'step{n}.body'  }
      ]
    },
    {
      container: '.faq-wrapper',
      fields: [
        { sel: '.faq-question h2', key: 'faq.q{n}' },
        { sel: '.faq-answer',      key: 'faq.a{n}' }
      ]
    },
    {
      container: '.disciplines-tab-pane',
      fields: [
        { sel: '.label', key: 'disc.tab{n}.label' },
        { sel: 'h3',     key: 'disc.tab{n}.head'  },
        { sel: 'p',      key: 'disc.tab{n}.body'  }
      ]
    },
    {
      // PPF header red: jedan kontejner, fiksni key-evi (bez {n})
      container: '.film-comparison-wrap.heading-fc',
      fields: [
        { sel: '.film-h2', key: 'ppf.h.thickness' },
        { sel: '.film-h3', key: 'ppf.h.selfheal'  },
        { sel: '.film-h4', key: 'ppf.h.uv'        },
        { sel: '.film-h5', key: 'ppf.h.usecase'   }
      ]
    }
  ];

  // 3) DIRECT: jedinstveni elementi "zarobljeni" u komponentama ili
  //    tesko selektabilni pojedinacno. Svaki match dobija ISTI key.
  const DIRECT = [
    { sel: '#contact tag',                    key: 'contact.intro' }, // Typography <tag>
    { sel: '.case-study-info-wrapper .label', key: 'case.label'    },
    { sel: '.case-study-info-wrapper p',      key: 'case.body'     }, // 2 pasusa, isti key
    { sel: '.w-form-done > div',              key: 'form.success'  },
    { sel: '.w-form-fail > div',              key: 'form.fail'     },
    // Film kartice - staticni chrome, isti na svakoj kartici
    { sel: '.film-info-wrap > div:first-child', key: 'film.thickness' },
    { sel: '.pick-color',                       key: 'film.pickColor' }
  ];

  // 4) INDEXED: kartice su Webflow komponenta (nema CMS-a), pa se mapiraju
  //    po redosledu na stranici - ali sa EKSPLICITNIM imenima key-eva,
  //    ne film1/film2. Ako promenis redosled kartica u Designer-u,
  //    promeni redosled u `bases` (jedna linija).
  const INDEXED = [
    {
      container: '.film-item',
      bases: ['film.gloss', 'film.matte', 'film.satin', 'film.colorshift'],
      fields: [
        { sel: '.film-label',   suffix: '.label' },
        { sel: '.film-heading', suffix: '.head'  },
        { sel: '.finish-info',  suffix: '.body'  }
      ]
    }
  ];

  // Postavi atribut samo ako ga vec nema (eksplicitno pobedjuje).
  const tag = (el, key, html) => {
    if (!el) return;
    if (el.hasAttribute('data-i18n') || el.hasAttribute('data-i18n-html')) return;
    el.setAttribute(html ? 'data-i18n-html' : 'data-i18n', key);
  };

  const runFlat = () => {
    FLAT.forEach(({ sel, keys, html }) => {
      document.querySelectorAll(sel).forEach((el, i) => {
        if (keys[i]) tag(el, keys[i], html);
      });
    });
  };

  const runBlocks = () => {
    BLOCKS.forEach(({ container, fields }) => {
      document.querySelectorAll(container).forEach((box, i) => {
        const n = i + 1;
        fields.forEach(({ sel, key, html }) => {
          tag(box.querySelector(sel), key.replace('{n}', n), html);
        });
      });
    });
  };

  const runDirect = () => {
    DIRECT.forEach(({ sel, key, html }) => {
      document.querySelectorAll(sel).forEach((el) => tag(el, key, html));
    });
  };

  const runIndexed = () => {
    INDEXED.forEach(({ container, bases, fields }) => {
      document.querySelectorAll(container).forEach((box, i) => {
        const base = bases[i];
        if (!base) return;                       // vise kartica nego key-eva -> preskoci
        fields.forEach(({ sel, suffix, html }) => {
          tag(box.querySelector(sel), base + suffix, html);
        });
      });
    });
  };

  const run = () => {
    runFlat();
    runBlocks();
    runDirect();
    runIndexed();
    // Ako je engine vec primenio pre nas, forsiraj re-apply da uhvati nove atribute.
    if (window.dmI18n && typeof window.dmI18n.refresh === 'function') {
      window.dmI18n.refresh();
    }
  };

  if (document.readyState !== 'loading') run();
  else document.addEventListener('DOMContentLoaded', run);
})();
