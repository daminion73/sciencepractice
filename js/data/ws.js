// Working Scientifically (SC5-7WS, 8WS, 9WS) – practical and data skills
SD.topics.push({
  id: 'ws',
  name: 'Working Scientifically',
  short: 'Working Sci',
  color: '#f472b6',
  examined: true,
  scope: 'Data processing, graphing, validity/reliability/accuracy, method & risk (SC5-7WS, 8WS, 9WS)',
  notes: [
    { id: 'ws-n1', title: 'Variables, control groups, aims and hypotheses', html: `
<table class="t">
<tr><th>Term</th><th>Definition</th><th>Example: effect of temperature on time for Mg to dissolve in HCl</th></tr>
<tr><td><b>Independent variable (IV)</b></td><td>The ONE factor the experimenter deliberately changes</td><td>Temperature of the acid (°C)</td></tr>
<tr><td><b>Dependent variable (DV)</b></td><td>The ONE factor measured; it responds to the IV</td><td>Time for the Mg to completely dissolve (s)</td></tr>
<tr><td><b>Controlled variables</b></td><td>All other factors that could affect the DV, kept constant so only the IV affects the DV (fair test)</td><td>Concentration and volume of HCl, mass/length and surface area of Mg, same test tube, same stirring</td></tr>
<tr><td><b>Control (experiment/group)</b></td><td>A set-up used as a baseline for comparison, usually without the factor being tested (or at a standard value)</td><td>e.g. fertiliser investigation: plants given water with <b>no</b> fertiliser</td></tr>
</table>
<div class="warn">A <b>controlled variable</b> is not the same as a <b>control</b>. Controlled variables are kept constant in every trial; a control is a separate set-up for comparison that shows any change is caused by the IV and not something else (e.g. natural change over time).</div>
<div class="tip">For "how would you control this variable?" (2022 Section C Q1b) you must say <b>HOW</b>, not just name it: "keep the acid concentration constant by using 1.0 mol/L HCl from the same stock bottle"; "keep temperature constant using a water bath at 25 °C"; "keep surface area constant by using Mg ribbon cut to 2.0 cm from the same roll". Naming the variable alone did not earn marks.</div>
<h4>Aim</h4>
<p>States the purpose; usually begins "To investigate the effect of [IV] on [DV]". e.g. <i>To investigate the effect of temperature on the time taken for magnesium to dissolve in hydrochloric acid.</i></p>
<h4>Hypothesis</h4>
<ul>
<li>A testable prediction with a <b>cause-and-effect</b> structure linking the IV and DV, ideally with a scientific <b>reason</b>.</li>
<li>Must be <b>falsifiable</b> (able to be proven wrong) and specific about the direction of change.</li>
<li>Template: "<b>If/As</b> [IV] increases, <b>then</b> [DV] will increase/decrease, <b>because</b> [scientific reason]."</li>
</ul>
<div class="model"><b>Model hypothesis:</b> As the temperature of the hydrochloric acid increases, the time taken for the magnesium to dissolve will decrease, because particles have more kinetic energy, so they collide more frequently and with more energy, increasing the rate of reaction.</div>
<h4>Types of data</h4>
<ul>
<li><b>Qualitative</b> – descriptions (colour, smell). <b>Quantitative</b> – numbers with units.</li>
<li><b>Categorical</b> – groups/names (type of metal, brand). <b>Discrete</b> – countable whole numbers (number of seeds germinated). <b>Continuous</b> – any value in a range (time, mass, temperature).</li>
</ul>
` },
    { id: 'ws-n2', title: 'Writing a method and equipment list', html: `
<h4>Rules for a full-mark method</h4>
<ul>
<li><b>Numbered steps</b>, each starting with a <b>verb</b> (Measure, Pour, Add, Record, Repeat…), third person/imperative, present tense.</li>
<li><b>Specific</b> quantities, equipment and concentrations: "Measure 20 mL of 1.0 mol/L HCl using a 25 mL measuring cylinder" – not "add some acid".</li>
<li>Say exactly <b>how the IV is changed</b> and <b>how the DV is measured</b> (instrument, when to start/stop timing).</li>
<li>State how controlled variables are kept constant.</li>
<li>Test at least <b>5 different values of the IV</b> (evenly spread, wide range) with at least <b>3 trials each</b>, then <b>calculate averages</b>. Wording: "Repeat steps 2–6 two more times" (trials) and "Repeat steps 2–7 for temperatures of 10, 20, 30, 40 and 50 °C" (IV values).</li>
<li>Include a control if needed and safe disposal at the end.</li>
<li>Someone else should be able to repeat it exactly (this supports reliability and validity).</li>
</ul>
<div class="model"><b>Model method (temperature vs Mg in HCl):</b><ol>
<li>Measure 10 mL of 1.0 mol/L hydrochloric acid with a 10 mL measuring cylinder and pour it into a test tube held in a test-tube rack.</li>
<li>Place the test tube in a water bath (beaker of water on a hotplate, or ice water) until a thermometer in the acid reads 10 °C.</li>
<li>Cut a 2.0 cm strip of magnesium ribbon from the same roll, using a ruler.</li>
<li>Add the magnesium to the acid and immediately start a stopwatch.</li>
<li>Stop the stopwatch when no magnesium remains visible and record the time in a results table.</li>
<li>Repeat steps 1–5 two more times using fresh acid and magnesium, then calculate the average time.</li>
<li>Repeat steps 1–6 at 20, 30, 40 and 50 °C.</li>
<li>Dispose of solutions as directed by the teacher.</li></ol></div>
<h4>Equipment lists</h4>
<ul>
<li>List <b>specific</b> items with sizes/amounts: "100 mL beaker", "thermometer (−10 to 110 °C)", "stopwatch", "electronic balance (±0.01 g)".</li>
<li>Think what else each item needs: Bunsen burner → heatproof mat, tripod, gauze; test tubes → test-tube rack.</li>
<li>2022 marker: "heating apparatus" or generic "PPE" was <b>not</b> accepted – name the item (hotplate, thermometer, stopwatch, ice bath, measuring cylinder).</li>
</ul>
<div class="tip">Reduce uncertainty in your method design: time 10 oscillations of a pendulum and divide by 10 (reaction-time error becomes a smaller percentage); use a water bath instead of "room temperature"; read volumes at eye level.</div>
` },
    { id: 'ws-n3', title: 'Risk assessments', html: `
<p>A risk assessment identifies hazards, the harm they could cause and how to minimise the risk. Be <b>specific</b> to the experiment – generic "wear PPE" alone rarely gets full marks.</p>
<table class="t">
<tr><th>Hazard</th><th>Risk (possible harm)</th><th>Precaution (how to minimise)</th></tr>
<tr><td>1.0 mol/L hydrochloric acid (corrosive/irritant)</td><td>Burns or irritation to skin and eyes if splashed</td><td>Wear safety glasses and gloves; use small volumes; wash spills with plenty of water immediately</td></tr>
<tr><td>Hotplate / Bunsen burner / hot water bath</td><td>Burns from hot equipment or scalding water</td><td>Use tongs/heatproof gloves; let equipment cool; keep hotplate away from the bench edge</td></tr>
<tr><td>Glassware</td><td>Cuts from broken glass</td><td>Keep glassware in the centre of the bench; report breakages; sweep up with a dustpan, never bare hands; dispose in broken-glass bin</td></tr>
<tr><td>Hydrogen gas produced</td><td>Flammable – could ignite</td><td>Work in a ventilated area away from open flames</td></tr>
<tr><td>Electrical equipment near water</td><td>Electric shock</td><td>Keep water away from power points; check cords; switch off before adjusting</td></tr>
<tr><td>Falling masses (physics)</td><td>Injury to feet</td><td>Place a cushion/box underneath; use small masses; keep feet clear</td></tr>
</table>
<p>Some formats also rate <b>likelihood</b> (frequent → improbable) and <b>severity</b> (catastrophic → negligible) to give an overall risk level (high / medium / low).</p>
<div class="tip">One mark is usually given per hazard with a matched, sensible precaution. Give 2–3 hazards specific to the chemicals and equipment in the question.</div>
` },
    { id: 'ws-n4', title: 'Results tables, averages, outliers and uncertainty', html: `
<h4>Results table rules (2022 marking criteria)</h4>
<ul>
<li>Ruled table with a clear title; data and headings <b>inside</b> the table.</li>
<li><b>Independent variable in the left column</b> (or top row); all headings in the top row(s).</li>
<li><b>Units in the headings only</b>, e.g. "Time (s)" – never write units next to each number.</li>
<li>Columns for each trial and an <b>average</b> column (plus processed data, e.g. t<sup>2</sup>, if needed).</li>
<li>Consistent number of decimal places matching the instrument.</li>
</ul>
<table class="t">
<tr><th rowspan="2">Temperature (°C)</th><th colspan="4">Reaction time (s)</th></tr>
<tr><th>Trial 1</th><th>Trial 2</th><th>Trial 3</th><th>Average</th></tr>
<tr><td>5</td><td>180</td><td>171</td><td>199</td><td>183</td></tr>
<tr><td>11</td><td>158</td><td>140</td><td>149</td><td>149</td></tr>
<tr><td>24</td><td>98</td><td>102</td><td>133</td><td>111</td></tr>
<tr><td>39</td><td>50</td><td>38</td><td>35</td><td>41</td></tr>
<tr><td>62</td><td>11</td><td>9</td><td>13</td><td>11</td></tr>
</table>
<h4>Averages and outliers</h4>
<ul>
<li><b>Mean</b> = sum of trials ÷ number of trials. Round to the same precision as the data.</li>
<li>An <b>outlier (anomaly)</b> is a result that does not fit the pattern of the other repeats (e.g. 133 s at 24 °C above is suspicious). Ideally <b>repeat that trial</b>; if you exclude it from the average, say so and explain why. Never delete data just because it doesn\u2019t match the hypothesis.</li>
<li>The <b>spread (range)</b> of repeats shows the size of random error: small spread → precise/reliable results.</li>
</ul>
<h4>Uncertainty and error calculations</h4>
<ul>
<li><b>Absolute uncertainty</b> of a single reading: analogue scale = <b>± half the smallest division</b> (ruler with mm markings ±0.5 mm; measuring cylinder with 1 mL marks ±0.5 mL). Digital: ± the last digit (the class notes use half the last digit, e.g. 1.85 kg ± 0.005 kg – follow your teacher).</li>
<li>For repeated readings: uncertainty ≈ ± half the range = ±(max − min)/2.</li>
<li><b>% uncertainty</b> = (absolute uncertainty ÷ measured value) × 100%. Larger measurements → smaller % uncertainty.</li>
<li><b>Absolute error</b> = |measured − accepted value|. <b>% error</b> = |measured − accepted| ÷ accepted × 100%. Below ~5% is generally considered accurate.</li>
</ul>
<div class="model"><b>Worked example:</b> A student measures g = 9.52 m s<sup>−2</sup>. Accepted = 9.80 m s<sup>−2</sup>.<br>% error = |9.52 − 9.80| ÷ 9.80 × 100 = 0.28 ÷ 9.80 × 100 = <b>2.9%</b>.<br>A 30 cm ruler (±0.05 cm) measures a length of 2.5 cm: % uncertainty = 0.05 ÷ 2.5 × 100 = <b>2%</b>.</div>
<div class="warn">Park\u2019s notes suggest "faking" or making up results to remove outliers – this is scientific misconduct and is never acceptable. Repeat the trial instead and report what you actually measured.</div>
` },
    { id: 'ws-n5', title: 'Choosing and drawing graphs', html: `
<table class="t">
<tr><th>Graph type</th><th>Use when</th><th>Key rules</th></tr>
<tr><td><b>Scatter plot</b> (with line/curve of best fit)</td><td>IV and DV are both <b>continuous</b> numbers (e.g. temperature vs time)</td><td>Points not joined dot-to-dot; draw a line or curve of best fit to show the trend</td></tr>
<tr><td><b>Column (bar) graph</b></td><td>IV is <b>categorical or discrete</b> (e.g. type of metal, brand of tablet)</td><td>Bars separated by gaps; y-axis starts at zero</td></tr>
<tr><td><b>Histogram</b></td><td>Showing the <b>frequency</b> of continuous data grouped into ranges ("bins") (e.g. heights of 100 students)</td><td>Bars <b>touch</b>; equal bin widths; y-axis = frequency</td></tr>
<tr><td><b>Line graph</b> (point-to-point)</td><td>Change over time where each point is a separate measurement of one thing (e.g. daily temperature record)</td><td>Points joined with straight segments</td></tr>
<tr><td><b>Pie chart</b></td><td>Parts of a whole (percentages)</td><td>Rarely used in pracs</td></tr>
</table>
<h4>Graph checklist (2022 Section C marking)</h4>
<ol>
<li>Correct type – usually a <b>scatter plot</b> for experiments with a numerical IV.</li>
<li><b>IV on the x-axis</b>, DV on the y-axis.</li>
<li><b>Axes labelled with quantity and units</b>, e.g. "Temperature (°C)"; units only in the labels.</li>
<li><b>Appropriate linear scale</b>: even intervals, and the data use <b>at least half (ideally ≥ 75%) of the grid</b> in each direction. Axes need not start at zero if that wastes space (column graphs should).</li>
<li>Points plotted accurately (small crosses ×).</li>
<li><b>Line or curve of best fit</b> – a smooth line showing the trend, NOT dot-to-dot.</li>
<li>A descriptive title ("The effect of temperature on reaction time of Mg in HCl"); a key if more than one data set (different symbols).</li>
<li>Drawn in pencil with a ruler for straight lines.</li>
</ol>
<div class="warn">The commonest errors: joining dots, plotting the IV on the y-axis, unevenly spaced scales (e.g. 5, 11, 24, 39, 62 spaced equally!), and squashing the graph into one corner.</div>
` },
    { id: 'ws-n6', title: 'Lines of best fit, gradient, interpolation and extrapolation', html: `
<h4>Line (or curve) of best fit</h4>
<ul>
<li>A single smooth straight line or curve showing the overall trend, with roughly <b>equal numbers of points on each side</b>; ignore clear outliers.</li>
<li>Draw a <b>straight line</b> if the data look linear; otherwise a smooth <b>curve</b> (the 2022 temperature data needed a curve, though a straight line that fitted the points evenly was accepted).</li>
<li>With repeats, the line counts as passing "through" a point if it passes within the spread (range) of the repeats.</li>
<li>Only force the line through the origin if theory says y = 0 when x = 0 <b>and</b> the data allow it.</li>
</ul>
<div class="warn">Park\u2019s notes say "always start your LOBF from (0,0)". Wrong in general – draw the best fit to the data. Whether the line <b>can</b> pass through the origin is itself evidence (a proportional relationship), and a non-zero y-intercept can reveal a <b>systematic error</b>.</div>
<h4>Gradient</h4>
<ol>
<li>Choose two points <b>on the line of best fit</b> (not data points) that are far apart.</li>
<li>Draw construction lines (a triangle) to read their coordinates.</li>
<li>Gradient = rise ÷ run = (y<sub>2</sub> − y<sub>1</sub>) ÷ (x<sub>2</sub> − x<sub>1</sub>).</li>
<li>Give <b>units</b> = units of y ÷ units of x (e.g. m ÷ s = m s<sup>−1</sup>; N ÷ m = N m<sup>−1</sup>; m ÷ s<sup>2</sup> = m s<sup>−2</sup>).</li>
</ol>
<div class="model"><b>Example:</b> A distance–time line passes through (1.0 s, 3.0 m) and (5.0 s, 23.0 m). Gradient = (23.0 − 3.0) ÷ (5.0 − 1.0) = 20.0 ÷ 4.0 = <b>5.0 m s<sup>−1</sup></b> (the speed).</div>
<h4>Interpolation vs extrapolation</h4>
<ul>
<li><b>Interpolation</b> – reading a value <b>within</b> the range of measured data from the line of best fit (reliable). Show dashed construction lines on the graph and use the graph, not a formula, if asked "according to the graph".</li>
<li><b>Extrapolation</b> – extending the line <b>beyond</b> the measured range to predict (less reliable, because the trend may change). Draw the extension dashed.</li>
</ul>
<h4>Describing trends</h4>
<p>Describe direction and shape with data: "As temperature increased from 5 °C to 62 °C, the average reaction time decreased from 183 s to 11 s; the decrease was steepest at lower temperatures (a non-linear, negative relationship)."</p>
` },
    { id: 'ws-n7', title: 'Data processing and linearising data', html: `
<div class="key"><b>Linearising</b> means processing raw data (e.g. squaring, taking the reciprocal) so that, if a proposed relationship is true, a graph of the processed data gives a <b>straight line through the origin</b>. Straight lines are easy to judge by eye and their gradients give constants.</div>
<table class="t">
<tr><th>Suspected relationship</th><th>Plot</th><th>Gradient means</th></tr>
<tr><td>y ∝ x</td><td>y vs x</td><td>constant of proportionality</td></tr>
<tr><td>Falling object from rest: s = ½at<sup>2</sup> (s ∝ t<sup>2</sup>)</td><td>s vs t<sup>2</sup></td><td>½a, so a = 2 × gradient</td></tr>
<tr><td>Pendulum: T = 2π√(L/g) (T<sup>2</sup> ∝ L)</td><td>T<sup>2</sup> vs L</td><td>4π<sup>2</sup>/g</td></tr>
<tr><td>Inverse: y ∝ 1/x (e.g. pressure vs volume of a gas)</td><td>y vs 1/x</td><td>constant k</td></tr>
<tr><td>Inverse square: y ∝ 1/x<sup>2</sup> (e.g. light intensity vs distance)</td><td>y vs 1/x<sup>2</sup></td><td>constant k</td></tr>
<tr><td>Kinetic energy: E<sub>k</sub> = ½mv<sup>2</sup></td><td>E<sub>k</sub> vs v<sup>2</sup></td><td>½m</td></tr>
</table>
<h4>How to interpret (2024 Q32 language)</h4>
<ul>
<li>If a straight line <b>through the origin</b> can be drawn through the data (within the spread of repeats) → the data are <b>consistent with</b> y ∝ (processed x).</li>
<li>If no straight line through the origin fits → the data are <b>inconsistent with</b> that relationship.</li>
<li>If a <b>horizontal</b> line can be drawn through all the error ranges → the data are consistent with <b>no correlation</b>.</li>
<li>Several relationships may be consistent with the same data – then more/better data are needed to distinguish them (wider range, more repeats, more precise instruments).</li>
</ul>
<div class="warn">Data can be "consistent with" a relationship but never <b>prove</b> it. Use the phrase "consistent with", not "proves".</div>
<div class="model"><b>Example (from 2024 Q32):</b> A graph of s vs t for a falling ball curves upward, so a straight line through the origin cannot be drawn – inconsistent with s ∝ t. A graph of s vs t<sup>2</sup> gives a straight line through the origin – consistent with s ∝ t<sup>2</sup>. As a horizontal line cannot fit the s vs t data, there is some correlation between s and t.</div>
<div class="tip">Always include processed data (e.g. a t<sup>2</sup> (s<sup>2</sup>) column) in your results table, with correct units.</div>
` },
    { id: 'ws-n8', title: 'Accuracy, precision, reliability, validity and errors', html: `
<table class="t">
<tr><th>Term</th><th>Meaning</th><th>Improve by</th></tr>
<tr><td><b>Accuracy</b></td><td>How close a measurement/result is to the <b>true (accepted) value</b>. Judged with % error or comparison with the theoretical value; reduced by <b>systematic</b> errors</td><td>Calibrate/zero instruments; more precise instruments; read at eye level; eliminate systematic errors; measure larger quantities</td></tr>
<tr><td><b>Precision</b></td><td>How close repeated measurements are to <b>each other</b> (small spread); also the fineness of an instrument\u2019s scale (resolution)</td><td>Instruments with finer scales; consistent technique</td></tr>
<tr><td><b>Reliability</b></td><td>The <b>consistency</b> of results when the experiment is repeated (by you or others). Shown by a small spread of repeats and little scatter about the line of best fit</td><td>≥ 3 (ideally 5+) repeats and averages; repeat outliers; same technique/equipment; electronic timing (light gates, data loggers)</td></tr>
<tr><td><b>Validity</b></td><td>Whether the experiment actually <b>tests the aim</b> fairly – only the IV changes, all other variables controlled, the DV measures what is intended</td><td>Control variables (with stated methods), include a control, appropriate range of IV, measure the right DV, method that addresses the aim</td></tr>
</table>
<div class="key">Dartboard picture: tightly grouped but off-centre = <b>precise but not accurate</b> (systematic error). Spread evenly around the bullseye = accurate on average but not precise (random error). Tight group on the bullseye = accurate and precise.</div>
<h4>Systematic vs random errors</h4>
<table class="t">
<tr><th></th><th>Systematic error</th><th>Random error</th></tr>
<tr><td>Nature</td><td>Shifts every reading by the same amount/direction (consistent bias)</td><td>Unpredictable scatter above and below the true value</td></tr>
<tr><td>Affects</td><td><b>Accuracy</b></td><td><b>Precision/reliability</b></td></tr>
<tr><td>Examples</td><td>Balance reads 0.5 g with nothing on it (zero error); thermometer miscalibrated; always reading a meniscus from above (consistent parallax); heat lost to the surroundings in every trial; stretched tape measure</td><td>Human reaction time with a stopwatch; judging when a colour changes; fluctuations in room temperature/draughts; reading a scale between divisions</td></tr>
<tr><td>Detected by</td><td>Comparing with the accepted value; non-zero y-intercept on a graph that should pass through the origin</td><td>Spread of repeated results; scatter about the line of best fit</td></tr>
<tr><td>Reduced by</td><td>Calibrating/zeroing equipment, better method, insulating – <b>NOT by repeating</b></td><td><b>Repeating and averaging</b>, more precise/automatic instruments (light gates), measuring larger quantities (10 oscillations)</td></tr>
</table>
<div class="warn">Repeating trials does <b>not</b> remove systematic error – every repeat is wrong by the same amount. Also: more repeats improve the reliability of the <b>results (averages)</b>; to make the <b>procedure</b> itself more reliable you must revise it (e.g. a less error-prone instrument).</div>
<p>Other error sources: <b>parallax error</b> (reading a scale at an angle – read at eye level), <b>limits of measurement</b> (resolution of the instrument), environmental, and rounding in calculations.</p>
` },
    { id: 'ws-n9', title: 'Evaluating experiments, improving data collection, secondary sources and conclusions', html: `
<h4>Scaffold for "Evaluate the experimental design" (5 marks)</h4>
<ol>
<li><b>Reliability</b> – number of trials, consistency of repeats, averages, outliers → judgement + improvement.</li>
<li><b>Accuracy</b> – precision of instruments, calibration, systematic/human error (e.g. reaction time, subjective end points) → judgement + improvement.</li>
<li><b>Validity</b> – were all variables controlled? Does it test the aim? Was a control used? → judgement + improvement.</li>
<li>Give at least <b>two specific improvements</b> with the reason each helps.</li>
<li>Finish with a clear overall <b>judgement</b> (e.g. "Overall the design has low validity and limited reliability").</li>
</ol>
<div class="model"><b>Example (comparing Mg ribbon and CaCO<sub>3</sub> chips in HCl, only 2 trials, flask A swirled, B not):</b> The method has limited reliability, as only two trials were done, so consistency cannot be judged; at least three trials with averages should be used. Accuracy is limited because judging when bubbling stops by eye introduces random human error; measuring gas volume with a gas syringe or mass loss on a balance at regular intervals would be more accurate. Validity is low because surface area was not controlled (ribbon vs chips) and only flask A was swirled, so differences may not be due to the type of reactant; both should be powdered to the same size and treated identically. Overall the design is poorly valid and only somewhat reliable.</div>
<h4>Suggestions to improve data collection (2024 Q32b – 6 marks)</h4>
<p>Top marks need <b>three significant suggestions</b>, each with a <b>cause-and-effect</b> statement showing how it strengthens the conclusion. Strong suggestions:</p>
<ul>
<li><b>Extend the range</b> of the IV (smaller and larger values) → curves for different relationships separate more, so you can tell which fits.</li>
<li><b>More IV values</b> within the range (≥ 5–7) → shape of the trend is clearer.</li>
<li><b>More repeats</b> per point (≥ 5) → reduces random error, narrows the spread, so fewer possible lines (e.g. rules out "no correlation").</li>
<li><b>More precise / sensitive instruments</b> (finer scale, digital, light gates, data loggers) → smaller uncertainty and less human reaction-time error.</li>
<li><b>Better control of variables</b> (water bath, same batch of chemicals) → improves validity.</li>
</ul>
<div class="warn">2024 marker: "Many students did not give suggestions relating to <b>data collection</b>." Suggestions about drawing the graph differently don\u2019t count – change how the data are collected.</div>
<h4>Evaluating secondary sources</h4>
<ul>
<li><b>Reliability</b>: reputable, expert author/organisation (CSIRO, BoM, NASA, universities), <b>peer-reviewed</b>, consistent with other independent sources.</li>
<li><b>Validity/relevance</b>: addresses the question, recent, enough data and method shown.</li>
<li><b>Bias</b>: who funded it? Is there a commercial or political interest? Is it fact or opinion?</li>
</ul>
<h4>Drawing conclusions</h4>
<ul>
<li>Answer the aim; state the relationship shown by the data (with numbers) and whether it supports the hypothesis.</li>
<li>Only claim what the data show: "consistent with", within the tested range; no extrapolating claims.</li>
<li><b>Correlation is not causation</b> – two variables changing together may both be caused by a third factor.</li>
<li>A conclusion is only as strong as the validity and reliability of the data.</li>
</ul>
` }
  ],
  cram: `
<h4>Variables & design</h4>
<ul><li>IV = changed (x-axis) · DV = measured (y-axis) · controlled = kept same (say HOW) · control = baseline set-up for comparison.</li>
<li>Hypothesis: "As IV increases, DV will … because …" – testable, cause→effect, reason.</li>
<li>Method: numbered steps, start with verbs, specific amounts & equipment, ≥5 IV values × ≥3 trials, averages, "Repeat steps…".</li>
<li>Risk table: hazard → risk → specific precaution (2–3 rows).</li></ul>
<h4>Tables & graphs</h4>
<ul><li>Table: IV left column, units in headings only, trials + average columns, consistent d.p.</li>
<li>Scatter (both continuous) · column (categorical IV) · histogram (frequency, bars touch) · line (time series).</li>
<li>Graph: IV on x, labels + units, even scale using ≥½ grid, crosses, line/curve of best fit (no dot-to-dot), title.</li>
<li>Gradient = rise/run from the LINE, far-apart points, units y/x. Interpolate inside range; extrapolate (dashed, less reliable) outside.</li></ul>
<h4>Linearising</h4>
<ul><li>s ∝ t² → plot s vs t² · T² ∝ L · y ∝ 1/x → y vs 1/x · I ∝ 1/d² → I vs 1/d².</li>
<li>Straight line through origin = "consistent with" proportionality; horizontal line possible = consistent with no correlation. Never "proves".</li></ul>
<h4>VAR + errors</h4>
<ul><li>Accuracy = close to true value (systematic error; calibrate). Precision = repeats close together. Reliability = consistent repeats (random error; repeat & average). Validity = fair test of the aim (control variables, control group).</li>
<li>Systematic: same shift every time, not fixed by repeating, can give y-intercept. Random: scatter, fixed by repeats/averages/better instruments.</li>
<li>% error = |measured − accepted| ÷ accepted × 100. % uncertainty = uncertainty ÷ value × 100. Analogue uncertainty = ± ½ smallest division.</li></ul>
<h4>Improvements (6-mark style)</h4>
<ul><li>Wider range · more IV values · more repeats · more precise instruments · better control – each with "this would… so the conclusion…".</li></ul>
`
});

