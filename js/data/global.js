// Global Systems (Outcomes 1–11 examined; 12–16 included as extension)
SD.topics.push({
  id: 'global',
  name: 'Global Systems',
  short: 'Global',
  color: '#22d3ee',
  examined: true,
  scope: 'Outcomes 1–11',
  notes: [
    { id: 'glo-o1', title: 'Outcome 1 · Earth\u2019s four spheres and how they interact', html: `
<div class="key"><b>Global systems</b> work because matter (water, carbon, nitrogen, phosphorus) and energy constantly move <b>between</b> the four spheres. A change in one sphere causes changes in the others.</div>
<table class="t">
<tr><th>Sphere</th><th>What it is</th><th>Key facts</th></tr>
<tr><td><b>Lithosphere</b></td><td>Solid, rocky outer part of Earth: the crust + brittle upper mantle (~100 km thick)</td><td>Broken into tectonic plates; sits on the asthenosphere; stores carbon (limestone, fossil fuels) and phosphorus (phosphate rock)</td></tr>
<tr><td><b>Hydrosphere</b></td><td>All water on Earth as solid, liquid or vapour: oceans, rivers, lakes, groundwater, ice, clouds</td><td>~71% of the surface is covered by water; ~97% is salt water; most fresh water is frozen; &lt;1% is easily usable</td></tr>
<tr><td><b>Atmosphere</b></td><td>Layer of gases held around Earth by gravity</td><td>~78% N<sub>2</sub>, ~21% O<sub>2</sub>, ~0.9% Ar, ~0.04% CO<sub>2</sub> (≈420 ppm) + variable water vapour</td></tr>
<tr><td><b>Biosphere</b></td><td>All living things (plants, animals, fungi, microorganisms) and where they live</td><td>Life exists from ~0.5 km below sea level to ~6 km above it; has existed ~3.5 billion years</td></tr>
</table>
<h4>Examples of interactions (learn 2–3 with BOTH spheres named)</h4>
<ul>
<li><b>Atmosphere → hydrosphere:</b> wind generates waves; oceans absorb CO<sub>2</sub> from the air.</li>
<li><b>Hydrosphere → lithosphere:</b> waves undercut cliffs; rain weathers rock and releases phosphate and other minerals.</li>
<li><b>Biosphere → atmosphere:</b> plants take in CO<sub>2</sub> and release O<sub>2</sub> (photosynthesis); all organisms release CO<sub>2</sub> (respiration).</li>
<li><b>Biosphere → lithosphere:</b> plant roots stabilise soil and weather rock; dead organisms add nutrients to soil; shells/coral form limestone.</li>
<li><b>Atmosphere → lithosphere:</b> wind erodes exposed soil; Saharan dust carries phosphorus across the Atlantic to fertilise the Amazon.</li>
<li><b>Lithosphere → atmosphere:</b> volcanoes release CO<sub>2</sub>, SO<sub>2</sub> and ash.</li>
</ul>
<p>Big-picture interactions: the <b>biogeochemical cycles</b> (water, carbon, nitrogen, phosphorus – Outcome 3), <b>natural disasters</b> (earthquakes, volcanoes, cyclones – Outcomes 6–8) and <b>human-led changes</b> (enhanced greenhouse effect, ozone depletion, eutrophication, acid rain).</p>
<div class="tip">"Outline how global systems rely on interactions…" – name the spheres, give a <b>specific process</b> that links them (e.g. "evaporation moves water from the hydrosphere to the atmosphere") and say why it matters (e.g. "rain then supplies water for plant growth in the biosphere").</div>
` },
    { id: 'glo-o2', title: 'Outcome 2 · Computer modelling in Earth sciences', html: `
<div class="key">A <b>computer model (simulation)</b> uses mathematical equations based on physical laws (conservation of energy, mass and momentum) plus real data to represent a system and predict how it changes over time.</div>
<h4>How a global climate model (GCM) works</h4>
<ul>
<li>The atmosphere, oceans, land and ice are divided into a 3D <b>grid of cells</b>.</li>
<li>Equations calculate how energy, water, air and heat move between cells in small time steps.</li>
<li>Input data come from satellites, weather balloons, ocean buoys, ice cores, etc.</li>
<li>Models are tested by <b>hindcasting</b>: running them on past conditions to see if they reproduce the climate that actually happened. A model that matches the past is trusted more for the future.</li>
<li>Different <b>scenarios</b> (e.g. high vs low future emissions) can be run to compare outcomes.</li>
</ul>
<h4>Why simulations are useful in Earth sciences</h4>
<ul>
<li>Earth processes are <b>too large</b> (whole planet), <b>too slow</b> (millions of years of plate movement, centuries of climate change) or <b>too dangerous</b> (volcanoes, tsunamis) to test experimentally.</li>
<li>Thousands of years can be simulated in hours; one variable (e.g. CO<sub>2</sub>) can be changed while others are kept constant – impossible on the real Earth.</li>
<li>They allow <b>prediction and early warning</b>: weather forecasts, cyclone tracks and landfall, tsunami arrival times, volcanic ash cloud spread, sea-level rise projections, bushfire spread.</li>
</ul>
<h4>How modelling has improved knowledge and predictability</h4>
<ul>
<li>Faster supercomputers → smaller grid cells (higher resolution) and more processes included (oceans, ice, clouds, carbon cycle).</li>
<li>Satellite data since the 1970s → better inputs and checks. Weather forecasts today are about as accurate 5 days ahead as 1-day forecasts were in the 1980s.</li>
<li>Models predicted warming patterns (e.g. Arctic warming fastest, stratosphere cooling) that were later observed.</li>
</ul>
<h4>Limitations</h4>
<ul>
<li>Only as good as the data and assumptions put in ("garbage in, garbage out").</li>
<li>Must simplify (e.g. clouds are smaller than a grid cell) → uncertainty, so projections are given as <b>ranges</b>.</li>
<li>Weather is chaotic – detailed forecasts become unreliable after ~1–2 weeks.</li>
</ul>
<div class="model"><b>Model answer (3 marks):</b> Computer simulations are useful because many Earth processes, such as climate change, are too large, too slow and too complex to investigate experimentally. Global climate models apply physical laws to a 3D grid of the atmosphere and oceans and are checked by reproducing past climate (hindcasting). This allows scientists to change one variable such as CO<sub>2</sub> concentration and predict future temperature and sea-level rise under different emission scenarios, informing decisions such as emission targets.</div>
` },
    { id: 'glo-o3a', title: 'Outcome 3a · Water and carbon cycles', html: `
<h4>Water cycle</h4>
<p>Movement of water (changing state) between hydrosphere, atmosphere, lithosphere and biosphere, powered by the Sun\u2019s energy and gravity.</p>
<ol>
<li><b>Evaporation</b> – Sun heats oceans/lakes; liquid water → water vapour (hydrosphere → atmosphere).</li>
<li><b>Transpiration</b> – water vapour lost through stomata in leaves (biosphere → atmosphere). (<b>Sublimation</b>: ice → vapour.)</li>
<li><b>Condensation</b> – rising vapour cools and forms droplets → clouds.</li>
<li><b>Precipitation</b> – droplets combine, become heavy and fall as rain, hail or snow.</li>
<li><b>Runoff / collection</b> – water flows over land into rivers, lakes and oceans (carrying dissolved minerals and sediment).</li>
<li><b>Infiltration</b> – water soaks into soil and rock, forming <b>groundwater</b> (aquifers).</li>
</ol>
<p>Why it matters: transports water and heat around the globe, weathers and erodes rock, carries nutrients (links to the nitrogen and phosphorus cycles), and supplies fresh water to living things.</p>
<h4>Carbon cycle</h4>
<p>Carbon moves through all four spheres. <b>Reservoirs (stores / sinks)</b>:</p>
<table class="t">
<tr><th>Reservoir</th><th>Form of carbon</th></tr>
<tr><td>Atmosphere</td><td>CO<sub>2</sub>, CH<sub>4</sub></td></tr>
<tr><td>Biosphere</td><td>Organic molecules (glucose, proteins, fats) in living things</td></tr>
<tr><td>Hydrosphere (oceans)</td><td>Dissolved CO<sub>2</sub>, carbonate/hydrogen carbonate ions; huge sink – absorbs ~25–30% of human CO<sub>2</sub> emissions</td></tr>
<tr><td>Lithosphere (largest, long-term)</td><td>Limestone (CaCO<sub>3</sub> from shells and coral), fossil fuels (coal, oil, gas), soil organic matter</td></tr>
</table>
<p><b>Processes:</b></p>
<ul>
<li><b>Photosynthesis</b> removes CO<sub>2</sub>: 6CO<sub>2</sub> + 6H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> (light, chlorophyll).</li>
<li><b>Cellular respiration</b> releases CO<sub>2</sub>: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> → 6CO<sub>2</sub> + 6H<sub>2</sub>O + energy (ATP).</li>
<li><b>Decomposition</b> – bacteria and fungi break down dead matter, releasing CO<sub>2</sub> (or CH<sub>4</sub> when there is no oxygen).</li>
<li><b>Combustion</b> – burning fossil fuels and biomass releases CO<sub>2</sub> (fast release of carbon stored for millions of years).</li>
<li><b>Ocean exchange</b> – CO<sub>2</sub> dissolves at the surface; phytoplankton photosynthesise; dead organisms sink, carrying carbon to the deep ocean.</li>
<li><b>Sedimentation / fossilisation</b> – shells form limestone; buried organic matter becomes coal/oil over millions of years. <b>Volcanoes and weathering</b> slowly return it.</li>
</ul>
<div class="warn">The Standard says decomposition turns organic matter "into carbon" – it actually releases <b>carbon dioxide</b> (aerobic) or <b>methane</b> (anaerobic), and some carbon stays in the soil.</div>
<div class="tip">Human impact to quote: burning fossil fuels and deforestation move carbon from the lithosphere/biosphere to the atmosphere faster than photosynthesis and oceans can remove it → CO<sub>2</sub> rises (≈280 ppm pre-industrial → 420+ ppm now) → enhanced greenhouse effect and ocean acidification.</div>
` },
    { id: 'glo-o3b', title: 'Outcome 3b · Nitrogen cycle', html: `
<div class="key">N<sub>2</sub> makes up ~78% of the atmosphere, but plants and animals <b>cannot use N<sub>2</sub> gas</b> (its triple bond is very strong). It must first be <b>fixed</b> into ammonium/nitrate. Nitrogen is needed to build <b>proteins (amino acids), DNA/RNA</b> and chlorophyll. Microorganisms drive almost every step.</div>
<ol>
<li><b>Nitrogen fixation</b> (N<sub>2</sub> → NH<sub>3</sub>/NH<sub>4</sub><sup>+</sup>):
<ul><li><b>Nitrogen-fixing bacteria</b> – <i>Rhizobium</i> living in <b>root nodules of legumes</b> (peas, beans, clover) in a mutualistic relationship (bacteria get sugars, plant gets ammonium); free-living soil bacteria and cyanobacteria.</li>
<li><b>Lightning</b> – energy makes N<sub>2</sub> react with O<sub>2</sub> → nitrogen oxides → dissolve in rain → nitrates in soil.</li>
<li><b>Industrial (Haber process)</b> – N<sub>2</sub> + 3H<sub>2</sub> → 2NH<sub>3</sub>, used to make fertilisers.</li></ul></li>
<li><b>Nitrification</b> (by nitrifying bacteria in aerobic soil): NH<sub>4</sub><sup>+</sup> → NO<sub>2</sub><sup>−</sup> (nitrite, ammonium-oxidising bacteria e.g. <i>Nitrosomonas</i>) → NO<sub>3</sub><sup>−</sup> (nitrate, nitrite-oxidising bacteria e.g. <i>Nitrobacter</i>).</li>
<li><b>Assimilation</b> – plants absorb nitrate (and some ammonium) through roots and build proteins and nucleic acids; animals get nitrogen by eating plants or other animals.</li>
<li><b>Ammonification (decomposition)</b> – decomposers (bacteria and fungi) break down dead organisms, urine and faeces, releasing ammonium back into the soil.</li>
<li><b>Denitrification</b> – <b>anaerobic</b> denitrifying bacteria (in waterlogged, low-oxygen soils) convert nitrate → N<sub>2</sub> gas (some N<sub>2</sub>O), returning nitrogen to the atmosphere.</li>
</ol>
<svg viewBox="0 0 320 210" width="100%" style="max-height:260px" font-size="10" fill="none" stroke="currentColor">
<rect x="110" y="5" width="100" height="26" rx="5"/><text x="160" y="22" text-anchor="middle" fill="currentColor" stroke="none">N₂ (atmosphere)</text>
<rect x="5" y="90" width="80" height="26" rx="5"/><text x="45" y="107" text-anchor="middle" fill="currentColor" stroke="none">NH₄⁺ ammonium</text>
<rect x="120" y="150" width="80" height="26" rx="5"/><text x="160" y="167" text-anchor="middle" fill="currentColor" stroke="none">NO₂⁻ nitrite</text>
<rect x="235" y="90" width="80" height="26" rx="5"/><text x="275" y="107" text-anchor="middle" fill="currentColor" stroke="none">NO₃⁻ nitrate</text>
<rect x="115" y="85" width="90" height="36" rx="5"/><text x="160" y="100" text-anchor="middle" fill="currentColor" stroke="none">organic N in</text><text x="160" y="113" text-anchor="middle" fill="currentColor" stroke="none">plants/animals</text>
<path d="M110 22 L45 88"/><text x="20" y="55" fill="currentColor" stroke="none">fixation</text>
<path d="M50 118 L120 160"/><text x="30" y="150" fill="currentColor" stroke="none">nitrification</text>
<path d="M200 160 L270 118"/><text x="240" y="150" fill="currentColor" stroke="none">nitrification</text>
<path d="M235 103 L207 103"/><text x="207" y="83" fill="currentColor" stroke="none">assimilation</text>
<path d="M115 103 L87 103"/><text x="60" y="80" fill="currentColor" stroke="none">ammonification</text>
<path d="M280 88 L210 20"/><text x="245" y="45" fill="currentColor" stroke="none">denitrification</text>
</svg>
<h4>Human impacts</h4>
<ul>
<li>Nitrogen fertiliser runoff → <b>eutrophication</b> (algal blooms, oxygen depletion, dead zones).</li>
<li>Fertilised soils release <b>N<sub>2</sub>O</b>, a powerful greenhouse gas; burning fuels makes NO<sub>x</sub> → acid rain and smog.</li>
</ul>
<div class="model"><b>Model answer (3 marks) – "Describe the role of microorganisms in the nitrogen cycle" (2024 Q21):</b> Nitrogen-fixing bacteria, such as <i>Rhizobium</i> in the root nodules of legumes, convert unusable atmospheric N<sub>2</sub> into ammonium. Nitrifying bacteria then oxidise ammonium to nitrite and then to nitrate, which plants absorb to make proteins and DNA. Decomposers (bacteria and fungi) break down dead organisms and wastes, returning nitrogen to the soil as ammonium, while anaerobic denitrifying bacteria convert nitrate back into N<sub>2</sub> gas, returning it to the atmosphere.</div>
<div class="tip">2024 marker: "many answers were very vague… at least <b>three different roles</b> were needed" (fixing, nitrifying, denitrifying, decomposing). Name each type of microbe AND the conversion it carries out.</div>
` },
    { id: 'glo-o3c', title: 'Outcome 3c · Phosphorus cycle and eutrophication', html: `
<div class="key">Phosphorus is needed for <b>DNA/RNA, ATP</b> (energy transfer) and <b>phospholipid cell membranes</b> (also bones and teeth). The phosphorus cycle has <b>no gas (atmospheric) phase</b> – it is a mainly <b>sedimentary</b> cycle through rock, soil, water and living things. It is often the <b>limiting nutrient</b>, especially in fresh water.</div>
<h4>Steps</h4>
<ol>
<li><b>Weathering</b> – rain, ice and weak acids break down phosphate-rich rock (e.g. apatite), releasing phosphate ions (PO<sub>4</sub><sup>3−</sup>) into soil and water. (Thousands of years.)</li>
<li><b>Uptake (absorption)</b> – plants absorb dissolved phosphate through roots; algae absorb it from water. (Hours–days.)</li>
<li><b>Consumption</b> – animals obtain phosphorus by eating plants or other animals (food chains).</li>
<li><b>Decomposition / excretion</b> – decomposers return phosphate to the soil from wastes and dead organisms.</li>
<li><b>Runoff and sedimentation</b> – some phosphate washes into rivers and oceans, settles to the sea floor and slowly becomes sedimentary rock. (Millions of years.)</li>
<li><b>Geological uplift</b> – tectonic forces lift sea-floor rock above sea level, where weathering starts again. (Millions of years.)</li>
</ol>
<p>Two speeds: <b>fast</b> through living things, <b>very slow</b> through rock and sediment. Seabird droppings (<b>guano</b>) also move phosphorus from sea back to land (e.g. Nauru\u2019s phosphate deposits).</p>
<h4>Comparison of cycles</h4>
<table class="t">
<tr><th></th><th>Water</th><th>Carbon</th><th>Nitrogen</th><th>Phosphorus</th></tr>
<tr><td>Gas phase?</td><td>Yes – vapour</td><td>Yes – CO<sub>2</sub>, CH<sub>4</sub></td><td>Yes – N<sub>2</sub> (78% of air)</td><td><b>No</b></td></tr>
<tr><td>Largest store</td><td>Oceans</td><td>Rocks (limestone, fossil fuels)</td><td>Atmosphere</td><td>Rocks and sediments</td></tr>
<tr><td>Enters living things by</td><td>Drinking, roots</td><td>Photosynthesis</td><td>N-fixing bacteria → roots</td><td>Roots absorb phosphate</td></tr>
<tr><td>Human impact</td><td>Dams, irrigation</td><td>Fossil fuels → enhanced greenhouse effect</td><td>Fertiliser → eutrophication, N<sub>2</sub>O</td><td>Mining, fertiliser, sewage → eutrophication</td></tr>
</table>
<h4>Humans speed up the phosphorus cycle</h4>
<p>Phosphate rock is <b>mined</b> to make fertiliser, moving phosphorus from rock to water in decades rather than millions of years. Australian soils are naturally phosphorus-poor (old, highly weathered); many natives like <i>Banksia</i> suffer phosphorus toxicity if fertilised.</p>
<h4>Eutrophication (cause → effect chain)</h4>
<ol>
<li>Excess phosphate/nitrate from fertiliser runoff, sewage and detergents enters rivers and lakes.</li>
<li>Nutrients are no longer limiting → rapid growth of algae and cyanobacteria (<b>algal bloom</b>).</li>
<li>Algae cover the surface, blocking light → submerged plants cannot photosynthesise and die.</li>
<li>Algae die; <b>decomposers</b> (aerobic bacteria) break down the dead matter and <b>use up dissolved oxygen</b>.</li>
<li>Low oxygen (hypoxic/anoxic) water → fish and other animals suffocate → "<b>dead zone</b>". Some cyanobacteria also release toxins.</li>
</ol>
<div class="tip">Case study for "refer to a named example": Saharan dust from the Bodélé Depression (Chad) carries ~22 000 tonnes of phosphorus a year across the Atlantic to the Amazon – atmosphere links lithosphere (Africa) to biosphere (rainforest), replacing phosphorus washed out by rain.</div>
` },
    { id: 'glo-o4', title: 'Outcome 4 · Layers of the atmosphere', html: `
<table class="t">
<tr><th>Layer (bottom → top)</th><th>Approx. altitude</th><th>Temperature trend with height</th><th>Key features</th></tr>
<tr><td><b>Troposphere</b></td><td>0 – ~12 km (≈8 km at poles, ≈16–18 km at equator)</td><td><b>Decreases</b> (≈6.5 °C per km) to about −55 °C</td><td>All weather, clouds; ~75–80% of the atmosphere\u2019s mass; where we live; planes fly near the top. Boundary = <b>tropopause</b></td></tr>
<tr><td><b>Stratosphere</b></td><td>~12 – 50 km</td><td><b>Increases</b> (to ≈0 °C) because <b>ozone absorbs UV</b></td><td>Contains the <b>ozone layer</b> (~15–35 km); stable, no convection, little weather; weather balloons. Boundary = stratopause</td></tr>
<tr><td><b>Mesosphere</b></td><td>~50 – 85 km</td><td><b>Decreases</b> to ≈ −90 °C – the <b>coldest</b> layer</td><td><b>Meteors burn up</b> here (enough gas to cause friction heating). Boundary = mesopause</td></tr>
<tr><td><b>Thermosphere</b></td><td>~85 – ~600 km</td><td><b>Increases</b> sharply (can exceed 1500 °C)</td><td>Gas absorbs high-energy UV and X-rays; <b>auroras</b>; the <b>ISS</b> (~400 km) and many low satellites orbit here. Would feel cold – particles are so far apart little heat is transferred</td></tr>
<tr><td><b>Exosphere</b></td><td>~600 – ~10 000 km</td><td>Very hot but extremely thin</td><td>Outermost layer, merges with space; atoms escape; many satellites</td></tr>
</table>
<svg viewBox="0 0 320 300" width="100%" style="max-height:300px" font-size="10" fill="none" stroke="currentColor">
<line x1="40" y1="280" x2="300" y2="280"/><line x1="40" y1="280" x2="40" y2="15"/>
<text x="170" y="296" text-anchor="middle" fill="currentColor" stroke="none">Temperature (°C): −100 → +40</text>
<text x="10" y="150" fill="currentColor" stroke="none" transform="rotate(-90 10 150)">Altitude (km) 0 → 120</text>
<line x1="40" y1="254" x2="300" y2="254" stroke-dasharray="3 3" opacity="0.5"/>
<line x1="40" y1="172" x2="300" y2="172" stroke-dasharray="3 3" opacity="0.5"/>
<line x1="40" y1="96" x2="300" y2="96" stroke-dasharray="3 3" opacity="0.5"/>
<polyline points="235,280 117,254 210,172 57,96 278,20" stroke-width="2"/>
<text x="245" y="272" fill="currentColor" stroke="none">Troposphere</text>
<text x="230" y="215" fill="currentColor" stroke="none">Stratosphere</text>
<text x="215" y="140" fill="currentColor" stroke="none">Mesosphere</text>
<text x="60" y="50" fill="currentColor" stroke="none">Thermosphere ↑ (very hot)</text>
<text x="128" y="200" fill="currentColor" stroke="none">ozone</text>
<text x="62" y="110" fill="currentColor" stroke="none">coldest</text>
</svg>
<div class="tip">Mnemonic (bottom → top): <b>T</b>he <b>S</b>trong <b>M</b>an <b>T</b>hrows <b>E</b>ggs – Troposphere, Stratosphere, Mesosphere, Thermosphere, Exosphere. The temperature trend zig-zags: down, up, down, up.</div>
<div class="warn">Watch "decreasing altitude" questions: top → bottom is exosphere, thermosphere, mesosphere, stratosphere, troposphere. The notes say "most satellites orbit in the exosphere" – actually the ISS and many low-Earth-orbit satellites are in the <b>thermosphere</b>; higher satellites (e.g. GPS) are in the exosphere and beyond.</div>
` },
    { id: 'glo-o5', title: 'Outcome 5 · Importance of the ozone layer', html: `
<div class="key">The <b>ozone layer</b> is a region of the <b>stratosphere</b> (~15–35 km) with a high concentration of ozone (O<sub>3</sub>). It <b>absorbs most of the Sun\u2019s harmful ultraviolet radiation</b> – nearly all UV-C and most UV-B (~97–99% of the harmful UV).</div>
<h4>Why it matters</h4>
<ul>
<li>High-energy UV-B/UV-C damages DNA → <b>mutations</b>, <b>skin cancer</b> (melanoma), sunburn, <b>cataracts</b> and weakened immune systems.</li>
<li>Protects other life: UV reduces phytoplankton growth (base of ocean food chains), damages crops and harms young animals.</li>
<li>Absorbing UV is why the stratosphere gets <b>warmer with height</b>.</li>
</ul>
<p>Good vs bad ozone: stratospheric ozone is protective; <b>ground-level (tropospheric) ozone</b> is a pollutant formed from car exhaust in sunlight (photochemical smog) that harms lungs and plants.</p>
<h4>Ozone depletion and CFCs</h4>
<ul>
<li><b>CFCs</b> (chlorofluorocarbons: C, Cl, F) were used in refrigerators, air conditioners, aerosol propellants and foam because they are stable, non-toxic and non-flammable.</li>
<li>Being stable, they drift up to the stratosphere, where <b>UV breaks them apart, releasing chlorine atoms</b>.</li>
<li>Cl acts as a catalyst in a chain reaction: Cl + O<sub>3</sub> → ClO + O<sub>2</sub>; ClO + O → Cl + O<sub>2</sub>. The Cl is regenerated, so <b>one chlorine atom can destroy ~100 000 ozone molecules</b>.</li>
<li>The <b>ozone hole</b>: severe thinning over <b>Antarctica each spring</b> (Sept–Nov), discovered in 1985. Very cold polar stratospheric clouds speed up chlorine release.</li>
<li>Australia/NZ are especially affected by high UV – Northern Hemisphere emissions, Southern Hemisphere harm.</li>
</ul>
<p>Response: the <b>Montreal Protocol (1987)</b> phased out CFCs; ozone-depleting substances fell by ~99% and the ozone layer is recovering, expected to return to 1980 levels around 2066 over Antarctica (see extension section).</p>
<div class="warn">Ozone depletion does <b>not</b> cause global warming directly and the ozone hole is not "where heat escapes". The link to climate is that CFCs are <b>also greenhouse gases</b>. Don\u2019t mix up the two issues in answers.</div>
` },
    { id: 'glo-o6', title: 'Outcome 6 · Earthquakes and the spheres', html: `
<div class="key">An <b>earthquake</b> is sudden shaking of the ground caused by the release of built-up energy (stress) when rocks break or slip along a <b>fault</b>, usually at tectonic plate boundaries. Energy travels as seismic waves from the <b>focus</b> (underground); the point above it on the surface is the <b>epicentre</b>.</div>
<table class="t">
<tr><th>Sphere</th><th>Effects</th></tr>
<tr><td><b>Lithosphere</b></td><td>Ground ruptures, fissures and fault scarps (vertical displacement); <b>landslides</b> and rockfalls on destabilised slopes; <b>liquefaction</b> – shaking makes water-saturated loose soil behave like a liquid, so buildings sink (Christchurch 2011); uplift or subsidence of land</td></tr>
<tr><td><b>Hydrosphere</b></td><td>Undersea quakes push the sea floor up, displacing a huge column of water → <b>tsunami</b>; changes to groundwater and the water table (wells dry up, new springs); <b>sag ponds</b> form in depressions along faults; rivers diverted or dammed by landslides</td></tr>
<tr><td><b>Atmosphere</b></td><td>Dust plumes from landslides and collapsed buildings reduce air quality; fires from broken gas lines release smoke and CO<sub>2</sub>; cracks can vent trapped gases (CO<sub>2</sub>, CH<sub>4</sub>); e.g. radioactive material released after Fukushima (2011)</td></tr>
<tr><td><b>Biosphere</b></td><td>Loss of human and animal life (collapse, landslides, tsunamis); habitat destruction; saltwater from tsunamis kills crops and contaminates soil and fresh water; disease after damaged sanitation; stranded aquatic life when rivers shift</td></tr>
</table>
<h4>Case study: 2004 Boxing Day (Indian Ocean) earthquake and tsunami</h4>
<p>Magnitude ~9.1 undersea megathrust earthquake off Sumatra, Indonesia (26 December 2004). Sea floor uplifted several metres → tsunami waves up to 30 m hit 14 countries (lithosphere → hydrosphere). ~230 000 people died; coral reefs, mangroves and farmland were destroyed and salinised (hydrosphere → biosphere).</p>
<div class="tip">Link the spheres in a chain: "The undersea earthquake displaced the sea floor (<b>lithosphere</b>), creating a tsunami (<b>hydrosphere</b>) that flooded coasts, killing people and salinising farmland (<b>biosphere</b>)."</div>
` },
    { id: 'glo-o7', title: 'Outcome 7 · Volcanoes and the spheres', html: `
<div class="key">A <b>volcano</b> is an opening in the crust where <b>magma</b> (lava once at the surface), gases and ash erupt, usually at plate boundaries (subduction zones, divergent boundaries) or hotspots (Hawaii).</div>
<table class="t">
<tr><th>Sphere</th><th>Effects</th></tr>
<tr><td><b>Atmosphere</b></td><td>Releases ash and gases: water vapour, <b>CO<sub>2</sub></b> (greenhouse gas), <b>SO<sub>2</sub></b>, H<sub>2</sub>S, CO. SO<sub>2</sub> forms <b>sulfate aerosols</b> in the stratosphere that <b>reflect sunlight → global cooling</b>; ash reduces air quality and grounds aircraft; SO<sub>2</sub> + water → <b>acid rain</b>; can damage the ozone layer</td></tr>
<tr><td><b>Lithosphere</b></td><td>New land from lava (island chains such as Hawaii; Surtsey 1963); new crust at divergent boundaries; landslides; explosions reshape landforms (Mt St Helens 1980 lost ~400 m of height); ash weathers into <b>fertile soils</b> (P, K, Mg, Fe)</td></tr>
<tr><td><b>Hydrosphere</b></td><td>Melts glaciers/snow → floods and <b>lahars</b> (volcanic mudflows, e.g. Nevado del Ruiz 1985); heats nearby water; acid rain and sulfur lower pH of lakes and rivers; ash blocks waterways; undersea eruptions can cause tsunamis (Krakatoa 1883, Hunga Tonga 2022)</td></tr>
<tr><td><b>Biosphere</b></td><td>Immediate deaths from lava, <b>pyroclastic flows</b>, ash fall and toxic gases; habitat destruction; reduced sunlight lowers photosynthesis and crop yields; long term – fertile soils support plant growth and ecological succession on new land</td></tr>
</table>
<h4>Case study: Mount Pinatubo, Philippines, 1991</h4>
<p>Ejected ~15–20 million tonnes of SO<sub>2</sub> into the stratosphere, forming a sulfate aerosol haze that circled the globe. Sunlight reaching the surface fell by up to ~10%, and global average temperatures dropped by about <b>0.5 °C</b> (0.2–1.0 °C regionally) over 1992–93 (atmosphere). Reduced light lowered photosynthesis (biosphere); lahars buried villages and rivers for years afterwards (hydrosphere/lithosphere). Earlier example: Tambora 1815 → 1816 "year without a summer".</p>
<div class="model"><b>Model answer (3 marks) – 2024 Q29:</b> The 1991 eruption of Mount Pinatubo released large amounts of ash and sulfur dioxide into the stratosphere (atmosphere). The sulfate aerosols reflected sunlight, reducing light reaching the surface by up to 10% and lowering global temperatures by about 0.5 °C for the following year. This reduced photosynthesis and crop growth (biosphere), and the SO<sub>2</sub> combined with water vapour to form acid rain, acidifying lakes and rivers (hydrosphere).</div>
<div class="tip">Marking criteria (2024): 3 marks = <b>outlines</b> effects on <b>at least two spheres</b>; 2 marks = outlines one sphere or only identifies two. Explain the mechanism, link the spheres, and name a real eruption.</div>
` },
    { id: 'glo-o8', title: 'Outcome 8 · Cyclones: formation and effects on the spheres', html: `
<div class="key">A <b>tropical cyclone</b> (hurricane in the Atlantic, typhoon in the NW Pacific) is an intense low-pressure system that forms over warm tropical oceans, with sustained winds ≥ 63 km/h spiralling around a calm <b>eye</b>. Southern Hemisphere cyclones rotate <b>clockwise</b>.</div>
<h4>Conditions needed</h4>
<ol>
<li><b>Warm sea surface ≥ 26.5 °C</b> to a depth of ~50 m – supplies heat and moisture (the "fuel").</li>
<li>At least <b>~500 km (5° latitude) from the equator</b> so the <b>Coriolis effect</b> (from Earth\u2019s rotation) is strong enough to make the winds spin.</li>
<li><b>Low vertical wind shear</b> – winds similar at all heights so the storm column is not torn apart.</li>
<li><b>Humid (moist) mid-troposphere</b> – stops the core drying out.</li>
<li>A pre-existing low-pressure disturbance.</li>
</ol>
<h4>Formation</h4>
<ol>
<li>Warm, moist air over the ocean rises (less dense), creating low pressure at the surface.</li>
<li>Rising air cools and water vapour <b>condenses</b> into cumulonimbus clouds, releasing <b>latent heat</b>, which warms the air so it rises even faster.</li>
<li>Surrounding air rushes in to replace it and is deflected by the <b>Coriolis effect</b>, so it spirals (tropical low/depression).</li>
<li><b>Positive feedback</b>: lower central pressure → stronger inflowing winds → more evaporation and rising air → lower pressure. When winds reach ≥ 63 km/h it is a tropical cyclone (category 1–5 in Australia).</li>
<li>It <b>weakens over land or cold water</b> because it loses its supply of warm, moist air.</li>
</ol>
<h4>Effects on the spheres</h4>
<table class="t">
<tr><th>Sphere</th><th>Effects</th></tr>
<tr><td><b>Atmosphere</b></td><td>Very low pressure in the eye; destructive winds (&gt;280 km/h in category 5); latent heat transferred from ocean to upper atmosphere; heavy cloud and rain bands</td></tr>
<tr><td><b>Hydrosphere</b></td><td><b>Storm surge</b> (sea level rise from low pressure + wind pushing water ashore) floods coasts with salt water; torrential rain → river flooding; <b>upwelling</b> of cold deep water cools the sea surface behind the storm; heavy rain lowers coastal salinity</td></tr>
<tr><td><b>Lithosphere</b></td><td>Coastal and beach erosion; saturated soil → landslides; uprooted trees strip topsoil; sediment deposited by floods</td></tr>
<tr><td><b>Biosphere</b></td><td>Deaths and injuries; vegetation flattened; habitats destroyed; coral reefs smashed by waves; salt water kills freshwater and land plants; floods spread disease</td></tr>
</table>
<h4>Australian examples</h4>
<ul>
<li><b>Cyclone Tracy</b> – Darwin, Christmas Day 1974: destroyed ~70% of Darwin\u2019s buildings, 66 deaths → stronger building codes.</li>
<li><b>Cyclone Yasi</b> – north Queensland, February 2011, category 5: massive crop (banana, sugar cane) losses, damage to the Great Barrier Reef and rainforest.</li>
</ul>
<div class="warn">The "Coriolis effect" is a deflection due to Earth\u2019s rotation – it is too weak right at the equator, which is why cyclones do not form there and never cross the equator.</div>
` },
    { id: 'glo-o9', title: 'Outcome 9 · Causes and consequences of the enhanced greenhouse effect', html: `
<h4>Natural greenhouse effect</h4>
<ol>
<li>Short-wavelength radiation (visible and UV) from the Sun passes through the atmosphere.</li>
<li>Earth\u2019s surface absorbs it, warms, and re-emits energy as longer-wavelength <b>infrared (heat)</b> radiation.</li>
<li><b>Greenhouse gases</b> (water vapour, CO<sub>2</sub>, CH<sub>4</sub>, N<sub>2</sub>O) <b>absorb infrared and re-emit it in all directions</b>, including back towards the surface.</li>
<li>This keeps Earth\u2019s average temperature ≈ <b>15 °C</b> instead of ≈ −18 °C – essential for liquid water and life.</li>
</ol>
<div class="key">The <b>enhanced greenhouse effect</b> is the extra warming caused by <b>human activities</b> increasing the concentration of greenhouse gases, so more infrared is absorbed and re-emitted back to Earth → <b>global warming</b>.</div>
<h4>Gases and human sources</h4>
<table class="t">
<tr><th>Gas</th><th>Main human sources</th><th>Notes</th></tr>
<tr><td><b>Carbon dioxide</b> CO<sub>2</sub></td><td>Burning fossil fuels (electricity, transport, industry), <b>deforestation</b> and land clearing, cement production</td><td>Largest contribution overall; ≈280 ppm pre-industrial → 420+ ppm now</td></tr>
<tr><td><b>Methane</b> CH<sub>4</sub></td><td>Livestock (cattle digestion), rice paddies, landfill (anaerobic decomposition), gas leaks, coal mining</td><td>~28–80× more powerful than CO<sub>2</sub> per molecule (shorter lifetime)</td></tr>
<tr><td><b>Nitrous oxide</b> N<sub>2</sub>O</td><td>Nitrogen fertilisers, livestock manure, industry</td><td>~270× more powerful than CO<sub>2</sub>; long-lived</td></tr>
<tr><td>CFCs / HFCs</td><td>Old refrigerants and aerosols; HFC replacements</td><td>Very powerful, synthetic; CFCs also destroy ozone</td></tr>
</table>
<p><b>Deforestation</b> has a double effect: burning/decay releases stored carbon AND fewer trees remain to absorb CO<sub>2</sub> by photosynthesis.</p>
<h4>Consequences (summary – details in Outcome 11)</h4>
<ul>
<li>Rising global average temperature; more frequent/intense heatwaves, droughts, bushfires and heavy rainfall.</li>
<li>Melting glaciers and ice sheets + thermal expansion of sea water → <b>sea-level rise</b>.</li>
<li>Oceans absorb CO<sub>2</sub> → <b>ocean acidification</b>; warmer oceans → <b>coral bleaching</b>.</li>
<li>Shifts in species ranges, extinctions, impacts on agriculture, water supply and health.</li>
</ul>
<div class="warn">Water vapour is the most abundant greenhouse gas, but humans don\u2019t control it directly – it acts as a <b>feedback</b> (warmer air holds more water vapour → more warming). The 2024 paper accepted only <b>carbon dioxide, methane, nitrous oxide</b> as "major contributions" from emissions.</div>
` },
    { id: 'glo-o10', title: 'Outcome 10 · Evaluating evidence for the enhanced greenhouse effect', html: `
<h4>Main lines of evidence</h4>
<table class="t">
<tr><th>Evidence</th><th>What it shows</th></tr>
<tr><td><b>Keeling curve</b> (Mauna Loa, Hawaii, since 1958)</td><td>Direct, continuous CO<sub>2</sub> measurements: ~315 ppm (1958) → ~420+ ppm (2024–25). Rising faster each decade. Yearly "sawtooth" = Northern Hemisphere plants absorbing CO<sub>2</sub> in summer, releasing it in winter</td></tr>
<tr><td><b>Ice cores</b> (Antarctica, e.g. Vostok, EPICA)</td><td>Air bubbles trapped in ice record CO<sub>2</sub> and CH<sub>4</sub> over ~800 000 years; isotopes in the ice indicate past temperature. CO<sub>2</sub> and temperature are strongly <b>correlated</b>; natural range was ~180–300 ppm – today\u2019s level is the highest in 800 000 years</td></tr>
<tr><td><b>Temperature records</b> (thermometers since ~1850, satellites since 1979)</td><td>Global average surface temperature ≈ <b>1.1–1.2 °C</b> above pre-industrial (2024 was the hottest year recorded, ~1.5 °C); the last decade was the warmest on record</td></tr>
<tr><td><b>Sea-level rise</b> (tide gauges, satellite altimetry)</td><td>≈ 20 cm since 1900; rate now ~4 mm per year – roughly double the 20th-century average</td></tr>
<tr><td><b>Ice loss</b></td><td>Greenland (~270 billion tonnes/yr) and Antarctica (~150 billion tonnes/yr) losing ice; glaciers retreating worldwide; Arctic summer sea ice shrinking</td></tr>
<tr><td><b>Ocean warming and acidification</b></td><td>Oceans absorb ~90% of extra heat; surface pH fallen from ~8.2 to ~8.1 = ~30% more acidic (more H<sup>+</sup>)</td></tr>
<tr><td><b>Fingerprints of human cause</b></td><td>Extra CO<sub>2</sub> has the carbon-isotope signature of <b>fossil fuels</b>; stratosphere is cooling while the lower atmosphere warms (expected from greenhouse gases, not from a brighter Sun)</td></tr>
</table>
<h4>How to EVALUATE (strengths and limitations → judgement)</h4>
<table class="t">
<tr><th>Strengths</th><th>Limitations</th></tr>
<tr><td>Many <b>independent</b> lines of evidence (different methods, scientists, countries) all agree</td><td><b>Correlation ≠ causation</b> – a graph of CO<sub>2</sub> and temperature rising together doesn\u2019t by itself prove CO<sub>2</sub> caused the warming</td></tr>
<tr><td>Direct, continuous, calibrated measurements (Keeling curve, satellites); large datasets; peer reviewed</td><td>Early temperature records were sparse (few in oceans/Southern Hemisphere) and can be affected by the <b>urban heat island</b> effect</td></tr>
<tr><td>A known physical <b>mechanism</b> (CO<sub>2</sub> absorbs infrared) explains the correlation; models only reproduce recent warming when human emissions are included</td><td>Ice-core temperatures are <b>proxies</b> with uncertainty; in past ice-age cycles CO<sub>2</sub> sometimes <b>lagged</b> temperature (acting as a feedback)</td></tr>
<tr><td>Isotope evidence identifies fossil-fuel carbon</td><td><b>Natural variability</b> (El Niño/La Niña, volcanoes, solar cycles) causes year-to-year noise – trends need decades of data</td></tr>
</table>
<div class="key"><b>Judgement:</b> Although individual data sets have limitations, the combined evidence is consistent, independent and explained by a known mechanism, so it strongly supports the conclusion that human greenhouse gas emissions are causing the current warming (the IPCC describes human influence as "unequivocal").</div>
<div class="tip">"Evaluate" = make a <b>judgement</b> based on criteria. Give evidence with numbers, at least one strength and one limitation, then finish with a clear judgement sentence ("Overall, the evidence is highly reliable/valid because…").</div>
` },
    { id: 'glo-o11', title: 'Outcome 11 · Effects of global warming on the planet', html: `
<table class="t">
<tr><th>Sphere</th><th>Effects (cause → effect)</th></tr>
<tr><td><b>Hydrosphere</b></td><td><b>Sea-level rise</b> from (1) melting land ice (glaciers, Greenland, Antarctica) and (2) <b>thermal expansion</b> of warming sea water → coastal flooding, erosion, larger storm surges, low islands (Tuvalu, Kiribati) threatened. <b>Ocean acidification</b> (CO<sub>2</sub> + H<sub>2</sub>O → carbonic acid) makes shell/skeleton building harder. Melting sea ice; possible slowing of ocean currents</td></tr>
<tr><td><b>Atmosphere</b></td><td>More frequent, longer and hotter <b>heatwaves</b>; warmer air holds more water vapour (~7% per °C) → heavier rainfall and floods; altered rainfall patterns → longer droughts in some regions; more intense tropical cyclones (warmer seas)</td></tr>
<tr><td><b>Biosphere</b></td><td><b>Coral bleaching</b> – heat-stressed corals expel their symbiotic algae (zooxanthellae) and may die (Great Barrier Reef mass bleaching 2016, 2017, 2020, 2022, 2024); species shift towards the poles or uphill; extinctions (Bramble Cay melomys – first mammal lost to climate change); loss of polar habitat (polar bears, penguins); changes to flowering/migration timing; crop yields and pests affected; disease-carrying mosquitoes spread</td></tr>
<tr><td><b>Lithosphere</b></td><td>Thawing <b>permafrost</b> → ground subsidence and release of CH<sub>4</sub>/CO<sub>2</sub>; more coastal erosion; drought + heat → bushfires (Black Summer 2019–20) and soil degradation</td></tr>
</table>
<h4>Positive feedback loops (make warming worse)</h4>
<ul>
<li><b>Ice–albedo</b>: ice melts → darker ocean/land absorbs more sunlight → more warming → more melting.</li>
<li><b>Permafrost</b>: thaw releases methane → more warming → more thaw.</li>
<li><b>Water vapour</b>: warmer air holds more water vapour (a greenhouse gas) → more warming.</li>
</ul>
<div class="model"><b>Model answer (3 marks):</b> Global warming raises sea level because land ice in Greenland and Antarctica melts, adding water to the oceans, and because water expands as it warms (thermal expansion). Higher sea levels increase coastal flooding and erosion and make storm surges more damaging. This threatens low-lying communities such as Pacific islands and destroys coastal habitats like mangroves and salt marshes.</div>
` },
    { id: 'glo-x1', title: 'Extension (beyond outcome 11) · Deep ocean currents, El Niño and La Niña', html: `
<div class="warn">Outcomes 12–16 are beyond the examined range (1–11), but the 2024 yearly still asked about deep ocean currents and La Niña – learn the key points.</div>
<h4>Deep ocean currents (thermohaline circulation)</h4>
<ul>
<li>Driven by differences in <b>density</b> caused by <b>temperature</b> ("thermo") and <b>salinity</b> ("haline"). <b>Cold + salty water is denser and sinks.</b></li>
<li>Why polar water is both cold AND salty: when sea ice forms, salt is left behind in the surrounding water (<b>brine rejection</b>), e.g. around Antarctica; in the North Atlantic, cold winds cause strong <b>evaporation</b>, raising salinity.</li>
<li>Dense water sinks near the poles and spreads slowly along the ocean floor (a few cm/s); surface water flows in to replace it → a global "<b>conveyor belt</b>" taking ~1000 years to complete.</li>
<li><b>Climate role</b>: carries heat from the equator towards the poles (Gulf Stream keeps NW Europe mild); sinking water carries dissolved CO<sub>2</sub> to the deep ocean (carbon storage).</li>
<li><b>Marine life</b>: carries oxygen to deep-sea organisms; <b>upwelling</b> brings nutrients to the surface → phytoplankton blooms → rich fisheries.</li>
<li>Global warming: melting ice adds fresh water and warms the surface, making it less dense → may <b>slow</b> the circulation.</li>
</ul>
<div class="model"><b>Model answer (2 marks) – 2024 Q22:</b> Near the poles, water is cold, and freezing sea ice leaves salt behind (or evaporation increases salinity), so the water is both cold and salty and therefore very dense. This dense water sinks to the ocean floor and other water is drawn in to replace it, driving deep ocean currents.</div>
<h4>El Niño and La Niña (ENSO)</h4>
<table class="t">
<tr><th></th><th>Normal</th><th>El Niño</th><th>La Niña</th></tr>
<tr><td>Trade winds (blow east → west)</td><td>Moderate</td><td><b>Weaker</b></td><td><b>Stronger</b></td></tr>
<tr><td>Eastern Pacific (South America)</td><td>Cool upwelling</td><td><b>Warmer</b>, less upwelling</td><td><b>Cooler</b>, more upwelling</td></tr>
<tr><td>Eastern Australia</td><td>Average</td><td>Warmer, <b>drier – drought, bushfire risk</b></td><td>Cooler, <b>wetter – floods, more cyclones</b></td></tr>
</table>
<p>Global warming is expected to make the extremes associated with both phases (droughts, floods, heat) more intense because the baseline temperature and moisture are higher.</p>
` },
    { id: 'glo-x2', title: 'Extension (beyond outcome 11) · Waste, global agreements and decision-making', html: `
<h4>Waste management (long-term effects)</h4>
<ul>
<li>Landfill: organic waste decomposes <b>anaerobically</b> → methane; <b>leachate</b> (contaminated liquid) can pollute groundwater and soil with heavy metals and nutrients (→ eutrophication).</li>
<li>Good management (reduce, reuse, recycle, compost, lined landfills that capture methane) conserves resources, lowers emissions and protects water.</li>
<li><b>Great Pacific Garbage Patch</b>: ~1.6 million km<sup>2</sup> of floating plastic (≈1.8 trillion pieces) trapped by the circular currents of the <b>North Pacific Gyre</b> between Hawaii and California. Mostly microplastics by number; most mass is fishing gear. Effects: entanglement, ingestion, toxins bioaccumulate up food chains. Efforts: The Ocean Cleanup (System 03, river Interceptors), bans on single-use plastics.</li>
</ul>
<h4>Global agreements</h4>
<table class="t">
<tr><th>Agreement</th><th>Purpose</th><th>Outcome</th></tr>
<tr><td><b>Montreal Protocol</b> (1987)</td><td>Phase out production of ozone-depleting substances (CFCs, halons)</td><td>Ratified by every UN member (198 parties); ~99% of ODS eliminated; ozone layer recovering (~2066 over Antarctica). Developing countries given more time + Multilateral Fund (1990). <b>Kigali Amendment</b> (2016) phases down HFCs (greenhouse gases)</td></tr>
<tr><td><b>Paris Agreement</b> (2015)</td><td>Limit warming to <b>well below 2 °C</b>, aiming for <b>1.5 °C</b> above pre-industrial</td><td>Each country sets and regularly updates its own emission-reduction targets (Nationally Determined Contributions); climate finance for vulnerable nations</td></tr>
</table>
<h4>Why groups weigh criteria differently</h4>
<ul>
<li><b>Interests/stakes</b> – those who pay the cost of action (industry, workers) demand stronger proof; those harmed want early action (e.g. CFC makers disputed ozone science).</li>
<li><b>Standards of evidence</b> – scientists value peer review, mechanisms and models; others want direct observation of harm.</li>
<li><b>Attitude to uncertainty</b> – precautionary vs "proof first".</li>
<li><b>Time horizons</b> – election cycles and profit periods vs future generations.</li>
<li><b>Distribution of risk and equity</b> – developing nations stress fairness and growth; developed nations caused most past emissions.</li>
<li><b>Values</b> – intrinsic value of nature, First Nations connection to Country.</li>
</ul>
<p>The Montreal Protocol succeeded because of clear evidence, available substitutes and financial support – conditions weaker for climate change.</p>
` }
  ],
  cram: `
<h4>Spheres</h4>
<ul><li>Litho = crust + upper mantle · Hydro = all water · Atmo = gases (78% N<sub>2</sub>, 21% O<sub>2</sub>, 0.04% CO<sub>2</sub>) · Bio = all life</li>
<li>Always NAME both spheres + the linking process.</li></ul>
<h4>Models</h4><ul><li>3D grid + physics equations + data; tested by hindcasting. Useful: too big/slow/dangerous; change one variable; predictions & warnings. Limits: assumptions, simplifications, ranges.</li></ul>
<h4>Cycles</h4>
<ul>
<li><b>Water:</b> evaporation, transpiration, condensation, precipitation, runoff, infiltration.</li>
<li><b>Carbon:</b> photosynthesis (removes CO<sub>2</sub>) · respiration, decomposition, combustion (add CO<sub>2</sub>) · ocean sink · limestone & fossil fuels (largest store).</li>
<li><b>Nitrogen:</b> fixation (Rhizobium in legume nodules, lightning, Haber) → NH<sub>4</sub><sup>+</sup> → nitrification → NO<sub>2</sub><sup>−</sup> → NO<sub>3</sub><sup>−</sup> → assimilation → ammonification (decomposers) → denitrification (anaerobic bacteria) → N<sub>2</sub>. 3 microbe roles for 3 marks!</li>
<li><b>Phosphorus:</b> NO gas phase · weathering → uptake → consumption → decomposition → runoff/sedimentation → uplift. Mining/fertiliser → eutrophication (bloom → light blocked → decomposers use O<sub>2</sub> → dead zone).</li>
</ul>
<h4>Atmosphere (bottom → top)</h4>
<table class="t"><tr><th>Layer</th><th>km</th><th>Temp</th><th>Feature</th></tr>
<tr><td>Troposphere</td><td>0–12</td><td>↓</td><td>weather</td></tr>
<tr><td>Stratosphere</td><td>12–50</td><td>↑</td><td>ozone</td></tr>
<tr><td>Mesosphere</td><td>50–85</td><td>↓ coldest</td><td>meteors burn</td></tr>
<tr><td>Thermosphere</td><td>85–600</td><td>↑ very hot</td><td>auroras, ISS</td></tr>
<tr><td>Exosphere</td><td>600+</td><td>—</td><td>merges with space</td></tr></table>
<h4>Ozone</h4><ul><li>Stratosphere, absorbs UV-B/UV-C → prevents DNA mutation, skin cancer, cataracts. CFCs + UV → Cl → destroys O<sub>3</sub> (one Cl ≈ 100 000 O<sub>3</sub>). Antarctic hole in spring. Montreal 1987.</li></ul>
<h4>Disasters (effects on ≥2 spheres, linked, with example)</h4>
<ul>
<li><b>Earthquake:</b> faults, landslides, liquefaction · tsunami, groundwater · dust, gas · deaths, habitat. Boxing Day 2004 M9.1, ~230 000 deaths.</li>
<li><b>Volcano:</b> ash + SO<sub>2</sub> → sulfate aerosols reflect sunlight → cooling; acid rain; CO<sub>2</sub>; lahars; new land; fertile soil. Pinatubo 1991 → ~0.5 °C cooling.</li>
<li><b>Cyclone:</b> needs ≥26.5 °C sea, &gt;500 km from equator (Coriolis), low wind shear, humid mid-troposphere. Storm surge, flooding, erosion, upwelling, reef damage. Tracy 1974, Yasi 2011.</li>
</ul>
<h4>Greenhouse</h4>
<ul><li>Natural: GHGs absorb & re-emit IR → 15 °C not −18 °C. Enhanced = human extra GHGs → global warming.</li>
<li>CO<sub>2</sub> (fossil fuels, deforestation), CH<sub>4</sub> (livestock, rice, landfill), N<sub>2</sub>O (fertiliser).</li>
<li>Evidence: Keeling 315 → 420+ ppm; ice cores 800 000 yr correlation; +1.1–1.2 °C; sea level +20 cm; ice loss; pH 8.2 → 8.1.</li>
<li>Evaluate: independent lines + mechanism (strength) vs correlation ≠ causation, proxies, natural variability (limits) → judgement.</li>
<li>Effects: sea-level rise (melt + thermal expansion), heatwaves, floods/droughts, coral bleaching, acidification, extinctions, feedbacks (albedo, permafrost).</li></ul>
<h4>Extension</h4><ul><li>Thermohaline: cold + salty = dense → sinks at poles (brine rejection, evaporation). La Niña: stronger trade winds, cooler E Pacific, wetter E Australia. El Niño: opposite → drought.</li></ul>
`
});

