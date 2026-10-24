// Extra topics from Year 10 NOT on the 2026 yearly (for revision if time allows)
SD.topics.push({
  id: 'motion',
  name: 'Objects in Motion',
  short: 'Motion',
  color: '#94a3b8',
  examined: false,
  scope: 'Not on the yearly – SI units, errors, vectors, equations of motion, graphs, Newton\u2019s laws, energy, collisions',
  notes: [
    { id: 'mot-n1', title: 'Outcomes 1–3 · SI units, errors and measuring speed', html: `
<h4>SI units</h4>
<table class="t">
<tr><th>Quantity</th><th>SI unit</th><th>Symbol</th></tr>
<tr><td>Length / distance / displacement</td><td>metre</td><td>m</td></tr>
<tr><td>Mass</td><td>kilogram</td><td>kg</td></tr>
<tr><td>Time</td><td>second</td><td>s</td></tr>
<tr><td>Velocity / speed</td><td>metres per second</td><td>m s<sup>−1</sup></td></tr>
<tr><td>Acceleration</td><td>metres per second squared</td><td>m s<sup>−2</sup></td></tr>
<tr><td>Force / weight</td><td>newton (= kg m s<sup>−2</sup>)</td><td>N</td></tr>
<tr><td>Energy / work</td><td>joule (= N m)</td><td>J</td></tr>
<tr><td>Power</td><td>watt (= J s<sup>−1</sup>)</td><td>W</td></tr>
<tr><td>Frequency</td><td>hertz (= s<sup>−1</sup>)</td><td>Hz</td></tr>
</table>
<p>Other base units: ampere (A), kelvin (K), mole (mol), candela (cd). Always convert to SI before using equations.</p>
<ul>
<li>km/h → m/s: <b>÷ 3.6</b> (72 km/h = 20 m/s). m/s → km/h: × 3.6.</li>
<li>g → kg ÷ 1000; cm → m ÷ 100; minutes → s × 60.</li>
</ul>
<div class="warn">Park\u2019s notes list "Electrical energy – volts": the volt is the unit of <b>potential difference (voltage)</b>; electrical energy is measured in joules. The elementary charge (1.6 × 10<sup>−19</sup> C) is a <b>charge</b>, not an energy.</div>
<h4>Errors</h4>
<ul>
<li><b>Systematic error</b> – consistent shift in one direction (e.g. ruler worn at the end, unzeroed scale); affects accuracy; fix by calibration – repeating does not help.</li>
<li><b>Random error</b> – unpredictable scatter (e.g. stopwatch reaction time); affects precision/reliability; reduce by repeating and averaging.</li>
<li>Bullseye picture: tight cluster off-centre = precise, not accurate (systematic); spread around centre = random error.</li>
</ul>
<h4>Devices that measure speed</h4>
<table class="t">
<tr><th>Device</th><th>How it works</th><th>Pros / cons</th></tr>
<tr><td>Light gates</td><td>Object breaks a light beam; timer records time; speed = length ÷ time (or distance between two gates ÷ time)</td><td>Very accurate, no reaction time; costly, lab only</td></tr>
<tr><td>Radar / laser (lidar) gun</td><td>Radar: change in frequency of reflected waves (Doppler effect). Lidar: timing of laser pulses</td><td>Fast, portable; needs training, can be affected by interference</td></tr>
<tr><td>Speed cameras</td><td>Radar/sensors or two photos a known time apart; point-to-point cameras find average speed = distance ÷ time between cameras</td><td>Automated, improves road safety; only measures speed</td></tr>
<tr><td>Ticker timer</td><td>Dots at a fixed rate on paper tape (see Outcome 6)</td><td>Cheap, shows changing speed; friction on tape</td></tr>
</table>
` },
    { id: 'mot-n2', title: 'Outcomes 4–5 · Scalars, vectors and equations of motion', html: `
<table class="t">
<tr><th>Scalar (magnitude only)</th><th>Vector (magnitude + direction)</th></tr>
<tr><td>Distance – total path length (e.g. 6 km)</td><td>Displacement – straight-line change in position with direction (e.g. 2 km east)</td></tr>
<tr><td>Speed = distance ÷ time</td><td>Velocity = displacement ÷ time</td></tr>
<tr><td>Time, mass, energy</td><td>Acceleration, force, weight, momentum</td></tr>
</table>
<p>Running one 400 m lap: distance = 400 m, displacement = 0, so average velocity = 0 even though average speed is not.</p>
<p><b>Acceleration</b> = rate of change of velocity: a = (v − u) ÷ t (m s<sup>−2</sup>). Negative acceleration (opposite to motion) = slowing down (deceleration).</p>
<p><b>Adding vectors in 1D</b>: choose a positive direction; e.g. 100 N + 100 N forward and 50 N backward = +150 N (forward). In 2D, perpendicular vectors combine by Pythagoras: 3 N up + 4 N left → 5 N.</p>
<h4>Equations of motion (constant acceleration) – "SUVAT"</h4>
<p>s = displacement, u = initial velocity, v = final velocity, a = acceleration, t = time</p>
<ul>
<li><b>v = u + at</b> (no s)</li>
<li><b>s = ut + ½at<sup>2</sup></b> (no v)</li>
<li><b>v<sup>2</sup> = u<sup>2</sup> + 2as</b> (no t)</li>
</ul>
<div class="model"><b>Worked examples:</b><br>1. A car accelerates from rest at 2 m s<sup>−2</sup> for 5 s. v = 0 + 2 × 5 = <b>10 m s<sup>−1</sup></b>; s = 0 + ½ × 2 × 5<sup>2</sup> = <b>25 m</b>.<br>2. A car at 20 m s<sup>−1</sup> brakes at −5 m s<sup>−2</sup>. Stopping distance: 0 = 20<sup>2</sup> + 2(−5)s → s = 400 ÷ 10 = <b>40 m</b>.<br>3. A ball thrown up at 20 m s<sup>−1</sup> (a = −9.8 m s<sup>−2</sup>): max height when v = 0 → s = 400 ÷ 19.6 = <b>20.4 m</b>.</div>
<div class="tip">List the known variables first (write s, u, v, a, t and fill in), pick the equation without the unknown you don\u2019t need, keep signs consistent (e.g. up/forward positive), and give units.</div>
` },
    { id: 'mot-n3', title: 'Outcomes 6–7 · Ticker timers and motion graphs', html: `
<h4>Ticker timers</h4>
<ul>
<li>An electrically driven arm prints dots on a paper tape pulled by the moving object, at a fixed frequency – usually <b>50 Hz</b>, so the time between dots = 1 ÷ 50 = <b>0.02 s</b>.</li>
<li>Evenly spaced dots → constant velocity; increasing spacing → accelerating; decreasing spacing → decelerating; closer dots → slower.</li>
<li>Average speed of a section = distance between dots ÷ (number of spaces × 0.02 s). e.g. 5 spaces = 0.10 s ("5-tick" interval).</li>
<li>Acceleration = change in velocity between two sections ÷ time between their midpoints.</li>
</ul>
<h4>Motion graphs</h4>
<table class="t">
<tr><th>Graph</th><th>Gradient gives</th><th>Area under gives</th><th>Shapes</th></tr>
<tr><td>Displacement–time (s–t)</td><td><b>Velocity</b></td><td>—</td><td>Horizontal = stationary; straight sloping = constant velocity; curve getting steeper = accelerating</td></tr>
<tr><td>Velocity–time (v–t)</td><td><b>Acceleration</b></td><td><b>Displacement</b></td><td>Horizontal = constant velocity; on the axis = at rest; sloping up = accelerating; sloping down = decelerating</td></tr>
<tr><td>Acceleration–time (a–t)</td><td>—</td><td><b>Change in velocity</b></td><td>Horizontal above axis = constant acceleration; on axis = constant velocity; below = deceleration</td></tr>
</table>
<div class="model"><b>Example:</b> On a v–t graph a car speeds up uniformly from 0 to 10 m s<sup>−1</sup> in 5 s then travels at 10 m s<sup>−1</sup> for 5 s. Acceleration = 10 ÷ 5 = 2 m s<sup>−2</sup>. Distance = triangle + rectangle = ½ × 5 × 10 + 5 × 10 = 25 + 50 = <b>75 m</b>.</div>
<div class="warn">A horizontal line on a <b>displacement</b>–time graph means stopped; a horizontal line on a <b>velocity</b>–time graph means constant velocity. Read the axis label first!</div>
` },
    { id: 'mot-n4', title: 'Outcomes 8–11 · Newton\u2019s laws, inertia and F = ma', html: `
<table class="t">
<tr><th>Law</th><th>Statement</th><th>Example</th></tr>
<tr><td><b>1st (inertia)</b></td><td>An object stays at rest or keeps moving at constant velocity unless acted on by an unbalanced (net) external force</td><td>Passengers lurch forward when a car brakes suddenly – seatbelts provide the force to stop them</td></tr>
<tr><td><b>2nd</b></td><td>Acceleration is proportional to net force and inversely proportional to mass: <b>F<sub>net</sub> = ma</b></td><td>An empty shopping trolley accelerates more than a full one for the same push</td></tr>
<tr><td><b>3rd</b></td><td>When object A exerts a force on object B, B exerts an equal and opposite force on A (forces act on <b>different</b> objects)</td><td>A rocket pushes exhaust gas backwards; the gas pushes the rocket forwards – works in space with no air</td></tr>
</table>
<div class="key"><b>Inertia</b> is the tendency of an object to resist changes in its motion. It is a property (not a force) and depends on <b>mass</b> – greater mass, greater inertia.</div>
<h4>Inertia in a car</h4>
<ul>
<li>Car brakes → your body keeps moving forward → seatbelt/airbag stops you.</li>
<li>Car accelerates → you feel pushed back into the seat (the seat must push you forward).</li>
<li>Car turns → you keep going straight, so you feel thrown to the outside of the turn.</li>
<li>Rear-end collision → head stays still while the body is pushed forward → headrests prevent whiplash.</li>
</ul>
<h4>Net force → acceleration → change in velocity</h4>
<div class="model"><b>Example:</b> A 1000 kg car has an engine driving force of 2500 N and 500 N of friction/air resistance. F<sub>net</sub> = 2500 − 500 = 2000 N forward. a = F ÷ m = 2000 ÷ 1000 = <b>2 m s<sup>−2</sup></b>.<br>A 2 kg box is lifted with 30 N: weight = 2 × 9.8 = 19.6 N; F<sub>net</sub> = 10.4 N up; a = 5.2 m s<sup>−2</sup> up.</div>
<p><b>Free body diagram</b>: draw the object as a box/dot with labelled arrows for every force acting on it, arrow length ∝ size (e.g. weight down, normal force up, friction opposite motion, thrust/applied force).</p>
` },
    { id: 'mot-n5', title: 'Outcomes 12–13 · Mass vs weight, balanced forces and terminal velocity', html: `
<table class="t">
<tr><th></th><th>Mass</th><th>Weight</th></tr>
<tr><td>Definition</td><td>Amount of matter in an object</td><td>Force of gravity acting on the mass</td></tr>
<tr><td>Formula / unit</td><td>m, kilogram (kg)</td><td><b>W = mg</b>, newton (N); g = 9.8 m s<sup>−2</sup> on Earth</td></tr>
<tr><td>Scalar / vector</td><td>Scalar</td><td>Vector (towards the centre of the planet)</td></tr>
<tr><td>Changes with location?</td><td>No – same everywhere</td><td>Yes – 2 kg weighs 19.6 N on Earth, ~3.2 N on the Moon (g ≈ 1.6), ~0 N in deep space</td></tr>
<tr><td>Measured with</td><td>Balance</td><td>Spring balance / newton meter</td></tr>
</table>
<h4>Balanced vs unbalanced forces</h4>
<ul>
<li><b>Balanced</b>: forces cancel, net force = 0 → object stays at rest or moves at <b>constant velocity</b> (e.g. book on a table: weight down = normal force up; car cruising: thrust = drag).</li>
<li><b>Unbalanced</b>: net force ≠ 0 → object <b>accelerates</b> (speeds up, slows down or changes direction) in the direction of the net force.</li>
</ul>
<h4>Terminal velocity (skydiver)</h4>
<ol>
<li>Jumps: weight ≫ air resistance → accelerates downward at nearly 9.8 m s<sup>−2</sup>.</li>
<li>As speed increases, air resistance increases → net force and acceleration decrease.</li>
<li>Air resistance = weight → net force zero → constant maximum speed = <b>terminal velocity</b> (~200 km/h).</li>
<li>Parachute opens → much larger air resistance &gt; weight → net upward force → decelerates.</li>
<li>Air resistance falls with speed until it again equals weight → new, lower terminal velocity (~20 km/h) for safe landing.</li>
</ol>
<div class="warn">At terminal velocity the skydiver is still moving fast – zero net force means zero <b>acceleration</b>, not zero velocity.</div>
` },
    { id: 'mot-n6', title: 'Outcomes 14–16 · Energy, conservation of energy and collisions', html: `
<table class="t">
<tr><th>Energy</th><th>Meaning</th><th>Formula</th></tr>
<tr><td>Kinetic (E<sub>k</sub>)</td><td>Energy of motion</td><td>E<sub>k</sub> = ½mv<sup>2</sup></td></tr>
<tr><td>Gravitational potential (E<sub>p</sub>)</td><td>Stored due to height in a gravitational field</td><td>E<sub>p</sub> = mgh</td></tr>
<tr><td>Elastic potential</td><td>Stored in stretched/compressed objects (springs, trampolines, diving boards)</td><td>½kx<sup>2</sup> (extension)</td></tr>
</table>
<div class="model"><b>Examples:</b> 3.0 kg ball at 4.0 m s<sup>−1</sup>: E<sub>k</sub> = ½ × 3.0 × 4.0<sup>2</sup> = 24 J. Lifting it 2.0 m: E<sub>p</sub> = 3.0 × 9.8 × 2.0 = 58.8 J. Dropped from 5.0 m (no air resistance): mgh = ½mv<sup>2</sup> → v = √(2gh) = √(98) ≈ 9.9 m s<sup>−1</sup>.</div>
<div class="key"><b>Law of conservation of energy:</b> energy cannot be created or destroyed, only <b>transferred</b> (moved between objects, e.g. heat from a drink to the air) or <b>transformed</b> (changed form, e.g. E<sub>p</sub> → E<sub>k</sub>). The total energy of an isolated system stays constant. "Lost" energy is usually transformed into heat and sound (less useful forms).</div>
<h4>Energy flowcharts</h4>
<ul>
<li><b>Diver</b>: chemical (muscles) → elastic potential (bent board) → kinetic → gravitational potential (top of dive) → kinetic (falling) → heat, sound and kinetic energy of water on entry.</li>
<li><b>Exploding cracker</b>: chemical potential → heat + light + sound + kinetic energy of fragments.</li>
<li><b>Bouncing ball</b>: E<sub>p</sub> → E<sub>k</sub> → elastic (squashed) → E<sub>k</sub> → E<sub>p</sub>; each bounce is lower as some energy becomes heat and sound.</li>
</ul>
<h4>Collisions</h4>
<ul>
<li><b>Momentum</b> p = mv (kg m s<sup>−1</sup>) is <b>always conserved</b> in a collision (if no external forces): m<sub>1</sub>u<sub>1</sub> + m<sub>2</sub>u<sub>2</sub> = m<sub>1</sub>v<sub>1</sub> + m<sub>2</sub>v<sub>2</sub>.</li>
<li><b>Elastic</b> collision: kinetic energy also conserved (e.g. ideal billiard balls). <b>Inelastic</b>: some E<sub>k</sub> transformed into heat, sound and deformation (car crash). <b>Perfectly inelastic</b>: objects stick together.</li>
<li>Car safety: crumple zones, airbags and seatbelts <b>increase the collision time</b>, so the force on occupants is smaller, and crumple zones absorb kinetic energy by deforming.</li>
</ul>
<div class="model"><b>Example:</b> A 2 kg trolley at 4 m s<sup>−1</sup> hits a stationary 3 kg trolley and they stick. v = (2 × 4 + 0) ÷ (2 + 3) = 1.6 m s<sup>−1</sup>. E<sub>k</sub> before = ½ × 2 × 4<sup>2</sup> = 16 J; after = ½ × 5 × 1.6<sup>2</sup> = 6.4 J → 9.6 J transformed to heat and sound.</div>
` }
  ],
  cram: `
<ul>
<li>SI: m, kg, s; N = kg m s<sup>−2</sup>; J = N m. km/h ÷ 3.6 = m/s.</li>
<li>Systematic (same shift, calibrate) vs random (scatter, repeat & average).</li>
<li>Scalars: distance, speed, time, mass, energy. Vectors: displacement, velocity, acceleration, force, weight, momentum.</li>
<li>v = u + at · s = ut + ½at<sup>2</sup> · v<sup>2</sup> = u<sup>2</sup> + 2as. List s u v a t first.</li>
<li>Ticker timer 50 Hz → 0.02 s per space. Wider gaps = faster.</li>
<li>s–t gradient = velocity. v–t gradient = acceleration, area = displacement. a–t area = change in velocity.</li>
<li>Newton 1: inertia (depends on mass). Newton 2: F<sub>net</sub> = ma. Newton 3: equal & opposite on different objects (rockets).</li>
<li>W = mg (g = 9.8). Mass constant, weight changes.</li>
<li>Balanced → constant velocity/rest. Unbalanced → acceleration. Terminal velocity: drag = weight.</li>
<li>E<sub>k</sub> = ½mv<sup>2</sup> · E<sub>p</sub> = mgh · energy conserved (transferred/transformed; "lost" as heat/sound).</li>
<li>Momentum always conserved; elastic keeps E<sub>k</sub>; inelastic loses E<sub>k</sub> to heat/sound/deformation. Crumple zones increase collision time → smaller force.</li>
</ul>
`
});

