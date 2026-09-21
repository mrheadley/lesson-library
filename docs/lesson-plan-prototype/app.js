/* PROTOTYPE — throwaway, not production.
   Lesson-plan display prototype. State lives in the URL (?lesson= & ?variant=),
   nothing persists. Models below are hand-built from the two real lesson-01 plans:
     - digital-citizenship-form-2/output/04-lesson-plans/lesson-01-plan.md  (Ember / IT)
     - english-b-form-1/output/04-lesson-plans/lesson-01-plan.md            (Tide / English B)
   Variants: A = Timeline (time-spine run-sheet), B = Print (continuous document),
   C = Cockpit (interactive tick-off/focus panel). */

/* ---------------------------- lesson models ------------------------------ */

const LESSONS = {
  ember: {
    id: 'ember',
    identity: 'Ember',
    subject: 'Information Technology — Digital Citizenship',
    form: 'Form 2 · ≈11–13',
    period: '35 min',
    lessonNo: '01',
    title: 'What Is a Digital Citizen? (Rights & Responsibilities)',
    context: [
      ['Course', 'Information Technology — Digital Citizenship'],
      ['Form / age', 'Form 2 (≈11–13)'],
      ['Period', '35 minutes'],
      ['Class', 'Two single-sex classes (17 boys / 28 girls) — one plan, run identically in both rooms'],
      ['Prerequisite', 'None'],
      ['Anchor article', '03-articles/lesson-01-article.md'],
    ],
    philosophy: ['Constructionism (build, don\u2019t receive)', 'calm haven', 'I do / we do / you do', 'layered challenges', 'recognition of character and effort', 'trust as currency'],
    objectives: [
      'Say what a digital citizen is, in your own words.',
      'Name at least two rights (e.g. privacy, expression, access) and two responsibilities that keep an online community safe and fair.',
      'Explain how one online choice can ripple out to yourself, your community, and the whole world.',
    ],
    materials: [
      'Projector + room computer + teacher laptop, with Google Slides open (2 low-text slides only — see flow)',
      'Google for Education: shared class slide for the tally, and a Google Form exit ticket (created before class, link on slide 2)',
      'Printed Ripple Run packs (1 per group of 3–4): 2 scenario cards + 1 three-ring sheet + consequence strips. Print at large, high-contrast, sans-serif (e.g. Arial/OpenDyslexic, size \u226514) — see Appendix A',
      'Whiteboard/blackboard + markers, or projected empty slide for the class tally',
      'Visible timer on the projector for the whole period',
      'Printed badges/recognition stickers (optional): \u201CCommunity Builder\u201D',
      'All students on their own school device, logged into their Google account, with the exit-ticket slide visible',
    ],
    segments: [
      { name: 'Hook', time: '5:00–10:00', dur: 5, what: 'Agenda displayed (5 steps — same shape every lesson). Teacher projects: \u201CSomeone posts a photo of you without asking.\u201D Students answer by thumbs (up = fine, sideways = not sure, down = not OK) — no one says a word. Challenge set: \u201CToday we build the definition of a digital citizen — and the class earns a Community Builder badge together.\u201D', move: 'Calm, unhurried entrance into the haven. Take the first thumbs yourself (\u201CI\u2019m sideways — ask me first\u201D). Repeat the agenda once aloud. Note the lack of right/wrong — this is a noticing, not a test.' },
      { name: 'I do', time: '10:00–20:00', dur: 10, what: 'Slide 1 (word map): digital \u00B7 citizen \u00B7 community \u00B7 rights \u00B7 responsibilities. Teacher reads each word and its one-line meaning aloud, then assembles the full definition: \u201Cuses technology safely, responsibly, and respectfully to learn, create, and participate.\u201D Slide 2 (classroom mirror): two short columns — classroom rule \u2194 online rule (don\u2019t shout over others \u2194 don\u2019t spam the chat; don\u2019t take others\u2019 things \u2194 don\u2019t steal accounts/work). Then the teacher thinks aloud through the Ripple worked example (the rumour) on the board, placing each consequence in a ring: world ring, community ring, self ring.', move: 'Model the friction visibly — pause, say \u201Cthis is the hard bit,\u201D place each ripple with a why. Hold the faith: \u201CNo problem at all — we place it here because the rumour reached people I\u2019ve never met.\u201D Keep slides word-light; everything on them is also said aloud.' },
      { name: 'We do', time: '20:00–28:00', dur: 8, what: 'A second scenario worked together: \u201CYou report a scam you saw in a group chat.\u201D Class points to a ring on the board; teacher places it and asks \u201CWhich ring does a kind comment touch?\u201D Then the right\u2194responsibility coin is introduced: every right has a paired responsibility (privacy \u2194 respect others\u2019 privacy). Class calls out the pair for expression. Activity rules then taught: each group has 2 scenario cards; +1 point per correctly-placed ripple, +1 for a reasoning sentence, +1 kindness point for helping a peer; tally goes on the board as the class\u2019s community score.', move: 'Elicit, don\u2019t tell. Praise the reasoning, not just the answer. Set expectations before the activity begins (rules, timer, badge criteria). No cold-calling — take volunteers and gentle pointers.' },
      { name: 'You do', time: '28:00–37:00', dur: 9, what: 'Ripple Run (see Activity box). Groups of 3–4 (11 groups at 45) sort their two scenario cards into the three rings on the sheet, add a reasoning sentence, and tally points. Timer on screen. Teacher circulates, records the running community tally, and names effort aloud.', move: 'Circulate and recognise effort by name: \u201CLeila, that reasoning sentence took real work.\u201D Stay calm through mistakes — treat them as building material. Whisper nudges, don\u2019t broadcast help. Keep the tally visible (trust as currency — transparent, no policing).' },
      { name: 'Exit + close', time: '37:00–40:00', dur: 3, what: 'Exit ticket on the Google Form: Q1: \u201CName ONE responsibility you owe the online community.\u201D Q2: \u201CWhich ring does a kind comment touch?\u201D Students also tick \u201CI can say what a digital citizen is\u201D (yes / nearly / not yet). Teacher closes with the final tally, names 2–3 students for a specific character/effort moment, and every group that finished a card with a reasoning sentence receives the Community Builder badge.', move: 'Keep the close tight. Read the ticket questions aloud; allow \u201Csay it to me and I\u2019ll type it.\u201D Affirm the tally as their construction. Dismiss on a positive, specific note.' },
    ],
    extras: [
      { heading: 'The activity, ready to run — Ripple Run', tone: 'activity', blocks: [
        { t: 'p', text: 'Setup (before class): print one pack per group — 2 scenario cards (from the bank below), 1 three-ring sheet (large nested circles labelled Yourself / Community / World), and consequence strips for the scaffold track. Assign each group a number; groups of 3–4.' },
        { t: 'list', items: [
          'Sort each ripple of your scenario into the right ring. +1 point for each correctly placed ripple.',
          'Write one reasoning sentence — \u201CThis choice touches the ____ ring because ____.\u201D +1 point.',
          'Help a teammate and the group earns a kindness point (+1). The tally is the class\u2019s community score, recorded on the board.',
          'No point is lost for a mistake — wrong placements are fixed and still count. Low stakes by design.',
        ] },
        { t: 'p', text: 'Badge: Community Builder — awarded to any group that completes at least one card with a reasoning sentence. The badge recognises effort and participation (character), not competition; no group is \u201Cleft out.\u201D' },
        { t: 'list', items: [
          'You see a rumour about a classmate and you reshare it. (world, community, self)',
          'You post a kind comment on a friend\u2019s art. (community, self trail)',
          'You report a scam you noticed in a group chat. (world, community, self)',
          'Someone tags you in a photo you didn\u2019t want online. (self — privacy; whose responsibility to ask first?)',
          'You reuse a drawing someone made, without asking. (respecting others\u2019 work)',
          'A friend gives you their password \u201Cjust to check something.\u201D (privacy — the house-key analogy)',
        ] },
        { t: 'p', text: 'Purpose (gamification serves the objective): points reward accurate ring-mapping and a reasoning sentence — the exact skill the lesson teaches. The class-wide tally and badge reinforce \u201Ceveryone is building the community,\u201D not \u201Cbest group wins.\u201D' },
      ] },
      { heading: 'Formative check (the 3-min exit slot)', tone: 'formative', blocks: [
        { t: 'p', text: 'Google Form, two questions + one confidence tick. Teacher scans responses during the break between classes and uses them as the diagnostic mirror for Lesson 2\u2019s opener. \u201CNot yet\u201D answers are read as information, not failure.' },
      ] },
      { heading: 'Differentiation — layered challenges', tone: 'design', blocks: [
        { t: 'p', text: 'Scaffold track: three-ring sheet already labelled; scenario consequences provided as sentence strips to cut and place (physical sorting — no heavy reading); reasoning sentence starter on the card. Teacher scribes the sentence for any student who prefers to say it aloud.' },
        { t: 'p', text: 'Extension track: blank rings — students write their own consequence chains; invent a fourth ripple for people they\u2019ll never meet; or draft a one-line \u201Ccommunity pledge\u201D rule for their class\u2019s online community.' },
        { t: 'p', text: 'Both tracks run in the same activity, side by side, same points, same badge.' },
      ] },
      { heading: 'Inclusive design (woven in, not bolted on)', tone: 'design', blocks: [
        { t: 'list', items: [
          'Dyslexia: content delivered in short chunks (a 6-word word map, two-column mirror); the teacher reads every text aloud; handouts are print-friendly (\u226514pt sans-serif, high contrast, generous spacing); slides are word-light and everything on them is spoken; answers can be verbal (point, thumb, say it) — never only written; strips are physically sorted rather than read.',
          'Autism: the 5-step agenda is displayed and repeated at each transition; the rules, timer, and badge criteria are stated before the activity; participation is low-stakes (thumbs, sorting, no cold-calling); optional roles per group (point-keeper, card-reader) that students choose for themselves, and may decline.',
        ] },
        { t: 'p', text: 'No diagnosis appears in any content shown to students — these choices are the teacher\u2019s design, not the class\u2019s vocabulary.' },
      ] },
      { heading: 'Why this design (philosophy connection)', tone: 'tone', blocks: [
        { t: 'list', items: [
          'Calm haven: the opener is a silent thumb-vote — no one is exposed; mistakes cost nothing, so the room stays safe enough for real work.',
          'Necessary friction: the reasoning sentence is the friction — it is hard, and the scaffold makes it surmountable, and the teacher holds the faith while it happens.',
          'Constructionism: students build the definition by handling scenarios and sorting ripples, not by copying notes.',
          'Recognition of character and effort: the badge and the named praise are for grit, kindness, and reasoning — not for being \u201Cright.\u201D',
          'Trust as currency: the transparent tally and the rule that wrong placements still count model trust over policing — the exact citizenship the lesson teaches.',
        ] },
      ] },
      { heading: 'Appendix A — print master notes', tone: 'print', blocks: [
        { t: 'list', items: [
          'Two scenario cards (one scenario each, numbered, large text).',
          'One three-ring sheet: three nested circles labelled Yourself (inner), Community (middle), World (outer), with a short instruction line: \u201CPut each ripple in the ring it touches.\u201D',
          'One reasoning-strip: \u201CThis choice touches the ____ ring because ____.\u201D',
          'Extension cards (for groups that finish): one blank three-ring sheet + \u201CInvent a fourth ripple\u201D prompt.',
        ] },
      ] },
    ],
  },

  tide: {
    id: 'tide',
    identity: 'Tide',
    subject: 'English B',
    form: 'Form 1 · ≈11–13',
    period: '35 min',
    lessonNo: '01',
    title: 'What is a Myth?',
    context: [
      ['Course', 'English B — Term 1 · Unit 1'],
      ['Form / age', 'Form 1 (11–13)'],
      ['Period', '35 minutes'],
      ['Lesson', 'Lesson 01 of unit'],
    ],
    philosophy: ['Haven first (entry ritual, no cold-call humiliation)', 'Constructionism / necessary friction \u2014 students sort, choose, defend', 'Recognition of character \u2014 naming effort loudly', 'Militant guardian \u2014 praise the idea, correct the idea, never the person'],
    objectives: [
      'Define a myth in their own words and name its three jobs (explain / teach / preserve).',
      'Describe Mount Olympus and the flawed nature of the Greek gods.',
      'State what Fate is (the three sisters) and why myths matter to English.',
    ],
    materials: [
      'Projector + teacher laptop (slides for the three gods/flaws and the myth definition)',
      '6 statement cards per pair (sorts: Explains / Teaches / Preserves)',
      'Notebooks; scaffold (printed) of the definition sentence-starter',
      'Exit-ticket slips',
    ],
    segments: [
      { time: '0–5', name: 'Hook: \u201CMyth or fake?\u201D', teacher: 'Projects 3 quick images (a thunderstorm, a volcanoes, a sunrise). \u201CHumanity once explained these with stories. What would YOU tell a child?\u201D', students: 'Thumbs-up/down; pair-talk; 2 volunteers share a \u201Cstory-explanation\u201D', anchor: 'Haven (safe to guess)' },
      { time: '5–11', name: 'I do — define it', teacher: 'Gives the working definition; fills the three-jobs table on the projector (explain/teach/preserve) one row at a time, with a Greek example each.', students: 'Follow on printed scaffold; echo the key sentence as a class', anchor: 'Constructionism (build, don\u2019t copy)' },
      { time: '11–18', name: 'We do — Olympus & flawed gods', teacher: 'Shows Mt Olympus slide + \u201Cflawed gods\u201D idea (vain, jealous, silly, powerful). We do: asks \u201CWhat\u2019s a flaw we KNOW from stories? Why does it make myths teach better?\u201D', students: 'Pair-gather one flawed-god trait; class co-builds the list', anchor: 'Necessary friction (reasoning aloud)' },
      { time: '18–21', name: 'Mini-transition', teacher: 'Gives the sorting rules once, clearly; models one card with the class; \u201Chands up when you\u2019re ready\u201D', students: 'Say the sorting instruction in their own words (check understanding)', anchor: 'Predictable transitions (ADD/ADHD)' },
      { time: '21–31', name: 'You do — \u201CMyth triage\u201D', teacher: 'Distributes 6 statement cards; circulates naming effort; offers the scaffolded sort-grid to pairs who need it; nudges high-fliers to \u201Cmake a claim why a card could fit TWO columns\u201D', students: 'Sort each card into Explains / Teaches / Preserves; fast-finishers defend a double-listing', anchor: 'You do + layered challenge' },
      { time: '31–35', name: 'Formative check (exit ticket)', teacher: 'Collects slips: \u201CFinish: A myth is ______ because ______.\u201D + \u201CName ONE thing Greek myths explained.\u201D Scans quickly, sorts into 2 piles (got it / almost — for next lesson\u2019s recap).', students: 'Complete the slip; hand in at door', anchor: 'Assessment = diagnostic mirror' },
    ],
    extras: [
      { heading: 'Formative check cap', tone: 'formative', blocks: [
        { t: 'p', text: 'Formative check \u2264 5 min, checked in-flow (data \u2192 lens for Lesson 02 recap).' },
      ] },
      { heading: 'Philosophy anchors', tone: 'tone', blocks: [
        { t: 'list', items: [
          'Haven first: entry ritual (greeting at door, \u201Cglad you\u2019re here\u201D), predictable slide order, no cold-call humiliation — hands-up + think-pair-share.',
          'Constructionism / necessary friction: students sort, choose, defend — no passive copying. Wrong answers invited (\u201Cthat answer is a gift — it shows us where to look\u201D).',
          'Recognition of character: teacher names effort loudly (\u201CI saw you catch your own mistake — that\u2019s the good stuff\u201D).',
          'Militant guardian: praise the idea, correct the idea, never the person; zero tolerance for mockery of \u201Cwrong\u201D answers.',
        ] },
      ] },
      { heading: 'Neurodivergence-informed design (built in)', tone: 'design', blocks: [
        { t: 'list', items: [
          'Predictable structure + visible agenda \u2192 supports ADD/ADHD.',
          'Reading/dictation load minimised: definitions provided on a printed scaffold, not copied from a board; big font, generous white space.',
          'Dual modality: hear the definition, see the slide, sort physically \u2192 supports dyslexia (word-picture pairing).',
          'Low-stakes participation: think \u2192 pair \u2192 share before any public answer; movement in the sorting activity breaks the sit-still stretch.',
        ] },
      ] },
      { heading: 'Differentiation', tone: 'design', blocks: [
        { t: 'list', items: [
          'Scaffold: printed definition + sort grid; card sorting with partner.',
          'Extension (high-fliers): \u201Cdual-column card\u201D challenge plus \u201CWhy is a flawed god a BETTER teacher than a perfect one?\u201D mini-essay in notebook.',
          'Participation: hands-up + think-pair-share; every student speaks into a pair at least once.',
          'Dyslexia/ADD-ADHD: reduced copying, printed texts, one instruction at a time, physical movement in sorting.',
        ] },
      ] },
      { heading: 'Lesson 02 at a glance (next period)', tone: 'next', blocks: [
        { t: 'p', text: 'Modern Footprints — seven-brand tracing quiz, \u201Cguess the god behind the brand.\u201D' },
      ] },
    ],
  },
};