SD.cards.push(
  { id: 'ws-c1', topic: 'ws', outcome: 'ws-n1', front: 'Independent variable', back: 'The one variable deliberately changed by the experimenter; plotted on the x-axis.' },
  { id: 'ws-c2', topic: 'ws', outcome: 'ws-n1', front: 'Dependent variable', back: 'The variable measured in response to changes in the independent variable; plotted on the y-axis.' },
  { id: 'ws-c3', topic: 'ws', outcome: 'ws-n1', front: 'Controlled variables', back: 'All other factors that could affect the DV, kept constant so that only the IV affects the DV (a fair test).' },
  { id: 'ws-c4', topic: 'ws', outcome: 'ws-n1', front: 'Control (experiment/group)', back: 'A set-up without the factor being tested (or at a standard value) used as a baseline, to show any change is due to the IV.' },
  { id: 'ws-c5', topic: 'ws', outcome: 'ws-n1', front: 'Features of a good hypothesis', back: 'Testable/falsifiable prediction with cause-and-effect between IV and DV, stating the direction of change and a scientific reason.' },
  { id: 'ws-c6', topic: 'ws', outcome: 'ws-n1', front: 'Continuous vs discrete vs categorical data', back: 'Continuous: any value in a range (time, mass). Discrete: countable whole numbers. Categorical: names/groups (type of metal).' },
  { id: 'ws-c7', topic: 'ws', outcome: 'ws-n2', front: 'Rules for writing a method', back: 'Numbered steps starting with verbs; specific quantities, equipment and concentrations; how IV is changed and DV measured; controlled variables; ≥5 IV values × ≥3 trials; averages.' },
  { id: 'ws-c8', topic: 'ws', outcome: 'ws-n2', front: 'Why time 10 oscillations of a pendulum rather than 1?', back: 'Reaction-time error (~0.2 s) stays the same size but becomes a much smaller percentage of the total time, reducing % uncertainty.' },
  { id: 'ws-c9', topic: 'ws', outcome: 'ws-n2', front: 'Minimum data for a good investigation', back: 'At least 5 different values of the IV (wide, even range), each repeated at least 3 times, with averages calculated.' },
  { id: 'ws-c10', topic: 'ws', outcome: 'ws-n3', front: 'Three columns of a risk assessment', back: 'Hazard → risk (potential harm) → precaution (specific way to minimise the risk).' },
  { id: 'ws-c11', topic: 'ws', outcome: 'ws-n3', front: 'Risk assessment row for dilute HCl', back: 'Hazard: corrosive acid. Risk: burns/irritation to eyes and skin. Precaution: safety glasses and gloves, small volumes, rinse spills with plenty of water.' },
  { id: 'ws-c12', topic: 'ws', outcome: 'ws-n4', front: 'Results table rules', back: 'Title; IV in left column; units in headings only; trial columns + average; headings at the top; consistent decimal places.' },
  { id: 'ws-c13', topic: 'ws', outcome: 'ws-n4', front: 'Outlier', back: 'A result that does not fit the pattern of the others. Repeat the trial; if excluded from an average, state and justify it.' },
  { id: 'ws-c14', topic: 'ws', outcome: 'ws-n4', front: 'Uncertainty of an analogue instrument', back: '± half the smallest scale division (e.g. ruler with 1 mm divisions → ±0.5 mm).' },
  { id: 'ws-c15', topic: 'ws', outcome: 'ws-n4', front: 'Percentage error formula', back: '% error = |measured − accepted| ÷ accepted × 100%.' },
  { id: 'ws-c16', topic: 'ws', outcome: 'ws-n4', front: 'Percentage uncertainty formula', back: '% uncertainty = absolute uncertainty ÷ measured value × 100%.' },
  { id: 'ws-c17', topic: 'ws', outcome: 'ws-n4', front: 'Uncertainty from repeated readings', back: 'Approximately ± half the range of the repeats: ±(max − min) ÷ 2.' },
  { id: 'ws-c18', topic: 'ws', outcome: 'ws-n5', front: 'When to use a scatter plot', back: 'When both the IV and DV are continuous numerical variables; draw a line/curve of best fit, not dot-to-dot.' },
  { id: 'ws-c19', topic: 'ws', outcome: 'ws-n5', front: 'When to use a column graph', back: 'When the IV is categorical or discrete (e.g. type of metal); bars separated, y-axis from zero.' },
  { id: 'ws-c20', topic: 'ws', outcome: 'ws-n5', front: 'Histogram', back: 'Shows frequency of continuous data grouped into equal-width bins; bars touch.' },
  { id: 'ws-c21', topic: 'ws', outcome: 'ws-n5', front: 'Appropriate graph scale', back: 'Even (linear) intervals on each axis, with the data covering at least half (ideally ¾) of the grid in each direction.' },
  { id: 'ws-c22', topic: 'ws', outcome: 'ws-n6', front: 'Line of best fit', back: 'Single smooth straight line (or curve) showing the trend with roughly equal points on each side; ignores outliers; not dot-to-dot.' },
  { id: 'ws-c23', topic: 'ws', outcome: 'ws-n6', front: 'How to calculate a gradient', back: 'Pick two far-apart points on the line of best fit, draw construction lines, gradient = rise ÷ run, units = y units ÷ x units.' },
  { id: 'ws-c24', topic: 'ws', outcome: 'ws-n6', front: 'Interpolation vs extrapolation', back: 'Interpolation: reading values within the measured range (reliable). Extrapolation: extending the line beyond the data (less reliable).' },
  { id: 'ws-c25', topic: 'ws', outcome: 'ws-n7', front: 'Linearising data', back: 'Processing data (squaring, reciprocal etc.) so a proposed relationship would give a straight line through the origin, e.g. plot s vs t² to test s ∝ t².' },
  { id: 'ws-c26', topic: 'ws', outcome: 'ws-n7', front: 'What does a straight line through the origin on y vs x indicate?', back: 'The data are consistent with y being directly proportional to x.' },
  { id: 'ws-c27', topic: 'ws', outcome: 'ws-n7', front: 'What should you plot to test an inverse square law I ∝ 1/d²?', back: 'I on the y-axis against 1/d² on the x-axis; a straight line through the origin is consistent with the law.' },
  { id: 'ws-c28', topic: 'ws', outcome: 'ws-n8', front: 'Accuracy', back: 'How close a measured value is to the true/accepted value; reduced by systematic errors.' },
  { id: 'ws-c29', topic: 'ws', outcome: 'ws-n8', front: 'Precision', back: 'How close repeated measurements are to each other (small spread); also the resolution of an instrument.' },
  { id: 'ws-c30', topic: 'ws', outcome: 'ws-n8', front: 'Reliability', back: 'Consistency of results when the experiment is repeated; improved by more trials, averaging and consistent technique.' },
  { id: 'ws-c31', topic: 'ws', outcome: 'ws-n8', front: 'Validity', back: 'Whether the experiment fairly tests the aim: only the IV changes, other variables are controlled, and the DV measures what is intended.' },
  { id: 'ws-c32', topic: 'ws', outcome: 'ws-n8', front: 'Systematic error', back: 'Consistent error shifting all readings in the same direction (e.g. unzeroed balance); affects accuracy; reduced by calibration, not repetition.' },
  { id: 'ws-c33', topic: 'ws', outcome: 'ws-n8', front: 'Random error', back: 'Unpredictable variation above and below the true value (e.g. reaction time); affects precision/reliability; reduced by repeats and averaging.' },
  { id: 'ws-c34', topic: 'ws', outcome: 'ws-n8', front: 'Parallax error', back: 'Error from reading a scale at an angle; avoided by reading at eye level, perpendicular to the scale.' },
  { id: 'ws-c35', topic: 'ws', outcome: 'ws-n9', front: 'Criteria for a reliable secondary source', back: 'Expert/reputable author, peer reviewed, recent, unbiased (no vested interest), consistent with other independent sources.' },
  { id: 'ws-c36', topic: 'ws', outcome: 'ws-n9', front: 'Three strong ways to improve data collection', back: 'Extend the range / add more IV values; increase repeats (≥5) to reduce random error; use more precise instruments (finer scale, light gates) – each with how it strengthens the conclusion.' },
  { id: 'ws-c37', topic: 'ws', outcome: 'ws-n9', front: 'Correlation vs causation', back: 'Two variables changing together (correlation) does not prove one causes the other; a third factor could be responsible.' }
);

