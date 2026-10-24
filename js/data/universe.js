// The Universe (Year 10, JRAHS 2026) – outcomes 1–21
SD.topics.push({
  id: 'universe',
  name: 'The Universe',
  short: 'Universe',
  color: '#60a5fa',
  examined: true,
  scope: 'All outcomes 1–21 (features of the universe, stellar life cycles, magnitude & brightness, colour & spectral class, H–R diagram, galaxies, distances & parallax, technology, Big Bang evidence: spectra, red shift, Hubble, CMBR)',
  notes: [
    { id: 'uni-o1', title: 'Outcome 1 · Features of galaxies, stars, solar systems and nebulae', html: `
<div class="key"><b>Universe</b>: all of space, time, matter and energy. Hierarchy (small → large): planet → planetary/solar system → star cluster → galaxy → galaxy cluster (e.g. Local Group) → supercluster → universe.</div>
<table class="t">
<tr><th>Feature</th><th>Description</th><th>Examples / facts</th></tr>
<tr><td><b>Nebula</b></td><td>Enormous interstellar cloud of <b>gas (mostly hydrogen and helium) and dust</b>, often many light years across. Some are star nurseries where new stars form; others are the remains of dying stars.</td><td>Orion Nebula (stellar nursery); Ring Nebula (planetary nebula); Crab Nebula (supernova remnant). Types: emission (glowing), reflection, dark.</td></tr>
<tr><td><b>Star</b></td><td>Huge ball of hot <b>plasma</b> held together by its own gravity, producing energy (heat and light) by <b>nuclear fusion</b> of hydrogen into helium in its core.</td><td>The Sun (G2 main-sequence star, ~4.6 billion years old); Proxima Centauri (nearest other star, 4.24 ly).</td></tr>
<tr><td><b>Solar (planetary) system</b></td><td>A star and all the objects orbiting it, held by its gravity: planets, dwarf planets, moons, asteroids, comets, dust.</td><td>Our Solar System: Sun + 8 planets (4 rocky terrestrial: Mercury, Venus, Earth, Mars; 4 gas/ice giants: Jupiter, Saturn, Uranus, Neptune), asteroid belt, Kuiper belt, Oort cloud. Thousands of exoplanet systems known.</td></tr>
<tr><td><b>Galaxy</b></td><td>A vast system of billions of stars, plus gas, dust and dark matter, held together by gravity and rotating about a centre (usually with a supermassive black hole).</td><td>Milky Way: barred spiral, ~100 000 ly across, 100–400 billion stars; Sun ~26 000 ly from centre. Andromeda: nearest large spiral, 2.5 million ly away. Universe contains ~100 billion–2 trillion galaxies.</td></tr>
</table>
<div class="warn">Stars shine by nuclear <b>FUSION</b> (light nuclei joining: H → He), not fission (splitting heavy nuclei). Some student notes say fission – that is wrong.</div>
<div class="tip">A ‘nebula’ (where stars are born) and a ‘planetary nebula’ (shell of gas ejected by a dying Sun-like star) are different – markers specifically penalised this confusion in 2022. A planetary nebula has nothing to do with planets.</div>` },

    { id: 'uni-o2', title: 'Outcome 2 · Compare and contrast stars and planets', html: `
<table class="t">
<tr><th>Feature</th><th>Stars</th><th>Planets</th></tr>
<tr><td>Light</td><td>Produce their own light (luminous) by nuclear fusion</td><td>Only reflect light from their star (non-luminous)</td></tr>
<tr><td>Energy source</td><td>Fusion of H → He in the core</td><td>No fusion (some internal heat from formation/radioactivity)</td></tr>
<tr><td>Mass and size</td><td>Very massive (at least ~0.08 Sun masses, ~80 Jupiters); usually much larger</td><td>Much less massive and smaller</td></tr>
<tr><td>Temperature</td><td>Extremely hot (surface 2 500 – 40 000+ K; cores millions of K)</td><td>Much cooler</td></tr>
<tr><td>Composition</td><td>Hot plasma, mostly hydrogen and helium</td><td>Solid rock/metal (terrestrial) or gas/ice (giants)</td></tr>
<tr><td>Motion</td><td>Positions fixed relative to each other (distant)</td><td>Orbit a star; appear to wander against background stars (‘planet’ = wanderer)</td></tr>
<tr><td>Appearance from Earth</td><td>Twinkle (point sources distorted by atmosphere)</td><td>Shine steadily, show discs/phases in a telescope</td></tr>
</table>
<p><b>Similarities:</b> both are roughly spherical (shaped by their own gravity), both form from the collapse of the same nebula (planets from the leftover disc), both rotate, both can have orbiting bodies, both made of matter from earlier stars.</p>
<div class="tip">‘Compare’ = similarities AND differences. ‘Contrast’ = differences. Use paired statements: ‘Stars produce their own light by fusion, whereas planets only reflect light.’</div>` },

    { id: 'uni-o3', title: 'Outcome 3 · The role of gravity in forming stars and galaxies', html: `
<div class="key"><b>Gravity</b> is the attractive force between all masses. It pulls matter together: it causes clouds of gas and dust to collapse and form stars, and holds stars together in galaxies.</div>
<h4>Stars</h4>
<ol><li>A region of a nebula is slightly denser (perhaps disturbed by a nearby supernova shock wave).</li>
<li>Gravity pulls gas and dust towards this region; the cloud collapses and starts to spin, flattening into a disc.</li>
<li>Gravitational potential energy is converted into heat – the centre becomes a hot, dense <b>protostar</b>.</li>
<li>When the core reaches ~10–15 million °C, <b>hydrogen fusion</b> begins → a star is born.</li>
<li>On the main sequence, inward gravity is balanced by outward pressure from fusion energy (hydrostatic equilibrium). When fuel runs out gravity wins again and the core collapses.</li></ol>
<h4>Galaxies</h4>
<ul><li>After the Big Bang, slightly denser regions of matter (seen as tiny ripples in the CMBR) attracted more matter by gravity, forming huge clumps of gas (and dark matter) that became galaxies.</li>
<li>Gravity holds billions of stars in orbit around the galaxy’s centre, causes galaxies to group into clusters, and causes galaxies to collide and merge.</li>
<li>Gravity also forms planets (accretion in the disc around a young star).</li></ul>
<div class="model"><b>Model answer (2 marks):</b> Gravity pulls particles of gas and dust in a nebula together, causing the cloud to collapse and heat up to form a protostar; when the core is hot and dense enough, fusion begins. On a larger scale gravity pulls clouds of gas and stars together and holds them in orbit around a common centre, forming galaxies.</div>` },

    { id: 'uni-o4', title: 'Outcome 4 · Life cycle of a star like the Sun', html: `
<svg viewBox="0 0 640 175" width="100%" style="max-height:220px" font-size="10" fill="currentColor" text-anchor="middle">
<defs><marker id="uniAh1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<g fill="none" stroke="currentColor" stroke-width="1.3">
<rect x="4" y="74" width="72" height="26" rx="5"/><rect x="92" y="74" width="72" height="26" rx="5"/><rect x="180" y="74" width="80" height="26" rx="5"/>
<rect x="290" y="22" width="76" height="26" rx="5"/><rect x="382" y="22" width="82" height="26" rx="5"/><rect x="480" y="22" width="70" height="26" rx="5"/><rect x="564" y="22" width="72" height="26" rx="5" stroke-dasharray="4 3"/>
<rect x="290" y="126" width="76" height="26" rx="5"/><rect x="382" y="126" width="82" height="26" rx="5"/><rect x="490" y="104" width="76" height="26" rx="5"/><rect x="490" y="144" width="76" height="26" rx="5"/>
<path d="M76 87H90" marker-end="url(#uniAh1)"/><path d="M164 87H178" marker-end="url(#uniAh1)"/>
<path d="M260 82L288 40" marker-end="url(#uniAh1)"/><path d="M260 92L288 134" marker-end="url(#uniAh1)"/>
<path d="M366 35H380" marker-end="url(#uniAh1)"/><path d="M464 35H478" marker-end="url(#uniAh1)"/><path d="M550 35H562" marker-end="url(#uniAh1)"/>
<path d="M366 139H380" marker-end="url(#uniAh1)"/><path d="M464 135L488 120" marker-end="url(#uniAh1)"/><path d="M464 143L488 154" marker-end="url(#uniAh1)"/>
</g>
<text x="40" y="91">Nebula</text><text x="128" y="91">Protostar</text><text x="220" y="91">Main sequence</text>
<text x="328" y="39">Red giant</text><text x="423" y="39">Planetary nebula</text><text x="515" y="39">White dwarf</text><text x="600" y="39">Black dwarf</text>
<text x="328" y="143">Red supergiant</text><text x="423" y="143">Supernova</text><text x="528" y="121">Neutron star</text><text x="528" y="161">Black hole</text>
<text x="380" y="12" font-weight="bold">Sun-like star (&lt; ~8 solar masses)</text>
<text x="400" y="172" font-weight="bold">Massive star (&gt; ~8 solar masses)</text>
</svg>
<h4>Stages for a Sun-mass star</h4>
<ol>
<li><b>Nebula</b> – cloud of gas (H, He) and dust; gravity causes a dense region to collapse.</li>
<li><b>Protostar</b> – collapsing, spinning, heating ball of gas; glows from gravitational heating, no fusion yet.</li>
<li><b>Main-sequence star</b> – core reaches ~15 million K and <b>hydrogen fuses to helium</b>; gravity inward balanced by radiation/gas pressure outward. Stable for ~10 billion years (~90% of its life). The Sun is ~4.6 billion years into this stage.</li>
<li><b>Red giant</b> – hydrogen in the core runs out; core contracts and heats; hydrogen fuses in a shell around it; outer layers expand enormously and cool (red). Core becomes hot enough (~100 million K) to fuse <b>helium into carbon (and oxygen)</b>. The Sun will swallow Mercury, Venus and possibly Earth.</li>
<li><b>Planetary nebula</b> – the outer layers drift off into space as a glowing shell of gas.</li>
<li><b>White dwarf</b> – the hot, exposed carbon–oxygen core (about Earth-sized, extremely dense); no fusion; held up by <b>electron degeneracy pressure</b>; slowly cools and dims.</li>
<li><b>Black dwarf</b> – a cold, dark dead remnant (theoretical – the universe is not yet old enough for any to exist).</li>
</ol>
<div class="warn">White dwarfs are supported by <b>electron</b> degeneracy pressure (neutron stars by <b>neutron</b> degeneracy pressure). Some notes mix these up.</div>
<div class="model"><b>2022 Yearly (2 marks):</b> order the stages Nebula, white dwarf, red giant, protostar → <b>Nebula → protostar → red giant → white dwarf</b>.</div>` },

    { id: 'uni-o5', title: 'Outcomes 5–6 · Mass determines fate; massive stars and black holes', html: `
<div class="key">The main property that determines a star’s life cycle and fate is its <b>MASS</b> (initial mass). Mass controls core temperature and pressure, fusion rate, luminosity, colour, lifetime and the type of remnant.</div>
<h4>Life cycle of a massive star (&gt; ~8 solar masses)</h4>
<ol><li>Nebula → protostar → <b>blue-white main-sequence star</b> (hot, luminous, uses fuel very quickly – only millions of years).</li>
<li><b>Red supergiant</b> – fuses successively heavier elements (He → C → O → Ne → Si → <b>Fe</b>) in onion-like shells.</li>
<li>Iron fusion absorbs rather than releases energy, so fusion stops; the core collapses in under a second and rebounds → <b>supernova</b> explosion (briefly as bright as a whole galaxy). Elements heavier than iron are made and scattered into space, enriching nebulae for new stars and planets.</li>
<li>Remnant core of ~1.4–3 solar masses → <b>neutron star</b> (city-sized ~20 km, made of neutrons, supported by neutron degeneracy pressure; may be a pulsar).</li>
<li>Remnant core of more than ~3 solar masses (original star roughly &gt; 20–25 solar masses) → <b>black hole</b>.</li></ol>
<table class="t">
<tr><th>Initial mass</th><th>Main-sequence lifetime</th><th>End</th><th>Remnant</th></tr>
<tr><td>&lt; 0.5 M<sub>☉</sub> (red dwarf)</td><td>Hundreds of billions – trillions of years</td><td>Slowly becomes white dwarf</td><td>White dwarf</td></tr>
<tr><td>~0.5–8 M<sub>☉</sub> (Sun-like)</td><td>~10 billion yr for the Sun</td><td>Red giant → planetary nebula</td><td>White dwarf → black dwarf</td></tr>
<tr><td>~8–25 M<sub>☉</sub></td><td>Tens of millions of yr</td><td>Red supergiant → supernova</td><td>Neutron star</td></tr>
<tr><td>&gt; ~25 M<sub>☉</sub></td><td>A few million yr</td><td>Red supergiant → supernova</td><td>Black hole</td></tr>
</table>
<h4>Outcome 6 · Requirements for a black hole</h4>
<ul><li>A very massive star (roughly &gt; 20–25 solar masses initially) that ends in a supernova…</li>
<li>…leaving a collapsing core greater than about <b>3 solar masses</b> – too massive for neutron degeneracy pressure to resist gravity.</li>
<li>The core collapses to an extremely small, dense region where gravity is so strong that the <b>escape velocity exceeds the speed of light</b> – nothing, not even light, can escape from inside the <b>event horizon</b>.</li>
<li>Black holes are detected indirectly: X-rays from hot gas in an accretion disc, the orbits of nearby stars (e.g. Sagittarius A* at the Milky Way’s centre), gravitational waves from mergers, and the 2019 Event Horizon Telescope image of M87*.</li></ul>
<div class="model"><b>2022 Yearly (2 marks):</b> When a large star dies the explosion is a <b>supernova</b>; the two possible outcomes are a <b>neutron star</b> or a <b>black hole</b>, depending on the mass of the remaining core.</div>` },

    { id: 'uni-o7', title: 'Outcome 7 · Apparent and absolute magnitude', html: `
<div class="key"><b>Apparent magnitude (m)</b>: how bright a star APPEARS from Earth (depends on luminosity AND distance).<br>
<b>Absolute magnitude (M)</b>: how bright a star WOULD appear if it were placed at a standard distance of <b>10 parsecs (32.6 light years)</b> – a measure of its true brightness (luminosity), allowing fair comparison.</div>
<h4>The magnitude scale</h4>
<ul><li><b>Inverse (backwards) scale</b>: the LOWER (more negative) the number, the BRIGHTER the object.</li>
<li><b>Logarithmic</b>: a difference of <b>5 magnitudes = exactly 100×</b> in brightness, so 1 magnitude = 100<sup>1/5</sup> ≈ <b>2.5×</b> (2.512).</li>
<li>Brightness ratio = 2.512<sup>Δm</sup>: Δm = 1 → 2.5×; 2 → 6.3×; 3 → 16×; 5 → 100×; 10 → 10 000×; 15 → 1 000 000×.</li>
<li>Naked-eye limit ≈ +6 in a dark sky.</li></ul>
<table class="t"><tr><th>Object</th><th>Apparent m</th><th>Absolute M</th></tr>
<tr><td>Sun</td><td>−26.7</td><td>+4.8</td></tr>
<tr><td>Full Moon</td><td>−12.7</td><td>(reflects light)</td></tr>
<tr><td>Sirius (brightest night star)</td><td>−1.46</td><td>+1.4</td></tr>
<tr><td>Rigel</td><td>+0.1</td><td>≈ −7</td></tr>
</table>
<p>The Sun looks brightest only because it is so close. Sirius looks brighter than Rigel, but Rigel is thousands of times more luminous – Rigel is much further away.</p>
<h4>Comparing m and M</h4>
<ul><li>m &gt; M (looks dimmer than it would at 10 pc) → the star is <b>further than 10 pc</b>.</li>
<li>m &lt; M → <b>closer than 10 pc</b>. m = M → exactly 10 pc.</li>
<li>Same absolute magnitude but different apparent magnitudes → same luminosity, different distances (the dimmer-looking one is further away).</li></ul>
<div class="warn">Some class slides lost their decimal points in the PDF: the correct values are 1 magnitude ≈ <b>2.5×</b> (not 25×), Sun m = <b>−26.7</b> and M = <b>+4.8</b>, and 10 parsecs ≈ <b>32.6 light years</b> (not 326).</div>
<div class="tip">For calculations: difference in magnitudes first, then 2.512<sup>Δm</sup>. Example: star A m = +1, star B m = +6 → A is 100× brighter.</div>` },

    { id: 'uni-o8', title: 'Outcome 8 · Factors affecting a star’s brightness seen from Earth', html: `
<ol>
<li><b>Luminosity</b> (actual energy output per second) – depends on <b>size (surface area)</b> and <b>surface temperature</b>. A bigger and/or hotter star radiates far more energy (L ∝ R<sup>2</sup>T<sup>4</sup>).</li>
<li><b>Distance</b> – usually the biggest factor. Light spreads out over a larger area: <b>inverse square law</b>, brightness ∝ 1/d<sup>2</sup>. 2× further → ¼ as bright; 3× → 1/9; 10× → 1/100.</li>
<li><b>Interstellar dust and gas</b> – absorbs and scatters starlight (extinction), making stars dimmer and redder.</li>
<li><b>Earth’s atmosphere and conditions</b> – clouds, air pollution, humidity, turbulence (twinkling), light pollution from cities, moonlight, altitude. (This is why observatories are on high, isolated mountains or in space.)</li>
</ol>
<div class="model"><b>2022 Yearly (2 marks):</b> Jane says Alpha and Beta Crucis look equally bright so they must be the same distance away. Is she correct? – <b>No.</b> Apparent brightness depends on both the star’s luminosity and its distance. A more luminous star that is further away can appear as bright as a less luminous nearer star, so equal apparent brightness does not mean equal distance.</div>
<div class="tip">Markers note: just listing the factors does not explain WHY Jane is wrong – you must apply them to the two stars.</div>
<p>Example: Betelgeuse is cool (red, ~3500 K) but appears very bright because it is a red supergiant – its enormous surface area gives it a huge luminosity.</p>` },

    { id: 'uni-o9', title: 'Outcomes 9–10 · Colour, temperature and spectral class', html: `
<div class="key">A star’s <b>colour depends on its surface temperature</b>. Hotter stars emit most strongly at shorter wavelengths (blue); cooler stars at longer wavelengths (red). <b>Blue/blue-white = hottest; red = coolest.</b> (Opposite to the red-hot / blue-cold tap convention!)</div>
<p>Wien’s law: peak wavelength ∝ 1/temperature. As temperature increases, the peak of the intensity–wavelength curve moves to SHORTER wavelengths and the curve gets HIGHER (more energy emitted at every wavelength).</p>
<h4>Spectral classes – ‘Oh Be A Fine Girl/Guy, Kiss Me’</h4>
<table class="t"><tr><th>Class</th><th>Colour</th><th>Surface temperature (K)</th><th>Example</th></tr>
<tr><td>O</td><td>Blue</td><td>&gt; 30 000</td><td>Zeta Puppis</td></tr>
<tr><td>B</td><td>Blue-white</td><td>10 000 – 30 000</td><td>Rigel, Spica</td></tr>
<tr><td>A</td><td>White</td><td>7 500 – 10 000</td><td>Sirius, Vega</td></tr>
<tr><td>F</td><td>Yellow-white</td><td>6 000 – 7 500</td><td>Procyon, Canopus</td></tr>
<tr><td>G</td><td>Yellow</td><td>5 200 – 6 000</td><td>Sun (~5 800 K, G2), Alpha Centauri A</td></tr>
<tr><td>K</td><td>Orange</td><td>3 700 – 5 200</td><td>Arcturus, Aldebaran</td></tr>
<tr><td>M</td><td>Red</td><td>2 400 – 3 700</td><td>Betelgeuse, Antares, Proxima Centauri</td></tr>
</table>
<ul><li>Each class is subdivided 0–9 from hottest to coolest (Sun = G2).</li>
<li>O and B stars are rare and short-lived; M stars (red dwarfs) are the most common.</li>
<li>Spectral class is identified from the <b>absorption lines</b> in a star’s spectrum (which depend on temperature).</li></ul>
<div class="tip">Colour tells you <b>temperature</b> (2022 Q1) – not distance, luminosity or composition on its own.</div>` },

    { id: 'uni-o11', title: 'Outcomes 11–12 · The Hertzsprung–Russell diagram; bigger stars are hotter, brighter, shorter-lived', html: `
<p>The <b>H–R diagram</b> plots stars by <b>luminosity / absolute magnitude</b> (y-axis, brighter at top) against <b>surface temperature / spectral class / colour</b> (x-axis, temperature <b>DECREASES to the right</b>: hot blue O stars on the left, cool red M stars on the right).</p>
<svg viewBox="0 0 360 300" width="100%" style="max-height:320px" font-size="10" fill="currentColor">
<defs><marker id="uniAh2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<g stroke="currentColor" fill="none" stroke-width="1.3">
<path d="M55 15V260H335"/>
<path d="M70 35C140 100 200 170 305 235" stroke-width="16" stroke-opacity="0.3" stroke-linecap="round"/>
<ellipse cx="200" cy="34" rx="105" ry="11" stroke-dasharray="4 3"/>
<ellipse cx="262" cy="92" rx="42" ry="20" stroke-dasharray="4 3"/>
<ellipse cx="110" cy="222" rx="32" ry="12" stroke-dasharray="4 3"/>
<path d="M150 285H260" marker-end="url(#uniAh2)"/>
</g>
<circle cx="197" cy="155" r="4" fill="#facc15"/>
<text x="205" y="152">Sun</text>
<text x="130" y="38">Supergiants</text>
<text x="242" y="96">Giants</text>
<text x="80" y="245">White dwarfs</text>
<text x="105" y="120" transform="rotate(42 105 120)">Main sequence</text>
<g text-anchor="end"><text x="52" y="28">10⁶</text><text x="52" y="71">10⁴</text><text x="52" y="115">10²</text><text x="52" y="158">1</text><text x="52" y="201">10⁻²</text><text x="52" y="244">10⁻⁴</text></g>
<text x="12" y="200" transform="rotate(-90 12 200)">Luminosity (Sun = 1) / absolute magnitude</text>
<g text-anchor="middle"><text x="75" y="12" fill="#60a5fa">O</text><text x="110" y="12" fill="#93c5fd">B</text><text x="145" y="12">A</text><text x="180" y="12">F</text><text x="215" y="12" fill="#facc15">G</text><text x="255" y="12" fill="#fb923c">K</text><text x="295" y="12" fill="#f87171">M</text>
<text x="75" y="273">30 000</text><text x="145" y="273">10 000</text><text x="215" y="273">5 800</text><text x="295" y="273">3 000 K</text></g>
<text x="80" y="296">Surface temperature decreasing →</text>
</svg>
<h4>Regions</h4>
<table class="t"><tr><th>Region</th><th>Position</th><th>Properties</th></tr>
<tr><td><b>Main sequence</b></td><td>Diagonal band top-left → bottom-right</td><td>~90% of stars; fusing H → He in core. Top-left: massive, hot, blue, luminous. Bottom-right: small, cool, red, dim (red dwarfs).</td></tr>
<tr><td><b>Giants</b></td><td>Upper right</td><td>Cool (red/orange) but very luminous because they are huge (large surface area).</td></tr>
<tr><td><b>Supergiants</b></td><td>Across the very top</td><td>Most luminous stars; from stars &gt; ~8 M<sub>☉</sub> (e.g. Betelgeuse, Rigel).</td></tr>
<tr><td><b>White dwarfs</b></td><td>Bottom left</td><td>Hot (white/blue) but dim because they are tiny (Earth-sized).</td></tr>
</table>
<div class="model"><b>2022 Yearly (2 marks):</b> Compare a white dwarf and a giant: white dwarfs are <b>hotter</b> than giants, but giants are much <b>brighter (more luminous)</b> than white dwarfs (because giants are far larger).</div>
<div class="warn">The H–R diagram is a snapshot of many stars, not the path of one star. A star stays at almost the same point during its main sequence, then moves off it (to giants, then to white dwarfs) when its core hydrogen runs out.</div>
<h4>Outcome 12 · Why bigger (more massive) main-sequence stars are hotter, brighter and shorter-lived</h4>
<ul><li><b>More mass → stronger gravity</b> → greater pressure and temperature in the core.</li>
<li>Higher core temperature → <b>much faster fusion rate</b> → more energy produced per second → <b>more luminous</b> (luminosity rises roughly as mass<sup>3.5</sup>).</li>
<li>More energy output → <b>hotter surface</b> → <b>blue-white colour</b>; and a larger radius. Large surface area + high temperature = very bright.</li>
<li>Although they have more fuel, they burn it disproportionately faster, so they <b>run out sooner</b>: a 10 M<sub>☉</sub> star lives only ~20–30 million years vs ~10 billion for the Sun; red dwarfs last trillions of years.</li></ul>
<div class="key">Relationship: mass ↑ → temperature ↑ → colour shifts red → yellow → white → blue; size ↑; luminosity ↑; lifetime ↓. Along the main sequence, mass increases from bottom-right to top-left.</div>` },

    { id: 'uni-o13', title: 'Outcome 13 · Classifying galaxies', html: `
<table class="t"><tr><th>Type</th><th>Shape</th><th>Stars, gas & dust</th><th>Example</th></tr>
<tr><td><b>Elliptical</b> (E0–E7)</td><td>Smooth, featureless oval/round, no arms</td><td>Mostly old, red/yellow stars; very little gas and dust → little new star formation. Range from small dwarfs to the largest galaxies.</td><td>M87 (giant elliptical in Virgo Cluster)</td></tr>
<tr><td><b>Spiral</b> (Sa–Sc)</td><td>Flat rotating disc with a central bulge and spiral arms</td><td>Old stars in the bulge; young, hot blue stars, gas and dust in the arms → active star formation.</td><td>Andromeda (M31), Whirlpool (M51)</td></tr>
<tr><td><b>Barred spiral</b> (SBa–SBc)</td><td>Like a spiral, but a straight <b>bar</b> of stars crosses the centre and the arms start from the ends of the bar</td><td>As for spirals.</td><td><b>Milky Way</b></td></tr>
<tr><td><b>Irregular</b></td><td>No definite shape (often distorted by gravity of neighbours)</td><td>Lots of gas and dust, many young stars, active star formation; usually small.</td><td>Large & Small Magellanic Clouds</td></tr>
</table>
<ul><li>Edwin Hubble classified galaxies on his ‘<b>tuning fork</b>’ diagram (1926).</li>
<li><b>Galaxy clusters</b>: groups of galaxies held together by gravity. The Milky Way belongs to the <b>Local Group</b> (~50+ galaxies incl. Andromeda, Triangulum, Magellanic Clouds); larger clusters such as the Virgo Cluster contain thousands; clusters group into <b>superclusters</b> (e.g. Laniakea).</li></ul>
<div class="tip">To classify from an image: arms? (no → elliptical or irregular; smooth oval = elliptical, chaotic = irregular). Arms from the centre → spiral; arms from the ends of a bar → barred spiral.</div>` },

    { id: 'uni-o14', title: 'Outcomes 14–15 · Units for distances in space', html: `
<table class="t"><tr><th>Unit</th><th>Definition</th><th>Size</th><th>Used for</th></tr>
<tr><td><b>Astronomical unit (AU)</b></td><td>Average distance from the Earth to the Sun</td><td>≈ 1.5 × 10<sup>8</sup> km (150 million km)</td><td>Distances within the Solar System (Neptune ≈ 30 AU)</td></tr>
<tr><td><b>Light year (ly)</b></td><td>Distance light travels in a vacuum in one year</td><td>≈ 9.46 × 10<sup>12</sup> km ≈ 63 000 AU</td><td>Distances to stars and galaxies</td></tr>
<tr><td><b>Parsec (pc)</b></td><td>Distance at which a star has a parallax angle of 1 arcsecond (1/3600°)</td><td>≈ 3.26 ly ≈ 3.09 × 10<sup>13</sup> km ≈ 206 265 AU</td><td>Professional astronomy; kpc (thousand) and Mpc (million) for galaxies</td></tr>
</table>
<h4>Calculating the number of km in 1 light year</h4>
<div class="model">distance = speed × time<br>
speed of light c = 3.0 × 10<sup>5</sup> km s<sup>−1</sup><br>
1 year = 365.25 × 24 × 60 × 60 = 3.156 × 10<sup>7</sup> s<br>
1 ly = 3.0 × 10<sup>5</sup> × 3.156 × 10<sup>7</sup> ≈ <b>9.46 × 10<sup>12</sup> km</b> (9.46 × 10<sup>15</sup> m)</div>
<p>Useful: light from the Sun takes ~8.3 minutes to reach Earth (1.5 × 10<sup>8</sup> ÷ 3 × 10<sup>5</sup> = 500 s). Proxima Centauri = 4.24 ly ≈ 4.0 × 10<sup>13</sup> km. Milky Way ≈ 100 000 ly across; Andromeda 2.5 million ly away.</p>
<h4>Outcome 15 · Why we don’t use light years within the Solar System</h4>
<ul><li>Solar System distances are tiny compared with a light year: Neptune is ~30 AU ≈ 4 light-HOURS ≈ 0.0005 ly; even the Earth–Sun distance is only 0.000016 ly.</li>
<li>Using light years would give very small, awkward decimal numbers that are hard to compare. The AU gives convenient numbers (Earth = 1, Jupiter ≈ 5.2) and relates directly to Earth’s orbit.</li>
<li>Kilometres would give huge numbers; the AU is the appropriate in-between scale. (Choose a unit that suits the scale – like using mm rather than km for an ant.)</li></ul>` },

    { id: 'uni-o16', title: 'Outcome 16 · Stellar parallax', html: `
<div class="key"><b>Stellar parallax</b>: the apparent shift in position of a nearby star against the background of very distant stars, caused by Earth’s movement around the Sun. Nearer stars show a LARGER shift.</div>
<h4>Method</h4>
<ol><li>Observe (photograph) a nearby star against background stars.</li>
<li>Observe it again <b>6 months later</b>, when Earth is on the opposite side of its orbit (maximum baseline = 2 AU).</li>
<li>Measure the angle the star appears to have shifted. The <b>parallax angle p</b> is <b>half</b> of the total angular shift (it corresponds to a 1 AU baseline).</li>
<li>Use trigonometry: <b>d (parsecs) = 1 / p (arcseconds)</b>.</li></ol>
<svg viewBox="0 0 340 150" width="100%" style="max-height:200px" font-size="10" fill="currentColor">
<g stroke="currentColor" fill="none" stroke-width="1.2">
<ellipse cx="80" cy="110" rx="60" ry="18" stroke-dasharray="3 3"/>
<path d="M20 110L250 30L140 110" stroke-dasharray="1 0"/>
<path d="M80 110L250 30" stroke-dasharray="4 3"/>
</g>
<circle cx="80" cy="110" r="6" fill="#facc15"/><circle cx="20" cy="110" r="4" fill="#60a5fa"/><circle cx="140" cy="110" r="4" fill="#60a5fa"/><circle cx="250" cy="30" r="3"/>
<text x="62" y="140">Sun</text><text x="2" y="128">Earth (Jan)</text><text x="125" y="128">Earth (Jul)</text>
<text x="256" y="33">nearby star</text><text x="215" y="55">p</text><text x="150" y="80">d</text><text x="95" y="100">1 AU</text>
<text x="200" y="12">• • distant background stars • •</text>
</svg>
<ul><li>p = 0.5″ → d = 2 pc (6.5 ly); p = 0.1″ → 10 pc; p = 0.25″ → 4 pc. Proxima Centauri: p ≈ 0.77″ → 1.3 pc.</li>
<li>Smaller angle = further away; all stellar parallaxes are less than 1 arcsecond.</li>
<li><b>Limitations</b>: angles become too small to measure for distant stars. From the ground (atmospheric blurring) only to ~100 pc; Hipparcos satellite (1989) ~1 000 pc; <b>Gaia</b> (2013) measures over a billion stars to many thousands of light years.</li>
<li><b>Significance</b>: the first direct, geometric measurement of stellar distances (Friedrich Bessel, 61 Cygni, 1838). It calibrates other distance methods (e.g. Cepheid variables) – the bottom rung of the ‘cosmic distance ladder’ – and lets us calculate absolute magnitudes and luminosities. It also gave direct proof that Earth orbits the Sun.</li></ul>
<div class="tip">Demo: hold a finger at arm’s length and blink each eye – the finger ‘jumps’ more when it is closer to your face.</div>` },

    { id: 'uni-o17', title: 'Outcome 17 · Significance of the telescope + one other technology', html: `
<div class="tip"><b>Assess</b> = make a judgement of value, quality or significance. State a judgement (‘highly significant’), support it with specific examples (who, when, what was discovered, how it changed understanding) and consider limitations.</div>
<h4>The telescope – key milestones</h4>
<table class="t"><tr><th>When / who</th><th>Development</th><th>Significance</th></tr>
<tr><td>1609–10 <b>Galileo</b></td><td>Refracting telescope (~20×)</td><td>Saw the <b>four large moons of Jupiter</b> → not everything orbits Earth, undermining the geocentric model; <b>phases of Venus</b> → supported Copernicus’ heliocentric model; craters on the Moon, sunspots (heavens not ‘perfect’); Milky Way made of countless stars.</td></tr>
<tr><td>1668 Newton</td><td>Reflecting telescope (mirrors)</td><td>Removed colour blurring (chromatic aberration); allowed much larger apertures.</td></tr>
<tr><td>1781 <b>William Herschel</b></td><td>Large reflector</td><td>Discovered <b>Uranus</b> – first planet found with a telescope, doubled the known size of the Solar System; catalogued nebulae and mapped the Milky Way’s shape.</td></tr>
<tr><td>1846 Johann Galle</td><td>Telescope + Le Verrier’s mathematical prediction</td><td>Discovered <b>Neptune</b> where predicted from Uranus’ disturbed orbit – triumph for Newton’s gravity.</td></tr>
<tr><td>1920s <b>Edwin Hubble</b></td><td>100-inch Hooker telescope, Mt Wilson</td><td>Showed (1924) that the Andromeda ‘nebula’ is a separate galaxy far outside the Milky Way → universe vastly larger; 1929 discovered galaxies are receding → <b>expanding universe</b>.</td></tr>
<tr><td>1990– <b>Hubble Space Telescope</b></td><td>Orbiting telescope above the atmosphere</td><td>Sharp images free of atmospheric blurring, UV observations; Hubble Deep Field (thousands of galaxies in a tiny patch); refined H<sub>0</sub> and the age of the universe (13.8 billion years); evidence of accelerating expansion (dark energy).</td></tr>
<tr><td>2021– James Webb Space Telescope</td><td>Infrared space telescope</td><td>Sees through dust and the earliest, most red-shifted galaxies; studies exoplanet atmospheres.</td></tr>
</table>
<div class="warn">Neptune was discovered in 1846 by <b>Johann Galle</b> using <b>Le Verrier’s</b> predictions – not by John Herschel. Uranus was discovered by <b>William</b> Herschel in 1781.</div>
<div class="model"><b>Judgement:</b> The telescope is the single most significant technology in astronomy – it transformed astronomy from naked-eye observation to a science that revealed new planets, moons, other galaxies and the expansion of the universe, and it continues to evolve (radio, space, infrared telescopes). Limitation: ground telescopes are limited by the atmosphere and light pollution, which space telescopes overcome.</div>
<h4>Other technologies (choose ONE for an ‘assess’ answer)</h4>
<table class="t"><tr><th>Technology</th><th>What it does</th><th>Contribution</th></tr>
<tr><td><b>Spectroscope / spectrometer</b></td><td>Splits light into its spectrum</td><td>Reveals stars’ <b>chemical composition</b> (helium discovered in the Sun’s spectrum in 1868 before on Earth), temperature/spectral class, and motion via <b>red/blue shift</b> – the evidence for Hubble’s expanding universe and the Big Bang. Highly significant.</td></tr>
<tr><td><b>CCD (charge-coupled device)</b></td><td>Electronic light sensor (1969, Boyle & Smith) replacing photographic film</td><td>Detects ~70–90% of incoming light vs a few % for film → much fainter, more distant objects; digital data processed by computers; used in Hubble, Kepler (exoplanets), and Gaia.</td></tr>
<tr><td><b>Radio telescopes</b></td><td>Large dishes detect radio waves (e.g. Parkes ‘The Dish’, ASKAP, Square Kilometre Array)</td><td>Work day or night through cloud and dust; discovered pulsars (Jocelyn Bell, 1967), quasars, and the <b>CMBR</b> (Penzias & Wilson’s horn antenna); mapped the Milky Way’s spiral arms; Parkes relayed Apollo 11 TV.</td></tr>
<tr><td><b>Space telescopes / probes</b></td><td>Instruments above the atmosphere (Hubble, COBE, WMAP, Planck, Gaia, JWST)</td><td>Detect wavelengths the atmosphere blocks (X-ray, UV, IR, microwave); COBE/Planck mapped CMBR ripples.</td></tr>
<tr><td><b>Particle accelerators</b> (e.g. LHC, CERN)</td><td>Collide particles at near light speed</td><td>Recreate conditions of the early universe; show energy converting into matter (E = mc<sup>2</sup>); Higgs boson (2012).</td></tr>
</table>` },

    { id: 'uni-o18', title: 'Outcome 18 · The Big Bang and evidence of energy converting into matter', html: `
<div class="key"><b>Big Bang theory</b>: about <b>13.8 billion years ago</b> the universe began from an extremely hot, dense single point (singularity) and has been <b>expanding and cooling</b> ever since. Space itself expanded; as it cooled, <b>energy was converted into matter</b> (particles → nuclei → atoms → stars and galaxies).</div>
<div class="warn">Some notes say the universe is 15 billion years old – outdated. Current value: <b>13.8 billion years</b> (Planck satellite).</div>
<h4>Timeline</h4>
<table class="t"><tr><th>Time after Big Bang</th><th>Event</th></tr>
<tr><td>0</td><td>Big Bang – all energy and space in an infinitely hot, dense point</td></tr>
<tr><td>~10<sup>−36</sup>–10<sup>−32</sup> s</td><td>Inflation – extremely rapid expansion</td></tr>
<tr><td>~10<sup>−6</sup> s</td><td>Energy → quarks, electrons and their antiparticles; quarks combine into protons and neutrons; matter–antimatter annihilation leaves a tiny excess of matter</td></tr>
<tr><td>~3–20 minutes</td><td>Nucleosynthesis: protons and neutrons fuse into helium nuclei → ~75% H, ~25% He by mass</td></tr>
<tr><td>~380 000 years</td><td>Universe cools to ~3000 K; electrons join nuclei to form neutral atoms; universe becomes transparent → light released = <b>CMBR</b></td></tr>
<tr><td>~100–200 million years</td><td>First stars form (gravity)</td></tr>
<tr><td>~1 billion years</td><td>Galaxies form</td></tr>
<tr><td>~9.2 billion years (4.6 billion years ago)</td><td>Sun and Solar System form</td></tr>
<tr><td>13.8 billion years</td><td>Today</td></tr>
</table>
<h4>Evidence that energy can be converted into matter</h4>
<ul>
<li><b>E = mc<sup>2</sup></b> (Einstein, 1905): energy and mass are equivalent; a large amount of energy can produce a small amount of mass (and vice versa, as in fusion in stars).</li>
<li><b>Pair production</b>: a high-energy gamma-ray photon passing near a nucleus turns into an <b>electron and a positron</b> (its antimatter partner). First observed by Carl Anderson (1932) in cloud-chamber tracks; seen as opposite spirals in bubble chambers.</li>
<li><b>Particle accelerators</b> (e.g. Large Hadron Collider, CERN): collisions of particles at near light speed convert kinetic energy into new, heavier particles that were not there before (e.g. the Higgs boson, 2012), recreating early-universe conditions.</li>
<li><b>H : He ratio</b>: the Big Bang model predicts the early universe made matter in the ratio ≈ <b>3 : 1 hydrogen to helium by mass</b> (75% : 25%). Observations of the oldest stars and gas clouds match this prediction.</li>
</ul>
<div class="model"><b>Model answer (3 marks):</b> Einstein’s equation E = mc<sup>2</sup> shows mass and energy are interchangeable. In particle accelerators such as the LHC, the kinetic energy of colliding particles is converted into new particles of matter. In pair production, a high-energy gamma photon becomes an electron–positron pair. The observed 3 : 1 ratio of hydrogen to helium matches predictions of how matter formed from energy in the first minutes after the Big Bang.</div>` },

    { id: 'uni-o19', title: 'Outcome 19 · Absorption & emission spectra; red and blue shift', html: `
<table class="t"><tr><th>Spectrum</th><th>Appearance</th><th>How it forms</th></tr>
<tr><td><b>Continuous</b></td><td>Full rainbow, no gaps</td><td>Hot, dense solid, liquid or gas (e.g. light-globe filament, star’s interior)</td></tr>
<tr><td><b>Emission (bright-line)</b></td><td>Bright coloured lines on a dark background</td><td>Hot, low-density gas: excited electrons drop to lower energy levels and <b>emit</b> light of specific wavelengths</td></tr>
<tr><td><b>Absorption (dark-line)</b></td><td>Continuous spectrum crossed by <b>dark lines</b></td><td>White light passes through a cooler gas (e.g. a star’s atmosphere); atoms <b>absorb</b> specific wavelengths as electrons jump up</td></tr>
</table>
<ul><li>Each element has a unique set of lines (a ‘fingerprint’), at the <b>same wavelengths</b> in its emission and absorption spectra. Comparing a star’s absorption lines with lab spectra identifies its <b>composition</b>.</li>
<li>Stars produce <b>absorption spectra</b> (2022 Yearly asked to identify one).</li></ul>
<h4>Red shift and blue shift (Doppler effect for light)</h4>
<div class="key"><b>Red shift</b>: source moving AWAY → spectral lines shifted towards the red end → <b>wavelength increased, frequency decreased</b>.<br>
<b>Blue shift</b>: source moving TOWARDS us → lines shifted towards the blue end → <b>wavelength decreased, frequency increased</b>.<br>
The bigger the shift, the faster the motion: v ≈ c × Δλ/λ.</div>
<ul><li>Like the siren of an ambulance: higher pitch approaching, lower pitch receding.</li>
<li>The pattern of lines stays the same – it is just displaced – so we can recognise which element it is and measure the shift.</li>
<li><b>Cosmological red shift</b>: light from distant galaxies is stretched as space itself expands.</li>
<li>Almost all galaxies are red-shifted; nearby Andromeda is <b>blue-shifted</b> (moving towards us, will collide with the Milky Way in ~4.5 billion years).</li></ul>
<div class="model"><b>2024 Yearly Q24(b) (2 marks):</b> Light from Andromeda is blue-shifted: its <b>wavelength has decreased</b> and its <b>frequency has increased</b>.</div>` },

    { id: 'uni-o20', title: 'Outcome 20 · Edwin Hubble’s research and the expanding universe', html: `
<h4>What Hubble did</h4>
<ol><li>Measured <b>distances</b> to galaxies using <b>Cepheid variable stars</b> (Henrietta Leavitt’s period–luminosity relationship gives their absolute magnitude; comparing with apparent magnitude gives distance). In 1924 he showed Andromeda is a separate galaxy.</li>
<li>Used <b>red shifts</b> of galaxy spectra (many measured by Vesto Slipher) to calculate their <b>recession velocities</b>.</li>
<li>Plotted velocity against distance (1929): almost all galaxies are moving away, and the <b>further away a galaxy is, the faster it is receding</b> – a linear relationship.</li></ol>
<div class="key"><b>Hubble’s law: v = H<sub>0</sub> d</b><br>v = recession velocity (km s<sup>−1</sup>), d = distance (Mpc), <b>H<sub>0</sub> = gradient of the velocity–distance graph</b> (km s<sup>−1</sup> Mpc<sup>−1</sup>). Modern value ≈ 70 km s<sup>−1</sup> Mpc<sup>−1</sup> (67–73).</div>
<h4>Why it supports an expanding universe / Big Bang</h4>
<ul><li>If all galaxies are moving apart, with speed proportional to distance, then space itself is expanding uniformly (like dots on an inflating balloon – every dot sees all the others moving away; we are not at the centre).</li>
<li>Running the expansion backwards means everything was once together at a single point → a beginning (Big Bang).</li>
<li>Age of universe ≈ 1/H<sub>0</sub> ≈ 14 billion years (more precisely 13.8 billion years).</li></ul>
<h4>Calculating H<sub>0</sub> from a graph (2024 Yearly Q24a)</h4>
<div class="model">Draw the line of best fit through the origin; pick two points far apart ON THE LINE (not data points), e.g. (0, 0) and (2.0 Mpc, 1040 km s<sup>−1</sup>).<br>
H<sub>0</sub> = rise/run = (1040 − 0) ÷ (2.0 − 0) = <b>520 km s<sup>−1</sup> Mpc<sup>−1</sup></b> (Hubble’s 1929 data gave ~500).<br>
Example use: a galaxy 100 Mpc away with H<sub>0</sub> = 70 → v = 70 × 100 = 7000 km s<sup>−1</sup>.</div>
<h4>Why newer data give a better H<sub>0</sub> (2024 Yearly Q24c)</h4>
<ul><li><b>More recent</b> data is closer to the true value: improved telescopes, CCDs and techniques give more accurate distances (Hubble had mis-calibrated his Cepheids); data from many more and far more distant galaxies gives a wider range; points are less scattered about the line of best fit, so the gradient is more reliable.</li>
<li>Hubble’s 1929 value (~500) implied an age of ~2 billion years – younger than the Earth – showing it was inaccurate.</li></ul>` },

    { id: 'uni-o21', title: 'Outcome 21 · CMBR discovery & significance; Big Bang vs steady state', html: `
<div class="key"><b>Cosmic microwave background radiation (CMBR)</b>: faint microwave radiation coming almost uniformly from <b>every direction</b> in space, corresponding to a temperature of about <b>2.7 K</b> (−270 °C). It is the ‘afterglow’ of the Big Bang.</div>
<h4>Discovery</h4>
<ul><li>Predicted in 1948 by George Gamow, Ralph Alpher and Robert Herman as left-over radiation from a hot early universe.</li>
<li><b>1964–65: Arno Penzias and Robert Wilson</b> (Bell Labs, USA) found persistent ‘noise’ in their horn-shaped radio antenna. It came from every direction, day and night, all year, and remained after they removed pigeons and their droppings from the antenna.</li>
<li>Robert Dicke’s team at Princeton (who were building a detector to search for it) recognised it as the predicted Big Bang radiation. Penzias and Wilson won the 1978 Nobel Prize.</li>
<li>Later satellites <b>COBE</b> (1989–92), <b>WMAP</b> and <b>Planck</b> mapped it precisely: a near-perfect blackbody spectrum with tiny temperature ripples (1 part in 100 000).</li></ul>
<h4>Significance</h4>
<ul><li>Released about <b>380 000 years after the Big Bang</b>, when the universe had cooled enough (~3000 K) for neutral atoms to form, making it transparent. Expansion has since stretched (red-shifted) this light from visible/infrared into microwaves – exactly as the Big Bang predicts.</li>
<li>Strong evidence for the <b>Big Bang</b> and <b>against the steady state theory</b>, which could not explain it.</li>
<li>Its tiny ripples show the density variations that grew (by gravity) into galaxies; precise measurements give the age (13.8 billion years) and composition of the universe.</li></ul>
<h4>Big Bang vs steady state</h4>
<table class="t"><tr><th></th><th>Big Bang theory</th><th>Steady state theory (Hoyle, Bondi, Gold, 1948)</th></tr>
<tr><td>Origin</td><td>Universe had a <b>beginning</b> ~13.8 billion years ago from a hot, dense single point</td><td>Universe has <b>no beginning or end</b> – it has always existed</td></tr>
<tr><td>Expansion</td><td>Expanding (and cooling) from that point</td><td>Expanding too</td></tr>
<tr><td>Matter</td><td>All matter/energy created at the start; density decreases as universe expands</td><td><b>New matter is continuously created</b> in the gaps as it expands, so density stays constant – the universe looks the same at all times</td></tr>
<tr><td>Change over time</td><td>Universe evolves – distant (older) galaxies look different (e.g. quasars only far away)</td><td>Universe unchanging on large scales</td></tr>
<tr><td>Evidence</td><td>Red shift/Hubble’s law, CMBR, H : He ≈ 3 : 1, distant galaxies look younger</td><td>Explains red shift only; no explanation for CMBR or H : He ratio; no continuous creation ever observed</td></tr>
<tr><td>Status</td><td>Accepted theory</td><td>Abandoned after CMBR discovered (1965)</td></tr>
</table>
<p>Fred Hoyle coined the term ‘Big Bang’ in 1949 radio broadcast, intending it mockingly.</p>
<div class="model"><b>2024 Yearly Q25 (4 marks):</b> (a) The Big Bang theory states the universe began at a single point about 13.8 billion years ago and has expanded from it, with all matter formed at the start. The steady state theory states the universe has no origin – it has always existed – and matter is continuously created as it expands so it always looks the same. (b) Scientists wanted new research to find evidence that would support or disprove one of the competing theories (e.g. searching for the CMBR).</div>` }
  ],
  cram: `
<h4>Features & life cycles</h4>
<ul><li>Nebula = gas (H, He) + dust; star = plasma ball, gravity, FUSION H → He; solar system = star + orbiting bodies; galaxy = billions of stars + gas + dust held by gravity.</li>
<li>Stars make light by fusion; planets reflect. Gravity collapses nebulae → protostars; holds galaxies.</li>
<li>Sun: nebula → protostar → main sequence → red giant → planetary nebula → white dwarf (electron degeneracy) → black dwarf.</li>
<li>Massive (&gt;8 M<sub>☉</sub>): … → red supergiant → supernova → neutron star (core 1.4–3 M<sub>☉</sub>) or black hole (core &gt; ~3 M<sub>☉</sub>; escape velocity &gt; c). MASS determines fate.</li></ul>
<h4>Brightness & colour</h4>
<ul><li>Apparent m = how bright it looks; absolute M = brightness at 10 pc (32.6 ly). Lower = brighter. 5 mag = 100×; 1 mag ≈ 2.5×.</li>
<li>m &gt; M → further than 10 pc.</li>
<li>Observed brightness: luminosity (size + temperature), distance (inverse square), dust, atmosphere/light pollution.</li>
<li>Colour ↔ temperature: blue hottest, red coolest. O B A F G K M: O &gt;30 000 K blue … G ~5 800 K yellow (Sun G2) … M &lt;3 700 K red.</li>
<li>H–R: y = luminosity/absolute magnitude (bright top); x = temperature DECREASING to the right. MS diagonal (90%), giants upper right, supergiants top, white dwarfs bottom left (hot, dim).</li>
<li>More massive MS star → stronger gravity → hotter core → faster fusion → hotter, bluer, brighter, bigger, shorter life.</li></ul>
<h4>Galaxies & distance</h4>
<ul><li>Elliptical (old stars, little gas), spiral (arms, bulge, young stars), barred spiral (bar – Milky Way), irregular (no shape – Magellanic Clouds). Clusters: Local Group.</li>
<li>AU = 1.5 × 10<sup>8</sup> km (Solar System); ly = 9.46 × 10<sup>12</sup> km (3 × 10<sup>5</sup> km/s × 3.156 × 10<sup>7</sup> s); pc = 3.26 ly. Ly too big for Solar System (Neptune = 4 light-hours).</li>
<li>Parallax: shift measured 6 months apart; p = half shift; d (pc) = 1/p (″); nearer = bigger shift.</li></ul>
<h4>Technology</h4>
<ul><li>Galileo (Jupiter’s moons, Venus phases → against geocentric), W. Herschel Uranus 1781, Galle/Le Verrier Neptune 1846, Hubble (galaxies, expansion), HST above atmosphere.</li>
<li>Others: spectroscope (composition, red shift), CCD (sensitive, digital), radio telescopes (CMBR, pulsars), particle accelerators.</li></ul>
<h4>Big Bang</h4>
<ul><li>13.8 billion years ago, hot dense point, expanding & cooling.</li>
<li>Energy → matter: E = mc<sup>2</sup>, pair production (γ → e<sup>−</sup> + e<sup>+</sup>), particle accelerators, H : He ≈ 3 : 1.</li>
<li>Absorption = dark lines on continuous; emission = bright lines on dark. Red shift: away, λ ↑, f ↓. Blue shift: towards, λ ↓, f ↑.</li>
<li>Hubble: v = H<sub>0</sub>d, H<sub>0</sub> = gradient (~70 km/s/Mpc today; 1929 ≈ 500). Further = faster → expanding. Newer data better: more/more distant galaxies, better equipment, less scatter.</li>
<li>CMBR: Penzias & Wilson 1964–65, 2.7 K microwaves from all directions, released 380 000 yr; supports Big Bang, kills steady state.</li>
<li>Steady state: no beginning, continuous creation of matter, always looks the same.</li></ul>`
});