SD.topics.push({
  id: 'reactions',
  name: 'Chemical Reactions',
  short: 'Reactions',
  color: '#fb923c',
  examined: false,
  scope: 'Not on the yearly – formulae, ionic/covalent, acids & bases, gas tests, balancing, combustion, precipitation, decomposition, reactions in living things',
  notes: [
    { id: 'rxn-n1', title: 'Outcomes 1–2 · Names and formulae', html: `
<h4>Polyatomic ions to memorise</h4>
<table class="t">
<tr><th>Ion</th><th>Formula</th><th>Ion</th><th>Formula</th></tr>
<tr><td>Ammonium</td><td>NH<sub>4</sub><sup>+</sup></td><td>Sulfate</td><td>SO<sub>4</sub><sup>2−</sup></td></tr>
<tr><td>Hydroxide</td><td>OH<sup>−</sup></td><td>Sulfite</td><td>SO<sub>3</sub><sup>2−</sup></td></tr>
<tr><td>Nitrate</td><td>NO<sub>3</sub><sup>−</sup></td><td>Carbonate</td><td>CO<sub>3</sub><sup>2−</sup></td></tr>
<tr><td>Nitrite</td><td>NO<sub>2</sub><sup>−</sup></td><td>Phosphate</td><td>PO<sub>4</sub><sup>3−</sup></td></tr>
<tr><td>Hydrogen carbonate (bicarbonate)</td><td>HCO<sub>3</sub><sup>−</sup></td><td>Ethanoate (acetate)</td><td>CH<sub>3</sub>COO<sup>−</sup></td></tr>
</table>
<h4>Writing ionic formulae</h4>
<ol>
<li>Write the cation and anion with their charges (Group 1 = +1, Group 2 = +2, Al = +3; Group 17 = −1, Group 16 = −2, Group 15 = −3; transition metals use the Roman numeral).</li>
<li>Balance the charges to zero (swap-and-drop / lowest common multiple).</li>
<li>Use brackets for more than one polyatomic ion; simplify.</li>
</ol>
<p>e.g. Al<sup>3+</sup> + SO<sub>4</sub><sup>2−</sup> → Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>; Ca<sup>2+</sup> + OH<sup>−</sup> → Ca(OH)<sub>2</sub>; iron(III) oxide → Fe<sub>2</sub>O<sub>3</sub>; ammonium sulfate → (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>.</p>
<h4>Naming</h4>
<ul>
<li>Ionic: metal name + non-metal root + "-ide" (sodium chloride, magnesium oxide); polyatomic names unchanged (calcium nitrate); variable-charge metals use Roman numerals (copper(II) sulfate).</li>
<li>Covalent (two non-metals): prefixes mono-, di-, tri-, tetra-, penta- (carbon dioxide CO<sub>2</sub>, carbon monoxide CO, dinitrogen tetroxide N<sub>2</sub>O<sub>4</sub>, sulfur trioxide SO<sub>3</sub>).</li>
<li>Common names: water H<sub>2</sub>O, ammonia NH<sub>3</sub>, methane CH<sub>4</sub>, glucose C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, table salt NaCl, limestone CaCO<sub>3</sub>, baking soda NaHCO<sub>3</sub>, hydrochloric acid HCl, sulfuric acid H<sub>2</sub>SO<sub>4</sub>, nitric acid HNO<sub>3</sub>, acetic acid CH<sub>3</sub>COOH.</li>
</ul>
` },
    { id: 'rxn-n2', title: 'Outcomes 3–4 · Classifying compounds and testing for gases', html: `
<table class="t">
<tr><th></th><th>Ionic</th><th>Covalent molecular</th></tr>
<tr><td>Made of</td><td>Metal + non-metal (or polyatomic ions)</td><td>Non-metals only</td></tr>
<tr><td>Bonding</td><td>Electrons <b>transferred</b>; electrostatic attraction between + and − ions in a giant lattice</td><td>Electrons <b>shared</b> in molecules</td></tr>
<tr><td>Melting point</td><td>High</td><td>Low (weak forces between molecules)</td></tr>
<tr><td>Conducts electricity?</td><td>Only when <b>molten or dissolved</b> (ions free to move)</td><td>No (no free ions/electrons)</td></tr>
<tr><td>Examples</td><td>NaCl, MgO, CaCO<sub>3</sub></td><td>H<sub>2</sub>O, CO<sub>2</sub>, CH<sub>4</sub>, sugar</td></tr>
</table>
<p>Covalent <b>network</b> solids (diamond, SiO<sub>2</sub>) are the exception: very high melting points.</p>
<table class="t">
<tr><th></th><th>Acids</th><th>Bases</th></tr>
<tr><td>Definition</td><td>Release H<sup>+</sup> ions in water (proton donors)</td><td>Accept H<sup>+</sup> / neutralise acids; soluble bases (alkalis) release OH<sup>−</sup></td></tr>
<tr><td>Properties</td><td>Sour, corrosive, pH &lt; 7, turn blue litmus <b>red</b></td><td>Bitter, slippery, pH &gt; 7, turn red litmus <b>blue</b></td></tr>
<tr><td>Examples</td><td>HCl, H<sub>2</sub>SO<sub>4</sub>, HNO<sub>3</sub>, CH<sub>3</sub>COOH</td><td>NaOH, KOH, Ca(OH)<sub>2</sub>, NH<sub>3</sub>, metal oxides/carbonates</td></tr>
</table>
<h4>Tests for colourless gases</h4>
<table class="t">
<tr><th>Gas</th><th>Test</th><th>Positive result</th></tr>
<tr><td>Hydrogen H<sub>2</sub></td><td>Lighted splint at the mouth of the tube</td><td>Squeaky <b>"pop"</b> (2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O)</td></tr>
<tr><td>Oxygen O<sub>2</sub></td><td><b>Glowing</b> splint inserted</td><td>Splint <b>relights</b></td></tr>
<tr><td>Carbon dioxide CO<sub>2</sub></td><td>Bubble through limewater (Ca(OH)<sub>2</sub>(aq))</td><td>Limewater turns <b>milky/cloudy</b>: Ca(OH)<sub>2</sub>(aq) + CO<sub>2</sub>(g) → CaCO<sub>3</sub>(s) + H<sub>2</sub>O(l)</td></tr>
</table>
<div class="warn">The Standard writes "MnO<sub>2</sub> + H<sub>2</sub>O<sub>2</sub> → 2H<sub>2</sub>O + O<sub>2</sub>". MnO<sub>2</sub> is a <b>catalyst</b>, not a reactant: <b>2H<sub>2</sub>O<sub>2</sub> → 2H<sub>2</sub>O + O<sub>2</sub></b> (MnO<sub>2</sub> written above the arrow).</div>
` },
    { id: 'rxn-n3', title: 'Outcomes 5–6 · Balancing equations and conservation of mass', html: `
<div class="key"><b>Law of conservation of mass:</b> in a chemical reaction atoms are rearranged to form new substances; no atoms are created or destroyed, so the total mass of reactants = total mass of products (in a closed system).</div>
<h4>Balancing</h4>
<ol>
<li>Write correct formulae for all reactants and products (never change subscripts).</li>
<li>Count atoms of each element on each side.</li>
<li>Add <b>coefficients</b> in front of formulae to balance – leave H and O until last; treat unchanged polyatomic ions as one unit.</li>
<li>Check every element; add states (s), (l), (g), (aq).</li>
</ol>
<p>e.g. CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l); 2Al(s) + 6HCl(aq) → 2AlCl<sub>3</sub>(aq) + 3H<sub>2</sub>(g).</p>
<h4>Conservation of mass prac</h4>
<p>Acid + carbonate (e.g. HCl + CaCO<sub>3</sub>) in a conical flask sealed with a balloon: mass stays constant because the CO<sub>2</sub> is trapped. In an <b>open</b> flask the mass decreases – not because mass is destroyed but because CO<sub>2</sub> gas escapes.</p>
<div class="tip">If a question says mass "decreased" or "increased" in an open container, explain which gas escaped (e.g. CO<sub>2</sub>) or was gained (e.g. O<sub>2</sub> when magnesium burns to MgO).</div>
` },
    { id: 'rxn-n4', title: 'Outcomes 7–11 · Acid reactions, neutralisation, pH, indicators, strong vs weak', html: `
<h4>Reactions of acids</h4>
<table class="t">
<tr><th>Type</th><th>General equation</th><th>Example</th></tr>
<tr><td>Acid + metal</td><td>salt + hydrogen</td><td>Mg(s) + 2HCl(aq) → MgCl<sub>2</sub>(aq) + H<sub>2</sub>(g)</td></tr>
<tr><td>Acid + base (neutralisation)</td><td>salt + water</td><td>HCl(aq) + NaOH(aq) → NaCl(aq) + H<sub>2</sub>O(l)</td></tr>
<tr><td>Acid + carbonate</td><td>salt + water + carbon dioxide</td><td>CaCO<sub>3</sub>(s) + 2HCl(aq) → CaCl<sub>2</sub>(aq) + H<sub>2</sub>O(l) + CO<sub>2</sub>(g)</td></tr>
</table>
<p>Salt naming: metal from the base/metal + ending from the acid: HCl → chloride, H<sub>2</sub>SO<sub>4</sub> → sulfate, HNO<sub>3</sub> → nitrate, CH<sub>3</sub>COOH → ethanoate (acetate). Ionic equation for neutralisation: H<sup>+</sup>(aq) + OH<sup>−</sup>(aq) → H<sub>2</sub>O(l).</p>
<h4>Uses of neutralisation</h4>
<ul>
<li><b>Antacids</b> – Mg(OH)<sub>2</sub>, CaCO<sub>3</sub>, NaHCO<sub>3</sub> neutralise excess stomach (hydrochloric) acid to relieve indigestion/heartburn.</li>
<li><b>Soils</b> – farmers add lime (CaO, Ca(OH)<sub>2</sub>) or crushed limestone (CaCO<sub>3</sub>) to raise the pH of acidic soils.</li>
<li><b>Pools</b> – pH is kept near 7.2–7.8: acid (hydrochloric acid or sodium bisulfate) is added to lower pH, sodium carbonate/bicarbonate to raise it.</li>
<li>Toothpaste (mild base) neutralises acids from mouth bacteria; treating acid spills with sodium bicarbonate.</li>
</ul>
<div class="warn">Park\u2019s notes say "chlorine makes the pool less acidic" as a neutralisation use. Chlorine is added to <b>disinfect</b>; pool chlorine (hypochlorite) actually tends to <b>raise</b> pH, which is then neutralised by adding acid.</div>
<h4>pH scale</h4>
<p>0–14: <b>&lt; 7 acidic</b>, <b>7 neutral</b> (pure water), <b>&gt; 7 basic</b>. Logarithmic – each unit is a <b>10×</b> change in H<sup>+</sup> concentration (pH 2 is 10× more acidic than pH 3, 100× more than pH 4). Typical: battery acid ~0, lemon juice ~2, vinegar ~3, coffee ~5, water 7, baking soda ~9, ammonia ~11, bleach ~13, drain cleaner ~14.</p>
<h4>Indicators</h4>
<p>An indicator is a substance that has different colours in acids and in bases.</p>
<table class="t">
<tr><th>Indicator</th><th>In acid</th><th>In base</th></tr>
<tr><td>Litmus</td><td>Red</td><td>Blue</td></tr>
<tr><td>Phenolphthalein</td><td>Colourless</td><td>Pink</td></tr>
<tr><td>Methyl orange</td><td>Red</td><td>Yellow (above ~pH 4.4)</td></tr>
<tr><td>Bromothymol blue</td><td>Yellow</td><td>Blue (green near 7)</td></tr>
<tr><td>Universal indicator</td><td>Red/orange/yellow</td><td>Green (7) → blue → purple</td></tr>
</table>
<h4>Strong vs weak acids</h4>
<ul>
<li><b>Strong</b> acids <b>fully ionise</b> in water (HCl → H<sup>+</sup> + Cl<sup>−</sup>): HCl, H<sub>2</sub>SO<sub>4</sub>, HNO<sub>3</sub>.</li>
<li><b>Weak</b> acids only <b>partially ionise</b> (most molecules stay intact): ethanoic (acetic) acid, citric acid, carbonic acid.</li>
<li>At the same concentration a strong acid has more H<sup>+</sup>, a lower pH, conducts better and reacts faster with Mg or CaCO<sub>3</sub>.</li>
</ul>
<div class="warn"><b>Strong/weak</b> (degree of ionisation) is not the same as <b>concentrated/dilute</b> (amount of acid per litre). A dilute strong acid can have a higher pH than a concentrated weak one.</div>
` },
    { id: 'rxn-n5', title: 'Outcomes 12–13 · Combustion and precipitation', html: `
<h4>Combustion</h4>
<p>A reaction of a fuel with oxygen that releases heat (and light) – always <b>exothermic</b>. Hydrocarbon fuels: methane CH<sub>4</sub>, ethane C<sub>2</sub>H<sub>6</sub>, propane C<sub>3</sub>H<sub>8</sub>, butane C<sub>4</sub>H<sub>10</sub> (alkanes C<sub>n</sub>H<sub>2n+2</sub>); also ethanol C<sub>2</sub>H<sub>5</sub>OH.</p>
<table class="t">
<tr><th></th><th>Complete combustion</th><th>Incomplete combustion</th></tr>
<tr><td>Oxygen</td><td>Plentiful</td><td>Limited</td></tr>
<tr><td>Products</td><td>CO<sub>2</sub> + H<sub>2</sub>O</td><td>CO (carbon monoxide) and/or C (soot) + H<sub>2</sub>O (some CO<sub>2</sub>)</td></tr>
<tr><td>Flame</td><td>Blue, clean (Bunsen air hole open)</td><td>Yellow/orange, sooty (air hole closed)</td></tr>
<tr><td>Energy released</td><td>More</td><td>Less</td></tr>
<tr><td>Equation (methane)</td><td>CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O</td><td>2CH<sub>4</sub> + 3O<sub>2</sub> → 2CO + 4H<sub>2</sub>O; CH<sub>4</sub> + O<sub>2</sub> → C + 2H<sub>2</sub>O</td></tr>
</table>
<p>Dangers of incomplete combustion: <b>carbon monoxide</b> is colourless, odourless and toxic – it binds to haemoglobin, reducing oxygen transport; soot causes respiratory problems and blackens surfaces. Ethanol burns more cleanly (complete) than kerosene (sooty).</p>
<h4>Precipitation</h4>
<p>A <b>precipitate</b> is an insoluble solid formed when two solutions (aq) are mixed and a pair of ions forms an insoluble compound.</p>
<table class="t">
<tr><th>Soluble</th><th>Exceptions (insoluble)</th></tr>
<tr><td>All Group 1 (Na<sup>+</sup>, K<sup>+</sup>, Li<sup>+</sup>) and ammonium (NH<sub>4</sub><sup>+</sup>) compounds</td><td>none</td></tr>
<tr><td>All nitrates and ethanoates</td><td>none</td></tr>
<tr><td>Most chlorides, bromides, iodides</td><td>Ag<sup>+</sup>, Pb<sup>2+</sup> (Hg<sub>2</sub><sup>2+</sup>)</td></tr>
<tr><td>Most sulfates</td><td>Ba<sup>2+</sup>, Pb<sup>2+</sup>, Sr<sup>2+</sup>; Ca<sup>2+</sup> and Ag<sup>+</sup> slightly soluble</td></tr>
<tr><th>Insoluble</th><th>Exceptions (soluble)</th></tr>
<tr><td>Most carbonates, phosphates, hydroxides, sulfides</td><td>Group 1 and NH<sub>4</sub><sup>+</sup> (Ca(OH)<sub>2</sub>, Ba(OH)<sub>2</sub> slightly soluble)</td></tr>
</table>
<p>Method: swap partners, check each product against the rules. e.g. AgNO<sub>3</sub>(aq) + NaCl(aq) → <b>AgCl(s)</b> (white) + NaNO<sub>3</sub>(aq). Net ionic: Ag<sup>+</sup>(aq) + Cl<sup>−</sup>(aq) → AgCl(s). Others: Pb(NO<sub>3</sub>)<sub>2</sub> + 2KI → PbI<sub>2</sub>(s) (yellow) + 2KNO<sub>3</sub>; CuSO<sub>4</sub> + 2NaOH → Cu(OH)<sub>2</sub>(s) (blue) + Na<sub>2</sub>SO<sub>4</sub>; BaCl<sub>2</sub> + Na<sub>2</sub>SO<sub>4</sub> → BaSO<sub>4</sub>(s) (white) + 2NaCl.</p>
` },
    { id: 'rxn-n6', title: 'Outcomes 14–15 · Decomposition and reactions in living things', html: `
<h4>Decomposition: one compound → two or more simpler substances</h4>
<table class="t">
<tr><th>Energy source</th><th>Example</th></tr>
<tr><td><b>Heat</b> (thermal decomposition)</td><td>CuCO<sub>3</sub>(s) → CuO(s) + CO<sub>2</sub>(g) (green → black; test CO<sub>2</sub> with limewater); CaCO<sub>3</sub> → CaO + CO<sub>2</sub> (making lime)</td></tr>
<tr><td><b>Light</b> (photodecomposition)</td><td>2AgCl(s) → 2Ag(s) + Cl<sub>2</sub>(g) (darkens – old photographic film); 2H<sub>2</sub>O<sub>2</sub> → 2H<sub>2</sub>O + O<sub>2</sub> (why peroxide is sold in brown bottles)</td></tr>
<tr><td><b>Electricity</b> (electrolysis)</td><td>2H<sub>2</sub>O(l) → 2H<sub>2</sub>(g) + O<sub>2</sub>(g): hydrogen at the negative electrode (cathode), oxygen at the positive (anode), volume ratio 2 : 1. Molten NaCl → Na + Cl<sub>2</sub></td></tr>
</table>
<h4>Reactions in living systems</h4>
<table class="t">
<tr><th>Reaction</th><th>Equation</th><th>Importance</th></tr>
<tr><td><b>Photosynthesis</b> (chloroplasts, needs light + chlorophyll; endothermic)</td><td>6CO<sub>2</sub> + 6H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub></td><td>Converts light energy into chemical energy in glucose; base of food chains; produces oxygen; removes CO<sub>2</sub></td></tr>
<tr><td><b>Aerobic respiration</b> (mitochondria; exothermic)</td><td>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> → 6CO<sub>2</sub> + 6H<sub>2</sub>O + energy (ATP)</td><td>Releases energy for muscle contraction, nerve impulses, growth, active transport, body heat; returns CO<sub>2</sub> for photosynthesis</td></tr>
<tr><td>Anaerobic respiration</td><td>Muscles: glucose → lactic acid; yeast: glucose → ethanol + CO<sub>2</sub></td><td>Less energy; used in bread and wine making</td></tr>
<tr><td><b>Digestion</b> (enzyme-catalysed hydrolysis)</td><td>Starch → glucose (amylase); proteins → amino acids (protease); fats → fatty acids + glycerol (lipase)</td><td>Breaks large insoluble molecules into small soluble ones that can be absorbed into the blood and used for respiration and growth</td></tr>
</table>
<p>The three are linked: photosynthesis makes glucose and O<sub>2</sub>; digestion supplies glucose from food; respiration uses glucose and O<sub>2</sub> to release energy, producing the CO<sub>2</sub> and water used in photosynthesis.</p>
` }
  ],
  cram: `
<ul>
<li>Ions: NH<sub>4</sub><sup>+</sup>, OH<sup>−</sup>, NO<sub>3</sub><sup>−</sup>, HCO<sub>3</sub><sup>−</sup>, CH<sub>3</sub>COO<sup>−</sup>, SO<sub>4</sub><sup>2−</sup>, CO<sub>3</sub><sup>2−</sup>, PO<sub>4</sub><sup>3−</sup>. Balance charges, brackets for polyatomics.</li>
<li>Ionic: metal + non-metal, transfer, high mp, conducts molten/aq. Covalent: non-metals share, low mp, no conduction.</li>
<li>Gas tests: H<sub>2</sub> pop (lit splint) · O<sub>2</sub> relights glowing splint · CO<sub>2</sub> turns limewater milky.</li>
<li>Conservation of mass: atoms rearranged; open flask loses mass as gas escapes.</li>
<li>Acid + metal → salt + H<sub>2</sub> · acid + base → salt + water · acid + carbonate → salt + water + CO<sub>2</sub>.</li>
<li>Neutralisation uses: antacids, liming soil, pool pH.</li>
<li>pH &lt;7 acid, 7 neutral, &gt;7 base; ×10 per unit. Litmus red/blue; phenolphthalein colourless/pink; methyl orange red/yellow.</li>
<li>Strong = fully ionised (HCl, H<sub>2</sub>SO<sub>4</sub>, HNO<sub>3</sub>); weak = partially (acetic, citric). ≠ concentrated/dilute.</li>
<li>Complete combustion → CO<sub>2</sub> + H<sub>2</sub>O, blue flame. Incomplete → CO/C + H<sub>2</sub>O, yellow sooty, less energy, CO toxic.</li>
<li>Soluble: Group 1, NH<sub>4</sub><sup>+</sup>, nitrates; halides except Ag/Pb; sulfates except Ba/Pb/(Ca). Insoluble: carbonates, phosphates, hydroxides, sulfides.</li>
<li>Decomposition: heat (CuCO<sub>3</sub>), light (AgCl), electricity (H<sub>2</sub>O → H<sub>2</sub> : O<sub>2</sub> = 2 : 1).</li>
<li>Photosynthesis 6CO<sub>2</sub> + 6H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub>; respiration is the reverse + energy; digestion breaks big molecules into small absorbable ones.</li>
</ul>
`
});