SD.mcq.push(
  { id: 'ws-q1', topic: 'ws', outcome: 'ws-n1', q: `A student measures how far a toy car rolls on carpet after leaving ramps set at heights of 10, 20, 30, 40 and 50 cm. What is the independent variable?`, options: [`Distance the car rolls`, `Type of carpet`, `Height of the ramp`, `Mass of the car`], answer: 2, explain: `The ramp height is deliberately changed. Distance rolled is measured (DV); carpet type and mass should be controlled.` },
  { id: 'ws-q2', topic: 'ws', outcome: 'ws-n1', q: `Students test whether the concentration of salt water affects how long it takes to freeze. They use 0, 5, 10, 15 and 20 g/L solutions in identical cups in the same freezer. What is the dependent variable?`, options: [`Concentration of salt`, `Time taken to freeze`, `Freezer temperature`, `Volume of water`], answer: 1, explain: `Time to freeze is measured and depends on the salt concentration (the IV). Freezer temperature and volume are controlled variables.` },
  { id: 'ws-q3', topic: 'ws', outcome: 'ws-n1', q: `Hydrochloric acid was added to identical masses of sodium carbonate crystals in 4 test tubes, producing 38, 35, 25 and 8 mL of gas after 3 minutes. Which variable most likely caused these different rates?`, options: [`The volume of gas syringe used`, `The colour of the test tubes`, `The time of 3 minutes`, `Different surface areas (crystal sizes) of the sodium carbonate`], answer: 3, explain: `Surface area (also acid concentration or temperature) affects reaction rate. The 3-minute time was the same for all, and container colour does not affect rate.`, source: 'Adapted from 2022 Yearly Section C Q1' },
  { id: 'ws-q4', topic: 'ws', outcome: 'ws-n1', q: `A student tests the effect of a new fertiliser on tomato growth by giving 5 plants fertiliser solution each day. Which is the most appropriate control?`, options: [`5 identical tomato plants given the same volume of water with no fertiliser`, `5 tomato plants given double the fertiliser`, `5 different species of plant given fertiliser`, `The same 5 plants measured again next month`], answer: 0, explain: `A control is identical except for the factor being tested, providing a baseline. Double fertiliser is another treatment; different species change more than one variable.` },
  { id: 'ws-q5', topic: 'ws', outcome: 'ws-n1', q: `Which is the best hypothesis for an investigation of temperature and the rate at which sugar dissolves?`, options: [`Sugar dissolves in water.`, `Temperature might change things.`, `As the temperature of the water increases, the time for the sugar to dissolve will decrease, because water particles move faster and collide with the sugar more often.`, `I think hot water is better.`], answer: 2, explain: `It is testable, links the IV to the DV with a direction (cause and effect) and gives a scientific reason. The others are vague or untestable.` },
  { id: 'ws-q6', topic: 'ws', outcome: 'ws-n1', q: `In an investigation on the effect of temperature on the time for magnesium to dissolve in HCl, which is the best way to control the concentration of the acid?`, options: [`Use the same amount of acid`, `Keep the acid concentration constant`, `Use acid that looks the same`, `Use 1.0 mol/L HCl from the same stock bottle for every trial`], answer: 3, explain: `Marks are given for HOW a variable is controlled. "Keep it constant" only names the variable; volume is a different variable.`, source: 'Adapted from 2022 Yearly Section C Q1(b)' },
  { id: 'ws-q7', topic: 'ws', outcome: 'ws-n1', q: `The number of seeds that germinate in a tray is an example of which type of data?`, options: [`Discrete`, `Continuous`, `Categorical`, `Qualitative`], answer: 0, explain: `Numbers of seeds are countable whole numbers (discrete). Continuous data can take any value (e.g. height of seedlings).` },
  { id: 'ws-q8', topic: 'ws', outcome: 'ws-n2', q: `Which method step is written MOST appropriately?`, options: [`Some acid was put into a test tube.`, `Measure 10 mL of 1.0 mol/L hydrochloric acid using a 10 mL measuring cylinder and pour it into a test tube.`, `Put the acid in.`, `Get acid and add magnesium and time it.`], answer: 1, explain: `Good steps start with a verb and give specific quantities, concentrations and equipment so the step can be repeated exactly.` },
  { id: 'ws-q9', topic: 'ws', outcome: 'ws-n2', q: `A student plans to test the effect of light intensity on photosynthesis rate. Which plan provides the most suitable data?`, options: [`2 light intensities, 1 trial each`, `3 light intensities, 1 trial each`, `5 light intensities, 3 trials each`, `1 light intensity, 15 trials`], answer: 2, explain: `At least 5 IV values reveal the shape of the relationship, and at least 3 trials per value allow averages and reliability to be assessed. 15 trials at one value give no trend.` },
  { id: 'ws-q10', topic: 'ws', outcome: 'ws-n2', q: `To find the period of a pendulum, a student times 10 complete swings (20.4 s) instead of 1 swing. The main benefit is that:`, options: [`The pendulum swings faster`, `It removes the need for a stopwatch`, `It eliminates systematic error`, `The reaction-time error becomes a smaller percentage of the measured time`], answer: 3, explain: `The ~0.2 s reaction error is the same whether timing 2 s or 20 s, so its percentage effect drops tenfold. It does not remove systematic errors.` },
  { id: 'ws-q11', topic: 'ws', outcome: 'ws-n2', q: `A student was given a test tube, strips of magnesium and 1 M hydrochloric acid to investigate the effect of temperature on reaction time. Which set lists three OTHER pieces of equipment needed?`, options: [`Thermometer, stopwatch, hotplate (or water bath)`, `Heating apparatus, timing device, PPE`, `Voltmeter, ammeter, wires`, `Microscope, slide, coverslip`], answer: 0, explain: `The 2022 marker required specific equipment: thermometer, stopwatch, hotplate/Bunsen burner, ice bath, measuring cylinder. Generic "heating apparatus" was not accepted.`, source: 'Adapted from 2022 Yearly Section C Q2(a)' },
  { id: 'ws-q12', topic: 'ws', outcome: 'ws-n3', q: `Which row of a risk assessment is BEST?`, options: [`Hazard: acid. Risk: dangerous. Precaution: be careful.`, `Hazard: hot water bath. Risk: scalds to skin. Precaution: use tongs to handle test tubes and keep the bath away from the bench edge.`, `Hazard: stopwatch. Risk: none. Precaution: none.`, `Hazard: glass. Risk: cuts. Precaution: wear a lab coat.`], answer: 1, explain: `It names a specific hazard, its specific harm, and a precaution that actually reduces that risk. A lab coat does not prevent cuts from broken glass.` },
  { id: 'ws-q13', topic: 'ws', outcome: 'ws-n4', q: `In a results table, where should the units for "time" be written?`, options: [`After every number in the column, e.g. 12 s, 15 s`, `Only in the conclusion`, `In the column heading, e.g. Time (s)`, `Units are not needed if the graph has them`], answer: 2, explain: `Units go in the headings only; writing them with each value lost marks in the 2022 criteria.` },
  { id: 'ws-q14', topic: 'ws', outcome: 'ws-n4', q: `Times for a reaction at 24 °C were 98 s, 102 s and 133 s. What is the mean of all three trials, and which value appears to be an outlier?`, options: [`100 s; 98 s`, `111 s; 102 s`, `133 s; 98 s`, `111 s; 133 s`], answer: 3, explain: `(98 + 102 + 133) ÷ 3 = 333 ÷ 3 = 111 s. 133 s is far from the other two, so it is the likely outlier and the trial should be repeated.`, source: 'Data from 2022 Yearly Section C Q2(b)' },
  { id: 'ws-q15', topic: 'ws', outcome: 'ws-n4', q: `A student records the following times for a ball to fall: 0.64 s, 0.66 s, 0.65 s, 0.91 s. The 0.91 s trial is judged an outlier. What is the best average to report?`, options: [`0.65 s`, `0.72 s`, `0.91 s`, `0.66 s`], answer: 0, explain: `Excluding the outlier: (0.64 + 0.66 + 0.65) ÷ 3 = 0.65 s. Including it gives 0.715 s, which is distorted by the anomalous value. State that it was excluded and why.` },
  { id: 'ws-q16', topic: 'ws', outcome: 'ws-n4', q: `A measuring cylinder has graduations every 2 mL. What is the uncertainty of a single reading?`, options: [`± 2 mL`, `± 1 mL`, `± 0.5 mL`, `± 0.1 mL`], answer: 1, explain: `For an analogue scale the uncertainty is half the smallest division: 2 mL ÷ 2 = ±1 mL.` },
  { id: 'ws-q17', topic: 'ws', outcome: 'ws-n4', q: `A student measures g as 9.40 m/s². The accepted value is 9.80 m/s². What is the percentage error?`, options: [`0.40%`, `4.3%`, `4.1%`, `96%`], answer: 2, explain: `% error = |9.40 − 9.80| ÷ 9.80 × 100 = 0.40 ÷ 9.80 × 100 = 4.1%. Dividing by the measured value instead (0.40 ÷ 9.40) gives the wrong 4.3%.` },
  { id: 'ws-q18', topic: 'ws', outcome: 'ws-n4', q: `A length of 4.0 cm is measured with a ruler that has an uncertainty of ±0.1 cm. What is the percentage uncertainty?`, options: [`0.1%`, `0.4%`, `4%`, `2.5%`], answer: 3, explain: `% uncertainty = 0.1 ÷ 4.0 × 100 = 2.5%. Measuring a longer length with the same ruler would give a smaller percentage uncertainty.` },
  { id: 'ws-q19', topic: 'ws', outcome: 'ws-n4', q: `Repeated measurements of a temperature were 21.0, 21.6 and 22.0 °C. Using half the range, what is the uncertainty in the mean?`, options: [`± 0.5 °C`, `± 1.0 °C`, `± 0.1 °C`, `± 21.5 °C`], answer: 0, explain: `Range = 22.0 − 21.0 = 1.0 °C; half the range = ±0.5 °C. The mean is 21.5 °C.` },
  { id: 'ws-q20', topic: 'ws', outcome: 'ws-n5', q: `A student measures the average reaction time at temperatures of 5, 11, 24, 39 and 62 °C. Which type of graph should be drawn?`, options: [`Pie chart`, `Column graph`, `Histogram`, `Scatter plot with a curve of best fit`], answer: 3, explain: `Both temperature and time are continuous, so a scatter plot with a line/curve of best fit is required (2022 marking criteria).`, source: 'Adapted from 2022 Yearly Section C Q2(c)' },
  { id: 'ws-q21', topic: 'ws', outcome: 'ws-n5', q: `A student compares the mass of hydrogen produced when zinc, iron, magnesium and tin react with acid. Which graph is most appropriate?`, options: [`Column graph`, `Scatter plot`, `Line graph`, `Histogram`], answer: 0, explain: `The IV (type of metal) is categorical, so a column (bar) graph is used. A scatter plot needs a numerical IV.` },
  { id: 'ws-q22', topic: 'ws', outcome: 'ws-n5', q: `The heights of 120 Year 10 students are grouped into ranges 150–154 cm, 155–159 cm, 160–164 cm, etc. Which graph best displays how many students fall in each range?`, options: [`Pie chart`, `Scatter plot`, `Histogram`, `Line graph`], answer: 2, explain: `A histogram shows the frequency of continuous data grouped into bins, with touching bars.` },
  { id: 'ws-q23', topic: 'ws', outcome: 'ws-n5', q: `A student's graph has temperature values 5, 11, 24, 39, 62 °C marked at equal spacing along the x-axis. What is wrong?`, options: [`Nothing – this is correct`, `The scale is not linear, so the shape of the trend is distorted`, `Temperature should be on the y-axis`, `The values should be in descending order`], answer: 1, explain: `Axis intervals must be even (e.g. 0, 10, 20, …). Plotting uneven values at equal spacing distorts the relationship.` },
  { id: 'ws-q24', topic: 'ws', outcome: 'ws-n5', q: `A student's data range from 0 to 40 on the x-axis and 0 to 6 on the y-axis. The grid provided is 20 squares wide and 20 squares tall. Which y-axis scale is best?`, options: [`1 square = 5 units`, `1 square = 1 unit`, `1 square = 2 units`, `1 square = 0.5 units`], answer: 3, explain: `0.5 units per square means 6 units uses 12 of 20 squares – more than half the grid with an easy scale. 1 unit per square uses only 6 squares (less than half).` },
  { id: 'ws-q25', topic: 'ws', outcome: 'ws-n6', q: `Which statement about a line of best fit is correct?`, options: [`It should join every point in order`, `It must always start at the origin`, `It should show the overall trend with roughly equal numbers of points on each side, ignoring clear outliers`, `It should pass through the first and last points`], answer: 2, explain: `A line of best fit shows the trend; joining dots or forcing it through particular points is incorrect. It passes through the origin only if the data allow it.` },
  { id: 'ws-q26', topic: 'ws', outcome: 'ws-n6', q: `On a graph of force (N) on the y-axis against extension (m) on the x-axis, the line of best fit passes through (0.02 m, 1.0 N) and (0.10 m, 5.0 N). What is the gradient?`, options: [`50 N/m`, `0.02 m/N`, `5.0 N`, `4.0 N/m`], answer: 0, explain: `Gradient = (5.0 − 1.0) ÷ (0.10 − 0.02) = 4.0 ÷ 0.08 = 50 N/m. Units are y-units divided by x-units.` },
  { id: 'ws-q27', topic: 'ws', outcome: 'ws-n6', q: `A gradient is calculated from a graph of velocity (m/s) on the y-axis against time (s) on the x-axis. The units of the gradient are:`, options: [`m`, `m/s`, `m s`, `m/s²`], answer: 3, explain: `(m/s) ÷ s = m/s² – the gradient of a velocity–time graph is acceleration.` },
  { id: 'ws-q28', topic: 'ws', outcome: 'ws-n6', q: `Measurements of plant height were taken from day 0 to day 20. A student uses the line of best fit to predict the height on day 30. This is called:`, options: [`Interpolation`, `Extrapolation`, `Calibration`, `Linearisation`], answer: 1, explain: `Predicting beyond the measured range is extrapolation, which is less reliable because the trend may not continue.` },
  { id: 'ws-q29', topic: 'ws', outcome: 'ws-n6', q: `To calculate a gradient accurately, a student should use:`, options: [`The first two data points in the table`, `Any two points close together on the line`, `Two points far apart on the line of best fit`, `The largest data point divided by the smallest`], answer: 2, explain: `Using points on the line of best fit (not raw data) averages out scatter; choosing points far apart reduces the reading uncertainty in rise and run.` },
  { id: 'ws-q30', topic: 'ws', outcome: 'ws-n7', q: `A student thinks the distance (s) a ball falls from rest is proportional to the square of the time (t). Which graph should she plot to test this with a straight line?`, options: [`s vs t`, `s vs 1/t`, `s vs t²`, `s² vs t`], answer: 2, explain: `If s ∝ t², a graph of s against t² is a straight line through the origin (gradient = a/2).`, source: 'Adapted from 2024 Yearly Q32' },
  { id: 'ws-q31', topic: 'ws', outcome: 'ws-n7', q: `Boyle's law suggests the pressure P of a gas is inversely proportional to its volume V. Which graph would give a straight line through the origin if this is true?`, options: [`P vs V`, `P vs 1/V`, `P vs V²`, `V vs time`], answer: 1, explain: `If P ∝ 1/V, then P = k × (1/V), so plotting P against 1/V gives a straight line through the origin with gradient k.` },
  { id: 'ws-q32', topic: 'ws', outcome: 'ws-n7', q: `A student plots processed data and finds a straight line can be drawn through the origin, passing within the spread of all the repeats. The best conclusion is that the data are:`, options: [`proof of the relationship`, `consistent with the proposed proportional relationship`, `inconsistent with any relationship`, `consistent with no correlation`], answer: 1, explain: `Data can be consistent with a relationship but cannot prove it. "No correlation" would require a horizontal line to fit.`, source: 'Adapted from 2024 Yearly Q32' },
  { id: 'ws-q33', topic: 'ws', outcome: 'ws-n7', q: `On a graph of y against x with three repeats per point, a horizontal line can be drawn through the range of every set of repeats. This means the data are:`, options: [`consistent with y being proportional to x`, `consistent with y being proportional to x²`, `consistent with no correlation between y and x`, `proof that y increases with x`], answer: 2, explain: `If a horizontal (constant-y) line fits within all error ranges, the data cannot rule out that y does not depend on x. More repeats or a wider range would be needed.` },
  { id: 'ws-q34', topic: 'ws', outcome: 'ws-n7', q: `For a pendulum, T = 2π√(L/g). To find g from a straight-line graph, a student should plot:`, options: [`T vs L, gradient = g`, `T² vs L, gradient = 4π²/g`, `T vs 1/L, gradient = 2π`, `L vs T, gradient = g/4π²`], answer: 1, explain: `Squaring gives T² = (4π²/g)L, so T² vs L is a straight line through the origin with gradient 4π²/g, and g = 4π² ÷ gradient.` },
  { id: 'ws-q35', topic: 'ws', outcome: 'ws-n8', q: `Five measurements of g were 9.51, 9.52, 9.50, 9.52 and 9.51 m/s². The accepted value is 9.80 m/s². The results are:`, options: [`accurate and precise`, `accurate but not precise`, `neither accurate nor precise`, `precise but not accurate, suggesting a systematic error`], answer: 3, explain: `The readings are very close together (precise) but consistently about 0.3 below the true value (inaccurate), the signature of a systematic error.` },
  { id: 'ws-q36', topic: 'ws', outcome: 'ws-n8', q: `An electronic balance reads 0.30 g with nothing on it. The student does not notice and weighs ten samples. This causes:`, options: [`a random error that is reduced by repeating`, `a systematic error that makes every mass 0.30 g too high`, `a parallax error`, `no error because it is digital`], answer: 1, explain: `A zero error shifts every reading by the same amount (systematic). Repeating does not fix it – the balance must be zeroed (tared).` },
  { id: 'ws-q37', topic: 'ws', outcome: 'ws-n8', q: `Which change would MOST reduce random error when timing a trolley rolling down a ramp?`, options: [`Using a light gate connected to a data logger and averaging several trials`, `Using a heavier trolley`, `Calibrating the ruler`, `Reading the stopwatch at eye level`], answer: 0, explain: `Light gates remove variable human reaction time, and averaging repeats reduces remaining random scatter.` },
  { id: 'ws-q38', topic: 'ws', outcome: 'ws-n8', q: `A graph of extension against force should pass through the origin, but the line of best fit cuts the y-axis at 0.5 cm. The most likely explanation is:`, options: [`Random error in each reading`, `Too few trials`, `A systematic error, such as the ruler's zero not lining up with the spring's starting position`, `The relationship is not linear`], answer: 2, explain: `A consistent offset (non-zero intercept) on an otherwise straight line points to a systematic error, e.g. a zero error in measuring length.` },
  { id: 'ws-q39', topic: 'ws', outcome: 'ws-n8', q: `A student investigating the effect of light colour on plant growth puts the red-light plants on a warm windowsill and the blue-light plants in a cold cupboard. This mainly reduces the investigation's:`, options: [`Validity`, `Precision`, `Accuracy of the ruler`, `Sample size`], answer: 0, explain: `Temperature is an uncontrolled variable, so differences in growth may not be caused by light colour – the test is not fair (invalid).` },
  { id: 'ws-q40', topic: 'ws', outcome: 'ws-n8', q: `Reading the volume in a measuring cylinder from above the meniscus each time gives readings that are consistently too high. This is an example of:`, options: [`Random error`, `Parallax error causing a systematic error`, `An outlier`, `A controlled variable`], answer: 1, explain: `Viewing at an angle is parallax; doing it the same way every time shifts every reading in one direction, a systematic error. Read at eye level.` },
  { id: 'ws-q41', topic: 'ws', outcome: 'ws-n8', q: `Which statement is correct?`, options: [`Repeating trials reduces systematic error`, `Calibrating equipment reduces random error`, `Accuracy and reliability mean the same thing`, `Repeating trials and averaging reduces the effect of random error`], answer: 3, explain: `Random errors scatter both ways, so averaging cancels them out. Systematic errors shift every repeat equally and need calibration/better methods.` },
  { id: 'ws-q42', topic: 'ws', outcome: 'ws-n9', q: `Which source would be MOST reliable for data on Australian rainfall trends?`, options: [`A social media post by a celebrity`, `A Bureau of Meteorology report based on long-term weather station records`, `An advertisement for water tanks`, `An anonymous blog`], answer: 1, explain: `A reputable scientific organisation using extensive, long-term measured data is reliable. Advertisements have commercial bias; anonymous or celebrity posts lack expertise and review.` },
  { id: 'ws-q43', topic: 'ws', outcome: 'ws-n9', q: `Data show that towns with more ice-cream sales also have more drownings. Which conclusion is most scientifically appropriate?`, options: [`Ice cream causes drowning`, `Drowning causes ice-cream sales`, `The two are correlated, possibly both caused by a third factor such as hot weather`, `The data must be wrong`], answer: 2, explain: `Correlation does not imply causation; hot weather increases both swimming and ice-cream sales.` },
  { id: 'ws-q44', topic: 'ws', outcome: 'ws-n9', q: `A student tested ramp heights of 20, 22, 24 and 26 cm and found the data fit both a linear and a squared relationship equally well. Which improvement would BEST help distinguish them?`, options: [`Draw the graph larger`, `Use a different colour pen`, `Test fewer heights`, `Extend the range of heights (e.g. 5 cm to 60 cm) so the two predicted curves separate`], answer: 3, explain: `Over a narrow range many relationships look similar. A wider range of IV values makes different relationships diverge, so the data can rule one out. Graph presentation does not change the data.`, source: 'Based on 2024 Yearly Q32(b) marking' }
);