SD.cards.push(
  { id: 'uni-c1', topic: 'universe', outcome: 'uni-o1', front: 'Nebula', back: 'A huge interstellar cloud of gas (mostly hydrogen and helium) and dust; star-forming regions or the remains of dying stars.' },
  { id: 'uni-c2', topic: 'universe', outcome: 'uni-o1', front: 'Star', back: 'A massive ball of hot plasma held together by gravity, producing energy by nuclear fusion of hydrogen into helium in its core.' },
  { id: 'uni-c3', topic: 'universe', outcome: 'uni-o1', front: 'Solar (planetary) system', back: 'A star and all the objects held in orbit by its gravity – planets, dwarf planets, moons, asteroids, comets.' },
  { id: 'uni-c4', topic: 'universe', outcome: 'uni-o1', front: 'Galaxy', back: 'A vast system of billions of stars plus gas, dust and dark matter held together by gravity (e.g. the Milky Way, a barred spiral).' },
  { id: 'uni-c5', topic: 'universe', outcome: 'uni-o1', front: 'Order from smallest to largest: galaxy, planet, universe, solar system, galaxy cluster', back: 'Planet → solar system → galaxy → galaxy cluster → universe' },
  { id: 'uni-c6', topic: 'universe', outcome: 'uni-o2', front: 'Key differences between stars and planets', back: 'Stars produce their own light by fusion, are far more massive and hotter; planets reflect light, are smaller and orbit stars.' },
  { id: 'uni-c7', topic: 'universe', outcome: 'uni-o2', front: 'Similarities between stars and planets', back: 'Both roughly spherical due to gravity; both form from the collapse of a nebula; both rotate.' },
  { id: 'uni-c8', topic: 'universe', outcome: 'uni-o3', front: 'Role of gravity in star formation', back: 'Gravity pulls gas and dust in a nebula together; the cloud collapses and heats into a protostar until the core is hot and dense enough for fusion.' },
  { id: 'uni-c9', topic: 'universe', outcome: 'uni-o3', front: 'Role of gravity in galaxy formation', back: 'Gravity pulled denser regions of early-universe matter into huge clumps, and holds billions of stars in orbit around the galactic centre and galaxies in clusters.' },
  { id: 'uni-c10', topic: 'universe', outcome: 'uni-o4', front: 'Life cycle of a Sun-like star', back: 'Nebula → protostar → main sequence → red giant → planetary nebula → white dwarf → (black dwarf)' },
  { id: 'uni-c11', topic: 'universe', outcome: 'uni-o4', front: 'Protostar', back: 'A collapsing, heating ball of gas in a nebula that glows from gravitational heating before nuclear fusion begins.' },
  { id: 'uni-c12', topic: 'universe', outcome: 'uni-o4', front: 'Why is a main-sequence star stable?', back: 'Inward pull of gravity is balanced by outward pressure from the energy released by hydrogen fusion in the core.' },
  { id: 'uni-c13', topic: 'universe', outcome: 'uni-o4', front: 'Red giant', back: 'Late stage after core hydrogen runs out: core contracts and heats, outer layers expand and cool (red); helium fuses to carbon in the core.' },
  { id: 'uni-c14', topic: 'universe', outcome: 'uni-o4', front: 'Planetary nebula vs nebula', back: 'Planetary nebula: glowing shell of gas ejected by a dying Sun-like star. Nebula: cloud of gas and dust where stars form. Not the same!' },
  { id: 'uni-c15', topic: 'universe', outcome: 'uni-o4', front: 'White dwarf', back: 'Hot, dense, Earth-sized remnant core of a Sun-like star; no fusion; supported by electron degeneracy pressure; cools over time.' },
  { id: 'uni-c16', topic: 'universe', outcome: 'uni-o5', front: 'Main property that determines a star’s life cycle and fate', back: 'Its (initial) mass.' },
  { id: 'uni-c17', topic: 'universe', outcome: 'uni-o5', front: 'Life cycle of a massive star', back: 'Nebula → protostar → (blue) main sequence → red supergiant → supernova → neutron star or black hole' },
  { id: 'uni-c18', topic: 'universe', outcome: 'uni-o5', front: 'Supernova', back: 'Huge explosion when a massive star’s iron core collapses; briefly as bright as a galaxy; makes and scatters elements heavier than iron.' },
  { id: 'uni-c19', topic: 'universe', outcome: 'uni-o5', front: 'Neutron star', back: 'Extremely dense, ~20 km wide remnant of a supernova (core ~1.4–3 solar masses), made of neutrons, supported by neutron degeneracy pressure.' },
  { id: 'uni-c20', topic: 'universe', outcome: 'uni-o5', front: 'Requirements for a black hole', back: 'A very massive star (> ~20–25 solar masses) that goes supernova leaving a core > ~3 solar masses; collapses until escape velocity exceeds the speed of light.' },
  { id: 'uni-c21', topic: 'universe', outcome: 'uni-o5', front: 'Event horizon', back: 'The boundary around a black hole inside which nothing, not even light, can escape.' },
  { id: 'uni-c22', topic: 'universe', outcome: 'uni-o7', front: 'Apparent magnitude', back: 'How bright a star appears from Earth (depends on luminosity and distance). Lower number = brighter.' },
  { id: 'uni-c23', topic: 'universe', outcome: 'uni-o7', front: 'Absolute magnitude', back: 'How bright a star would appear at a standard distance of 10 parsecs (32.6 ly) – a measure of true luminosity.' },
  { id: 'uni-c24', topic: 'universe', outcome: 'uni-o7', front: 'Magnitude scale: 1 and 5 magnitude differences', back: '5 magnitudes = exactly 100× brightness; 1 magnitude ≈ 2.5× (2.512). Inverse scale – lower is brighter.' },
  { id: 'uni-c25', topic: 'universe', outcome: 'uni-o7', front: 'A star has m = +6 and M = +1. Closer or further than 10 pc?', back: 'Further – it appears dimmer from Earth than it would at 10 pc.' },
  { id: 'uni-c26', topic: 'universe', outcome: 'uni-o8', front: 'Factors affecting a star’s brightness as seen from Earth', back: 'Luminosity (size and surface temperature), distance (inverse square law), interstellar dust/gas, Earth’s atmosphere and light pollution.' },
  { id: 'uni-c27', topic: 'universe', outcome: 'uni-o8', front: 'Inverse square law for brightness', back: 'Brightness ∝ 1/d². Twice as far → ¼ as bright; three times as far → 1/9.' },
  { id: 'uni-c28', topic: 'universe', outcome: 'uni-o9', front: 'Relationship between star colour and temperature', back: 'Colour depends on surface temperature: blue/blue-white = hottest, white, yellow, orange, red = coolest.' },
  { id: 'uni-c29', topic: 'universe', outcome: 'uni-o9', front: 'Spectral classes hottest → coolest (and mnemonic)', back: 'O B A F G K M – ‘Oh Be A Fine Girl/Guy, Kiss Me’' },
  { id: 'uni-c30', topic: 'universe', outcome: 'uni-o9', front: 'Temperatures & colours of O, G and M stars', back: 'O: > 30 000 K blue; G: ~5 200–6 000 K yellow (Sun ~5 800 K, G2); M: < 3 700 K red.' },
  { id: 'uni-c31', topic: 'universe', outcome: 'uni-o9', front: 'Spectral classes B, A, F, K – colour and temperature', back: 'B blue-white 10 000–30 000 K; A white 7 500–10 000 K; F yellow-white 6 000–7 500 K; K orange 3 700–5 200 K.' },
  { id: 'uni-c32', topic: 'universe', outcome: 'uni-o11', front: 'Axes of the H–R diagram', back: 'y: luminosity / absolute magnitude (brighter at top). x: surface temperature / spectral class / colour, with temperature DECREASING to the right (O blue left, M red right).' },
  { id: 'uni-c33', topic: 'universe', outcome: 'uni-o11', front: 'Four regions of the H–R diagram', back: 'Main sequence (diagonal band), giants (upper right), supergiants (top), white dwarfs (bottom left).' },
  { id: 'uni-c34', topic: 'universe', outcome: 'uni-o11', front: 'Compare a white dwarf with a giant (2022 Yearly)', back: 'White dwarfs are hotter; giants are much more luminous (brighter) because they are enormous.' },
  { id: 'uni-c35', topic: 'universe', outcome: 'uni-o11', front: 'Why are bigger main-sequence stars hotter, brighter and shorter-lived?', back: 'More mass → stronger gravity → hotter, denser core → much faster fusion → more energy (hotter, bluer, brighter) → fuel used up sooner.' },
  { id: 'uni-c36', topic: 'universe', outcome: 'uni-o13', front: 'Elliptical galaxy', back: 'Smooth oval shape, no arms; mostly old red stars; little gas and dust, little star formation (e.g. M87).' },
  { id: 'uni-c37', topic: 'universe', outcome: 'uni-o13', front: 'Spiral vs barred spiral galaxy', back: 'Spiral: disc, central bulge, arms from the centre (Andromeda). Barred spiral: arms start from the ends of a central bar of stars (Milky Way).' },
  { id: 'uni-c38', topic: 'universe', outcome: 'uni-o13', front: 'Irregular galaxy', back: 'No definite shape; lots of gas, dust and young stars (e.g. Large and Small Magellanic Clouds).' },
  { id: 'uni-c39', topic: 'universe', outcome: 'uni-o13', front: 'Galaxy cluster', back: 'A group of galaxies bound together by gravity (Milky Way is in the Local Group; Virgo Cluster has thousands).' },
  { id: 'uni-c40', topic: 'universe', outcome: 'uni-o14', front: 'Astronomical unit (AU)', back: 'Average Earth–Sun distance ≈ 1.5 × 10⁸ km; used within the Solar System.' },
  { id: 'uni-c41', topic: 'universe', outcome: 'uni-o14', front: 'Light year – definition and value', back: 'Distance light travels in a vacuum in one year ≈ 9.46 × 10¹² km (3 × 10⁵ km/s × 3.156 × 10⁷ s).' },
  { id: 'uni-c42', topic: 'universe', outcome: 'uni-o14', front: 'Parsec', back: 'Distance at which a star has a parallax of 1 arcsecond ≈ 3.26 light years ≈ 3.09 × 10¹³ km.' },
  { id: 'uni-c43', topic: 'universe', outcome: 'uni-o14', front: 'Why not use light years in the Solar System?', back: 'Distances are far too small (Neptune ≈ 4 light-hours ≈ 0.0005 ly) – awkward tiny decimals; the AU gives convenient numbers.' },
  { id: 'uni-c44', topic: 'universe', outcome: 'uni-o16', front: 'Stellar parallax', back: 'Apparent shift of a nearby star against distant background stars as Earth orbits the Sun; observations 6 months apart; nearer stars shift more.' },
  { id: 'uni-c45', topic: 'universe', outcome: 'uni-o16', front: 'Parallax formula', back: 'd (parsecs) = 1 / p (arcseconds), where p is half the total angular shift over 6 months.' },
  { id: 'uni-c46', topic: 'universe', outcome: 'uni-o17', front: 'Galileo’s telescope discoveries (1610)', back: 'Four moons of Jupiter (not everything orbits Earth – against geocentric model), phases of Venus (supports heliocentric model), Moon craters, sunspots, Milky Way = stars.' },
  { id: 'uni-c47', topic: 'universe', outcome: 'uni-o17', front: 'Who discovered Uranus and Neptune?', back: 'Uranus: William Herschel, 1781 (telescope). Neptune: Johann Galle, 1846, using Le Verrier’s predictions.' },
  { id: 'uni-c48', topic: 'universe', outcome: 'uni-o17', front: 'Advantages of the Hubble Space Telescope', back: 'Above the atmosphere: no blurring, absorption or light pollution; observes UV; deep-field images; refined H₀ and age of universe.' },
  { id: 'uni-c49', topic: 'universe', outcome: 'uni-o17', front: 'CCD and its contribution', back: 'Charge-coupled device: electronic light sensor detecting ~70–90% of light (film ~2–5%) → fainter, more distant objects; digital data for computer analysis.' },
  { id: 'uni-c50', topic: 'universe', outcome: 'uni-o17', front: 'Spectroscope and its contribution', back: 'Splits light into a spectrum → reveals composition, temperature and motion (red/blue shift) of stars and galaxies.' },
  { id: 'uni-c51', topic: 'universe', outcome: 'uni-o18', front: 'Big Bang theory', back: 'The universe began ~13.8 billion years ago from an extremely hot, dense point and has been expanding and cooling ever since.' },
  { id: 'uni-c52', topic: 'universe', outcome: 'uni-o18', front: 'Evidence that energy converts into matter', back: 'E = mc²; pair production (gamma photon → electron + positron); particle accelerators make new particles from collision energy; observed H : He ≈ 3 : 1 matches Big Bang predictions.' },
  { id: 'uni-c53', topic: 'universe', outcome: 'uni-o18', front: 'Pair production', back: 'A high-energy gamma-ray photon near a nucleus converts into an electron and a positron – energy becoming matter.' },
  { id: 'uni-c54', topic: 'universe', outcome: 'uni-o19', front: 'Absorption spectrum', back: 'Continuous spectrum with dark lines where a cooler gas has absorbed specific wavelengths (e.g. starlight through a star’s atmosphere).' },
  { id: 'uni-c55', topic: 'universe', outcome: 'uni-o19', front: 'Emission spectrum', back: 'Bright coloured lines on a dark background, emitted by a hot low-density gas at wavelengths specific to each element.' },
  { id: 'uni-c56', topic: 'universe', outcome: 'uni-o19', front: 'Red shift', back: 'Source moving away: spectral lines shift towards red – wavelength increases, frequency decreases.' },
  { id: 'uni-c57', topic: 'universe', outcome: 'uni-o19', front: 'Blue shift (2024 Yearly)', back: 'Source moving towards us: wavelength decreases, frequency increases (e.g. Andromeda).' },
  { id: 'uni-c58', topic: 'universe', outcome: 'uni-o20', front: 'Hubble’s law', back: 'v = H₀d: a galaxy’s recession velocity is proportional to its distance. H₀ = gradient of velocity–distance graph (~70 km/s/Mpc).' },
  { id: 'uni-c59', topic: 'universe', outcome: 'uni-o20', front: 'How Hubble’s research supports an expanding universe', back: 'Red shifts show nearly all galaxies receding; further galaxies recede faster → space is expanding; tracing back → a single starting point (Big Bang).' },
  { id: 'uni-c60', topic: 'universe', outcome: 'uni-o20', front: 'How did Hubble measure distances to galaxies?', back: 'Using Cepheid variable stars – their period gives their luminosity (Leavitt’s law), compared with apparent brightness to get distance.' },
  { id: 'uni-c61', topic: 'universe', outcome: 'uni-o21', front: 'CMBR – what, who, when', back: 'Cosmic microwave background radiation: ~2.7 K microwave radiation from every direction; discovered by Penzias & Wilson, 1964–65.' },
  { id: 'uni-c62', topic: 'universe', outcome: 'uni-o21', front: 'Significance of CMBR', back: 'Afterglow released ~380 000 years after the Big Bang when atoms formed, stretched to microwaves by expansion; predicted by Big Bang, unexplained by steady state.' },
  { id: 'uni-c63', topic: 'universe', outcome: 'uni-o21', front: 'Steady state theory', back: 'Universe has no beginning and always existed; it expands but new matter is continuously created so it always looks the same (Hoyle, Bondi, Gold).' }
);

