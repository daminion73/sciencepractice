// Using Chemistry (Year 10, JRAHS 2026) – outcomes 1–11 plus prerequisite skills
SD.topics.push({
  id: 'chemistry',
  name: 'Using Chemistry',
  short: 'Chemistry',
  color: '#f59e0b',
  examined: true,
  scope: 'All outcomes 1–11 (energy in reactions, reaction rates, catalysts & enzymes, activity series, redox, galvanic cells, corrosion) + prerequisite equation skills',
  notes: [
    { id: 'chem-pre', title: 'Prerequisite chemistry skills · formulae, balancing, acid patterns, gas tests', html: `
<p>Almost every Using Chemistry question expects a <b>balanced equation with states</b>. These skills come from the earlier Chemical Reactions topic and are assumed knowledge.</p>
<h4>Valencies (charges) of common ions</h4>
<table class="t">
<tr><th>+1</th><th>+2</th><th>+3</th><th>−1</th><th>−2</th><th>−3</th></tr>
<tr><td>H<sup>+</sup>, Li<sup>+</sup>, Na<sup>+</sup>, K<sup>+</sup>, Ag<sup>+</sup>, NH<sub>4</sub><sup>+</sup></td><td>Mg<sup>2+</sup>, Ca<sup>2+</sup>, Ba<sup>2+</sup>, Zn<sup>2+</sup>, Cu<sup>2+</sup>, Fe<sup>2+</sup>, Ni<sup>2+</sup>, Pb<sup>2+</sup>, Sn<sup>2+</sup></td><td>Al<sup>3+</sup>, Fe<sup>3+</sup></td><td>F<sup>−</sup>, Cl<sup>−</sup>, Br<sup>−</sup>, I<sup>−</sup>, OH<sup>−</sup>, NO<sub>3</sub><sup>−</sup>, HCO<sub>3</sub><sup>−</sup>, CH<sub>3</sub>COO<sup>−</sup></td><td>O<sup>2−</sup>, S<sup>2−</sup>, SO<sub>4</sub><sup>2−</sup>, CO<sub>3</sub><sup>2−</sup></td><td>N<sup>3−</sup>, PO<sub>4</sub><sup>3−</sup></td></tr>
</table>
<h4>Polyatomic ions you must know</h4>
<table class="t">
<tr><th>Name</th><th>Formula</th><th>Name</th><th>Formula</th></tr>
<tr><td>sulfate</td><td>SO<sub>4</sub><sup>2−</sup></td><td>phosphate</td><td>PO<sub>4</sub><sup>3−</sup></td></tr>
<tr><td>carbonate</td><td>CO<sub>3</sub><sup>2−</sup></td><td>hydrogen carbonate (bicarbonate)</td><td>HCO<sub>3</sub><sup>−</sup></td></tr>
<tr><td>nitrate</td><td>NO<sub>3</sub><sup>−</sup></td><td>acetate (ethanoate)</td><td>CH<sub>3</sub>COO<sup>−</sup></td></tr>
<tr><td>hydroxide</td><td>OH<sup>−</sup></td><td>ammonium</td><td>NH<sub>4</sub><sup>+</sup></td></tr>
</table>
<h4>Writing ionic formulae (swap-and-drop / criss-cross)</h4>
<ol><li>Write the cation then the anion with their charges, e.g. Al<sup>3+</sup> and SO<sub>4</sub><sup>2−</sup>.</li>
<li>Choose numbers so total charge = 0 (cross the charge numbers): Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>.</li>
<li>Simplify if possible (Mg<sup>2+</sup> + O<sup>2−</sup> → MgO, not Mg<sub>2</sub>O<sub>2</sub>). Use brackets around a polyatomic ion when more than one is needed: Ca(OH)<sub>2</sub>, (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>.</li></ol>
<p>Examples: aluminium bromide AlBr<sub>3</sub>; potassium sulfate K<sub>2</sub>SO<sub>4</sub>; nickel sulfate NiSO<sub>4</sub>; copper(II) nitrate Cu(NO<sub>3</sub>)<sub>2</sub>; iron(III) oxide Fe<sub>2</sub>O<sub>3</sub>; silver nitrate AgNO<sub>3</sub>; calcium carbonate CaCO<sub>3</sub>.</p>
<div class="key"><b>Diatomic elements</b> (exist as molecules): H<sub>2</sub>, N<sub>2</sub>, O<sub>2</sub>, F<sub>2</sub>, Cl<sub>2</sub>, Br<sub>2</sub>, I<sub>2</sub>. Metals are written as single atoms: Mg(s), Cu(s).</div>
<h4>Balancing equations</h4>
<ol><li>Write correct formulae first – <b>never change subscripts</b> to balance, only coefficients.</li>
<li>Balance metals, then non-metals, then polyatomic ions as whole units (if unchanged), then H, then O.</li>
<li>Check atoms on both sides; use the lowest whole-number ratio.</li>
<li>Add states: (s) solid, (l) liquid, (g) gas, (aq) dissolved in water.</li></ol>
<div class="model"><b>Model (2022 Yearly, 2 marks):</b> aluminium bromide + potassium sulfate (no precipitate):<br>2AlBr<sub>3</sub>(aq) + 3K<sub>2</sub>SO<sub>4</sub>(aq) → 6KBr(aq) + Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>(aq)<br><b>2024 Yearly:</b> Mg(s) + NiSO<sub>4</sub>(aq) → MgSO<sub>4</sub>(aq) + Ni(s)</div>
<div class="tip">Markers check: correct formulae, balanced, correct states, and conventions (reactants left, arrow, coefficients full size, subscripts small). Missing states usually costs a mark.</div>
<h4>Acid reaction patterns</h4>
<table class="t">
<tr><th>Reaction</th><th>General pattern</th><th>Example</th></tr>
<tr><td>Acid + metal</td><td>salt + hydrogen gas</td><td>Zn(s) + 2HCl(aq) → ZnCl<sub>2</sub>(aq) + H<sub>2</sub>(g)</td></tr>
<tr><td>Acid + carbonate</td><td>salt + water + carbon dioxide</td><td>CaCO<sub>3</sub>(s) + 2HCl(aq) → CaCl<sub>2</sub>(aq) + H<sub>2</sub>O(l) + CO<sub>2</sub>(g)</td></tr>
<tr><td>Acid + base (hydroxide/oxide) – neutralisation</td><td>salt + water</td><td>H<sub>2</sub>SO<sub>4</sub>(aq) + 2NaOH(aq) → Na<sub>2</sub>SO<sub>4</sub>(aq) + 2H<sub>2</sub>O(l)</td></tr>
<tr><td>Acid + hydrogen carbonate</td><td>salt + water + carbon dioxide</td><td>NaHCO<sub>3</sub>(s) + HCl(aq) → NaCl(aq) + H<sub>2</sub>O(l) + CO<sub>2</sub>(g)</td></tr>
</table>
<p>Hydrochloric acid → chloride salts; sulfuric acid → sulfates; nitric acid → nitrates; acetic (ethanoic) acid → acetates.</p>
<h4>Gas tests</h4>
<table class="t">
<tr><th>Gas</th><th>Test</th><th>Positive result</th></tr>
<tr><td>Hydrogen H<sub>2</sub></td><td>Lit splint held at mouth of test tube</td><td>‘Pop’ sound</td></tr>
<tr><td>Oxygen O<sub>2</sub></td><td>Glowing splint inserted</td><td>Splint relights</td></tr>
<tr><td>Carbon dioxide CO<sub>2</sub></td><td>Bubble through limewater (Ca(OH)<sub>2</sub>(aq))</td><td>Limewater turns milky/cloudy (CaCO<sub>3</sub> precipitate)</td></tr>
</table>` },

    { id: 'chem-o1', title: 'Outcome 1 · Chemical reactions involve energy transfer', html: `
<div class="key">Every chemical reaction involves <b>breaking bonds</b> in the reactants (absorbs energy) and <b>forming new bonds</b> in the products (releases energy). Because these two amounts are almost never equal, every reaction has a net <b>energy transfer</b> between the chemicals (the <i>system</i>) and the <i>surroundings</i>.</div>
<ul>
<li>Energy is conserved (Law of Conservation of Energy) – it is transferred/transformed, not created or destroyed. Chemical potential energy stored in bonds is converted to heat, light, sound or electrical energy (or vice versa).</li>
<li>Evidence of energy transfer: temperature change of the surroundings, light (combustion, glow sticks), sound (explosions), electricity (batteries/galvanic cells).</li>
<li><b>Temperature</b> = measure of the average kinetic energy of particles. <b>Heat</b> = energy transferred because of a temperature difference.</li>
<li><b>Enthalpy (H)</b> ≈ the chemical (heat) energy stored in a substance. We cannot measure H directly, only the change: <b>ΔH = H(products) − H(reactants)</b>.</li>
</ul>
<table class="t">
<tr><th>Energy form released/absorbed</th><th>Example</th></tr>
<tr><td>Heat</td><td>Combustion of methane; neutralisation; hand warmers (iron oxidising)</td></tr>
<tr><td>Light</td><td>Burning magnesium; glow sticks (chemiluminescence)</td></tr>
<tr><td>Electrical</td><td>Galvanic cells/batteries (spontaneous redox)</td></tr>
<tr><td>Absorbed heat</td><td>Instant cold packs (ammonium nitrate dissolving), thermal decomposition of CaCO<sub>3</sub></td></tr>
<tr><td>Absorbed light</td><td>Photosynthesis; decomposition of silver halides in photography</td></tr>
<tr><td>Absorbed electrical</td><td>Electrolysis of water (electrolytic cell)</td></tr>
</table>` },

    { id: 'chem-o2', title: 'Outcome 2 · Exothermic vs endothermic (bond breaking & making)', html: `
<div class="key"><b>Bond breaking ABSORBS energy</b> (endothermic step). <b>Bond making RELEASES energy</b> (exothermic step).<br>
<b>Exothermic:</b> energy released forming new bonds &gt; energy absorbed breaking old bonds → net energy released to surroundings (surroundings get hotter). Products have less enthalpy than reactants, <b>ΔH negative</b>.<br>
<b>Endothermic:</b> energy absorbed breaking bonds &gt; energy released forming bonds → net energy absorbed FROM the surroundings (surroundings get colder). Products have more enthalpy, <b>ΔH positive</b>.</div>
<div class="warn">Correction: exothermic is NOT ‘the reaction makes more bonds than it breaks’. It is about the ENERGY of the bonds: the bonds formed are stronger (release more energy) than the bonds broken. Also, endothermic reactions absorb energy <i>from the surroundings</i> – that is why the beaker feels cold.</div>
<table class="t">
<tr><th></th><th>Exothermic</th><th>Endothermic</th></tr>
<tr><td>Net energy flow</td><td>System → surroundings</td><td>Surroundings → system</td></tr>
<tr><td>Bond energies</td><td>Energy released (making) &gt; energy absorbed (breaking)</td><td>Energy absorbed (breaking) &gt; energy released (making)</td></tr>
<tr><td>ΔH</td><td>Negative (ΔH &lt; 0)</td><td>Positive (ΔH &gt; 0)</td></tr>
<tr><td>Temperature of surroundings</td><td>Rises</td><td>Falls</td></tr>
<tr><td>Energy profile</td><td>Products lower than reactants</td><td>Products higher than reactants</td></tr>
<tr><td>Energy term in equation</td><td>Written on the product side</td><td>Written on the reactant side</td></tr>
<tr><td>Examples</td><td>Combustion, respiration, neutralisation, metal + acid, rusting, displacement reactions, hand warmers</td><td>Photosynthesis, thermal decomposition (CaCO<sub>3</sub>, CuCO<sub>3</sub>), electrolysis, cold packs, cooking an egg</td></tr>
</table>
<div class="tip">Physical changes can also be exo/endo (melting ice and evaporation are endothermic; condensation and freezing are exothermic) but they are not chemical reactions.</div>
<div class="model"><b>Model answer (3 marks):</b> Explain why combustion of methane is exothermic. – During the reaction energy must be absorbed to break the C–H bonds in methane and the O=O bonds in oxygen. Energy is released when the new C=O bonds in CO<sub>2</sub> and O–H bonds in H<sub>2</sub>O are formed. More energy is released forming the new bonds than is absorbed breaking the old bonds, so there is a net release of energy (heat and light) to the surroundings and ΔH is negative (−890 kJ mol<sup>−1</sup>).</div>` },

    { id: 'chem-o3', title: 'Outcome 3 · Energy profile diagrams & equations with energy terms', html: `
<p>An energy profile diagram plots <b>energy (enthalpy)</b> on the y-axis against <b>reaction progress</b> on the x-axis.</p>
<svg viewBox="0 0 640 230" width="100%" style="max-height:300px" font-size="12" fill="currentColor">
<defs><marker id="chemAh1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<g stroke="currentColor" fill="none" stroke-width="1.5">
<path d="M30 15V190H300" marker-end="url(#chemAh1)"/>
<path d="M40 120H95C125 120 130 40 155 40C180 40 185 165 215 165H290" stroke-width="2.5"/>
<path d="M95 120C120 120 128 80 155 80C182 80 185 165 215 165" stroke-dasharray="5 4"/>
<path d="M60 40H150" stroke-dasharray="2 3" stroke-width="1"/>
<path d="M60 118V43" marker-end="url(#chemAh1)" marker-start="url(#chemAh1)"/>
<path d="M95 120H262" stroke-dasharray="2 3" stroke-width="1"/>
<path d="M255 122V162" marker-end="url(#chemAh1)"/>
</g>
<text x="5" y="110" transform="rotate(-90 12 110)">Energy</text>
<text x="110" y="208">Reaction progress</text>
<text x="40" y="113">Reactants</text>
<text x="222" y="182">Products</text>
<text x="64" y="85">E<tspan font-size="9" dy="3">a</tspan></text>
<text x="135" y="32">Transition state</text>
<text x="160" y="95" font-size="10">catalysed</text>
<text x="260" y="146">ΔH &lt; 0</text>
<text x="100" y="225" font-weight="bold">EXOTHERMIC</text>
<g transform="translate(330 0)">
<g stroke="currentColor" fill="none" stroke-width="1.5">
<path d="M30 15V190H300" marker-end="url(#chemAh1)"/>
<path d="M40 165H95C125 165 130 35 155 35C180 35 185 110 215 110H290" stroke-width="2.5"/>
<path d="M95 165C120 165 128 75 155 75C182 75 185 110 215 110" stroke-dasharray="5 4"/>
<path d="M60 35H150" stroke-dasharray="2 3" stroke-width="1"/>
<path d="M60 162V38" marker-end="url(#chemAh1)" marker-start="url(#chemAh1)"/>
<path d="M95 165H262" stroke-dasharray="2 3" stroke-width="1"/>
<path d="M255 163V113" marker-end="url(#chemAh1)"/>
</g>
<text x="5" y="110" transform="rotate(-90 12 110)">Energy</text>
<text x="110" y="208">Reaction progress</text>
<text x="40" y="182">Reactants</text>
<text x="222" y="103">Products</text>
<text x="64" y="100">E<tspan font-size="9" dy="3">a</tspan></text>
<text x="135" y="27">Transition state</text>
<text x="160" y="90" font-size="10">catalysed</text>
<text x="260" y="145">ΔH &gt; 0</text>
<text x="100" y="225" font-weight="bold">ENDOTHERMIC</text>
</g>
</svg>
<h4>Features</h4>
<ul>
<li><b>Activation energy (E<sub>a</sub>)</b>: the minimum energy colliding particles need to react = energy barrier, measured from the <b>reactants</b> level up to the <b>peak</b>. Higher E<sub>a</sub> → slower reaction.</li>
<li><b>Transition state (activated complex)</b>: the peak – an unstable, highest-energy arrangement where old bonds are partly broken and new bonds partly formed.</li>
<li><b>ΔH</b>: measured from the <b>reactants</b> level to the <b>products</b> level. Arrow pointing down = negative (exothermic); up = positive (endothermic).</li>
<li><b>Catalysed pathway</b>: a lower peak (dashed) – lower E<sub>a</sub>, but reactant and product levels are unchanged, so <b>ΔH is unchanged</b>.</li>
<li>Endothermic reactions always have E<sub>a</sub> &gt; ΔH. For the reverse reaction, E<sub>a</sub>(reverse) = E<sub>a</sub>(forward) − ΔH.</li>
</ul>
<div class="warn">Common errors when labelling: drawing E<sub>a</sub> from the axis (zero) instead of from the reactants; drawing ΔH from the peak; drawing the catalysed curve with different reactant/product levels.</div>
<h4>Writing equations with states and energy term</h4>
<p>Two acceptable ways:</p>
<ul>
<li>Energy term in equation: CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l) + 890 kJ &nbsp;(exothermic: energy is a ‘product’)</li>
<li>ΔH notation: CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l) &nbsp; ΔH = −890 kJ mol<sup>−1</sup></li>
<li>Endothermic: CaCO<sub>3</sub>(s) + 178 kJ → CaO(s) + CO<sub>2</sub>(g) &nbsp; or ΔH = +178 kJ mol<sup>−1</sup></li>
<li>Photosynthesis: 6CO<sub>2</sub>(g) + 6H<sub>2</sub>O(l) + light energy → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(aq) + 6O<sub>2</sub>(g)</li>
<li>Respiration: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(aq) + 6O<sub>2</sub>(g) → 6CO<sub>2</sub>(g) + 6H<sub>2</sub>O(l) + energy (ATP + heat)</li>
</ul>
<div class="tip">Never write ‘+ 890 kJ’ on the product side AND ΔH = −890 together with a sign clash. If energy is on the product side, ΔH is negative.</div>
<div class="model"><b>Model (2024 Yearly Q27, 3 marks):</b> (a) Products higher than reactants → <b>endothermic</b>. (b) E<sub>a</sub> arrow from reactant level to top of the peak; catalysed profile = a lower hump starting at the same reactants level and finishing at the same products level.</div>` },

    { id: 'chem-o4', title: 'Outcome 4 · Particle theory & collision theory', html: `
<h4>Particle theory of matter</h4>
<ul><li>All matter is made of tiny particles (atoms, ions, molecules) that are constantly moving.</li>
<li>Particles have kinetic energy; higher temperature → faster average movement.</li>
<li>There are spaces between particles; particles attract each other.</li></ul>
<h4>Collision theory</h4>
<div class="key">For a reaction to occur, reactant particles must:
<ol><li><b>collide</b> with each other,</li>
<li>with <b>enough energy</b> – at least the <b>activation energy</b> – to break existing bonds,</li>
<li>with the <b>correct orientation</b>.</li></ol>
A collision meeting all three is a <b>successful (effective) collision</b>. Reaction rate depends on the <b>frequency of successful collisions</b> (number per second).</div>
<p>Most collisions are NOT successful – particles just bounce off. Any factor that increases the number of collisions per second, or the fraction of collisions with energy ≥ E<sub>a</sub>, increases the rate.</p>
<div class="tip">In every ‘explain using collision theory’ answer, link: <b>factor → particle-level change → frequency of (successful) collisions → rate</b>. Always state the direction of the rate change.</div>` },

    { id: 'chem-o5', title: 'Outcome 5 · Defining & measuring reaction rate', html: `
<div class="key"><b>Reaction rate</b> = the change in concentration (or amount) of a reactant or product per unit time.<br>
rate = Δ(quantity) ÷ Δt — e.g. rate of gas production = volume of gas ÷ time.</div>
<p>Units depend on what is measured: <b>mol L<sup>−1</sup> s<sup>−1</sup></b> (concentration), <b>mL s<sup>−1</sup></b> or cm<sup>3</sup> min<sup>−1</sup> (gas volume), <b>g s<sup>−1</sup></b> (mass lost), or <b>s<sup>−1</sup></b> (1/time for a fixed change).</p>
<div class="warn">The student notes mention rate being ‘per hertz’ – wrong. Rate is per unit TIME (s<sup>−1</sup>, min<sup>−1</sup>).</div>
<h4>Ways to measure rate</h4>
<table class="t">
<tr><th>Method</th><th>How</th><th>Example reaction</th></tr>
<tr><td>Volume of gas produced</td><td>Gas syringe or inverted measuring cylinder over water; record volume every 10–30 s</td><td>Mg + HCl → H<sub>2</sub>; CaCO<sub>3</sub> + HCl → CO<sub>2</sub>; H<sub>2</sub>O<sub>2</sub> + catalase → O<sub>2</sub></td></tr>
<tr><td>Mass loss</td><td>Flask on electronic balance with cotton wool plug (lets gas out, keeps acid spray in); record mass over time</td><td>CaCO<sub>3</sub>(s) + 2HCl(aq) → CaCl<sub>2</sub>(aq) + H<sub>2</sub>O(l) + CO<sub>2</sub>(g)</td></tr>
<tr><td>Colour change / turbidity (time for a fixed change)</td><td>‘Disappearing cross’: time until a cross under the flask is hidden by precipitate; rate ∝ 1/time</td><td>Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> + 2HCl → 2NaCl + SO<sub>2</sub> + S(s) + H<sub>2</sub>O</td></tr>
<tr><td>Time for solid to disappear</td><td>Stopwatch until metal ribbon fully dissolves</td><td>Mg ribbon in HCl</td></tr>
<tr><td>Other</td><td>pH change, temperature change, conductivity, colorimeter</td><td>Neutralisation</td></tr>
</table>
<h4>Interpreting rate graphs</h4>
<ul><li>Volume of product vs time: the <b>gradient</b> = rate. Steepest at the start (highest concentration of reactants), gradually flattens, becomes horizontal when a reactant is used up (reaction complete).</li>
<li>A faster reaction gives a steeper initial curve; if the same amounts of limiting reactant are used, it reaches the <b>same final volume</b> sooner.</li>
<li>Doubling the amount of the limiting reactant doubles the final volume of gas.</li></ul>
<div class="tip">Rate decreases over time because reactant particles are used up → concentration falls → fewer collisions per second.</div>` },

    { id: 'chem-o6', title: 'Outcome 6 · Factors affecting reaction rate (collision theory)', html: `
<table class="t">
<tr><th>Factor (increase)</th><th>Effect on rate</th><th>Collision theory explanation</th></tr>
<tr><td><b>Temperature</b></td><td>Increases</td><td>Particles gain kinetic energy and move faster → (1) more frequent collisions, and (2) more importantly, a <b>greater proportion of collisions have energy ≥ E<sub>a</sub></b> → more successful collisions per second. (Rule of thumb: +10 °C roughly doubles rate.)</td></tr>
<tr><td><b>Concentration</b> (of solutions)</td><td>Increases</td><td>More reactant particles per unit volume → particles closer together → more frequent collisions → more successful collisions per second.</td></tr>
<tr><td><b>Surface area</b> (smaller pieces / powder)</td><td>Increases</td><td>Only particles on the surface of a solid can collide. Cutting/crushing exposes more particles → more frequent collisions.</td></tr>
<tr><td><b>Pressure</b> (gases)</td><td>Increases</td><td>Same number of gas particles squeezed into smaller volume = higher concentration → more frequent collisions.</td></tr>
<tr><td><b>Catalyst</b></td><td>Increases</td><td>Provides an alternative pathway with <b>lower activation energy</b> → a greater proportion of collisions are successful. Not consumed.</td></tr>
<tr><td><b>Agitation (stirring/shaking)</b></td><td>Increases</td><td>Brings fresh reactant particles into contact with the solid surface and removes product build-up → more frequent collisions.</td></tr>
<tr><td>Light (some reactions)</td><td>Increases</td><td>Photons supply energy to break bonds (e.g. photosynthesis, H<sub>2</sub> + Cl<sub>2</sub>, silver halides).</td></tr>
</table>
<div class="warn">The <b>amount</b> (mass/volume) of a reactant that is already in excess does NOT change the rate – only its concentration or surface area does (2022 Yearly Q14). More acid of the same concentration just lasts longer.</div>
<div class="model"><b>Model answer (2024 Yearly Q26, 3 marks):</b> Explain the effect of decreasing concentration using collision theory.<br>According to collision theory, reactant particles must collide with sufficient energy (≥ activation energy) and correct orientation for a reaction to occur (successful collisions). Decreasing the concentration decreases the number of reactant particles per unit volume, so particles collide less frequently and there are fewer successful collisions per second. Therefore the rate of reaction decreases.</div>
<h4>Practical: investigating a factor</h4>
<ul><li><b>Temperature:</b> heat HCl in water baths (e.g. 20, 30, 40, 50 °C), add same mass of marble chips / Mg ribbon, time reaction or measure gas.</li>
<li><b>Concentration:</b> dilute HCl to 0.5, 1.0, 1.5, 2.0 mol L<sup>−1</sup> with constant total volume.</li>
<li><b>Surface area:</b> same mass of CaCO<sub>3</sub> as large chips, small chips, powder.</li>
<li>Controlled variables: volume and concentration of acid, mass of solid, temperature, size of pieces, stirring, same equipment. Repeat 3+ times and average for reliability.</li></ul>` },

    { id: 'chem-o7', title: 'Outcome 7 · Catalysts', html: `
<div class="key"><b>Catalyst</b>: a substance that increases the rate of a chemical reaction by providing an <b>alternative reaction pathway with a lower activation energy</b>, without being consumed (chemically unchanged at the end).</div>
<ul>
<li>Lower E<sub>a</sub> → at the same temperature a larger fraction of collisions have enough energy → more successful collisions per second.</li>
<li>Does <b>not</b> change ΔH, the products, or the amount of product formed – only how fast it forms.</li>
<li>Only small amounts are needed; can be reused; often specific to a reaction.</li>
<li><b>Homogeneous</b> catalyst: same phase as reactants (e.g. NO<sub>2</sub> gas for SO<sub>2</sub> + O<sub>2</sub>). <b>Heterogeneous</b>: different phase, usually solid (e.g. Pt/Pd/Rh in catalytic converters, iron in the Haber process, MnO<sub>2</sub> decomposing H<sub>2</sub>O<sub>2</sub>).</li>
<li>Example: 2H<sub>2</sub>O<sub>2</sub>(aq) → 2H<sub>2</sub>O(l) + O<sub>2</sub>(g) is slow alone; fast with MnO<sub>2</sub>(s) or the enzyme catalase. The mass of MnO<sub>2</sub> is the same before and after.</li>
<li>Inhibitors slow reactions (e.g. food preservatives).</li>
</ul>
<div class="tip">On an energy profile the catalysed path is a lower hump between the SAME reactant and product levels.</div>` },

    { id: 'chem-o8', title: 'Outcome 8 · Enzymes – biological catalysts', html: `
<div class="key"><b>Enzymes</b> are <b>biological catalysts</b> – proteins made by living cells that speed up specific chemical reactions by lowering activation energy, without being used up.</div>
<h4>How enzymes work</h4>
<ol><li>The substrate (reactant) binds to the enzyme’s <b>active site</b> – a region with a specific 3D shape.</li>
<li>An <b>enzyme–substrate complex</b> forms; bonds in the substrate are strained/brought together, lowering E<sub>a</sub>.</li>
<li>The reaction occurs, forming the enzyme–product complex.</li>
<li>Products are released; the enzyme is unchanged and can be reused.</li></ol>
<ul><li><b>Lock-and-key model</b>: the active site has a fixed shape exactly complementary to the substrate (key fits lock).</li>
<li><b>Induced-fit model</b>: the active site is flexible and changes shape slightly to mould around the substrate when it binds (more accurate model).</li>
<li><b>Specificity</b>: each enzyme catalyses only one reaction / type of substrate because only a substrate with the complementary shape fits the active site.</li></ul>
<h4>Examples</h4>
<table class="t"><tr><th>Enzyme</th><th>Where</th><th>Reaction</th><th>Optimum pH</th></tr>
<tr><td>Amylase</td><td>Saliva, pancreas → small intestine</td><td>Starch → maltose (sugar)</td><td>~7</td></tr>
<tr><td>Lipase</td><td>Pancreas → small intestine (some in stomach)</td><td>Fats/lipids → fatty acids + glycerol</td><td>~7–8</td></tr>
<tr><td>Protease e.g. pepsin</td><td>Stomach</td><td>Proteins → polypeptides/amino acids</td><td>~2</td></tr>
<tr><td>Catalase</td><td>Liver, most cells</td><td>2H<sub>2</sub>O<sub>2</sub> → 2H<sub>2</sub>O + O<sub>2</sub> (removes toxic peroxide)</td><td>~7</td></tr>
</table>
<h4>Temperature and pH</h4>
<ul><li>Each enzyme has an <b>optimum</b> temperature (~37 °C for human enzymes) and pH where activity is highest.</li>
<li>Below the optimum: particles move slowly → fewer enzyme–substrate collisions → slower (enzyme not damaged).</li>
<li>Above the optimum (or at extreme pH): bonds holding the protein’s 3D shape break → the <b>active site changes shape</b> → substrate no longer fits → enzyme is <b>denatured</b> (permanent) → rate drops sharply.</li></ul>
<h4>Importance</h4>
<ul><li>Allow metabolic reactions (respiration, digestion, DNA replication, protein synthesis) to happen fast enough at body temperature (37 °C) – without them they would take days or need dangerously high temperatures.</li>
<li>Control/regulate metabolism – cells switch enzymes on/off.</li>
<li>Industry: biological washing detergents (proteases/lipases work at low temperature), cheese making (rennet), bread/brewing (yeast enzymes), fruit-juice clarification, lactose-free milk.</li></ul>
<div class="warn">Enzymes are not ‘killed’ (they are not alive) – they are <b>denatured</b>. Low temperature does NOT denature them.</div>` },

    { id: 'chem-o9', title: 'Outcome 9 · Activity series & displacement reactions', html: `
<div class="key"><b>Activity (reactivity) series</b>: metals listed in order of decreasing reactivity (tendency to lose electrons and form positive ions).<br>
<b>K &gt; Na &gt; Ca &gt; Mg &gt; Al &gt; Zn &gt; Fe &gt; Ni &gt; Sn &gt; Pb &gt; (H) &gt; Cu &gt; Ag &gt; Au</b><br>
<i>Mnemonic:</i> ‘Kings Never Call Me A Zebra In Nice Shiny Purple Hats, Cool Silver Gold.’</div>
<h4>Displacement reactions</h4>
<p>A more reactive metal displaces a less reactive metal from a solution of its ions: <b>A + BC → AC + B</b> (A more reactive than B). It is a <b>redox</b> reaction: A is oxidised (loses electrons), B<sup>n+</sup> is reduced (gains electrons).</p>
<ul><li>Metal higher in the series + salt solution of a lower metal → <b>reaction</b>.</li>
<li>Metal lower in the series + salt solution of a higher metal → <b>no reaction</b>.</li>
<li>Metals above H react with dilute acids to produce H<sub>2</sub>; Cu, Ag, Au do not.</li></ul>
<table class="t"><tr><th>Mixture</th><th>Reaction?</th><th>Equation / observations</th></tr>
<tr><td>Zn in CuSO<sub>4</sub>(aq)</td><td>Yes</td><td>Zn(s) + CuSO<sub>4</sub>(aq) → ZnSO<sub>4</sub>(aq) + Cu(s). Brown/pink-red solid coats zinc, blue solution fades to colourless, zinc slowly dissolves, temperature rises.</td></tr>
<tr><td>Cu in AgNO<sub>3</sub>(aq)</td><td>Yes</td><td>Cu(s) + 2AgNO<sub>3</sub>(aq) → Cu(NO<sub>3</sub>)<sub>2</sub>(aq) + 2Ag(s). Silver-grey crystals form on copper; colourless solution turns blue.</td></tr>
<tr><td>Mg in NiSO<sub>4</sub>(aq)</td><td>Yes</td><td>Mg(s) + NiSO<sub>4</sub>(aq) → MgSO<sub>4</sub>(aq) + Ni(s). Grey/black nickel deposited; green solution fades.</td></tr>
<tr><td>Ni in MgSO<sub>4</sub>(aq)</td><td>No</td><td>Ni is less reactive than Mg – no change.</td></tr>
<tr><td>Fe in CuSO<sub>4</sub>(aq)</td><td>Yes</td><td>Fe(s) + CuSO<sub>4</sub>(aq) → FeSO<sub>4</sub>(aq) + Cu(s). Copper coats iron nail; blue fades to pale green.</td></tr>
<tr><td>Cu in ZnSO<sub>4</sub>(aq)</td><td>No</td><td>No visible change.</td></tr>
</table>
<div class="tip">Observations = what you SEE (colour change, solid deposited, metal dissolves, bubbles, temperature change), not the names of products. Solution colours: Cu<sup>2+</sup> blue, Ni<sup>2+</sup> green, Fe<sup>2+</sup> pale green, Fe<sup>3+</sup> yellow-brown; Zn<sup>2+</sup>, Mg<sup>2+</sup>, Al<sup>3+</sup>, Ag<sup>+</sup> colourless.</div>
<div class="model"><b>2024 Yearly Q31(a):</b> Beaker 1 Ni in MgSO<sub>4</sub>; Beaker 2 Mg in NiSO<sub>4</sub>. The reaction occurs in <b>Beaker 2</b> because Mg is higher in the activity series than Ni, so Mg displaces Ni<sup>2+</sup> from solution.</div>` },

    { id: 'chem-o10', title: 'Outcome 10 · Oxidation & reduction (redox)', html: `
<div class="key"><b>OIL RIG</b>: <b>O</b>xidation <b>I</b>s <b>L</b>oss of electrons; <b>R</b>eduction <b>I</b>s <b>G</b>ain of electrons. Both happen together = <b>redox</b>.<br>
The species <b>oxidised</b> loses electrons and is the <b>reducing agent</b>. The species <b>reduced</b> gains electrons and is the <b>oxidising agent</b>.</div>
<table class="t"><tr><th>Definition type</th><th>Oxidation</th><th>Reduction</th></tr>
<tr><td>Electrons (main one)</td><td>Loss of electrons</td><td>Gain of electrons</td></tr>
<tr><td>Oxidation number</td><td>Increase</td><td>Decrease</td></tr>
<tr><td>Oxygen (older)</td><td>Gain of oxygen</td><td>Loss of oxygen</td></tr>
<tr><td>Hydrogen (older)</td><td>Loss of hydrogen</td><td>Gain of hydrogen</td></tr>
</table>
<h4>Oxidation-number rules</h4>
<ol><li>Free (uncombined) elements = 0 (Fe, O<sub>2</sub>, Cl<sub>2</sub>).</li>
<li>Monatomic ion = its charge (Na<sup>+</sup> = +1, Cl<sup>−</sup> = −1, Fe<sup>3+</sup> = +3).</li>
<li>Oxygen = −2 (except peroxides like H<sub>2</sub>O<sub>2</sub> = −1).</li>
<li>Hydrogen = +1 (except metal hydrides like NaH = −1).</li>
<li>Group 1 metals = +1, Group 2 = +2, Al = +3, F = −1 always.</li>
<li>Sum of oxidation numbers = 0 in a neutral compound, = the charge in a polyatomic ion.</li></ol>
<table class="t"><tr><th>Find</th><th>Working</th><th>Answer</th></tr>
<tr><td>S in H<sub>2</sub>SO<sub>4</sub></td><td>2(+1) + S + 4(−2) = 0</td><td>+6</td></tr>
<tr><td>Mn in KMnO<sub>4</sub></td><td>+1 + Mn + 4(−2) = 0</td><td>+7</td></tr>
<tr><td>Cr in Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup></td><td>2Cr + 7(−2) = −2</td><td>+6</td></tr>
<tr><td>N in NO<sub>3</sub><sup>−</sup></td><td>N + 3(−2) = −1</td><td>+5</td></tr>
<tr><td>N in NH<sub>4</sub><sup>+</sup></td><td>N + 4(+1) = +1</td><td>−3</td></tr>
<tr><td>Fe in Fe<sub>2</sub>O<sub>3</sub></td><td>2Fe + 3(−2) = 0</td><td>+3</td></tr>
<tr><td>C in CO<sub>2</sub></td><td>C + 2(−2) = 0</td><td>+4</td></tr>
<tr><td>S in SO<sub>2</sub></td><td>S + 2(−2) = 0</td><td>+4</td></tr>
</table>
<h4>Half-equations</h4>
<ul><li>Oxidation: Zn(s) → Zn<sup>2+</sup>(aq) + 2e<sup>−</sup> (electrons on the RIGHT)</li>
<li>Reduction: Cu<sup>2+</sup>(aq) + 2e<sup>−</sup> → Cu(s) (electrons on the LEFT)</li>
<li>Each half-equation must balance in atoms AND charge.</li></ul>
<h4>Combining half-equations</h4>
<ol><li>Write oxidation and reduction half-equations.</li>
<li>Multiply so electrons lost = electrons gained.</li>
<li>Add them and cancel the electrons (and any species on both sides).</li>
<li>Check atoms and charge balance; add states. Add spectator ions back if a full equation is required.</li></ol>
<div class="model"><b>Example:</b> Al(s) → Al<sup>3+</sup>(aq) + 3e<sup>−</sup> (×2); Cu<sup>2+</sup>(aq) + 2e<sup>−</sup> → Cu(s) (×3)<br>
Overall: 2Al(s) + 3Cu<sup>2+</sup>(aq) → 2Al<sup>3+</sup>(aq) + 3Cu(s)<br>
<b>Example:</b> Mg(s) → Mg<sup>2+</sup>(aq) + 2e<sup>−</sup>; Ni<sup>2+</sup>(aq) + 2e<sup>−</sup> → Ni(s) → Mg(s) + Ni<sup>2+</sup>(aq) → Mg<sup>2+</sup>(aq) + Ni(s); full: Mg(s) + NiSO<sub>4</sub>(aq) → MgSO<sub>4</sub>(aq) + Ni(s) (SO<sub>4</sub><sup>2−</sup> is a spectator ion).</div>
<div class="tip">Identify redox in a full equation by assigning oxidation numbers. E.g. thermite 2Al + Fe<sub>2</sub>O<sub>3</sub> → Al<sub>2</sub>O<sub>3</sub> + 2Fe: Al 0 → +3 (oxidised, reducing agent); Fe +3 → 0 so <b>iron(III) oxide is reduced</b> (oxidising agent).</div>` },

    { id: 'chem-o10b', title: 'Outcome 10 · Galvanic (electrochemical) cells & electrolytic cells', html: `
<div class="key">A <b>galvanic cell</b> converts <b>chemical energy → electrical energy</b> using a <b>spontaneous</b> redox reaction, by separating the oxidation and reduction half-reactions into two half-cells and making the electrons travel through an external wire.</div>
<svg viewBox="0 0 360 258" width="100%" style="max-height:320px" font-size="11" fill="currentColor">
<defs><marker id="chemAh2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<rect x="22" y="140" width="106" height="78" fill="currentColor" opacity="0.12"/>
<rect x="232" y="140" width="106" height="78" fill="#3b82f6" opacity="0.25"/>
<g stroke="currentColor" fill="none" stroke-width="1.5">
<path d="M20 110V220H130V110"/>
<path d="M230 110V220H340V110"/>
<path d="M68 70H40V25H162"/><path d="M198 25H320V70H292"/>
<circle cx="180" cy="25" r="16"/>
<path d="M105 175V85H255V175" stroke-width="12" stroke-opacity="0.35"/>
<path d="M80 12H140" marker-end="url(#chemAh2)"/>
<path d="M220 12H280" marker-end="url(#chemAh2)"/>
</g>
<rect x="60" y="70" width="16" height="125" fill="#9ca3af"/>
<rect x="284" y="70" width="16" height="125" fill="#c2703d"/>
<text x="175" y="30" font-weight="bold">V</text>
<text x="96" y="9">e⁻ flow</text><text x="232" y="9">e⁻ flow</text>
<text x="128" y="78">salt bridge (KNO₃)</text>
<text x="110" y="100" font-size="10">← NO₃⁻</text><text x="208" y="100" font-size="10">K⁺ →</text>
<text x="2" y="60">Zn anode (−)</text>
<text x="275" y="60">Cu cathode (+)</text>
<text x="28" y="212">ZnSO₄(aq)</text>
<text x="240" y="212">CuSO₄(aq)</text>
<text x="2" y="238" font-size="10">Oxidation: Zn → Zn²⁺ + 2e⁻ (electrode loses mass)</text>
<text x="2" y="252" font-size="10">Reduction: Cu²⁺ + 2e⁻ → Cu (gains mass)</text>
</svg>
<h4>Parts and their roles</h4>
<table class="t"><tr><th>Part</th><th>Role</th></tr>
<tr><td><b>Anode</b> (negative electrode)</td><td>Where <b>oxidation</b> occurs (AN OX). The <b>more reactive</b> metal. Loses mass as metal atoms become ions. Source of electrons.</td></tr>
<tr><td><b>Cathode</b> (positive electrode)</td><td>Where <b>reduction</b> occurs (RED CAT). Less reactive metal. Metal ions from solution gain electrons and deposit → cathode <b>gains mass</b>.</td></tr>
<tr><td><b>Electrolytes</b></td><td>Ionic solutions in each half-cell, usually containing ions of the electrode metal (ZnSO<sub>4</sub>, CuSO<sub>4</sub>).</td></tr>
<tr><td><b>External wire</b></td><td>Conducts <b>electrons from anode to cathode</b>.</td></tr>
<tr><td><b>Salt bridge</b> (e.g. KNO<sub>3</sub>(aq) on filter paper or in a U-tube)</td><td>Completes the circuit by allowing <b>ions</b> to migrate between half-cells to <b>maintain electrical neutrality</b>. Anions (NO<sub>3</sub><sup>−</sup>) move to the anode half-cell (which builds up positive Zn<sup>2+</sup>); cations (K<sup>+</sup>) move to the cathode half-cell (which loses Cu<sup>2+</sup>). Its ions must not react or form precipitates (so KNO<sub>3</sub> is used – nitrates and K<sup>+</sup> salts are all soluble).</td></tr>
<tr><td><b>Voltmeter</b></td><td>Measures the potential difference (voltage) between the half-cells.</td></tr>
</table>
<div class="warn">Electrons NEVER travel through the salt bridge or the solution – only through the wire. Ions carry charge through the salt bridge. Without a salt bridge charge builds up and the current stops almost immediately.</div>
<h4>Shorthand (cell) notation</h4>
<p>anode | anode ion || cathode ion | cathode &nbsp; e.g. <b>Zn(s) | Zn<sup>2+</sup>(aq) || Cu<sup>2+</sup>(aq) | Cu(s)</b> (| = phase boundary, || = salt bridge).</p>
<h4>Calculating cell voltage</h4>
<div class="key"><b>E°<sub>cell</sub> = E°<sub>cathode</sub> − E°<sub>anode</sub></b> (using standard reduction potentials from the data sheet). The metal with the <b>more negative</b> E° is the anode. A positive E°<sub>cell</sub> means the reaction is spontaneous.</div>
<table class="t"><tr><th>Half-equation (reduction)</th><th>E° (V)</th></tr>
<tr><td>Mg<sup>2+</sup> + 2e<sup>−</sup> → Mg</td><td>−2.36</td></tr>
<tr><td>Al<sup>3+</sup> + 3e<sup>−</sup> → Al</td><td>−1.68</td></tr>
<tr><td>Zn<sup>2+</sup> + 2e<sup>−</sup> → Zn</td><td>−0.76</td></tr>
<tr><td>Fe<sup>2+</sup> + 2e<sup>−</sup> → Fe</td><td>−0.44</td></tr>
<tr><td>Ni<sup>2+</sup> + 2e<sup>−</sup> → Ni</td><td>−0.24</td></tr>
<tr><td>Sn<sup>2+</sup> + 2e<sup>−</sup> → Sn</td><td>−0.14</td></tr>
<tr><td>Pb<sup>2+</sup> + 2e<sup>−</sup> → Pb</td><td>−0.13</td></tr>
<tr><td>2H<sup>+</sup> + 2e<sup>−</sup> → H<sub>2</sub></td><td>0.00</td></tr>
<tr><td>Cu<sup>2+</sup> + 2e<sup>−</sup> → Cu</td><td>+0.34</td></tr>
<tr><td>Ag<sup>+</sup> + e<sup>−</sup> → Ag</td><td>+0.80</td></tr>
</table>
<p>Examples: Zn/Cu: 0.34 − (−0.76) = <b>1.10 V</b>. Mg/Ni: −0.24 − (−2.36) = <b>2.12 V</b>. Cu/Ag: 0.80 − 0.34 = <b>0.46 V</b>. Mg/Cu: 0.34 − (−2.36) = <b>2.70 V</b>. Do NOT multiply E° by coefficients (2Ag<sup>+</sup> still uses +0.80).</p>
<div class="tip">The further apart two metals are in the activity series, the larger the cell voltage.</div>
<h4>Galvanic vs electrolytic cells</h4>
<table class="t"><tr><th></th><th>Galvanic (voltaic)</th><th>Electrolytic</th></tr>
<tr><td>Energy</td><td>Chemical → electrical</td><td>Electrical → chemical (uses an EXTERNAL power supply)</td></tr>
<tr><td>Reaction</td><td>Spontaneous redox</td><td>Non-spontaneous, driven by the power supply</td></tr>
<tr><td>Anode</td><td>Oxidation, negative</td><td>Oxidation, positive (connected to + terminal)</td></tr>
<tr><td>Cathode</td><td>Reduction, positive</td><td>Reduction, negative</td></tr>
<tr><td>Set-up</td><td>Two half-cells + salt bridge</td><td>Usually one container of electrolyte</td></tr>
<tr><td>Examples</td><td>Batteries, Daniell cell (Zn/Cu)</td><td>Electrolysis of water, electroplating, extracting Al, recharging a battery</td></tr>
</table>
<div class="tip">AN OX and RED CAT apply to BOTH cell types; only the signs of the electrodes swap.</div>` },

    { id: 'chem-o11', title: 'Outcome 11 · Corrosion & its prevention', html: `
<div class="key"><b>Corrosion</b>: the gradual deterioration (breakdown) of a metal due to chemical (redox) reactions with substances in its environment, e.g. oxygen and water. The metal is <b>oxidised</b>. <b>Rusting</b> is the corrosion of iron/steel.</div>
<h4>Rusting of iron</h4>
<ul><li>Needs <b>both oxygen and water</b> (no rust in dry air or in boiled, oxygen-free water).</li>
<li>Anode (oxidation): Fe(s) → Fe<sup>2+</sup>(aq) + 2e<sup>−</sup></li>
<li>Cathode (reduction): O<sub>2</sub>(g) + 2H<sub>2</sub>O(l) + 4e<sup>−</sup> → 4OH<sup>−</sup>(aq)</li>
<li>Fe<sup>2+</sup> + 2OH<sup>−</sup> → Fe(OH)<sub>2</sub>, further oxidised by O<sub>2</sub> to Fe(OH)<sub>3</sub>, which dehydrates to rust, <b>Fe<sub>2</sub>O<sub>3</sub>·xH<sub>2</sub>O</b> (hydrated iron(III) oxide).</li>
<li>Overall: 4Fe(s) + 3O<sub>2</sub>(g) + 2xH<sub>2</sub>O(l) → 2Fe<sub>2</sub>O<sub>3</sub>·xH<sub>2</sub>O(s)</li>
<li><b>Salt (and acids) accelerate</b> rusting: dissolved ions make the water a better electrolyte so electrons/ions move more easily (faster redox). Cars near the sea or on salted roads rust faster. Higher temperature also speeds it up.</li>
<li>Rust is porous and flakes off, exposing fresh iron → corrosion continues.</li></ul>
<h4>Predicting corrosion with the activity series</h4>
<p>More reactive metals (higher in the series, more negative E°) lose electrons more easily, so they <b>corrode more readily</b>. Gold, silver and copper corrode slowly; Mg, Zn, Fe corrode readily.</p>
<div class="warn"><b>Aluminium</b> is high in the series but appears resistant: it quickly forms a thin, tough, non-porous layer of <b>aluminium oxide (Al<sub>2</sub>O<sub>3</sub>)</b> that sticks to the surface and stops oxygen and water reaching the metal underneath (passivation). Unlike rust, it does not flake off. Zinc and chromium behave similarly.</div>
<h4>Prevention methods</h4>
<table class="t"><tr><th>Method</th><th>How it works</th><th>Example</th></tr>
<tr><td>Painting, oiling, greasing, plastic coating</td><td><b>Barrier</b> – keeps O<sub>2</sub> and water away. Fails if scratched.</td><td>Car bodies, bike chains (oil), fences</td></tr>
<tr><td><b>Galvanising</b> (zinc coating)</td><td>Barrier + <b>sacrificial protection</b>: Zn is more reactive than Fe so if scratched Zn is oxidised instead of iron.</td><td>Roofing iron, nails, buckets</td></tr>
<tr><td><b>Sacrificial anode</b></td><td>Block of a more reactive metal (Mg, Zn, Al) connected to the iron; it is oxidised (corrodes) and supplies electrons so iron acts as the cathode and is protected. Replace periodically.</td><td>Ship hulls, pipelines, hot-water tanks, jetty piles</td></tr>
<tr><td><b>Alloying – stainless steel</b></td><td>Fe + Cr (+Ni): chromium forms a protective Cr<sub>2</sub>O<sub>3</sub> oxide layer.</td><td>Cutlery, sinks, surgical tools</td></tr>
<tr><td><b>Electroplating</b></td><td>Electrolytic cell deposits a thin layer of unreactive metal (Cr, Ni, Sn, Ag) as a barrier.</td><td>Chrome taps, tin cans</td></tr>
<tr><td>Cathodic protection (impressed current)</td><td>DC power supply makes the iron the cathode.</td><td>Bridges, large pipelines</td></tr>
<tr><td>Controlling environment</td><td>Keep dry (desiccants), remove salt, dehumidify.</td><td>Storage</td></tr>
</table>
<div class="warn">Tin plating only works as a barrier. Tin is LESS reactive than iron, so if a tin can is scratched the iron becomes the anode and corrodes even faster. Galvanised iron still protects when scratched.</div>
<h4>Designing the submerged-object corrosion investigation</h4>
<ul><li><b>Aim:</b> To compare methods of preventing corrosion of iron nails submerged in salt water.</li>
<li><b>IV:</b> protection method – untreated nail (control), painted, greased/oiled, galvanised, wrapped in magnesium ribbon (sacrificial), wrapped in copper wire, stainless steel.</li>
<li><b>DV:</b> amount of corrosion after 1 week – change in mass (clean and dry, weigh before/after) or visual rust rating; optionally ferroxyl indicator (blue = Fe<sup>2+</sup>, pink = OH<sup>−</sup>).</li>
<li><b>CVs:</b> identical nails (type, size, cleaned with sandpaper), same volume and concentration of salt water, same temperature, same time, same exposure to air.</li>
<li><b>Extra controls</b> to show conditions needed: nail in dry air with anhydrous CaCl<sub>2</sub> (no water), nail in boiled water under a layer of oil (no O<sub>2</sub>), nail in tap water vs salt water.</li>
<li>Repeat with 3 nails per treatment for reliability; average mass loss.</li>
<li><b>Expected:</b> Mg-wrapped and galvanised nails show least corrosion; Cu-wrapped nail corrodes MORE than the untreated nail (iron becomes anode); salt water causes more rust than tap water.</li>
<li><b>Risks:</b> sharp nails, salt water/indicator irritate eyes – wear safety glasses; wash hands.</li></ul>` }
  ],
  cram: `
<h4>Energy</h4>
<ul><li>Break bonds = absorb; make bonds = release. Exo: release &gt; absorb, ΔH −, surroundings hotter. Endo: absorb &gt; release, ΔH +, surroundings colder.</li>
<li>Energy profile: E<sub>a</sub> reactants → peak; ΔH reactants → products; catalyst = lower peak, same ΔH. Peak = transition state.</li>
<li>Exo eg: combustion, respiration, neutralisation, rusting. Endo eg: photosynthesis, thermal decomposition, electrolysis, cold packs.</li></ul>
<h4>Rates</h4>
<ul><li>Rate = change in concentration/amount per unit time (mol L<sup>−1</sup> s<sup>−1</sup>, mL s<sup>−1</sup>). Measure: gas volume, mass loss, colour/turbidity time.</li>
<li>Collision theory: collide + energy ≥ E<sub>a</sub> + correct orientation = successful collision.</li>
<li>↑ temp (more energetic + more frequent collisions), ↑ conc, ↑ surface area, ↑ pressure (gases), catalyst (lower E<sub>a</sub>), stirring → faster. Amount of excess reactant: no effect.</li>
<li>Answer chain: factor → particles → frequency of successful collisions → rate ↑/↓.</li>
<li>Catalyst: alternative pathway, lower E<sub>a</sub>, not consumed, ΔH unchanged. Enzyme = biological (protein) catalyst; active site; lock-and-key / induced fit; specific; denatured by high temp / extreme pH. Amylase starch→maltose; lipase fats→fatty acids + glycerol.</li></ul>
<h4>Redox & cells</h4>
<ul><li>K Na Ca Mg Al Zn Fe Ni Sn Pb (H) Cu Ag Au. Higher displaces lower: A + BC → AC + B.</li>
<li>OIL RIG; oxidised = reducing agent; reduced = oxidising agent. Ox number ↑ = oxidation. O −2, H +1, elements 0, sum = charge.</li>
<li>Combine half-equations: equalise electrons, add, cancel e<sup>−</sup>.</li>
<li>Galvanic: chemical → electrical, spontaneous. AN OX (anode −, more reactive, loses mass). RED CAT (cathode +, gains mass). e<sup>−</sup> anode → cathode through WIRE. Salt bridge KNO<sub>3</sub>: ions migrate, keep neutrality, complete circuit.</li>
<li>Zn(s)|Zn<sup>2+</sup>(aq)||Cu<sup>2+</sup>(aq)|Cu(s). E°cell = E°cathode − E°anode (Zn/Cu 1.10 V; Mg/Ni 2.12 V).</li>
<li>Electrolytic: external power drives non-spontaneous reaction; anode +.</li></ul>
<h4>Corrosion</h4>
<ul><li>Gradual breakdown of metal by reaction with environment (oxidation). Rust = Fe<sub>2</sub>O<sub>3</sub>·xH<sub>2</sub>O, needs O<sub>2</sub> + water; salt speeds up.</li>
<li>More reactive → corrodes more readily (Al protected by Al<sub>2</sub>O<sub>3</sub> layer).</li>
<li>Prevent: paint/oil (barrier), galvanise (Zn barrier + sacrificial), sacrificial anode (Mg/Zn), stainless steel (Cr), electroplating.</li></ul>
<h4>Equations</h4>
<ul><li>2AlBr<sub>3</sub>(aq) + 3K<sub>2</sub>SO<sub>4</sub>(aq) → 6KBr(aq) + Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>(aq)</li>
<li>Mg(s) + NiSO<sub>4</sub>(aq) → MgSO<sub>4</sub>(aq) + Ni(s)</li>
<li>Acid + metal → salt + H<sub>2</sub>; + carbonate → salt + H<sub>2</sub>O + CO<sub>2</sub>; + base → salt + H<sub>2</sub>O. H<sub>2</sub> pop; O<sub>2</sub> relights glowing splint; CO<sub>2</sub> limewater milky.</li></ul>`
});

