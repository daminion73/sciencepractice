// Progress storage (localStorage) + spaced repetition scheduling.
(function () {
  var KEY = 'sy26-progress-v1';
  var MIN = 60 * 1000, HOUR = 60 * MIN, DAY = 24 * HOUR;
  // Short intervals because the exam is days away, not months.
  var INTERVALS = [0, 10 * MIN, 1 * HOUR, 5 * HOUR, 1 * DAY, 2 * DAY, 4 * DAY];

  function blank() {
    return {
      cards: {}, mcq: {}, saq: {}, seq: {}, tools: {}, read: {},
      mocks: [], activity: {}, examDate: '2026-10-27T08:40', mockDraft: null
    };
  }

  var S;
  try { S = Object.assign(blank(), JSON.parse(localStorage.getItem(KEY) || '{}')); }
  catch (e) { S = blank(); }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* storage full or blocked */ }
  }
  function today() {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function bump() { var t = today(); S.activity[t] = (S.activity[t] || 0) + 1; }

  var Store = {
    get state() { return S; },
    save: save,
    // ---- flashcards ----
    card: function (id) { return S.cards[id] || null; },
    rateCard: function (id, rating) { // rating: 0 = didn't get it, 2 = got it (1 and 3 unused)
      var c = S.cards[id] || { box: 0, reps: 0, lapses: 0 };
      if (rating === 0) { c.box = 0; c.lapses++; }
      else if (rating === 1) { c.box = Math.max(1, c.box); }
      else if (rating === 2) { c.box = Math.min(INTERVALS.length - 1, c.box + 1); }
      else { c.box = Math.min(INTERVALS.length - 1, c.box + 2); }
      c.reps++;
      c.due = Date.now() + (rating === 0 ? MIN : INTERVALS[c.box]);
      S.cards[id] = c; bump(); save();
      return c;
    },
    cardMastered: function (id) { var c = S.cards[id]; return !!c && c.box >= 3; },
    cardDue: function (id) { var c = S.cards[id]; return !c || c.due <= Date.now(); },
    // ---- multiple choice ----
    recordMcq: function (id, correct) {
      var q = S.mcq[id] || { seen: 0, right: 0, streak: 0 };
      q.seen++; if (correct) { q.right++; q.streak++; } else { q.streak = 0; }
      q.last = correct; q.at = Date.now();
      S.mcq[id] = q; bump(); save();
    },
    mcq: function (id) { return S.mcq[id] || null; },
    // ---- written answers ----
    recordSaq: function (id, got, max) {
      var s = S.saq[id] || { attempts: 0, best: 0 };
      s.attempts++; s.last = got; s.max = max; s.best = Math.max(s.best, got); s.at = Date.now();
      S.saq[id] = s; bump(); save();
    },
    saq: function (id) { return S.saq[id] || null; },
    // ---- sequences / tools ----
    recordTool: function (name, correct, total) {
      var t = S.tools[name] || { right: 0, total: 0 };
      t.right += correct; t.total += total; S.tools[name] = t; bump(); save();
    },
    recordSeq: function (id, ok) {
      var s = S.seq[id] || { right: 0, total: 0 };
      s.total++; if (ok) s.right++; S.seq[id] = s; bump(); save();
    },
    markRead: function (sectionId, val) { if (val) S.read[sectionId] = true; else delete S.read[sectionId]; save(); },
    isRead: function (sectionId) { return !!S.read[sectionId]; },
    addMock: function (m) { S.mocks.push(m); save(); },
    setExamDate: function (iso) { S.examDate = iso; save(); },
    setDraft: function (d) { S.mockDraft = d; save(); },
    exportJSON: function () { return JSON.stringify(S); },
    importJSON: function (txt) { S = Object.assign(blank(), JSON.parse(txt)); save(); },
    reset: function () { S = blank(); save(); },
    today: today
  };
  window.Store = Store;
})();