SD.mcq.push(
  { id: 'uni-q1', topic: 'universe', outcome: 'uni-o21', q: 'Which evidence best supports the theory that the universe began with the Big Bang?', options: ['Impact craters found on Earth', 'Cosmic background radiation', 'The different compositions of terrestrial and gaseous planets', 'The blue shift of light from distant galaxies'], answer: 1,
    explain: 'The CMBR is the predicted afterglow of the hot early universe. Distant galaxies are RED-shifted (not blue-shifted); craters and planet composition relate to the Solar System, not the origin of the universe.', source: '2024 Yearly Q1' },
  { id: 'uni-q2', topic: 'universe', outcome: 'uni-o1', q: 'Nebulae are gigantic astronomical objects observed in space. What are they made of?', options: ['Planets and stars', 'Dust and gas', 'Stars only', 'Dark matter only'], answer: 1,
    explain: 'Nebulae are clouds of gas (mainly hydrogen and helium) and dust. Galaxies, not nebulae, are made of stars.', source: '2022 Yearly Q5 (adapted)' },
  { id: 'uni-q3', topic: 'universe', outcome: 'uni-o4', q: 'Which process generates the energy that is ultimately released by stars?', options: ['Nuclear fusion', 'Convection currents', 'Thermal conduction', 'Radioactive decay'], answer: 0,
    explain: 'In the core, hydrogen nuclei fuse into helium, converting mass into energy. Convection and conduction only transport energy; radioactive decay is not the main source.', source: '2024 Yearly Q3' },
  { id: 'uni-q4', topic: 'universe', outcome: 'uni-o3', q: 'What causes clouds of dust and gas to form a protostar?', options: ['Magnetism', 'Expansion of matter', 'Gravitational attraction', 'Cosmic background radiation'], answer: 2,
    explain: 'Gravity pulls the gas and dust together; as the cloud collapses it heats up to form a protostar.', source: '2024 Yearly Q5' },
  { id: 'uni-q5', topic: 'universe', outcome: 'uni-o11', q: 'In the Sun’s life cycle (nebula, main sequence, giant, white dwarf), the Sun will be MOST luminous when it is a:', options: ['white dwarf', 'gas cloud (nebula)', 'main-sequence star', 'giant star'], answer: 3,
    explain: 'As a red giant the Sun will be hundreds to thousands of times more luminous than now because of its enormous surface area, even though its surface is cooler.', source: '2024 Yearly Q6' },
  { id: 'uni-q6', topic: 'universe', outcome: 'uni-o9', q: 'The colour of a star gives us information about its:', options: ['distance from Earth', 'luminosity', 'chemical composition', 'surface temperature'], answer: 3,
    explain: 'Colour depends on surface temperature (blue = hot, red = cool). Composition comes from spectral lines; luminosity also depends on size.', source: '2022 Yearly Q1' },
  { id: 'uni-q7', topic: 'universe', outcome: 'uni-o8', q: 'Observatories are often built on isolated mountains. What is the main reason?', options: ['They experience less interference from the atmosphere and light pollution', 'Telescopes work better at low temperatures', 'The land is cheaper', 'Their altitude places them significantly closer to the stars'], answer: 0,
    explain: 'High, remote sites are above much of the atmosphere’s water vapour and turbulence and away from city lights. The few km closer to the stars is negligible.', source: '2022 Yearly Q10' },
  { id: 'uni-q8', topic: 'universe', outcome: 'uni-o9', q: 'Intensity–wavelength curves for stars of different temperatures show that as a star’s temperature increases:', options: ['intensity decreases and peak wavelength increases', 'intensity decreases and peak wavelength decreases', 'intensity increases and peak wavelength decreases', 'intensity increases and peak wavelength increases'], answer: 2,
    explain: 'Hotter stars emit more energy at every wavelength (higher curve) and their peak moves to shorter (bluer) wavelengths (Wien’s law).', source: '2022 Yearly Q11 (adapted)' },
  { id: 'uni-q9', topic: 'universe', outcome: 'uni-o1', q: 'Which list is in order of increasing size?', options: ['Solar system, planet, galaxy, universe', 'Planet, solar system, galaxy, galaxy cluster', 'Planet, galaxy, solar system, universe', 'Galaxy, solar system, galaxy cluster, universe'], answer: 1,
    explain: 'A planet orbits within a solar system; billions of solar systems/stars form a galaxy; galaxies group into clusters.' },
  { id: 'uni-q10', topic: 'universe', outcome: 'uni-o1', q: 'Which best describes a galaxy?', options: ['A star and the planets orbiting it', 'A cloud of gas and dust where stars form', 'A huge system of billions of stars, gas and dust held together by gravity', 'The remains of a supernova explosion'], answer: 2,
    explain: 'A galaxy contains billions of stars plus gas, dust and dark matter. A star with orbiting planets is a solar system; a gas–dust cloud is a nebula.' },
  { id: 'uni-q11', topic: 'universe', outcome: 'uni-o2', q: 'Which statement correctly distinguishes a star from a planet?', options: ['Stars produce their own light by nuclear fusion; planets only reflect light', 'Planets are always larger than stars', 'Stars orbit planets', 'Only planets are spherical'], answer: 0,
    explain: 'Stars are luminous because of fusion; planets shine by reflected starlight. Both are spherical due to gravity, and planets orbit stars.' },
  { id: 'uni-q12', topic: 'universe', outcome: 'uni-o2', q: 'Which observation would help identify a planet rather than a star in the night sky?', options: ['It twinkles strongly', 'It is red', 'It gradually moves relative to the background stars over several nights', 'It appears in the same position every night'], answer: 2,
    explain: 'Planets orbit the Sun so they wander against the ‘fixed’ background stars and shine steadily. Stars twinkle more; colour alone does not distinguish them.' },
  { id: 'uni-q13', topic: 'universe', outcome: 'uni-o3', q: 'What role does gravity play in a galaxy?', options: ['It pushes stars apart so they do not collide', 'It holds stars, gas and dust in orbit around the galactic centre', 'It provides the energy for fusion in all stars directly', 'It has no role at galaxy scales'], answer: 1,
    explain: 'Gravity binds the galaxy together and keeps stars orbiting its centre (and clusters galaxies together).' },
  { id: 'uni-q14', topic: 'universe', outcome: 'uni-o4', q: 'A main-sequence star remains stable for billions of years because:', options: ['it has no gravity', 'it is cooling down steadily', 'outward pressure from fusion energy balances the inward pull of gravity', 'it fuses iron in its core'], answer: 2,
    explain: 'Hydrostatic equilibrium: fusion pressure balances gravity. Iron fusion does not release energy and only happens at the end of massive stars’ lives.' },
  { id: 'uni-q15', topic: 'universe', outcome: 'uni-o4', q: 'After its main-sequence stage, the Sun will next become a:', options: ['red giant', 'white dwarf', 'supernova', 'neutron star'], answer: 0,
    explain: 'When core hydrogen runs out the Sun expands into a red giant, then sheds a planetary nebula and leaves a white dwarf. The Sun is far too small to go supernova.' },
  { id: 'uni-q16', topic: 'universe', outcome: 'uni-o4', q: 'Which is the correct order for the Sun’s life cycle?', options: ['Nebula, red giant, protostar, white dwarf', 'Protostar, nebula, white dwarf, red giant', 'Nebula, protostar, white dwarf, red giant', 'Nebula, protostar, red giant, white dwarf'], answer: 3,
    explain: 'A nebula collapses to a protostar, which becomes a main-sequence star, then a red giant, finally a white dwarf.', source: '2022 Yearly Section D Q2(a)' },
  { id: 'uni-q17', topic: 'universe', outcome: 'uni-o4', q: 'A white dwarf is prevented from collapsing further by:', options: ['nuclear fusion in its core', 'neutron degeneracy pressure', 'electron degeneracy pressure', 'radiation from a planetary nebula'], answer: 2,
    explain: 'White dwarfs have no fusion; electrons packed tightly resist compression (electron degeneracy pressure). Neutron degeneracy pressure supports neutron stars.' },
  { id: 'uni-q18', topic: 'universe', outcome: 'uni-o5', q: 'The main property of a star that determines its life cycle and fate is its:', options: ['colour', 'distance from Earth', 'age', 'mass'], answer: 3,
    explain: 'Mass sets core temperature, fusion rate, luminosity, lifetime and the remnant (white dwarf, neutron star or black hole). Colour is a consequence of mass.' },
  { id: 'uni-q19', topic: 'universe', outcome: 'uni-o5', q: 'A star of 30 solar masses will most likely end its life as a:', options: ['white dwarf', 'black dwarf', 'black hole after a supernova', 'planetary nebula and white dwarf'], answer: 2,
    explain: 'Very massive stars become red supergiants, explode as supernovae and leave a core above ~3 solar masses, which collapses into a black hole.' },
  { id: 'uni-q20', topic: 'universe', outcome: 'uni-o5', q: 'Elements heavier than iron (e.g. gold, uranium) are mainly produced:', options: ['in the cores of main-sequence stars', 'in supernova explosions (and neutron-star collisions)', 'in the Big Bang', 'in planetary nebulae'], answer: 1,
    explain: 'Fusion beyond iron absorbs energy, so heavy elements form in the extreme conditions of supernovae and neutron-star mergers. The Big Bang made mainly H and He.' },
  { id: 'uni-q21', topic: 'universe', outcome: 'uni-o5', q: 'The remnant of a supernova with a core of about 2 solar masses is a:', options: ['neutron star', 'white dwarf', 'black hole', 'red giant'], answer: 0,
    explain: 'Cores of ~1.4–3 solar masses are supported by neutron degeneracy pressure as neutron stars; above ~3 solar masses they become black holes.' },
  { id: 'uni-q22', topic: 'universe', outcome: 'uni-o5', q: 'Light cannot escape from a black hole because:', options: ['black holes are too cold to emit light', 'the escape velocity inside the event horizon is greater than the speed of light', 'they are surrounded by dust', 'they are too far away'], answer: 1,
    explain: 'Gravity is so strong that escaping would require travelling faster than light, which is impossible.' },
  { id: 'uni-q23', topic: 'universe', outcome: 'uni-o7', q: 'Star A has apparent magnitude −1 and star B has apparent magnitude +3. Which statement is correct?', options: ['B appears brighter because it has a larger number', 'A appears brighter, but it may not be more luminous', 'A is definitely closer than B', 'A is definitely more luminous than B'], answer: 1,
    explain: 'Lower magnitude = brighter appearance. Apparent magnitude depends on both luminosity and distance, so we cannot conclude A is closer or more luminous.' },
  { id: 'uni-q24', topic: 'universe', outcome: 'uni-o7', q: 'Star X has apparent magnitude +1 and star Y has +6. How many times brighter does X appear?', options: ['5 times', '100 times', '2.5 times', '500 times'], answer: 1,
    explain: 'A difference of 5 magnitudes is exactly 100× brightness. 5× treats the scale as linear, which it is not.' },
  { id: 'uni-q25', topic: 'universe', outcome: 'uni-o7', q: 'Two stars differ by 3 magnitudes. Approximately how many times brighter is the brighter star?', options: ['3', '7.5', '60', '16'], answer: 3,
    explain: '2.512³ ≈ 15.9 ≈ 16. Multiplying 3 × 2.5 = 7.5 is the common error – the scale is logarithmic so you multiply repeatedly.' },
  { id: 'uni-q26', topic: 'universe', outcome: 'uni-o7', q: 'Absolute magnitude is defined as the brightness a star would have if it were:', options: ['10 parsecs from Earth', '1 light year from Earth', '1 AU from Earth', 'at the centre of the galaxy'], answer: 0,
    explain: 'The standard distance is 10 parsecs (32.6 ly), allowing a fair comparison of true luminosities.' },
  { id: 'uni-q27', topic: 'universe', outcome: 'uni-o7', q: 'A star has apparent magnitude +6 and absolute magnitude +1. This means the star:', options: ['is closer than 10 parsecs', 'is exactly 10 parsecs away', 'is further than 10 parsecs away', 'is a planet'], answer: 2,
    explain: 'It looks dimmer (larger m) from Earth than it would at 10 pc, so it must be further than 10 pc.' },
  { id: 'uni-q28', topic: 'universe', outcome: 'uni-o7', q: 'The Sun has apparent magnitude −26.7 but absolute magnitude +4.8. The best explanation is that:', options: ['the Sun is an unusually luminous star', 'the Sun is very close to Earth compared with other stars', 'the Sun is very hot', 'Earth’s atmosphere magnifies the Sun'], answer: 1,
    explain: 'At 1 AU the Sun is extremely close, so it appears brilliant; at 10 pc it would be an ordinary, faint star (+4.8).' },
  { id: 'uni-q29', topic: 'universe', outcome: 'uni-o8', q: 'If a star were moved to three times its current distance from Earth, its apparent brightness would become:', options: ['1/3 as bright', '1/6 as bright', '1/9 as bright', '3 times brighter'], answer: 2,
    explain: 'Inverse square law: brightness ∝ 1/d² → 1/3² = 1/9.' },
  { id: 'uni-q30', topic: 'universe', outcome: 'uni-o8', q: 'Two stars have the same luminosity but different apparent magnitudes. The most likely reason is that they:', options: ['have different colours', 'are at different distances from Earth', 'have different masses', 'are different spectral classes'], answer: 1,
    explain: 'Same luminosity means same actual output, so the difference in how bright they look must come mainly from distance (or dust).' },
  { id: 'uni-q31', topic: 'universe', outcome: 'uni-o8', q: 'Betelgeuse is a cool red star yet it is one of the brightest stars in our sky. This is because it:', options: ['is very close to the Sun', 'is a red supergiant with an enormous surface area', 'is a white dwarf', 'is hotter than blue stars'], answer: 1,
    explain: 'Luminosity depends on size and temperature. Betelgeuse’s huge radius makes it extremely luminous despite its low surface temperature.' },
  { id: 'uni-q32', topic: 'universe', outcome: 'uni-o8', q: 'Which factor reduces the brightness of a star observed from Earth WITHOUT changing the star itself?', options: ['Its surface temperature', 'Its radius', 'Interstellar dust between the star and Earth', 'Its mass'], answer: 2,
    explain: 'Dust absorbs and scatters starlight on the way to us. Temperature, radius and mass affect the star’s actual luminosity.' },
  { id: 'uni-q33', topic: 'universe', outcome: 'uni-o9', q: 'Which colour of star is the hottest?', options: ['Blue', 'Yellow', 'Orange', 'Red'], answer: 0,
    explain: 'Blue stars (O, B) have the highest surface temperatures; red (M) stars are the coolest.' },
  { id: 'uni-q34', topic: 'universe', outcome: 'uni-o9', q: 'A star has a surface temperature of 8000 K. Its spectral class and colour are:', options: ['O, blue', 'A, white', 'G, yellow', 'K, orange'], answer: 1,
    explain: 'Class A covers ~7 500–10 000 K and appears white. G stars like the Sun are ~5 800 K.' },
  { id: 'uni-q35', topic: 'universe', outcome: 'uni-o9', q: 'Which sequence lists spectral classes from coolest to hottest?', options: ['O B A F G K M', 'M K G F A B O', 'A B F G K M O', 'M G K F B A O'], answer: 1,
    explain: 'OBAFGKM runs hottest → coolest, so coolest → hottest is the reverse: M K G F A B O.' },
  { id: 'uni-q36', topic: 'universe', outcome: 'uni-o9', q: 'The Sun is classified as a G2 star. This tells us it is:', options: ['blue and about 30 000 K', 'yellow and about 5 800 K', 'red and about 3 000 K', 'white and about 10 000 K'], answer: 1,
    explain: 'G stars are yellow with surface temperatures of roughly 5 200–6 000 K; the Sun is ~5 800 K.' },
  { id: 'uni-q37', topic: 'universe', outcome: 'uni-o11', q: 'On a standard H–R diagram, the horizontal axis shows:', options: ['temperature increasing from left to right', 'temperature decreasing from left to right', 'distance from Earth', 'age of the star'], answer: 1,
    explain: 'Temperature is plotted backwards: hottest (O, blue) on the left, coolest (M, red) on the right.' },
  { id: 'uni-q38', topic: 'universe', outcome: 'uni-o11', q: 'White dwarfs are found in the lower-left of the H–R diagram because they are:', options: ['cool and luminous', 'hot and luminous', 'cool and dim', 'hot and dim'], answer: 3,
    explain: 'Left = hot, bottom = dim. They are hot but tiny, so total luminosity is low.' },
  { id: 'uni-q39', topic: 'universe', outcome: 'uni-o11', q: 'Giant stars are cool but very luminous. This is because they:', options: ['are very close to Earth', 'have a very large surface area', 'fuse iron', 'are very young'], answer: 1,
    explain: 'Each square metre of a cool surface emits less, but the enormous surface area gives a huge total output.' },
  { id: 'uni-q40', topic: 'universe', outcome: 'uni-o11', q: 'Compared with the Sun, a main-sequence star at the top-left of the H–R diagram is:', options: ['less massive, cooler and longer-lived', 'more massive, hotter and shorter-lived', 'more massive, cooler and longer-lived', 'less massive, hotter and shorter-lived'], answer: 1,
    explain: 'Along the main sequence, mass increases to the top-left. More mass → hotter, brighter, but burns fuel faster → shorter life.' },
  { id: 'uni-q41', topic: 'universe', outcome: 'uni-o11', q: 'Why does a 10 solar-mass star live much less time than the Sun, even though it has more fuel?', options: ['It starts fusion later', 'Its stronger gravity makes its core hotter so it fuses fuel far faster', 'It is further from Earth', 'It fuses only helium'], answer: 1,
    explain: 'Luminosity rises far faster than mass (~M^3.5), so the extra fuel is used up disproportionately quickly – only tens of millions of years.' },
  { id: 'uni-q42', topic: 'universe', outcome: 'uni-o11', q: 'Approximately what percentage of stars lie on the main sequence?', options: ['10%', '30%', '50%', '90%'], answer: 3,
    explain: 'Stars spend ~90% of their lives fusing hydrogen, so ~90% of observed stars are on the main sequence.' },
  { id: 'uni-q43', topic: 'universe', outcome: 'uni-o13', q: 'A galaxy has no definite shape and contains large amounts of gas, dust and young stars. It is classified as:', options: ['elliptical', 'spiral', 'barred spiral', 'irregular'], answer: 3,
    explain: 'Irregular galaxies (e.g. the Magellanic Clouds) lack structure and are rich in gas. Ellipticals have little gas.' },
  { id: 'uni-q44', topic: 'universe', outcome: 'uni-o13', q: 'Which galaxy type contains mostly old stars and very little gas and dust?', options: ['Elliptical', 'Spiral', 'Barred spiral', 'Irregular'], answer: 0,
    explain: 'Elliptical galaxies have used up or lost their gas, so they form few new stars and contain mainly old red/yellow stars.' },
  { id: 'uni-q45', topic: 'universe', outcome: 'uni-o13', q: 'The Milky Way is classified as a:', options: ['elliptical galaxy', 'barred spiral galaxy', 'irregular galaxy', 'galaxy cluster'], answer: 1,
    explain: 'The Milky Way has a central bar with spiral arms coming off its ends. It belongs to a cluster (the Local Group) but is itself a galaxy.' },
  { id: 'uni-q46', topic: 'universe', outcome: 'uni-o14', q: 'A light year is a unit of:', options: ['time', 'distance', 'speed', 'brightness'], answer: 1,
    explain: 'It is the DISTANCE light travels in one year (~9.46 × 10¹² km), despite containing the word ‘year’.' },
  { id: 'uni-q47', topic: 'universe', outcome: 'uni-o14', q: 'Using c = 3.0 × 10⁵ km s⁻¹ and 1 year = 3.16 × 10⁷ s, one light year is approximately:', options: ['9.5 × 10¹² km', '9.5 × 10⁹ km', '1.1 × 10⁻² km', '3.0 × 10¹³ km'], answer: 0,
    explain: 'distance = speed × time = 3.0 × 10⁵ × 3.16 × 10⁷ = 9.48 × 10¹² km. 3 × 10¹³ km is roughly a parsec.' },
  { id: 'uni-q48', topic: 'universe', outcome: 'uni-o14', q: 'Proxima Centauri is 4.2 light years away. Its distance in kilometres is about (1 ly = 9.46 × 10¹² km):', options: ['2.3 × 10¹² km', '4.0 × 10¹³ km', '4.0 × 10¹² km', '1.3 × 10¹⁸ km'], answer: 1,
    explain: '4.2 × 9.46 × 10¹² = 3.97 × 10¹³ km ≈ 4.0 × 10¹³ km.' },
  { id: 'uni-q49', topic: 'universe', outcome: 'uni-o14', q: 'Light travels at 3.0 × 10⁵ km s⁻¹ and the Sun is 1.5 × 10⁸ km away. How long does sunlight take to reach Earth?', options: ['8 seconds', '50 seconds', 'About 8.3 minutes', 'About 1 hour'], answer: 2,
    explain: 'time = distance ÷ speed = 1.5 × 10⁸ ÷ 3.0 × 10⁵ = 500 s ≈ 8.3 min.' },
  { id: 'uni-q50', topic: 'universe', outcome: 'uni-o14', q: 'Why are astronomical units, rather than light years, used for distances within the Solar System?', options: ['Light does not travel within the Solar System', 'Light years are too small for planets', 'Solar System distances are tiny fractions of a light year, so AU give more convenient numbers', 'AU are more accurate for stars'], answer: 2,
    explain: 'Neptune is only ~0.0005 ly away – awkward numbers. The AU (Earth–Sun distance) scales well to planetary distances.' },
  { id: 'uni-q51', topic: 'universe', outcome: 'uni-o14', q: 'One parsec is approximately equal to:', options: ['1 AU', '3.26 light years', '9.46 × 10¹² km', '100 light years'], answer: 1,
    explain: '1 pc ≈ 3.26 ly ≈ 3.09 × 10¹³ km ≈ 206 265 AU. 9.46 × 10¹² km is one light year.' },
  { id: 'uni-q52', topic: 'universe', outcome: 'uni-o16', q: 'A star has a parallax angle of 0.25 arcseconds. Its distance is:', options: ['0.25 pc', '4 pc', '25 pc', '40 pc'], answer: 1,
    explain: 'd = 1/p = 1/0.25 = 4 parsecs (≈ 13 ly).' },
  { id: 'uni-q53', topic: 'universe', outcome: 'uni-o16', q: 'A star is 20 parsecs away. Its parallax angle is:', options: ['20 arcseconds', '0.2 arcseconds', '0.05 arcseconds', '2 arcseconds'], answer: 2,
    explain: 'p = 1/d = 1/20 = 0.05″.' },
  { id: 'uni-q54', topic: 'universe', outcome: 'uni-o16', q: 'Star P has a parallax of 0.1″ and star Q has a parallax of 0.4″. Which is correct?', options: ['P is closer, at 10 pc', 'Q is closer, at 2.5 pc', 'They are the same distance', 'Q is further, at 4 pc'], answer: 1,
    explain: 'Larger parallax = closer. Q: 1/0.4 = 2.5 pc; P: 1/0.1 = 10 pc.' },
  { id: 'uni-q55', topic: 'universe', outcome: 'uni-o16', q: 'Parallax measurements of a star are taken 6 months apart because:', options: ['the star moves during this time', 'Earth is then on opposite sides of its orbit, giving the largest baseline', 'the Sun must be behind the star', 'stars are only visible twice a year'], answer: 1,
    explain: 'Six months apart, Earth’s positions are 2 AU apart, maximising the apparent shift so it can be measured.' },
  { id: 'uni-q56', topic: 'universe', outcome: 'uni-o16', q: 'Why can parallax not be used to measure distances to distant galaxies?', options: ['Galaxies do not emit light', 'The parallax angles are far too small to measure', 'Galaxies move too fast', 'Parallax only works for planets'], answer: 1,
    explain: 'The further an object, the smaller its parallax; for galaxies it is immeasurably small, so other methods (Cepheids, red shift) are used.' },
  { id: 'uni-q57', topic: 'universe', outcome: 'uni-o17', q: 'Galileo’s observation of four moons orbiting Jupiter was significant because it:', options: ['proved the Sun is a star', 'showed that not everything orbits the Earth, undermining the geocentric model', 'discovered gravity', 'measured the distance to Jupiter'], answer: 1,
    explain: 'Moons circling Jupiter contradicted the idea that all celestial bodies orbit Earth. The phases of Venus further supported the heliocentric model.' },
  { id: 'uni-q58', topic: 'universe', outcome: 'uni-o17', q: 'Which statement about the discovery of planets is correct?', options: ['John Herschel discovered Neptune in 1781', 'William Herschel discovered Uranus in 1781; Galle discovered Neptune in 1846 using Le Verrier’s predictions', 'Galileo discovered Uranus', 'Neptune was discovered with the Hubble Space Telescope'], answer: 1,
    explain: 'Uranus: William Herschel (1781). Neptune: Johann Galle (1846) at the position calculated by Urbain Le Verrier from Uranus’ disturbed orbit.' },
  { id: 'uni-q59', topic: 'universe', outcome: 'uni-o17', q: 'The main advantage of the Hubble Space Telescope over ground-based optical telescopes is that it:', options: ['is closer to the stars', 'is above Earth’s atmosphere, avoiding blurring and absorption', 'has a larger mirror than all ground telescopes', 'can see through black holes'], answer: 1,
    explain: 'The atmosphere blurs, absorbs (e.g. UV) and is affected by weather/light pollution. Many ground telescopes actually have larger mirrors.' },
  { id: 'uni-q60', topic: 'universe', outcome: 'uni-o17', q: 'CCDs replaced photographic film in astronomy mainly because they:', options: ['are cheaper to build than film', 'detect a much higher percentage of incoming light and produce digital data', 'only detect red light', 'do not require telescopes'], answer: 1,
    explain: 'CCDs capture ~70–90% of photons vs a few % for film, revealing fainter objects, and give digital data for computer analysis.' },
  { id: 'uni-q61', topic: 'universe', outcome: 'uni-o17', q: 'Which technology led directly to the discovery of the CMBR?', options: ['Optical refracting telescope', 'Radio antenna (radio telescope)', 'Particle accelerator', 'Spectroscope'], answer: 1,
    explain: 'Penzias and Wilson detected the microwave background with a horn-shaped radio antenna at Bell Labs.' },
  { id: 'uni-q62', topic: 'universe', outcome: 'uni-o18', q: 'Which observation is direct evidence that energy can be converted into matter?', options: ['Red shift of distant galaxies', 'A gamma-ray photon producing an electron–positron pair', 'Stars shining by fusion', 'The phases of Venus'], answer: 1,
    explain: 'In pair production, the photon’s energy becomes the mass of two particles (E = mc²). Fusion is mass converting INTO energy – the reverse.' },
  { id: 'uni-q63', topic: 'universe', outcome: 'uni-o18', q: 'The Big Bang model predicts, and observations confirm, that the ratio of hydrogen to helium (by mass) in the early universe was about:', options: ['1 : 1', '3 : 1', '10 : 1', '1 : 3'], answer: 1,
    explain: 'About 75% H and 25% He by mass, produced in the first minutes after the Big Bang.' },
  { id: 'uni-q64', topic: 'universe', outcome: 'uni-o18', q: 'Particle accelerators such as the LHC support the idea that energy became matter in the early universe because:', options: ['they create black holes', 'collision energy produces new particles that were not present before', 'they measure red shift', 'they detect CMBR'], answer: 1,
    explain: 'The kinetic energy of colliding particles is converted into new particles (e.g. the Higgs boson), as E = mc² predicts.' },
  { id: 'uni-q65', topic: 'universe', outcome: 'uni-o19', q: 'An absorption spectrum appears as:', options: ['bright lines on a dark background', 'a continuous spectrum with dark lines', 'a single bright colour', 'a continuous spectrum with no lines'], answer: 1,
    explain: 'A cooler gas absorbs specific wavelengths from white light, leaving dark lines. Bright lines on a dark background is an emission spectrum.' },
  { id: 'uni-q66', topic: 'universe', outcome: 'uni-o19', q: 'Light from the Andromeda galaxy is blue-shifted. Compared with light from a stationary source, its:', options: ['wavelength has decreased and frequency has increased', 'wavelength has increased and frequency has decreased', 'wavelength and frequency have both increased', 'wavelength and frequency are unchanged'], answer: 0,
    explain: 'Blue shift = source approaching: waves are compressed, so wavelength decreases and frequency increases.', source: '2024 Yearly Q24(b)' },
  { id: 'uni-q67', topic: 'universe', outcome: 'uni-o19', q: 'The spectral lines of a distant galaxy are shifted towards the red end of the spectrum. This shows the galaxy is:', options: ['moving towards us', 'moving away from us', 'very hot', 'made of hydrogen only'], answer: 1,
    explain: 'Red shift (longer wavelength) means recession. The pattern of lines identifies elements; the shift gives the speed.' },
  { id: 'uni-q68', topic: 'universe', outcome: 'uni-o19', q: 'A hydrogen line normally at 656 nm is observed at 662.6 nm in a galaxy’s spectrum. Using v = c × Δλ/λ (c = 3.0 × 10⁵ km s⁻¹), the galaxy’s speed is about:', options: ['3000 km s⁻¹ away from us', '3000 km s⁻¹ towards us', '300 km s⁻¹ away from us', '30 000 km s⁻¹ away from us'], answer: 0,
    explain: 'Δλ = 6.6 nm; 6.6/656 ≈ 0.010; 0.010 × 3.0 × 10⁵ ≈ 3000 km s⁻¹. Longer wavelength (red shift) → receding.' },
  { id: 'uni-q69', topic: 'universe', outcome: 'uni-o20', q: 'Hubble’s law states that:', options: ['all galaxies are moving towards the Milky Way', 'a galaxy’s recession velocity is proportional to its distance', 'galaxies further away move more slowly', 'galaxy brightness is proportional to distance'], answer: 1,
    explain: 'v = H₀d: the further away a galaxy, the faster it recedes – evidence of uniform expansion.' },
  { id: 'uni-q70', topic: 'universe', outcome: 'uni-o20', q: 'If H₀ = 70 km s⁻¹ Mpc⁻¹, a galaxy 100 Mpc away recedes at:', options: ['0.7 km s⁻¹', '170 km s⁻¹', '1.4 km s⁻¹', '7000 km s⁻¹'], answer: 3,
    explain: 'v = H₀d = 70 × 100 = 7000 km s⁻¹.' },
  { id: 'uni-q71', topic: 'universe', outcome: 'uni-o20', q: 'On a graph of recession velocity (km s⁻¹) against distance (Mpc), the line of best fit passes through (0, 0) and (2.0, 1040). The Hubble constant is:', options: ['2080 km s⁻¹ Mpc⁻¹', '520 km s⁻¹ Mpc⁻¹', '0.0019 km s⁻¹ Mpc⁻¹', '1040 km s⁻¹ Mpc⁻¹'], answer: 1,
    explain: 'H₀ = gradient = rise/run = 1040 ÷ 2.0 = 520 km s⁻¹ Mpc⁻¹ (close to Hubble’s 1929 value). 0.0019 is run/rise.', source: '2024 Yearly Q24(a) (adapted)' },
  { id: 'uni-q72', topic: 'universe', outcome: 'uni-o20', q: 'A galaxy is receding at 14 000 km s⁻¹. With H₀ = 70 km s⁻¹ Mpc⁻¹, its distance is:', options: ['200 Mpc', '980 000 Mpc', '0.005 Mpc', '14 Mpc'], answer: 0,
    explain: 'd = v/H₀ = 14 000 ÷ 70 = 200 Mpc.' },
  { id: 'uni-q73', topic: 'universe', outcome: 'uni-o20', q: 'Hubble measured the distances to galaxies using:', options: ['stellar parallax', 'Cepheid variable stars', 'the CMBR', 'radar'], answer: 1,
    explain: 'Cepheids’ pulsation period reveals their luminosity; comparing with apparent brightness gives distance. Parallax is too small for galaxies.' },
  { id: 'uni-q74', topic: 'universe', outcome: 'uni-o20', q: 'Modern measurements of H₀ are considered closer to the true value than Hubble’s 1929 value mainly because:', options: ['the universe has slowed down since 1929', 'they use more, and more distant, galaxies with better equipment, giving less scatter', 'Hubble used the wrong formula', 'modern scientists use a different definition of distance'], answer: 1,
    explain: 'Larger, wider, more precise data sets (better telescopes, CCDs, calibrated Cepheids) give a more reliable gradient. The 1929 data were few, nearby and scattered.', source: '2024 Yearly Q24(c)' },
  { id: 'uni-q75', topic: 'universe', outcome: 'uni-o21', q: 'The cosmic microwave background radiation was discovered in 1964–65 by:', options: ['Edwin Hubble', 'Arno Penzias and Robert Wilson', 'Fred Hoyle', 'George Gamow'], answer: 1,
    explain: 'Penzias and Wilson found it as unexplained antenna noise. Gamow (with Alpher and Herman) predicted it; Hoyle championed the steady state theory.' },
  { id: 'uni-q76', topic: 'universe', outcome: 'uni-o21', q: 'The CMBR corresponds to a temperature of about:', options: ['0 K', '2.7 K', '273 K', '3000 K'], answer: 1,
    explain: 'It was released at ~3000 K, but expansion has stretched it to microwaves corresponding to ~2.7 K today.' },
  { id: 'uni-q77', topic: 'universe', outcome: 'uni-o21', q: 'The CMBR was released when the universe was about 380 000 years old because at that time:', options: ['the first stars formed', 'neutral atoms formed and the universe became transparent to light', 'galaxies began colliding', 'the Sun formed'], answer: 1,
    explain: 'Once electrons combined with nuclei, light could travel freely; that light is the CMBR. First stars formed ~100–200 million years later.' },
  { id: 'uni-q78', topic: 'universe', outcome: 'uni-o21', q: 'According to the steady state theory, the universe:', options: ['began 13.8 billion years ago', 'has always existed, with new matter continuously created as it expands', 'is shrinking', 'is not expanding'], answer: 1,
    explain: 'Steady state accepted expansion but proposed continuous creation of matter so the universe always looks the same and has no origin.' },
  { id: 'uni-q79', topic: 'universe', outcome: 'uni-o21', q: 'Which discovery led most scientists to abandon the steady state theory?', options: ['Red shift of galaxies', 'Cosmic microwave background radiation', 'Stellar parallax', 'Discovery of Neptune'], answer: 1,
    explain: 'The CMBR is a relic of a hot dense past, predicted by the Big Bang and unexplained by steady state. Both theories could explain red shift.' },
  { id: 'uni-q80', topic: 'universe', outcome: 'uni-o18', q: 'The currently accepted age of the universe is about:', options: ['4.6 billion years', '13.8 billion years', '15 billion years', '100 billion years'], answer: 1,
    explain: '13.8 billion years (Planck data). 4.6 billion years is the age of the Solar System; 15 billion is an outdated estimate.' }
);