SD.cards.push(
  { id: 'mot-c1', topic: 'motion', outcome: 'mot-n1', front: 'SI unit of force', back: 'Newton (N) = kg m s\u207b\u00b2.' },
  { id: 'mot-c2', topic: 'motion', outcome: 'mot-n1', front: 'Convert km/h to m/s', back: 'Divide by 3.6 (e.g. 90 km/h = 25 m/s).' },
  { id: 'mot-c3', topic: 'motion', outcome: 'mot-n1', front: 'Systematic vs random error', back: 'Systematic: consistent shift in one direction (affects accuracy, fix by calibration). Random: unpredictable scatter (affects precision, reduce by repeating and averaging).' },
  { id: 'mot-c4', topic: 'motion', outcome: 'mot-n1', front: 'How does a light gate measure speed?', back: 'An object breaks a light beam; the timer records how long it is blocked (or the time between two gates); speed = distance ÷ time.' },
  { id: 'mot-c5', topic: 'motion', outcome: 'mot-n2', front: 'Scalar vs vector', back: 'Scalar: magnitude only (distance, speed, time, mass, energy). Vector: magnitude and direction (displacement, velocity, acceleration, force).' },
  { id: 'mot-c6', topic: 'motion', outcome: 'mot-n2', front: 'Distance vs displacement', back: 'Distance: total path length (scalar). Displacement: straight-line change in position with direction (vector).' },
  { id: 'mot-c7', topic: 'motion', outcome: 'mot-n2', front: 'Acceleration', back: 'Rate of change of velocity: a = (v − u) ÷ t, in m s\u207b\u00b2.' },
  { id: 'mot-c8', topic: 'motion', outcome: 'mot-n2', front: 'The three equations of motion', back: 'v = u + at;  s = ut + ½at²;  v² = u² + 2as.' },
  { id: 'mot-c9', topic: 'motion', outcome: 'mot-n3', front: 'Ticker timer', back: 'Prints dots on paper tape at a fixed frequency (usually 50 Hz → 0.02 s apart); spacing shows speed, changing spacing shows acceleration.' },
  { id: 'mot-c10', topic: 'motion', outcome: 'mot-n3', front: 'Gradient and area of a velocity–time graph', back: 'Gradient = acceleration; area under the graph = displacement.' },
  { id: 'mot-c11', topic: 'motion', outcome: 'mot-n3', front: 'Gradient of a displacement–time graph', back: 'Velocity. Horizontal line = stationary; steeper = faster.' },
  { id: 'mot-c12', topic: 'motion', outcome: 'mot-n4', front: 'Newton\u2019s first law', back: 'An object remains at rest or moves at constant velocity unless acted on by a net external force (law of inertia).' },
  { id: 'mot-c13', topic: 'motion', outcome: 'mot-n4', front: 'Newton\u2019s second law', back: 'Acceleration is proportional to net force and inversely proportional to mass: F = ma.' },
  { id: 'mot-c14', topic: 'motion', outcome: 'mot-n4', front: 'Newton\u2019s third law', back: 'For every force A exerts on B, B exerts an equal and opposite force on A (acting on different objects).' },
  { id: 'mot-c15', topic: 'motion', outcome: 'mot-n4', front: 'Inertia', back: 'The tendency of an object to resist changes in its motion; depends on mass. It is a property, not a force.' },
  { id: 'mot-c16', topic: 'motion', outcome: 'mot-n5', front: 'Mass vs weight', back: 'Mass: amount of matter (kg), same everywhere. Weight: gravitational force W = mg (N), changes with location.' },
  { id: 'mot-c17', topic: 'motion', outcome: 'mot-n5', front: 'Balanced vs unbalanced forces', back: 'Balanced: net force zero → rest or constant velocity. Unbalanced: net force → acceleration in its direction.' },
  { id: 'mot-c18', topic: 'motion', outcome: 'mot-n5', front: 'Terminal velocity', back: 'The constant maximum velocity of a falling object when air resistance equals weight, so net force and acceleration are zero.' },
  { id: 'mot-c19', topic: 'motion', outcome: 'mot-n6', front: 'Kinetic and gravitational potential energy formulae', back: 'Ek = ½mv²;  Ep = mgh (g = 9.8 m s\u207b\u00b2).' },
  { id: 'mot-c20', topic: 'motion', outcome: 'mot-n6', front: 'Law of conservation of energy', back: 'Energy cannot be created or destroyed, only transferred or transformed; total energy of an isolated system is constant.' },
  { id: 'mot-c21', topic: 'motion', outcome: 'mot-n6', front: 'Elastic vs inelastic collision', back: 'Momentum is conserved in both. Elastic: kinetic energy also conserved. Inelastic: some kinetic energy transformed to heat, sound and deformation.' },
  { id: 'mot-c22', topic: 'motion', outcome: 'mot-n6', front: 'How do crumple zones and airbags protect occupants?', back: 'They increase the time over which the occupants stop, reducing the force on them, and absorb kinetic energy by deforming.' },
  { id: 'rxn-c1', topic: 'reactions', outcome: 'rxn-n1', front: 'Formula of sulfate, carbonate, phosphate', back: 'SO\u2084\u00b2\u207b, CO\u2083\u00b2\u207b, PO\u2084\u00b3\u207b.' },
  { id: 'rxn-c2', topic: 'reactions', outcome: 'rxn-n1', front: 'Formula of ammonium, hydroxide, nitrate, hydrogen carbonate, ethanoate', back: 'NH\u2084\u207a, OH\u207b, NO\u2083\u207b, HCO\u2083\u207b, CH\u2083COO\u207b.' },
  { id: 'rxn-c3', topic: 'reactions', outcome: 'rxn-n1', front: 'Formula of aluminium sulfate', back: 'Al\u2082(SO\u2084)\u2083 (2 × +3 = +6 balances 3 × −2 = −6).' },
  { id: 'rxn-c4', topic: 'reactions', outcome: 'rxn-n2', front: 'Ionic compounds – properties', back: 'Metal + non-metal; electrons transferred; giant lattice; high melting point; conduct only when molten or dissolved.' },
  { id: 'rxn-c5', topic: 'reactions', outcome: 'rxn-n2', front: 'Covalent molecular compounds – properties', back: 'Non-metals sharing electrons; low melting/boiling points; do not conduct electricity.' },
  { id: 'rxn-c6', topic: 'reactions', outcome: 'rxn-n2', front: 'Test for hydrogen', back: 'Lighted splint at the mouth of the test tube → squeaky pop.' },
  { id: 'rxn-c7', topic: 'reactions', outcome: 'rxn-n2', front: 'Test for oxygen', back: 'Glowing splint relights.' },
  { id: 'rxn-c8', topic: 'reactions', outcome: 'rxn-n2', front: 'Test for carbon dioxide', back: 'Limewater (calcium hydroxide solution) turns milky as insoluble CaCO\u2083 forms.' },
  { id: 'rxn-c9', topic: 'reactions', outcome: 'rxn-n3', front: 'Law of conservation of mass', back: 'Atoms are rearranged, not created or destroyed, so total mass of reactants equals total mass of products in a closed system.' },
  { id: 'rxn-c10', topic: 'reactions', outcome: 'rxn-n4', front: 'Acid + metal →', back: 'Salt + hydrogen (e.g. Mg + 2HCl → MgCl\u2082 + H\u2082).' },
  { id: 'rxn-c11', topic: 'reactions', outcome: 'rxn-n4', front: 'Acid + carbonate →', back: 'Salt + water + carbon dioxide.' },
  { id: 'rxn-c12', topic: 'reactions', outcome: 'rxn-n4', front: 'Neutralisation', back: 'Acid + base → salt + water; H\u207a + OH\u207b → H\u2082O. Uses: antacids, liming acidic soils, adjusting pool pH.' },
  { id: 'rxn-c13', topic: 'reactions', outcome: 'rxn-n4', front: 'pH scale', back: '0–14; below 7 acidic, 7 neutral, above 7 basic; logarithmic – each unit is a 10× change in H\u207a concentration.' },
  { id: 'rxn-c14', topic: 'reactions', outcome: 'rxn-n4', front: 'Indicator', back: 'A substance with different colours in acids and bases (litmus red/blue, phenolphthalein colourless/pink, methyl orange red/yellow).' },
  { id: 'rxn-c15', topic: 'reactions', outcome: 'rxn-n4', front: 'Strong vs weak acid', back: 'Strong acids fully ionise in water (HCl, H\u2082SO\u2084, HNO\u2083); weak acids only partially ionise (acetic, citric).' },
  { id: 'rxn-c16', topic: 'reactions', outcome: 'rxn-n5', front: 'Complete vs incomplete combustion', back: 'Complete: plenty of O\u2082 → CO\u2082 + H\u2082O, blue flame, more energy. Incomplete: limited O\u2082 → CO and/or soot + H\u2082O, yellow flame, less energy.' },
  { id: 'rxn-c17', topic: 'reactions', outcome: 'rxn-n5', front: 'Why is carbon monoxide dangerous?', back: 'It is colourless, odourless and binds to haemoglobin, reducing the blood\u2019s ability to carry oxygen.' },
  { id: 'rxn-c18', topic: 'reactions', outcome: 'rxn-n5', front: 'Precipitate', back: 'An insoluble solid formed when two solutions are mixed (e.g. AgNO\u2083 + NaCl → AgCl(s) white).' },
  { id: 'rxn-c19', topic: 'reactions', outcome: 'rxn-n5', front: 'Always-soluble ions', back: 'Group 1 metal ions, ammonium (NH\u2084\u207a), nitrates (NO\u2083\u207b) and ethanoates.' },
  { id: 'rxn-c20', topic: 'reactions', outcome: 'rxn-n6', front: 'Three ways to decompose a compound', back: 'Heat (CuCO\u2083 → CuO + CO\u2082), light (2AgCl → 2Ag + Cl\u2082), electricity (2H\u2082O → 2H\u2082 + O\u2082).' },
  { id: 'rxn-c21', topic: 'reactions', outcome: 'rxn-n6', front: 'Photosynthesis equation', back: '6CO\u2082 + 6H\u2082O → C\u2086H\u2081\u2082O\u2086 + 6O\u2082 (light energy, chlorophyll).' },
  { id: 'rxn-c22', topic: 'reactions', outcome: 'rxn-n6', front: 'Importance of digestion', back: 'Enzymes break large insoluble food molecules into small soluble ones (glucose, amino acids, fatty acids + glycerol) that can be absorbed and used for respiration and growth.' }
);