SD.saq.push(
  { id: 'ws-s1', topic: 'ws', outcome: 'ws-n1', marks: 3, source: '2022 Yearly Section C Q1',
    q: `Hydrochloric acid was added to identical masses of sodium carbonate crystals in 4 separate test tubes. Equipment was attached to measure the volume of gas produced. The test tubes produced 38, 35, 25 and 8 mL of gas respectively after 3 minutes.<br>(a) Suggest one possible variable that may have caused the acid to react at different rates with the four samples. (1 mark)<br>(b) Using your response to (a), suggest TWO ways that variables should have been controlled in this experiment to make it valid. (2 marks)`,
    criteria: ['(a) Identifies a valid variable: concentration of HCl, surface area of the crystals, or temperature', '(b) First specific method to keep the variable constant (e.g. use HCl from the same stock bottle / check pH; water bath at a set temperature; crush or sieve crystals to the same size)', '(b) Second specific method of control'],
    model: `(a) The surface area (crystal size) of the sodium carbonate may have differed between test tubes.<br>(b) Keep surface area constant by crushing all crystals into a fine powder or sieving them so they are the same size, and taking all samples from the same supplier/batch. Also keep temperature constant by placing all test tubes in the same water bath at 25 °C (and use HCl of the same concentration from the same stock bottle).`,
    keywords: ['surface area', 'concentration', 'temperature', 'same stock bottle', 'water bath', 'crush', 'constant', 'valid'] },
  { id: 'ws-s2', topic: 'ws', outcome: 'ws-n4', marks: 3, source: '2022 Yearly Section C Q2(b)',
    q: `A student investigated the effect of temperature on the time taken for a piece of magnesium to dissolve in hydrochloric acid. She used 5 different temperatures and timed 3 trials for each. An extract from her notebook is shown below.<br><table class="t"><tr><td>5 °C</td><td>180 secs</td><td>171 secs</td><td>199 secs</td></tr><tr><td>11 °C</td><td>158 secs</td><td>140 secs</td><td>149 secs</td></tr><tr><td>24 °C</td><td>98 secs</td><td>102 secs</td><td>133 secs</td></tr><tr><td>39 °C</td><td>50 secs</td><td>38 secs</td><td>35 secs</td></tr><tr><td>62 °C</td><td>11 secs</td><td>9 secs</td><td>13 secs</td></tr></table>Present these results in a table and calculate the average reaction time for each temperature.`,
    criteria: ['Table with appropriate headings within the table, independent variable (temperature) in the left column and all headings in the top row(s)', 'Units in the headings only, not with the data (°C, s)', 'Averages correctly calculated (183, 149, 111, 41, 11 s)'],
    model: `<table class="t"><tr><th rowspan="2">Temperature (°C)</th><th colspan="4">Reaction time (s)</th></tr><tr><th>Trial 1</th><th>Trial 2</th><th>Trial 3</th><th>Average</th></tr><tr><td>5</td><td>180</td><td>171</td><td>199</td><td>183</td></tr><tr><td>11</td><td>158</td><td>140</td><td>149</td><td>149</td></tr><tr><td>24</td><td>98</td><td>102</td><td>133</td><td>111</td></tr><tr><td>39</td><td>50</td><td>38</td><td>35</td><td>41</td></tr><tr><td>62</td><td>11</td><td>9</td><td>13</td><td>11</td></tr></table>e.g. at 5 °C: (180 + 171 + 199) ÷ 3 = 550 ÷ 3 = 183 s (183.3).`,
    keywords: ['independent variable', 'left column', 'units in headings', 'average', 'trial', 'temperature (°c)', 'time (s)'] },
  { id: 'ws-s3', topic: 'ws', outcome: 'ws-n5', marks: 3, source: 'Based on 2022 Yearly Section C Q2(c)',
    q: `The student in the previous question now graphs her average results. Describe SIX features her graph must have to gain full marks.`,
    criteria: ['Correct graph type (scatter plot) with temperature (IV) on the x-axis and time (DV) on the y-axis', 'Axes labelled with quantity and units; appropriate even scale using at least half the grid; points accurately plotted', 'Curve (or line) of best fit showing the trend – not dot-to-dot (at least 6 features for full marks; 4 = 2 marks; 2 = 1 mark)'],
    model: `1. A scatter plot, because both variables are continuous. 2. Temperature (°C) on the x-axis and average reaction time (s) on the y-axis. 3. Both axes labelled with the quantity and units, e.g. "Average reaction time (s)". 4. Even, linear scales chosen so the data occupy at least half of the grid in each direction. 5. Averages plotted accurately as small crosses. 6. A smooth curve of best fit showing the trend (time decreasing as temperature increases), not joining the dots. A descriptive title should also be included.`,
    keywords: ['scatter plot', 'x-axis', 'units', 'scale', 'half the grid', 'curve of best fit', 'not dot-to-dot', 'title'] },
  { id: 'ws-s4', topic: 'ws', outcome: 'ws-n9', marks: 6, source: 'Modelled on 2024 Yearly Q32(b)',
    q: `A student investigated how the light intensity (I) measured by a light meter depends on the distance (d) from a lamp. She suspects I ∝ 1/d<sup>2</sup>, but her graphs were also consistent with I ∝ 1/d and with no correlation. Her data are shown below.<br><table class="t"><tr><th>Distance d (cm)</th><th>Trial 1 I (lux)</th><th>Trial 2 I (lux)</th></tr><tr><td>40</td><td>130</td><td>90</td></tr><tr><td>42</td><td>100</td><td>120</td></tr><tr><td>44</td><td>110</td><td>80</td></tr><tr><td>46</td><td>90</td><td>110</td></tr></table>The light meter reads to the nearest 10 lux, and the room lights were on. Explain how the data collection could be improved to better determine the relationship. Give THREE different suggestions.`,
    criteria: ['Suggestion 1 is significant (e.g. extend the range of distances, e.g. 10–100 cm)', 'Cause-and-effect: a wider range makes the 1/d and 1/d\u00b2 predictions diverge so one can be ruled out', 'Suggestion 2 is significant (e.g. increase repeats to at least 5 per distance)', 'Cause-and-effect: more repeats reduce random error/spread, narrowing possible lines so "no correlation" can be ruled out', 'Suggestion 3 is significant (e.g. more precise light meter / data logger, or turn off room lights / blackout to control background light)', 'Cause-and-effect: smaller uncertainty or removal of background light (systematic error) gives more accurate values that strengthen the conclusion'],
    model: `<b>1. Extend the range of distances</b> (e.g. 10, 20, 30 … 100 cm) instead of 40–46 cm. Over such a narrow range the predictions of I ∝ 1/d and I ∝ 1/d<sup>2</sup> are almost identical; over a wide range they differ greatly, so the data could show which relationship fits and rule out the other.<br><b>2. Increase the number of repeats</b> to at least 5 per distance and average them. This reduces the effect of random error and narrows the spread of each point, so fewer straight lines fit through the error ranges – which could rule out a horizontal line (no correlation).<br><b>3. Use a more sensitive light meter (or data logger) and perform the experiment in a darkened room.</b> A meter reading to 1 lux reduces the uncertainty of each value, and switching off room lights removes background light that adds a constant error to every reading, so the measured intensities are more accurate and the true relationship is clearer.`,
    keywords: ['range', 'repeats', 'random error', 'precise', 'sensitive', 'background light', 'rule out', 'strengthen'] },
  { id: 'ws-s5', topic: 'ws', outcome: 'ws-n2', marks: 6,
    q: `Write a method for an investigation into the effect of temperature on the time taken for magnesium to react completely with hydrochloric acid. Include how variables are controlled and how reliable data will be obtained.`,
    criteria: ['Numbered steps that begin with verbs and could be followed by another person', 'Specific quantities and equipment (e.g. 10 mL of 1.0 mol/L HCl, measuring cylinder, 2.0 cm Mg ribbon)', 'Clearly describes how the IV is changed (water bath/hotplate/ice bath, thermometer) across at least 5 temperatures', 'Clearly describes how the DV is measured (stopwatch started when Mg is added, stopped when no Mg remains)', 'States how at least two controlled variables are kept constant', 'At least 3 trials per temperature with averages calculated'],
    model: `<ol><li>Measure 10 mL of 1.0 mol/L hydrochloric acid using a 10 mL measuring cylinder and pour it into a clean test tube.</li><li>Place the test tube in a water bath (beaker of water on a hotplate) and heat until a thermometer in the acid reads 20 °C.</li><li>Cut a 2.0 cm length of magnesium ribbon from the same roll using a ruler and scissors.</li><li>Add the magnesium to the acid and immediately start a stopwatch.</li><li>Stop the stopwatch when no magnesium is visible and record the time in a results table.</li><li>Repeat steps 1–5 two more times with fresh acid and magnesium, and calculate the average time.</li><li>Repeat steps 1–6 at 30, 40, 50 and 60 °C (use an ice bath for any temperature below room temperature).</li><li>Dispose of all solutions as directed by the teacher.</li></ol>Controlled variables: same volume and concentration of HCl from the same stock bottle; same length (mass) of Mg from the same roll; same size test tube; no stirring.`,
    keywords: ['measure', 'measuring cylinder', 'water bath', 'thermometer', 'stopwatch', 'repeat', 'average', 'controlled'] },
  { id: 'ws-s6', topic: 'ws', outcome: 'ws-n3', marks: 3,
    q: `Complete a risk assessment for an experiment in which hydrochloric acid is heated in a test tube over a Bunsen burner. Identify THREE hazards, the associated risk and a precaution for each.`,
    criteria: ['Hazard 1 with a matching risk and specific precaution (e.g. corrosive acid – eye/skin burns – safety glasses, gloves)', 'Hazard 2 with a matching risk and specific precaution (e.g. Bunsen flame/hot glass – burns – test-tube holder, point tube away, let cool)', 'Hazard 3 with a matching risk and specific precaution (e.g. glassware – cuts – keep in centre of bench, dispose of broken glass properly)'],
    model: `<table class="t"><tr><th>Hazard</th><th>Risk</th><th>Precaution</th></tr><tr><td>Hydrochloric acid (corrosive)</td><td>Burns/irritation if splashed on skin or in eyes</td><td>Wear safety glasses and gloves; use a small volume; rinse spills with plenty of water</td></tr><tr><td>Bunsen flame and hot test tube</td><td>Burns; acid may spurt out when heated</td><td>Use a test-tube holder; heat gently, pointing the tube away from people; let equipment cool before touching</td></tr><tr><td>Glassware</td><td>Cuts from broken glass</td><td>Keep glassware in the centre of the bench; report breakages and dispose of glass in the broken-glass bin</td></tr></table>`,
    keywords: ['hazard', 'risk', 'precaution', 'safety glasses', 'gloves', 'test-tube holder', 'burns', 'cuts'] },
  { id: 'ws-s7', topic: 'ws', outcome: 'ws-n9', marks: 5, source: 'Class WS worksheet',
    q: `Aim: to compare the rate of reaction of hydrochloric acid with a metal and a metal carbonate.<br>Method summary: 25 mL of 1.0 mol/L HCl was poured into each of two conical flasks, A and B. 0.20 g of magnesium ribbon was added to flask A, which was swirled for 5 seconds. 0.20 g of calcium carbonate marble chips was added to flask B, which was left on the bench. The time for bubbling to stop was recorded. The experiment was repeated once more and an average calculated.<br>Evaluate the experimental design.`,
    criteria: ['Evaluates reliability with reasoning (only two trials – cannot assess consistency; need ≥3 trials, compare, average)', 'Evaluates accuracy with reasoning (judging when bubbling stops by eye – subjective/reaction time; suggest gas syringe/balance)', 'Evaluates validity with reasoning (surface area differs – ribbon vs chips; swirling only flask A; no control)', 'Suggests at least two specific improvements', 'Makes a clear overall judgement'],
    model: `<b>Reliability</b> is limited because only two trials were done, so the consistency of results cannot be judged; at least three trials should be done, outliers repeated and averages calculated. <b>Accuracy</b> is limited because deciding when bubbling stops by eye is subjective and introduces human reaction-time error; collecting the gas in a gas syringe or recording mass loss on an electronic balance at regular intervals would give more accurate measurements. <b>Validity</b> is low: although the acid volume, concentration and mass of solid were controlled, the surface area was not (thin ribbon vs marble chips) and only flask A was swirled, so the difference in time may be due to these factors rather than the type of substance. Both solids should be used as powders of the same particle size and both flasks treated identically. Overall, the design has low validity and limited reliability and accuracy, so it does not fairly answer the aim.`,
    keywords: ['reliability', 'trials', 'accuracy', 'subjective', 'validity', 'surface area', 'swirled', 'judgement'] },
  { id: 'ws-s8', topic: 'ws', outcome: 'ws-n7', marks: 4,
    q: `A student drops a ball from rest and measures the distance fallen (s) and time (t). Her processed data are shown.<br><table class="t"><tr><th>t (s)</th><th>t<sup>2</sup> (s<sup>2</sup>)</th><th>Average s (m)</th></tr><tr><td>0.10</td><td>0.010</td><td>0.049</td></tr><tr><td>0.15</td><td>0.023</td><td>0.11</td></tr><tr><td>0.20</td><td>0.040</td><td>0.20</td></tr><tr><td>0.25</td><td>0.063</td><td>0.31</td></tr><tr><td>0.29</td><td>0.084</td><td>0.41</td></tr></table>(a) Explain why the student plotted s against t<sup>2</sup> rather than s against t. (2 marks)<br>(b) The line of best fit on the s vs t<sup>2</sup> graph passes through (0, 0) and (0.080 s<sup>2</sup>, 0.39 m). Since s = ½gt<sup>2</sup>, calculate g and the percentage error compared with 9.8 m s<sup>−2</sup>. (2 marks)`,
    criteria: ['(a) s vs t is a curve, so it is hard to judge the relationship; plotting s vs t\u00b2 linearises the data', '(a) A straight line through the origin on s vs t\u00b2 is consistent with s ∝ t\u00b2 (and its gradient can be used)', '(b) Gradient = 0.39 ÷ 0.080 = 4.9 m s\u207b\u00b2, so g = 2 × gradient ≈ 9.75 (9.8) m s\u207b\u00b2', '(b) % error = |9.75 − 9.8| ÷ 9.8 × 100 ≈ 0.5%'],
    model: `(a) A graph of s against t is a curve, and it is difficult to tell by eye which curved relationship fits. Squaring t linearises the data: if s ∝ t<sup>2</sup>, a graph of s against t<sup>2</sup> is a straight line through the origin, so a straight line through the origin is consistent with the proposed relationship and the gradient can be used to find g.<br>(b) Gradient = (0.39 − 0) ÷ (0.080 − 0) = 4.9 m s<sup>−2</sup>. Since gradient = ½g, g = 2 × 4.875 ≈ 9.75 m s<sup>−2</sup>. % error = |9.75 − 9.8| ÷ 9.8 × 100 ≈ 0.5%.`,
    keywords: ['curve', 'linearise', 'straight line', 'origin', 'consistent with', 'gradient', 'percentage error'] },
  { id: 'ws-s9', topic: 'ws', outcome: 'ws-n8', marks: 4,
    q: `Distinguish between systematic and random errors. For each, give an example from a school practical and a way it can be reduced.`,
    criteria: ['Systematic error: consistent shift in the same direction, affects accuracy', 'Systematic example + reduction (e.g. unzeroed balance – zero/calibrate before use)', 'Random error: unpredictable scatter about the true value, affects precision/reliability', 'Random example + reduction (e.g. stopwatch reaction time – repeat and average / use light gates)'],
    model: `A <b>systematic error</b> shifts every measurement by the same amount in the same direction, reducing accuracy. For example, an electronic balance that reads 0.2 g with nothing on it makes every mass 0.2 g too high; this is reduced by zeroing (taring) or calibrating the balance before use – repeating trials would not help. A <b>random error</b> causes unpredictable variation above and below the true value, reducing precision and reliability. For example, human reaction time when starting and stopping a stopwatch; this is reduced by repeating trials and averaging, or by using light gates connected to a data logger.`,
    keywords: ['systematic', 'same direction', 'accuracy', 'calibrate', 'random', 'unpredictable', 'reaction time', 'average'] },
  { id: 'ws-s10', topic: 'ws', outcome: 'ws-n8', marks: 3,
    q: `Define accuracy, reliability and validity, and give one way to improve each.`,
    criteria: ['Accuracy: closeness to the true/accepted value; improved by calibrating / more precise instruments / removing systematic error', 'Reliability: consistency of results when repeated; improved by more trials and averaging / consistent technique', 'Validity: the experiment fairly tests the aim with only the IV changed; improved by controlling variables / using a control'],
    model: `<b>Accuracy</b> is how close a result is to the true or accepted value – improved by calibrating equipment and using instruments with finer scales. <b>Reliability</b> is how consistent the results are when the experiment is repeated – improved by doing at least three to five trials and averaging, using identical techniques. <b>Validity</b> is whether the experiment actually tests the aim fairly, with only the independent variable changing – improved by keeping all other variables constant (e.g. using a water bath for temperature) and including a control.`,
    keywords: ['true value', 'calibrate', 'consistent', 'repeat', 'average', 'fair test', 'controlled variables', 'control'] },
  { id: 'ws-s11', topic: 'ws', outcome: 'ws-n6', marks: 3,
    q: `A student\u2019s graph of temperature of water (°C, y-axis) against heating time (min, x-axis) has a line of best fit through (2.0 min, 30 °C) and (8.0 min, 66 °C).<br>(a) Calculate the gradient, with units. (2 marks)<br>(b) Use the line to predict the temperature at 12 min, and comment on the reliability of this prediction. (1 mark)`,
    criteria: ['(a) Correct substitution: (66 − 30) ÷ (8.0 − 2.0)', '(a) Gradient = 6.0 °C/min with units', '(b) ≈ 90 °C (66 + 4 × 6) and identifies it as extrapolation, which is less reliable as the trend may change (e.g. water approaches boiling, heat loss increases)'],
    model: `(a) Gradient = (66 − 30) ÷ (8.0 − 2.0) = 36 ÷ 6.0 = <b>6.0 °C min<sup>−1</sup></b>.<br>(b) Temperature at 12 min ≈ 66 + (12 − 8.0) × 6.0 = 90 °C. This is extrapolation beyond the measured data, so it is less reliable – the rate of heating is likely to slow as heat loss increases and the water approaches 100 °C.`,
    keywords: ['gradient', 'rise', 'run', '°c/min', 'extrapolation', 'less reliable'] }
);

SD.seq.push(
  { id: 'ws-seq1', topic: 'ws', title: 'Order the steps for calculating a gradient from a graph', items: ['Draw the line of best fit through the plotted data', 'Choose two points on the line that are far apart', 'Draw construction lines to read their coordinates', 'Calculate rise ÷ run = (y\u2082 − y\u2081) ÷ (x\u2082 − x\u2081)', 'Write the answer with units (y units ÷ x units)'] },
  { id: 'ws-seq2', topic: 'ws', title: 'Order the sections of a scientific report', items: ['Aim and hypothesis', 'Equipment and risk assessment', 'Method', 'Results (tables and graphs)', 'Discussion (accuracy, reliability, validity)', 'Conclusion'] },
  { id: 'ws-seq3', topic: 'ws', title: 'Order the steps to test a proposed relationship (e.g. s ∝ t\u00b2) by linearising', items: ['Collect data for at least 5 values of the IV with repeats', 'Calculate averages and process the data (e.g. square t)', 'Plot the DV against the processed IV (s vs t\u00b2)', 'Check whether a straight line through the origin fits within the spread of repeats', 'Conclude whether the data are consistent with the relationship', 'Use the gradient to calculate the constant'] }
);