SD.cards.push(
  { id: 'glo-c1', topic: 'global', outcome: 'glo-o1', front: 'Lithosphere', back: 'The solid, rocky outer layer of Earth: the crust plus the brittle upper mantle (~100 km thick), broken into tectonic plates.' },
  { id: 'glo-c2', topic: 'global', outcome: 'glo-o1', front: 'Hydrosphere', back: 'All of Earth\u2019s water in solid, liquid or gas form – oceans, rivers, lakes, groundwater, ice and clouds.' },
  { id: 'glo-c3', topic: 'global', outcome: 'glo-o1', front: 'Atmosphere', back: 'The layer of gases surrounding Earth held by gravity: ~78% N\u2082, ~21% O\u2082, ~0.9% Ar, ~0.04% CO\u2082 plus water vapour.' },
  { id: 'glo-c4', topic: 'global', outcome: 'glo-o1', front: 'Biosphere', back: 'All living things on Earth (plants, animals, fungi, microorganisms) and the zones where they live.' },
  { id: 'glo-c5', topic: 'global', outcome: 'glo-o1', front: 'Give an example of an atmosphere–hydrosphere interaction', back: 'Wind generates ocean waves; oceans absorb CO\u2082 from the air; evaporation moves water vapour into the atmosphere.' },
  { id: 'glo-c6', topic: 'global', outcome: 'glo-o2', front: 'Why are computer simulations useful in Earth sciences?', back: 'Earth processes are too large, slow or dangerous to test experimentally; models can simulate long time spans quickly, change one variable at a time and make predictions/early warnings.' },
  { id: 'glo-c7', topic: 'global', outcome: 'glo-o2', front: 'Hindcasting', back: 'Testing a model by running it on past conditions to check it reproduces climate that actually happened; success increases confidence in its predictions.' },
  { id: 'glo-c8', topic: 'global', outcome: 'glo-o2', front: 'Global climate model (GCM)', back: 'A computer model dividing the atmosphere, oceans and land into a 3D grid and using physics equations to simulate how energy, air and water move, to project future climate.' },
  { id: 'glo-c9', topic: 'global', outcome: 'glo-o2', front: 'Limitations of computer models', back: 'Depend on the accuracy of input data and assumptions; must simplify processes (e.g. clouds); limited resolution; results are uncertain ranges, and weather is chaotic.' },
  { id: 'glo-c10', topic: 'global', outcome: 'glo-o3a', front: 'Transpiration', back: 'Loss of water vapour from plant leaves through stomata – moves water from the biosphere to the atmosphere.' },
  { id: 'glo-c11', topic: 'global', outcome: 'glo-o3a', front: 'Infiltration', back: 'Water soaking into soil and rock, recharging groundwater (aquifers).' },
  { id: 'glo-c12', topic: 'global', outcome: 'glo-o3a', front: 'Processes that ADD CO\u2082 to the atmosphere', back: 'Cellular respiration, decomposition, combustion (fossil fuels, bushfires), volcanic eruptions, deforestation.' },
  { id: 'glo-c13', topic: 'global', outcome: 'glo-o3a', front: 'Processes that REMOVE CO\u2082 from the atmosphere', back: 'Photosynthesis (land plants and phytoplankton) and dissolving into the oceans; long term – formation of limestone and fossil fuels.' },
  { id: 'glo-c14', topic: 'global', outcome: 'glo-o3a', front: 'Largest long-term carbon store', back: 'The lithosphere – sedimentary rocks such as limestone (CaCO\u2083) and fossil fuels.' },
  { id: 'glo-c15', topic: 'global', outcome: 'glo-o3a', front: 'Carbon sink', back: 'A reservoir that absorbs more carbon than it releases, e.g. oceans (absorb ~25–30% of human CO\u2082) and growing forests.' },
  { id: 'glo-c16', topic: 'global', outcome: 'glo-o3b', front: 'Why can\u2019t plants use atmospheric nitrogen directly?', back: 'N\u2082 has a very strong triple bond and is unreactive; it must be fixed into ammonium or nitrate before plants can absorb it.' },
  { id: 'glo-c17', topic: 'global', outcome: 'glo-o3b', front: 'Nitrogen fixation', back: 'Conversion of N\u2082 gas into ammonia/ammonium (NH\u2084\u207a) – by nitrogen-fixing bacteria (e.g. Rhizobium in legume root nodules), lightning, or the industrial Haber process.' },
  { id: 'glo-c18', topic: 'global', outcome: 'glo-o3b', front: 'Rhizobium', back: 'Nitrogen-fixing bacteria living in root nodules of legumes (peas, beans, clover) in a mutualistic relationship: they supply ammonium; the plant supplies sugars.' },
  { id: 'glo-c19', topic: 'global', outcome: 'glo-o3b', front: 'Nitrification', back: 'Nitrifying bacteria oxidise ammonium to nitrite, then nitrite to nitrate: NH\u2084\u207a → NO\u2082\u207b → NO\u2083\u207b (aerobic soil).' },
  { id: 'glo-c20', topic: 'global', outcome: 'glo-o3b', front: 'Assimilation (nitrogen cycle)', back: 'Plants absorb nitrate/ammonium through roots and use it to make proteins and nucleic acids; animals obtain it by eating plants or animals.' },
  { id: 'glo-c21', topic: 'global', outcome: 'glo-o3b', front: 'Ammonification', back: 'Decomposers (bacteria and fungi) break down dead organisms and wastes, releasing nitrogen as ammonium into the soil.' },
  { id: 'glo-c22', topic: 'global', outcome: 'glo-o3b', front: 'Denitrification', back: 'Anaerobic denitrifying bacteria (in waterlogged, low-oxygen soil) convert nitrate back into N\u2082 gas (and some N\u2082O), returning it to the atmosphere.' },
  { id: 'glo-c23', topic: 'global', outcome: 'glo-o3b', front: 'What do organisms use nitrogen for?', back: 'To make amino acids/proteins, DNA and RNA (and chlorophyll in plants).' },
  { id: 'glo-c24', topic: 'global', outcome: 'glo-o3c', front: 'Key difference of the phosphorus cycle', back: 'It has no atmospheric (gas) phase – phosphorus moves through rock, soil, water and living things only; mainly a slow sedimentary cycle.' },
  { id: 'glo-c25', topic: 'global', outcome: 'glo-o3c', front: 'What do organisms use phosphorus for?', back: 'DNA/RNA, ATP (energy transfer), phospholipid cell membranes, bones and teeth.' },
  { id: 'glo-c26', topic: 'global', outcome: 'glo-o3c', front: 'Weathering (phosphorus cycle)', back: 'Rain, ice and weak acids break down phosphate-rich rocks, releasing phosphate ions into soil and water.' },
  { id: 'glo-c27', topic: 'global', outcome: 'glo-o3c', front: 'Eutrophication', back: 'Excess nutrients (phosphate, nitrate) cause algal blooms; dead algae are decomposed by bacteria that use up dissolved oxygen, killing fish and creating dead zones.' },
  { id: 'glo-c28', topic: 'global', outcome: 'glo-o3c', front: 'Limiting nutrient', back: 'The nutrient in shortest supply that limits growth; phosphorus is often limiting in fresh water, so adding it causes algal blooms.' },
  { id: 'glo-c29', topic: 'global', outcome: 'glo-o3c', front: 'How do humans speed up the phosphorus cycle?', back: 'Mining phosphate rock for fertilisers, plus sewage, detergents and soil erosion – moving phosphorus from rock to waterways in decades instead of millions of years.' },
  { id: 'glo-c30', topic: 'global', outcome: 'glo-o4', front: 'Troposphere', back: 'Lowest layer, 0 to ~12 km; temperature decreases with height; contains weather and most of the atmosphere\u2019s mass.' },
  { id: 'glo-c31', topic: 'global', outcome: 'glo-o4', front: 'Stratosphere', back: '~12–50 km; temperature increases with height because ozone absorbs UV; contains the ozone layer; stable, no convection.' },
  { id: 'glo-c32', topic: 'global', outcome: 'glo-o4', front: 'Mesosphere', back: '~50–85 km; temperature decreases to ~−90 °C (coldest layer); meteors burn up here.' },
  { id: 'glo-c33', topic: 'global', outcome: 'glo-o4', front: 'Thermosphere', back: '~85–600 km; temperature increases greatly (absorbs high-energy UV and X-rays); auroras occur; ISS orbits here (~400 km).' },
  { id: 'glo-c34', topic: 'global', outcome: 'glo-o4', front: 'Exosphere', back: 'Outermost layer (~600 km+), extremely thin gas merging into space; many satellites.' },
  { id: 'glo-c35', topic: 'global', outcome: 'glo-o5', front: 'Why is the ozone layer important?', back: 'Stratospheric ozone absorbs most harmful UV-B and UV-C radiation, preventing DNA damage, mutations, skin cancer, cataracts and harm to plants and plankton.' },
  { id: 'glo-c36', topic: 'global', outcome: 'glo-o5', front: 'How do CFCs destroy ozone?', back: 'UV breaks CFCs in the stratosphere, releasing Cl atoms; Cl + O\u2083 → ClO + O\u2082, then ClO + O → Cl + O\u2082. Cl is regenerated, so one Cl can destroy ~100 000 O\u2083 molecules.' },
  { id: 'glo-c37', topic: 'global', outcome: 'glo-o5', front: 'Ozone hole', back: 'Severe seasonal thinning of stratospheric ozone over Antarctica each spring (Sept–Nov), discovered in 1985, caused by CFCs.' },
  { id: 'glo-c38', topic: 'global', outcome: 'glo-o6', front: 'Liquefaction', back: 'Earthquake shaking makes loose, water-saturated soil lose strength and behave like a liquid, so buildings tilt and sink (e.g. Christchurch 2011).' },
  { id: 'glo-c39', topic: 'global', outcome: 'glo-o6', front: 'How does an earthquake cause a tsunami?', back: 'An undersea earthquake suddenly lifts or drops the sea floor, displacing a huge column of water; the waves slow and grow tall as they reach shallow coastal water.' },
  { id: 'glo-c40', topic: 'global', outcome: 'glo-o6', front: '2004 Boxing Day tsunami', back: 'Magnitude ~9.1 undersea earthquake off Sumatra; tsunami hit 14 countries, ~230 000 deaths, destroyed reefs, mangroves and farmland (salt).' },
  { id: 'glo-c41', topic: 'global', outcome: 'glo-o7', front: 'How can a volcanic eruption cool the planet?', back: 'SO\u2082 injected into the stratosphere forms sulfate aerosols that reflect sunlight back to space, reducing sunlight reaching the surface (e.g. Pinatubo 1991 cooled Earth ~0.5 °C).' },
  { id: 'glo-c42', topic: 'global', outcome: 'glo-o7', front: 'Lahar', back: 'A volcanic mudflow of ash, rock and water (often from melted snow/ice or heavy rain) that buries valleys and rivers.' },
  { id: 'glo-c43', topic: 'global', outcome: 'glo-o7', front: 'Positive (long-term) effect of volcanoes on the biosphere', back: 'Weathered volcanic ash/lava forms fertile soils rich in nutrients such as P, K, Mg and Fe; also creates new land for colonisation.' },
  { id: 'glo-c44', topic: 'global', outcome: 'glo-o8', front: 'Conditions for tropical cyclone formation', back: 'Sea surface ≥ 26.5 °C (to ~50 m deep); >500 km from equator (Coriolis effect); low vertical wind shear; humid mid-troposphere; pre-existing low pressure.' },
  { id: 'glo-c45', topic: 'global', outcome: 'glo-o8', front: 'Storm surge', back: 'Abnormal rise in sea level during a cyclone caused by very low pressure and strong onshore winds, flooding coasts with salt water.' },
  { id: 'glo-c46', topic: 'global', outcome: 'glo-o8', front: 'Coriolis effect', back: 'Deflection of moving air (and water) caused by Earth\u2019s rotation – to the left in the Southern Hemisphere, giving clockwise cyclones; too weak at the equator.' },
  { id: 'glo-c47', topic: 'global', outcome: 'glo-o8', front: 'Why do cyclones weaken over land?', back: 'They lose their supply of warm, moist ocean air (latent heat energy) and friction with land slows the winds.' },
  { id: 'glo-c48', topic: 'global', outcome: 'glo-o9', front: 'Natural greenhouse effect', back: 'Greenhouse gases absorb infrared radiation emitted by Earth\u2019s surface and re-emit it, some back to the surface, keeping Earth ~15 °C instead of ~−18 °C.' },
  { id: 'glo-c49', topic: 'global', outcome: 'glo-o9', front: 'Enhanced greenhouse effect', back: 'Extra warming caused by human activities increasing greenhouse gas concentrations (CO\u2082, CH\u2084, N\u2082O), so more infrared is trapped → global warming.' },
  { id: 'glo-c50', topic: 'global', outcome: 'glo-o9', front: 'Three main human greenhouse gases and a source of each', back: 'Carbon dioxide – burning fossil fuels/deforestation; methane – livestock, rice paddies, landfill; nitrous oxide – nitrogen fertilisers.' },
  { id: 'glo-c51', topic: 'global', outcome: 'glo-o10', front: 'Keeling curve', back: 'Continuous record of atmospheric CO\u2082 at Mauna Loa since 1958: ~315 ppm → 420+ ppm, with a yearly seasonal sawtooth.' },
  { id: 'glo-c52', topic: 'global', outcome: 'glo-o10', front: 'Ice core evidence', back: 'Air bubbles in Antarctic ice record CO\u2082/CH\u2084 for ~800 000 years; isotopes give temperature; CO\u2082 and temperature correlate; today\u2019s CO\u2082 is the highest in that record.' },
  { id: 'glo-c53', topic: 'global', outcome: 'glo-o10', front: 'Main limitation when using correlation as evidence', back: 'Correlation does not prove causation – a causal mechanism (CO\u2082 absorbs infrared) and other evidence are needed to show CO\u2082 causes warming.' },
  { id: 'glo-c54', topic: 'global', outcome: 'glo-o11', front: 'Two causes of sea-level rise', back: 'Melting land ice (glaciers and ice sheets) adding water, and thermal expansion of warming sea water.' },
  { id: 'glo-c55', topic: 'global', outcome: 'glo-o11', front: 'Coral bleaching', back: 'Heat-stressed corals expel their symbiotic algae (zooxanthellae), turning white; if prolonged, the coral starves and dies.' },
  { id: 'glo-c56', topic: 'global', outcome: 'glo-o11', front: 'Ice–albedo feedback', back: 'Melting ice exposes darker ocean/land, which absorbs more sunlight, causing more warming and more melting – a positive feedback.' },
  { id: 'glo-c57', topic: 'global', outcome: 'glo-x1', front: 'What drives deep ocean currents? (extension)', back: 'Density differences from temperature and salinity (thermohaline circulation): cold, salty water at the poles is dense and sinks, pulling surface water in to replace it.' },
  { id: 'glo-c58', topic: 'global', outcome: 'glo-x1', front: 'La Niña (extension)', back: 'Stronger trade winds push more warm water west; cooler eastern Pacific; wetter, cooler eastern Australia with more floods and cyclones.' },
  { id: 'glo-c59', topic: 'global', outcome: 'glo-x2', front: 'Montreal Protocol (extension)', back: '1987 treaty phasing out ozone-depleting substances such as CFCs; ratified by all UN members; ~99% eliminated; ozone layer recovering.' }
);