/* ------------------------------ helpers ---------------------------------- */

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const pad = (n) => String(n).padStart(2, '0');

const state = (() => {
  const p = new URLSearchParams(location.search);
  const lesson = p.get('lesson') === 'tide' ? 'tide' : 'ember';
  const variant = ['A', 'B', 'C'].includes(p.get('variant')) ? p.get('variant') : 'A';
  return { lesson, variant, ticks: {}, focus: null };
})();

const VARIANTS = { A: 'Timeline', B: 'Print', C: 'Cockpit' };
const totalMin = (m) => m.segments.reduce((s, x) => s + (+x.dur || 0), 0);

/* ----------------------- shared render primitives ------------------------ */

function blocksHtml(blocks) {
  return blocks.map((b) => {
    if (b.t === 'list') return `<ul>${b.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;
    return `<p>${esc(b.text)}</p>`;
  }).join('');
}

function overlay(kicker, title) {
  return `<p class="ov">${esc(kicker)}</p><h1 class="ptitle">${esc(title)}</h1>`;
}

function metaChips(m) {
  return m.context.map(([k, v]) => `<span class="chip"><b>${esc(k)}</b>${esc(v)}</span>`).join('');
}

function topbar(m) {
  return `<header class="topbar">
    <a class="brand" href="?lesson=${m.id}&variant=${state.variant}"><span class="brand-dot"></span>EMBER<span class="thin">&amp;</span>TIDE</a>
    <nav class="ltabs">
      ${['ember', 'tide'].map((id) => {
        const l = LESSONS[id];
        return `<a class="ltab${id === state.lesson ? ' on' : ''}" href="?lesson=${id}&variant=${state.variant}"><b>${l.identity}</b><span>${l.form}</span></a>`;
      }).join('')}
    </nav>
  </header>`;
}

/* ---------------------- Variant A — Timeline run-sheet ------------------- */

function renderA(m) {
  const total = totalMin(m);
  const segs = m.segments
    .map((s, i) => {
      const h = s.what !== undefined
        ? `<div class="pair"><h4>What happens</h4><p>${esc(s.what)}</p></div>
           <div class="pair move"><h4>Teacher move</h4><p>${esc(s.move)}</p></div>`
        : `<div class="pair"><h4>Teacher does</h4><p>${esc(s.teacher)}</p></div>
           <div class="pair"><h4>Students do</h4><p>${esc(s.students)}</p></div>
           <div class="pair anchor"><h4>Anchor</h4><p>${esc(s.anchor)}</p></div>`;
      return `<li class="stop">
        <div class="rail"><span class="tfrom">${esc(s.time.split('–')[0])}</span><span class="tto">${esc(s.time.split('–')[1])}</span></div>
        <span class="sdur">${s.dur} min</span>
        <span class="dotn">${pad(i + 1)}</span>
        <div class="body"><h3>${esc(s.name)}</h3>${h}</div>
      </li>`;
    })
    .join('');

  const extras = m.extras.map((x) => {
    const cls = `xcard tone-${x.tone}`;
    return `<section class="${cls}"><h3>${esc(x.heading)}</h3>${blocksHtml(x.blocks)}</section>`;
  }).join('');

  return `${topbar(m)}
  <div class="page page-a">
    <header class="panel headband">
      ${overlay(`${m.identity} &middot; Lesson ${m.lessonNo} &middot; ${m.subject}`, m.title)}
      <p class="lede">${m.period} period &middot; ${m.form} &middot; ${segs} segments &middot; ${m.identity.toLowerCase()} identity</p>
      <div class="chips">${metaChips(m)}</div>
    </header>

    <section class="block">
      <h2 class="bn"><span>00</span> Prep &amp; context</h2>
      <div class="pregrid">
        <div class="precard">
          <h4>Objectives — by the end</h4>
          <ol>${m.objectives.map((o) => `<li>${esc(o)}</li>`).join('')}</ol>
        </div>
        <div class="precard">
          <h4>Materials checklist</h4>
          <ul class="mat">${m.materials.map((x) => `<li><span class="tickbox"></span>${esc(x)}</li>`).join('')}</ul>
        </div>
        <div class="precard phil">
          <h4>Philosophy anchors</h4>
          <p>${esc(m.philosophy.join(' \u00B7 '))}</p>
        </div>
      </div>
    </section>

    <section class="block runblock">
      <h2 class="bn"><span>01</span> The period — ${total} min</h2>
      <ol class="runline">${segs}</ol>
      <div class="tallied"><span class="ttot">${total}</span><span>minutes in the period. Runs start to finish, name in hand.</span></div>
    </section>

    <section class="block">
      <h2 class="bn"><span>02</span> Notes for this lesson</h2>
      <div class="xgrid">${extras}</div>
    </section>
  </div>`;
}

/* ---------------------- Variant B — Print master ------------------------- */

function renderB(m) {
  const total = totalMin(m);
  const cols = ['time', 'name', 'teacher', 'students', 'anchor'].filter((c) => m.segments[0][c] !== undefined);
  const colLabel = { time: 'Time', name: 'Segment', teacher: m.segments[0].teacher !== undefined ? 'Teacher does' : 'What happens', students: 'Students do', move: 'Teacher move', anchor: 'Anchor' };
  // build explicit header order per lesson shape
  let heads;
  let rows;
  if (m.segments[0].what !== undefined) {
    heads = ['Segment', 'Time', 'What happens', 'Teacher move'];
    rows = m.segments.map((s) => [s.name, s.time, s.what, s.move]);
  } else {
    heads = ['Time', 'Segment', 'Teacher does', 'Students do', 'Anchor'];
    rows = m.segments.map((s) => [s.time, s.name, s.teacher, s.students, s.anchor]);
  }
  const tbody = rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`).join('');

  const extras = m.extras.map((x, i) => {
    const cls = `printcard tone-${x.tone}`;
    return `<section class="${cls}"><h3 class="ph${i > 0 ? ' rule' : ''}">${esc(x.heading)}</h3>${blocksHtml(x.blocks)}</section>`;
  }).join('');

  return `${topbar(m)}
  <div class="page page-b">
    <article class="paper">
      <header class="phead">
        <p class="ov">${m.identity.toUpperCase()} &middot; Lesson ${m.lessonNo} &middot; ${m.subject}</p>
        <h1 class="ptitle">${esc(m.title)}</h1>
        <p class="psum">${esc(m.form)} &middot; ${m.period} period &middot; ${m.philosophy.join(' \u00B7 ')}</p>
        <hr class="rule-strong">
      </header>

      <section class="docblock">
        <h2 class="dh">Objectives</h2>
        <p class="dsub">By the end of the period students can:</p>
        <ol class="seam">${m.objectives.map((o) => `<li>${esc(o)}</li>`).join('')}</ol>
      </section>

      <section class="docblock">
        <h2 class="dh">Materials</h2>
        <ul class="seam">${m.materials.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
      </section>

      <section class="docblock">
        <h2 class="dh">Minute-by-minute flow</h2>
        <table class="dtable">
          <thead><tr>${heads.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead>
          <tbody>${tbody}</tbody>
        </table>
        <p class="cap">${total} minutes in the period. The formative-check slice is capped at 5 min and is read in-flow as a diagnostic, not a test.</p>
      </section>

      ${extras}

      <footer class="printfoot">Lesson Plan ${m.lessonNo} &middot; ${m.identity} &middot; print order: 1 objectives · 2 materials · 3 flow · 4 notes</footer>
    </article>
  </div>`;
}

/* ---------------------- Variant C — Cockpit ------------------------------ */

function renderC(m) {
  const total = totalMin(m);
  const key = m.id;
  const ticks = state.ticks[key] = state.ticks[key] || [];
  const focus = state.focus && state.focus.startsWith(key) ? +state.focus.slice(key.length) : 0;
  const checked = m.segments.map((s, i) => !!ticks[i]);
  const doneMin = m.segments.reduce((sum, s, i) => sum + (checked[i] ? +s.dur : 0), 0);
  const segCheck = m.segments.map((s, i) => {
    const on = checked[i] ? ' on' : '';
    const hit = i === focus;
    return `<li class="cseg${on}${hit ? ' hit' : ''}">
      <label><input type="checkbox" data-seg="${i}" ${checked[i] ? 'checked' : ''}><span class="box"></span>
        <span class="cn"><b>${pad(i + 1)}</b> ${esc(s.name)}</span>
        <span class="ct">${esc(s.time)}</span><span class="cm">${s.dur} min</span>
      </label>
    </li>`;
  }).join('');
  const matCheck = m.materials.map((x, i) => {
    const on = !!ticks['m' + i] ? ' on' : '';
    return `<li class="cseg${on}"><label><input type="checkbox" data-mat="${i}" ${ticks['m' + i] ? 'checked' : ''}><span class="box"></span>
      <span class="cn">${esc(x)}</span></label></li>`;
  }).join('');

  const active = m.segments[focus];
  const actDetail = active.what !== undefined
    ? `<div class="pair"><h4>What happens</h4><p>${esc(active.what)}</p></div>
       <div class="pair move"><h4>Teacher move</h4><p>${esc(active.move)}</p></div>`
    : `<div class="pair"><h4>Teacher does</h4><p>${esc(active.teacher)}</p></div>
       <div class="pair"><h4>Students do</h4><p>${esc(active.students)}</p></div>
       <div class="pair anchor"><h4>Anchor</h4><p>${esc(active.anchor)}</p></div>`;

  const segmentsTip = doneMin === 0 ? `0 of ${total} min budgeted` : `${doneMin} of ${total} min budgeted`;
  const pctDone = `${Math.round((doneMin / Math.max(1, total)) * 100)}%`;
  const remain = total - doneMin;

  const extras = m.extras.map((x) => {
    return `<section class="xcard-pane tone-${x.tone}"><h3>${esc(x.heading)}</h3>${blocksHtml(x.blocks)}</section>`;
  }).join('');

  state._cockpit = { doneMin, total, remain };

  return `${topbar(m)}
  <div class="page page-c">
    <header class="panel headband headband-c">
      ${overlay(`${m.identity} &middot; Lesson ${m.lessonNo} &middot; live view`, m.title)}
      <div class="chips">${metaChips(m)}</div>
      <div class="budgetbar" role="progressbar" aria-valuenow="${doneMin}" aria-valuemin="0" aria-valuemax="${total}">
        <div class="bfill" style="width:${pctDone}"></div>
      </div>
      <p class="budword"><b>${segmentsTip}</b> · ${remain} min still to plan for · tick segments as you go</p>
    </header>

    <div class="cockpit">
      <aside class="pane left">
        <section class="paneblock">
          <h2 class="pn">During class — tap a segment to focus, tick to budget</h2>
          <ol class="csegs">${segCheck}</ol>
        </section>
        <section class="paneblock">
          <h2 class="pn">Materials</h2>
          <ul class="csegs mats">${matCheck}</ul>
        </section>
      </aside>

      <section class="pane right">
        <div class="focusseg paneblock" id="focusseg">
          <p class="fov">Segment ${pad(focus + 1)} of ${m.segments.length} &middot; ${esc(active.time)} &middot; ${active.dur} min</p>
          <h2 class="fh">${esc(active.name)}</h2>
          ${actDetail}
        </div>
        <div class="paneblock">
          <h2 class="pn">Objectives</h2>
          <ol class="seam">${m.objectives.map((o) => `<li>${esc(o)}</li>`).join('')}</ol>
        </div>
        ${extras}
      </section>
    </div>
  </div>`;
}

/* ---------------------------- render + wiring ---------------------------- */

const RENDERERS = { A: renderA, B: renderB, C: renderC };

function render() {
  const m = LESSONS[state.lesson];
  document.documentElement.setAttribute('data-subject', m.id);
  $('#root').innerHTML = RENDERERS[state.variant](m);
  document.title = `${m.identity} · Lesson ${m.lessonNo} · ${VARIANTS[state.variant]} — lesson-plan prototype`;
  $('#vlabel').textContent = `${m.identity.slice(0, 2).toUpperCase()}${m.lessonNo} · ${state.variant} — ${VARIANTS[state.variant]}`;
  $('#state-detail').textContent = state._cockpit
    ? `${state._cockpit.doneMin}/${state._cockpit.total} min ticked`
    : `${m.segments.length} segments · ${totalMin(m)} min`;
  syncSwitcher();
  wire();
}

function syncSwitcher() {
  document.documentElement.classList.toggle('embed', new URLSearchParams(location.search).has('embed'));
}

function setState(patch) {
  Object.assign(state, patch);
  const p = new URLSearchParams(location.search);
  p.set('lesson', state.lesson);
  p.set('variant', state.variant);
  history.replaceState(null, '', '?' + p.toString());
  render();
}

function wire() {
  const inEdit = () => {
    const el = document.activeElement;
    return el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);
  };

  document.querySelectorAll('.cseg input[data-seg]').forEach((cb) =>
    cb.addEventListener('change', () => {
      const i = +cb.dataset.seg;
      state.ticks[state.lesson][i] = cb.checked;
      render();
    }));

  document.querySelectorAll('.cseg input[data-mat]').forEach((cb) =>
    cb.addEventListener('change', () => {
      state.ticks[state.lesson]['m' + cb.dataset.mat] = cb.checked;
      render();
    }));

  document.querySelectorAll('.cseg[data-seg]').forEach((li) =>
    li.addEventListener('click', (e) => {
      if (e.target.classList.contains('box')) {
        const cb = li.querySelector('input');
        cb.checked = !cb.checked;
        cb.dispatchEvent(new Event('change'));
        return;
      }
      if (e.target.tagName === 'INPUT') return;
      const cb = li.querySelector('input[data-seg]');
      if (cb) {
        state.focus = state.lesson + cb.dataset.seg;
        render();
        const f = document.querySelector('#focusseg');
        if (f) f.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }));

  document.addEventListener('keydown', function onKey(e) {
    if (inEdit()) return;
    if (e.key === 'ArrowLeft') { e.preventDefault(); const l = 'CBA'; setState({ variant: l[l.indexOf(state.variant)] }); }
    if (e.key === 'ArrowRight') { e.preventDefault(); const l = 'ABC'; setState({ variant: l[(l.indexOf(state.variant) + 1) % 3] }); }
    if (e.key === '1' || e.key === '2') { const l = ['ember', 'tide']; setState({ lesson: l[(+e.key - 1) % 2] }); }
  });

  $('#vprev').addEventListener('click', () => { const l = 'CBA'; setState({ variant: l[l.indexOf(state.variant)] }); });
  $('#vnext').addEventListener('click', () => { const l = 'ABC'; setState({ variant: l[(l.indexOf(state.variant) + 1) % 3] }); });
}

render();