SD.mcq.push(
  { id: 'mot-q1', topic: 'motion', outcome: 'mot-n1', q: `A car travels at 72 km/h. What is this speed in m/s?`, options: [`7.2 m/s`, `20 m/s`, `259 m/s`, `26 m/s`], answer: 1, explain: `Divide km/h by 3.6: 72 ÷ 3.6 = 20 m/s. Multiplying by 3.6 (259) converts the wrong way.` },
  { id: 'mot-q2', topic: 'motion', outcome: 'mot-n1', q: `A stopwatch is started slightly late or early by different amounts each trial due to reaction time. This is a:`, options: [`Systematic error`, `Zero error`, `Random error`, `Parallax error`], answer: 2, explain: `Reaction time varies unpredictably, scattering results both ways – a random error, reduced by repeating and averaging or using light gates.` },
  { id: 'mot-q3', topic: 'motion', outcome: 'mot-n1', q: `Which is the SI unit of acceleration?`, options: [`m s⁻²`, `m s⁻¹`, `km/h`, `N`], answer: 0, explain: `Acceleration = change in velocity (m/s) ÷ time (s) = m/s² (m s⁻²).` },
  { id: 'mot-q4', topic: 'motion', outcome: 'mot-n2', q: `An athlete runs one full lap of a 400 m track in 50 s, finishing where she started. What are her average speed and average velocity?`, options: [`8 m/s and 8 m/s`, `0 m/s and 8 m/s`, `8 m/s and 0 m/s`, `0 m/s and 0 m/s`], answer: 2, explain: `Speed = distance ÷ time = 400 ÷ 50 = 8 m/s. Displacement is zero, so average velocity = 0.` },
  { id: 'mot-q5', topic: 'motion', outcome: 'mot-n2', q: `Which list contains only vector quantities?`, options: [`Speed, distance, time`, `Mass, energy, velocity`, `Displacement, acceleration, force`, `Time, weight, speed`], answer: 2, explain: `Displacement, acceleration and force all have direction. Speed, distance, time, mass and energy are scalars.` },
  { id: 'mot-q6', topic: 'motion', outcome: 'mot-n2', q: `A car travelling at 5 m/s accelerates at 2 m/s² for 4 s. What is its final velocity?`, options: [`8 m/s`, `13 m/s`, `11 m/s`, `40 m/s`], answer: 1, explain: `v = u + at = 5 + 2 × 4 = 13 m/s.` },
  { id: 'mot-q7', topic: 'motion', outcome: 'mot-n2', q: `A trolley starts from rest and accelerates at 3 m/s² for 4 s. How far does it travel?`, options: [`12 m`, `48 m`, `6 m`, `24 m`], answer: 3, explain: `s = ut + ½at² = 0 + ½ × 3 × 16 = 24 m.` },
  { id: 'mot-q8', topic: 'motion', outcome: 'mot-n2', q: `A car moving at 20 m/s brakes with an acceleration of −5 m/s². What is its stopping distance?`, options: [`40 m`, `4 m`, `80 m`, `100 m`], answer: 0, explain: `v² = u² + 2as → 0 = 400 + 2(−5)s → s = 400 ÷ 10 = 40 m.` },
  { id: 'mot-q9', topic: 'motion', outcome: 'mot-n2', q: `A cyclist slows from 12 m/s to 4 m/s in 4 s. What is the acceleration?`, options: [`2 m/s²`, `−2 m/s²`, `−3 m/s²`, `4 m/s²`], answer: 1, explain: `a = (v − u) ÷ t = (4 − 12) ÷ 4 = −2 m/s². The negative sign shows deceleration.` },
  { id: 'mot-q10', topic: 'motion', outcome: 'mot-n3', q: `A ticker timer operates at 50 Hz. A section of tape contains 10 spaces between dots and is 8.0 cm long. What is the average speed for this section?`, options: [`0.80 m/s`, `0.040 m/s`, `4.0 m/s`, `0.40 m/s`], answer: 3, explain: `Time = 10 × 0.02 s = 0.20 s; speed = 0.080 m ÷ 0.20 s = 0.40 m/s.` },
  { id: 'mot-q11', topic: 'motion', outcome: 'mot-n3', q: `On a ticker tape, the dots get further and further apart. The object is:`, options: [`Accelerating`, `At constant velocity`, `Decelerating`, `Stationary`], answer: 0, explain: `Each 0.02 s the object travels further than before, so its speed is increasing.` },
  { id: 'mot-q12', topic: 'motion', outcome: 'mot-n3', q: `A velocity–time graph shows a straight line from 0 m/s to 10 m/s over 5 s. What distance is travelled?`, options: [`50 m`, `2 m`, `25 m`, `10 m`], answer: 2, explain: `Distance = area under the v–t graph = ½ × 5 × 10 = 25 m. The gradient (2 m/s²) is the acceleration.` },
  { id: 'mot-q13', topic: 'motion', outcome: 'mot-n3', q: `A horizontal line above the time axis on a VELOCITY–time graph means the object is:`, options: [`Stationary`, `Accelerating uniformly`, `Moving at constant velocity`, `Slowing down`], answer: 2, explain: `Velocity is constant and non-zero. A horizontal line on a displacement–time graph would mean stationary.` },
  { id: 'mot-q14', topic: 'motion', outcome: 'mot-n4', q: `A 1200 kg car accelerates at 2.5 m/s². What net force acts on it?`, options: [`480 N`, `3000 N`, `1202.5 N`, `30 000 N`], answer: 1, explain: `F = ma = 1200 × 2.5 = 3000 N.` },
  { id: 'mot-q15', topic: 'motion', outcome: 'mot-n4', q: `A 70 kg cyclist and bike experience a forward force of 500 N and resistive forces of 150 N. What is the acceleration?`, options: [`7.1 m/s²`, `9.3 m/s²`, `2.1 m/s²`, `5.0 m/s²`], answer: 3, explain: `Net force = 500 − 150 = 350 N; a = 350 ÷ 70 = 5.0 m/s². Using 500 N alone (7.1) ignores resistance.` },
  { id: 'mot-q16', topic: 'motion', outcome: 'mot-n4', q: `When a bus brakes suddenly, standing passengers lurch forward. This is best explained by:`, options: [`Newton's first law – their bodies tend to keep moving forward`, `Newton's third law – the bus pushes them forward`, `Gravity pulling them forward`, `A forward force from the brakes`], answer: 0, explain: `Inertia: the passengers continue moving at the original velocity until a force (e.g. a handrail) stops them. No forward force acts on them.` },
  { id: 'mot-q17', topic: 'motion', outcome: 'mot-n4', q: `A rocket in deep space accelerates forward by firing its engines. Which explains this?`, options: [`The exhaust pushes against the air behind the rocket`, `The rocket pushes exhaust gas backwards, and the gas pushes the rocket forwards with an equal and opposite force`, `Gravity from the Sun pulls it forward`, `Inertia pushes the rocket`], answer: 1, explain: `Newton's third law: the force pair acts between rocket and exhaust gas. No air is needed, which is why rockets work in space.` },
  { id: 'mot-q18', topic: 'motion', outcome: 'mot-n5', q: `An astronaut has a mass of 60 kg. What is her weight on the Moon, where g = 1.6 m/s²?`, options: [`60 kg`, `588 N`, `37.5 N`, `96 N`], answer: 3, explain: `W = mg = 60 × 1.6 = 96 N. Her mass is still 60 kg; 588 N is her weight on Earth.` },
  { id: 'mot-q19', topic: 'motion', outcome: 'mot-n5', q: `A car travels along a straight road at a constant 60 km/h. Which statement is correct?`, options: [`The driving force is greater than the resistive forces`, `There is no force acting on the car`, `The forces are balanced, so the net force is zero`, `The car is accelerating`], answer: 2, explain: `Constant velocity means zero acceleration, so the net force is zero: driving force = resistive forces (Newton's first law).` },
  { id: 'mot-q20', topic: 'motion', outcome: 'mot-n5', q: `A skydiver reaches terminal velocity. At this point:`, options: [`Air resistance is greater than weight`, `Air resistance equals weight, so acceleration is zero`, `Velocity is zero`, `Weight is zero`], answer: 1, explain: `At terminal velocity the forces are balanced: net force 0, acceleration 0, but the skydiver is moving fast at constant velocity.` },
  { id: 'mot-q21', topic: 'motion', outcome: 'mot-n6', q: `What is the kinetic energy of a 1000 kg car moving at 20 m/s?`, options: [`200 000 J`, `20 000 J`, `10 000 J`, `400 000 J`], answer: 0, explain: `Ek = ½mv² = 0.5 × 1000 × 20² = 0.5 × 1000 × 400 = 200 000 J. Forgetting the ½ gives 400 000 J.` },
  { id: 'mot-q22', topic: 'motion', outcome: 'mot-n6', q: `A 2.0 kg book is lifted onto a shelf 1.5 m high. What gravitational potential energy does it gain? (g = 9.8 m/s²)`, options: [`3.0 J`, `13 J`, `29.4 J`, `19.6 J`], answer: 2, explain: `Ep = mgh = 2.0 × 9.8 × 1.5 = 29.4 J.` },
  { id: 'mot-q23', topic: 'motion', outcome: 'mot-n6', q: `A ball is dropped from 5.0 m. Ignoring air resistance, its speed just before hitting the ground is closest to:`, options: [`5.0 m/s`, `49 m/s`, `98 m/s`, `9.9 m/s`], answer: 3, explain: `mgh = ½mv² → v = √(2gh) = √(2 × 9.8 × 5.0) = √98 ≈ 9.9 m/s.` },
  { id: 'mot-q24', topic: 'motion', outcome: 'mot-n6', q: `A 2 kg trolley moving at 4 m/s collides with a stationary 3 kg trolley and they stick together. What is their velocity after the collision?`, options: [`1.6 m/s`, `2.7 m/s`, `4.0 m/s`, `0.6 m/s`], answer: 0, explain: `Momentum is conserved: (2 × 4) + 0 = (2 + 3)v → v = 8 ÷ 5 = 1.6 m/s.` },
  { id: 'mot-q25', topic: 'motion', outcome: 'mot-n6', q: `In an inelastic car crash, what happens to the kinetic energy that "disappears"?`, options: [`It is destroyed`, `It is transformed into heat, sound and energy of deformation`, `It becomes momentum`, `It is converted into mass`], answer: 1, explain: `Energy is conserved – it is transformed into other forms such as heat, sound and the work done bending metal.` },
  { id: 'rxn-q1', topic: 'reactions', outcome: 'rxn-n1', q: `What is the correct formula for calcium nitrate?`, options: [`CaNO₃`, `Ca₂NO₃`, `Ca(NO₃)₂`, `CaN₂`], answer: 2, explain: `Ca²⁺ needs two NO₃⁻ ions to balance charge; brackets show two nitrate units.` },
  { id: 'rxn-q2', topic: 'reactions', outcome: 'rxn-n1', q: `What is the name of (NH₄)₂SO₄?`, options: [`Ammonia sulfide`, `Ammonium sulfate`, `Nitrogen hydrogen sulfate`, `Ammonium sulfite`], answer: 1, explain: `NH₄⁺ is ammonium and SO₄²⁻ is sulfate (sulfite is SO₃²⁻).` },
  { id: 'rxn-q3', topic: 'reactions', outcome: 'rxn-n1', q: `Which is the correct formula for iron(III) oxide?`, options: [`FeO`, `Fe₃O`, `FeO₃`, `Fe₂O₃`], answer: 3, explain: `Fe³⁺ and O²⁻: 2 × (+3) = +6 balances 3 × (−2) = −6, giving Fe₂O₃.` },
  { id: 'rxn-q4', topic: 'reactions', outcome: 'rxn-n2', q: `A white solid has a high melting point, does not conduct as a solid, but conducts when dissolved in water. It is most likely:`, options: [`An ionic compound`, `A covalent molecular compound`, `A metal`, `A covalent network solid`], answer: 0, explain: `Ionic compounds have high melting points and conduct only when ions are free to move (molten or aqueous). Covalent molecular substances have low melting points and never conduct.` },
  { id: 'rxn-q5', topic: 'reactions', outcome: 'rxn-n2', q: `A gas is collected from the reaction of zinc with hydrochloric acid. Which test and result identify it?`, options: [`Limewater turns milky`, `A glowing splint relights`, `A lighted splint gives a squeaky pop`, `Damp red litmus turns blue`], answer: 2, explain: `Metal + acid produces hydrogen, which burns with a pop. Limewater tests CO₂; a glowing splint tests O₂.` },
  { id: 'rxn-q6', topic: 'reactions', outcome: 'rxn-n2', q: `When copper(II) carbonate is heated, the gas produced turns limewater milky because:`, options: [`Oxygen reacts with limewater`, `Carbon dioxide reacts with calcium hydroxide to form insoluble calcium carbonate`, `Hydrogen forms water`, `The limewater boils`], answer: 1, explain: `Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s) + H₂O(l); the CaCO₃ precipitate makes it cloudy.` },
  { id: 'rxn-q7', topic: 'reactions', outcome: 'rxn-n3', q: `Which is the correctly balanced equation for the combustion of methane?`, options: [`CH₄ + O₂ → CO₂ + H₂O`, `CH₄ + 2O₂ → CO₂ + 2H₂O`, `CH₄ + 3O₂ → CO₂ + 2H₂O`, `2CH₄ + O₂ → 2CO₂ + H₂O`], answer: 1, explain: `C: 1 = 1; H: 4 = 2 × 2; O: 2 × 2 = 4 = 2 + 2. Only B balances all three elements.` },
  { id: 'rxn-q8', topic: 'reactions', outcome: 'rxn-n3', q: `Marble chips react with hydrochloric acid in an OPEN flask on a balance. The mass reading decreases. The best explanation is:`, options: [`Mass is destroyed in chemical reactions`, `The acid evaporates`, `Carbon dioxide gas escapes from the flask`, `The balance is faulty`], answer: 2, explain: `Mass is conserved, but CO₂ produced escapes into the air. In a sealed flask (with a balloon) the mass stays constant.` },
  { id: 'rxn-q9', topic: 'reactions', outcome: 'rxn-n4', q: `What are the products when magnesium reacts with sulfuric acid?`, options: [`Magnesium sulfate and hydrogen`, `Magnesium sulfate and water`, `Magnesium oxide and hydrogen`, `Magnesium sulfate, water and carbon dioxide`], answer: 0, explain: `Metal + acid → salt + hydrogen: Mg + H₂SO₄ → MgSO₄ + H₂. Water and CO₂ form with carbonates.` },
  { id: 'rxn-q10', topic: 'reactions', outcome: 'rxn-n4', q: `Which is a use of neutralisation?`, options: [`Adding lime to acidic soil to raise its pH`, `Burning petrol in an engine`, `Electrolysis of water`, `Storing hydrogen peroxide in brown bottles`], answer: 0, explain: `Lime (CaO/Ca(OH)₂) is a base that neutralises soil acidity. The others are combustion, electrolysis and preventing photodecomposition.` },
  { id: 'rxn-q11', topic: 'reactions', outcome: 'rxn-n4', q: `Solution A has pH 2 and solution B has pH 4. Compared with B, the H⁺ concentration of A is:`, options: [`2 times greater`, `100 times greater`, `2 times smaller`, `100 times smaller`], answer: 1, explain: `The pH scale is logarithmic: each unit is a factor of 10, so 2 units = 10 × 10 = 100 times more H⁺.` },
  { id: 'rxn-q12', topic: 'reactions', outcome: 'rxn-n4', q: `A few drops of phenolphthalein are added to a colourless solution, which turns pink. The solution is:`, options: [`Strongly acidic`, `Weakly acidic`, `Neutral`, `Basic`], answer: 3, explain: `Phenolphthalein is colourless in acids and neutral solutions, and pink in bases.` },
  { id: 'rxn-q13', topic: 'reactions', outcome: 'rxn-n4', q: `0.1 mol/L hydrochloric acid has pH 1, while 0.1 mol/L ethanoic acid has pH about 3. This is because:`, options: [`Ethanoic acid is more concentrated`, `Hydrochloric acid fully ionises while ethanoic acid only partially ionises`, `Ethanoic acid is a base`, `Hydrochloric acid contains no hydrogen`], answer: 1, explain: `At the same concentration, the strong acid releases far more H⁺ because it ionises completely. Strength ≠ concentration.` },
  { id: 'rxn-q14', topic: 'reactions', outcome: 'rxn-n4', q: `What gas is produced when sodium hydrogen carbonate (baking soda) reacts with vinegar?`, options: [`Hydrogen`, `Oxygen`, `Carbon dioxide`, `Chlorine`], answer: 2, explain: `Acid + carbonate/hydrogen carbonate → salt + water + carbon dioxide.` },
  { id: 'rxn-q15', topic: 'reactions', outcome: 'rxn-n5', q: `A Bunsen burner with its air hole closed gives a yellow, sooty flame. Compared with the blue flame, this flame:`, options: [`Shows complete combustion and releases more energy`, `Shows incomplete combustion, produces carbon (soot) and CO, and releases less energy`, `Produces only CO₂ and water`, `Is hotter`], answer: 1, explain: `Limited oxygen → incomplete combustion → soot (glowing yellow) and carbon monoxide; less energy is released than the hot blue complete-combustion flame.` },
  { id: 'rxn-q16', topic: 'reactions', outcome: 'rxn-n5', q: `Why is a faulty gas heater in a poorly ventilated room dangerous?`, options: [`It produces too much oxygen`, `Incomplete combustion produces carbon monoxide, which reduces the blood's ability to carry oxygen`, `It produces hydrogen`, `It makes the air too humid`], answer: 1, explain: `CO binds to haemoglobin much more strongly than O₂ and is odourless, so poisoning can occur without warning.` },
  { id: 'rxn-q17', topic: 'reactions', outcome: 'rxn-n5', q: `Solutions of silver nitrate and sodium chloride are mixed. Which substance forms as a precipitate?`, options: [`Sodium nitrate`, `Silver chloride`, `Sodium chloride`, `No precipitate forms`], answer: 1, explain: `Chlorides are soluble except with Ag⁺ (and Pb²⁺), so AgCl precipitates (white). All nitrates and sodium compounds are soluble.` },
  { id: 'rxn-q18', topic: 'reactions', outcome: 'rxn-n5', q: `Which pair of solutions would NOT form a precipitate when mixed?`, options: [`Barium chloride + sodium sulfate`, `Copper(II) sulfate + sodium hydroxide`, `Potassium nitrate + sodium chloride`, `Lead(II) nitrate + potassium iodide`], answer: 2, explain: `Swapping gives KCl and NaNO₃ – both soluble (Group 1 and nitrates). The others form BaSO₄, Cu(OH)₂ and PbI₂ precipitates.` },
  { id: 'rxn-q19', topic: 'reactions', outcome: 'rxn-n6', q: `Green copper(II) carbonate turns black when heated strongly. What type of reaction is this?`, options: [`Thermal decomposition`, `Combustion`, `Neutralisation`, `Precipitation`], answer: 0, explain: `CuCO₃ → CuO (black) + CO₂ – one compound breaks into simpler substances using heat.` },
  { id: 'rxn-q20', topic: 'reactions', outcome: 'rxn-n6', q: `During the electrolysis of water, the volume of gas at the negative electrode is twice that at the positive electrode. The two gases are:`, options: [`Oxygen (negative) and hydrogen (positive)`, `Hydrogen (negative) and oxygen (positive)`, `Hydrogen and chlorine`, `Carbon dioxide and oxygen`], answer: 1, explain: `2H₂O → 2H₂ + O₂, so hydrogen is produced in twice the volume, at the negative electrode (cathode).` },
  { id: 'rxn-q21', topic: 'reactions', outcome: 'rxn-n6', q: `Which statement about photosynthesis and respiration is correct?`, options: [`Both release carbon dioxide`, `Photosynthesis releases energy; respiration stores it`, `Photosynthesis stores light energy in glucose; respiration releases energy from glucose`, `Only animals carry out respiration`], answer: 2, explain: `Photosynthesis converts light energy to chemical energy in glucose; respiration (in plants AND animals) releases it as ATP.` },
  { id: 'rxn-q22', topic: 'reactions', outcome: 'rxn-n6', q: `Why must starch be digested before the body can use it?`, options: [`Starch is poisonous`, `Starch molecules are too large to be absorbed into the blood, so enzymes break them into glucose`, `Starch contains no energy`, `Digestion turns starch into protein`], answer: 1, explain: `Digestive enzymes (amylase) hydrolyse large starch molecules into small soluble glucose molecules that can be absorbed and used in respiration.` }
);