SD.mcq.push(
  { id: 'glo-q1', topic: 'global', outcome: 'glo-o1', q: `Which of the following is part of the lithosphere?`, options: [`Groundwater in an aquifer`, `The crust and upper mantle`, `Clouds in the troposphere`, `Bacteria in the soil`], answer: 1, explain: `The lithosphere is the solid rocky crust plus the brittle upper mantle. Groundwater is hydrosphere (even though it is underground), clouds are hydrosphere/atmosphere and bacteria are biosphere.` },
  { id: 'glo-q2', topic: 'global', outcome: 'glo-o1', q: `Plant roots growing into cracks and breaking rock apart is an interaction between which two spheres?`, options: [`Biosphere and lithosphere`, `Biosphere and atmosphere`, `Hydrosphere and lithosphere`, `Atmosphere and lithosphere`], answer: 0, explain: `Roots are living (biosphere) and rock is lithosphere. Water freezing in cracks would be hydrosphere–lithosphere, but here the agent is the plant.` },
  { id: 'glo-q3', topic: 'global', outcome: 'glo-o1', q: `Saharan dust carried by wind across the Atlantic supplies phosphorus to the Amazon rainforest. Which sequence of spheres does this phosphorus pass through?`, options: [`Hydrosphere → atmosphere → biosphere`, `Biosphere → atmosphere → lithosphere`, `Lithosphere → atmosphere → biosphere`, `Atmosphere → hydrosphere → lithosphere`], answer: 2, explain: `The dust comes from rock/sediment (lithosphere), is transported by wind (atmosphere) and taken up by rainforest plants (biosphere). Phosphorus has no gas phase, but dust particles can still be carried by the air.` },
  { id: 'glo-q4', topic: 'global', outcome: 'glo-o2', q: `Which is the BEST reason why computer simulations are used to study climate change?`, options: [`They give exact predictions with no uncertainty`, `They remove the need to collect real data`, `They are cheaper than buying thermometers`, `The climate system is too large and slow to experiment on, but models can change one variable and project decades ahead`], answer: 3, explain: `Models let scientists test "what if" scenarios on a system that cannot be experimented on. They still need real data as inputs and give ranges, not exact values.` },
  { id: 'glo-q5', topic: 'global', outcome: 'glo-o2', q: `A climate model is run using conditions from 1900 and correctly reproduces the temperatures measured from 1900 to 2020. This process is called:`, options: [`Extrapolation`, `Hindcasting`, `Calibration of thermometers`, `Peer review`], answer: 1, explain: `Hindcasting tests a model against the known past. Extrapolation means extending beyond the data; calibration and peer review are different processes.` },
  { id: 'glo-q6', topic: 'global', outcome: 'glo-o2', q: `Which is a limitation of global climate models?`, options: [`They cannot include the oceans`, `They can only model the past`, `Processes smaller than a grid cell, such as clouds, must be simplified`, `They can only be run once`], answer: 2, explain: `Grid cells are often tens of kilometres wide, so small-scale processes like individual clouds are approximated, adding uncertainty. Modern models do include oceans and are used for future projections.` },
  { id: 'glo-q7', topic: 'global', outcome: 'glo-o3a', q: `Which process moves water from the biosphere to the atmosphere?`, options: [`Transpiration`, `Infiltration`, `Condensation`, `Runoff`], answer: 0, explain: `Transpiration is evaporation of water from leaves through stomata. Condensation is vapour → liquid within the atmosphere; infiltration and runoff move water through/over land.` },
  { id: 'glo-q8', topic: 'global', outcome: 'glo-o3a', q: `Which of the following processes REMOVES carbon dioxide from the atmosphere?`, options: [`Cellular respiration`, `Burning natural gas`, `Decomposition of leaf litter`, `Photosynthesis by phytoplankton`], answer: 3, explain: `Photosynthesis uses CO₂ to make glucose. Respiration, combustion and decomposition all release CO₂. Phytoplankton are a major ocean carbon sink.` },
  { id: 'glo-q9', topic: 'global', outcome: 'glo-o3a', q: `Where is the largest store of carbon on Earth?`, options: [`The atmosphere`, `Living plants`, `Sedimentary rocks such as limestone`, `Soil bacteria`], answer: 2, explain: `Most of Earth's carbon is locked in the lithosphere as carbonate rocks and fossil fuels. The atmosphere holds a comparatively small amount, which is why adding fossil carbon changes it so much.` },
  { id: 'glo-q10', topic: 'global', outcome: 'glo-o3a', q: `Coral and shellfish build skeletons from calcium carbonate. When they die and are buried, this carbon becomes:`, options: [`Methane in the atmosphere`, `Limestone in the lithosphere`, `Nitrate in the soil`, `Glucose in plants`], answer: 1, explain: `Calcium carbonate shells accumulate on the sea floor and are compacted into limestone, a long-term carbon store.` },
  { id: 'glo-q11', topic: 'global', outcome: 'glo-o3b', q: `Which conversion is carried out by nitrifying bacteria?`, options: [`N₂ → NH₄⁺`, `NO₃⁻ → N₂`, `Proteins → NH₄⁺`, `NH₄⁺ → NO₂⁻ → NO₃⁻`], answer: 3, explain: `Nitrification oxidises ammonium to nitrite then nitrate. N₂ → NH₄⁺ is fixation, NO₃⁻ → N₂ is denitrification, and proteins → NH₄⁺ is ammonification by decomposers.` },
  { id: 'glo-q12', topic: 'global', outcome: 'glo-o3b', q: `Farmers often plant clover or beans before a wheat crop. The main reason is that:`, options: [`Legumes release phosphate from rocks`, `Rhizobium bacteria in legume root nodules fix atmospheric nitrogen, enriching the soil`, `Legumes carry out denitrification`, `Legumes absorb excess nitrate, preventing eutrophication`], answer: 1, explain: `Rhizobium in nodules converts N₂ to ammonium, which remains in the soil when the legume dies/decomposes, acting as natural fertiliser. Denitrification would remove nitrogen.` },
  { id: 'glo-q13', topic: 'global', outcome: 'glo-o3b', q: `In waterlogged soil with very little oxygen, which process is MOST likely to increase?`, options: [`Denitrification`, `Nitrification`, `Nitrogen fixation by lightning`, `Assimilation`], answer: 0, explain: `Denitrifying bacteria are anaerobic, thriving without oxygen and converting nitrate to N₂. Nitrifying bacteria need oxygen, so nitrification decreases.` },
  { id: 'glo-q14', topic: 'global', outcome: 'glo-o3b', q: `Which is NOT a way that atmospheric nitrogen is fixed?`, options: [`Lightning`, `The Haber process`, `Bacteria in legume root nodules`, `Absorption of N₂ through plant leaves`], answer: 3, explain: `Plants cannot absorb or use N₂ through leaves – it must be fixed first. Lightning, the Haber process and nitrogen-fixing bacteria all fix N₂.` },
  { id: 'glo-q15', topic: 'global', outcome: 'glo-o3b', q: `How do animals obtain the nitrogen they need to make proteins?`, options: [`By breathing in N₂`, `By absorbing nitrate through their skin`, `By eating plants or other animals`, `From nitrogen-fixing bacteria in their lungs`], answer: 2, explain: `Animals get nitrogen in organic form (proteins) by consuming plants or animals. Breathed-in N₂ is exhaled unchanged.` },
  { id: 'glo-q16', topic: 'global', outcome: 'glo-o3b', q: `Decomposer bacteria and fungi break down a dead animal. Which nitrogen-containing substance do they mainly release into the soil?`, options: [`Nitrogen gas`, `Ammonium ions`, `Nitrate ions`, `Nitrous oxide`], answer: 1, explain: `Ammonification produces ammonium (NH₄⁺), which nitrifying bacteria can then convert to nitrate.` },
  { id: 'glo-q17', topic: 'global', outcome: 'glo-o3c', q: `Which feature makes the phosphorus cycle different from the carbon and nitrogen cycles?`, options: [`It involves living things`, `It has no significant atmospheric (gas) phase`, `It involves decomposers`, `It is affected by humans`], answer: 1, explain: `Phosphorus has no stable gaseous form, so it cycles through rock, soil, water and organisms. All the other options apply to all three cycles.` },
  { id: 'glo-q18', topic: 'global', outcome: 'glo-o3c', q: `Which process returns phosphorus from the ocean floor to land, and over what timescale?`, options: [`Evaporation, over days`, `Denitrification, over years`, `Photosynthesis, over months`, `Geological uplift of sedimentary rock, over millions of years`], answer: 3, explain: `Phosphate in marine sediments becomes rock and is only exposed again by tectonic uplift – the slow geological part of the cycle.` },
  { id: 'glo-q19', topic: 'global', outcome: 'glo-o3c', q: `During eutrophication, why does the dissolved oxygen in a lake fall?`, options: [`Algae use up all the oxygen by photosynthesis`, `Fertiliser chemically reacts with oxygen`, `Aerobic decomposers use oxygen while breaking down the large mass of dead algae and plants`, `Warm water from the fertiliser drives oxygen out`], answer: 2, explain: `The key link is decomposition: bacteria respire aerobically as they break down dead algae, consuming dissolved oxygen. Photosynthesis actually produces oxygen.` },
  { id: 'glo-q20', topic: 'global', outcome: 'glo-o3c', q: `Phosphorus is used by living things to make:`, options: [`DNA, ATP and cell membranes`, `Glucose and starch only`, `Chlorophyll and cellulose`, `Water and carbon dioxide`], answer: 0, explain: `Phosphate groups are part of nucleotides (DNA/RNA), ATP and phospholipids. Glucose, starch and cellulose contain only C, H and O.` },
  { id: 'glo-q21', topic: 'global', outcome: 'glo-o3c', q: `Which human activity speeds up the movement of phosphorus from the lithosphere into waterways the MOST?`, options: [`Planting legumes`, `Mining phosphate rock and applying fertiliser`, `Building wind farms`, `Using public transport`], answer: 1, explain: `Mined phosphate rock is spread as fertiliser; runoff carries excess phosphate into rivers in years rather than the millions of years natural weathering takes.` },
  { id: 'glo-q22', topic: 'global', outcome: 'glo-o4', q: `Which of the following lists layers of the atmosphere correctly for decreasing altitude?`, options: [`Troposphere, stratosphere, exosphere`, `Thermosphere, stratosphere, mesosphere`, `Exosphere, troposphere, thermosphere`, `Thermosphere, mesosphere, stratosphere`], answer: 3, explain: `From top to bottom: exosphere, thermosphere, mesosphere, stratosphere, troposphere. Only D keeps that order. A is increasing altitude.`, source: '2024 Yearly Q13' },
  { id: 'glo-q23', topic: 'global', outcome: 'glo-o4', q: `In which layer of the atmosphere does temperature INCREASE with altitude because ozone absorbs ultraviolet radiation?`, options: [`Troposphere`, `Stratosphere`, `Mesosphere`, `Exosphere`], answer: 1, explain: `Ozone in the stratosphere absorbs UV and releases heat, so the stratosphere warms with height. The thermosphere also warms with height, but due to absorption of high-energy UV/X-rays by thin gas, not ozone.` },
  { id: 'glo-q24', topic: 'global', outcome: 'glo-o4', q: `Meteors usually burn up in the:`, options: [`Troposphere`, `Stratosphere`, `Mesosphere`, `Exosphere`], answer: 2, explain: `The mesosphere (~50–85 km) has enough gas for friction to heat and vaporise most meteors. Above it the gas is too thin.` },
  { id: 'glo-q25', topic: 'global', outcome: 'glo-o4', q: `A weather balloon rises from the ground to 10 km. What is the most likely change in temperature it records?`, options: [`A steady decrease of roughly 6–7 °C per km`, `A steady increase because it is closer to the Sun`, `No change`, `A sharp increase due to the ozone layer`], answer: 0, explain: `In the troposphere temperature falls with height (about 6.5 °C/km) because the air is heated from the ground up. The Sun's distance barely changes; ozone warming begins above the tropopause.` },
  { id: 'glo-q26', topic: 'global', outcome: 'glo-o4', q: `The thermosphere can reach over 1500 °C, yet an astronaut there would feel very cold. Why?`, options: [`The thermometer readings are wrong`, `The gas particles are moving slowly`, `It is in Earth's shadow`, `The particles are very fast but so far apart that very little heat is transferred`], answer: 3, explain: `Temperature measures the average kinetic energy of particles. In the thermosphere particles are energetic but extremely sparse, so few collide with you to transfer heat.` },
  { id: 'glo-q27', topic: 'global', outcome: 'glo-o4', q: `Auroras and the orbit of the International Space Station are both found in the:`, options: [`Stratosphere`, `Mesosphere`, `Thermosphere`, `Troposphere`], answer: 2, explain: `Auroras form ~100–400 km up and the ISS orbits at ~400 km – both in the thermosphere.` },
  { id: 'glo-q28', topic: 'global', outcome: 'glo-o5', q: `Which of the following can result from reduced ozone levels in the stratosphere?`, options: [`Increased rate of droughts`, `Increased rate of genetic mutation`, `Rising sea levels`, `More frequent tsunamis`], answer: 1, explain: `Less ozone lets more UV-B reach the surface; UV damages DNA, increasing mutations (and skin cancer). Droughts and sea-level rise are linked to global warming, not ozone loss.`, source: '2024 Yearly Q15' },
  { id: 'glo-q29', topic: 'global', outcome: 'glo-o5', q: `CFCs are very stable at ground level. Why do they destroy ozone in the stratosphere?`, options: [`Ultraviolet light breaks them apart there, releasing chlorine atoms that catalyse ozone breakdown`, `They react with oxygen gas to make carbon dioxide`, `They absorb infrared radiation and heat the ozone`, `They condense into clouds that block the Sun`], answer: 0, explain: `High-energy UV in the stratosphere splits CFCs, freeing Cl atoms; each Cl is regenerated in the chain reaction and can destroy ~100 000 ozone molecules.` },
  { id: 'glo-q30', topic: 'global', outcome: 'glo-o5', q: `The Antarctic ozone hole is most severe during:`, options: [`Southern Hemisphere summer (Dec–Feb)`, `Southern Hemisphere autumn (Mar–May)`, `Southern Hemisphere winter (Jun–Aug)`, `Southern Hemisphere spring (Sep–Nov)`], answer: 3, explain: `Chlorine builds up on polar stratospheric clouds during the dark winter; when sunlight returns in spring, rapid ozone destruction occurs.` },
  { id: 'glo-q31', topic: 'global', outcome: 'glo-o5', q: `Which statement about ozone is correct?`, options: [`All ozone is beneficial to humans`, `Ground-level ozone is a pollutant, while stratospheric ozone protects life from UV`, `The ozone hole is the main cause of global warming`, `Ozone is mainly found in the mesosphere`], answer: 1, explain: `Tropospheric ozone forms in smog and harms lungs; stratospheric ozone absorbs UV. Ozone depletion is a separate issue from global warming.` },
  { id: 'glo-q32', topic: 'global', outcome: 'glo-o6', q: `An undersea earthquake lifts the sea floor by several metres. The resulting tsunami floods coastal farms. Which sequence of spheres is affected?`, options: [`Lithosphere → hydrosphere → biosphere`, `Atmosphere → hydrosphere → lithosphere`, `Hydrosphere → lithosphere → atmosphere`, `Biosphere → lithosphere → hydrosphere`], answer: 0, explain: `The sea floor (lithosphere) moves, displacing ocean water (hydrosphere), which damages crops and kills organisms (biosphere).` },
  { id: 'glo-q33', topic: 'global', outcome: 'glo-o6', q: `During the 2011 Christchurch earthquake, sand and water bubbled up and buildings sank into the ground. This is called:`, options: [`Subduction`, `Weathering`, `Liquefaction`, `A lahar`], answer: 2, explain: `Liquefaction occurs when shaking makes water-saturated loose soil behave like a liquid. A lahar is a volcanic mudflow.` },
  { id: 'glo-q34', topic: 'global', outcome: 'glo-o6', q: `Which is an effect of an earthquake on the atmosphere?`, options: [`Formation of sag ponds`, `Dust plumes from landslides and smoke from fires reducing air quality`, `Changes in the water table`, `Liquefaction of soil`], answer: 1, explain: `Dust and smoke enter the air (atmosphere). Sag ponds and water-table changes are hydrosphere effects; liquefaction is lithosphere.` },
  { id: 'glo-q35', topic: 'global', outcome: 'glo-o7', q: `After the 1991 eruption of Mount Pinatubo, global average temperatures fell by about 0.5 °C. The main reason was:`, options: [`Lava cooled the oceans`, `Ash absorbed infrared radiation from Earth`, `The eruption released large amounts of CO₂`, `Sulfur dioxide formed sulfate aerosols in the stratosphere that reflected sunlight`], answer: 3, explain: `Sulfate aerosols reflect incoming sunlight. CO₂ would cause warming (but volcanic CO₂ is small compared with human emissions). Lava affects only local areas.` },
  { id: 'glo-q36', topic: 'global', outcome: 'glo-o7', q: `Which volcanic gas is mainly responsible for acid rain?`, options: [`Sulfur dioxide`, `Water vapour`, `Nitrogen`, `Argon`], answer: 0, explain: `SO₂ dissolves in water droplets and oxidises to form sulfuric acid. Water vapour and nitrogen/argon do not form strong acids.` },
  { id: 'glo-q37', topic: 'global', outcome: 'glo-o7', q: `Farmers often live on the slopes of active volcanoes despite the danger. Which effect of volcanoes on the lithosphere explains this?`, options: [`Volcanoes make the climate warmer`, `Volcanic rock is easy to dig`, `Weathered ash forms fertile soils rich in nutrients`, `Volcanoes prevent earthquakes`], answer: 2, explain: `Volcanic ash and lava weather into soils rich in minerals such as potassium, phosphorus and magnesium, supporting high crop yields.` },
  { id: 'glo-q38', topic: 'global', outcome: 'glo-o7', q: `An eruption melts a glacier on a volcano, producing a fast-moving flow of mud and debris. This is an interaction between:`, options: [`Atmosphere and biosphere only`, `Lithosphere and hydrosphere`, `Biosphere and atmosphere`, `Atmosphere and hydrosphere only`], answer: 1, explain: `Volcanic heat (lithosphere) melts ice (hydrosphere); the water mixes with ash and rock to form a lahar.` },
  { id: 'glo-q39', topic: 'global', outcome: 'glo-o8', q: `Which set of conditions is needed for a tropical cyclone to form?`, options: [`Sea surface below 20 °C, directly over the equator, strong wind shear`, `Cold dry air, high pressure, over land`, `Sea surface at least 26.5 °C, more than ~500 km from the equator, low wind shear`, `Any ocean, any latitude, provided winds are strong`], answer: 2, explain: `Warm water supplies energy, distance from the equator allows the Coriolis effect to create spin, and low wind shear keeps the storm column intact.` },
  { id: 'glo-q40', topic: 'global', outcome: 'glo-o8', q: `Tropical cyclones do not form directly on the equator because:`, options: [`The sea is too cold there`, `There is no water vapour at the equator`, `Trade winds are too weak`, `The Coriolis effect is too weak to make the air spin`], answer: 3, explain: `The Coriolis deflection depends on latitude and is near zero at the equator, so air flows straight into the low and fills it rather than spiralling.` },
  { id: 'glo-q41', topic: 'global', outcome: 'glo-o8', q: `A cyclone crossing the Coral Sea leaves behind a trail of cooler sea surface water. The best explanation is:`, options: [`Strong winds mix the ocean, causing upwelling of cold deep water, and evaporation removes heat`, `The rain was made of ice`, `The cyclone absorbed sunlight`, `Sea water froze under the eye`], answer: 0, explain: `Wind-driven mixing brings colder water up, and the storm extracts heat from the ocean through evaporation (latent heat).` },
  { id: 'glo-q42', topic: 'global', outcome: 'glo-o8', q: `Which effect of a cyclone is caused mainly by very low air pressure combined with strong onshore winds?`, options: [`Coral bleaching`, `Storm surge`, `Liquefaction`, `Acid rain`], answer: 1, explain: `Low pressure lets the sea surface bulge upward and winds push water onshore, producing a storm surge that floods coasts.` },
  { id: 'glo-q43', topic: 'global', outcome: 'glo-o8', q: `What is the main energy source of a tropical cyclone?`, options: [`Heat from the Earth's core`, `Lightning`, `Latent heat released when water vapour from warm oceans condenses`, `Friction with land`], answer: 2, explain: `Evaporation from the warm ocean stores energy as latent heat; condensation in the clouds releases it, warming air and driving the updraft.` },
  { id: 'glo-q44', topic: 'global', outcome: 'glo-o9', q: `Give the names of TWO gases whose emissions make major contributions to the enhanced greenhouse effect.`, options: [`Oxygen and nitrogen`, `Carbon dioxide and methane`, `Argon and helium`, `Ozone and hydrogen`], answer: 1, explain: `CO₂ and CH₄ (plus N₂O) are the main human-emitted greenhouse gases. O₂, N₂ and Ar do not absorb infrared significantly.`, source: 'Adapted from 2024 Yearly Q30' },
  { id: 'glo-q45', topic: 'global', outcome: 'glo-o9', q: `Which statement best describes how greenhouse gases warm the Earth?`, options: [`They absorb incoming UV and stop it reaching the surface`, `They reflect sunlight back into space`, `They create a hole that lets more sunlight in`, `They absorb infrared radiation emitted by Earth's surface and re-emit some back towards the surface`], answer: 3, explain: `Sunlight (mostly visible) passes through; the surface emits infrared, which greenhouse gases absorb and re-radiate. Reflecting sunlight would cool the Earth.` },
  { id: 'glo-q46', topic: 'global', outcome: 'glo-o9', q: `Clearing a rainforest increases atmospheric CO₂ because:`, options: [`Burning and decay release stored carbon, and fewer trees remain to absorb CO₂ by photosynthesis`, `Trees produce CO₂ during photosynthesis`, `Soil absorbs more oxygen`, `It increases ozone`], answer: 0, explain: `Deforestation has a double effect: it releases carbon and removes a carbon sink.` },
  { id: 'glo-q47', topic: 'global', outcome: 'glo-o9', q: `Which human activity is the main source of methane emissions?`, options: [`Driving petrol cars`, `Using aerosol cans`, `Raising cattle and other livestock`, `Building solar farms`], answer: 2, explain: `Cattle produce methane during digestion (enteric fermentation). Petrol cars mainly emit CO₂; aerosols historically emitted CFCs.` },
  { id: 'glo-q48', topic: 'global', outcome: 'glo-o9', q: `Without any natural greenhouse effect, Earth's average surface temperature would be about:`, options: [`−18 °C`, `0 °C`, `15 °C`, `33 °C`], answer: 0, explain: `The natural greenhouse effect raises the average from about −18 °C to about 15 °C – a warming of ~33 °C that makes liquid water possible.` },
  { id: 'glo-q49', topic: 'global', outcome: 'glo-o10', q: `The Keeling curve shows CO₂ rising from about 315 ppm in 1958 to about 420 ppm today, with a small rise and fall every year. The yearly zig-zag is caused by:`, options: [`Volcanic eruptions every year`, `Errors in the measuring equipment`, `Changes in the Sun's output`, `Seasonal photosynthesis by Northern Hemisphere vegetation`], answer: 3, explain: `Most land plants are in the Northern Hemisphere; they absorb CO₂ in their summer and release it in winter as leaves decay.` },
  { id: 'glo-q50', topic: 'global', outcome: 'glo-o10', q: `Ice core data show that CO₂ concentration and temperature rose and fell together over 800 000 years. A student concludes this PROVES CO₂ causes temperature change. The main weakness of this conclusion is that:`, options: [`Ice cores are too young`, `A correlation alone does not prove causation`, `The data are from Antarctica only, which has no CO₂`, `CO₂ does not absorb infrared radiation`], answer: 1, explain: `Correlation shows the variables are linked, but causation needs a mechanism and other evidence. In fact CO₂ sometimes lagged temperature in past cycles, acting as a feedback.` },
  { id: 'glo-q51', topic: 'global', outcome: 'glo-o10', q: `Which piece of evidence BEST shows that the extra CO₂ in the atmosphere comes from fossil fuels rather than volcanoes or oceans?`, options: [`The atmosphere contains 78% nitrogen`, `Sea levels have risen`, `The carbon isotope signature of atmospheric CO₂ matches that of fossil fuels`, `The ozone hole has formed`], answer: 2, explain: `Fossil carbon has a distinctive isotope ratio (depleted in C-13, no C-14). Its spread through the atmosphere 'fingerprints' the source. Sea-level rise shows warming but not its cause.` },
  { id: 'glo-q52', topic: 'global', outcome: 'glo-o10', q: `Which is a valid limitation of early (pre-1900) global temperature records?`, options: [`Thermometers had not been invented`, `They were collected by satellites`, `They show too much warming`, `Measurements were sparse, especially over oceans and the Southern Hemisphere`], answer: 3, explain: `Early records covered limited areas, so global averages have larger uncertainty. Thermometers existed; satellites only began in 1979.` },
  { id: 'glo-q53', topic: 'global', outcome: 'glo-o10', q: `Global average surface temperature is now approximately how much higher than pre-industrial levels?`, options: [`0.1 °C`, `1.1–1.2 °C`, `5 °C`, `10 °C`], answer: 1, explain: `Long-term averages show about 1.1–1.2 °C of warming since the late 1800s (individual recent years have reached ~1.5 °C).` },
  { id: 'glo-q54', topic: 'global', outcome: 'glo-o11', q: `Which pair of factors is responsible for global sea-level rise?`, options: [`Melting land ice and thermal expansion of sea water`, `Melting floating sea ice and more rainfall`, `Earthquakes and tsunamis`, `Ozone depletion and evaporation`], answer: 0, explain: `Water from land ice adds volume and warmer water expands. Floating sea ice already displaces its own weight, so its melting adds almost nothing to sea level.` },
  { id: 'glo-q55', topic: 'global', outcome: 'glo-o11', q: `Mass coral bleaching on the Great Barrier Reef is mainly caused by:`, options: [`Increased UV from the ozone hole`, `Overfishing of sharks`, `Unusually warm sea temperatures stressing corals so they expel their symbiotic algae`, `Cyclones adding too much fresh water`], answer: 2, explain: `Marine heatwaves cause corals to expel zooxanthellae; without them corals lose colour and food. Ocean acidification adds stress by making skeleton building harder.` },
  { id: 'glo-q56', topic: 'global', outcome: 'glo-o11', q: `Arctic sea ice melts, exposing dark ocean water, which absorbs more sunlight and warms further. This is an example of:`, options: [`A negative feedback`, `The ozone effect`, `Thermohaline circulation`, `A positive feedback`], answer: 3, explain: `The effect amplifies the original change (warming → less ice → more warming), so it is a positive feedback (the ice–albedo feedback).` },
  { id: 'glo-q57', topic: 'global', outcome: 'glo-o11', q: `Why does ocean acidification threaten shellfish and corals?`, options: [`Lower pH makes it harder to build calcium carbonate shells and skeletons`, `Acid water is too cold`, `It increases salinity`, `It removes nitrogen from the water`], answer: 0, explain: `Dissolved CO₂ forms carbonic acid, lowering pH and reducing carbonate ions, so organisms struggle to form CaCO₃.` },
  { id: 'glo-q58', topic: 'global', outcome: 'glo-x1', q: `(Extension) La Niña is associated with which of the following conditions?`, options: [`Warmer east Pacific temperatures and low trade winds`, `Warmer east Pacific temperatures and high trade winds`, `Cooler east Pacific temperatures and low trade winds`, `Cooler east Pacific temperatures and high trade winds`], answer: 3, explain: `In La Niña the trade winds strengthen, pushing warm water west towards Australia and increasing cold upwelling in the eastern Pacific. Option A describes El Niño.`, source: '2024 Yearly Q14' },
  { id: 'glo-q59', topic: 'global', outcome: 'glo-x1', q: `(Extension) Why does sea water near Antarctica sink to form deep ocean currents?`, options: [`It is warm and fresh, so it is less dense`, `Winds push it downward`, `It is cold and extra salty (salt is left behind when sea ice forms), so it is very dense`, `It contains more oxygen`], answer: 2, explain: `Brine rejection during sea-ice formation raises salinity, and low temperature increases density further, so the water sinks.` },
  { id: 'glo-q60', topic: 'global', outcome: 'glo-x2', q: `(Extension) The main purpose of the Montreal Protocol (1987) was to:`, options: [`Limit global warming to 1.5 °C`, `Phase out ozone-depleting substances such as CFCs`, `Reduce ocean plastic`, `Ban nuclear testing`], answer: 1, explain: `The Montreal Protocol controls ozone-depleting substances. The 1.5 °C goal belongs to the Paris Agreement (2015).` }
);