SD.saq.push(
  { id: 'uni-s1', topic: 'universe', outcome: 'uni-o18', marks: 4, source: '2022 Yearly Section D Q3(c)',
    q: 'Outline the Big Bang theory and explain the evidence in support of it.',
    criteria: ['Outlines the Big Bang: universe expanded from a single, extremely hot, dense point ~13.8 billion years ago and is still expanding', 'Explains red shift / Doppler effect: spectral lines of distant galaxies are shifted to longer wavelengths, so galaxies are receding', 'Links red shift (Hubble’s law – further galaxies recede faster) to an expanding universe that began at one point', 'Explains CMBR as relic radiation from the early universe detected uniformly in all directions'],
    model: `The Big Bang theory states that about 13.8 billion years ago all the matter, energy and space of the universe was concentrated in an extremely hot, dense point which expanded and cooled, and the universe is still expanding today.<br>Evidence 1 – red shift: absorption lines in the spectra of distant galaxies are shifted towards longer (red) wavelengths (the Doppler effect), showing galaxies are moving away. Hubble found that the further away a galaxy is, the faster it recedes (v = H<sub>0</sub>d), so space is expanding; running this backwards implies a single starting point.<br>Evidence 2 – CMBR: a uniform ~2.7 K microwave radiation detected from every direction (Penzias & Wilson, 1965). It is the stretched afterglow of the hot early universe, released ~380 000 years after the Big Bang, exactly as the theory predicted.`,
    keywords: ['single point', 'expanding', 'red shift', 'doppler', 'hubble', 'cmbr', 'microwave', 'all directions'] },
  { id: 'uni-s2', topic: 'universe', outcome: 'uni-o21', marks: 4, source: '2024 Yearly Q25',
    q: 'The steady state theory suggested that the universe, although expanding, had no origin and has always existed, with a small amount of matter created as it expands. (a) When considering the origin of the universe, what is the difference between the Big Bang theory and the steady state theory? (3) (b) Suggest why the steady state theory encouraged new research into the universe. (1)',
    criteria: ['Big Bang: universe started at one point/had a beginning and then expanded', 'Steady state: universe has no origin / has always existed', 'Matter: steady state – matter continuously created; Big Bang – all matter formed at the start', 'Scientists sought evidence to support or disprove one of the competing theories'],
    model: `(a) The Big Bang theory states the universe had a definite beginning, starting from a single hot, dense point about 13.8 billion years ago and expanding from it, with all of its matter formed at the start (so its density decreases over time). The steady state theory states the universe has no origin – it has always existed – and new matter is continuously created as it expands, so its density and appearance never change.<br>(b) With two competing theories, scientists wanted to find evidence (e.g. the CMBR, how distant galaxies differ) that would support one theory and disprove the other.`,
    keywords: ['beginning', 'single point', 'no origin', 'always existed', 'matter created', 'evidence', 'expanding'] },
  { id: 'uni-s3', topic: 'universe', outcome: 'uni-o19', marks: 2, source: '2024 Yearly Q24(b)',
    q: 'The Andromeda galaxy is moving towards the Earth, so its light shows a blue shift. How do the wavelength and frequency of the light from Andromeda seem to have changed when viewed from Earth?',
    criteria: ['Wavelength is decreased', 'Frequency is increased'],
    model: `The <b>wavelength has decreased</b> (shifted towards the blue end) and the <b>frequency has increased</b>, because the galaxy is moving towards us and the waves are compressed.`,
    keywords: ['wavelength', 'decreased', 'frequency', 'increased', 'towards'] },
  { id: 'uni-s4', topic: 'universe', outcome: 'uni-o20', marks: 2, source: '2024 Yearly Q24(a) (adapted)',
    q: 'Hubble’s graph of recession velocity against distance has a line of best fit through the origin that passes through the point (1.5 Mpc, 780 km s⁻¹). Calculate the Hubble constant, showing working.',
    criteria: ['Uses gradient = rise/run using points on the line of best fit', 'H₀ = 780 ÷ 1.5 = 520 km s⁻¹ Mpc⁻¹ with units'],
    model: `H<sub>0</sub> = gradient = Δv ÷ Δd = (780 − 0) ÷ (1.5 − 0) = <b>520 km s<sup>−1</sup> Mpc<sup>−1</sup></b>`,
    keywords: ['gradient', 'rise', 'run', '520', 'km/s per mpc'] },
  { id: 'uni-s5', topic: 'universe', outcome: 'uni-o20', marks: 2, source: '2024 Yearly Q24(c)',
    q: 'More recent data from more distant galaxies give a very different value of the Hubble constant from Hubble’s 1929 data. Which data set is most likely to give the value closest to the true value? Give a reason.',
    criteria: ['Identifies the more recent data', 'Valid reason: more reliable/accurate data from improved equipment/techniques, more and more distant galaxies (wider range), or less scatter about the line of best fit'],
    model: `The <b>more recent</b> data. It was collected with improved telescopes, CCD detectors and better-calibrated distance methods, and includes many more galaxies at much greater distances (a wider range), so the points are less scattered about the line of best fit and the gradient is more accurate and reliable.`,
    keywords: ['more recent', 'reliable', 'accurate', 'improved equipment', 'more galaxies', 'distant', 'less scattered'] },
  { id: 'uni-s6', topic: 'universe', outcome: 'uni-o8', marks: 2, source: '2022 Yearly Section D Q2(b)',
    q: 'Alpha Crucis and Beta Crucis are the two brightest stars of the Southern Cross. Jane told John that if they appear the same brightness, they must be the same distance from Earth. Is Jane correct? Explain your answer.',
    criteria: ['Identifies that Jane is incorrect', 'Explains that apparent brightness depends on both luminosity and distance, so a more luminous star further away can look as bright as a less luminous nearer star'],
    model: `Jane is <b>incorrect</b>. How bright a star appears depends on both its luminosity (true energy output, from its size and temperature) and its distance. One star could be more luminous but further away, and appear as bright as a less luminous star that is closer, so equal apparent brightness does not mean equal distance.`,
    keywords: ['incorrect', 'luminosity', 'distance', 'apparent brightness', 'further away'] },
  { id: 'uni-s7', topic: 'universe', outcome: 'uni-o5', marks: 2, source: '2022 Yearly Section D Q2(c)',
    q: 'Identify the name of the ‘explosion’ that occurs when a large star dies, and the TWO possible outcomes of such an explosion.',
    criteria: ['Supernova', 'Neutron star and black hole (depending on remaining core mass)'],
    model: `A <b>supernova</b>. It leaves behind either a <b>neutron star</b> (core about 1.4–3 solar masses) or a <b>black hole</b> (core greater than about 3 solar masses).`,
    keywords: ['supernova', 'neutron star', 'black hole', 'mass'] },
  { id: 'uni-s8', topic: 'universe', outcome: 'uni-o11', marks: 2, source: '2022 Yearly Section D Q2(d)',
    q: 'Use the H–R diagram to compare the properties of a white dwarf and a giant star.',
    criteria: ['White dwarfs are hotter than giants', 'Giants are brighter (more luminous) than white dwarfs'],
    model: `White dwarfs (bottom left) are <b>hotter</b> than giants (upper right), but giants are far <b>more luminous</b> than white dwarfs, because giants have an enormous surface area while white dwarfs are tiny.`,
    keywords: ['white dwarf', 'giant', 'hotter', 'luminous', 'brighter', 'size'] },
  { id: 'uni-s9', topic: 'universe', outcome: 'uni-o4', marks: 3,
    q: 'Outline the stages in the life cycle of a star the mass of the Sun.',
    criteria: ['Nebula collapses under gravity to form a protostar', 'Main sequence: hydrogen fuses to helium; stable for ~10 billion years', 'Red giant → outer layers form planetary nebula → white dwarf (→ black dwarf)'],
    model: `A nebula of gas and dust collapses under gravity, heating up to form a protostar. When its core is hot enough, hydrogen fuses into helium and it becomes a stable main-sequence star for about 10 billion years. When core hydrogen runs out the star expands and cools into a red giant (fusing helium into carbon). Its outer layers drift away as a planetary nebula, leaving the hot core as a white dwarf, which slowly cools to a black dwarf.`,
    keywords: ['nebula', 'protostar', 'main sequence', 'fusion', 'red giant', 'planetary nebula', 'white dwarf'] },
  { id: 'uni-s10', topic: 'universe', outcome: 'uni-o16', marks: 3,
    q: 'Describe how stellar parallax is used to determine the distance to a nearby star. Include a calculation for a star with a parallax angle of 0.2 arcseconds.',
    criteria: ['The star’s position is measured against distant background stars at two times 6 months apart (opposite sides of Earth’s orbit)', 'The apparent shift is measured; parallax angle = half the shift; nearer stars shift more', 'd = 1/p = 1/0.2 = 5 parsecs (≈ 16 ly)'],
    model: `The position of the nearby star is recorded against very distant background stars, then again 6 months later when the Earth is on the other side of its orbit. The star appears to shift; half of this angular shift is the parallax angle p (closer stars shift more). Distance in parsecs = 1/p, so d = 1/0.2 = <b>5 pc</b> (≈ 16.3 light years).`,
    keywords: ['background stars', '6 months', 'orbit', 'shift', 'parallax angle', 'parsecs', '1/p'] },
  { id: 'uni-s11', topic: 'universe', outcome: 'uni-o17', marks: 5,
    q: 'Assess the significance of the telescope to the development of astronomy.',
    criteria: ['Makes a clear judgement of significance (e.g. highly significant)', 'Galileo’s observations (moons of Jupiter, phases of Venus) undermined the geocentric model', 'Later telescopes discovered new objects (e.g. William Herschel – Uranus 1781; Galle – Neptune 1846)', 'Hubble’s observations showed other galaxies and the expanding universe', 'Discusses modern developments/limitations (atmosphere overcome by space telescopes such as HST; radio/IR telescopes)'],
    model: `The telescope has been <b>extremely significant</b> – arguably the most important technology in astronomy. In 1610 Galileo used one to see four moons orbiting Jupiter and the phases of Venus, showing that not everything orbits Earth and supporting the heliocentric model. Larger reflecting telescopes allowed William Herschel to discover Uranus (1781), and Johann Galle found Neptune (1846) where Le Verrier had predicted, extending the known Solar System. In the 1920s Edwin Hubble used the 100-inch Mt Wilson telescope to show Andromeda is a separate galaxy and that galaxies are receding, revealing an expanding universe. Ground telescopes are limited by atmospheric blurring and light pollution, but space telescopes such as Hubble (1990) and JWST overcome this, producing deep-field images and refining the age of the universe to 13.8 billion years. Therefore the telescope has repeatedly transformed our understanding of the universe.`,
    keywords: ['significant', 'galileo', 'moons of jupiter', 'geocentric', 'herschel', 'uranus', 'hubble', 'expanding', 'space telescope', 'atmosphere'] },
  { id: 'uni-s12', topic: 'universe', outcome: 'uni-o17', marks: 4,
    q: 'Choose ONE technology other than the telescope and assess its role in developing our understanding of the universe.',
    criteria: ['Names a valid technology and describes what it does', 'Gives a specific discovery/contribution made with it', 'Explains how this changed scientific understanding', 'Makes a judgement of its significance'],
    model: `<b>The spectroscope</b> splits starlight into a spectrum. Dark absorption lines reveal the chemical elements in a star (helium was discovered in the Sun’s spectrum in 1868 before it was found on Earth) and its temperature/spectral class. Shifts of these lines (red/blue shift) give the speed of stars and galaxies; Hubble used red shifts to show galaxies are receding faster the further away they are, providing key evidence for the expanding universe and the Big Bang. Spectroscopy is therefore highly significant – almost everything we know about the composition and motion of distant objects comes from it, although it depends on telescopes to collect enough light.<br><i>(Alternatives: CCDs – detect ~70–90% of light vs film, enabling faint distant galaxies and exoplanet detection; radio telescopes – discovered pulsars, quasars and the CMBR.)</i>`,
    keywords: ['spectroscope', 'spectrum', 'absorption lines', 'composition', 'red shift', 'expanding', 'significant'] },
  { id: 'uni-s13', topic: 'universe', outcome: 'uni-o14', marks: 3,
    q: 'Calculate the number of kilometres in one light year, and explain why light years are not used to measure distances within the Solar System.',
    criteria: ['Correct method: distance = speed × time with 1 year in seconds (≈ 3.16 × 10⁷ s)', 'Answer ≈ 9.46 × 10¹² km', 'Solar System distances are tiny fractions of a light year (awkward numbers); AU is more convenient'],
    model: `distance = speed × time = 3.0 × 10<sup>5</sup> km s<sup>−1</sup> × (365.25 × 24 × 3600 s) = 3.0 × 10<sup>5</sup> × 3.156 × 10<sup>7</sup> ≈ <b>9.46 × 10<sup>12</sup> km</b>.<br>Distances in the Solar System are tiny compared with this – Neptune is only about 4 light-hours (≈ 0.0005 ly) from the Sun – so light years would give very small, awkward decimals. The astronomical unit (Earth–Sun distance, 1.5 × 10<sup>8</sup> km) gives convenient numbers such as 1 AU for Earth and 30 AU for Neptune.`,
    keywords: ['speed of light', 'seconds in a year', '9.46', 'too small', 'astronomical unit', 'convenient'] },
  { id: 'uni-s14', topic: 'universe', outcome: 'uni-o11', marks: 4,
    q: 'Justify the statement that bigger (more massive) main-sequence stars are usually hotter, brighter and burn for a shorter time than smaller stars.',
    criteria: ['More mass → stronger gravity → higher core temperature and pressure', 'Faster rate of fusion → more energy released per second → more luminous/brighter', 'Higher surface temperature → blue-white colour (link temperature, size and colour, e.g. H–R main sequence top-left)', 'Fuel used disproportionately quickly → shorter lifetime (e.g. millions vs ~10 billion years)'],
    model: `A more massive star has stronger gravity, which compresses its core to higher pressures and temperatures. This makes hydrogen fusion occur much faster, releasing far more energy every second, so the star is more luminous and larger. The greater energy output gives a hotter surface, so it appears blue-white rather than yellow or red – these stars sit at the top-left of the main sequence on the H–R diagram. Although it has more fuel, its fusion rate increases much more than its mass, so it uses its hydrogen up far sooner: a 10 solar-mass star lasts only ~20–30 million years, compared with ~10 billion years for the Sun.`,
    keywords: ['mass', 'gravity', 'core temperature', 'fusion rate', 'luminous', 'blue', 'fuel', 'shorter'] },
  { id: 'uni-s15', topic: 'universe', outcome: 'uni-o21', marks: 3,
    q: 'Describe the discovery and significance of the cosmic microwave background radiation (CMBR).',
    criteria: ['Discovery: Penzias and Wilson (1964–65) detected persistent microwave noise from all directions with a radio antenna', 'Nature: ~2.7 K radiation released ~380 000 years after the Big Bang, stretched by expansion', 'Significance: predicted by and strongly supports the Big Bang; could not be explained by steady state theory'],
    model: `In 1964–65 Arno Penzias and Robert Wilson found a faint, constant microwave ‘noise’ in their horn radio antenna that came equally from every direction, day and night. It was identified as the CMBR – radiation released about 380 000 years after the Big Bang when atoms formed, now stretched by the expansion of the universe into microwaves corresponding to about 2.7 K. It had been predicted by the Big Bang theory, so its discovery was strong evidence for the Big Bang and led to the steady state theory being abandoned; its tiny ripples also reveal the seeds of galaxies and the age of the universe.`,
    keywords: ['penzias', 'wilson', 'microwave', 'all directions', '2.7 k', '380 000', 'big bang', 'steady state'] },
  { id: 'uni-s16', topic: 'universe', outcome: 'uni-o18', marks: 3,
    q: 'Describe evidence that energy can be converted into matter, as it was in the early universe.',
    criteria: ['E = mc²: mass and energy are equivalent', 'Pair production and/or particle accelerators produce new particles from energy', 'Observed H : He ≈ 3 : 1 matches Big Bang predictions of matter formation'],
    model: `Einstein’s E = mc<sup>2</sup> shows that energy and mass are equivalent. This has been observed directly: in pair production, a high-energy gamma-ray photon turns into an electron and a positron, and in particle accelerators like the LHC the energy of colliding particles produces new particles (e.g. the Higgs boson). In addition, the observed ratio of about 3 : 1 hydrogen to helium (by mass) matches the Big Bang prediction of how matter formed from energy in the first minutes.`,
    keywords: ['e = mc²', 'pair production', 'positron', 'particle accelerator', 'hydrogen', 'helium', '3 : 1'] },
  { id: 'uni-s17', topic: 'universe', outcome: 'uni-o3', marks: 3,
    q: 'Explain the role of gravity in the formation of stars and galaxies.',
    criteria: ['Gravity pulls gas and dust in a nebula together; the cloud collapses', 'Collapse heats the core (protostar) until hot and dense enough for fusion to begin', 'Gravity pulled matter into large clumps forming galaxies and holds stars in orbit around the galactic centre'],
    model: `Gravity attracts particles of gas and dust in a nebula towards denser regions, so the cloud collapses. As it contracts, gravitational energy is converted into heat, forming a protostar; when the core becomes hot and dense enough, hydrogen fusion starts and a star is born. On a larger scale, gravity pulled slightly denser regions of matter in the early universe into huge clouds that formed billions of stars, and it continues to hold these stars in orbit around the galaxy’s centre and galaxies together in clusters.`,
    keywords: ['gravity', 'nebula', 'collapse', 'protostar', 'fusion', 'galaxy', 'orbit'] },
  { id: 'uni-s18', topic: 'universe', outcome: 'uni-o2', marks: 3,
    q: 'Compare stars and planets.',
    criteria: ['Similarity (e.g. both spherical due to gravity / both formed from collapse of a nebula)', 'Difference in light: stars produce light by fusion, planets reflect light', 'Further difference: mass/size/temperature or planets orbit stars'],
    model: `Both stars and planets are roughly spherical because of their own gravity, and both form from the collapse of a nebula. However, stars produce their own light and heat by nuclear fusion, whereas planets only reflect light from their star. Stars are also far more massive and much hotter than planets, and planets orbit stars.`,
    keywords: ['spherical', 'gravity', 'fusion', 'reflect', 'massive', 'orbit', 'whereas'] }
);