SD.saq.push(
  { id: 'mot-s1', topic: 'motion', outcome: 'mot-n2', marks: 4,
    q: `A car accelerates uniformly from rest to 25 m/s in 10 s, then brakes uniformly to a stop over 50 m.<br>(a) Calculate the acceleration during the first 10 s. (1 mark)<br>(b) Calculate the distance travelled while accelerating. (1 mark)<br>(c) Calculate the deceleration while braking. (2 marks)`,
    criteria: ['(a) a = (25 − 0) ÷ 10 = 2.5 m s\u207b\u00b2', '(b) s = ut + ½at\u00b2 = ½ × 2.5 × 10\u00b2 = 125 m', '(c) Uses v\u00b2 = u\u00b2 + 2as with v = 0, u = 25, s = 50', '(c) a = −6.25 m s\u207b\u00b2 (deceleration of 6.25 m s\u207b\u00b2)'],
    model: `(a) a = (v − u) ÷ t = (25 − 0) ÷ 10 = <b>2.5 m s<sup>−2</sup></b>.<br>(b) s = ut + ½at<sup>2</sup> = 0 + ½ × 2.5 × 100 = <b>125 m</b>.<br>(c) v<sup>2</sup> = u<sup>2</sup> + 2as → 0 = 25<sup>2</sup> + 2 × a × 50 → a = −625 ÷ 100 = <b>−6.25 m s<sup>−2</sup></b> (a deceleration of 6.25 m s<sup>−2</sup>).`,
    keywords: ['v = u + at', 's = ut + ½at²', 'v² = u² + 2as', 'acceleration', 'deceleration', 'm/s²'] },
  { id: 'mot-s2', topic: 'motion', outcome: 'mot-n5', marks: 4,
    q: `Describe and explain the motion of a skydiver from the moment she jumps from a plane until she lands with her parachute open. Refer to the forces acting on her.`,
    criteria: ['Initially weight > air resistance so she accelerates downward', 'Air resistance increases with speed until it equals weight – net force zero → terminal velocity (constant speed)', 'Parachute opens: air resistance > weight → net upward force → decelerates', 'Air resistance decreases as she slows until it equals weight again → new, lower terminal velocity for landing'],
    model: `When she jumps, her weight is much larger than air resistance, so there is a net downward force and she accelerates (Newton\u2019s second law). As her speed increases, air resistance increases, so the net force and acceleration decrease. Eventually air resistance equals her weight; the forces are balanced, so she falls at a constant terminal velocity. When the parachute opens, air resistance suddenly becomes much greater than her weight, giving a net upward force, so she decelerates. As she slows, air resistance decreases until it again equals her weight, and she falls at a new, much lower terminal velocity, allowing a safe landing.`,
    keywords: ['weight', 'air resistance', 'net force', 'accelerates', 'terminal velocity', 'balanced', 'decelerates', 'parachute'] },
  { id: 'mot-s3', topic: 'motion', outcome: 'mot-n6', marks: 3,
    q: `A 0.50 kg ball is dropped from a height of 3.2 m.<br>(a) Calculate its gravitational potential energy at the top. (1 mark)<br>(b) Calculate its speed just before hitting the ground, ignoring air resistance. (1 mark)<br>(c) The ball rebounds to only 2.0 m. Use the law of conservation of energy to explain why. (1 mark)`,
    criteria: ['(a) Ep = mgh = 0.50 × 9.8 × 3.2 = 15.7 J', '(b) ½mv\u00b2 = 15.7 → v = √(2 × 9.8 × 3.2) ≈ 7.9 m s\u207b\u00b9', '(c) Energy is not destroyed; some kinetic energy is transformed into heat and sound (and deformation) during the bounce, so less is available to convert back into Ep'],
    model: `(a) E<sub>p</sub> = mgh = 0.50 × 9.8 × 3.2 = <b>15.7 J</b>.<br>(b) All E<sub>p</sub> → E<sub>k</sub>: ½ × 0.50 × v<sup>2</sup> = 15.7 → v = √(2 × 9.8 × 3.2) ≈ <b>7.9 m s<sup>−1</sup></b>.<br>(c) Energy cannot be created or destroyed. During the bounce some of the ball\u2019s kinetic energy is transformed into heat and sound (and into deforming the ball), so less energy is converted back to gravitational potential energy, and it reaches a lower height.`,
    keywords: ['mgh', 'kinetic energy', '½mv²', 'conservation of energy', 'transformed', 'heat', 'sound'] },
  { id: 'mot-s4', topic: 'motion', outcome: 'mot-n4', marks: 3,
    q: `Using Newton\u2019s laws, explain why passengers should wear seatbelts and why cars have airbags and crumple zones.`,
    criteria: ['Newton\u2019s 1st law/inertia: in a sudden stop the passenger keeps moving forward until a force stops them', 'Seatbelt provides the force to stop the passenger with the car, preventing impact with the windscreen/dashboard', 'Airbags/crumple zones increase stopping time, reducing the force (F = ma, smaller deceleration) and absorbing kinetic energy'],
    model: `By Newton\u2019s first law, when a car stops suddenly the passenger\u2019s body keeps moving forward at the original speed (inertia) until a force acts on it. A seatbelt supplies this force, stopping the passenger along with the car instead of letting them hit the dashboard or windscreen. Airbags and crumple zones increase the time taken for the passenger to stop, so the deceleration is smaller and, by F = ma, the force on the body is smaller; crumple zones also absorb kinetic energy by deforming.`,
    keywords: ['inertia', 'first law', 'force', 'seatbelt', 'time', 'f = ma', 'crumple zones', 'kinetic energy'] },
  { id: 'rxn-s1', topic: 'reactions', outcome: 'rxn-n4', marks: 4,
    q: `Write balanced chemical equations, including states, for:<br>(a) magnesium reacting with hydrochloric acid (2 marks)<br>(b) calcium carbonate reacting with nitric acid (2 marks)`,
    criteria: ['(a) Correct formulae: Mg, HCl, MgCl\u2082, H\u2082', '(a) Balanced with states: Mg(s) + 2HCl(aq) → MgCl\u2082(aq) + H\u2082(g)', '(b) Correct formulae: CaCO\u2083, HNO\u2083, Ca(NO\u2083)\u2082, H\u2082O, CO\u2082', '(b) Balanced with states: CaCO\u2083(s) + 2HNO\u2083(aq) → Ca(NO\u2083)\u2082(aq) + H\u2082O(l) + CO\u2082(g)'],
    model: `(a) Mg(s) + 2HCl(aq) → MgCl<sub>2</sub>(aq) + H<sub>2</sub>(g)<br>(b) CaCO<sub>3</sub>(s) + 2HNO<sub>3</sub>(aq) → Ca(NO<sub>3</sub>)<sub>2</sub>(aq) + H<sub>2</sub>O(l) + CO<sub>2</sub>(g)`,
    keywords: ['mgcl2', 'h2', 'ca(no3)2', 'co2', 'h2o', 'states', 'balanced'] },
  { id: 'rxn-s2', topic: 'reactions', outcome: 'rxn-n5', marks: 4,
    q: `Compare complete and incomplete combustion of a hydrocarbon fuel such as methane. Include an equation for each.`,
    criteria: ['Complete: plentiful oxygen → CO\u2082 + H\u2082O, blue flame, more energy', 'Complete equation: CH\u2084 + 2O\u2082 → CO\u2082 + 2H\u2082O', 'Incomplete: limited oxygen → CO and/or C (soot) + H\u2082O, yellow sooty flame, less energy, toxic CO', 'Incomplete equation: e.g. 2CH\u2084 + 3O\u2082 → 2CO + 4H\u2082O (or CH\u2084 + O\u2082 → C + 2H\u2082O)'],
    model: `Both are exothermic reactions of a fuel with oxygen. <b>Complete combustion</b> occurs with plenty of oxygen, producing only carbon dioxide and water with a clean blue flame and releasing the maximum energy: CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l). <b>Incomplete combustion</b> occurs when oxygen is limited, producing carbon monoxide and/or carbon (soot) as well as water, with a yellow, sooty flame and less energy released: 2CH<sub>4</sub>(g) + 3O<sub>2</sub>(g) → 2CO(g) + 4H<sub>2</sub>O(l). The carbon monoxide is toxic because it binds to haemoglobin.`,
    keywords: ['oxygen', 'carbon dioxide', 'carbon monoxide', 'soot', 'blue flame', 'yellow flame', 'less energy', 'exothermic'] },
  { id: 'rxn-s3', topic: 'reactions', outcome: 'rxn-n5', marks: 3,
    q: `Solutions of lead(II) nitrate and potassium iodide are mixed. Use the solubility rules to predict whether a precipitate forms, name it, and write a balanced equation with states.`,
    criteria: ['Identifies the possible products (lead(II) iodide and potassium nitrate) and applies solubility rules (iodides insoluble with Pb\u00b2\u207a; potassium/nitrate compounds soluble)', 'Names the precipitate: lead(II) iodide (yellow)', 'Balanced equation: Pb(NO\u2083)\u2082(aq) + 2KI(aq) → PbI\u2082(s) + 2KNO\u2083(aq)'],
    model: `Swapping partners gives lead(II) iodide and potassium nitrate. All potassium compounds and all nitrates are soluble, but iodides are insoluble with Pb<sup>2+</sup>, so a yellow precipitate of <b>lead(II) iodide</b> forms: Pb(NO<sub>3</sub>)<sub>2</sub>(aq) + 2KI(aq) → PbI<sub>2</sub>(s) + 2KNO<sub>3</sub>(aq).`,
    keywords: ['solubility rules', 'lead(ii) iodide', 'pbi2', 'precipitate', 'potassium nitrate', 'insoluble', 'yellow'] },
  { id: 'rxn-s4', topic: 'reactions', outcome: 'rxn-n6', marks: 4,
    q: `Discuss the importance of photosynthesis, respiration and digestion, and how they are linked.`,
    criteria: ['Photosynthesis: 6CO\u2082 + 6H\u2082O → C\u2086H\u2081\u2082O\u2086 + 6O\u2082; converts light energy into chemical energy in glucose, base of food chains, produces O\u2082', 'Respiration: glucose + O\u2082 → CO\u2082 + H\u2082O + energy (ATP) for muscle contraction, nerve impulses, growth', 'Digestion: enzymes break large food molecules into small soluble molecules (glucose, amino acids, fatty acids) for absorption', 'Links: digestion supplies glucose for respiration; respiration releases CO\u2082 and water used in photosynthesis, which supplies glucose and O\u2082'],
    model: `Photosynthesis (6CO<sub>2</sub> + 6H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub>) uses light energy absorbed by chlorophyll to make glucose, storing chemical energy at the base of food chains and releasing oxygen. Respiration (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> → 6CO<sub>2</sub> + 6H<sub>2</sub>O + energy) releases this energy as ATP to power muscle contraction, nerve impulses and growth. Digestion uses enzymes to break large food molecules such as starch, proteins and fats into small soluble glucose, amino acids, fatty acids and glycerol that can be absorbed into the blood. They are linked: digestion supplies the glucose needed for respiration, and respiration returns the carbon dioxide and water that plants use in photosynthesis to make more glucose and oxygen.`,
    keywords: ['photosynthesis', 'glucose', 'light energy', 'respiration', 'atp', 'digestion', 'enzymes', 'oxygen'] }
);

SD.seq.push(
  { id: 'mot-seq1', topic: 'motion', title: 'Order the stages of a skydive', items: ['Weight > air resistance: accelerates downward', 'Air resistance increases as speed increases', 'Air resistance = weight: first terminal velocity', 'Parachute opens: air resistance > weight, decelerates', 'Air resistance = weight again: lower terminal velocity', 'Lands safely'] },
  { id: 'rxn-seq1', topic: 'reactions', title: 'Order the steps for writing and balancing a chemical equation', items: ['Write the word equation', 'Write correct formulae for all reactants and products', 'Count the atoms of each element on both sides', 'Add coefficients (not subscripts) to balance each element', 'Check all elements balance and add states'] }
);
