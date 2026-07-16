/* ============================================================
   5DM - i18n RECNIK (dictionary)
   Jedini izvor istine za prevode. Ucitaj OVAJ fajl PRE 5dm-i18n.js.

   - Svaki string ima stabilan kljuc (npr. "hero.title").
   - Naslovi sa zelenim <span class="text-green-lime"> idu kao HTML
     (element u Webflow-u koristi data-i18n-html, ne data-i18n).
   - Nemacki = svajcarski pravopis (ss, ne ss/ß): Grösse, ausschliesslich...
   - Brend imena i cisto numericke vrednosti (200 mm, 99.9 %) se NE prevode.

   Prevodi su solidan draft - dati native govorniku na pregled.
   ============================================================ */
window.DM_I18N = {

  /* ---------------- DEUTSCH (Schweiz) ---------------- */
  de: {
    // Navigation
    'nav.workshop': 'Werkstatt',
    'nav.gallery': 'Galerie',
    'nav.material': 'Material',
    'nav.detailing': 'Detailing',
    'nav.process': 'Ablauf',
    'nav.contact': 'Kontakt',

    // Hero
    'hero.label': 'FAHRZEUGFOLIERUNG · 5DM',
    'hero.title': 'Schutz und Form, <span class="text-green-lime">in Werksqualität.</span>',
    'hero.subtitle': 'Veredelung der Karosserie mit zertifizierten Folien von 3M, Avery Dennison und weiteren. Appliziert in Reichenburg. Drei Jahre Garantie.',
    'cta.appointment': 'Termin anfragen',

    // Disziplinen
    'disc.title': 'Vier Disziplinen. <span class="text-green-lime">Eine Werkbank.</span>',
    'disc.tab1.label': 'Vollfolierung',
    'disc.tab1.head': 'Von Hand veredelt. Dokumentiert.',
    'disc.tab1.body': 'Jedes Bauteil in zertifizierter Folie – in der Werkstatt der 5 Dimension Method. Versiegelte Kanten, kein Ablösen und drei Jahre schriftliche Garantie.',
    'disc.tab2.label': 'Lackschutz',
    'disc.tab2.head': 'Von Hand appliziert. Unsichtbarer Schutz.',
    'disc.tab2.body': 'Jede Fläche mit selbstheilender PPF – in der Werkstatt der 5 Dimension Method. Kante an Kante, keine Blasen und drei Jahre schriftliche Garantie.',
    'disc.tab3.label': 'Detailfolierung',
    'disc.tab3.head': 'Die Details machen den Unterschied.',
    'disc.tab3.body': 'Spiegel, Säulen, Griffe – in zertifizierter Folie in der Werkstatt der 5 Dimension Method. Saubere Kanten und drei Jahre schriftliche Garantie inklusive.',
    'disc.tab4.label': 'Individuelle Designs',
    'disc.tab4.head': 'Deine Vision. Dein Fahrzeug.',
    'disc.tab4.body': 'Jedes Design wird in der Werkstatt der 5 Dimension Method von Grund auf gestaltet und appliziert – passgenaue Grafiken, zertifizierte Folie und ein Ergebnis, das auffällt.',

    // Material / Oberflächen
    'material.title': 'Oberflächen. <span class="text-green-lime">Beispiele.</span>',
    'material.body': 'Wir arbeiten ausschliesslich mit zertifizierten Folien führender Hersteller. Klicke auf eine Oberfläche, um die technischen Daten zu sehen.',

    // PPF Vergleich
    'ppf.title': 'PPF — <span class="text-green-lime">Folienvergleich.</span>',
    'ppf.h.thickness': 'Dicke',
    'ppf.h.selfheal': 'Selbstheilend',
    'ppf.h.uv': 'UV-Schutz',
    'ppf.h.usecase': 'Einsatz',
    'ppf.heal.a60': 'Aktiv (60 °C)',
    'ppf.heal.a50': 'Aktiv (50 °C)',
    'ppf.heal.a45': 'Aktiv (45 °C)',
    'ppf.heal.none': 'Nicht aktiv',
    'ppf.use.fullbody': 'Ganze Karosserie',
    'ppf.use.matte': 'Matt-Schutz',
    'ppf.use.front': 'Front · Haube',
    'ppf.use.detail': 'Detailbereiche',

    // Case study
    'case.label': 'FALLSTUDIE',
    'case.title': 'Cayenne in Nardograu.',
    'case.body': 'Ab Werk nicht erhältlich. Matte Schutzfolie, ohne den Lack zu verändern. Präzise an den Kanten. Ruhig über die Fläche.',

    // Ablauf / Schritte
    'process.title': 'Vier Schritte. <span class="text-green-lime">Dokumentiert.</span>',
    'step1.title': 'Beratung',
    'step1.body': 'Ein Gespräch in der Werkstatt. Wir verstehen das Fahrzeug, die Absicht und die Erwartung – bevor irgendetwas vorgeschlagen wird.',
    'step2.title': 'Vermessung',
    'step2.body': 'Auswahl der Folie, Bemusterung am Fahrzeug bei Tages- und Werkstattlicht. Schnittplan.',
    'step3.title': 'Applikation',
    'step3.body': 'Die Folie wird Bauteil für Bauteil gelegt, warm verformt und versiegelt – keine Abkürzungen, keine Hektik.',
    'step4.title': 'Übergabe',
    'step4.body': 'Endkontrolle unter Werkstattlicht, eine Einweisung in die Pflege und die Garantiedokumente in der Hand – dein Fahrzeug geht besser, als es kam.',

    // Galerie
    'gallery.title': 'Galerie',

    // FAQ
    'faq.title': 'Häufig <span class="text-green-lime">gefragt.</span>',
    'faq.q1': 'Arbeitet ihr an Sammlerfahrzeugen?',
    'faq.a1': 'Ja. Sammler- und Klassikfahrzeuge verlangen zusätzliche Sorgfalt, Geduld und Präzision. Zuerst prüfen wir den Zustand des Lacks und wählen dann den sichersten Weg für die Applikation. Unser Ziel ist es, das Fahrzeug zu schützen und dabei jedes Detail sauber, reversibel und im Respekt vor dem ursprünglichen Charakter des Fahrzeugs zu halten.',
    'faq.q2': 'Wie lange bleibt das Fahrzeug in der Werkstatt?',
    'faq.a2': 'Die meisten Vollfolierungen dauern rund 3 bis 7 Arbeitstage. Die genaue Dauer hängt von der Grösse des Fahrzeugs, der Komplexität des Designs und dem Zustand des Fahrzeugs ab. Vor der Applikation wird das Fahrzeug gründlich gereinigt, vorbereitet, foliert und sorgfältig kontrolliert.',
    'faq.q3': 'Muss die Folierung in den Fahrzeugpapieren eingetragen werden?',
    'faq.a3': 'Das hängt von den örtlichen Vorschriften und der Art des Farbwechsels ab. In vielen Fällen muss ein vollständiger Farbwechsel in den Fahrzeugdokumenten aktualisiert werden. Wir empfehlen, die aktuellen Regeln vor oder nach der Folierung beim zuständigen Strassenverkehrsamt zu prüfen.',
    'faq.q4': 'Wie lange hält eine Folierung?',
    'faq.a4': 'Eine hochwertige Folierung hält in der Regel zwischen 3 und 7 Jahren – abhängig von der Folie, der Pflege, der Witterung und wie oft das Fahrzeug gewaschen wird. In der Garage gehaltene Fahrzeuge und gut gepflegte Folierungen halten sogar länger.',
    'faq.q5': 'Beschädigt eine Folierung den Originallack?',
    'faq.a5': 'Nein. Eine professionelle Folierung beschädigt den Werkslack nicht, wenn sie korrekt appliziert und wieder entfernt wird. Im Gegenteil, sie kann den Originallack vor leichten Kratzern, UV-Strahlung und alltäglichem Verschleiss schützen. Wurde das Fahrzeug jedoch schlecht nachlackiert oder ist der Lack bereits beschädigt, kann die Entfernung heikler sein.',

    // Film-Karten — statischer Rahmen (auf jeder Karte gleich)
    'film.thickness': 'DICKE',
    'film.pickColor': 'FARBE WÄHLEN',

    // Film-Karten — Inhalt (Reihenfolge via `bases` im Auto-Tagger)
    'film.gloss.label': 'Glanz-Finish',
    'film.gloss.head': 'Glänzend',
    'film.gloss.body': 'Ein hochglänzendes, spiegelähnliches Finish, das die Werkslinien und die Farbtiefe deines Fahrzeugs verstärkt. Pflegeleicht und beständig gegen UV-Ausbleichen.',

    'film.matte.label': 'Matt-Finish',
    'film.matte.head': 'Matt',
    'film.matte.body': 'Eine matte, nicht reflektierende Oberfläche mit modernem, zurückhaltendem Auftritt. Verbirgt kleine Unebenheiten und Swirls besser als glänzende Finishes.',

    'film.satin.label': 'Satin-Finish',
    'film.satin.head': 'Satin',
    'film.satin.body': 'Der Mittelweg zwischen Glanz und Matt – ein weicher, seidiger Schimmer mit dezenter Tiefe. Ein edler Auftritt, der pflegeleichter ist als Vollglanz.',

    'film.colorshift.label': 'Farbwechsel-Finish',
    'film.colorshift.head': 'Farbwechselnd',
    'film.colorshift.body': 'Ein dynamisches Finish, das je nach Lichteinfall und Blickwinkel den Farbton wechselt. Macht jede Fahrt zum Statement.',

    // Detailing
    'detail.label': 'Detail',
    'detail.h2': 'Detailing, das den Glanz zurückbringt',
    'detail.p': 'Unser Detailing bringt den Innenraum deines Fahrzeugs in einen neuwertigen Zustand. Wir achten auf jedes Detail, damit du sauberer, frischer und komfortabler unterwegs bist.',

    'detail.card1.title': 'Staubsaugen',
    'detail.card1.body': 'Gründliches Aussaugen von Sitzen, Teppichen, Kofferraum und schwer zugänglichen Stellen.',

    'detail.card2.title': 'Lederreinigung',
    'detail.card2.body': 'Schonende Reinigung und Pflege, um Lederflächen aufzufrischen.',

    'detail.card3.title': 'Innenraumreinigung',
    'detail.card3.body': 'Abwischen aller Flächen, Verkleidungen und Zierleisten für ein frisches, sauberes Finish.',

    'detail.card4.title': 'Finish',
    'detail.card4.body': 'Letzte Handgriffe für einen makellosen und aufgefrischten Innenraum.',

    // Kontakt
    'contact.title': 'Termin buchen.',
    'contact.intro': 'Erzähl uns vom Fahrzeug. Wir antworten innerhalb von 24 Stunden mit einem Vorschlag und einem Termin.',
    'contact.workshopLabel': 'Werkstatt',
    'contact.reachLabel': 'Erreichbar',
    'contact.hoursLabel': 'Öffnungszeiten',
    'contact.hoursDays': 'Montag — Freitag',
    'contact.hoursTime': '09:00 — 18:00',
    'contact.hoursSat': 'Samstag nach Vereinbarung',

    // Formular
    'form.heading': 'Wir hören zu.',
    'form.service': 'Leistung',
    'form.vehicle': 'Fahrzeug · Modell',
    'form.name': 'Dein Name',
    'form.email': 'E-Mail',
    'form.message': 'Nachricht',
    'form.pill.full': 'Vollfolierung',
    'form.pill.ppf': 'PPF',
    'form.pill.detail': 'Detail',
    'form.pill.custom': 'Individuell',
    'form.submit': 'Senden',
    'form.vehiclePlaceholder': 'z. B. Porsche 911 GT3',
    'form.namePlaceholder': 'Name',
    'form.emailPlaceholder': 'name@example.ch',
    'form.messagePlaceholder': 'Deine Nachricht',
    'form.success': 'Danke! Deine Anfrage ist bei uns eingegangen.',
    'form.fail': 'Ups! Beim Senden ist etwas schiefgelaufen.'
  },

  /* ---------------- ENGLISH ---------------- */
  en: {
    // Navigation
    'nav.workshop': 'Workshop',
    'nav.gallery': 'Gallery',
    'nav.material': 'Material',
    'nav.detailing': 'Detailing',
    'nav.process': 'Process',
    'nav.contact': 'Contact',

    // Hero
    'hero.label': 'VEHICLE WRAPPING · 5DM',
    'hero.title': 'Protection and form, <span class="text-green-lime">at factory grade.</span>',
    'hero.subtitle': 'Body refinement with certified films from 3M, Avery Dennison and more. Applied in Reichenburg. Three-year warranty.',
    'cta.appointment': 'Request appointment',

    // Disciplines
    'disc.title': 'Four disciplines. <span class="text-green-lime">One bench.</span>',
    'disc.tab1.label': 'Full Wrap',
    'disc.tab1.head': 'Hand finished. Documented.',
    'disc.tab1.body': 'Every panel wrapped in certified film at the 5 Dimension Method workshop — sealed edges, no lifting, and a written 3-year warranty.',
    'disc.tab2.label': 'Paint Protection',
    'disc.tab2.head': 'Hand applied. Invisible protection.',
    'disc.tab2.body': 'Every surface covered in self-healing PPF at the 5 Dimension Method workshop — edge to edge, zero bubbles, and a written 3-year warranty.',
    'disc.tab3.label': 'Detail Wrap',
    'disc.tab3.head': 'The details make the difference.',
    'disc.tab3.body': 'Mirrors, pillars, handles — wrapped in certified film at the 5 Dimension Method workshop, clean edges and a written 3-year warranty included.',
    'disc.tab4.label': 'Custom Liveries',
    'disc.tab4.head': 'Your vision. Your vehicle.',
    'disc.tab4.body': 'Every livery is designed and applied from scratch at the 5 Dimension Method workshop — cut-to-fit graphics, certified film, and a result that turns heads.',

    // Material / Surfaces
    'material.title': 'Surface <span class="text-green-lime">examples</span>',
    'material.body': 'We work exclusively with certified films from leading manufacturers. Click a surface to view its technical data.',

    // PPF comparison
    'ppf.title': 'PPF — <span class="text-green-lime">Film comparison.</span>',
    'ppf.h.thickness': 'Thickness',
    'ppf.h.selfheal': 'Self-healing',
    'ppf.h.uv': 'UV block',
    'ppf.h.usecase': 'Use case',
    'ppf.heal.a60': 'Active (60 °C)',
    'ppf.heal.a50': 'Active (50 °C)',
    'ppf.heal.a45': 'Active (45 °C)',
    'ppf.heal.none': 'Not active',
    'ppf.use.fullbody': 'Full body',
    'ppf.use.matte': 'Matte protection',
    'ppf.use.front': 'Front · Hood',
    'ppf.use.detail': 'Detail areas',

    // Case study
    'case.label': 'CASE STUDY',
    'case.title': 'Cayenne in Nardo Grey.',
    'case.body': 'Not available from the factory. Matte protection film, without altering the paint. Precise at the edges. Calm across the surface.',

    // Process / steps
    'process.title': 'Four steps. <span class="text-green-lime">Documented.</span>',
    'step1.title': 'Consultation',
    'step1.body': 'A conversation in the workshop. We understand the car, the intention, and the expectation — before anything is proposed.',
    'step2.title': 'Measurement',
    'step2.body': 'Selection of the film, sampling on the vehicle in daylight and workshop light. Cutting plan.',
    'step3.title': 'Application',
    'step3.body': 'Film is laid, heat-formed, and sealed panel by panel in the workshop — no shortcuts, no rushing.',
    'step4.title': 'Handover',
    'step4.body': 'Final inspection under workshop light, a care-instructions walkthrough, and warranty documents in hand — your car leaves better than it arrived.',

    // Gallery
    'gallery.title': 'Gallery',

    // FAQ
    'faq.title': 'Often <span class="text-green-lime">asked.</span>',
    'faq.q1': 'Do you work on collector cars?',
    'faq.a1': 'Yes. Collector and classic cars require extra care, patience, and precision. We inspect the paint condition first and then choose the safest approach for the installation. Our goal is to protect the vehicle while keeping every detail clean, reversible, and respectful to the original character of the car.',
    'faq.q2': 'How long does the car stay in the workshop?',
    'faq.a2': 'Most full vehicle wraps take around 3 to 7 working days. The exact time depends on the size of the car, the complexity of the design, and the condition of the vehicle. Before installation, the car must be properly cleaned, prepared, wrapped, and carefully inspected.',
    'faq.q3': 'Does the wrap need to be registered in the vehicle papers?',
    'faq.a3': 'This depends on local regulations and the type of colour change. In many cases, a full colour change may need to be updated in the vehicle documents. We always recommend checking the current rules with your local registration office before or after the wrap is completed.',
    'faq.q4': 'How long does a wrap last?',
    'faq.a4': 'A high-quality wrap usually lasts between 3 and 7 years, depending on the film, maintenance, weather exposure, and how often the car is washed. Garage-kept cars and properly maintained wraps can last even longer.',
    'faq.q5': 'Does a wrap damage the original paint?',
    'faq.a5': 'No. A professional wrap does not damage factory paint when it is applied and removed correctly. In fact, it can help protect the original paint from light scratches, UV exposure, and everyday wear. However, if the car has been repainted poorly or the paint is already damaged, removal can be more sensitive.',

    // Film cards — static chrome (identical on every card)
    'film.thickness': 'THICKNESS',
    'film.pickColor': 'PICK COLOR',

    // Film cards — content (mapped by order via `bases` in the auto-tagger)
    'film.gloss.label': 'Gloss finish',
    'film.gloss.head': 'Glossy',
    'film.gloss.body': "A high-shine, mirror-like finish that intensifies your car's factory lines and colour depth. Easy to maintain and built to resist UV fading.",

    'film.matte.label': 'Matte finish',
    'film.matte.head': 'Matte',
    'film.matte.body': 'A flat, non-reflective surface with a modern, stealthy look. Hides minor imperfections and swirl marks better than gloss finishes.',

    'film.satin.label': 'Satin finish',
    'film.satin.head': 'Satin',
    'film.satin.body': "The middle ground between gloss and matte — a soft, silky sheen with subtle depth. A premium look that's more forgiving to maintain than full gloss.",

    'film.colorshift.label': 'Color shift finish',
    'film.colorshift.head': 'Color - Changing',
    'film.colorshift.body': 'A dynamic finish that shifts hue depending on light angle and viewing perspective. Turns every drive into a statement.',

    // Detailing
    'detail.label': 'Detail',
    'detail.h2': 'Detailing that brings it back',
    'detail.p': 'Our detailing service restores the inside of your vehicle to a like-new condition. We focus on every detail, so you can enjoy a cleaner, fresher, and more comfortable drive.',

    'detail.card1.title': 'Vacuuming',
    'detail.card1.body': 'Deep vacuum of seats, carpets, trunk, and hard-to-reach areas.',

    'detail.card2.title': 'Leather Cleaning',
    'detail.card2.body': 'Gentle cleaning and conditioning to restore leather surfaces.',

    'detail.card3.title': 'Interior Cleaning',
    'detail.card3.body': 'Wipe down of all surfaces, panels, and trims for a fresh, clean finish.',

    'detail.card4.title': 'Detailing Finishing',
    'detail.card4.body': 'Final touches to ensure a spotless and refreshed interior.',

    // Contact
    'contact.title': 'Book an appointment.',
    'contact.intro': "Tell us about the vehicle. We'll reply within 24 hours with a proposal and a slot.",
    'contact.workshopLabel': 'Workshop',
    'contact.reachLabel': 'Reach us',
    'contact.hoursLabel': 'Hours',
    'contact.hoursDays': 'Monday — Friday',
    'contact.hoursTime': '09:00 — 18:00',
    'contact.hoursSat': 'Saturday by appointment',

    // Form
    'form.heading': "We're listening.",
    'form.service': 'Service',
    'form.vehicle': 'Vehicle · Model',
    'form.name': 'Your name',
    'form.email': 'E-mail',
    'form.message': 'Message',
    'form.pill.full': 'Full wrap',
    'form.pill.ppf': 'PPF',
    'form.pill.detail': 'Detail',
    'form.pill.custom': 'Custom',
    'form.submit': 'Submit',
    'form.vehiclePlaceholder': 'e.g. Porsche 911 GT3',
    'form.namePlaceholder': 'Name',
    'form.emailPlaceholder': 'name@example.ch',
    'form.messagePlaceholder': 'Your message',
    'form.success': 'Thank you! Your submission has been received!',
    'form.fail': 'Oops! Something went wrong while submitting the form.'
  }
};