SD.seq.push(
  { id: 'uni-seq1', topic: 'universe', title: 'Order the life cycle of a Sun-like star', items: ['Nebula', 'Protostar', 'Main-sequence star', 'Red giant', 'Planetary nebula', 'White dwarf', 'Black dwarf'] },
  { id: 'uni-seq2', topic: 'universe', title: 'Order the life cycle of a very massive star', items: ['Nebula', 'Protostar', 'Blue-white main-sequence star', 'Red supergiant', 'Supernova', 'Black hole'] },
  { id: 'uni-seq3', topic: 'universe', title: 'Order the events in the history of the universe', items: ['Big Bang – hot, dense point', 'Inflation – rapid expansion', 'Quarks form protons and neutrons', 'Nucleosynthesis – helium nuclei form', 'Atoms form; CMBR released (~380 000 years)', 'First stars form', 'Galaxies form', 'Solar System forms (4.6 billion years ago)'] },
  { id: 'uni-seq4', topic: 'universe', title: 'Order the steps in measuring distance by stellar parallax', items: ['Photograph a nearby star against distant background stars', 'Wait 6 months until Earth is on the opposite side of its orbit', 'Photograph the star again', 'Measure the apparent angular shift', 'Halve the shift to get the parallax angle p', 'Calculate distance d = 1/p in parsecs'] },
  { id: 'uni-seq5', topic: 'universe', title: 'Order the reasoning behind Hubble’s evidence for expansion', items: ['Measure distances to galaxies using Cepheid variables', 'Measure the red shift of each galaxy’s spectrum', 'Calculate each galaxy’s recession velocity', 'Plot velocity against distance – a straight line through the origin', 'Conclude further galaxies recede faster (v = H₀d)', 'Infer space is expanding and began from a single point'] }
);
