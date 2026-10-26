// Study hub app: routing + views.
(function () {
  var esc = TT.esc, shuffle = TT.shuffle, fb = TT.fb;
  var $main = document.getElementById('main');
  var onKey = null, timerId = null;
  var LETTERS = ['A', 'B', 'C', 'D'];

  // ---------- data helpers ----------
  function topic(id) { return SD.topics.filter(function (t) { return t.id === id; })[0]; }
  function examined() { return SD.topics.filter(function (t) { return t.examined; }); }
  function byTopic(arr, tid) { return arr.filter(function (x) { return x.topic === tid; }); }
  function section(id) { var r = null; SD.topics.forEach(function (t) { (t.notes || []).forEach(function (n) { if (n.id === id) r = { t: t, n: n }; }); }); return r; }
  function dot(t) { return '<span class="dot" style="background:' + (t ? t.color : '#888') + '"></span>'; }
  function pct(a, b) { return b ? Math.round(100 * a / b) : 0; }
  function bar(p) { return '<div class="bar"><i style="width:' + Math.max(0, Math.min(100, p)) + '%"></i></div>'; }
  function strip(h) { return String(h || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(); }
  function params() { var q = (location.hash.split('?')[1] || ''), o = {}; q.split('&').forEach(function (kv) { if (!kv) return; var p = kv.split('='); o[p[0]] = decodeURIComponent(p[1] || ''); }); return o; }

  function stats(tid) {
    var cards = byTopic(SD.cards, tid), mcq = byTopic(SD.mcq, tid), saq = byTopic(SD.saq, tid), t = topic(tid), notes = (t && t.notes) || [];
    var mastered = cards.filter(function (c) { return Store.cardMastered(c.id); }).length;
    var seenCards = cards.filter(function (c) { return Store.card(c.id); }).length;
    var attempted = 0, lastRight = 0, right = 0, seen = 0;
    mcq.forEach(function (q) { var s = Store.mcq(q.id); if (s) { attempted++; seen += s.seen; right += s.right; if (s.last) lastRight++; } });
    var saqPct = 0, saqDone = 0;
    saq.forEach(function (q) { var s = Store.saq(q.id); if (s) { saqDone++; saqPct += s.best / q.marks; } });
    var read = notes.filter(function (n) { return Store.isRead(n.id); }).length;
    var ready = Math.round(100 * (0.4 * (mcq.length ? lastRight / mcq.length : 0) + 0.3 * (cards.length ? mastered / cards.length : 0) + 0.15 * (saq.length ? saqPct / saq.length : 0) + 0.15 * (notes.length ? read / notes.length : 0)));
    return { cards: cards.length, mastered: mastered, seenCards: seenCards, mcq: mcq.length, attempted: attempted, lastRight: lastRight, acc: pct(right, seen), seen: seen, saq: saq.length, saqDone: saqDone, saqAvg: saqDone ? Math.round(100 * saqPct / saqDone) : 0, notes: notes.length, read: read, ready: ready };
  }
  function weakOutcomes(limit) {
    var agg = {};
    SD.mcq.forEach(function (q) { var s = Store.mcq(q.id); if (!s || !q.outcome) return; var a = agg[q.outcome] || (agg[q.outcome] = { seen: 0, right: 0 }); a.seen += s.seen; a.right += s.right; });
    SD.cards.forEach(function (c) { var s = Store.card(c.id); if (!s || !c.outcome) return; var a = agg[c.outcome] || (agg[c.outcome] = { seen: 0, right: 0 }); a.seen += s.reps; a.right += Math.max(0, s.reps - s.lapses); });
    return Object.keys(agg).map(function (k) { var a = agg[k]; return { id: k, seen: a.seen, acc: pct(a.right, a.seen) }; })
      .filter(function (x) { return x.seen >= 2 && x.acc < 80 && section(x.id); })
      .sort(function (a, b) { return a.acc - b.acc; }).slice(0, limit || 8);
  }

  // ---------- chrome ----------
  function examDate() { return new Date(Store.state.examDate); }
  function renderCountdown() {
    var ms = examDate() - new Date(), el = document.getElementById('countdown');
    if (ms <= 0) { el.innerHTML = '<b>Exam time!</b>Good luck.'; return; }
    var d = Math.floor(ms / 864e5), h = Math.floor(ms % 864e5 / 36e5), m = Math.floor(ms % 36e5 / 6e4);
    el.innerHTML = '<b>' + d + 'd ' + h + 'h ' + m + 'm</b>until the yearly · ' + examDate().toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' });
  }
  function renderNav() {
    var h = location.hash || '#/';
    var items = [
      ['grp', 'Start'], ['#/', 'Dashboard'], ['#/plan', 'Study plan & exam tips'],
      ['grp', 'Learn']
    ];
    var html = '';
    items.forEach(function (it) { html += it[0] === 'grp' ? '<div class="grp">' + it[1] + '</div>' : '<a href="' + it[0] + '"' + (h === it[0] ? ' class="on"' : '') + '>' + it[1] + '</a>'; });
    examined().forEach(function (t) { var s = stats(t.id); html += '<a href="#/topic/' + t.id + '"' + (h.indexOf('#/topic/' + t.id) === 0 ? ' class="on"' : '') + '>' + dot(t) + esc(t.short) + '<span class="pct">' + s.ready + '%</span></a>'; });
    html += '<a href="#/cram"' + (h === '#/cram' ? ' class="on"' : '') + '>Cram sheets (print)</a>';
    html += '<div class="grp">Practise</div>';
    [['#/cards', 'Flashcards'], ['#/quiz', 'Quiz (multiple choice)'], ['#/written', 'Written answers'], ['#/tools', 'Interactive tools'], ['#/mock', 'Mock exam'], ['#/papers', 'Past papers']].forEach(function (it) {
      html += '<a href="' + it[0] + '"' + (h.indexOf(it[0]) === 0 ? ' class="on"' : '') + '>' + it[1] + '</a>';
    });
    var extra = SD.topics.filter(function (t) { return !t.examined; });
    if (extra.length) {
      html += '<div class="grp">Not on the yearly</div>';
      extra.forEach(function (t) { html += '<a href="#/topic/' + t.id + '"' + (h.indexOf('#/topic/' + t.id) === 0 ? ' class="on"' : '') + '>' + dot(t) + esc(t.short || t.name) + '</a>'; });
    }
    html += '<div class="grp">You</div><a href="#/progress"' + (h === '#/progress' ? ' class="on"' : '') + '>Progress & settings</a>';
    document.getElementById('nav').innerHTML = html;
  }

  // ---------- views ----------
  var V = {};

  V.dashboard = function () {
    var ex = examined(), tot = { cards: 0, mastered: 0, mcq: 0, att: 0 }, readyAvg = 0;
    var rows = ex.map(function (t) { var s = stats(t.id); tot.cards += s.cards; tot.mastered += s.mastered; tot.mcq += s.mcq; tot.att += s.attempted; readyAvg += s.ready; return { t: t, s: s }; });
    readyAvg = ex.length ? Math.round(readyAvg / ex.length) : 0;
    var weakest = rows.slice().sort(function (a, b) { return a.s.ready - b.s.ready; })[0];
    var dueCount = SD.cards.filter(function (c) { var t = topic(c.topic); return t && t.examined && Store.card(c.id) && Store.cardDue(c.id); }).length;
    var wrong = SD.mcq.filter(function (q) { var s = Store.mcq(q.id); return s && !s.last; }).length;
    var weak = weakOutcomes(6);
    var html = '<h1>Yearly exam dashboard</h1><p class="sub">Task 4 · 80 marks · 90 min + 5 min reading · 20 multiple choice + 60 marks written · worth 35%</p>' +
      '<div class="grid g4">' +
      '<div class="tile"><p>Overall readiness</p><div class="stat">' + readyAvg + '%</div>' + bar(readyAvg) + '</div>' +
      '<div class="tile"><p>Flashcards mastered</p><div class="stat">' + tot.mastered + '<span class="muted small"> / ' + tot.cards + '</span></div>' + bar(pct(tot.mastered, tot.cards), 'var(--good)') + '</div>' +
      '<div class="tile"><p>MCQs attempted</p><div class="stat">' + tot.att + '<span class="muted small"> / ' + tot.mcq + '</span></div>' + bar(pct(tot.att, tot.mcq), 'var(--warn)') + '</div>' +
      '<div class="tile"><p>Mock exams done</p><div class="stat">' + Store.state.mocks.length + '</div><p>' + (Store.state.mocks.length ? 'Last: ' + Store.state.mocks[Store.state.mocks.length - 1].pct + '%' : 'Do one on your last study day') + '</p></div></div>' +
      '<h2>Do this next</h2><div class="grid g3">' +
      (weakest ? '<a class="tile" href="#/topic/' + weakest.t.id + '"><h3>' + dot(weakest.t) + 'Weakest: ' + esc(weakest.t.short) + '</h3><p>Readiness ' + weakest.s.ready + '%. Read the notes, then quiz it.</p></a>' : '') +
      '<a class="tile" href="#/cards"><h3>Flashcards</h3><p>' + (dueCount ? dueCount + ' cards due for review now.' : 'Start a spaced-repetition session.') + '</p></a>' +
      '<a class="tile" href="#/quiz?mode=smart&n=20"><h3>Smart quiz (20)</h3><p>Prioritises questions you haven\'t seen or got wrong.</p></a>' +
      (SD.mcq.some(function (q) { return q.pic; }) ? '<a class="tile" href="#/quiz?mode=pics&n=20"><h3>Picture quiz</h3><p>Questions on the diagrams and photos from your slides and notes, like the exam\'s diagram questions.</p></a>' : '') +
      (wrong ? '<a class="tile" href="#/quiz?mode=wrong&n=20"><h3>Fix mistakes</h3><p>' + wrong + ' question(s) you last got wrong.</p></a>' : '') +
      '<a class="tile" href="#/written"><h3>Written answers</h3><p>Practise 60% of the exam: the short/extended responses, marked against criteria.</p></a>' +
      '<a class="tile" href="#/tools"><h3>Punnett, pedigrees, galvanic cells…</h3><p>Unlimited generated practice for the skills that always appear.</p></a></div>' +
      '<h2>Topics on the yearly</h2><div class="grid g2">' + rows.map(function (r) {
        return '<a class="tile" href="#/topic/' + r.t.id + '"><h3>' + dot(r.t) + esc(r.t.name) + '<span class="spacer"></span><span class="tag">' + r.s.ready + '%</span></h3><p>' + esc(r.t.scope || '') + '</p>' +
          '<div class="small muted" style="margin-top:8px">Notes ' + r.s.read + '/' + r.s.notes + ' · Cards ' + r.s.mastered + '/' + r.s.cards + ' · MCQ ' + r.s.lastRight + '/' + r.s.mcq + ' right · Written ' + r.s.saqDone + '/' + r.s.saq + '</div>' + bar(r.s.ready, r.t.color) + '</a>';
      }).join('') + '</div>';
    if (weak.length) html += '<h2>Weak spots (from your answers)</h2><div class="panel"><ul>' + weak.map(function (w) { var s = section(w.id); return '<li>' + dot(s.t) + ' <a href="#/topic/' + s.t.id + '/' + w.id + '">' + esc(strip(s.n.title)) + '</a> – ' + w.acc + '% correct · <a href="#/quiz?outcome=' + w.id + '">quiz it</a></li>'; }).join('') + '</ul></div>';
    html += '<p class="small muted">Not on this exam (per the Task 4 notification): Objects in Motion, Chemical Reactions, and Genetics outcomes 1–5 (DNA, mitosis/meiosis background). They are still included under “Not on the yearly” if you have spare time.</p>';
    $main.innerHTML = html;
  };

  function imgsFor(outcome) { return (SD.images || []).filter(function (im) { return im.outcome === outcome; }); }
  function figHTML(im, group, big) {
    return '<figure class="fig' + (big ? ' big' : '') + '"><button class="fig-img zoom" data-g="' + group + '" data-src="' + im.src + '" data-cap="' + esc(im.caption) + '" data-from="' + esc(im.from) + '"><img src="' + im.src + '" alt="" loading="lazy"></button><figcaption>' + im.caption + '</figcaption></figure>';
  }
  // One inline multiple-choice question for a note section; "Another" draws a new one.
  function quickCheck(box, outcome) {
    var pool = SD.mcq.filter(function (q) { return q.outcome === outcome; });
    if (!pool.length) { box.remove(); return; }
    var fresh = pool.filter(function (q) { var s = Store.mcq(q.id); return !s || !s.last; });
    var q = TT.pick(fresh.length ? fresh : pool), order = shuffle([0, 1, 2, 3]);
    box.innerHTML = '<div class="qc-head"><span class="kicker">Quick check</span><span class="spacer"></span><button class="btn sm" data-another>Another</button></div>' +
      '<div class="q-text">' + q.q + '</div><div class="opts">' + order.map(function (oi, k) { return '<button class="opt" data-k="' + k + '"><span class="l">' + LETTERS[k] + '</span><span>' + q.options[oi] + '</span></button>'; }).join('') + '</div><div class="qc-after"></div>';
    box.querySelector('[data-another]').onclick = function () { quickCheck(box, outcome); };
    box.querySelectorAll('.opt').forEach(function (b) {
      b.onclick = function () {
        if (box.dataset.done === q.id) return; box.dataset.done = q.id;
        var k = +b.dataset.k, ok = order[k] === q.answer; Store.recordMcq(q.id, ok); renderNav();
        box.querySelectorAll('.opt').forEach(function (o, kk) { o.classList.add(order[kk] === q.answer ? 'right' : kk === k ? 'wrong' : 'dim'); });
        box.querySelector('.qc-after').innerHTML = '<div class="explain"><b>' + (ok ? '✔ Correct.' : '✘ Not quite.') + '</b> ' + (q.explain || '') + '</div>';
      };
    });
  }

  V.topic = function (tid, secId) {
    var t = topic(tid);
    if (!t) { $main.innerHTML = '<p>Topic not found (its content file may have failed to load).</p>'; return; }
    var s = stats(tid), p = params(), tab = p.tab || 'notes', nImg = byTopic(SD.images || [], tid).length, testme = localStorage.getItem('sy-testme') === '1';
    var head = '<h1>' + dot(t) + ' ' + esc(t.name) + '</h1><p class="sub">' + (t.examined ? '<span class="tag good">On the yearly</span> ' : '<span class="tag warn">Not on the yearly</span> ') + esc(t.scope || '') + '</p>' +
      '<div class="row no-print" style="margin-bottom:16px"><a class="btn' + (tab === 'notes' ? ' pri' : '') + '" href="#/topic/' + tid + '">Notes</a><a class="btn' + (tab === 'cram' ? ' pri' : '') + '" href="#/topic/' + tid + '?tab=cram">Cram sheet</a>' +
      (nImg ? '<a class="btn' + (tab === 'slides' ? ' pri' : '') + '" href="#/topic/' + tid + '?tab=slides">Pictures (' + nImg + ')</a>' : '') +
      '<span class="spacer"></span><a class="btn" href="#/cards?topic=' + tid + '">Cards (' + s.cards + ')</a><a class="btn" href="#/quiz?topic=' + tid + '&n=15">Quiz (' + s.mcq + ')</a><a class="btn" href="#/written?topic=' + tid + '">Written (' + s.saq + ')</a></div>';
    if (tab === 'cram') { $main.innerHTML = head + '<div class="note note-body">' + (t.cram || '<p class="muted">No cram sheet.</p>') + '</div><button class="btn no-print" onclick="window.print()">Print</button>'; return; }
    if (tab === 'slides') {
      var pics = (t.notes || []).filter(function (n) { return imgsFor(n.id).length; }).map(function (n) {
        return '<h2>' + esc(strip(n.title)) + '</h2><div class="gallery">' + imgsFor(n.id).map(function (im) { return figHTML(im, 'slides', true); }).join('') + '</div>';
      }).join('');
      var npq = SD.mcq.filter(function (q) { return q.pic && q.topic === tid; }).length;
      $main.innerHTML = head + '<p class="sub">Diagrams and photos from your teacher\'s slides and your notes. Click any picture to zoom in, then use ← → to flip through.' +
        (npq ? ' <a href="#/quiz?mode=pics&topics=' + tid + '&n=20">Picture quiz for this topic (' + npq + ')</a>' : '') + '</p>' + pics;
      return;
    }
    var toc = (t.notes || []).map(function (n) { return '<a href="#/topic/' + tid + '/' + n.id + '" class="' + (Store.isRead(n.id) ? 'done' : '') + '">' + esc(strip(n.title)) + '</a>'; }).join('');
    var body = (t.notes || []).map(function (n) {
      var nq = SD.mcq.filter(function (q) { return q.outcome === n.id; }).length, nc = SD.cards.filter(function (c) { return c.outcome === n.id; }).length, ims = imgsFor(n.id);
      return '<section class="note" id="' + n.id + '"><h3>' + n.title + '</h3><div class="note-body">' + n.html + '</div>' +
        (ims.length ? '<div class="figs-head kicker">Pictures from your slides &amp; notes</div><div class="figs">' + ims.map(function (im) { return figHTML(im, n.id); }).join('') + '</div>' : '') +
        (nq ? '<div class="qc" data-qc="' + n.id + '"></div>' : '') +
        '<div class="note-foot">' +
        '<label class="chk"><input type="checkbox" data-read="' + n.id + '"' + (Store.isRead(n.id) ? ' checked' : '') + '> I\'ve learnt this</label><span class="spacer"></span>' +
        (nq ? '<a class="btn sm" href="#/quiz?outcome=' + n.id + '">Quiz this (' + nq + ')</a>' : '') + (nc ? '<a class="btn sm" href="#/cards?outcome=' + n.id + '">Cards (' + nc + ')</a>' : '') + '</div></section>';
    }).join('');
    var tm = '<div class="testme-bar no-print"><label class="switch"><input type="checkbox" id="testme"' + (testme ? ' checked' : '') + '><span></span> Test me: hide the key terms</label>' +
      '<span class="muted small" id="tmHint"' + (testme ? '' : ' hidden') + '>Say each hidden word out loud, then click it to check. <button class="btn sm" id="tmAll">Reveal all</button> <button class="btn sm" id="tmHide">Hide again</button></span></div>';
    $main.innerHTML = head + tm + '<div class="notes-layout' + (testme ? ' testme' : '') + '" id="notesWrap"><nav class="toc panel">' + toc + '</nav><div>' + body + '</div></div>';
    $main.querySelectorAll('[data-read]').forEach(function (cb) { cb.onchange = function () { Store.markRead(cb.dataset.read, cb.checked); renderNav(); var a = $main.querySelector('.toc a[href$="/' + cb.dataset.read + '"]'); if (a) a.className = cb.checked ? 'done' : ''; }; });
    $main.querySelectorAll('[data-qc]').forEach(function (box) { quickCheck(box, box.dataset.qc); });
    var wrap = document.getElementById('notesWrap');
    wrap.querySelectorAll('.note-body b, .note-body strong').forEach(function (b) { var tx = b.textContent.trim(); if (tx && tx.length <= 60 && !/:$/.test(tx)) b.classList.add('blank'); });
    document.getElementById('testme').onchange = function () {
      localStorage.setItem('sy-testme', this.checked ? '1' : '0');
      wrap.classList.toggle('testme', this.checked); document.getElementById('tmHint').hidden = !this.checked;
      wrap.querySelectorAll('.shown').forEach(function (b) { b.classList.remove('shown'); });
    };
    document.getElementById('tmAll').onclick = function () { wrap.querySelectorAll('.blank').forEach(function (b) { b.classList.add('shown'); }); };
    document.getElementById('tmHide').onclick = function () { wrap.querySelectorAll('.shown').forEach(function (b) { b.classList.remove('shown'); }); };
    wrap.addEventListener('click', function (e) {
      var b = wrap.classList.contains('testme') && e.target.closest('.blank');
      if (b) b.classList.toggle('shown');
    });
    if (secId) { var el = document.getElementById(secId); if (el) setTimeout(function () { el.scrollIntoView(); }, 0); }
    else window.scrollTo(0, 0);
  };

  V.cram = function () {
    $main.innerHTML = '<h1>Cram sheets</h1><p class="sub no-print">Every topic\'s last-minute summary on one page. Use your browser\'s Print → “Save as PDF” to keep a copy.</p><button class="btn no-print" onclick="window.print()">Print / save PDF</button>' +
      examined().map(function (t) { return '<h2>' + dot(t) + ' ' + esc(t.name) + '</h2><div class="note note-body">' + (t.cram || '') + '</div>'; }).join('');
  };

  // ---------- flashcards ----------
  V.cards = function () {
    var p = params();
    if (p.outcome || p.go) return startCards(p);
    var chosen = p.topic ? [p.topic] : examined().map(function (t) { return t.id; });
    function counts() {
      var cs = SD.cards.filter(function (c) { return chosen.indexOf(c.topic) >= 0; });
      return { all: cs.length, due: cs.filter(function (c) { return Store.card(c.id) && Store.cardDue(c.id); }).length, fresh: cs.filter(function (c) { return !Store.card(c.id); }).length, hard: cs.filter(function (c) { var s = Store.card(c.id); return s && s.lapses > 0 && s.box < 2; }).length };
    }
    function draw() {
      var c = counts();
      $main.innerHTML = '<h1>Flashcards</h1><p class="sub">Spaced repetition tuned for a 3-day cram: cards you know drift away for hours/days, cards you miss come back within minutes.</p>' +
        '<div class="panel"><h3>Topics</h3><div class="chips">' + SD.topics.map(function (t) { return '<span class="chip' + (chosen.indexOf(t.id) >= 0 ? ' on' : '') + '" data-t="' + t.id + '">' + esc(t.short) + (t.examined ? '' : ' (extra)') + '</span>'; }).join('') + '</div>' +
        '<h3>Session</h3><div class="row">' +
        '<button class="btn pri" data-go="smart">Smart session (' + Math.min(30, c.due + c.fresh) + ')</button>' +
        '<button class="btn" data-go="due"' + (c.due ? '' : ' disabled') + '>Due only (' + c.due + ')</button>' +
        '<button class="btn" data-go="hard"' + (c.hard ? '' : ' disabled') + '>Cards I missed (' + c.hard + ')</button>' +
        '<button class="btn" data-go="all">Cram all (' + c.all + ')</button></div>' +
        '<p class="small muted">Keys: <span class="kbd">Space</span> flip · <span class="kbd">←</span> / <span class="kbd">1</span> didn\'t get it · <span class="kbd">→</span> / <span class="kbd">2</span> got it</p></div>';
      $main.querySelectorAll('[data-t]').forEach(function (ch) { ch.onclick = function () { var i = chosen.indexOf(ch.dataset.t); if (i >= 0) chosen.splice(i, 1); else chosen.push(ch.dataset.t); draw(); }; });
      $main.querySelectorAll('[data-go]').forEach(function (b) { b.onclick = function () { startCards({ go: b.dataset.go, topics: chosen.join(',') }); }; });
    }
    draw();
  };
  function startCards(p) {
    var pool = SD.cards.filter(function (c) { return p.outcome ? c.outcome === p.outcome : (p.topics ? p.topics.split(',') : [p.topic || '']).indexOf(c.topic) >= 0; });
    if (!p.topics && !p.topic && !p.outcome) pool = SD.cards.filter(function (c) { var t = topic(c.topic); return t && t.examined; });
    var mode = p.go || 'all', q;
    if (mode === 'due') q = pool.filter(function (c) { return Store.card(c.id) && Store.cardDue(c.id); });
    else if (mode === 'hard') q = pool.filter(function (c) { var s = Store.card(c.id); return s && s.lapses > 0 && s.box < 2; });
    else if (mode === 'smart') {
      var due = shuffle(pool.filter(function (c) { return Store.card(c.id) && Store.cardDue(c.id); }));
      var fresh = shuffle(pool.filter(function (c) { return !Store.card(c.id); }));
      q = due.concat(fresh).slice(0, 30);
      if (!q.length) q = shuffle(pool).slice(0, 20);
    } else q = shuffle(pool);
    q = q.slice(); var total = q.length, done = 0, again = 0, flipped = false, busy = false;
    function tilt(id) { var h = 0; for (var i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0; return ((Math.abs(h) % 25) - 12) / 10; }
    function show() {
      busy = false; flipped = false;
      if (!q.length) {
        onKey = null;
        $main.innerHTML = '<div class="fc-top"><span class="kicker">Flashcards</span></div><div class="deck-done"><div class="flash-card done-card" style="--tilt:-1deg"><div class="face front"><div class="fc-body">That\'s the pile.<br><span class="fc-small">' + done + ' cards flipped · ' + again + ' sent back to the pile</span></div></div></div></div>' +
          '<div class="row" style="justify-content:center;margin-top:28px"><a class="btn pri" href="#/cards">Another session</a><a class="btn" href="#/quiz?mode=smart&n=15">Quiz now</a></div>';
        renderNav(); return;
      }
      var c = q[0], t = topic(c.topic), st = Store.card(c.id), sec = c.outcome && section(c.outcome);
      var head = '<div class="fc-head"><span>' + esc(t ? t.short : '') + '</span><span>' + (st ? 'seen ' + st.reps + '×' : 'new') + '</span></div>';
      $main.innerHTML = '<div class="fc-top"><span class="kicker">Flashcards' + (t ? ' · ' + esc(t.short) : '') + '</span><span class="spacer"></span><span class="fc-count">' + (total - q.length + 1) + ' / ' + total + '</span><a class="btn sm" href="#/cards">End</a></div>' +
        '<div class="progress-line"><i style="width:' + pct(total - q.length, total) + '%"></i></div>' +
        '<div class="deck' + (q.length > 1 ? ' d1' : '') + (q.length > 2 ? ' d2' : '') + '">' +
        '<div class="flash-card" id="fc" style="--tilt:' + tilt(c.id) + 'deg" tabindex="0" role="button" aria-label="Flip card">' +
        '<div class="face front">' + head + '<div class="fc-body">' + c.front + '</div><div class="fc-hint">tap or press Space to flip</div></div>' +
        '<div class="face back">' + head + '<div class="fc-q">' + c.front + '</div><div class="fc-body">' + c.back + '</div></div>' +
        '</div></div>' +
        '<div class="rate" id="rate" hidden><button class="btn" data-r="0">Didn\'t get it<small>← or 1 · back in the pile</small></button><button class="btn pri" data-r="2">Got it<small>→ or 2 · next card</small></button></div>' +
        (sec ? '<p class="fc-from">from <a href="#/topic/' + c.topic + '/' + c.outcome + '">' + esc(strip(sec.n.title)) + '</a></p>' : '');
      document.getElementById('fc').onclick = flip;
      $main.querySelectorAll('[data-r]').forEach(function (b) { b.onclick = function () { rate(+b.dataset.r); }; });
    }
    function flip() {
      var fc = document.getElementById('fc'); if (!fc || busy) return;
      flipped = !flipped; fc.classList.toggle('flipped', flipped);
      document.getElementById('rate').hidden = false;
    }
    function rate(r) {
      if (busy) return; busy = true;
      var c = q.shift(); Store.rateCard(c.id, r); done++;
      if (r === 0) { again++; q.splice(Math.min(3, q.length), 0, c); }
      var fc = document.getElementById('fc');
      fc.classList.add(r === 0 ? 'toss-back' : 'toss');
      setTimeout(function () { if (document.getElementById('fc') === fc) show(); }, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 280);
    }
    onKey = function (e) {
      if (e.key === ' ') { e.preventDefault(); flip(); }
      else if (!document.getElementById('rate').hidden && (e.key === '1' || e.key === 'ArrowLeft')) rate(0);
      else if (!document.getElementById('rate').hidden && (e.key === '2' || e.key === 'ArrowRight')) rate(2);
    };
    show();
  }

  // ---------- quiz ----------
  function smartPick(pool, n) {
    var w = pool.map(function (q) { var s = Store.mcq(q.id); var wt = !s ? 3 : !s.last ? 6 : s.streak >= 2 ? 0.3 : 1; return { q: q, k: Math.pow(Math.random(), 1 / wt) }; });
    return w.sort(function (a, b) { return b.k - a.k; }).slice(0, n).map(function (x) { return x.q; });
  }
  V.quiz = function () {
    var p = params();
    if (p.outcome || p.mode || p.go) return runQuiz(p);
    var chosen = p.topic ? [p.topic] : examined().map(function (t) { return t.id; }), n = +(p.n || 20), mode = 'smart';
    function draw() {
      var pool = SD.mcq.filter(function (q) { return chosen.indexOf(q.topic) >= 0; });
      var wrong = pool.filter(function (q) { var s = Store.mcq(q.id); return s && !s.last; }).length, unseen = pool.filter(function (q) { return !Store.mcq(q.id); }).length, pics = pool.filter(function (q) { return q.pic; }).length;
      $main.innerHTML = '<h1>Multiple-choice quiz</h1><p class="sub">Section A is 20 marks. Every question has a worked explanation – read it even when you\'re right.</p>' +
        '<div class="panel"><h3>Topics</h3><div class="chips">' + SD.topics.map(function (t) { return '<span class="chip' + (chosen.indexOf(t.id) >= 0 ? ' on' : '') + '" data-t="' + t.id + '">' + esc(t.short) + ' (' + byTopic(SD.mcq, t.id).length + ')</span>'; }).join('') + '</div>' +
        '<h3>Mode</h3><div class="chips">' + [['smart', 'Smart (unseen + mistakes first)'], ['wrong', 'Only my mistakes (' + wrong + ')'], ['unseen', 'Only unseen (' + unseen + ')'], ['pics', 'Picture questions (' + pics + ')'], ['random', 'Random']].map(function (m) { return '<span class="chip' + (mode === m[0] ? ' on' : '') + '" data-m="' + m[0] + '">' + m[1] + '</span>'; }).join('') + '</div>' +
        '<h3>Questions</h3><div class="chips">' + [10, 20, 40, 9999].map(function (k) { return '<span class="chip' + (n === k ? ' on' : '') + '" data-n="' + k + '">' + (k === 9999 ? 'All' : k) + '</span>'; }).join('') + '</div>' +
        '<p style="margin-top:16px"><button class="btn pri" data-go>Start</button> <span class="muted small">' + pool.length + ' questions in pool · keys <span class="kbd">1-4</span>/<span class="kbd">A-D</span> answer, <span class="kbd">Enter</span> next</span></p></div>';
      $main.querySelectorAll('[data-t]').forEach(function (ch) { ch.onclick = function () { var i = chosen.indexOf(ch.dataset.t); if (i >= 0) chosen.splice(i, 1); else chosen.push(ch.dataset.t); draw(); }; });
      $main.querySelectorAll('[data-m]').forEach(function (ch) { ch.onclick = function () { mode = ch.dataset.m; draw(); }; });
      $main.querySelectorAll('[data-n]').forEach(function (ch) { ch.onclick = function () { n = +ch.dataset.n; draw(); }; });
      $main.querySelector('[data-go]').onclick = function () { runQuiz({ go: 1, mode: mode, n: n, topics: chosen.join(',') }); };
    }
    draw();
  };
  function runQuiz(p) {
    var pool;
    if (p.outcome) pool = SD.mcq.filter(function (q) { return q.outcome === p.outcome; });
    else {
      var tids = p.topics ? p.topics.split(',') : p.topic ? [p.topic] : examined().map(function (t) { return t.id; });
      pool = SD.mcq.filter(function (q) { return tids.indexOf(q.topic) >= 0; });
    }
    var n = +(p.n || 20), mode = p.mode || 'smart', list;
    if (mode === 'wrong') list = shuffle(pool.filter(function (q) { var s = Store.mcq(q.id); return s && !s.last; })).slice(0, n);
    else if (mode === 'unseen') list = shuffle(pool.filter(function (q) { return !Store.mcq(q.id); })).slice(0, n);
    else if (mode === 'pics') list = shuffle(pool.filter(function (q) { return q.pic; })).slice(0, n);
    else if (mode === 'random' || p.outcome) list = shuffle(pool).slice(0, n);
    else list = smartPick(pool, n);
    if (!list.length) { $main.innerHTML = '<h1>Nothing to quiz</h1><p>No questions match. <a href="#/quiz">Back</a></p>'; return; }
    var i = 0, results = [], answered = false, order;
    function show() {
      var q = list[i], t = topic(q.topic);
      order = shuffle([0, 1, 2, 3].slice(0, q.options.length)); answered = false;
      $main.innerHTML = '<div class="row"><h1 style="margin:0">Quiz</h1><span class="spacer"></span><span class="muted small">Question ' + (i + 1) + ' / ' + list.length + ' · score ' + results.filter(Boolean).length + '</span> <a class="btn sm" href="#/quiz">Quit</a></div>' +
        '<div class="progress-line"><i style="width:' + pct(i, list.length) + '%"></i></div><div class="panel"><div class="small muted">' + dot(t) + ' ' + esc(t ? t.short : '') + (q.source ? ' · <span class="tag">' + esc(q.source) + '</span>' : '') + '</div>' +
        '<div class="q-text">' + q.q + '</div><div class="opts">' + order.map(function (oi, k) { return '<button class="opt" data-k="' + k + '"><span class="l">' + LETTERS[k] + '</span><span>' + q.options[oi] + '</span></button>'; }).join('') + '</div><div id="after"></div></div>';
      $main.querySelectorAll('.opt').forEach(function (b) { b.onclick = function () { answer(+b.dataset.k); }; });
    }
    function answer(k) {
      if (answered) return; answered = true;
      var q = list[i], ok = order[k] === q.answer; results.push(ok); Store.recordMcq(q.id, ok);
      $main.querySelectorAll('.opt').forEach(function (b, kk) { b.classList.add(order[kk] === q.answer ? 'right' : kk === k ? 'wrong' : 'dim'); });
      var sec = q.outcome && section(q.outcome);
      $main.querySelector('#after').innerHTML = '<div class="explain"><b>' + (ok ? '✔ Correct.' : '✘ Answer: ' + LETTERS[order.indexOf(q.answer)] + '.') + '</b> ' + (q.explain || '') +
        (sec ? '<div class="small" style="margin-top:6px">Revise: <a href="#/topic/' + sec.t.id + '/' + sec.n.id + '">' + esc(strip(sec.n.title)) + '</a></div>' : '') + '</div>' +
        '<p><button class="btn pri" id="nextBtn">' + (i + 1 < list.length ? 'Next →' : 'See results') + '</button></p>';
      document.getElementById('nextBtn').onclick = next; document.getElementById('nextBtn').focus();
    }
    function next() { i++; if (i < list.length) show(); else summary(); }
    function summary() {
      onKey = null; renderNav();
      var right = results.filter(Boolean).length, wrongQs = list.filter(function (q, k) { return !results[k]; });
      $main.innerHTML = '<h1>Quiz results</h1><div class="panel"><div class="stat">' + right + ' / ' + list.length + ' (' + pct(right, list.length) + '%)</div>' + bar(pct(right, list.length), 'var(--good)') +
        '<div class="row" style="margin-top:14px"><a class="btn pri" href="#/quiz?mode=smart&n=20&r=' + Date.now() + '">Another smart quiz</a>' + (wrongQs.length ? '<a class="btn" href="#/quiz?mode=wrong&n=40&r=' + Date.now() + '">Redo my mistakes</a>' : '') + '<a class="btn" href="#/quiz">Change settings</a></div></div>' +
        (wrongQs.length ? '<h2>Review what you missed</h2>' + wrongQs.map(function (q) { var sec = q.outcome && section(q.outcome); return '<div class="panel"><div class="q-text">' + q.q + '</div><p>✔ <b>' + q.options[q.answer] + '</b></p><div class="explain small">' + (q.explain || '') + (sec ? ' <a href="#/topic/' + sec.t.id + '/' + sec.n.id + '">Notes →</a>' : '') + '</div></div>'; }).join('') : '<p>Perfect – no mistakes to review.</p>');
    }
    onKey = function (e) {
      if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
      var m = { '1': 0, '2': 1, '3': 2, '4': 3, a: 0, b: 1, c: 2, d: 3 }[e.key.toLowerCase()];
      if (!answered && m != null) answer(m);
      else if (answered && e.key === 'Enter') { e.preventDefault(); next(); }
    };
    show();
  }

  // ---------- written answers ----------
  function keywordReport(text, kws) {
    var low = (text || '').toLowerCase();
    return (kws || []).map(function (k) { var hit = low.indexOf(String(k).toLowerCase()) >= 0; return '<span class="' + (hit ? 'kw-hit' : 'kw-miss') + '">' + (hit ? '✔ ' : '✘ ') + esc(k) + '</span>'; }).join(' &nbsp; ');
  }
  function saqMarkingHTML(q, ans, prefix) {
    return '<h4>Key terms markers look for</h4><p class="small">' + keywordReport(ans, q.keywords) + '</p>' +
      '<h4>Marking criteria – tick what your answer clearly does</h4>' + q.criteria.map(function (c, k) { return '<label class="chk"><input type="checkbox" data-crit="' + prefix + k + '"> <span>' + c + '</span></label>'; }).join('') +
      '<div class="model" style="margin-top:12px"><b>Model answer (' + q.marks + ' marks):</b><br>' + q.model + '</div>';
  }
  V.written = function (id) {
    var p = params();
    if (id) return writtenQ(id);
    var tsel = p.topic || '';
    var list = SD.saq.filter(function (q) { return !tsel || q.topic === tsel; });
    $main.innerHTML = '<h1>Written answers</h1><p class="sub">Section B is 60 of the 80 marks. Write your answer first (timed at ~1.1 min per mark), then compare against the marking criteria and model answer.</p>' +
      '<div class="chips" style="margin-bottom:14px"><a class="chip' + (!tsel ? ' on' : '') + '" href="#/written">All</a>' + SD.topics.map(function (t) { return '<a class="chip' + (tsel === t.id ? ' on' : '') + '" href="#/written?topic=' + t.id + '">' + esc(t.short) + '</a>'; }).join('') + '</div>' +
      '<p><a class="btn pri" href="#/written/' + (function () { var un = list.filter(function (q) { return !Store.saq(q.id); }); return (un.length ? TT.pick(un) : TT.pick(list) || { id: '' }).id; })() + '">Random question I haven\'t done →</a></p>' +
      '<div class="panel"><table class="t"><tr><th>Question</th><th>Marks</th><th>Best</th></tr>' + list.map(function (q) {
        var s = Store.saq(q.id), t = topic(q.topic);
        return '<tr><td>' + dot(t) + ' <a href="#/written/' + q.id + '">' + esc(strip(q.q).slice(0, 140)) + (strip(q.q).length > 140 ? '…' : '') + '</a>' + (q.source ? ' <span class="tag">' + esc(q.source) + '</span>' : '') + '</td><td>' + q.marks + '</td><td>' + (s ? '<span class="tag ' + (s.best >= q.marks * 0.8 ? 'good' : s.best >= q.marks / 2 ? 'warn' : 'bad') + '">' + s.best + '/' + q.marks + '</span>' : '–') + '</td></tr>';
      }).join('') + '</table></div>';
  };
  function writtenQ(id) {
    var q = SD.saq.filter(function (x) { return x.id === id; })[0];
    if (!q) { $main.innerHTML = '<p>Question not found. <a href="#/written">Back</a></p>'; return; }
    var t = topic(q.topic), same = SD.saq.filter(function (x) { return x.topic === q.topic; }), idx = same.indexOf(q);
    var nextQ = same[(idx + 1) % same.length], secs = Math.round(q.marks * 66), left = secs, started = false;
    $main.innerHTML = '<div class="row"><a class="btn sm" href="#/written?topic=' + q.topic + '">← All ' + esc(t ? t.short : '') + ' questions</a><span class="spacer"></span><span class="muted small" id="tmr">Suggested time ' + Math.ceil(secs / 60) + ' min</span> <button class="btn sm" id="tbtn">Start timer</button></div>' +
      '<div class="panel" style="margin-top:12px"><div class="small muted">' + dot(t) + ' ' + esc(t ? t.short : '') + (q.source ? ' · <span class="tag">' + esc(q.source) + '</span>' : '') + '</div>' +
      '<div class="q-text saq-q">' + q.q + ' <b>(' + q.marks + ' mark' + (q.marks > 1 ? 's' : '') + ')</b></div>' +
      '<textarea id="ans" placeholder="Write your answer as you would in the exam…"></textarea>' +
      '<p><button class="btn pri" id="reveal">Reveal marking & model answer</button></p><div id="mark"></div></div>';
    document.getElementById('tbtn').onclick = function () {
      if (started) return; started = true;
      clearInterval(timerId);
      timerId = setInterval(function () { left--; var el = document.getElementById('tmr'); if (!el) return clearInterval(timerId); el.textContent = (left < 0 ? 'Over by ' : 'Time left ') + Math.floor(Math.abs(left) / 60) + ':' + String(Math.abs(left) % 60).padStart(2, '0'); el.style.color = left < 0 ? 'var(--bad)' : ''; }, 1000);
    };
    document.getElementById('reveal').onclick = function () {
      clearInterval(timerId);
      var ans = document.getElementById('ans').value;
      document.getElementById('mark').innerHTML = saqMarkingHTML(q, ans, '') +
        '<div class="row" style="margin-top:14px"><b>Your mark: <span id="sc">0</span> / ' + q.marks + '</b><button class="btn pri" id="save">Save mark</button><a class="btn" href="#/written/' + nextQ.id + '">Next question →</a></div>';
      var boxes = $main.querySelectorAll('[data-crit]');
      function sc() { return Math.min(q.marks, [].filter.call(boxes, function (b) { return b.checked; }).length); }
      boxes.forEach(function (b) { b.onchange = function () { document.getElementById('sc').textContent = sc(); }; });
      document.getElementById('save').onclick = function () { Store.recordSaq(q.id, sc(), q.marks); this.textContent = 'Saved ✔'; this.disabled = true; renderNav(); };
      document.getElementById('reveal').disabled = true;
    };
  }

  // ---------- tools ----------
  V.tools = function (name) {
    var p = params();
    if (name && Tools[name]) {
      $main.innerHTML = '<div class="row"><a class="btn sm" href="#/tools">← All tools</a></div><h1 style="margin-top:12px">' + Tools[name].title + '</h1><p class="sub">' + Tools[name].desc + '</p><div id="tool"></div>';
      Tools[name].render(document.getElementById('tool'), { topic: p.topic });
      return;
    }
    var st = Store.state.tools;
    $main.innerHTML = '<h1>Interactive tools</h1><p class="sub">Generated practice – every “New ↻” makes a fresh question, so you can drill until it\'s automatic.</p><div class="grid g2">' +
      Object.keys(Tools).map(function (k) {
        var T = Tools[k], t = T.topic && topic(T.topic), s = st[k] || (k === 'sequence' ? null : null);
        return '<a class="tile" href="#/tool/' + k + '"><h3>' + (t ? dot(t) : '') + ' ' + T.title + '</h3><p>' + T.desc + '</p>' + (s && s.total ? '<p class="small" style="margin-top:6px">Your accuracy: ' + pct(s.right, s.total) + '% (' + s.total + ' marked)</p>' : '') + '</a>';
      }).join('') + '</div>';
  };

  // ---------- mock exam ----------
  var MOCK_MCQ = { universe: 5, chemistry: 4, evolution: 4, global: 4, genetics: 3 };
  var MOCK_SAQ = { genetics: 10, chemistry: 11, universe: 11, evolution: 10, global: 9, ws: 9 };
  function buildMock() {
    var mcq = [];
    Object.keys(MOCK_MCQ).forEach(function (tid) { mcq = mcq.concat(smartPick(byTopic(SD.mcq, tid), MOCK_MCQ[tid])); });
    var rest = shuffle(SD.mcq.filter(function (q) { var t = topic(q.topic); return t && t.examined && mcq.indexOf(q) < 0; }));
    while (mcq.length < 20 && rest.length) mcq.push(rest.pop());
    var saq = [];
    Object.keys(MOCK_SAQ).forEach(function (tid) {
      var pool = shuffle(byTopic(SD.saq, tid)), m = 0;
      pool.sort(function (a, b) { return (Store.saq(a.id) ? 1 : 0) - (Store.saq(b.id) ? 1 : 0); });
      pool.forEach(function (q) { if (m + q.marks <= MOCK_SAQ[tid] + 1) { saq.push(q); m += q.marks; } });
    });
    return { mcq: shuffle(mcq).map(function (q) { return q.id; }), saq: saq.map(function (q) { return q.id; }), start: Date.now(), mins: 95, mcqAns: {}, saqAns: {}, submitted: false };
  }
  function findQ(arr, id) { return arr.filter(function (x) { return x.id === id; })[0]; }
  V.mock = function () {
    var d = Store.state.mockDraft;
    if (!d) {
      var prev = Store.state.mocks;
      $main.innerHTML = '<h1>Mock exam</h1><p class="sub">Same shape as the real thing: 20 multiple-choice + ~60 marks of written responses drawn from every yearly topic, 5 min reading + 90 min working.</p>' +
        '<div class="panel"><ul><li>Questions you haven\'t done are preferred.</li><li>Your answers autosave – you can refresh or close the tab.</li><li>After submitting, MCQs are marked automatically; you self-mark written answers against the criteria.</li></ul><button class="btn pri" id="startMock">Start mock exam</button></div>' +
        (prev.length ? '<h2>Previous attempts</h2><div class="panel"><table class="t"><tr><th>Date</th><th>MCQ</th><th>Written</th><th>Total</th></tr>' + prev.map(function (m) { return '<tr><td>' + new Date(m.date).toLocaleString('en-AU') + '</td><td>' + m.mcq + '/' + m.mcqMax + '</td><td>' + m.saq + '/' + m.saqMax + '</td><td><b>' + m.pct + '%</b></td></tr>'; }).join('') + '</table></div>' : '');
      document.getElementById('startMock').onclick = function () { Store.setDraft(buildMock()); V.mock(); };
      return;
    }
    var mcqs = d.mcq.map(function (id) { return findQ(SD.mcq, id); }).filter(Boolean), saqs = d.saq.map(function (id) { return findQ(SD.saq, id); }).filter(Boolean);
    var saqMax = saqs.reduce(function (a, q) { return a + q.marks; }, 0);
    if (d.submitted) return mockMarking(d, mcqs, saqs, saqMax);
    $main.innerHTML = '<div class="timer row"><b id="mclock">--:--</b><span class="muted small">remaining (incl. 5 min reading)</span><span class="spacer"></span><button class="btn bad sm" id="abandon">Abandon</button><button class="btn pri" id="submit">Submit exam</button></div>' +
      '<h2>Section A · Multiple choice (20 marks)</h2>' + mcqs.map(function (q, i) {
        return '<div class="panel"><div class="q-text"><b>' + (i + 1) + '.</b> ' + q.q + '</div><div class="opts">' + q.options.map(function (o, k) { return '<button class="opt' + (d.mcqAns[q.id] === k ? ' right' : '') + '" data-mq="' + q.id + '" data-k="' + k + '"><span class="l">' + LETTERS[k] + '</span><span>' + o + '</span></button>'; }).join('') + '</div></div>';
      }).join('') +
      '<h2>Section B · Written responses (' + saqMax + ' marks)</h2>' + saqs.map(function (q, i) {
        return '<div class="panel"><div class="q-text saq-q"><b>Question ' + (21 + i) + '</b> (' + q.marks + ' marks) ' + dot(topic(q.topic)) + '<br>' + q.q + '</div><textarea data-sq="' + q.id + '">' + esc(d.saqAns[q.id] || '') + '</textarea></div>';
      }).join('') + '<p><button class="btn pri" id="submit2">Submit exam</button></p>';
    $main.querySelectorAll('[data-mq]').forEach(function (b) {
      b.onclick = function () { d.mcqAns[b.dataset.mq] = +b.dataset.k; Store.setDraft(d); $main.querySelectorAll('[data-mq="' + b.dataset.mq + '"]').forEach(function (x) { x.classList.toggle('right', x === b); }); };
    });
    $main.querySelectorAll('[data-sq]').forEach(function (ta) { ta.oninput = function () { d.saqAns[ta.dataset.sq] = ta.value; Store.setDraft(d); }; });
    function submit() { if (!confirm('Submit the mock exam now?')) return; d.submitted = true; Store.setDraft(d); clearInterval(timerId); V.mock(); }
    document.getElementById('submit').onclick = submit; document.getElementById('submit2').onclick = submit;
    document.getElementById('abandon').onclick = function () { if (confirm('Abandon this mock? Answers will be lost.')) { Store.setDraft(null); clearInterval(timerId); V.mock(); } };
    clearInterval(timerId);
    function tick() {
      var left = Math.round((d.start + d.mins * 60000 - Date.now()) / 1000), el = document.getElementById('mclock');
      if (!el) return clearInterval(timerId);
      el.textContent = (left < 0 ? '-' : '') + Math.floor(Math.abs(left) / 60) + ':' + String(Math.abs(left) % 60).padStart(2, '0');
      el.style.color = left < 0 ? 'var(--bad)' : left < 600 ? 'var(--warn)' : '';
    }
    tick(); timerId = setInterval(tick, 1000);
  };
  function mockMarking(d, mcqs, saqs, saqMax) {
    var mRight = mcqs.filter(function (q) { return d.mcqAns[q.id] === q.answer; }).length;
    $main.innerHTML = '<h1>Mark your mock</h1><div class="panel"><div class="stat">Section A: ' + mRight + ' / ' + mcqs.length + '</div><p class="muted">Now tick the criteria you met for each written answer, then press “Finish marking”.</p></div>' +
      '<h2>Section A review</h2>' + mcqs.map(function (q, i) {
        var a = d.mcqAns[q.id], ok = a === q.answer;
        return '<div class="panel"><div class="q-text"><b>' + (i + 1) + '.</b> ' + q.q + '</div><p>' + (ok ? '<span class="kw-hit">✔ ' : '<span class="kw-miss">✘ You: ' + (a == null ? 'blank' : LETTERS[a]) + ' · ') + 'Answer ' + LETTERS[q.answer] + ': ' + q.options[q.answer] + '</span></p>' + (ok ? '' : '<div class="explain small">' + (q.explain || '') + '</div>') + '</div>';
      }).join('') +
      '<h2>Section B marking</h2>' + saqs.map(function (q, i) {
        return '<div class="panel"><div class="q-text saq-q"><b>Question ' + (21 + i) + '</b> (' + q.marks + ' marks)<br>' + q.q + '</div><h4>Your answer</h4><div class="explain" style="white-space:pre-wrap">' + (esc(d.saqAns[q.id] || '') || '<i class="muted">blank</i>') + '</div>' + saqMarkingHTML(q, d.saqAns[q.id], q.id + '|') + '</div>';
      }).join('') + '<div class="panel"><b>Total: <span id="mt">' + mRight + '</span> / ' + (mcqs.length + saqMax) + '</b> <button class="btn pri" id="finish">Finish marking & save</button></div>';
    function totals() {
      var s = 0; saqs.forEach(function (q) { var n = $main.querySelectorAll('[data-crit^="' + q.id + '|"]:checked').length; s += Math.min(q.marks, n); }); return s;
    }
    $main.querySelectorAll('[data-crit]').forEach(function (b) { b.onchange = function () { document.getElementById('mt').textContent = mRight + totals(); }; });
    document.getElementById('finish').onclick = function () {
      var s = totals();
      mcqs.forEach(function (q) { Store.recordMcq(q.id, d.mcqAns[q.id] === q.answer); });
      saqs.forEach(function (q) { var n = $main.querySelectorAll('[data-crit^="' + q.id + '|"]:checked').length; Store.recordSaq(q.id, Math.min(q.marks, n), q.marks); });
      var tot = mcqs.length + saqMax;
      Store.addMock({ date: Date.now(), mcq: mRight, mcqMax: mcqs.length, saq: s, saqMax: saqMax, pct: pct(mRight + s, tot) });
      Store.setDraft(null); renderNav();
      $main.innerHTML = '<h1>Mock saved</h1><div class="panel"><div class="stat">' + (mRight + s) + ' / ' + tot + ' (' + pct(mRight + s, tot) + '%)</div><p>Section A ' + mRight + '/' + mcqs.length + ' · Section B ' + s + '/' + saqMax + '</p><div class="row"><a class="btn pri" href="#/">Dashboard</a><a class="btn" href="#/quiz?mode=wrong&n=40">Redo MCQ mistakes</a></div></div>';
    };
  }

  // ---------- past papers ----------
  V.papers = function () {
    var P = [['2024', 'Current format (closest to yours). Universe, Using Chemistry, Evolution, Global Systems, Genetics + a 10-mark data processing question.'], ['2022', 'Sectioned by topic; includes Electromagnetism (not on your exam) and plastics.'], ['2019', 'Older syllabus layout (Biology/Chemistry/Physics/Earth & Space) – use selectively.']];
    $main.innerHTML = '<h1>Past yearly papers</h1><p class="sub">Do one under timed conditions, then mark with the solutions. Many 2022/2024 questions are also inside the quiz and written-answer banks (tagged with their source).</p><div class="grid g3">' +
      P.map(function (p) { return '<div class="tile"><h3>' + p[0] + ' Yearly</h3><p>' + p[1] + '</p><div class="row" style="margin-top:10px"><a class="btn sm pri" href="papers/' + p[0] + '-10 Yearly Exam Paper.pdf" target="_blank">Paper</a><a class="btn sm" href="papers/' + p[0] + '-10 Yearly Exam Solutions.pdf" target="_blank">Solutions</a></div></div>'; }).join('') + '</div>' +
      '<div class="panel" style="margin-top:16px"><h3>What the markers kept saying</h3><ul>' +
      '<li><b>Be specific, not vague</b> – “nitrogen-fixing, nitrifying, denitrifying bacteria and decomposers” beats “bacteria help the nitrogen cycle”. Three distinct roles for 3 marks.</li>' +
      '<li><b>Link cause → effect</b> – e.g. cold + salty → denser → sinks → drives deep currents. Explain <i>why</i> polar water is both cold and salty.</li>' +
      '<li><b>Answer the actual question</b> – “Is Jane correct?” needs “No, because…”, not just a list of brightness factors.</li>' +
      '<li><b>Justify must discriminate</b> – a reason that would also apply to mitosis doesn\'t prove meiosis.</li>' +
      '<li><b>Equations</b> – correct formulae, balanced, states, reactants on the left. Electrons flow through the wire, ions through the salt bridge.</li>' +
      '<li><b>Tables/graphs</b> – units in headings only, IV in the first column / x-axis, scale uses ≥ half the grid, line/curve of best fit (never dot-to-dot).</li>' +
      '<li><b>Biotech evaluate/discuss</b> – name the technology, outline how it works, then specific points for AND against (not “improves quality”), and a judgement.</li></ul></div>';
  };

  // ---------- plan & strategy ----------
  V.plan = function () {
    var ex = examined().map(function (t) { return { t: t, s: stats(t.id) }; }).sort(function (a, b) { return a.s.ready - b.s.ready; });
    var now = new Date(), exd = examDate(), days = [];
    var d0 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var dEx = new Date(exd.getFullYear(), exd.getMonth(), exd.getDate());
    for (var d = new Date(d0); d < dEx; d.setDate(d.getDate() + 1)) days.push(new Date(d));
    if (!days.length) days.push(d0);
    var content = ex.filter(function (x) { return x.t.id !== 'ws'; }), ws = ex.filter(function (x) { return x.t.id === 'ws'; })[0];
    var studyDays = Math.max(1, days.length - 1), per = Math.ceil(content.length / studyDays);
    function block(x) {
      var t = x.t;
      return '<li>' + dot(t) + ' <b>' + esc(t.name) + '</b> (now ' + x.s.ready + '%): <a href="#/topic/' + t.id + '">read notes</a> → <a href="#/cards?topic=' + t.id + '">flashcards</a> → <a href="#/quiz?topic=' + t.id + '&n=20">20 MCQs</a> → <a href="#/written?topic=' + t.id + '">2 written answers</a>' +
        (t.id === 'genetics' ? ' → <a href="#/tool/punnett">Punnett</a> & <a href="#/tool/pedigree">pedigrees</a>' : t.id === 'chemistry' ? ' → <a href="#/tool/galvanic">galvanic cells</a>, <a href="#/tool/energy">energy profiles</a>' : t.id === 'universe' ? ' → <a href="#/tool/astro">astro maths</a>' : t.id === 'global' || t.id === 'evolution' ? ' → <a href="#/tool/sequence?topic=' + t.id + '">sequences</a>' : '') + '</li>';
    }
    var plan = days.map(function (day, k) {
      var label = day.toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'short' });
      var items;
      if (k === days.length - 1 && days.length > 1) {
        items = '<li><a href="#/mock">Full mock exam</a> under timed conditions, then mark it honestly.</li><li><a href="#/quiz?mode=wrong&n=40">Redo every MCQ mistake</a> and <a href="#/cards?go=hard">flashcards you missed</a>.</li>' + (ws ? block(ws) : '') + '<li>Read all <a href="#/cram">cram sheets</a> before bed. Sleep matters more than one extra hour.</li>';
      } else {
        items = content.slice(k * per, k * per + per).map(block).join('') + (k === 0 && ws && days.length <= 2 ? block(ws) : '') + '<li>End the day with a <a href="#/cards">smart flashcard session</a> (spaced repetition brings back today\'s cards tomorrow).</li>';
      }
      return '<div class="panel"><h3>Day ' + (k + 1) + ' · ' + label + '</h3><ul>' + items + '</ul></div>';
    }).join('');
    $main.innerHTML = '<h1>Study plan & exam technique</h1><p class="sub">Generated from your exam date and current readiness – weakest topics first. It updates as you study.</p>' + plan +
      '<div class="panel"><h3>Exam morning</h3><ul><li>Skim the <a href="#/cram">cram sheets</a>, one quick 10-question <a href="#/quiz?mode=smart&n=10">smart quiz</a>. No new content.</li><li>Bring: black pen, ruler, sharp pencil + sharpener + eraser, NESA-approved calculator, clear pencil case.</li></ul></div>' +
      '<h2>How to attack the paper</h2><div class="grid g2"><div class="panel"><h3>Timing</h3><ul><li>90 min ÷ 80 marks ≈ <b>1.1 min per mark</b>.</li><li>Section A (20 MCQ): aim for ~18 min. Mark any you\'re unsure of and come back.</li><li>Section B: a 3-mark question ≈ 3–4 min; a 6-mark ≈ 6–7 min. Leave 5 min to check.</li><li>Reading time: find the long-response and data questions and plan them.</li></ul></div>' +
      '<div class="panel"><h3>Multiple choice</h3><ul><li>Cover the options, predict the answer, then look.</li><li>Eliminate absolutes (“always”, “never”) and options that are true but don\'t answer the question.</li><li>Watch for NOT / LEAST / MOST, and units.</li><li>Never leave one blank.</li></ul></div></div>' +
      '<div class="panel"><h3>NESA verbs – what each one wants</h3><table class="t"><tr><th>Verb</th><th>What to do</th></tr>' +
      [['Identify', 'Name it. One term or fact.'], ['Outline', 'Sketch the main features in brief points.'], ['Describe', 'Give characteristics and features (what happens).'], ['Explain', 'Give the why/how: cause → effect, use “because”, “therefore”, “this leads to”.'], ['Compare', 'Similarities AND differences (use “whereas”, “both”).'], ['Contrast', 'Differences only.'], ['Discuss', 'Points for and/or against (both sides).'], ['Assess', 'Make a judgement of value/significance, with reasons. State your judgement.'], ['Evaluate', 'Strengths AND limitations, then a judgement (“Overall…”).'], ['Justify', 'Support an answer/conclusion with evidence or argument – the reason must rule out alternatives.'], ['Calculate', 'Show formula, substitution, answer with units and sensible sig figs.'], ['Predict', 'Suggest what will happen, based on evidence/theory.']].map(function (r) { return '<tr><td><b>' + r[0] + '</b></td><td>' + r[1] + '</td></tr>'; }).join('') + '</table></div>' +
      '<div class="panel"><h3>Extended responses (5–6 marks)</h3><ol><li>Open with a one-line direct answer / definition.</li><li>One paragraph per point; each point = claim + scientific explanation + specific example.</li><li>Use the exact terms (keywords) from the syllabus.</li><li>For evaluate/assess: finish with a clear judgement linked back to the question.</li></ol></div>';
  };

  // ---------- progress ----------
  V.progress = function () {
    var S = Store.state;
    $main.innerHTML = '<h1>Progress & settings</h1><div class="panel"><table class="t"><tr><th>Topic</th><th>Readiness</th><th>Notes learnt</th><th>Cards mastered</th><th>MCQ (last attempt right)</th><th>MCQ accuracy</th><th>Written avg</th></tr>' +
      SD.topics.map(function (t) { var s = stats(t.id); return '<tr><td>' + dot(t) + ' ' + esc(t.short) + '</td><td>' + s.ready + '%</td><td>' + s.read + '/' + s.notes + '</td><td>' + s.mastered + '/' + s.cards + '</td><td>' + s.lastRight + '/' + s.mcq + '</td><td>' + (s.seen ? s.acc + '%' : '–') + '</td><td>' + (s.saqDone ? s.saqAvg + '% (' + s.saqDone + ')' : '–') + '</td></tr>'; }).join('') + '</table>' +
      '<p class="small muted">Readiness = 40% MCQs right on last attempt + 30% flashcards mastered + 15% written-answer scores + 15% notes ticked as learnt.</p></div>' +
      '<div class="panel"><h3>Tools</h3>' + (Object.keys(S.tools).length ? '<ul>' + Object.keys(S.tools).map(function (k) { var s = S.tools[k]; return '<li>' + esc(Tools[k] ? Tools[k].title : k) + ': ' + pct(s.right, s.total) + '% of ' + s.total + '</li>'; }).join('') + '</ul>' : '<p class="muted">No tool practice yet.</p>') + '</div>' +
      '<div class="panel"><h3>Study activity</h3><p>' + Object.keys(S.activity).sort().map(function (d) { return d + ': ' + S.activity[d] + ' actions'; }).join(' · ') + '</p></div>' +
      '<div class="panel"><h3>Settings</h3><div class="row">Exam date & time: <input type="datetime-local" id="exd" value="' + S.examDate + '"> <button class="btn sm" id="saveEx">Save</button></div>' +
      '<p class="small muted">Default is Term 4 Week 3 Tuesday, Period 1 (27 Oct 2026) from your notification – change it if your timetable differs.</p>' +
      '<div class="row" style="margin-top:12px"><button class="btn" id="exp">Export progress</button><button class="btn" id="imp">Import progress</button><button class="btn bad" id="rst">Reset all progress</button></div><textarea id="io" style="display:none;margin-top:10px"></textarea></div>';
    document.getElementById('saveEx').onclick = function () { Store.setExamDate(document.getElementById('exd').value); renderCountdown(); this.textContent = 'Saved ✔'; };
    document.getElementById('exp').onclick = function () { var io = document.getElementById('io'); io.style.display = 'block'; io.value = Store.exportJSON(); io.select(); };
    document.getElementById('imp').onclick = function () { var io = document.getElementById('io'); if (io.style.display === 'none') { io.style.display = 'block'; io.value = ''; io.placeholder = 'Paste exported progress here, then press Import again'; return; } try { Store.importJSON(io.value); alert('Imported.'); route(); } catch (e) { alert('That text is not valid progress data.'); } };
    document.getElementById('rst').onclick = function () { if (confirm('Delete ALL progress? This cannot be undone.')) { Store.reset(); route(); } };
  };

  // ---------- search ----------
  V.search = function () {
    var q = (params().q || '').trim(), ql = q.toLowerCase();
    if (q.length < 2) { $main.innerHTML = '<h1>Search</h1><p class="muted">Type at least 2 characters.</p>'; return; }
    var re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
    function snip(text) { var i = text.toLowerCase().indexOf(ql), s = Math.max(0, i - 80); return (s ? '…' : '') + esc(text.slice(s, i + 160)).replace(re, '<mark>$1</mark>') + '…'; }
    var hits = [];
    SD.topics.forEach(function (t) { (t.notes || []).forEach(function (n) { var txt = strip(n.title + ' ' + n.html); if (txt.toLowerCase().indexOf(ql) >= 0) hits.push('<div class="panel">' + dot(t) + ' <a href="#/topic/' + t.id + '/' + n.id + '"><b>' + esc(strip(n.title)) + '</b></a><p class="small">' + snip(txt) + '</p></div>'); }); });
    var cardHits = SD.cards.filter(function (c) { return strip(c.front + ' ' + c.back).toLowerCase().indexOf(ql) >= 0; }).slice(0, 30);
    $main.innerHTML = '<h1>Search: “' + esc(q) + '”</h1><h2>Notes (' + hits.length + ')</h2>' + (hits.join('') || '<p class="muted">No matches in notes.</p>') +
      '<h2>Flashcards (' + cardHits.length + ')</h2>' + cardHits.map(function (c) { return '<div class="panel">' + dot(topic(c.topic)) + ' <b>' + c.front + '</b><p class="small">' + c.back + '</p></div>'; }).join('');
  };

  // ---------- router ----------
  function route() {
    onKey = null; clearInterval(timerId);
    var h = (location.hash || '#/').split('?')[0], parts = h.replace(/^#\/?/, '').split('/');
    renderNav();
    document.getElementById('side').classList.remove('open');
    var v = parts[0];
    try {
      if (!v) V.dashboard();
      else if (v === 'topic') V.topic(parts[1], parts[2]);
      else if (v === 'cram') V.cram();
      else if (v === 'cards') V.cards();
      else if (v === 'quiz') V.quiz();
      else if (v === 'written') V.written(parts[1]);
      else if (v === 'tools') V.tools();
      else if (v === 'tool') V.tools(parts[1]);
      else if (v === 'mock') V.mock();
      else if (v === 'papers') V.papers();
      else if (v === 'plan') V.plan();
      else if (v === 'progress') V.progress();
      else if (v === 'search') V.search();
      else V.dashboard();
    } catch (e) {
      $main.innerHTML = '<h1>Something broke</h1><pre>' + esc(e.stack || e) + '</pre>';
      window.__appError = String(e.stack || e);
    }
    if (v !== 'topic' || !parts[2]) window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);

  // ---------- picture zoom (lightbox) ----------
  var lb = { items: [], i: 0, el: null };
  function lbShow() {
    var it = lb.items[lb.i], src = it.dataset.src || it.getAttribute('src');
    lb.el.innerHTML = '<button class="lb-x" aria-label="Close">×</button>' +
      (lb.items.length > 1 ? '<button class="lb-nav lb-prev" aria-label="Previous">‹</button><button class="lb-nav lb-next" aria-label="Next">›</button>' : '') +
      '<figure><img src="' + src + '" alt=""><figcaption>' + (it.dataset.cap ? '<span>' + it.dataset.cap + '</span>' : '') +
      '<small>' + (it.dataset.from ? esc(it.dataset.from) : '') + (lb.items.length > 1 ? ' · ' + (lb.i + 1) + ' / ' + lb.items.length : '') + '</small></figcaption></figure>';
  }
  function lbMove(d) { lb.i = (lb.i + d + lb.items.length) % lb.items.length; lbShow(); }
  function lbClose() { if (lb.el) { lb.el.remove(); lb.el = null; } }
  document.addEventListener('click', function (e) {
    if (lb.el) {
      if (e.target.closest('.lb-prev')) lbMove(-1); else if (e.target.closest('.lb-next')) lbMove(1);
      else if (!e.target.closest('figure') || e.target.closest('.lb-x')) lbClose();
      return;
    }
    var z = e.target.closest('.zoom'); if (!z) return;
    e.preventDefault();
    lb.items = z.dataset.g ? [].slice.call(document.querySelectorAll('.zoom[data-g="' + z.dataset.g + '"]')) : [z];
    lb.i = Math.max(0, lb.items.indexOf(z));
    lb.el = document.createElement('div'); lb.el.className = 'lightbox'; document.body.appendChild(lb.el); lbShow();
  });

  document.addEventListener('keydown', function (e) {
    if (lb.el) { if (e.key === 'Escape') lbClose(); else if (e.key === 'ArrowLeft') lbMove(-1); else if (e.key === 'ArrowRight') lbMove(1); e.preventDefault(); return; }
    if (e.key === '/' && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) { e.preventDefault(); document.getElementById('search').focus(); return; }
    if (onKey && !/TEXTAREA/.test(document.activeElement.tagName)) onKey(e);
  });
  var sTimer;
  document.getElementById('search').addEventListener('input', function (e) { clearTimeout(sTimer); var v = e.target.value; sTimer = setTimeout(function () { location.hash = '#/search?q=' + encodeURIComponent(v); }, 250); });
  document.getElementById('menuBtn').onclick = function () { document.getElementById('side').classList.toggle('open'); };
  document.getElementById('themeBtn').onclick = function () {
    var next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next; localStorage.setItem('sy-theme', next);
  };
  renderCountdown(); setInterval(renderCountdown, 30000);
  route();
})();
