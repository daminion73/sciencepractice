// Interactive practice generators. Each tool: {title, desc, topic, render(el)}.
(function () {
  // ---------- helpers ----------
  function ri(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function gcd(a, b) { return b ? gcd(b, a % b) : a; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function parseNum(s) {
    if (s == null) return NaN;
    s = String(s).trim().replace(/,/g, '').replace(/\s+/g, '').replace(/−/g, '-');
    s = s.replace(/(x|×|\*)10\^?/i, 'e');
    if (s === '') return NaN;
    return Number(s);
  }
  function close(v, target, rel, abs) {
    if (isNaN(v)) return false;
    if (abs != null && Math.abs(v - target) <= abs) return true;
    return Math.abs(v - target) <= Math.abs(target) * (rel || 0.02) + 1e-12;
  }
  function sci(x, sf) {
    if (x === 0) return '0';
    var e = Math.floor(Math.log10(Math.abs(x)));
    if (e >= -2 && e <= 5) return String(+x.toPrecision(sf || 3));
    var m = x / Math.pow(10, e);
    return (+m.toPrecision(sf || 3)) + ' × 10<sup>' + e + '</sup>';
  }
  function roman(n) { return ['', 'I', 'II', 'III', 'IV'][n]; }
  function fb(ok, html) { return '<div class="fb ' + (ok ? 'ok' : 'no') + '">' + (ok ? '✔ ' : '✘ ') + html + '</div>'; }
  var SUP = { '+': '<sup>+</sup>', '2+': '<sup>2+</sup>', '3+': '<sup>3+</sup>' };

  var Tools = {};

  // =====================================================================
  // 1. PUNNETT SQUARE TRAINER
  // =====================================================================
  function A(k, html, rank) { return { k: k, html: html, rank: rank }; }
  var CROSSES = [
    function complete() {
      var t = pick([
        { g: 'T', dom: 'tall', rec: 'short', org: 'pea plants' },
        { g: 'R', dom: 'round seeds', rec: 'wrinkled seeds', org: 'pea plants' },
        { g: 'Y', dom: 'yellow seeds', rec: 'green seeds', org: 'pea plants' },
        { g: 'P', dom: 'purple flowers', rec: 'white flowers', org: 'pea plants' },
        { g: 'F', dom: 'no cystic fibrosis', rec: 'cystic fibrosis', org: 'humans' },
        { g: 'P', dom: 'polydactyly (extra fingers)', rec: 'five fingers', org: 'humans' },
        { g: 'V', dom: 'long wings', rec: 'vestigial wings', org: 'fruit flies' }
      ]);
      var D = A(t.g, t.g, 0), d = A(t.g.toLowerCase(), t.g.toLowerCase(), 1);
      var gts = [[D, D], [D, d], [d, d]];
      var desc = function (gt) {
        var n = (gt[0] === D) + (gt[1] === D);
        return n === 2 ? 'homozygous (pure-breeding) ' + t.dom : n === 1 ? 'heterozygous ' + t.dom : t.rec;
      };
      var phen = function (gt) { return (gt[0] === D || gt[1] === D) ? t.dom : t.rec; };
      return {
        kind: 'Complete dominance', key: '<b>' + D.html + '</b> = ' + t.dom + ' (dominant), <b>' + d.html + '</b> = ' + t.rec + ' (recessive). Organism: ' + t.org + '.',
        p1: gts, p2: gts, desc1: desc, desc2: desc, phen: phen,
        questions: function (cells) {
          var qs = [
            { q: 'What percentage of offspring are expected to show <b>' + t.rec + '</b>?', f: function (c) { return phen(c) === t.rec; } },
            { q: 'What percentage of offspring are expected to show <b>' + t.dom + '</b>?', f: function (c) { return phen(c) === t.dom; } },
            { q: 'What percentage of offspring are expected to be <b>heterozygous</b>?', f: function (c) { return c[0] !== c[1]; } },
            { q: 'What percentage of offspring are expected to be <b>homozygous dominant</b>?', f: function (c) { return c[0] === D && c[1] === D; } }
          ];
          var x = pick(qs); return { q: x.q, pct: 100 * cells.filter(x.f).length / 4 };
        }
      };
    },
    function incomplete() {
      var t = pick([
        { name: 'Incomplete dominance', g: 'R', a1: '1', a2: '2', p: ['red', 'pink', 'white'], org: 'snapdragon flowers', note: 'Neither allele is dominant; heterozygotes show a blended (intermediate) phenotype.' },
        { name: 'Co-dominance', g: 'C', a1: 'R', a2: 'W', p: ['red', 'roan (red and white hairs)', 'white'], org: 'shorthorn cattle', note: 'Both alleles are fully expressed in heterozygotes (red and white hairs side by side).' }
      ]);
      var X = A(t.g + t.a1, t.g + '<sup>' + t.a1 + '</sup>', 0), Z = A(t.g + t.a2, t.g + '<sup>' + t.a2 + '</sup>', 1);
      var gts = [[X, X], [X, Z], [Z, Z]];
      var phen = function (gt) { var n = (gt[0] === X) + (gt[1] === X); return t.p[2 - n]; };
      var desc = function (gt) { return phen(gt); };
      return {
        kind: t.name, key: '<b>' + X.html + X.html + '</b> = ' + t.p[0] + ', <b>' + X.html + Z.html + '</b> = ' + t.p[1] + ', <b>' + Z.html + Z.html + '</b> = ' + t.p[2] + '. ' + t.note + ' Organism: ' + t.org + '.',
        p1: gts, p2: gts, desc1: desc, desc2: desc, phen: phen,
        questions: function (cells) { var ph = pick(t.p); return { q: 'What percentage of offspring are expected to be <b>' + ph + '</b>?', pct: 100 * cells.filter(function (c) { return phen(c) === ph; }).length / 4 }; }
      };
    },
    function abo() {
      var IA = A('IA', 'I<sup>A</sup>', 0), IB = A('IB', 'I<sup>B</sup>', 1), i = A('i', 'i', 2);
      var gts = [[IA, IA], [IA, i], [IB, IB], [IB, i], [IA, IB], [i, i]];
      var phen = function (gt) {
        var s = gt.map(function (x) { return x.k; }).join('');
        if (s === 'IAIB') return 'AB'; if (s === 'ii') return 'O'; return s.indexOf('IA') >= 0 ? 'A' : 'B';
      };
      var desc = function (gt) {
        var p = phen(gt); if (p === 'AB' || p === 'O') return 'blood group ' + p;
        return 'blood group ' + p + ' (' + (gt[0] === gt[1] ? 'homozygous' : 'heterozygous') + ')';
      };
      return {
        kind: 'Multiple alleles + co-dominance (ABO blood groups)', key: '<b>I<sup>A</sup></b> and <b>I<sup>B</sup></b> are co-dominant; <b>i</b> (group O) is recessive to both.',
        p1: gts, p2: gts, desc1: desc, desc2: desc, phen: phen,
        questions: function (cells) { var ph = pick(['A', 'B', 'AB', 'O']); return { q: 'What percentage of their children are expected to have blood group <b>' + ph + '</b>?', pct: 100 * cells.filter(function (c) { return phen(c) === ph; }).length / 4 }; }
      };
    },
    function xlinked() {
      var t = pick([{ g: 'B', cond: 'colour blind', norm: 'normal colour vision' }, { g: 'H', cond: 'haemophilia', norm: 'normal blood clotting' }]);
      var XN = A('X' + t.g, 'X<sup>' + t.g + '</sup>', 0), Xn = A('X' + t.g.toLowerCase(), 'X<sup>' + t.g.toLowerCase() + '</sup>', 1), Y = A('Y', 'Y', 2);
      var aff = function (gt) { return gt[1] === Y ? gt[0] === Xn : (gt[0] === Xn && gt[1] === Xn); };
      var isM = function (gt) { return gt[1] === Y; };
      var condWord = t.cond === 'haemophilia' ? 'has haemophilia' : 'is colour blind';
      var descF = function (gt) { return aff(gt) ? 'a woman who ' + condWord : (gt[1] === Xn ? 'a carrier woman (' + t.norm + ')' : 'a woman with ' + t.norm + ' who is not a carrier'); };
      var descM = function (gt) { return aff(gt) ? 'a man who ' + condWord : 'a man with ' + t.norm; };
      var phen = function (gt) { return (isM(gt) ? 'son' : 'daughter') + (aff(gt) ? ' – affected' : (!isM(gt) && gt[1] === Xn ? ' – carrier' : ' – unaffected')); };
      return {
        kind: 'Sex-linked (X-linked recessive)', key: '<b>' + XN.html + '</b> = ' + t.norm + ' (dominant), <b>' + Xn.html + '</b> = ' + t.cond + ' (recessive). The gene is on the X chromosome; Y carries no allele.',
        p1: [[XN, XN], [XN, Xn], [Xn, Xn]], p2: [[XN, Y], [Xn, Y]], desc1: descF, desc2: descM, phen: phen, labels: ['Mother', 'Father'],
        questions: function (cells) {
          var sons = cells.filter(isM), dau = cells.filter(function (c) { return !isM(c); });
          var qs = [
            { q: 'If they have a <b>son</b>, what is the probability he is affected?', pct: 100 * sons.filter(aff).length / sons.length },
            { q: 'If they have a <b>daughter</b>, what is the probability she is affected?', pct: 100 * dau.filter(aff).length / dau.length },
            { q: 'If they have a <b>daughter</b>, what is the probability she is a carrier?', pct: 100 * dau.filter(function (c) { return !aff(c) && c[1] === Xn; }).length / dau.length },
            { q: 'What is the probability that any child (son or daughter) is affected?', pct: 100 * cells.filter(aff).length / 4 }
          ];
          return pick(qs);
        }
      };
    }
  ];
  function gtKey(gt) { return gt[0].k + gt[1].k; }
  function gtHtml(gt) { return gt[0].html + gt[1].html; }
  function combine(a, b) { return a.rank <= b.rank ? [a, b] : [b, a]; }

  Tools.punnett = {
    title: 'Punnett square trainer', topic: 'genetics',
    desc: 'Unlimited crosses: complete & incomplete dominance, co-dominance, ABO blood groups and sex-linked traits.',
    render: function (el) {
      var C = pick(CROSSES)();
      var g1 = pick(C.p1), g2 = pick(C.p2);
      // homozygous × homozygous crosses are trivial; make them rarer
      for (var tries = 0; tries < 6 && g1[0] === g1[1] && g2[0] === g2[1] && g2[1].k !== 'Y' && Math.random() < 0.8; tries++) { g1 = pick(C.p1); g2 = pick(C.p2); }
      var labels = C.labels || ['Parent 1', 'Parent 2'];
      var allGts = [];
      [C.p1, C.p2].forEach(function (list) { list.forEach(function (g) { if (!allGts.some(function (x) { return gtKey(x) === gtKey(g); })) allGts.push(g); }); });
      // offspring genotypes possible (for cell dropdowns)
      var cellOpts = [];
      C.p1.forEach(function (a) { C.p2.forEach(function (b) { [0, 1].forEach(function (i) { [0, 1].forEach(function (j) { var c = combine(a[i], b[j]); if (!cellOpts.some(function (x) { return gtKey(x) === gtKey(c); })) cellOpts.push(c); }); }); }); });
      cellOpts.sort(function (x, y) { return (x[0].rank * 10 + x[1].rank) - (y[0].rank * 10 + y[1].rank); });
      var cells = [combine(g1[0], g2[0]), combine(g1[0], g2[1]), combine(g1[1], g2[0]), combine(g1[1], g2[1])];
      var Q = C.questions(cells);
      function sel(name, list) {
        return '<select name="' + name + '"><option value="">?</option>' + list.map(function (g) { return '<option value="' + gtKey(g) + '">' + gtHtml(g).replace(/<sup>|<\/sup>/g, '') + '</option>'; }).join('') + '</select>';
      }
      el.innerHTML =
        '<div class="panel"><div class="row"><span class="tag">' + C.kind + '</span><span class="spacer"></span><button class="btn sm" data-new>New cross ↻</button></div>' +
        '<p class="q-text">' + labels[0] + ' is <b>' + C.desc1(g1) + '</b>. ' + labels[1] + ' is <b>' + C.desc2(g2) + '</b>.</p>' +
        '<p class="small muted">' + C.key + '</p>' +
        '<h3>Step 1 · Parent genotypes</h3><div class="row">' + labels[0] + ': ' + sel('p1', C.p1) + ' &nbsp; × &nbsp; ' + labels[1] + ': ' + sel('p2', C.p2) + ' <button class="btn pri sm" data-s1>Check</button></div><div id="s1fb"></div>' +
        '<div id="s2" hidden><h3>Step 2 · Complete the Punnett square</h3><p class="small muted">Gametes from ' + labels[0].toLowerCase() + ' down the side, ' + labels[1].toLowerCase() + ' across the top.</p>' +
        '<table class="punnett"><tr><th></th><th>' + g2[0].html + '</th><th>' + g2[1].html + '</th></tr>' +
        '<tr><th>' + g1[0].html + '</th><td>' + sel('c0', cellOpts) + '</td><td>' + sel('c1', cellOpts) + '</td></tr>' +
        '<tr><th>' + g1[1].html + '</th><td>' + sel('c2', cellOpts) + '</td><td>' + sel('c3', cellOpts) + '</td></tr></table>' +
        '<button class="btn pri sm" data-s2>Check square</button><div id="s2fb"></div></div>' +
        '<div id="s3" hidden><h3>Step 3 · Interpret</h3><p>' + Q.q + '</p><div class="chips">' + [0, 25, 50, 75, 100].map(function (p) { return '<span class="chip" data-pct="' + p + '">' + p + '%</span>'; }).join('') + '</div><div id="s3fb"></div></div></div>';
      var score = 0, done = { s1: false, s2: false };
      el.querySelector('[data-new]').onclick = function () { Tools.punnett.render(el); };
      el.querySelector('[data-s1]').onclick = function () {
        var a = el.querySelector('[name=p1]').value, b = el.querySelector('[name=p2]').value;
        var ok = a === gtKey(g1) && b === gtKey(g2);
        if (!done.s1) { done.s1 = true; if (ok) score++; }
        el.querySelector('#s1fb').innerHTML = fb(ok, ok ? 'Correct.' : 'Not quite. ' + labels[0] + ' = <b>' + gtHtml(g1) + '</b>, ' + labels[1] + ' = <b>' + gtHtml(g2) + '</b>. Read the description: "heterozygous" means two different alleles; a recessive phenotype must be homozygous recessive.');
        el.querySelector('#s2').hidden = false;
      };
      el.querySelector('[data-s2]').onclick = function () {
        var allOk = true;
        cells.forEach(function (c, i) {
          var s = el.querySelector('[name=c' + i + ']'), ok = s.value === gtKey(c);
          s.parentNode.className = ok ? 'cell-ok' : 'cell-bad'; if (!ok) allOk = false;
        });
        if (!done.s2) { done.s2 = true; if (allOk) score++; }
        var tally = {}; cells.forEach(function (c) { var p = C.phen(c); tally[p] = (tally[p] || 0) + 1; });
        el.querySelector('#s2fb').innerHTML = fb(allOk, (allOk ? 'All four cells correct. ' : 'Correct cells: ' + cells.map(gtHtml).join(', ') + '. ') +
          'Phenotypes: ' + Object.keys(tally).map(function (k) { return tally[k] + '/4 ' + esc(k); }).join(' · '));
        el.querySelector('#s3').hidden = false;
      };
      el.querySelectorAll('[data-pct]').forEach(function (ch) {
        ch.onclick = function () {
          if (el.querySelector('#s3fb').innerHTML) return;
          var v = +ch.dataset.pct, ok = Math.abs(v - Q.pct) < 0.1;
          ch.classList.add('on');
          if (ok) score++;
          el.querySelector('#s3fb').innerHTML = fb(ok, 'Answer: <b>' + Q.pct + '%</b>.' + (/son|daughter/.test(Q.q) && /If they have/.test(Q.q) ? ' (Only count the boxes of that sex – it is a conditional probability.)' : '')) +
            '<p class="small muted">Score this cross: ' + score + '/3</p>';
          Store.recordTool('punnett', score, 3);
        };
      });
    }
  };

  // =====================================================================
  // 2. PEDIGREE DETECTIVE
  // =====================================================================
  var MODES = { AD: 'Autosomal dominant', AR: 'Autosomal recessive', XD: 'X-linked dominant', XR: 'X-linked recessive' };
  function affectedBy(mode, p) {
    if (mode === 'AD') return p.g >= 1;
    if (mode === 'AR') return p.g === 2;
    if (mode === 'XD') return p.g >= 1;
    return p.sex === 'M' ? p.g === 1 : p.g === 2; // XR
  }
  function founderG(mode, sex, carrierish) {
    var x = mode[0] === 'X' && sex === 'M';
    var r = Math.random();
    if (carrierish) return x ? (r < 0.7 ? 1 : 0) : (r < 0.55 ? 1 : (r < 0.8 ? 2 : 0));
    if (mode === 'AR' || mode === 'XR') return x ? (r < 0.12 ? 1 : 0) : (r < 0.3 ? 1 : 0);
    return x ? (r < 0.08 ? 1 : 0) : (r < 0.08 ? 1 : 0);
  }
  function childG(mode, sex, f, m) {
    var fromM = m.g === 2 ? 1 : m.g === 1 ? (Math.random() < 0.5 ? 1 : 0) : 0;
    if (mode[0] === 'X') { return sex === 'M' ? fromM : fromM + f.g; }
    var fromF = f.g === 2 ? 1 : f.g === 1 ? (Math.random() < 0.5 ? 1 : 0) : 0;
    return fromM + fromF;
  }
  function violation(mode, P) {
    for (var i = 0; i < P.length; i++) {
      var c = P[i]; if (!c.father) continue;
      var f = c.father, m = c.mother, L = function (p) { return p.label; };
      var fam = 'parents ' + L(f) + ' and ' + L(m) + ', child ' + L(c);
      if (mode === 'AD' && !f.aff && !m.aff && c.aff) return 'Both parents are unaffected but their child is affected (' + fam + '). A dominant trait cannot skip a generation like this.';
      if (mode === 'AR' && f.aff && m.aff && !c.aff) return 'Two affected parents have an unaffected child (' + fam + '). Affected = aa × aa, so every child must be aa.';
      if (mode === 'XR') {
        if (m.aff && c.sex === 'M' && !c.aff) return 'An affected mother has an unaffected son (' + fam + '). She is X<sup>a</sup>X<sup>a</sup> and must pass X<sup>a</sup> to every son.';
        if (c.sex === 'F' && c.aff && !f.aff) return 'An affected daughter has an unaffected father (' + fam + '). She needs X<sup>a</sup> from her father, so he would have to be affected.';
        if (f.aff && m.aff && !c.aff) return 'Two affected parents have an unaffected child (' + fam + ').';
      }
      if (mode === 'XD') {
        if (f.aff && c.sex === 'F' && !c.aff) return 'An affected father has an unaffected daughter (' + fam + '). He passes his X<sup>A</sup> to every daughter.';
        if (c.sex === 'M' && c.aff && !m.aff) return 'An affected son has an unaffected mother (' + fam + '). Sons get their X only from their mother.';
        if (!f.aff && !m.aff && c.aff) return 'Both parents are unaffected but their child is affected (' + fam + ').';
      }
    }
    return null;
  }
  function buildPedigree() {
    var mode = pick(['AD', 'AR', 'XD', 'XR']);
    var P = [];
    function person(sex, gen, g, father, mother) { var p = { sex: sex, gen: gen, g: g, father: father, mother: mother, kids: [] }; P.push(p); return p; }
    var i1 = person('M', 1, 0), i2 = person('F', 1, 0);
    var carrierSide = Math.random() < 0.5 ? i1 : i2;
    i1.g = founderG(mode, 'M', carrierSide === i1); i2.g = founderG(mode, 'F', carrierSide === i2);
    if (i1.g + i2.g === 0) carrierSide.g = 1;
    i1.spouse = i2; i2.spouse = i1;
    var n2 = ri(3, 4), gen2 = [];
    for (var k = 0; k < n2; k++) { var s = Math.random() < 0.5 ? 'M' : 'F'; var c = person(s, 2, 0, i1, i2); c.g = childG(mode, s, i1, i2); gen2.push(c); }
    i1.kids = gen2.slice();
    var married = shuffle(gen2).slice(0, 2);
    var units = [];
    gen2.forEach(function (c) {
      if (married.indexOf(c) >= 0) {
        var sp = person(c.sex === 'M' ? 'F' : 'M', 2, 0); sp.g = founderG(mode, sp.sex, false); sp.inlaw = true;
        c.spouse = sp; sp.spouse = c;
        var f = c.sex === 'M' ? c : sp, m = c.sex === 'M' ? sp : c;
        var kids = []; var n3 = ri(2, 3);
        for (var j = 0; j < n3; j++) { var s3 = Math.random() < 0.5 ? 'M' : 'F'; var k3 = person(s3, 3, 0, f, m); k3.g = childG(mode, s3, f, m); kids.push(k3); }
        c.kids = kids; units.push({ blood: c, spouse: sp, kids: kids });
      } else units.push({ blood: c });
    });
    P.forEach(function (p) { p.aff = affectedBy(mode, p); });
    return { mode: mode, P: P, i1: i1, i2: i2, units: units, gen2: gen2 };
  }
  function layoutPedigree(T) {
    var U = 64, x = 30;
    T.units.forEach(function (u) {
      if (u.spouse) {
        var w = Math.max(2, u.kids.length) * U, cx = x + w / 2;
        u.blood.x = cx - U / 2; u.spouse.x = cx + U / 2;
        u.kids.forEach(function (k, i) { k.x = cx + (i - (u.kids.length - 1) / 2) * U; });
        x += w + 18;
      } else { u.blood.x = x + U / 2; x += U + 18; }
    });
    var xs = T.gen2.map(function (c) { return c.x; });
    var mid = (Math.min.apply(null, xs) + Math.max.apply(null, xs)) / 2;
    T.i1.x = mid - U / 2; T.i2.x = mid + U / 2;
    T.width = Math.max(x + 12, T.i2.x + 60);
    var Y = { 1: 40, 2: 150, 3: 260 };
    T.P.forEach(function (p) { p.y = Y[p.gen]; });
    [1, 2, 3].forEach(function (g) {
      T.P.filter(function (p) { return p.gen === g; }).sort(function (a, b) { return a.x - b.x; }).forEach(function (p, i) { p.label = roman(g) + '-' + (i + 1); });
    });
  }
  function pedigreeSVG(T) {
    var r = 15, out = [], st = 'stroke="currentColor" stroke-width="2"';
    function couple(a, b, kids) {
      var l = Math.min(a.x, b.x), rr = Math.max(a.x, b.x), y = a.y;
      out.push('<line x1="' + (l + r) + '" y1="' + y + '" x2="' + (rr - r) + '" y2="' + y + '" ' + st + '/>');
      if (!kids || !kids.length) return;
      var mx = (l + rr) / 2, bar = y + 55;
      out.push('<line x1="' + mx + '" y1="' + y + '" x2="' + mx + '" y2="' + bar + '" ' + st + '/>');
      var kx = kids.map(function (k) { return k.x; });
      out.push('<line x1="' + Math.min(mx, Math.min.apply(null, kx)) + '" y1="' + bar + '" x2="' + Math.max(mx, Math.max.apply(null, kx)) + '" y2="' + bar + '" ' + st + '/>');
      kids.forEach(function (k) { out.push('<line x1="' + k.x + '" y1="' + bar + '" x2="' + k.x + '" y2="' + (k.y - r) + '" ' + st + '/>'); });
    }
    couple(T.i1, T.i2, T.gen2);
    T.units.forEach(function (u) { if (u.spouse) couple(u.blood, u.spouse, u.kids); });
    T.P.forEach(function (p) {
      var fill = p.aff ? 'currentColor' : 'none';
      if (p.sex === 'M') out.push('<rect x="' + (p.x - r) + '" y="' + (p.y - r) + '" width="' + 2 * r + '" height="' + 2 * r + '" fill="' + fill + '" ' + st + '/>');
      else out.push('<circle cx="' + p.x + '" cy="' + p.y + '" r="' + r + '" fill="' + fill + '" ' + st + '/>');
      out.push('<text x="' + p.x + '" y="' + (p.y + r + 15) + '" fill="currentColor" fill-opacity=".6" font-size="12" text-anchor="middle">' + p.label + '</text>');
    });
    return '<svg viewBox="0 0 ' + T.width + ' 300" width="' + T.width + '">' + out.join('') + '</svg>';
  }
  function genotypeQuestion(T, mode) {
    // Only for a single autosomal mode. Returns {person, answer, options, why}
    var opts = ['AA', 'Aa', 'aa', 'Cannot tell (AA or Aa)'];
    var cands = [];
    T.P.forEach(function (p) {
      var parents = p.father ? [p.father, p.mother] : [];
      var kids = p.kids && p.kids.length ? p.kids : [];
      var ans, why;
      if (mode === 'AR') {
        if (p.aff) { ans = 'aa'; why = 'Affected by a recessive trait, so must be homozygous recessive.'; }
        else if (parents.some(function (q) { return q.aff; }) || kids.some(function (q) { return q.aff; })) { ans = 'Aa'; why = 'Unaffected, but has an affected (aa) parent or child, so must carry one a: Aa (a carrier).'; }
        else { ans = 'Cannot tell (AA or Aa)'; why = 'Unaffected with no affected parent or child, so could be AA or a carrier Aa.'; }
      } else {
        if (!p.aff) { ans = 'aa'; why = 'Unaffected by a dominant trait, so must be homozygous recessive.'; }
        else if (parents.some(function (q) { return !q.aff; }) || kids.some(function (q) { return !q.aff; })) { ans = 'Aa'; why = 'Affected, but has an unaffected (aa) parent or child, so must have one a: Aa.'; }
        else { ans = 'Cannot tell (AA or Aa)'; why = 'Affected, and nothing in the tree rules out AA, so it could be AA or Aa.'; }
      }
      cands.push({ p: p, ans: ans, why: why });
    });
    // prefer the interesting ones
    var interesting = cands.filter(function (c) { return c.ans !== (mode === 'AR' ? 'aa' : 'aa'); });
    var c = pick(interesting.length && Math.random() < 0.8 ? interesting : cands);
    return { person: c.p, answer: c.ans, options: opts, why: c.why };
  }
  Tools.pedigree = {
    title: 'Pedigree detective', topic: 'genetics',
    desc: 'Randomly generated family trees. Decide which inheritance patterns are possible and work out genotypes.',
    render: function (el) {
      var T, cons, tries = 0;
      do {
        T = buildPedigree(); tries++;
        var affN = T.P.filter(function (p) { return p.aff; }).length;
        layoutPedigree(T);
        cons = Object.keys(MODES).filter(function (m) { return !violation(m, T.P); });
      } while (tries < 400 && (affN < 3 || affN > T.P.length - 3 || cons.length > 2 || cons.indexOf(T.mode) < 0));
      var gq = (cons.length === 1 && cons[0][0] === 'A') ? genotypeQuestion(T, cons[0]) : null;
      el.innerHTML = '<div class="panel"><div class="row"><span class="tag">Pedigree</span><span class="spacer"></span><button class="btn sm" data-new>New pedigree ↻</button></div>' +
        '<p class="small muted">Squares = males, circles = females, shaded = affected. Roman numerals = generations.</p>' +
        '<div class="svgbox">' + pedigreeSVG(T) + '</div>' +
        '<h3>Q1 · Which inheritance patterns are CONSISTENT with this pedigree? (select all that apply)</h3>' +
        '<div class="chips" id="modes">' + Object.keys(MODES).map(function (m) { return '<span class="chip" data-m="' + m + '">' + MODES[m] + '</span>'; }).join('') + '</div>' +
        '<p><button class="btn pri sm" data-check>Check</button></p><div id="pfb"></div>' +
        (gq ? '<div id="gq" hidden><h3>Q2 · What is the genotype of ' + gq.person.label + '? (use A/a)</h3><div class="chips">' + gq.options.map(function (o) { return '<span class="chip" data-g="' + o + '">' + o + '</span>'; }).join('') + '</div><div id="gfb"></div></div>' : '') +
        '</div>';
      el.querySelector('[data-new]').onclick = function () { Tools.pedigree.render(el); };
      el.querySelectorAll('[data-m]').forEach(function (c) { c.onclick = function () { c.classList.toggle('on'); }; });
      var checked = false;
      el.querySelector('[data-check]').onclick = function () {
        var chosen = [].map.call(el.querySelectorAll('[data-m].on'), function (c) { return c.dataset.m; });
        var ok = chosen.length === cons.length && chosen.every(function (m) { return cons.indexOf(m) >= 0; });
        if (!checked) { checked = true; Store.recordTool('pedigree', ok ? 1 : 0, 1); }
        var lines = Object.keys(MODES).map(function (m) {
          var v = violation(m, T.P);
          return '<li><b>' + MODES[m] + ':</b> ' + (v ? '<span class="kw-miss">ruled out</span> – ' + v : '<span class="kw-hit">possible</span>') + '</li>';
        }).join('');
        var males = T.P.filter(function (p) { return p.aff && p.sex === 'M'; }).length, fem = T.P.filter(function (p) { return p.aff && p.sex === 'F'; }).length;
        el.querySelector('#pfb').innerHTML = fb(ok, ok ? 'Correct!' : 'Consistent patterns: <b>' + cons.map(function (m) { return MODES[m]; }).join(', ') + '</b>.') +
          '<ul class="small">' + lines + '</ul><p class="small muted">Affected: ' + males + ' male(s), ' + fem + ' female(s). (This tree was generated using ' + MODES[T.mode] + '.) Tip: look for the "killer" families first – unaffected × unaffected → affected child means recessive.</p>';
        if (gq) el.querySelector('#gq').hidden = false;
      };
      if (gq) el.querySelectorAll('[data-g]').forEach(function (c) {
        c.onclick = function () {
          if (el.querySelector('#gfb').innerHTML) return;
          var ok = c.dataset.g === gq.answer; c.classList.add('on');
          Store.recordTool('pedigree', ok ? 1 : 0, 1);
          el.querySelector('#gfb').innerHTML = fb(ok, '<b>' + gq.answer + '</b>. ' + gq.why);
        };
      });
    }
  };

  // =====================================================================
  // 3. GALVANIC CELL BUILDER + DISPLACEMENT
  // =====================================================================
  var METALS = [
    { s: 'Mg', n: 'magnesium', c: 2, E: -2.36 }, { s: 'Al', n: 'aluminium', c: 3, E: -1.68 }, { s: 'Zn', n: 'zinc', c: 2, E: -0.76 },
    { s: 'Fe', n: 'iron', c: 2, E: -0.44 }, { s: 'Ni', n: 'nickel', c: 2, E: -0.24 }, { s: 'Sn', n: 'tin', c: 2, E: -0.14 },
    { s: 'Pb', n: 'lead', c: 2, E: -0.13 }, { s: 'Cu', n: 'copper', c: 2, E: 0.34 }, { s: 'Ag', n: 'silver', c: 1, E: 0.80 }
  ];
  function ion(m) { return m.s + '<sup>' + (m.c === 1 ? '' : m.c) + '+</sup>'; }
  function coef(n) { return n === 1 ? '' : n + ' '; }
  function nitrate(m) { return m.s + (m.c === 1 ? 'NO<sub>3</sub>' : '(NO<sub>3</sub>)<sub>' + m.c + '</sub>'); }
  function nitrateName(m) { return m.n + ' nitrate'; }
  function overall(an, ca, opts) {
    opts = opts || {};
    var L = an.c * ca.c / gcd(an.c, ca.c), a = L / an.c, b = L / ca.c;
    if (opts.unbalanced) { a = 1; b = 1; }
    var lhs = coef(a) + an.s + '(s) + ' + coef(b) + ion(ca) + '(aq)', rhs = coef(a) + ion(an) + '(aq) + ' + coef(b) + ca.s + '(s)';
    return opts.reversed ? rhs + ' → ' + lhs : lhs + ' → ' + rhs;
  }
  function oxHalf(m) { return m.s + '(s) → ' + ion(m) + '(aq) + ' + coef(m.c) + 'e<sup>−</sup>'; }
  function redHalf(m) { return ion(m) + '(aq) + ' + coef(m.c) + 'e<sup>−</sup> → ' + m.s + '(s)'; }
  function cellSVG(L, R) {
    var t = 'fill="currentColor" font-size="13" text-anchor="middle"';
    return '<svg viewBox="0 0 520 300" width="520">' +
      '<line x1="110" y1="120" x2="110" y2="40" stroke="currentColor" stroke-width="2"/><line x1="410" y1="120" x2="410" y2="40" stroke="currentColor" stroke-width="2"/>' +
      '<line x1="110" y1="40" x2="235" y2="40" stroke="currentColor" stroke-width="2"/><line x1="285" y1="40" x2="410" y2="40" stroke="currentColor" stroke-width="2"/>' +
      '<circle cx="260" cy="40" r="24" fill="none" stroke="currentColor" stroke-width="2"/><text x="260" y="46" ' + t + ' font-size="18">V</text>' +
      '<path d="M60 130 v130 h100 v-130" fill="none" stroke="currentColor" stroke-opacity=".6" stroke-width="2"/><path d="M360 130 v130 h100 v-130" fill="none" stroke="currentColor" stroke-opacity=".6" stroke-width="2"/>' +
      '<rect x="62" y="170" width="96" height="88" fill="#4f86d9" opacity=".22"/><rect x="362" y="170" width="96" height="88" fill="#4f86d9" opacity=".22"/>' +
      '<rect x="98" y="110" width="24" height="120" fill="currentColor" fill-opacity=".45"/><rect x="398" y="110" width="24" height="120" fill="currentColor" fill-opacity=".45"/>' +
      '<path d="M140 220 V95 H380 V220" fill="none" stroke="#d9a520" stroke-width="14" stroke-linejoin="round" opacity=".8"/>' +
      '<text x="260" y="76" ' + t + '>salt bridge (KNO<tspan baseline-shift="sub" font-size="9">3</tspan>)</text>' +
      '<text x="110" y="285" ' + t + '>' + L.s + ' electrode in ' + L.n + ' nitrate</text><text x="410" y="285" ' + t + '>' + R.s + ' electrode in ' + R.n + ' nitrate</text>' +
      '<text x="45" y="60" ' + t + ' font-weight="bold">LEFT</text><text x="475" y="60" ' + t + ' font-weight="bold">RIGHT</text></svg>';
  }
  function mcqBlock(id, q, options, answerIdx) {
    return '<div class="qrow" data-q="' + id + '" data-ans="' + answerIdx + '"><div>' + q + '</div><div class="chips" style="margin-top:8px">' +
      options.map(function (o, i) { return '<span class="chip" data-i="' + i + '">' + o + '</span>'; }).join('') + '</div></div>';
  }
  function wireMcqs(el, onAll) {
    el.querySelectorAll('.qrow[data-q]').forEach(function (row) {
      row.querySelectorAll('.chip').forEach(function (ch) {
        ch.onclick = function () { row.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('on'); }); ch.classList.add('on'); };
      });
    });
  }
  function markMcqs(el) {
    var right = 0, total = 0;
    el.querySelectorAll('.qrow[data-q]').forEach(function (row) {
      total++;
      var on = row.querySelector('.chip.on'), ans = +row.dataset.ans;
      var ok = on && +on.dataset.i === ans; if (ok) right++;
      row.className = 'qrow ' + (ok ? 'ok' : 'no');
      row.querySelectorAll('.chip').forEach(function (c) { if (+c.dataset.i === ans) c.style.borderColor = 'var(--good)'; });
    });
    return { right: right, total: total };
  }
  Tools.galvanic = {
    title: 'Galvanic cell builder', topic: 'chemistry',
    desc: 'Random metal pairs: anode/cathode, electron flow, half-equations, overall equation, E°cell, salt bridge ions.',
    render: function (el) {
      var pair = shuffle(METALS).slice(0, 2), L = pair[0], R = pair[1];
      var an = L.E < R.E ? L : R, ca = an === L ? R : L, anSide = an === L ? 'left' : 'right';
      var E = +(ca.E - an.E).toFixed(2);
      var oxOpts = shuffle([oxHalf(an), redHalf(an), oxHalf(ca), an.s + '(s) + ' + coef(an.c) + 'e<sup>−</sup> → ' + ion(an) + '(aq)']);
      var ovCorrect = overall(an, ca);
      var ovSet = [ovCorrect, overall(an, ca, { reversed: true }), overall(ca, an)];
      var unb = overall(an, ca, { unbalanced: true }); if (ovSet.indexOf(unb) < 0) ovSet.push(unb);
      else ovSet.push(coef(1) + an.s + '(s) + ' + ion(ca) + '(aq) → ' + an.s + '(s) + ' + ca.s + '(s)');
      var ovOpts = shuffle(ovSet.slice(0, 4));
      el.innerHTML = '<div class="panel"><div class="row"><span class="tag">Galvanic cell</span><span class="spacer"></span><button class="btn sm" data-new>New cell ↻</button></div>' +
        '<p class="small muted">Standard reduction potentials (data sheet): ' + METALS.map(function (m) { return ion(m) + '/' + m.s + ' ' + (m.E > 0 ? '+' : '') + m.E.toFixed(2) + ' V'; }).join(' · ') + '</p>' +
        '<div class="svgbox">' + cellSVG(L, R) + '</div>' +
        mcqBlock('an', '1. Which electrode is the <b>anode</b> (site of oxidation)?', [L.s + ' (left)', R.s + ' (right)'], anSide === 'left' ? 0 : 1) +
        mcqBlock('flow', '2. Electrons flow…', ['left → right through the wire', 'right → left through the wire', 'through the salt bridge'], anSide === 'left' ? 0 : 1) +
        mcqBlock('ox', '3. The oxidation half-equation is…', oxOpts, oxOpts.indexOf(oxHalf(an))) +
        mcqBlock('ov', '4. The balanced overall equation is…', ovOpts, ovOpts.indexOf(ovCorrect)) +
        mcqBlock('mass', '5. Which electrode gains mass over time?', [L.s + ' (left)', R.s + ' (right)'], anSide === 'left' ? 1 : 0) +
        mcqBlock('ions', '6. In the salt bridge, NO<sub>3</sub><sup>−</sup> ions migrate towards the…', ['anode half-cell', 'cathode half-cell'], 0) +
        '<div class="qrow" data-num><div>7. Calculate E°<sub>cell</sub> (V):</div><input class="num" type="text" placeholder="e.g. 1.10"> V</div>' +
        '<button class="btn pri" data-check>Check all</button><div id="gfb"></div></div>';
      wireMcqs(el);
      el.querySelector('[data-new]').onclick = function () { Tools.galvanic.render(el); };
      var once = false;
      el.querySelector('[data-check]').onclick = function () {
        var r = markMcqs(el);
        var numRow = el.querySelector('[data-num]'), v = parseNum(numRow.querySelector('input').value), ok = close(v, E, 0, 0.011);
        numRow.className = 'qrow ' + (ok ? 'ok' : 'no'); if (ok) r.right++; r.total++;
        if (!once) { once = true; Store.recordTool('galvanic', r.right, r.total); }
        el.querySelector('#gfb').innerHTML = fb(r.right === r.total, r.right + '/' + r.total + ' correct.') +
          '<div class="explain small"><b>Working:</b> ' + an.n + ' has the more negative E° (' + an.E.toFixed(2) + ' V), so it is more reactive and is <b>oxidised at the anode</b> (AN OX, negative electrode). ' + ca.n + ' ions are <b>reduced at the cathode</b> (RED CAT), so solid ' + ca.n + ' deposits there and the cathode gains mass; the anode loses mass as it dissolves.<br>' +
          'Oxidation: ' + oxHalf(an) + '<br>Reduction: ' + redHalf(ca) + '<br>Overall (electrons balanced, not shown): ' + ovCorrect + '<br>' +
          'E°<sub>cell</sub> = E°<sub>cathode</sub> − E°<sub>anode</sub> = (' + ca.E.toFixed(2) + ') − (' + an.E.toFixed(2) + ') = <b>' + E.toFixed(2) + ' V</b> (do not multiply E° when you multiply a half-equation).<br>' +
          'Electrons travel through the wire from anode to cathode; the salt bridge carries <b>ions</b>, never electrons. Anions (NO<sub>3</sub><sup>−</sup>) drift to the anode half-cell, which is filling with positive ' + ion(an) + ' ions; K<sup>+</sup> drifts to the cathode half-cell, which is losing ' + ion(ca) + ' ions. This keeps both solutions electrically neutral.</div>';
      };
    }
  };

  Tools.displacement = {
    title: 'Activity series: will it react?', topic: 'chemistry',
    desc: 'Quick-fire displacement predictions with balanced equations.',
    render: function (el) {
      var qs = [];
      for (var i = 0; i < 8; i++) { var p = shuffle(METALS).slice(0, 2); qs.push({ metal: p[0], salt: p[1], yes: p[0].E < p[1].E }); }
      var series = METALS.slice().sort(function (a, b) { return a.E - b.E; }).map(function (m) { return m.s; }).join(' > ');
      el.innerHTML = '<div class="panel"><div class="row"><span class="tag">Displacement</span><span class="spacer"></span><button class="btn sm" data-new>New set ↻</button></div>' +
        '<p class="small muted">Activity series (most → least reactive): K > Na > Ca > ' + series + ' > Au. A metal displaces any metal <b>below</b> it from a solution of its ions.</p>' +
        qs.map(function (q, i) { return mcqBlock('d' + i, (i + 1) + '. A strip of <b>' + q.metal.n + '</b> is placed in <b>' + nitrateName(q.salt) + '</b> solution (' + nitrate(q.salt) + '). Does a reaction occur?', ['Yes', 'No'], q.yes ? 0 : 1); }).join('') +
        '<button class="btn pri" data-check>Check</button><div id="dfb"></div></div>';
      wireMcqs(el);
      el.querySelector('[data-new]').onclick = function () { Tools.displacement.render(el); };
      var once = false;
      el.querySelector('[data-check]').onclick = function () {
        var r = markMcqs(el);
        if (!once) { once = true; Store.recordTool('displacement', r.right, r.total); }
        el.querySelector('#dfb').innerHTML = fb(r.right === r.total, r.right + '/' + r.total) + '<div class="explain small">' + qs.map(function (q, i) {
          return (i + 1) + '. ' + (q.yes ? '<b>Yes</b> – ' + q.metal.n + ' is above ' + q.salt.n + '. ' + overall(q.metal, q.salt) + '. Observation: ' + q.salt.n + ' metal coats the ' + q.metal.n + ' strip; the ' + q.metal.n + ' slowly dissolves.' : '<b>No</b> – ' + q.metal.n + ' is below ' + q.salt.n + ' in the activity series, so it cannot displace it.');
        }).join('<br>') + '</div>';
      };
    }
  };

  // =====================================================================
  // 4. OXIDATION NUMBERS + REDOX IDENTIFICATION
  // =====================================================================
  var OXN = [
    ['S', 'H<sub>2</sub>SO<sub>4</sub>', 6], ['S', 'SO<sub>2</sub>', 4], ['S', 'H<sub>2</sub>S', -2], ['S', 'SO<sub>4</sub><sup>2−</sup>', 6], ['S', 'S<sub>8</sub>', 0],
    ['N', 'NH<sub>3</sub>', -3], ['N', 'HNO<sub>3</sub>', 5], ['N', 'NO<sub>2</sub>', 4], ['N', 'NO', 2], ['N', 'N<sub>2</sub>O', 1], ['N', 'NH<sub>4</sub><sup>+</sup>', -3], ['N', 'NO<sub>2</sub><sup>−</sup>', 3], ['N', 'N<sub>2</sub>', 0],
    ['Mn', 'KMnO<sub>4</sub>', 7], ['Mn', 'MnO<sub>2</sub>', 4], ['Cr', 'K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>', 6], ['C', 'CO<sub>2</sub>', 4], ['C', 'CH<sub>4</sub>', -4], ['C', 'CO', 2],
    ['C', 'CO<sub>3</sub><sup>2−</sup>', 4], ['Fe', 'Fe<sub>2</sub>O<sub>3</sub>', 3], ['Fe', 'FeO', 2], ['Fe', 'Fe', 0], ['Cu', 'CuO', 2], ['Cu', 'Cu<sub>2</sub>O', 1], ['Cl', 'NaClO', 1], ['Cl', 'KClO<sub>3</sub>', 5],
    ['Cl', 'Cl<sub>2</sub>', 0], ['Cl', 'HCl', -1], ['O', 'H<sub>2</sub>O<sub>2</sub>', -1], ['O', 'H<sub>2</sub>O', -2], ['H', 'NaH', -1], ['P', 'PO<sub>4</sub><sup>3−</sup>', 5], ['Al', 'Al<sub>2</sub>O<sub>3</sub>', 3], ['Mg', 'MgCl<sub>2</sub>', 2]
  ];
  var REDOX = [
    ['2Mg(s) + O<sub>2</sub>(g) → 2MgO(s)', ['Mg', 'O<sub>2</sub>', 'MgO'], 0, 1],
    ['Zn(s) + CuSO<sub>4</sub>(aq) → ZnSO<sub>4</sub>(aq) + Cu(s)', ['Zn', 'Cu<sup>2+</sup>', 'SO<sub>4</sub><sup>2−</sup>'], 0, 1],
    ['Fe<sub>2</sub>O<sub>3</sub>(s) + 2Al(s) → Al<sub>2</sub>O<sub>3</sub>(s) + 2Fe(l)', ['Al', 'Fe in Fe<sub>2</sub>O<sub>3</sub>', 'O'], 0, 1],
    ['CuO(s) + H<sub>2</sub>(g) → Cu(s) + H<sub>2</sub>O(l)', ['H<sub>2</sub>', 'Cu in CuO', 'O in CuO'], 0, 1],
    ['2Na(s) + Cl<sub>2</sub>(g) → 2NaCl(s)', ['Na', 'Cl<sub>2</sub>', 'NaCl'], 0, 1],
    ['Fe(s) + 2HCl(aq) → FeCl<sub>2</sub>(aq) + H<sub>2</sub>(g)', ['Fe', 'H<sup>+</sup> (in HCl)', 'Cl<sup>−</sup>'], 0, 1],
    ['CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)', ['C in CH<sub>4</sub>', 'O<sub>2</sub>', 'H in CH<sub>4</sub>'], 0, 1],
    ['Cl<sub>2</sub>(aq) + 2KBr(aq) → 2KCl(aq) + Br<sub>2</sub>(aq)', ['Br<sup>−</sup>', 'Cl<sub>2</sub>', 'K<sup>+</sup>'], 0, 1],
    ['Mg(s) + 2AgNO<sub>3</sub>(aq) → Mg(NO<sub>3</sub>)<sub>2</sub>(aq) + 2Ag(s)', ['Mg', 'Ag<sup>+</sup>', 'NO<sub>3</sub><sup>−</sup>'], 0, 1],
    ['4Al(s) + 3O<sub>2</sub>(g) → 2Al<sub>2</sub>O<sub>3</sub>(s)', ['Al', 'O<sub>2</sub>', 'Al<sub>2</sub>O<sub>3</sub>'], 0, 1]
  ];
  Tools.oxnum = {
    title: 'Oxidation numbers & redox', topic: 'chemistry',
    desc: 'Assign oxidation numbers, then identify what is oxidised and reduced.',
    render: function (el) {
      var ox = shuffle(OXN).slice(0, 6), rx = shuffle(REDOX).slice(0, 3);
      var html = '<div class="panel"><div class="row"><span class="tag">Oxidation numbers</span><span class="spacer"></span><button class="btn sm" data-new>New set ↻</button></div>' +
        '<p class="small muted">Rules: elements = 0 · monatomic ion = its charge · O = −2 (peroxides −1) · H = +1 (metal hydrides −1) · group 1 = +1, group 2 = +2 · sum = overall charge.</p>' +
        ox.map(function (o, i) { return '<div class="qrow" data-ox="' + i + '">Oxidation number of <b>' + o[0] + '</b> in <b>' + o[1] + '</b>: <input class="num" type="text" placeholder="e.g. +4"></div>'; }).join('') +
        '<h3>Who is oxidised / reduced?</h3>';
      rx.forEach(function (r, i) {
        html += mcqBlock('o' + i, r[0] + '<br>Which species is <b>oxidised</b>?', r[1], r[2]);
        html += mcqBlock('r' + i, 'Which species is <b>reduced</b>?', r[1], r[3]);
      });
      html += '<button class="btn pri" data-check>Check</button><div id="ofb"></div></div>';
      el.innerHTML = html; wireMcqs(el);
      el.querySelector('[data-new]').onclick = function () { Tools.oxnum.render(el); };
      var once = false;
      el.querySelector('[data-check]').onclick = function () {
        var r = markMcqs(el);
        ox.forEach(function (o, i) {
          var row = el.querySelector('[data-ox="' + i + '"]'), v = parseNum(row.querySelector('input').value), ok = v === o[2];
          r.total++; if (ok) r.right++;
          row.className = 'qrow ' + (ok ? 'ok' : 'no');
          var old = row.querySelector('.fb'); if (old) old.remove();
          if (!ok) row.insertAdjacentHTML('beforeend', '<span class="fb no"> → ' + (o[2] > 0 ? '+' : '') + o[2] + '</span>');
        });
        if (!once) { once = true; Store.recordTool('oxnum', r.right, r.total); }
        el.querySelector('#ofb').innerHTML = fb(r.right === r.total, r.right + '/' + r.total + ' correct. Remember OIL RIG: the species oxidised loses electrons (oxidation number goes UP) and is the reducing agent.');
      };
    }
  };

  // =====================================================================
  // 5. ENERGY PROFILE READER
  // =====================================================================
  Tools.energy = {
    title: 'Energy profile reader', topic: 'chemistry',
    desc: 'Read ΔH and activation energy (with and without a catalyst) off generated energy profile diagrams.',
    render: function (el) {
      var step = pick([10, 20]);
      var Er = ri(2, 10) * step, dH = (Math.random() < 0.5 ? -1 : 1) * ri(2, 7) * step;
      if (Er + dH < step) dH = Math.abs(dH);
      var Ep = Er + dH, top = Math.max(Er, Ep), peak = top + ri(2, 6) * step, cat = peak - ri(1, Math.max(1, (peak - top) / step - 1)) * step;
      var ymax = Math.ceil((peak + step) / (step * 2)) * step * 2;
      var W = 520, H = 300, x0 = 60, y0 = 260, x1 = 500, yT = 20;
      var Y = function (v) { return y0 - (v / ymax) * (y0 - yT); };
      var g = '';
      for (var v = 0; v <= ymax; v += step) g += '<line x1="' + x0 + '" y1="' + Y(v) + '" x2="' + x1 + '" y2="' + Y(v) + '" stroke="currentColor" stroke-opacity=".12"/><text x="' + (x0 - 6) + '" y="' + (Y(v) + 4) + '" fill="currentColor" fill-opacity=".6" font-size="11" text-anchor="end">' + v + '</text>';
      function curve(pk, dash) {
        return '<path d="M' + x0 + ' ' + Y(Er) + ' H150 C210 ' + Y(Er) + ' 230 ' + Y(pk) + ' 280 ' + Y(pk) + ' C330 ' + Y(pk) + ' 350 ' + Y(Ep) + ' 410 ' + Y(Ep) + ' H' + x1 + '" fill="none" stroke="' + (dash ? '#d97706' : 'currentColor') + '" stroke-width="3"' + (dash ? ' stroke-dasharray="7 6"' : '') + '/>';
      }
      var svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '">' + g +
        '<line x1="' + x0 + '" y1="' + y0 + '" x2="' + x1 + '" y2="' + y0 + '" stroke="currentColor"/><line x1="' + x0 + '" y1="' + y0 + '" x2="' + x0 + '" y2="' + yT + '" stroke="currentColor"/>' +
        curve(peak) + curve(cat, true) +
        '<text x="100" y="' + (Y(Er) - 8) + '" fill="currentColor" font-size="12" text-anchor="middle">reactants</text><text x="455" y="' + (Y(Ep) - 8) + '" fill="currentColor" font-size="12" text-anchor="middle">products</text>' +
        '<text x="16" y="140" fill="currentColor" fill-opacity=".6" font-size="12" transform="rotate(-90 16 140)" text-anchor="middle">Energy (kJ/mol)</text><text x="280" y="290" fill="currentColor" fill-opacity=".6" font-size="12" text-anchor="middle">Reaction progress →</text>' +
        '<text x="' + (x1 - 4) + '" y="' + (yT + 12) + '" fill="#d97706" font-size="11" text-anchor="end">– – catalysed</text></svg>';
      el.innerHTML = '<div class="panel"><div class="row"><span class="tag">Energy profile</span><span class="spacer"></span><button class="btn sm" data-new>New diagram ↻</button></div>' +
        '<div class="svgbox">' + svg + '</div>' +
        mcqBlock('type', '1. This reaction is…', ['exothermic', 'endothermic'], dH < 0 ? 0 : 1) +
        '<div class="qrow" data-n="dh">2. ΔH (include the sign) = <input class="num" type="text"> kJ/mol</div>' +
        '<div class="qrow" data-n="ea">3. Activation energy without a catalyst = <input class="num" type="text"> kJ/mol</div>' +
        '<div class="qrow" data-n="eac">4. Activation energy with the catalyst = <input class="num" type="text"> kJ/mol</div>' +
        '<div class="qrow" data-n="rev">5. (Challenge) Activation energy of the reverse reaction, uncatalysed = <input class="num" type="text"> kJ/mol</div>' +
        '<button class="btn pri" data-check>Check</button><div id="efb"></div></div>';
      wireMcqs(el);
      el.querySelector('[data-new]').onclick = function () { Tools.energy.render(el); };
      var ans = { dh: dH, ea: peak - Er, eac: cat - Er, rev: peak - Ep }, once = false;
      el.querySelector('[data-check]').onclick = function () {
        var r = markMcqs(el);
        Object.keys(ans).forEach(function (k) {
          var row = el.querySelector('[data-n=' + k + ']'), raw = row.querySelector('input').value, v = parseNum(raw);
          var ok = v === ans[k] && (k !== 'dh' || ans[k] > 0 || /-|−/.test(raw));
          r.total++; if (ok) r.right++; row.className = 'qrow ' + (ok ? 'ok' : 'no');
        });
        if (!once) { once = true; Store.recordTool('energy', r.right, r.total); }
        el.querySelector('#efb').innerHTML = fb(r.right === r.total, r.right + '/' + r.total) + '<div class="explain small">Reactants = ' + Er + ', products = ' + Ep + ', peak = ' + peak + ', catalysed peak = ' + cat + ' kJ/mol.<br>' +
          'ΔH = products − reactants = ' + Ep + ' − ' + Er + ' = <b>' + (dH > 0 ? '+' : '') + dH + ' kJ/mol</b> (' + (dH < 0 ? 'negative → exothermic: products have less energy, energy released to surroundings' : 'positive → endothermic: products have more energy, energy absorbed from surroundings') + ').<br>' +
          'Ea = peak − reactants = ' + peak + ' − ' + Er + ' = <b>' + ans.ea + '</b>; with catalyst = ' + cat + ' − ' + Er + ' = <b>' + ans.eac + '</b>. A catalyst lowers Ea but does <b>not</b> change ΔH.<br>Reverse Ea = peak − products = <b>' + ans.rev + '</b>.</div>';
      };
    }
  };

  // =====================================================================
  // 6. ASTRONOMY CALCULATIONS
  // =====================================================================
  var ASTRO = [
    function () { var p = pick([0.05, 0.1, 0.125, 0.2, 0.25, 0.4, 0.5, 0.75, 0.8]); var d = 1 / p; return { q: 'A star has a parallax angle of <b>' + p + ' arcseconds</b>. Calculate its distance in parsecs.', a: d, unit: 'pc', ex: 'd = 1/p = 1/' + p + ' = <b>' + +d.toFixed(2) + ' pc</b>. Smaller parallax → further away.' }; },
    function () { var p = pick([0.1, 0.2, 0.25, 0.5]); var d = 1 / p; return { q: 'A star has a parallax angle of <b>' + p + '″</b>. How far away is it in <b>light years</b>? (1 pc = 3.26 ly)', a: d * 3.26, unit: 'ly', ex: 'd = 1/' + p + ' = ' + d + ' pc; × 3.26 = <b>' + +(d * 3.26).toFixed(2) + ' ly</b>.' }; },
    function () { var d = pick([2, 4, 5, 8, 10, 20, 25]); return { q: 'A star is <b>' + d + ' parsecs</b> away. What parallax angle (in arcseconds) would be measured?', a: 1 / d, unit: '″', ex: 'p = 1/d = 1/' + d + ' = <b>' + 1 / d + '″</b>.' }; },
    function () { var n = pick([2, 4.24, 8.6, 25, 100]); var km = n * 9.46e12; return { q: 'A star is <b>' + n + ' light years</b> away. Convert this to kilometres. (1 ly = 9.46 × 10<sup>12</sup> km; you can type answers like 4.0e13)', a: km, unit: 'km', ex: n + ' × 9.46 × 10<sup>12</sup> = <b>' + sci(km) + ' km</b>.' }; },
    function () { return { q: 'Calculate the number of kilometres in one light year. Use c = 3.0 × 10<sup>5</sup> km/s and 1 year = 365.25 days.', a: 3e5 * 365.25 * 24 * 3600, unit: 'km', ex: '3.0 × 10<sup>5</sup> km/s × (365.25 × 24 × 60 × 60 s) = 3.0 × 10<sup>5</sup> × 3.156 × 10<sup>7</sup> = <b>9.47 × 10<sup>12</sup> km</b>.' }; },
    function () { var au = pick([1, 5.2, 9.5, 30]); var t = au * 1.5e8 / 3e5 / 60; return { q: 'A planet is <b>' + au + ' AU</b> from the Sun. How many <b>minutes</b> does sunlight take to reach it? (1 AU = 1.5 × 10<sup>8</sup> km, c = 3.0 × 10<sup>5</sup> km/s)', a: t, unit: 'min', ex: 't = d/v = (' + au + ' × 1.5 × 10<sup>8</sup>) ÷ 3.0 × 10<sup>5</sup> = ' + +(t * 60).toFixed(0) + ' s = <b>' + +t.toFixed(1) + ' min</b>. This is why AU, not light years, suit the solar system: ' + au + ' AU is only about ' + sci(au * 1.58e-5) + ' ly.' }; },
    function () { var dm = pick([1, 2, 3, 5, 10]); var ratio = Math.pow(100, dm / 5); var m1 = ri(-1, 2); return { q: 'Star A has apparent magnitude <b>' + m1 + '</b> and star B has apparent magnitude <b>' + (m1 + dm) + '</b>. How many times brighter does star A appear?', a: ratio, unit: '×', ex: 'Each magnitude step ≈ 2.512× brightness (5 magnitudes = exactly 100×). Difference = ' + dm + ', so ratio = 2.512<sup>' + dm + '</sup> = <b>' + sci(ratio) + '×</b>. Lower magnitude = brighter.' }; },
    function () { var k = pick([2, 3, 4, 5, 10]); return { q: 'A star is moved <b>' + k + ' times further</b> from Earth. Its observed brightness becomes what fraction of the original? (give a decimal)', a: 1 / (k * k), unit: '', ex: 'Inverse square law: brightness ∝ 1/d<sup>2</sup>, so 1/' + k + '<sup>2</sup> = 1/' + k * k + ' = <b>' + +(1 / (k * k)).toFixed(4) + '</b>.' }; },
    function () { var H = 70, d = pick([10, 50, 100, 200, 350]); return { q: 'Using Hubble\'s law with H<sub>0</sub> = 70 km/s/Mpc, find the recession velocity of a galaxy <b>' + d + ' Mpc</b> away (km/s).', a: H * d, unit: 'km/s', ex: 'v = H<sub>0</sub>d = 70 × ' + d + ' = <b>' + H * d + ' km/s</b>.' }; },
    function () { var H = 70, v = pick([3500, 7000, 14000, 21000]); return { q: 'A galaxy recedes at <b>' + v + ' km/s</b>. With H<sub>0</sub> = 70 km/s/Mpc, how far away is it (Mpc)?', a: v / H, unit: 'Mpc', ex: 'd = v/H<sub>0</sub> = ' + v + '/70 = <b>' + v / H + ' Mpc</b>.' }; },
    function () { var pts = pick([[[100, 7000], [300, 21000]], [[50, 2600], [200, 10400]], [[2, 1000], [6, 3000]]]); var H = (pts[1][1] - pts[0][1]) / (pts[1][0] - pts[0][0]); return { q: 'On a velocity (km/s) vs distance (Mpc) graph, the line of best fit passes through (' + pts[0][0] + ' Mpc, ' + pts[0][1] + ' km/s) and (' + pts[1][0] + ' Mpc, ' + pts[1][1] + ' km/s). Calculate the Hubble constant (km/s/Mpc).', a: H, unit: 'km/s/Mpc', ex: 'H<sub>0</sub> = gradient = Δv/Δd = (' + pts[1][1] + ' − ' + pts[0][1] + ')/(' + pts[1][0] + ' − ' + pts[0][0] + ') = <b>' + H + ' km/s/Mpc</b>. Always use points ON the line, not raw data.' }; }
  ];
  var SPEC = [['O', 'blue', '> 30 000 K'], ['B', 'blue-white', '10 000–30 000 K'], ['A', 'white', '7 500–10 000 K'], ['F', 'yellow-white', '6 000–7 500 K'], ['G', 'yellow', '5 000–6 000 K'], ['K', 'orange', '3 500–5 000 K'], ['M', 'red', '< 3 500 K']];
  Tools.astro = {
    title: 'Astronomy calculations', topic: 'universe',
    desc: 'Parallax, light years, light travel time, magnitudes, inverse square law, Hubble\'s law and spectral classes.',
    render: function (el) {
      var qs = shuffle(ASTRO).slice(0, 5).map(function (f) { return f(); });
      var sp = pick(SPEC), mode = Math.random() < 0.5;
      el.innerHTML = '<div class="panel"><div class="row"><span class="tag">Astronomy maths</span><span class="spacer"></span><button class="btn sm" data-new>New set ↻</button></div>' +
        qs.map(function (q, i) { return '<div class="qrow" data-a="' + i + '"><div>' + (i + 1) + '. ' + q.q + '</div><div class="row" style="margin-top:8px"><input class="num" type="text" style="width:170px"> ' + q.unit + '</div></div>'; }).join('') +
        mcqBlock('sp', '6. ' + (mode ? 'A star appears <b>' + sp[1] + '</b>. Which spectral class is it most likely to be?' : 'A star has a surface temperature of <b>' + sp[2] + '</b>. Which spectral class?'), SPEC.map(function (s) { return s[0]; }), SPEC.indexOf(sp)) +
        '<button class="btn pri" data-check>Check</button><div id="afb"></div></div>';
      wireMcqs(el);
      el.querySelector('[data-new]').onclick = function () { Tools.astro.render(el); };
      var once = false;
      el.querySelector('[data-check]').onclick = function () {
        var r = markMcqs(el);
        var ex = [];
        qs.forEach(function (q, i) {
          var row = el.querySelector('[data-a="' + i + '"]'), v = parseNum(row.querySelector('input').value), ok = close(v, q.a, 0.03);
          r.total++; if (ok) r.right++; row.className = 'qrow ' + (ok ? 'ok' : 'no');
          ex.push((i + 1) + '. ' + q.ex);
        });
        ex.push('6. OBAFGKM ("Oh Be A Fine Girl/Guy, Kiss Me"): ' + SPEC.map(function (s) { return s[0] + ' ' + s[1] + ' ' + s[2]; }).join(' · '));
        if (!once) { once = true; Store.recordTool('astro', r.right, r.total); }
        el.querySelector('#afb').innerHTML = fb(r.right === r.total, r.right + '/' + r.total + ' (3% tolerance)') + '<div class="explain small">' + ex.join('<br>') + '</div>';
      };
    }
  };

  // =====================================================================
  // 7. DATA PROCESSING (Working Scientifically)
  // =====================================================================
  var EXPTS = [
    { iv: 'Temperature of HCl', ivu: '°C', dv: 'Volume of H<sub>2</sub> gas collected in 60 s', dvu: 'mL', xs: [10, 20, 30, 40, 50], m: 0.9, c: 4 },
    { iv: 'Concentration of HCl', ivu: 'mol/L', dv: 'Rate of mass loss', dvu: 'g/min', xs: [0.2, 0.4, 0.6, 0.8, 1.0], m: 1.5, c: 0.05 },
    { iv: 'Height of ramp', ivu: 'cm', dv: 'Speed at bottom squared', dvu: 'm²/s²', xs: [10, 20, 30, 40, 50], m: 0.196, c: 0 },
    { iv: 'Mass added to the hanger', ivu: 'g', dv: 'Extension of the spring', dvu: 'cm', xs: [50, 100, 150, 200, 250], m: 0.04, c: 0 },
    { iv: 'Distance from Elodea to the lamp', ivu: 'cm', dv: 'Oxygen bubbles per minute', dvu: 'bubbles/min', xs: [10, 20, 30, 40, 50], m: -0.5, c: 32 }
  ];
  Tools.data = {
    title: 'Data processing drill', topic: 'ws',
    desc: 'Variables, averages of repeat trials, spotting outliers, gradient with units and % error.',
    render: function (el) {
      var E = pick(EXPTS);
      var dec = Math.max.apply(null, E.xs.map(function (x) { return Math.abs(E.m * x + E.c); })) < 5 ? 2 : 1;
      var rows = E.xs.map(function (x) { var base = E.m * x + E.c; return [0, 1, 2].map(function () { return +(base * (1 + (Math.random() - 0.5) * 0.08)).toFixed(dec); }); });
      var oR = ri(0, 4), oC = ri(0, 2), sign = Math.random() < 0.5 ? 1 : -1;
      rows[oR][oC] = +((E.m * E.xs[oR] + E.c) * (1 + sign * 0.35)).toFixed(dec);
      var avgs = rows.map(function (r) { return (r[0] + r[1] + r[2]) / 3; });
      var theo = E.m, x1 = E.xs[0], x2 = E.xs[4], y1 = +(E.m * x1 + E.c).toFixed(dec + 1), y2 = +(E.m * x2 + E.c + E.m * (Math.random() - 0.5) * 6).toFixed(dec + 1);
      var grad = (y2 - y1) / (x2 - x1), perr = Math.abs(grad - theo) / Math.abs(theo) * 100;
      var tbl = '<table class="t data-table"><tr><th>' + E.iv + ' (' + E.ivu + ')</th><th>Trial 1 (' + E.dvu + ')</th><th>Trial 2</th><th>Trial 3</th><th>Average (' + E.dvu + ')</th></tr>' +
        rows.map(function (r, i) { return '<tr><td>' + E.xs[i] + '</td>' + r.map(function (v, j) { return '<td data-cell="' + i + '-' + j + '" style="cursor:pointer">' + v + '</td>'; }).join('') + '<td><input type="text" data-avg="' + i + '"></td></tr>'; }).join('') + '</table>';
      el.innerHTML = '<div class="panel"><div class="row"><span class="tag">Data processing</span><span class="spacer"></span><button class="btn sm" data-new>New data ↻</button></div>' +
        '<p>A student investigated the effect of <b>' + E.iv.toLowerCase() + '</b> on <b>' + E.dv.toLowerCase() + '</b>, with three trials per value.</p>' + tbl +
        mcqBlock('dv', '1. The <b>dependent</b> variable is…', [E.iv, E.dv, 'The number of trials', 'The equipment used'], 1) +
        '<div class="qrow" data-avgq>2. Calculate the average for every row (include all three trials, round to ' + (dec + 1) + ' d.p.). Type into the table.</div>' +
        '<div class="qrow" data-outq>3. Click the trial value in the table that is most likely an <b>outlier</b> (anomalous result). <span id="outSel" class="muted">none selected</span></div>' +
        '<div class="qrow" data-gq>4. The line of best fit passes through (' + x1 + ', ' + y1 + ') and (' + x2 + ', ' + y2 + '). Gradient = <input class="num" type="text"> ' +
        '<select data-unit><option value="">unit…</option><option value="a">' + E.dvu + ' per ' + E.ivu + '</option><option value="b">' + E.ivu + ' per ' + E.dvu + '</option><option value="c">' + E.dvu + '</option></select></div>' +
        '<div class="qrow" data-pq>5. The accepted value of the gradient is ' + theo + '. Calculate the percentage error of the gradient from Q4: <input class="num" type="text"> %</div>' +
        '<button class="btn pri" data-check>Check</button><div id="wfb"></div></div>';
      wireMcqs(el);
      el.querySelector('[data-new]').onclick = function () { Tools.data.render(el); };
      var chosen = null;
      el.querySelectorAll('[data-cell]').forEach(function (td) {
        td.onclick = function () { el.querySelectorAll('[data-cell]').forEach(function (t) { t.style.background = ''; }); td.style.background = 'var(--sel)'; chosen = td.dataset.cell; el.querySelector('#outSel').textContent = 'selected: ' + td.textContent; };
      });
      var once = false;
      el.querySelector('[data-check]').onclick = function () {
        var r = markMcqs(el), avgOk = true;
        avgs.forEach(function (a, i) { var inp = el.querySelector('[data-avg="' + i + '"]'), ok = close(parseNum(inp.value), a, 0.006, Math.pow(10, -(dec + 1)) * 1.01); inp.style.borderColor = ok ? 'var(--good)' : 'var(--bad)'; if (!ok) avgOk = false; });
        el.querySelector('[data-avgq]').className = 'qrow ' + (avgOk ? 'ok' : 'no');
        var outOk = chosen === oR + '-' + oC; el.querySelector('[data-outq]').className = 'qrow ' + (outOk ? 'ok' : 'no');
        var gRow = el.querySelector('[data-gq]'), gOk = close(parseNum(gRow.querySelector('input').value), grad, 0.02) && gRow.querySelector('[data-unit]').value === 'a';
        gRow.className = 'qrow ' + (gOk ? 'ok' : 'no');
        var pRow = el.querySelector('[data-pq]'), pOk = close(parseNum(pRow.querySelector('input').value), perr, 0.05, 0.6);
        pRow.className = 'qrow ' + (pOk ? 'ok' : 'no');
        [avgOk, outOk, gOk, pOk].forEach(function (b) { r.total++; if (b) r.right++; });
        if (!once) { once = true; Store.recordTool('data', r.right, r.total); }
        el.querySelector('#wfb').innerHTML = fb(r.right === r.total, r.right + '/' + r.total) + '<div class="explain small">Averages: ' + avgs.map(function (a) { return a.toFixed(dec + 1); }).join(', ') + ' ' + E.dvu + '.<br>' +
          'Outlier: ' + rows[oR][oC] + ' (row ' + E.xs[oR] + ' ' + E.ivu + ') – it lies far from the other two trials. In an exam: identify it, then either repeat that trial or exclude it from the average and <b>say so</b>.<br>' +
          'Gradient = Δy/Δx = (' + y2 + ' − ' + y1 + ')/(' + x2 + ' − ' + x1 + ') = <b>' + grad.toPrecision(3) + ' ' + E.dvu + ' per ' + E.ivu + '</b> (units = y-units ÷ x-units).<br>' +
          '% error = |experimental − accepted| ÷ accepted × 100 = |' + grad.toPrecision(3) + ' − ' + theo + '| ÷ ' + Math.abs(theo) + ' × 100 = <b>' + perr.toFixed(1) + '%</b>. Low % error → accurate.</div>';
      };
    }
  };

  // =====================================================================
  // 8. SEQUENCE ORDERING (uses SD.seq)
  // =====================================================================
  Tools.sequence = {
    title: 'Put it in order', topic: null,
    desc: 'Life cycle of stars, nutrient cycles, fossil formation, atmosphere layers and more.',
    render: function (el, opt) {
      var list = SD.seq.filter(function (s) { return !opt || !opt.topic || s.topic === opt.topic; });
      if (!list.length) { el.innerHTML = '<p class="muted">No sequence exercises loaded.</p>'; return; }
      var S = (opt && opt.id && SD.seq.filter(function (s) { return s.id === opt.id; })[0]) || pick(list);
      var pool = shuffle(S.items.map(function (t, i) { return { t: t, i: i }; }));
      if (pool.every(function (p, i) { return p.i === i; })) pool.reverse();
      var ans = [];
      function draw(checked) {
        el.innerHTML = '<div class="panel"><div class="row"><span class="tag">Sequence</span><span class="spacer"></span>' +
          '<select data-pick><option value="">Choose exercise…</option>' + list.map(function (s) { return '<option value="' + s.id + '"' + (s.id === S.id ? ' selected' : '') + '>' + esc(s.title.replace(/<[^>]+>/g, '')) + '</option>'; }).join('') + '</select>' +
          '<button class="btn sm" data-new>Random ↻</button></div><h3>' + S.title + '</h3><p class="small muted">Click items in the correct order. Click a placed item to send it back.</p>' +
          '<div class="grid g2"><div><b>Your order</b><div class="seq-ans">' + ans.map(function (p, k) { return '<div class="seq-item' + (checked ? (p.i === k ? ' ok' : ' no') : '') + '" data-back="' + k + '">' + (k + 1) + '. ' + p.t + '</div>'; }).join('') + '</div></div>' +
          '<div><b>Items</b><div class="seq-pool">' + pool.map(function (p, k) { return '<div class="seq-item" data-take="' + k + '">' + p.t + '</div>'; }).join('') + '</div></div></div>' +
          '<p><button class="btn pri" data-check' + (pool.length ? ' disabled' : '') + '>Check order</button></p><div id="qfb">' + (checked ? fb(ans.every(function (p, k) { return p.i === k; }), ans.every(function (p, k) { return p.i === k; }) ? 'Perfect order!' : 'Correct order: ' + S.items.map(function (t, k) { return (k + 1) + '. ' + t; }).join(' → ')) : '') + '</div></div>';
        el.querySelector('[data-new]').onclick = function () { Tools.sequence.render(el, { topic: opt && opt.topic }); };
        el.querySelector('[data-pick]').onchange = function (e) { if (e.target.value) Tools.sequence.render(el, { topic: opt && opt.topic, id: e.target.value }); };
        el.querySelectorAll('[data-take]').forEach(function (d) { d.onclick = function () { ans.push(pool.splice(+d.dataset.take, 1)[0]); draw(false); }; });
        el.querySelectorAll('[data-back]').forEach(function (d) { d.onclick = function () { if (checked) return; pool.push(ans.splice(+d.dataset.back, 1)[0]); draw(false); }; });
        var cb = el.querySelector('[data-check]');
        if (cb) cb.onclick = function () { var ok = ans.every(function (p, k) { return p.i === k; }); Store.recordSeq(S.id, ok); draw(true); };
      }
      draw(false);
    }
  };

  // =====================================================================
  // 9. MATCH-UP (uses SD.cards)
  // =====================================================================
  Tools.match = {
    title: 'Term match-up', topic: null,
    desc: 'Race the clock matching key terms to definitions.',
    render: function (el, opt) {
      var topic = (opt && opt.topic) || '';
      var pool = SD.cards.filter(function (c) { return (!topic || c.topic === topic) && c.front.length < 70; });
      var set = shuffle(pool).slice(0, 6);
      var right = shuffle(set.slice()), sel = null, misses = 0, done = 0, t0 = Date.now();
      function strip(s) { var t = String(s).replace(/<[^>]+>/g, ''); return t.length > 150 ? t.slice(0, 147) + '…' : t; }
      el.innerHTML = '<div class="panel"><div class="row"><span class="tag">Match-up</span><select data-topic><option value="">All topics</option>' +
        SD.topics.map(function (t) { return '<option value="' + t.id + '"' + (t.id === topic ? ' selected' : '') + '>' + esc(t.short) + '</option>'; }).join('') + '</select><span class="spacer"></span><button class="btn sm" data-new>New round ↻</button></div>' +
        '<div class="match" style="margin-top:12px"><div class="seq-pool">' + set.map(function (c, i) { return '<div class="seq-item" data-l="' + i + '">' + c.front + '</div>'; }).join('') + '</div>' +
        '<div class="seq-pool">' + right.map(function (c) { return '<div class="seq-item small" data-r="' + set.indexOf(c) + '">' + strip(c.back) + '</div>'; }).join('') + '</div></div><div id="mfb"></div></div>';
      el.querySelector('[data-new]').onclick = function () { Tools.match.render(el, { topic: el.querySelector('[data-topic]').value }); };
      el.querySelector('[data-topic]').onchange = function (e) { Tools.match.render(el, { topic: e.target.value }); };
      el.querySelectorAll('[data-l]').forEach(function (d) { d.onclick = function () { el.querySelectorAll('[data-l]').forEach(function (x) { x.classList.remove('sel'); }); d.classList.add('sel'); sel = d.dataset.l; }; });
      el.querySelectorAll('[data-r]').forEach(function (d) {
        d.onclick = function () {
          if (sel == null) return;
          if (d.dataset.r === sel) {
            d.classList.add('gone'); el.querySelector('[data-l="' + sel + '"]').classList.add('gone'); sel = null; done++;
            if (done === set.length) {
              var s = Math.round((Date.now() - t0) / 1000);
              Store.recordTool('match', set.length, set.length + misses);
              el.querySelector('#mfb').innerHTML = fb(misses === 0, 'Done in ' + s + ' s with ' + misses + ' mistake(s).');
            }
          } else { misses++; d.classList.add('no'); setTimeout(function () { d.classList.remove('no'); }, 500); }
        };
      });
    }
  };

  window.Tools = Tools;
  window.TT = { esc: esc, shuffle: shuffle, pick: pick, fb: fb, parseNum: parseNum };
})();