SD.cards.push(
  { id: 'chem-c1', topic: 'chemistry', outcome: 'chem-pre', front: 'Formula and charge of sulfate, carbonate, nitrate, hydroxide', back: 'SO<sub>4</sub><sup>2−</sup>, CO<sub>3</sub><sup>2−</sup>, NO<sub>3</sub><sup>−</sup>, OH<sup>−</sup>' },
  { id: 'chem-c2', topic: 'chemistry', outcome: 'chem-pre', front: 'Formula and charge of phosphate, hydrogen carbonate, acetate, ammonium', back: 'PO<sub>4</sub><sup>3−</sup>, HCO<sub>3</sub><sup>−</sup>, CH<sub>3</sub>COO<sup>−</sup>, NH<sub>4</sub><sup>+</sup>' },
  { id: 'chem-c3', topic: 'chemistry', outcome: 'chem-pre', front: 'Acid + metal → ?', back: 'Salt + hydrogen gas, e.g. Zn(s) + 2HCl(aq) → ZnCl<sub>2</sub>(aq) + H<sub>2</sub>(g)' },
  { id: 'chem-c4', topic: 'chemistry', outcome: 'chem-pre', front: 'Acid + carbonate → ?', back: 'Salt + water + carbon dioxide, e.g. CaCO<sub>3</sub>(s) + 2HCl(aq) → CaCl<sub>2</sub>(aq) + H<sub>2</sub>O(l) + CO<sub>2</sub>(g)' },
  { id: 'chem-c5', topic: 'chemistry', outcome: 'chem-pre', front: 'Acid + base (neutralisation) → ?', back: 'Salt + water, e.g. HCl(aq) + NaOH(aq) → NaCl(aq) + H<sub>2</sub>O(l)' },
  { id: 'chem-c6', topic: 'chemistry', outcome: 'chem-pre', front: 'Tests for H<sub>2</sub>, O<sub>2</sub> and CO<sub>2</sub>', back: 'H<sub>2</sub>: lit splint gives a ‘pop’. O<sub>2</sub>: glowing splint relights. CO<sub>2</sub>: turns limewater milky.' },
  { id: 'chem-c7', topic: 'chemistry', outcome: 'chem-pre', front: 'Balanced equation: aluminium bromide + potassium sulfate (2022 Yearly)', back: '2AlBr<sub>3</sub>(aq) + 3K<sub>2</sub>SO<sub>4</sub>(aq) → 6KBr(aq) + Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>(aq)' },
  { id: 'chem-c8', topic: 'chemistry', outcome: 'chem-pre', front: 'Four state symbols', back: '(s) solid, (l) liquid, (g) gas, (aq) aqueous – dissolved in water' },
  { id: 'chem-c9', topic: 'chemistry', outcome: 'chem-o1', front: 'Why do all chemical reactions involve an energy change?', back: 'Bonds in reactants must be broken (absorbs energy) and new bonds formed in products (releases energy); these amounts are almost never equal, so there is a net transfer of energy to or from the surroundings.' },
  { id: 'chem-c10', topic: 'chemistry', outcome: 'chem-o1', front: 'ΔH (enthalpy change)', back: 'ΔH = H(products) − H(reactants): the heat energy absorbed or released by a reaction at constant pressure.' },
  { id: 'chem-c11', topic: 'chemistry', outcome: 'chem-o2', front: 'Exothermic reaction (bond definition)', back: 'Energy released forming new bonds is greater than energy absorbed breaking bonds → net energy released to surroundings; ΔH negative; surroundings get hotter.' },
  { id: 'chem-c12', topic: 'chemistry', outcome: 'chem-o2', front: 'Endothermic reaction (bond definition)', back: 'Energy absorbed breaking bonds is greater than energy released forming bonds → net energy absorbed from surroundings; ΔH positive; surroundings get colder.' },
  { id: 'chem-c13', topic: 'chemistry', outcome: 'chem-o2', front: 'Bond breaking vs bond making – which absorbs energy?', back: 'Bond BREAKING absorbs energy (endothermic). Bond MAKING releases energy (exothermic).' },
  { id: 'chem-c14', topic: 'chemistry', outcome: 'chem-o2', front: 'Three examples each of exothermic and endothermic reactions', back: 'Exo: combustion, respiration, neutralisation (also rusting, metal + acid). Endo: photosynthesis, thermal decomposition of CaCO<sub>3</sub>, electrolysis (also cold packs).' },
  { id: 'chem-c15', topic: 'chemistry', outcome: 'chem-o3', front: 'Activation energy (E<sub>a</sub>)', back: 'The minimum energy colliding particles need for a reaction to occur; on a profile, measured from the reactants level to the peak.' },
  { id: 'chem-c16', topic: 'chemistry', outcome: 'chem-o3', front: 'Transition state (activated complex)', back: 'The unstable, highest-energy arrangement at the peak of an energy profile where old bonds are partly broken and new bonds partly formed.' },
  { id: 'chem-c17', topic: 'chemistry', outcome: 'chem-o3', front: 'How to recognise exothermic vs endothermic on an energy profile', back: 'Exothermic: products lower than reactants (ΔH arrow down). Endothermic: products higher than reactants (ΔH arrow up).' },
  { id: 'chem-c18', topic: 'chemistry', outcome: 'chem-o3', front: 'Effect of a catalyst on an energy profile', back: 'Lower peak (lower E<sub>a</sub>) between the same reactant and product levels; ΔH unchanged.' },
  { id: 'chem-c19', topic: 'chemistry', outcome: 'chem-o3', front: 'Write methane combustion with states and energy term', back: 'CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l) + 890 kJ (or ΔH = −890 kJ mol<sup>−1</sup>)' },
  { id: 'chem-c20', topic: 'chemistry', outcome: 'chem-o4', front: 'Collision theory – three requirements for reaction', back: 'Particles must (1) collide, (2) with energy ≥ activation energy, (3) with correct orientation = a successful collision.' },
  { id: 'chem-c21', topic: 'chemistry', outcome: 'chem-o4', front: 'What determines reaction rate according to collision theory?', back: 'The frequency of successful collisions (number of successful collisions per unit time).' },
  { id: 'chem-c22', topic: 'chemistry', outcome: 'chem-o5', front: 'Reaction rate (definition and units)', back: 'Change in concentration (or amount) of a reactant or product per unit time; e.g. mol L<sup>−1</sup> s<sup>−1</sup>, mL s<sup>−1</sup>, g s<sup>−1</sup>.' },
  { id: 'chem-c23', topic: 'chemistry', outcome: 'chem-o5', front: 'Three ways to measure the rate of a reaction', back: 'Volume of gas produced over time (gas syringe); mass lost over time (balance); time for a colour change/precipitate to form (disappearing cross).' },
  { id: 'chem-c24', topic: 'chemistry', outcome: 'chem-o5', front: 'Why does reaction rate decrease as a reaction proceeds?', back: 'Reactants are used up, so their concentration falls → fewer collisions per second → fewer successful collisions.' },
  { id: 'chem-c25', topic: 'chemistry', outcome: 'chem-o6', front: 'Temperature and rate (collision theory)', back: 'Higher temperature → particles have more kinetic energy → more frequent collisions AND a larger proportion with energy ≥ E<sub>a</sub> → more successful collisions per second → faster.' },
  { id: 'chem-c26', topic: 'chemistry', outcome: 'chem-o6', front: 'Concentration and rate (collision theory)', back: 'Higher concentration → more particles per unit volume → more frequent collisions → more successful collisions per second → faster (and lower concentration → slower).' },
  { id: 'chem-c27', topic: 'chemistry', outcome: 'chem-o6', front: 'Surface area and rate (collision theory)', back: 'Smaller pieces/powder expose more particles at the surface → more frequent collisions → faster.' },
  { id: 'chem-c28', topic: 'chemistry', outcome: 'chem-o6', front: 'Pressure and agitation and rate', back: 'Higher gas pressure = higher concentration of gas particles → more collisions. Stirring brings fresh reactant particles into contact and removes products from the surface → more collisions.' },
  { id: 'chem-c29', topic: 'chemistry', outcome: 'chem-o7', front: 'Catalyst', back: 'A substance that increases reaction rate by providing an alternative pathway with lower activation energy, without being consumed.' },
  { id: 'chem-c30', topic: 'chemistry', outcome: 'chem-o7', front: 'Does a catalyst change ΔH or the amount of product?', back: 'No. It only changes how fast the products form by lowering E<sub>a</sub>.' },
  { id: 'chem-c31', topic: 'chemistry', outcome: 'chem-o8', front: 'Enzyme', back: 'A biological catalyst – a protein that speeds up a specific reaction in living things by lowering activation energy, unchanged at the end.' },
  { id: 'chem-c32', topic: 'chemistry', outcome: 'chem-o8', front: 'Lock-and-key vs induced-fit model', back: 'Lock-and-key: rigid active site exactly complementary to substrate. Induced fit: active site is flexible and changes shape slightly to fit the substrate when it binds.' },
  { id: 'chem-c33', topic: 'chemistry', outcome: 'chem-o8', front: 'Denaturation', back: 'Permanent change in an enzyme’s 3D shape (active site) caused by high temperature or extreme pH, so the substrate no longer fits and the enzyme stops working.' },
  { id: 'chem-c34', topic: 'chemistry', outcome: 'chem-o8', front: 'Amylase and lipase – what do they do?', back: 'Amylase: starch → maltose (saliva, small intestine). Lipase: fats → fatty acids + glycerol (small intestine).' },
  { id: 'chem-c35', topic: 'chemistry', outcome: 'chem-o8', front: 'Why are enzymes important?', back: 'They make metabolic reactions (digestion, respiration, DNA replication) fast enough to sustain life at body temperature (37 °C), and allow cells to control metabolism.' },
  { id: 'chem-c36', topic: 'chemistry', outcome: 'chem-o9', front: 'Activity series (most → least reactive)', back: 'K, Na, Ca, Mg, Al, Zn, Fe, Ni, Sn, Pb, (H), Cu, Ag, Au' },
  { id: 'chem-c37', topic: 'chemistry', outcome: 'chem-o9', front: 'Displacement reaction', back: 'A more reactive metal displaces a less reactive metal from a solution of its ions: A + BC → AC + B. It is a redox reaction.' },
  { id: 'chem-c38', topic: 'chemistry', outcome: 'chem-o9', front: 'Observations: zinc in copper(II) sulfate', back: 'Pink-brown copper deposits on zinc, blue solution fades towards colourless, zinc dissolves, solution warms.' },
  { id: 'chem-c39', topic: 'chemistry', outcome: 'chem-o10', front: 'OIL RIG', back: 'Oxidation Is Loss of electrons; Reduction Is Gain of electrons.' },
  { id: 'chem-c40', topic: 'chemistry', outcome: 'chem-o10', front: 'Oxidising agent vs reducing agent', back: 'Oxidising agent: is itself reduced (gains electrons). Reducing agent: is itself oxidised (loses electrons).' },
  { id: 'chem-c41', topic: 'chemistry', outcome: 'chem-o10', front: 'Key oxidation-number rules', back: 'Elements = 0; monatomic ion = charge; O = −2 (peroxide −1); H = +1 (metal hydride −1); F = −1; sum = 0 (compound) or ion charge.' },
  { id: 'chem-c42', topic: 'chemistry', outcome: 'chem-o10', front: 'Oxidation number of S in H<sub>2</sub>SO<sub>4</sub> and Mn in KMnO<sub>4</sub>', back: 'S = +6; Mn = +7' },
  { id: 'chem-c43', topic: 'chemistry', outcome: 'chem-o10', front: 'How do you combine two half-equations?', back: 'Multiply so electrons lost = electrons gained, add the half-equations, cancel electrons, check atom and charge balance, add states.' },
  { id: 'chem-c44', topic: 'chemistry', outcome: 'chem-o10b', front: 'Galvanic cell', back: 'Device that converts chemical energy into electrical energy using a spontaneous redox reaction, with oxidation and reduction in separate half-cells joined by a wire and salt bridge.' },
  { id: 'chem-c45', topic: 'chemistry', outcome: 'chem-o10b', front: 'AN OX, RED CAT', back: 'ANode = OXidation; REDuction = CAThode. In a galvanic cell the anode is negative (more reactive metal) and the cathode positive.' },
  { id: 'chem-c46', topic: 'chemistry', outcome: 'chem-o10b', front: 'Purpose of the salt bridge (e.g. KNO<sub>3</sub>)', back: 'Allows ions to migrate between half-cells to maintain electrical neutrality and complete the circuit (anions to anode side, cations to cathode side).' },
  { id: 'chem-c47', topic: 'chemistry', outcome: 'chem-o10b', front: 'Direction of electron flow in a galvanic cell; which electrode gains mass?', back: 'Electrons flow from anode to cathode through the external wire. The cathode gains mass (metal ions deposit); the anode loses mass.' },
  { id: 'chem-c48', topic: 'chemistry', outcome: 'chem-o10b', front: 'E°cell formula and Zn/Cu value', back: 'E°cell = E°cathode − E°anode = 0.34 − (−0.76) = 1.10 V' },
  { id: 'chem-c49', topic: 'chemistry', outcome: 'chem-o10b', front: 'Shorthand notation for the Zn/Cu cell', back: 'Zn(s) | Zn<sup>2+</sup>(aq) || Cu<sup>2+</sup>(aq) | Cu(s)  (anode on left, || = salt bridge)' },
  { id: 'chem-c50', topic: 'chemistry', outcome: 'chem-o10b', front: 'Galvanic vs electrolytic cell', back: 'Galvanic: spontaneous reaction produces electricity (anode −). Electrolytic: external power supply drives a non-spontaneous reaction (anode +), e.g. electroplating.' },
  { id: 'chem-c51', topic: 'chemistry', outcome: 'chem-o11', front: 'Corrosion', back: 'The gradual breakdown of a metal due to chemical (redox) reactions with its environment (e.g. oxygen, water); the metal is oxidised.' },
  { id: 'chem-c52', topic: 'chemistry', outcome: 'chem-o11', front: 'Conditions for rusting and what speeds it up', back: 'Needs oxygen AND water. Salt (electrolyte), acids and higher temperature accelerate it. Rust = Fe<sub>2</sub>O<sub>3</sub>·xH<sub>2</sub>O.' },
  { id: 'chem-c53', topic: 'chemistry', outcome: 'chem-o11', front: 'Why does aluminium resist corrosion despite being reactive?', back: 'It forms a thin, tough, non-porous Al<sub>2</sub>O<sub>3</sub> layer that sticks to the surface and blocks oxygen and water.' },
  { id: 'chem-c54', topic: 'chemistry', outcome: 'chem-o11', front: 'Galvanising and sacrificial anodes', back: 'Galvanising: zinc coating – barrier and, being more reactive than Fe, corrodes instead of iron. Sacrificial anode: Mg/Zn block attached to iron is oxidised in preference, protecting the iron (ships, pipelines).' }
);