SD.saq.push(
  { id: 'glo-s1', topic: 'global', outcome: 'glo-o3b', marks: 3, source: '2024 Yearly Q21',
    q: `Describe the role of microorganisms in the nitrogen cycle.`,
    criteria: ['Describes nitrogen fixation by bacteria (e.g. Rhizobium in legume nodules) converting N\u2082 to ammonium', 'Describes nitrification by nitrifying bacteria (ammonium → nitrite → nitrate) and/or decomposition (ammonification) by bacteria and fungi', 'Describes denitrification by anaerobic bacteria returning N\u2082 to the atmosphere (at least three distinct roles needed for full marks)'],
    model: `Nitrogen-fixing bacteria, such as <i>Rhizobium</i> in legume root nodules and free-living soil bacteria, convert atmospheric N<sub>2</sub>, which plants cannot use, into ammonium (NH<sub>4</sub><sup>+</sup>). Nitrifying bacteria oxidise ammonium to nitrite (NO<sub>2</sub><sup>−</sup>) and then to nitrate (NO<sub>3</sub><sup>−</sup>), the main form absorbed by plant roots to make proteins and DNA. Decomposers (bacteria and fungi) break down dead organisms and wastes, returning nitrogen to the soil as ammonium (ammonification). Anaerobic denitrifying bacteria in waterlogged soils convert nitrate back into N<sub>2</sub> gas, returning nitrogen to the atmosphere.`,
    keywords: ['nitrogen fixation', 'rhizobium', 'ammonium', 'nitrification', 'nitrate', 'decomposers', 'denitrification', 'anaerobic'] },
  { id: 'glo-s2', topic: 'global', outcome: 'glo-o7', marks: 3, source: '2024 Yearly Q29',
    q: `Outline how a volcanic eruption can have an effect on the Earth\u2019s spheres.`,
    criteria: ['Outlines an effect on one sphere with a mechanism (e.g. SO\u2082/ash in the stratosphere reflecting sunlight)', 'Outlines an effect on a second sphere, linked to the first (e.g. cooling → reduced photosynthesis)', 'Uses a named example or relevant detail (e.g. Mt Pinatubo 1991, ~0.5 °C cooling)'],
    model: `The 1991 eruption of Mount Pinatubo (Philippines) injected ash and about 15–20 million tonnes of sulfur dioxide into the stratosphere (<b>atmosphere</b>). The SO<sub>2</sub> formed sulfate aerosols that reflected sunlight, reducing sunlight at the surface by up to 10% and cooling global temperatures by about 0.5 °C over the next year. The reduced light and temperature lowered photosynthesis and crop growth (<b>biosphere</b>), while SO<sub>2</sub> dissolving in rain formed acid rain that lowered the pH of lakes and rivers (<b>hydrosphere</b>).`,
    keywords: ['sulfur dioxide', 'ash', 'stratosphere', 'reflect sunlight', 'cooling', 'pinatubo', 'acid rain', 'photosynthesis'] },
  { id: 'glo-s3', topic: 'global', outcome: 'glo-o9', marks: 2, source: '2024 Yearly Q30',
    q: `Give the chemical names of TWO gases whose emissions make major contributions to the enhanced greenhouse effect.`,
    criteria: ['Names one correct gas (carbon dioxide, methane or nitrous oxide)', 'Names a second correct gas'],
    model: `Carbon dioxide (CO<sub>2</sub>) and methane (CH<sub>4</sub>). (Nitrous oxide, N<sub>2</sub>O, also accepted.)`,
    keywords: ['carbon dioxide', 'methane', 'nitrous oxide'] },
  { id: 'glo-s4', topic: 'global', outcome: 'glo-o3c', marks: 5,
    q: `Explain how the lithosphere, hydrosphere and biosphere interact in the phosphorus cycle. Refer to a named example in your answer.`,
    criteria: ['Explains weathering of phosphate rock (lithosphere) by rain/water (hydrosphere) releasing phosphate ions', 'Explains uptake of phosphate by plants/algae and transfer through food chains (biosphere), with a use (DNA, ATP, membranes)', 'Explains decomposition returning phosphate to soil/water', 'Explains runoff and sedimentation to the ocean floor and uplift (lithosphere), noting no atmospheric phase / slow cycle', 'Refers to a relevant named example (e.g. fertiliser runoff causing eutrophication, Saharan dust fertilising the Amazon, Nauru guano)'],
    model: `Phosphorus is stored mainly in rocks such as apatite (<b>lithosphere</b>). Rain and weak acids (<b>hydrosphere</b>) weather these rocks, releasing phosphate ions into soil and rivers. Plants absorb phosphate through their roots and algae absorb it from water (<b>biosphere</b>), using it to build DNA, ATP and cell membranes; animals obtain it by eating plants. When organisms excrete waste or die, decomposers return the phosphate to the soil or water. Runoff carries some phosphate into the ocean, where it settles as sediment and over millions of years becomes sedimentary rock, which tectonic uplift eventually exposes to weathering again. As there is no gas phase, the cycle is slow. Humans speed it up: phosphate mined for fertiliser washes off farms into waterways such as the Murray–Darling river system, causing algal blooms (eutrophication) – a lithosphere → hydrosphere → biosphere interaction.`,
    keywords: ['weathering', 'phosphate', 'uptake', 'decomposers', 'sedimentation', 'uplift', 'no gas phase', 'eutrophication'] },
  { id: 'glo-s5', topic: 'global', outcome: 'glo-o3c', marks: 4,
    q: `Explain how the excessive use of phosphate fertilisers on farms can lead to the death of fish in a nearby lake.`,
    criteria: ['Excess phosphate washes into the lake in runoff', 'Phosphate (a limiting nutrient) causes rapid algal growth – algal bloom', 'Algae die and are broken down by aerobic decomposers (bacteria) that use up dissolved oxygen', 'Low oxygen causes fish to suffocate (eutrophication / dead zone)'],
    model: `Rain washes excess phosphate fertiliser off the farm into the lake. Phosphorus is normally the limiting nutrient in fresh water, so the extra phosphate causes rapid growth of algae (an algal bloom), which also blocks light from submerged plants. When the algae and plants die, aerobic bacteria decompose the large amount of dead matter and use up the dissolved oxygen in the water. The oxygen levels become so low that fish suffocate and die – a process called eutrophication.`,
    keywords: ['runoff', 'limiting nutrient', 'algal bloom', 'decomposers', 'dissolved oxygen', 'eutrophication', 'suffocate'] },
  { id: 'glo-s6', topic: 'global', outcome: 'glo-o4', marks: 4,
    q: `Describe the temperature changes with altitude in the troposphere, stratosphere, mesosphere and thermosphere, and give ONE feature of each layer.`,
    criteria: ['Troposphere: temperature decreases with height; contains weather/most of the air', 'Stratosphere: temperature increases with height because ozone absorbs UV; contains the ozone layer', 'Mesosphere: temperature decreases (coldest layer, ~−90 °C); meteors burn up', 'Thermosphere: temperature increases greatly; auroras/ISS orbit'],
    model: `<b>Troposphere</b> (0–12 km): temperature decreases with altitude (~6.5 °C per km) because air is heated from the ground; all weather occurs here. <b>Stratosphere</b> (12–50 km): temperature increases with altitude because ozone absorbs UV radiation; it contains the ozone layer. <b>Mesosphere</b> (50–85 km): temperature decreases to about −90 °C, making it the coldest layer; meteors burn up here. <b>Thermosphere</b> (85–600 km): temperature rises sharply (over 1000 °C) as the thin gas absorbs high-energy radiation; auroras occur and the ISS orbits here.`,
    keywords: ['troposphere', 'stratosphere', 'mesosphere', 'thermosphere', 'ozone', 'decreases', 'increases', 'meteors'] },
  { id: 'glo-s7', topic: 'global', outcome: 'glo-o5', marks: 4,
    q: `Explain the importance of the ozone layer and how the use of CFCs has affected it.`,
    criteria: ['Ozone layer in the stratosphere absorbs most harmful UV (UV-B/UV-C)', 'Without it, UV causes DNA damage/mutations, skin cancer, cataracts, harm to plants/plankton', 'CFCs rise to the stratosphere where UV breaks them down, releasing chlorine atoms', 'Chlorine catalytically destroys ozone in a chain reaction (one Cl destroys many O\u2083) → thinning / Antarctic ozone hole'],
    model: `The ozone layer, found in the stratosphere at about 15–35 km, absorbs most of the Sun\u2019s harmful UV-B and UV-C radiation. This protects living things, because UV damages DNA, causing mutations, skin cancer and cataracts, and reduces the growth of crops and phytoplankton. CFCs, once used in refrigerators and aerosol sprays, are so stable that they drift up into the stratosphere, where UV breaks them apart and releases chlorine atoms. Each chlorine atom acts as a catalyst, breaking down ozone into oxygen (Cl + O<sub>3</sub> → ClO + O<sub>2</sub>) and being regenerated, so one atom can destroy about 100 000 ozone molecules. This produced severe thinning of the ozone layer, especially the ozone hole over Antarctica each spring.`,
    keywords: ['stratosphere', 'ultraviolet', 'dna', 'skin cancer', 'cfcs', 'chlorine', 'chain reaction', 'ozone hole'] },
  { id: 'glo-s8', topic: 'global', outcome: 'glo-o6', marks: 4,
    q: `Describe how an undersea earthquake can affect THREE of the Earth\u2019s spheres. Refer to a specific example.`,
    criteria: ['Lithosphere effect described (e.g. sea floor uplift / fault rupture / landslides)', 'Hydrosphere effect linked (e.g. displacement of water → tsunami)', 'Biosphere or atmosphere effect linked (e.g. deaths, destruction of mangroves/reefs, salinised farmland; dust/smoke)', 'Named example with relevant detail (e.g. 2004 Boxing Day, M9.1, ~230 000 deaths)'],
    model: `In the 2004 Boxing Day earthquake (magnitude ~9.1) off Sumatra, the sea floor along a fault was suddenly pushed up several metres (<b>lithosphere</b>). This displaced an enormous column of water, creating a tsunami (<b>hydrosphere</b>) with waves up to 30 m high that struck coastlines across the Indian Ocean. The waves killed about 230 000 people, destroyed coral reefs and mangrove forests, and flooded farmland with salt water so crops could not grow (<b>biosphere</b>).`,
    keywords: ['sea floor', 'fault', 'displaced', 'tsunami', 'boxing day', 'mangroves', 'salt water', 'deaths'] },
  { id: 'glo-s9', topic: 'global', outcome: 'glo-o8', marks: 5,
    q: `Outline the conditions needed for a tropical cyclone to form, and describe how a cyclone affects TWO of the Earth\u2019s spheres.`,
    criteria: ['Sea surface temperature ≥ 26.5 °C (warm, moist air as energy source)', 'At least ~500 km from the equator so the Coriolis effect produces rotation', 'Low vertical wind shear and/or humid mid-troposphere', 'Effect on first sphere described (e.g. hydrosphere – storm surge, flooding, upwelling)', 'Effect on second sphere described (e.g. lithosphere – coastal erosion/landslides; biosphere – habitat and reef destruction), ideally with example (e.g. Yasi 2011)'],
    model: `Tropical cyclones form over oceans with a surface temperature of at least 26.5 °C, which supplies warm, moist air and latent heat energy. They must form more than about 500 km from the equator so that the Coriolis effect is strong enough to make the inflowing air spiral, and they need low vertical wind shear and a humid mid-troposphere so the storm column is not torn apart or dried out. In the <b>hydrosphere</b>, very low pressure and strong onshore winds cause a storm surge that floods coastal land with sea water, and torrential rain causes river flooding. In the <b>biosphere</b>, for example during Cyclone Yasi (Queensland, 2011), winds flattened rainforest and banana and sugar-cane crops, waves broke up coral on the Great Barrier Reef, and salt water from the surge killed coastal vegetation.`,
    keywords: ['26.5', 'coriolis', 'equator', 'wind shear', 'latent heat', 'storm surge', 'flooding', 'erosion'] },
  { id: 'glo-s10', topic: 'global', outcome: 'glo-o9', marks: 4,
    q: `Distinguish between the natural greenhouse effect and the enhanced greenhouse effect, and outline TWO human activities that cause the enhanced greenhouse effect.`,
    criteria: ['Natural: greenhouse gases absorb and re-emit infrared from Earth\u2019s surface, keeping Earth warm enough for life (~15 °C)', 'Enhanced: human activities increase greenhouse gas concentrations so more heat is trapped → global warming', 'Activity 1 with gas named (e.g. burning fossil fuels → CO\u2082)', 'Activity 2 with gas named (e.g. deforestation → CO\u2082 / livestock → CH\u2084 / fertilisers → N\u2082O)'],
    model: `In the natural greenhouse effect, sunlight passes through the atmosphere and warms the surface, which emits infrared radiation; natural greenhouse gases such as water vapour and CO<sub>2</sub> absorb this infrared and re-emit some back to the surface, keeping Earth\u2019s average temperature about 15 °C rather than −18 °C. The enhanced greenhouse effect is the additional warming caused when human activities raise greenhouse gas concentrations, so more infrared is trapped and global temperatures rise. Burning fossil fuels for electricity and transport releases carbon dioxide stored for millions of years, and raising livestock such as cattle releases methane during digestion.`,
    keywords: ['infrared', 'absorb', 'natural', 'human activities', 'fossil fuels', 'carbon dioxide', 'methane', 'deforestation'] },
  { id: 'glo-s11', topic: 'global', outcome: 'glo-o10', marks: 6,
    q: `Evaluate the scientific evidence that human activities are causing an enhanced greenhouse effect.`,
    criteria: ['Describes CO\u2082 evidence with data (e.g. Keeling curve ~315 → 420+ ppm; ice cores – highest in 800 000 years)', 'Describes temperature evidence with data (≈1.1–1.2 °C warming since pre-industrial)', 'Describes at least one further line of evidence (sea-level rise ~20 cm, ice loss, ocean acidification, isotope fingerprint)', 'Identifies strengths (independent, consistent lines; direct measurements; known mechanism)', 'Identifies limitations (correlation ≠ causation; sparse early records/proxies; natural variability)', 'Makes a clear, justified judgement'],
    model: `Direct measurements at Mauna Loa (the Keeling curve) show atmospheric CO<sub>2</sub> rising from about 315 ppm in 1958 to over 420 ppm today, and ice cores show this is higher than at any time in the last 800 000 years, when levels stayed between about 180 and 300 ppm. Over the same period global average temperature has risen about 1.1–1.2 °C, sea level has risen about 20 cm, Greenland and Antarctica are losing hundreds of billions of tonnes of ice a year, and ocean pH has fallen from 8.2 to 8.1.<br><b>Strengths:</b> these are independent lines of evidence collected by different methods and research groups that all agree; many are direct, calibrated measurements; the isotope signature of the extra CO<sub>2</sub> matches fossil fuels; and there is a well-understood mechanism – CO<sub>2</sub> absorbs infrared radiation – which explains the link.<br><b>Limitations:</b> a correlation between CO<sub>2</sub> and temperature alone does not prove causation; early temperature records were sparse and ice-core temperatures are proxies with uncertainty; and natural variability such as El Niño and volcanic eruptions causes year-to-year fluctuations that can hide trends.<br><b>Judgement:</b> Overall, because multiple independent, consistent data sets are supported by a clear physical mechanism and fossil-fuel fingerprint, the evidence is highly valid and reliable and strongly supports the conclusion that human activities are enhancing the greenhouse effect.`,
    keywords: ['keeling curve', 'ppm', 'ice cores', 'temperature', 'correlation', 'causation', 'mechanism', 'natural variability', 'judgement'] },
  { id: 'glo-s12', topic: 'global', outcome: 'glo-o11', marks: 4,
    q: `Describe TWO effects of global warming on the planet, linking each to its cause.`,
    criteria: ['Effect 1 identified (e.g. sea-level rise)', 'Cause of effect 1 explained (e.g. melting land ice + thermal expansion) with a consequence', 'Effect 2 identified (e.g. coral bleaching / extreme weather / acidification)', 'Cause of effect 2 explained (e.g. marine heatwaves → corals expel zooxanthellae) with a consequence'],
    model: `<b>Sea-level rise:</b> higher temperatures melt glaciers and ice sheets in Greenland and Antarctica, adding water to the oceans, and warmer sea water expands (thermal expansion). This increases coastal flooding and erosion and threatens low-lying Pacific islands. <b>Coral bleaching:</b> marine heatwaves stress corals so they expel the symbiotic algae (zooxanthellae) that supply their food and colour; prolonged bleaching kills the coral, as seen in repeated mass bleaching events on the Great Barrier Reef since 2016, reducing habitat for reef species.`,
    keywords: ['sea level', 'thermal expansion', 'melting', 'coral bleaching', 'zooxanthellae', 'heatwaves', 'flooding'] },
  { id: 'glo-s13', topic: 'global', outcome: 'glo-o2', marks: 3,
    q: `Discuss how computer modelling has improved the predictability of Earth phenomena, and suggest ONE reason why simulations are useful in Earth sciences.`,
    criteria: ['Describes how models work/improved (physical equations on a grid, more computing power and satellite data, hindcasting)', 'Gives a specific improved prediction (e.g. cyclone tracks, weather forecasts, climate projections, tsunami arrival)', 'Suggests a reason (processes too large/slow/dangerous; can change one variable; early warnings) and/or notes a limitation'],
    model: `Computer models apply physical laws to a 3D grid of the atmosphere and oceans using data from satellites, buoys and weather stations. As computing power and satellite data have increased, grid cells have become smaller, so forecasts of weather and cyclone tracks are now much more accurate days in advance, allowing earlier evacuations, and climate models tested against past climate (hindcasting) can project future warming under different emission scenarios. Simulations are useful because Earth processes such as climate change are too large and slow, and eruptions too dangerous, to investigate experimentally – although projections still carry uncertainty because some processes like clouds must be simplified.`,
    keywords: ['grid', 'equations', 'satellite', 'hindcasting', 'prediction', 'too large', 'dangerous', 'uncertainty'] },
  { id: 'glo-s14', topic: 'global', outcome: 'glo-x1', marks: 2, source: '2024 Yearly Q22',
    q: `(Extension) Outline how temperature and salinity drive the formation of deep ocean currents.`,
    criteria: ['Relates low temperature and high salinity to high density, which sinks and drives the current (water drawn in to replace it)', 'Outlines a cause of high salinity at the poles (brine rejection as sea ice forms, or evaporation by cold winds)'],
    model: `Cold water and salty water are both denser than warm, fresh water. Near the poles the water is very cold, and when sea ice forms the salt is left behind in the surrounding water (brine rejection), making it saltier as well. This very dense water sinks to the ocean floor and spreads towards the equator, while surface water flows in to replace it, driving the deep ocean (thermohaline) circulation.`,
    keywords: ['dense', 'cold', 'salinity', 'sinks', 'brine rejection', 'sea ice', 'thermohaline'] }
);