SD.mcq.push(
  { id: 'chem-q1', topic: 'chemistry', outcome: 'chem-o2', q: 'Which of the following is an example of an endothermic reaction?', options: ['Photosynthesis', 'Rusting of iron', 'Combustion of fuel', 'Respiration'], answer: 0,
    explain: 'Photosynthesis absorbs light energy from the surroundings (ΔH positive). Rusting, combustion and respiration all release energy – they are exothermic.', source: '2024 Yearly Q20' },
  { id: 'chem-q2', topic: 'chemistry', outcome: 'chem-o2', q: 'In an exothermic reaction:', options: ['more bonds are formed than are broken', 'the energy absorbed breaking bonds is greater than the energy released forming bonds', 'the energy released forming bonds is greater than the energy absorbed breaking bonds', 'no energy is needed to start the reaction'], answer: 2,
    explain: 'Exothermic is about energy: bond making releases more energy than bond breaking absorbs, so there is a net release. It is not about the number of bonds (A), and exothermic reactions still need activation energy (D).' },
  { id: 'chem-q3', topic: 'chemistry', outcome: 'chem-o2', q: 'A student dissolves a solid in water and the beaker feels cold. Which statement is correct?', options: ['The process is exothermic and ΔH is negative', 'The process is endothermic and ΔH is positive', 'The process is endothermic and ΔH is negative', 'Heat is flowing from the solution to the student’s hand'], answer: 1,
    explain: 'The process absorbs heat from its surroundings (including your hand), so the beaker feels cold: endothermic, ΔH > 0. Heat flows from the hand INTO the solution, not the reverse.' },
  { id: 'chem-q4', topic: 'chemistry', outcome: 'chem-o2', q: 'Which process absorbs energy?', options: ['Forming an O–H bond', 'Condensing steam', 'Breaking a C–H bond', 'Burning magnesium'], answer: 2,
    explain: 'Bond breaking always requires (absorbs) energy. Bond forming, condensation and combustion release energy.' },
  { id: 'chem-q5', topic: 'chemistry', outcome: 'chem-o3', q: 'On an energy profile diagram, the activation energy is measured from:', options: ['the reactants to the products', 'the products to the peak', 'zero energy to the peak', 'the reactants to the peak'], answer: 3,
    explain: 'E<sub>a</sub> is the energy barrier from the reactant level up to the transition state (peak). Reactants → products is ΔH; products → peak is E<sub>a</sub> of the reverse reaction.' },
  { id: 'chem-q6', topic: 'chemistry', outcome: 'chem-o3', q: 'An energy profile shows reactants at 50 kJ, the peak at 180 kJ and products at 120 kJ. What are E<sub>a</sub> and ΔH?', options: ['E<sub>a</sub> = 130 kJ, ΔH = +70 kJ', 'E<sub>a</sub> = 180 kJ, ΔH = +120 kJ', 'E<sub>a</sub> = 60 kJ, ΔH = −70 kJ', 'E<sub>a</sub> = 130 kJ, ΔH = −70 kJ'], answer: 0,
    explain: 'E<sub>a</sub> = 180 − 50 = 130 kJ. ΔH = 120 − 50 = +70 kJ (products higher → endothermic, positive). D has the wrong sign; 60 kJ is the reverse activation energy.' },
  { id: 'chem-q7', topic: 'chemistry', outcome: 'chem-o3', q: 'Adding a catalyst to a reaction changes which feature of its energy profile?', options: ['The energy of the reactants', 'ΔH', 'The height of the peak above the reactants', 'The energy of the products'], answer: 2,
    explain: 'A catalyst provides a pathway of lower activation energy, so the peak is lower. Reactant and product energies, and therefore ΔH, are unchanged.' },
  { id: 'chem-q8', topic: 'chemistry', outcome: 'chem-o3', q: 'Which equation correctly represents an endothermic reaction?', options: ['CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l) + energy', 'CaCO<sub>3</sub>(s) + energy → CaO(s) + CO<sub>2</sub>(g)', 'HCl(aq) + NaOH(aq) → NaCl(aq) + H<sub>2</sub>O(l) ΔH = −57 kJ mol<sup>−1</sup>', 'CaCO<sub>3</sub>(s) → CaO(s) + CO<sub>2</sub>(g) ΔH = −178 kJ mol<sup>−1</sup>'], answer: 1,
    explain: 'In an endothermic reaction energy is absorbed, so the energy term appears on the reactant side (or ΔH is positive). D has the wrong sign for thermal decomposition; A and C are exothermic.' },
  { id: 'chem-q9', topic: 'chemistry', outcome: 'chem-o3', q: 'The highest point on an energy profile represents the:', options: ['products', 'activation energy of the reverse reaction', 'enthalpy change', 'transition state (activated complex)'], answer: 3,
    explain: 'The peak is the transition state – an unstable arrangement with bonds partly broken and partly formed. E<sub>a</sub> is the energy DIFFERENCE up to it, not the peak itself.' },
  { id: 'chem-q10', topic: 'chemistry', outcome: 'chem-o4', q: 'According to collision theory, which collision will most likely lead to a reaction?', options: ['A collision with energy greater than E<sub>a</sub> and correct orientation', 'Any collision between reactant particles', 'A collision with energy less than E<sub>a</sub> but correct orientation', 'A collision with high energy in any orientation'], answer: 0,
    explain: 'A successful collision needs BOTH energy ≥ E<sub>a</sub> AND correct orientation. Most collisions fail one of these.' },
  { id: 'chem-q11', topic: 'chemistry', outcome: 'chem-o4', q: 'Reaction rate is determined most directly by:', options: ['the frequency of successful collisions', 'the total number of particles present', 'the size of ΔH', 'the mass of the container'], answer: 0,
    explain: 'Rate depends on how many successful collisions happen per second. ΔH tells you about energy released/absorbed, not speed.' },
  { id: 'chem-q12', topic: 'chemistry', outcome: 'chem-o5', q: 'Which unit is appropriate for a reaction rate?', options: ['mol L<sup>−1</sup>', 'Hz', 'mL s<sup>−1</sup>', 'kJ mol<sup>−1</sup>'], answer: 2,
    explain: 'Rate is a change per unit time, e.g. volume of gas per second. mol L<sup>−1</sup> is concentration only, kJ mol<sup>−1</sup> is ΔH, and Hz is not used for reaction rate.' },
  { id: 'chem-q13', topic: 'chemistry', outcome: 'chem-o5', q: 'Marble chips react with HCl in a flask on a balance with a cotton wool plug. Why does the mass decrease?', options: ['The marble chips evaporate', 'Carbon dioxide gas escapes', 'Hydrogen gas escapes', 'Mass is destroyed in the reaction'], answer: 1,
    explain: 'CaCO<sub>3</sub> + 2HCl → CaCl<sub>2</sub> + H<sub>2</sub>O + CO<sub>2</sub>; the CO<sub>2</sub> escapes through the cotton wool. Mass is conserved overall; acid + carbonate does not give H<sub>2</sub>.' },
  { id: 'chem-q14', topic: 'chemistry', outcome: 'chem-o5', q: 'In a graph of volume of gas vs time, the reaction rate at any moment is given by the:', options: ['area under the curve', 'final volume of gas', 'y-intercept', 'gradient (slope) of the curve'], answer: 3,
    explain: 'Rate = Δvolume/Δtime = gradient. The final volume depends on the amount of limiting reactant, not on rate.' },
  { id: 'chem-q15', topic: 'chemistry', outcome: 'chem-o5', q: '40 mL of hydrogen is produced in the first 20 s of a reaction. What is the average rate over this time?', options: ['2 mL s<sup>−1</sup>', '0.5 mL s<sup>−1</sup>', '20 mL s<sup>−1</sup>', '800 mL s<sup>−1</sup>'], answer: 0,
    explain: 'Rate = 40 mL ÷ 20 s = 2 mL s<sup>−1</sup>. 0.5 is time ÷ volume (inverted).' },
  { id: 'chem-q16', topic: 'chemistry', outcome: 'chem-o5', q: 'Why is a volume–time graph for a reaction steepest at the start?', options: ['The catalyst is most active at the start', 'The temperature is highest at the start', 'Reactant concentration is highest at the start, so collisions are most frequent', 'Products speed up the reaction'], answer: 2,
    explain: 'At the start there are the most reactant particles per volume, so collisions are most frequent. As reactants are used up the gradient decreases until it is flat.' },
  { id: 'chem-q17', topic: 'chemistry', outcome: 'chem-o6', q: 'A student is reacting hydrochloric acid with zinc granules in a beaker. Which would increase the rate of this reaction?', options: ['Decreasing the temperature', 'Adding water to the beaker', 'Using a test tube instead of a beaker', 'Cutting the zinc into smaller pieces'], answer: 3,
    explain: 'Smaller pieces increase surface area → more zinc particles exposed → more frequent collisions. Adding water dilutes the acid (slower); lowering temperature slows it; the container shape has no real effect.', source: '2024 Yearly Q7' },
  { id: 'chem-q18', topic: 'chemistry', outcome: 'chem-o6', q: 'Which of the following does NOT affect the reaction rate?', options: ['Concentration of a solution', 'Addition of a catalyst', 'Amount of reactant (when in excess)', 'Surface area of a solid'], answer: 2,
    explain: 'Adding more of a reactant at the same concentration and particle size does not increase the frequency of collisions – it just makes the reaction last longer.', source: '2022 Yearly Q14' },
  { id: 'chem-q19', topic: 'chemistry', outcome: 'chem-o6', q: 'The MAIN reason increasing temperature increases reaction rate is that:', options: ['a greater proportion of collisions have energy equal to or greater than E<sub>a</sub>', 'the activation energy decreases', 'particles become larger', 'the concentration increases'], answer: 0,
    explain: 'Faster particles collide more often, but the bigger effect is that more collisions have enough energy to react. Temperature does not change E<sub>a</sub> – that is what a catalyst does.' },
  { id: 'chem-q20', topic: 'chemistry', outcome: 'chem-o6', q: 'Increasing the pressure of a gaseous reaction increases its rate because:', options: ['the gas particles gain kinetic energy', 'the activation energy is lowered', 'the products are removed', 'the particles are closer together so they collide more frequently'], answer: 3,
    explain: 'Higher pressure = same particles in smaller volume = higher concentration → more frequent collisions. Kinetic energy depends on temperature, not pressure.' },
  { id: 'chem-q21', topic: 'chemistry', outcome: 'chem-o6', q: 'Equal masses of CaCO<sub>3</sub> are added to excess 1 mol L<sup>−1</sup> HCl as (I) large lumps and (II) powder. Compared with (I), (II) will:', options: ['react faster and produce more CO<sub>2</sub>', 'react faster and produce the same total volume of CO<sub>2</sub>', 'react at the same rate and produce more CO<sub>2</sub>', 'react slower and produce the same total volume of CO<sub>2</sub>'], answer: 1,
    explain: 'Powder has a larger surface area → faster rate. The same mass of CaCO<sub>3</sub> (limiting reactant) produces the same total volume of gas.' },
  { id: 'chem-q22', topic: 'chemistry', outcome: 'chem-o6', q: 'Stirring a mixture of a solid and a solution increases the rate because it:', options: ['lowers the activation energy', 'increases the temperature significantly', 'increases the concentration of the solution', 'brings fresh reactant particles into contact with the solid surface'], answer: 3,
    explain: 'Agitation moves products away and fresh solution particles to the solid, increasing collision frequency. It does not change E<sub>a</sub> or the overall concentration.' },
  { id: 'chem-q23', topic: 'chemistry', outcome: 'chem-o6', q: 'A student investigates the effect of HCl concentration on the rate of reaction with Mg ribbon. Which is a controlled variable?', options: ['Concentration of HCl', 'Time for the Mg to disappear', 'Length of Mg ribbon', 'Rate of reaction'], answer: 2,
    explain: 'Concentration is the independent variable; time/rate is the dependent variable. Length (mass) of magnesium must be kept the same.' },
  { id: 'chem-q24', topic: 'chemistry', outcome: 'chem-o6', q: 'Food is stored in a refrigerator to slow spoiling. This is because lower temperature:', options: ['denatures all bacteria', 'reduces the frequency and energy of collisions so reactions are slower', 'increases activation energy', 'removes oxygen'], answer: 1,
    explain: 'Cooler particles move more slowly; fewer collisions and a smaller fraction have energy ≥ E<sub>a</sub>. Activation energy itself is unchanged and cold does not denature enzymes.' },
  { id: 'chem-q25', topic: 'chemistry', outcome: 'chem-o7', q: 'A catalyst increases the rate of a reaction by:', options: ['providing an alternative pathway with lower activation energy', 'increasing the kinetic energy of particles', 'increasing the concentration of reactants', 'making ΔH more negative'], answer: 0,
    explain: 'Catalysts lower E<sub>a</sub> via a different mechanism, so more collisions are successful. They do not heat particles or change ΔH.' },
  { id: 'chem-q26', topic: 'chemistry', outcome: 'chem-o7', q: '1.0 g of MnO<sub>2</sub> is added to hydrogen peroxide; oxygen is rapidly produced. After filtering and drying, the mass of MnO<sub>2</sub> would be:', options: ['less than 1.0 g, because it was used up', 'more than 1.0 g, because oxygen was absorbed', '0 g, because it dissolved', '1.0 g, because a catalyst is not consumed'], answer: 3,
    explain: 'A catalyst is chemically unchanged at the end of the reaction, so the same mass is recovered.' },
  { id: 'chem-q27', topic: 'chemistry', outcome: 'chem-o7', q: 'Which statement about catalysts is FALSE?', options: ['They are not consumed in the reaction', 'They increase the yield (amount) of product', 'They lower the activation energy', 'Only small amounts are needed'], answer: 1,
    explain: 'Catalysts only speed up the reaction; the amount of product is set by the amount of limiting reactant.' },
  { id: 'chem-q28', topic: 'chemistry', outcome: 'chem-o8', q: 'Enzymes are best described as:', options: ['biological catalysts made of protein', 'carbohydrates that store energy', 'reactants consumed in digestion', 'hormones that control growth'], answer: 0,
    explain: 'Enzymes are proteins that catalyse reactions in living organisms; they are not consumed.' },
  { id: 'chem-q29', topic: 'chemistry', outcome: 'chem-o8', q: 'Why does an enzyme catalyse only one type of reaction?', options: ['Its active site has a specific shape complementary to only one substrate', 'It is used up after one reaction', 'It only works at 37 °C', 'It can only lower activation energy once'], answer: 0,
    explain: 'Specificity comes from the shape of the active site – only a substrate with the complementary shape binds (lock-and-key / induced fit).' },
  { id: 'chem-q30', topic: 'chemistry', outcome: 'chem-o8', q: 'The rate of an enzyme reaction drops sharply above 45 °C because:', options: ['particles move too slowly', 'the substrate is used up', 'the enzyme is denatured and its active site changes shape', 'the activation energy becomes zero'], answer: 2,
    explain: 'High temperature breaks the bonds holding the protein’s shape, so the active site no longer fits the substrate. Particles move faster, not slower, at higher temperature.' },
  { id: 'chem-q31', topic: 'chemistry', outcome: 'chem-o8', q: 'Which enzyme breaks down starch into maltose?', options: ['Lipase', 'Catalase', 'Pepsin', 'Amylase'], answer: 3,
    explain: 'Amylase (in saliva and from the pancreas) digests starch. Lipase digests fats, pepsin digests proteins, catalase breaks down hydrogen peroxide.' },
  { id: 'chem-q32', topic: 'chemistry', outcome: 'chem-o8', q: 'The induced-fit model differs from the lock-and-key model because it proposes that:', options: ['the active site changes shape slightly when the substrate binds', 'enzymes are consumed in the reaction', 'any substrate can bind to any enzyme', 'the substrate changes the enzyme permanently'], answer: 0,
    explain: 'In induced fit the active site is flexible and moulds around the substrate; the enzyme returns to its original shape after the products leave.' },
  { id: 'chem-q33', topic: 'chemistry', outcome: 'chem-o9', q: 'Two beakers: (1) nickel metal in magnesium sulfate solution; (2) magnesium metal in nickel sulfate solution. In which beaker does a reaction occur?', options: ['Beaker 1 only', 'Beaker 2 only', 'Both beakers', 'Neither beaker'], answer: 1,
    explain: 'Mg is more reactive than Ni, so Mg displaces Ni<sup>2+</sup> from NiSO<sub>4</sub>. Ni cannot displace the more reactive Mg.', source: '2024 Yearly Q31(a)' },
  { id: 'chem-q34', topic: 'chemistry', outcome: 'chem-o9', q: 'Which metal will NOT displace copper from copper(II) sulfate solution?', options: ['Zinc', 'Iron', 'Silver', 'Magnesium'], answer: 2,
    explain: 'Silver is below copper in the activity series, so it cannot displace Cu<sup>2+</sup>. Zn, Fe and Mg are all above copper.' },
  { id: 'chem-q35', topic: 'chemistry', outcome: 'chem-o9', q: 'An iron nail is placed in blue copper(II) sulfate solution. Which observation is expected?', options: ['Bubbles of hydrogen and the solution turns colourless', 'No change', 'A silver coating forms on the nail', 'A pink-brown coating forms on the nail and the blue colour fades'], answer: 3,
    explain: 'Fe displaces Cu: copper (pink-brown) deposits on the nail and Cu<sup>2+</sup> (blue) is removed, so the colour fades (towards pale green Fe<sup>2+</sup>).' },
  { id: 'chem-q36', topic: 'chemistry', outcome: 'chem-o9', q: 'Metal X reacts with Pb(NO<sub>3</sub>)<sub>2</sub> solution but not with Zn(NO<sub>3</sub>)<sub>2</sub> solution. X could be:', options: ['Mg', 'Fe', 'Cu', 'Ag'], answer: 1,
    explain: 'X lies between Zn and Pb in the series. Fe is below Zn and above Pb. Mg would react with both; Cu and Ag with neither.' },
  { id: 'chem-q37', topic: 'chemistry', outcome: 'chem-o9', q: 'Which is the correct balanced equation for magnesium reacting with nickel sulfate solution?', options: ['Mg(s) + NiSO<sub>4</sub>(aq) → MgSO<sub>4</sub>(aq) + Ni(s)', 'Mg(aq) + NiSO<sub>4</sub>(s) → MgSO<sub>4</sub>(s) + Ni(aq)', 'Mg(s) + Ni<sub>2</sub>SO<sub>4</sub>(aq) → MgSO<sub>4</sub>(aq) + 2Ni(s)', 'Mg(s) + NiSO<sub>4</sub>(aq) → Mg<sub>2</sub>SO<sub>4</sub>(aq) + Ni(s)'], answer: 0,
    explain: 'Mg<sup>2+</sup> and Ni<sup>2+</sup> both combine 1:1 with SO<sub>4</sub><sup>2−</sup>. Metals are (s), salts in solution are (aq).', source: '2024 Yearly Q31(d)' },
  { id: 'chem-q38', topic: 'chemistry', outcome: 'chem-o10', q: 'Which species is being reduced in the reaction 2Al + Fe<sub>2</sub>O<sub>3</sub> → Al<sub>2</sub>O<sub>3</sub> + 2Fe?', options: ['Aluminium', 'Iron(III) oxide', 'Aluminium oxide', 'Iron'], answer: 1,
    explain: 'Fe goes from +3 in Fe<sub>2</sub>O<sub>3</sub> to 0 (gains electrons/loses oxygen) so iron(III) oxide is reduced. Al (0 → +3) is oxidised. Products (Al<sub>2</sub>O<sub>3</sub>, Fe) are not ‘being reduced’.', source: '2024 Yearly Q19 (equation balanced)' },
  { id: 'chem-q39', topic: 'chemistry', outcome: 'chem-o10', q: 'Oxidation is best defined as:', options: ['gain of electrons', 'decrease in oxidation number', 'loss of electrons', 'gain of hydrogen'], answer: 2,
    explain: 'OIL RIG – oxidation is loss of electrons (oxidation number increases). Gain of electrons, decrease in oxidation number and gain of hydrogen all describe reduction.' },
  { id: 'chem-q40', topic: 'chemistry', outcome: 'chem-o10', q: 'What is the oxidation number of sulfur in H<sub>2</sub>SO<sub>4</sub>?', options: ['+2', '+4', '−2', '+6'], answer: 3,
    explain: '2(+1) + S + 4(−2) = 0 → S = +6. +4 is sulfur in SO<sub>2</sub>.' },
  { id: 'chem-q41', topic: 'chemistry', outcome: 'chem-o10', q: 'What is the oxidation number of manganese in KMnO<sub>4</sub>?', options: ['+7', '+4', '+2', '−1'], answer: 0,
    explain: '+1 + Mn + 4(−2) = 0 → Mn = +7.' },
  { id: 'chem-q42', topic: 'chemistry', outcome: 'chem-o10', q: 'In Zn(s) + Cu<sup>2+</sup>(aq) → Zn<sup>2+</sup>(aq) + Cu(s), the oxidising agent is:', options: ['Zn(s)', 'Zn<sup>2+</sup>(aq)', 'Cu(s)', 'Cu<sup>2+</sup>(aq)'], answer: 3,
    explain: 'Cu<sup>2+</sup> gains electrons (is reduced), so it is the oxidising agent – it causes Zn to be oxidised. Zn is the reducing agent.' },
  { id: 'chem-q43', topic: 'chemistry', outcome: 'chem-o10', q: 'Which half-equation represents an oxidation?', options: ['Ag<sup>+</sup> + e<sup>−</sup> → Ag', 'Fe → Fe<sup>2+</sup> + 2e<sup>−</sup>', 'Cl<sub>2</sub> + 2e<sup>−</sup> → 2Cl<sup>−</sup>', 'O<sub>2</sub> + 2H<sub>2</sub>O + 4e<sup>−</sup> → 4OH<sup>−</sup>'], answer: 1,
    explain: 'In oxidation electrons are lost, so they appear on the product (right) side. The others gain electrons (reduction).' },
  { id: 'chem-q44', topic: 'chemistry', outcome: 'chem-o10', q: 'Combine Al → Al<sup>3+</sup> + 3e<sup>−</sup> and Cu<sup>2+</sup> + 2e<sup>−</sup> → Cu. The balanced overall equation is:', options: ['Al + Cu<sup>2+</sup> → Al<sup>3+</sup> + Cu', '3Al + 2Cu<sup>2+</sup> → 3Al<sup>3+</sup> + 2Cu', '2Al + 3Cu<sup>2+</sup> → 2Al<sup>3+</sup> + 3Cu', '2Al + 3Cu → 2Al<sup>3+</sup> + 3Cu<sup>2+</sup>'], answer: 2,
    explain: 'Multiply the Al half by 2 (6e<sup>−</sup> lost) and Cu half by 3 (6e<sup>−</sup> gained). Check charge: left 3 × 2+ = 6+, right 2 × 3+ = 6+. A is not charge-balanced.' },
  { id: 'chem-q45', topic: 'chemistry', outcome: 'chem-o10b', q: 'In a zinc–copper galvanic cell, electrons flow:', options: ['from copper to zinc through the salt bridge', 'from zinc to copper through the external wire', 'from zinc to copper through the salt bridge', 'from copper to zinc through the external wire'], answer: 1,
    explain: 'Zn (more reactive) is the anode where electrons are released; they travel through the wire to the Cu cathode. Electrons never pass through the salt bridge – ions do.' },
  { id: 'chem-q46', topic: 'chemistry', outcome: 'chem-o10b', q: 'The purpose of the KNO<sub>3</sub> salt bridge in a galvanic cell is to:', options: ['allow electrons to flow between the half-cells', 'provide K<sup>+</sup> ions to be reduced at the cathode', 'allow ions to migrate to maintain electrical neutrality in each half-cell', 'increase the voltage of the cell'], answer: 2,
    explain: 'Ions move through the salt bridge (NO<sub>3</sub><sup>−</sup> to the anode side, K<sup>+</sup> to the cathode side), balancing the charge and completing the circuit. K<sup>+</sup> is not reduced; Cu<sup>2+</sup> is.', source: '2024 Yearly Q31(c)' },
  { id: 'chem-q47', topic: 'chemistry', outcome: 'chem-o10b', q: 'Using the data sheet, what is E°<sub>cell</sub> for a Mg/Ni galvanic cell? (Mg<sup>2+</sup>/Mg −2.36 V; Ni<sup>2+</sup>/Ni −0.24 V)', options: ['2.60 V', '−2.12 V', '2.12 V', '0.24 V'], answer: 2,
    explain: 'Mg (more negative) is the anode. E°cell = E°cathode − E°anode = −0.24 − (−2.36) = +2.12 V. Adding the values gives the wrong 2.60 V.' },
  { id: 'chem-q48', topic: 'chemistry', outcome: 'chem-o10b', q: 'In a Zn/Cu galvanic cell, which electrode increases in mass?', options: ['Copper cathode', 'Zinc anode', 'Copper anode', 'Zinc cathode'], answer: 0,
    explain: 'At the cathode Cu<sup>2+</sup> + 2e<sup>−</sup> → Cu deposits copper (mass increases). The zinc anode dissolves as Zn<sup>2+</sup> (mass decreases). Cu is the cathode, not anode.' },
  { id: 'chem-q49', topic: 'chemistry', outcome: 'chem-o10b', q: 'Which pair of metals would produce the LARGEST voltage in a galvanic cell?', options: ['Zn and Fe', 'Cu and Ag', 'Mg and Ag', 'Pb and Cu'], answer: 2,
    explain: 'Largest difference in E°: Ag (+0.80) − Mg (−2.36) = 3.16 V. Zn/Fe = 0.32 V, Cu/Ag = 0.46 V, Pb/Cu = 0.47 V.' },
  { id: 'chem-q50', topic: 'chemistry', outcome: 'chem-o10b', q: 'Which statement correctly distinguishes an electrolytic cell from a galvanic cell?', options: ['An electrolytic cell uses an external power source to drive a non-spontaneous reaction', 'An electrolytic cell produces electricity from a spontaneous reaction', 'Oxidation occurs at the cathode in an electrolytic cell', 'Electrolytic cells do not involve redox'], answer: 0,
    explain: 'Electrolytic cells convert electrical energy into chemical energy (e.g. electroplating). Oxidation is still at the anode in both cell types; both involve redox.' },
  { id: 'chem-q51', topic: 'chemistry', outcome: 'chem-o10b', q: 'In the cell Fe(s) | Fe<sup>2+</sup>(aq) || Ag<sup>+</sup>(aq) | Ag(s), which is correct?', options: ['Fe is the cathode; E°cell = 0.36 V', 'Ag is the anode; E°cell = 1.24 V', 'Fe is the anode; E°cell = 0.36 V', 'Fe is the anode; E°cell = 1.24 V'], answer: 3,
    explain: 'The anode is written on the left (Fe, more negative E°). E°cell = 0.80 − (−0.44) = 1.24 V. 0.36 V comes from wrongly adding the values.' },
  { id: 'chem-q52', topic: 'chemistry', outcome: 'chem-o11', q: 'Which of the following best defines corrosion?', options: ['The process by which a metal reacts to form a metal oxide', 'The gradual breakdown of a metal due to chemical reactions with the environment', 'Metals becoming more conductive over time due to exposure to air', 'The formation of rust on iron after exposure to salt and water'], answer: 1,
    explain: 'Corrosion is the general gradual deterioration of metals by reaction with their environment. D describes only rusting (one example); A is too narrow (products are not always oxides).', source: '2024 Yearly Q8' },
  { id: 'chem-q53', topic: 'chemistry', outcome: 'chem-o11', q: 'An iron nail is placed in each test tube for a week. Which nail will rust MOST?', options: ['In dry air with anhydrous calcium chloride', 'In boiled water covered with a layer of oil', 'In salty water open to the air', 'In distilled water open to the air'], answer: 2,
    explain: 'Rusting needs O<sub>2</sub> and water; salt makes the water a better electrolyte and speeds corrosion. A has no water, B has no oxygen, D rusts but more slowly than salt water.' },
  { id: 'chem-q54', topic: 'chemistry', outcome: 'chem-o11', q: 'Which metal would be most suitable as a sacrificial anode to protect a steel ship hull?', options: ['Copper', 'Tin', 'Lead', 'Zinc'], answer: 3,
    explain: 'The sacrificial metal must be MORE reactive than iron so it is oxidised instead. Zn (−0.76 V) is above Fe (−0.44 V); Cu, Sn and Pb are less reactive and would make iron corrode faster.' },
  { id: 'chem-q55', topic: 'chemistry', outcome: 'chem-o11', q: 'Aluminium is more reactive than iron, yet aluminium window frames do not corrode noticeably. This is because:', options: ['aluminium is below iron in the activity series', 'aluminium forms a thin, tough oxide layer that protects the metal underneath', 'aluminium does not react with oxygen', 'aluminium is always painted'], answer: 1,
    explain: 'Al<sub>2</sub>O<sub>3</sub> forms quickly, adheres strongly and is non-porous, sealing the metal from O<sub>2</sub> and water. Rust, by contrast, is porous and flakes off.' },
  { id: 'chem-q56', topic: 'chemistry', outcome: 'chem-o11', q: 'A galvanised (zinc-coated) bucket is scratched through to the iron. What happens?', options: ['The iron rusts rapidly because zinc is less reactive', 'The zinc corrodes in preference to the iron, protecting it', 'Nothing reacts', 'The iron is oxidised and the zinc is reduced'], answer: 1,
    explain: 'Zinc is more reactive than iron, so it acts as a sacrificial anode and is oxidised instead of iron, even where scratched. (Scratched tin plating behaves the opposite way.)' },
  { id: 'chem-q57', topic: 'chemistry', outcome: 'chem-o11', q: 'Which metal is LEAST likely to corrode?', options: ['Magnesium', 'Iron', 'Zinc', 'Silver'], answer: 3,
    explain: 'The lower a metal is in the activity series, the less readily it is oxidised. Silver is lowest of these.' }
);

SD.saq.push(
  { id: 'chem-s1', topic: 'chemistry', outcome: 'chem-o6', marks: 3, source: '2024 Yearly Q26',
    q: 'Explain the effect of decreasing concentration on a chemical reaction using collision theory.',
    criteria: ['Refers to collision theory: successful collisions (sufficient energy and correct orientation) are required for a reaction', 'Explains that decreasing concentration means fewer particles per unit volume, so fewer collisions per unit time', 'Identifies that the reaction rate decreases'],
    model: `According to collision theory, reactant particles must collide with at least the activation energy and the correct orientation for a reaction to occur (a successful collision). Decreasing the concentration reduces the number of reactant particles per unit volume, so particles collide less frequently and there are fewer successful collisions per second. Therefore the rate of reaction decreases.`,
    keywords: ['collision theory', 'successful collisions', 'particles per unit volume', 'frequency', 'activation energy', 'rate decreases'] },
  { id: 'chem-s2', topic: 'chemistry', outcome: 'chem-o3', marks: 3, source: '2024 Yearly Q27 (adapted)',
    q: 'An energy profile shows the products at a higher energy than the reactants. (a) Identify the type of reaction in terms of energy transfer. (b) Describe where the activation energy is shown and how the profile would change if a catalyst were added.',
    criteria: ['Endothermic', 'Activation energy shown as the energy difference from the reactants to the top of the peak', 'Catalysed profile: lower peak starting and finishing at the same reactant and product levels (ΔH unchanged)'],
    model: `(a) Endothermic (products have more energy than reactants, ΔH positive).<br>(b) The activation energy is an arrow from the reactant energy level up to the top of the peak (transition state). With a catalyst the curve would follow a lower hump – a smaller activation energy – but start at the same reactant level and end at the same product level, so ΔH is unchanged.`,
    keywords: ['endothermic', 'activation energy', 'reactants', 'peak', 'catalyst', 'lower', 'same δh'] },
  { id: 'chem-s3', topic: 'chemistry', outcome: 'chem-pre', marks: 2, source: '2022 Yearly Section C Q4',
    q: 'Solutions of aluminium bromide and potassium sulfate are mixed to form potassium bromide and aluminium sulfate. No precipitate is formed. Write a balanced chemical equation with states for this reaction.',
    criteria: ['Correct formulae for all reactants and products, following equation conventions', 'Correctly balanced with correct states'],
    model: `2AlBr<sub>3</sub>(aq) + 3K<sub>2</sub>SO<sub>4</sub>(aq) → 6KBr(aq) + Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>(aq)`,
    keywords: ['albr3', 'k2so4', 'kbr', 'al2(so4)3', 'aq', 'balanced'] },
  { id: 'chem-s4', topic: 'chemistry', outcome: 'chem-o10b', marks: 6, source: '2024 Yearly Q31',
    q: 'A student set up Beaker 1 (nickel metal in magnesium sulfate solution) and Beaker 2 (magnesium metal in nickel sulfate solution). A metal was deposited in one beaker only. They then built a galvanic cell from a Mg electrode in MgSO<sub>4</sub>(aq) and a Ni electrode in NiSO<sub>4</sub>(aq) joined by a KNO<sub>3</sub> salt bridge. (a) Identify which beaker had a reaction. (1) (b) State the direction of electron flow in the cell. (1) (c) Outline the purpose of the KNO<sub>3</sub> salt bridge. (1) (d) Write a balanced chemical equation for the cell reaction, including states. (3)',
    criteria: ['(a) Beaker 2 – Mg is more reactive than Ni and displaces it', '(b) Electrons flow from the Mg electrode (anode) to the Ni electrode (cathode) through the external wire', '(c) Allows ions to migrate between half-cells to maintain electrical neutrality / complete the circuit', '(d) Correct formulae of reactants and products', '(d) Equation balanced', '(d) Correct states'],
    model: `(a) Beaker 2, because magnesium is higher than nickel in the activity series so it displaces Ni<sup>2+</sup> ions.<br>(b) From the magnesium anode, through the external wire, to the nickel cathode.<br>(c) The salt bridge allows ions to move between the half-cells (NO<sub>3</sub><sup>−</sup> towards the Mg half-cell, K<sup>+</sup> towards the Ni half-cell) to keep each solution electrically neutral and complete the circuit.<br>(d) Mg(s) + NiSO<sub>4</sub>(aq) → MgSO<sub>4</sub>(aq) + Ni(s) &nbsp;(ionic: Mg(s) + Ni<sup>2+</sup>(aq) → Mg<sup>2+</sup>(aq) + Ni(s))`,
    keywords: ['beaker 2', 'more reactive', 'anode', 'cathode', 'external wire', 'ions', 'electrical neutrality', 'mgso4'] },
  { id: 'chem-s5', topic: 'chemistry', outcome: 'chem-o10b', marks: 4, source: '2022 Yearly Section C Q3 (adapted)',
    q: 'Describe a galvanic cell made from zinc and copper electrodes in zinc sulfate and copper sulfate, with a salt bridge and voltmeter. Include the anode, cathode, half-equations and direction of electron flow.',
    criteria: ['Zinc electrode in ZnSO<sub>4</sub> and copper electrode in CuSO<sub>4</sub>, connected by a wire through a voltmeter and by a salt bridge', 'Zinc is the anode (oxidation: Zn → Zn<sup>2+</sup> + 2e<sup>−</sup>)', 'Copper is the cathode (reduction: Cu<sup>2+</sup> + 2e<sup>−</sup> → Cu)', 'Electrons flow from zinc to copper through the external wire'],
    model: `Two half-cells: a zinc strip in ZnSO<sub>4</sub>(aq) and a copper strip in CuSO<sub>4</sub>(aq). The electrodes are joined by a wire through a voltmeter (reads ~1.10 V) and the solutions are joined by a salt bridge (filter paper soaked in KNO<sub>3</sub>). Zinc is more reactive so it is the anode (negative), where oxidation occurs: Zn(s) → Zn<sup>2+</sup>(aq) + 2e<sup>−</sup>. Copper is the cathode (positive), where reduction occurs: Cu<sup>2+</sup>(aq) + 2e<sup>−</sup> → Cu(s). Electrons flow from the zinc to the copper through the wire, while ions move through the salt bridge.`,
    keywords: ['anode', 'cathode', 'zinc', 'copper', 'salt bridge', 'voltmeter', 'oxidation', 'reduction', 'electron flow'] },
  { id: 'chem-s6', topic: 'chemistry', outcome: 'chem-o2', marks: 3,
    q: 'Explain, in terms of bond breaking and bond making, why the combustion of methane is exothermic.',
    criteria: ['Energy is absorbed to break bonds in reactants (C–H, O=O)', 'Energy is released when new bonds form in products (C=O, O–H)', 'More energy released than absorbed → net release to surroundings; ΔH negative'],
    model: `Breaking the C–H bonds in methane and O=O bonds in oxygen absorbs energy. Forming the C=O bonds in carbon dioxide and O–H bonds in water releases energy. Because more energy is released forming the new bonds than is absorbed breaking the old ones, there is a net release of energy (heat and light) to the surroundings, so the reaction is exothermic and ΔH is negative.`,
    keywords: ['bond breaking', 'absorbs', 'bond making', 'releases', 'net', 'surroundings', 'negative'] },
  { id: 'chem-s7', topic: 'chemistry', outcome: 'chem-o6', marks: 3,
    q: 'Explain why magnesium ribbon reacts faster with hydrochloric acid at 50 °C than at 20 °C.',
    criteria: ['Particles have more kinetic energy / move faster at higher temperature', 'More frequent collisions AND a greater proportion of collisions have energy ≥ activation energy', 'More successful collisions per second so rate increases'],
    model: `At 50 °C the acid particles have more kinetic energy and move faster. They therefore collide with the magnesium more frequently, and, more importantly, a greater proportion of the collisions have energy equal to or greater than the activation energy. This produces more successful collisions per second, so the rate of reaction is higher.`,
    keywords: ['kinetic energy', 'faster', 'more frequent', 'proportion', 'activation energy', 'successful collisions'] },
  { id: 'chem-s8', topic: 'chemistry', outcome: 'chem-o8', marks: 4,
    q: 'Explain how enzymes speed up reactions in living organisms and why their activity decreases at high temperatures.',
    criteria: ['Enzymes are biological (protein) catalysts that lower activation energy / provide an alternative pathway', 'Substrate binds to the specific active site forming an enzyme–substrate complex (lock-and-key/induced fit)', 'High temperature breaks bonds holding the enzyme’s shape, changing the active site (denaturation)', 'Substrate no longer fits so the rate decreases'],
    model: `Enzymes are protein catalysts. The substrate binds to the enzyme’s active site, which has a complementary shape (lock-and-key, or induced fit where the site moulds around the substrate), forming an enzyme–substrate complex. This provides an alternative pathway with lower activation energy, so reactions happen rapidly at body temperature and the enzyme is released unchanged. Above the optimum temperature the bonds that hold the enzyme’s 3D shape break, changing the shape of the active site (denaturation). The substrate can no longer bind, so the reaction rate falls sharply.`,
    keywords: ['catalyst', 'protein', 'active site', 'substrate', 'activation energy', 'denatured', 'shape', 'optimum'] },
  { id: 'chem-s9', topic: 'chemistry', outcome: 'chem-o11', marks: 5,
    q: 'Design an investigation to compare methods of preventing the corrosion of iron objects submerged in salt water.',
    criteria: ['Identifies independent variable (protection methods, including an untreated control)', 'Identifies dependent variable and how it is measured (mass change / rust observed after a set time)', 'Identifies at least two controlled variables', 'Describes a clear, repeatable procedure with repetition', 'States an appropriate safety consideration or expected result'],
    model: `Clean six identical iron nails with sandpaper and weigh them. Leave one untreated (control); paint one; coat one in grease; use a galvanised nail; wrap one tightly in magnesium ribbon; wrap one in copper wire. Place each in a separate test tube containing 20 mL of 3% salt water, open to the air, at room temperature for 7 days. IV: protection method. DV: corrosion – remove nails, rinse, dry and reweigh (mass loss) and rate rust visually. Controlled: nail size/type, volume and concentration of salt water, temperature, time. Repeat with three nails per treatment and average. Expect Mg and galvanised nails to corrode least (sacrificial protection) and the Cu-wrapped nail most. Wear safety glasses; handle sharp nails carefully.`,
    keywords: ['independent variable', 'dependent variable', 'control', 'mass', 'salt water', 'galvanised', 'sacrificial', 'repeat'] },
  { id: 'chem-s10', topic: 'chemistry', outcome: 'chem-o11', marks: 3,
    q: 'Explain why galvanised iron still resists rusting when scratched, whereas scratched tin-plated iron rusts faster than uncoated iron.',
    criteria: ['Zinc is more reactive than iron so it is oxidised instead (sacrificial protection)', 'Tin is less reactive than iron', 'When tin is scratched the iron becomes the anode and is oxidised preferentially'],
    model: `Zinc is above iron in the activity series, so where galvanised iron is scratched the zinc is oxidised in preference and supplies electrons to the iron, which acts as the cathode and does not rust. Tin is below iron, so when tin plating is scratched the exposed iron becomes the anode of a small galvanic cell and is oxidised even faster than uncoated iron; tin only works as a barrier.`,
    keywords: ['zinc', 'more reactive', 'sacrificial', 'tin', 'less reactive', 'anode', 'oxidised', 'barrier'] },
  { id: 'chem-s11', topic: 'chemistry', outcome: 'chem-o10b', marks: 2,
    q: 'Calculate the standard cell potential of a magnesium–copper galvanic cell and identify the anode. (Mg<sup>2+</sup>/Mg −2.36 V; Cu<sup>2+</sup>/Cu +0.34 V)',
    criteria: ['Identifies magnesium as the anode', 'E°cell = 0.34 − (−2.36) = 2.70 V with working'],
    model: `Magnesium has the more negative E°, so it is the anode (oxidised). E°cell = E°cathode − E°anode = 0.34 − (−2.36) = <b>+2.70 V</b>.`,
    keywords: ['magnesium', 'anode', 'cathode', '2.70', 'e°cell'] },
  { id: 'chem-s12', topic: 'chemistry', outcome: 'chem-o10', marks: 3,
    q: 'For the reaction Zn(s) + CuSO<sub>4</sub>(aq) → ZnSO<sub>4</sub>(aq) + Cu(s), use oxidation numbers to identify the species oxidised and reduced, and the oxidising agent.',
    criteria: ['Zn: 0 → +2, oxidised (loses electrons)', 'Cu: +2 → 0, Cu<sup>2+</sup> reduced (gains electrons)', 'Cu<sup>2+</sup> (CuSO<sub>4</sub>) is the oxidising agent (Zn the reducing agent)'],
    model: `Zinc changes from 0 in Zn(s) to +2 in ZnSO<sub>4</sub>: its oxidation number increases, so zinc is oxidised (loses 2 electrons). Copper changes from +2 in CuSO<sub>4</sub> to 0 in Cu(s): its oxidation number decreases, so Cu<sup>2+</sup> is reduced. Cu<sup>2+</sup> is therefore the oxidising agent and Zn is the reducing agent. Sulfate (+6 S, −2 O) is unchanged – a spectator ion.`,
    keywords: ['oxidation number', 'oxidised', 'reduced', 'oxidising agent', 'reducing agent', 'electrons', 'spectator'] },
  { id: 'chem-s13', topic: 'chemistry', outcome: 'chem-o6', marks: 3, source: '2022 Yearly Section C Q1',
    q: 'Hydrochloric acid was added to identical masses of sodium carbonate crystals in four test tubes, producing 38, 35, 25 and 8 mL of gas after 3 minutes. (a) Suggest one variable that may have caused the different rates. (1) (b) Suggest TWO ways this variable should have been controlled to make the experiment valid. (2)',
    criteria: ['(a) Identifies a valid variable: concentration of HCl, surface area of crystals, or temperature', '(b) First appropriate method of controlling the chosen variable', '(b) Second appropriate method of controlling the chosen variable'],
    model: `(a) Surface area of the sodium carbonate crystals (different crystal sizes).<br>(b) Crush and sieve all the crystals to the same particle size, or use crystals from the same batch/supplier; and treat each tube identically – either stir/agitate all tubes the same way or none of them. (For temperature: perform all trials in the same room at the same time / pre-heat acid in a water bath to the same temperature. For concentration: use acid from the same bottle and volumetrically measured.)`,
    keywords: ['surface area', 'concentration', 'temperature', 'controlled', 'valid', 'same'] },
  { id: 'chem-s14', topic: 'chemistry', outcome: 'chem-o5', marks: 4,
    q: 'Define reaction rate and describe TWO methods that could be used to measure the rate of the reaction between calcium carbonate and hydrochloric acid.',
    criteria: ['Defines rate as change in concentration/amount of reactant or product per unit time', 'Method 1 described: collect CO<sub>2</sub> in a gas syringe / inverted measuring cylinder and record volume at regular intervals', 'Method 2 described: flask with cotton wool plug on a balance, record mass loss at regular intervals', 'Rate obtained as gradient / amount ÷ time with appropriate units'],
    model: `Reaction rate is the change in concentration (or amount) of a reactant or product per unit time. Method 1: connect the flask to a gas syringe and record the volume of CO<sub>2</sub> every 15 s; rate = volume ÷ time (mL s<sup>−1</sup>), or the gradient of the volume–time graph. Method 2: place the flask, plugged with cotton wool, on an electronic balance and record the mass every 15 s; the mass decreases as CO<sub>2</sub> escapes, so rate = mass lost ÷ time (g s<sup>−1</sup>).`,
    keywords: ['change', 'per unit time', 'gas syringe', 'volume', 'mass loss', 'balance', 'gradient'] },
  { id: 'chem-s15', topic: 'chemistry', outcome: 'chem-o7', marks: 6,
    q: 'Using collision theory and an energy profile, explain how surface area, concentration and a catalyst each affect the rate of a reaction.',
    criteria: ['States collision theory requirements (collide, energy ≥ E<sub>a</sub>, orientation)', 'Surface area: more exposed particles → more frequent collisions → faster', 'Concentration: more particles per volume → more frequent collisions → faster', 'Catalyst: alternative pathway with lower E<sub>a</sub>', 'Catalyst: greater proportion of collisions successful; not consumed; ΔH unchanged', 'Correctly describes catalysed energy profile (lower peak, same reactant/product levels)'],
    model: `Collision theory states that reacting particles must collide with at least the activation energy and the correct orientation. Increasing surface area (e.g. powdering a solid) exposes more particles, so collisions are more frequent and the rate increases. Increasing concentration places more particles in each unit volume, so collisions are more frequent and the rate increases. A catalyst provides an alternative pathway with a lower activation energy; on an energy profile this appears as a lower peak between the same reactant and product levels, so ΔH is unchanged. With a lower E<sub>a</sub>, a greater proportion of collisions have sufficient energy, increasing the number of successful collisions per second. The catalyst is not consumed.`,
    keywords: ['collision theory', 'surface area', 'concentration', 'catalyst', 'activation energy', 'alternative pathway', 'successful collisions', 'energy profile'] }
);