SD.seq.push(
  { id: 'glo-seq1', topic: 'global', title: 'Order the layers of the atmosphere from the ground upwards', items: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere', 'Exosphere'] },
  { id: 'glo-seq2', topic: 'global', title: 'Order the steps of the nitrogen cycle, starting with atmospheric N\u2082', items: ['Nitrogen fixation: N\u2082 → NH\u2084\u207a (Rhizobium, lightning, Haber)', 'Nitrification step 1: NH\u2084\u207a → NO\u2082\u207b', 'Nitrification step 2: NO\u2082\u207b → NO\u2083\u207b', 'Assimilation: plants absorb nitrate to make proteins', 'Ammonification: decomposers return NH\u2084\u207a from dead organisms', 'Denitrification: anaerobic bacteria convert NO\u2083\u207b → N\u2082'] },
  { id: 'glo-seq3', topic: 'global', title: 'Order the stages of tropical cyclone formation', items: ['Ocean surface heated to at least 26.5 °C', 'Warm, moist air rises, creating low pressure at the surface', 'Water vapour condenses into cumulonimbus clouds, releasing latent heat', 'Surrounding air rushes in and is deflected by the Coriolis effect, starting rotation', 'Positive feedback lowers pressure further and strengthens winds above 63 km/h', 'Cyclone weakens after crossing land or cold water'] },
  { id: 'glo-seq4', topic: 'global', title: 'Order the phosphorus cycle, starting with phosphate rock', items: ['Weathering of phosphate rock releases phosphate ions', 'Plants absorb phosphate from soil through their roots', 'Animals eat plants and obtain phosphorus', 'Decomposers return phosphate to the soil from wastes and dead organisms', 'Runoff carries phosphate to the ocean where it forms sediment', 'Geological uplift exposes new phosphate rock'] },
  { id: 'glo-seq5', topic: 'global', title: 'Order the stages of eutrophication', items: ['Fertiliser runoff adds excess phosphate and nitrate to a lake', 'Algae grow rapidly, forming an algal bloom', 'Algae block light and submerged plants die', 'Aerobic decomposers break down dead algae and plants', 'Dissolved oxygen is used up', 'Fish and other animals suffocate (dead zone)'] }
);