SD.seq.push(
  { id: 'chem-seq1', topic: 'chemistry', title: 'Order the steps of charge flow in a Zn/Cu galvanic cell', items: ['Zinc atoms at the anode are oxidised: Zn → Zn²⁺ + 2e⁻', 'Electrons leave the zinc electrode into the external wire', 'Electrons travel through the wire (and voltmeter) to the copper cathode', 'Cu²⁺ ions at the cathode gain electrons and deposit as copper', 'Ions migrate through the salt bridge to keep both solutions electrically neutral'] },
  { id: 'chem-seq2', topic: 'chemistry', title: 'Order the steps of enzyme action', items: ['Substrate collides with the enzyme’s active site', 'Substrate binds, forming an enzyme–substrate complex', 'Activation energy is lowered and the reaction occurs', 'Enzyme–product complex forms', 'Products are released and the enzyme is free to be reused'] },
  { id: 'chem-seq3', topic: 'chemistry', title: 'Order the steps for combining half-equations into a redox equation', items: ['Write the oxidation half-equation', 'Write the reduction half-equation', 'Multiply so electrons lost equal electrons gained', 'Add the two half-equations together', 'Cancel electrons and any species appearing on both sides', 'Check atoms and charges balance and add states'] },
  { id: 'chem-seq4', topic: 'chemistry', title: 'Order the steps in writing a balanced equation from a word description', items: ['Write the word equation', 'Write correct formulae for each reactant and product', 'Balance using coefficients (never change subscripts)', 'Check every element balances on both sides', 'Add state symbols (and an energy term if required)'] },
  { id: 'chem-seq5', topic: 'chemistry', title: 'Order the stages in the rusting of iron', items: ['Iron is exposed to oxygen and water', 'Iron is oxidised: Fe → Fe²⁺ + 2e⁻', 'Oxygen and water are reduced to hydroxide ions using these electrons', 'Fe²⁺ and OH⁻ form iron(II) hydroxide', 'Further oxidation forms hydrated iron(III) oxide (rust), which flakes off exposing fresh iron'] }
);
