// Genetics & Biotechnology (Outcomes 6–9 examined; short background on outcomes 1–5)
SD.topics.push({
  id: 'genetics',
  name: 'Genetics & Biotechnology',
  short: 'Genetics',
  color: '#a78bfa',
  examined: true,
  scope: 'Outcomes 6–9 (Mendel, terminology, Punnett squares & pedigrees, genetic technologies) + brief background on DNA and cell division',
  notes: [
    {
      id: 'gen-bg',
      title: 'Background: DNA, mitosis & meiosis (outcomes 1–5, not directly examined)',
      html: `
<p>Outcomes 1–5 are not listed for this yearly, but the 2024 yearly still asked about mitosis/meiosis (an MCQ on spindle fibres and a 5-mark question with a table). These are the essentials you need to understand inheritance.</p>
<h4>DNA structure</h4>
<ul>
<li><b>Nucleotide</b> = the monomer of DNA: a <b>phosphate</b> group + a <b>deoxyribose</b> sugar + a <b>nitrogenous base</b> (A, T, G or C).</li>
<li>Two strands make a <b>double helix</b>. The sugar–phosphate backbone is on the outside and the bases point inwards.</li>
<li><b>Complementary base pairing:</b> A pairs with T (2 hydrogen bonds) and G pairs with C (3 hydrogen bonds). <b>Chargaff’s rules:</b> %A = %T and %G = %C.</li>
<li><b>Gene</b> = a section of DNA that codes for one protein (or polypeptide). <b>Chromosome</b> = one long DNA molecule coiled around proteins (histones). Humans have 46 chromosomes (23 pairs) in body cells.</li>
<li><b>DNA → protein:</b> the base sequence is read in triplets (codons). DNA is transcribed into mRNA in the nucleus, and the mRNA is translated at a ribosome, where amino acids are joined in the coded order to make a protein. Proteins (enzymes, pigments, structural proteins) produce the phenotype.</li>
</ul>
<h4>Photo 51 and the double helix</h4>
<ul>
<li>Taken in 1952 by <b>Rosalind Franklin</b> (with Raymond Gosling) using <b>X-ray crystallography (X-ray diffraction)</b> of the <b>B-form</b> (hydrated, wet) of DNA.</li>
<li>The <b>X-shaped pattern</b> showed a helix. The spacing of the spots showed that the helix repeats every <b>3.4 nm (34 Å)</b>, with bases 0.34 nm apart (10 per turn). The width is about <b>2 nm</b>, which fits two strands. The phosphate backbone is on the outside.</li>
<li>Watson and Crick combined Photo 51 (shown to them by Maurice Wilkins) with Chargaff’s rules to build their double-helix model, published in <i>Nature</i> in 1953.</li>
</ul>
<div class="warn"><b>Correcting the notes:</b> Franklin used X-ray <b>crystallography/diffraction</b>, not “chromatography”. <b>B-form = wet</b> (hydrated) DNA and A-form = drier DNA, not the other way round. Watson and Crick did not take the photo themselves.</div>
<h4>Mitosis vs meiosis</h4>
<table class="t">
<tr><th>Feature</th><th>Mitosis</th><th>Meiosis</th></tr>
<tr><td>Purpose in humans</td><td>Growth, repair and replacement of body cells (and asexual reproduction in other organisms)</td><td>Producing gametes (sperm and eggs) for sexual reproduction</td></tr>
<tr><td>Number of divisions</td><td>One</td><td>Two (meiosis I and meiosis II)</td></tr>
<tr><td>Cells produced</td><td>2 diploid (2n = 46) somatic cells</td><td>4 haploid (n = 23) gametes</td></tr>
<tr><td>Genetically</td><td>Identical to the parent cell</td><td>All different (crossing over + independent assortment)</td></tr>
<tr><td>Metaphase</td><td>Chromosomes line up singly at the equator</td><td>Meiosis I: <b>homologous pairs</b> line up together</td></tr>
<tr><td>Anaphase</td><td>Sister chromatids separate</td><td>Meiosis I: homologous chromosomes separate. Meiosis II: chromatids separate</td></tr>
</table>
<ul>
<li>Stages: (interphase: DNA replicates) → prophase → metaphase → anaphase → telophase → cytokinesis. <b>Spindle fibres</b> attach at the centromeres and <b>pull the chromatids (or chromosomes) to opposite poles</b>.</li>
<li><b>Crossing over</b> (prophase I) swaps segments between homologous chromosomes. Along with <b>independent assortment</b> and <b>random fertilisation</b>, this creates variation.</li>
<li><b>Asexual reproduction</b> (binary fission, budding, runners, cuttings) uses mitosis and gives clones. <b>Sexual reproduction</b> uses meiosis to make gametes, which fuse at fertilisation to form a diploid zygote, which then grows by mitosis.</li>
</ul>
<div class="warn">Meiosis does <b>not</b> involve two diploid cells “fusing”. Meiosis I separates homologous pairs and meiosis II separates sister chromatids, giving 4 haploid cells.</div>
<div class="tip">To prove that a diagram shows <b>meiosis</b>, give a feature that mitosis could <i>never</i> show: homologous chromosomes paired up at metaphase I, crossing over (mixed-colour chromatids), or homologues (not chromatids) moving apart in anaphase I. “Cells are different” or “cells divide” is not enough.</div>
`
    },
    {
      id: 'gen-o6',
      title: 'Outcome 6 · Mendel’s work with pea plants',
      html: `
<div class="key"><b>Gregor Mendel</b> (1822–1884) was an Austrian monk (in Brno, now in Czechia) who bred about 28 000 pea plants between 1856 and 1863. He showed that traits are inherited as discrete “factors” (now called <b>genes</b>) that come in pairs and are passed on in predictable ratios. He published in 1866, and his work was ignored until it was rediscovered in 1900. He is called the “father of genetics”.</div>
<h4>Why peas were a good choice</h4>
<ul>
<li>Clear <b>contrasting traits</b> with no in-between forms (7 traits, e.g. tall/short stem, round/wrinkled seed, yellow/green seed, purple/white flower).</li>
<li><b>Short generation time</b> and <b>large numbers of offspring</b>, so ratios could be counted reliably.</li>
<li>They naturally <b>self-pollinate</b> (giving pure-breeding lines), but can be <b>cross-pollinated by hand</b>, so Mendel controlled exactly which plants mated.</li>
<li>Cheap and easy to grow.</li>
</ul>
<h4>His method</h4>
<ol>
<li>Produced <b>pure-breeding (true-breeding)</b> lines by self-pollinating plants for several generations until they always produced the same trait.</li>
<li>Cross-pollinated two contrasting pure lines (P generation), e.g. tall × short. He removed the anthers (stamens) of one flower to stop self-pollination and transferred pollen with a brush.</li>
<li>Recorded the <b>F1</b> (first filial) generation: <b>all tall</b>. The short trait had “disappeared”.</li>
<li>Let the F1 plants self-pollinate to produce the <b>F2</b>: about <b>3 tall : 1 short</b> (e.g. 787 tall : 277 short = 2.84 : 1). The short trait reappeared.</li>
<li>Studied <b>one trait at a time</b> (monohybrid crosses), then two at a time (dihybrid crosses gave 9 : 3 : 3 : 1). He used <b>large samples</b> and <b>mathematics</b> (ratios and probability), which was new in biology at the time.</li>
</ol>
<table class="t">
<tr><th>Generation</th><th>Genotypes</th><th>Phenotypes</th></tr>
<tr><td>P: pure tall × pure short</td><td>TT × tt</td><td>tall × short</td></tr>
<tr><td>F1</td><td>all Tt</td><td>all tall</td></tr>
<tr><td>F2 (Tt × Tt)</td><td>1 TT : 2 Tt : 1 tt</td><td>3 tall : 1 short</td></tr>
</table>
<h4>Mendel’s laws</h4>
<ul>
<li><b>Law of dominance:</b> when an organism has two different alleles, one (the dominant allele) is expressed and masks the other (the recessive allele). This explains why the F1 were all tall.</li>
<li><b>Law of segregation:</b> each organism has <b>two</b> factors (alleles) for a trait, and they <b>separate</b> during gamete formation, so each gamete carries only <b>one</b>. Offspring receive one from each parent. This explains the 3 : 1 ratio in the F2. (Today: homologous chromosomes separate in meiosis.)</li>
<li><b>Law of independent assortment:</b> alleles for <b>different</b> traits are sorted into gametes independently of each other (if the genes are on different chromosomes). This explains the 9 : 3 : 3 : 1 dihybrid ratio.</li>
</ul>
<div class="warn">Mendel never saw genes or chromosomes. Chromosomes were linked to inheritance later (Sutton and Boveri, ~1902) and the word “gene” came in 1909. In an answer, say he proposed <b>“factors”</b> that we now call genes/alleles.</div>
<div class="model"><b>Model answer (4 marks): Explain Mendel’s work in genetics using pea plants.</b><br>Mendel used pea plants because they have clear contrasting traits, a short generation time and many offspring, and he could control pollination. He crossed pure-breeding tall (TT) and short (tt) plants. All the F1 were tall, so he concluded that tall is dominant and short is recessive (law of dominance). When the F1 (Tt) self-pollinated, the F2 showed a 3 tall : 1 short ratio. This showed that each plant carries two factors (alleles) that separate into gametes, so each gamete gets one (law of segregation). Dihybrid crosses giving 9 : 3 : 3 : 1 showed that different traits are inherited independently (law of independent assortment).</div>
`
    },
    {
      id: 'gen-o7',
      title: 'Outcome 7 · Terminology: genes, alleles, genotype, phenotype, dominance',
      html: `
<table class="t">
<tr><th>Term</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>Gene</b></td><td>A section of DNA at a particular position (<b>locus</b>) on a chromosome that codes for a protein, and so for a trait</td><td>The gene for pea stem height</td></tr>
<tr><td><b>Allele</b></td><td>An alternative form (version) of a gene. You inherit one allele from each parent</td><td>T (tall) and t (short)</td></tr>
<tr><td><b>Genotype</b></td><td>The combination of alleles an organism has for a trait</td><td>TT, Tt or tt</td></tr>
<tr><td><b>Phenotype</b></td><td>The observable characteristic(s), produced by the genotype <b>interacting with the environment</b></td><td>Tall, purple flowers, blood group A</td></tr>
<tr><td><b>Homozygous</b></td><td>Two <b>identical</b> alleles for a gene (“pure-breeding”)</td><td>TT (homozygous dominant), tt (homozygous recessive)</td></tr>
<tr><td><b>Heterozygous</b></td><td>Two <b>different</b> alleles for a gene (a “hybrid”, or a “carrier” of a recessive allele)</td><td>Tt</td></tr>
<tr><td><b>Dominant</b></td><td>An allele that is expressed in the phenotype even when only one copy is present. Written in upper case</td><td>T: TT and Tt are both tall</td></tr>
<tr><td><b>Recessive</b></td><td>An allele that is expressed only when two copies are present (it is masked by the dominant allele). Written in lower case</td><td>t: only tt is short</td></tr>
</table>
<div class="key"><b>Phenotype = genotype + environment.</b> Example: identical twins (same genotype) can differ in height or weight because of diet. Hydrangea flower colour depends on soil pH. Polygenic traits like height and skin colour are controlled by many genes plus the environment, which gives <b>continuous variation</b>. Single-gene traits like ABO blood group show <b>discontinuous variation</b>.</div>
<ul>
<li>Dominant and recessive describe <b>alleles</b>, not genes. A dominant allele is <b>not</b> necessarily more common or “better” (e.g. Huntington’s disease and polydactyly are caused by dominant alleles).</li>
<li>Use the <b>same letter</b> for both alleles of a gene (T/t, not T/s). Pick letters whose upper and lower case look different (avoid C/c, S/s, O/o if handwriting is messy).</li>
<li>Why is an allele dominant? Often the dominant allele codes for a working protein (e.g. an enzyme that makes pigment), and one copy makes enough protein. The recessive allele makes a non-working protein or none.</li>
<li><b>Monohybrid cross:</b> a cross that follows one gene (one trait). <b>Heredity:</b> passing traits from parents to offspring. <b>Trait:</b> a characteristic. <b>Genome:</b> all the DNA (all the genes) of an organism.</li>
</ul>
<div class="warn">A heterozygote is simply “heterozygous” (Tt). Calling it “heterozygous dominant” is non-standard. A recessive <i>phenotype</i> is always homozygous recessive, but a dominant phenotype could be TT <i>or</i> Tt.</div>
`
    },
    {
      id: 'gen-o7b',
      title: 'Outcome 7 · Autosomes vs sex chromosomes; genetic vs chromosomal mutations',
      html: `
<h4>Autosomal vs sex-linked</h4>
<ul>
<li>Humans have 23 pairs of chromosomes: <b>22 pairs of autosomes</b> (the same in males and females) + <b>1 pair of sex chromosomes</b> (XX = female, XY = male).</li>
<li><b>Autosomal trait:</b> the gene is on an autosome, so males and females are affected in roughly <b>equal</b> numbers. Examples: cystic fibrosis (recessive), albinism (recessive), Huntington’s disease (dominant), polydactyly (dominant).</li>
<li><b>Sex-linked (X-linked) trait:</b> the gene is on the X chromosome. The Y is small (about 70 genes, compared with 800–900 on the X) and carries no matching allele. Males have only one X, so a single recessive allele is expressed. X-linked recessive traits are therefore <b>much more common in males</b>. Examples: red–green colour blindness (about 8% of males and 0.5% of females) and haemophilia (blood fails to clot).</li>
<li>The <b>father</b> determines the sex of the child (he gives an X or a Y). A son always gets his X from his <b>mother</b>, and a daughter gets one X from each parent.</li>
<li><b>Y-linked</b> traits pass only from father to son (rare, and not usually examined).</li>
</ul>
<h4>Mutations</h4>
<div class="key">A <b>mutation</b> is a permanent change in the DNA sequence. Mutations are the <b>original source of new alleles</b> (variation). They can be spontaneous (copying errors during DNA replication) or caused by <b>mutagens</b> (UV light, X-rays and other ionising radiation, chemicals such as those in tobacco smoke, some viruses). Only mutations in <b>gametes (germline cells)</b> are passed to offspring. A somatic mutation (e.g. a skin cell damaged by UV) affects only that person.</div>
<table class="t">
<tr><th></th><th>Gene (genetic / point) mutation</th><th>Chromosomal mutation</th></tr>
<tr><td>Scale</td><td>Small: a change in the base sequence of a <b>single gene</b></td><td>Large: a change in the <b>structure or number</b> of whole chromosomes (affects many genes)</td></tr>
<tr><td>Types</td><td><b>Substitution</b> (one base swapped), <b>insertion</b> or <b>deletion</b> of bases (which can cause a frameshift that changes every codon after it)</td><td>Structure: deletion, duplication, inversion, translocation of a chromosome segment. Number: an extra or missing chromosome (caused by <b>non-disjunction</b> in meiosis)</td></tr>
<tr><td>Examples</td><td><b>Sickle-cell anaemia</b> (a substitution in the haemoglobin gene changes one amino acid), <b>cystic fibrosis</b> (most often a 3-base deletion in the CFTR gene), haemophilia</td><td><b>Down syndrome</b> (trisomy 21: 47 chromosomes), Turner syndrome (45, X), Klinefelter syndrome (47, XXY), cri-du-chat (part of chromosome 5 deleted)</td></tr>
<tr><td>Detected by</td><td>DNA sequencing / genetic testing</td><td>Karyotype (a photo of the chromosomes arranged in pairs)</td></tr>
</table>
<ul>
<li>Effects can be <b>harmful</b> (genetic disease), <b>neutral</b> (no change in the protein or a non-coding region, which is the most common outcome), or occasionally <b>beneficial</b> (e.g. antibiotic resistance in bacteria, or carriers of the sickle-cell allele being more resistant to malaria).</li>
</ul>
<div class="warn">A chromosomal mutation affects many genes on the chromosome involved, not “most of your genes”. A gene mutation can change the genotype without changing the phenotype (e.g. if it is recessive or silent).</div>
`
    },
    {
      id: 'gen-o8a',
      title: 'Outcome 8 · Punnett squares: monohybrid crosses, complete dominance & test crosses',
      html: `
<div class="key">A <b>Punnett square</b> shows all the possible combinations of the parents’ gametes and so predicts the <b>probability</b> of each offspring genotype and phenotype. Each box = a 1/4 (25%) chance <b>for each offspring</b>.</div>
<h4>How to set one out (full marks every time)</h4>
<ol>
<li>Write a <b>key</b>: e.g. “T = tall (dominant), t = short (recessive)”.</li>
<li>Write the parents’ <b>genotypes</b> and phenotypes: e.g. Tt (tall) × Tt (tall).</li>
<li>Separate each parent’s alleles into <b>gametes</b> along the top and side of the square.</li>
<li>Fill in the boxes (put the capital letter first: Tt, not tT).</li>
<li>State the <b>genotypic ratio</b> (homozygous dominant : heterozygous : homozygous recessive) and the <b>phenotypic ratio</b> (dominant : recessive), and/or the % or fraction asked for.</li>
</ol>
<table class="t">
<tr><th>Tt × Tt</th><th>T</th><th>t</th></tr>
<tr><th>T</th><td>TT</td><td>Tt</td></tr>
<tr><th>t</th><td>Tt</td><td>tt</td></tr>
</table>
<p>Genotypes 1 TT : 2 Tt : 1 tt. Phenotypes 3 tall : 1 short (75% tall, 25% short).</p>
<h4>The crosses to know by heart (complete dominance)</h4>
<table class="t">
<tr><th>Cross</th><th>Genotypic ratio</th><th>Phenotypic ratio</th></tr>
<tr><td>AA × aa</td><td>all Aa</td><td>all dominant</td></tr>
<tr><td>Aa × Aa</td><td>1 AA : 2 Aa : 1 aa</td><td>3 dominant : 1 recessive</td></tr>
<tr><td>Aa × aa</td><td>1 Aa : 1 aa</td><td>1 dominant : 1 recessive (50 : 50)</td></tr>
<tr><td>AA × Aa</td><td>1 AA : 1 Aa</td><td>all dominant</td></tr>
<tr><td>AA × AA, aa × aa</td><td>all the same as the parents</td><td>all the same as the parents</td></tr>
</table>
<h4>Probability traps</h4>
<ul>
<li>Each fertilisation is an <b>independent event</b>. If Aa × Aa parents already have three affected children, the chance that the next child is affected is <b>still 1/4</b>.</li>
<li>Chance of two events both happening = multiply: two affected children in a row = 1/4 × 1/4 = 1/16.</li>
<li>“Of the <b>dominant-phenotype</b> offspring of Aa × Aa, what fraction are heterozygous?” = <b>2/3</b> (2 Aa out of the 3 non-aa boxes).</li>
<li>Ratios are only expected values. Real results (e.g. Mendel’s 787 : 277) are close to 3 : 1 only with <b>large sample sizes</b>, because fertilisation is random.</li>
</ul>
<h4>Test cross</h4>
<div class="key">A <b>test cross</b> finds the unknown genotype of an organism with the dominant phenotype (AA or Aa?) by crossing it with a <b>homozygous recessive</b> (aa) individual.<br>• All offspring show the dominant phenotype → the unknown parent is probably <b>AA</b>.<br>• About half show the recessive phenotype (1 : 1) → the unknown parent is <b>Aa</b>.<br>Even <b>one</b> recessive offspring proves the parent is heterozygous. You need a large number of offspring to be confident that it is AA.</div>
<table class="t">
<tr><th>AA × aa</th><th>A</th><th>A</th></tr>
<tr><th>a</th><td>Aa</td><td>Aa</td></tr>
<tr><th>a</th><td>Aa</td><td>Aa</td></tr>
</table>
<table class="t">
<tr><th>Aa × aa</th><th>A</th><th>a</th></tr>
<tr><th>a</th><td>Aa</td><td>aa</td></tr>
<tr><th>a</th><td>Aa</td><td>aa</td></tr>
</table>
<div class="tip">Markers want the <b>key, parental genotypes, gametes, a correct square and a clearly stated ratio or probability</b>. A correct answer with no working can lose marks. If the question says “use a Punnett square”, you must draw one.</div>
`
    },
    {
      id: 'gen-o8b',
      title: 'Outcome 8 · Incomplete dominance & co-dominance (snapdragons, roan cattle, ABO blood groups)',
      html: `
<table class="t">
<tr><th></th><th>Complete dominance</th><th>Incomplete dominance</th><th>Co-dominance</th></tr>
<tr><td>Heterozygote phenotype</td><td>Same as the homozygous dominant</td><td><b>Intermediate / blended</b> (in between the two parents)</td><td><b>Both</b> alleles fully expressed <b>side by side</b> (no blending)</td></tr>
<tr><td>Example</td><td>Pea height: Tt is tall</td><td>Snapdragons: red × white → <b>pink</b></td><td>Roan cattle: red × white → <b>roan</b> (a mixture of separate red hairs and white hairs). ABO blood: I<sup>A</sup>I<sup>B</sup> → group <b>AB</b> (both A and B antigens)</td></tr>
<tr><td>Notation</td><td>A / a</td><td>Both capitals with superscripts or numbers: C<sup>R</sup>C<sup>W</sup> or R<sup>1</sup>R<sup>2</sup></td><td>Both capitals with superscripts: C<sup>R</sup>C<sup>W</sup>, I<sup>A</sup>I<sup>B</sup></td></tr>
<tr><td>F2 from heterozygote × heterozygote</td><td>3 : 1</td><td><b>1 : 2 : 1</b> (red : pink : white)</td><td><b>1 : 2 : 1</b> (red : roan : white)</td></tr>
</table>
<div class="key">In incomplete dominance and co-dominance, <b>the phenotypic ratio = the genotypic ratio</b>, because every genotype has its own phenotype. Why pink? One red allele makes only half the pigment-making enzyme, so the flower has half the pigment.</div>
<h4>Snapdragons (incomplete dominance): pink × pink</h4>
<table class="t">
<tr><th>C<sup>R</sup>C<sup>W</sup> × C<sup>R</sup>C<sup>W</sup></th><th>C<sup>R</sup></th><th>C<sup>W</sup></th></tr>
<tr><th>C<sup>R</sup></th><td>C<sup>R</sup>C<sup>R</sup> red</td><td>C<sup>R</sup>C<sup>W</sup> pink</td></tr>
<tr><th>C<sup>W</sup></th><td>C<sup>R</sup>C<sup>W</sup> pink</td><td>C<sup>W</sup>C<sup>W</sup> white</td></tr>
</table>
<p>1 red : 2 pink : 1 white.</p>
<h4>Roan cattle (co-dominance)</h4>
<ul>
<li>Red bull C<sup>R</sup>C<sup>R</sup> × white cow C<sup>W</sup>C<sup>W</sup> → F1 all C<sup>R</sup>C<sup>W</sup> = <b>roan</b> (100%).</li>
<li>Roan × roan → 1 red : 2 roan : 1 white (25% : 50% : 25%).</li>
<li>Roan × white → 1 roan : 1 white.</li>
</ul>
<h4>ABO blood groups (multiple alleles + co-dominance)</h4>
<p>There are three alleles: <b>I<sup>A</sup></b> and <b>I<sup>B</sup></b> are <b>co-dominant</b> with each other, and both are <b>dominant</b> over <b>i</b> (O). That gives 6 genotypes and 4 phenotypes.</p>
<table class="t">
<tr><th>Blood group (phenotype)</th><th>Possible genotypes</th><th>Antigens on red blood cells</th></tr>
<tr><td>A</td><td>I<sup>A</sup>I<sup>A</sup> or I<sup>A</sup>i</td><td>A</td></tr>
<tr><td>B</td><td>I<sup>B</sup>I<sup>B</sup> or I<sup>B</sup>i</td><td>B</td></tr>
<tr><td>AB</td><td>I<sup>A</sup>I<sup>B</sup></td><td>A and B (co-dominance)</td></tr>
<tr><td>O</td><td>ii</td><td>neither</td></tr>
</table>
<table class="t">
<tr><th>I<sup>A</sup>i (A) × I<sup>B</sup>i (B)</th><th>I<sup>B</sup></th><th>i</th></tr>
<tr><th>I<sup>A</sup></th><td>I<sup>A</sup>I<sup>B</sup> AB</td><td>I<sup>A</sup>i A</td></tr>
<tr><th>i</th><td>I<sup>B</sup>i B</td><td>ii O</td></tr>
</table>
<p>So two heterozygous parents with groups A and B can have children of <b>all four</b> blood groups (25% each). An <b>O child</b> proves that both parents carry i.</p>
<ul>
<li>AB × O → only A (I<sup>A</sup>i) or B (I<sup>B</sup>i), 50 : 50. An AB parent can never have an O child, and an O parent can never have an AB child.</li>
<li>Blood groups were used in paternity cases before DNA profiling. They can <b>exclude</b> a man as the father but cannot prove that he is the father.</li>
</ul>
<div class="warn">Don’t write co-dominant alleles as R and r. A lower-case letter implies a recessive allele, so use superscripts. In co-dominance the heterozygote is <b>not</b> a blend: roan cattle have separate red and white hairs, not pink hairs.</div>
`
    },
    {
      id: 'gen-o8c',
      title: 'Outcome 8 · Sex-linked Punnett squares (colour blindness, haemophilia)',
      html: `
<div class="key">For X-linked genes, write the allele as a <b>superscript on the X</b>: X<sup>H</sup> = normal clotting, X<sup>h</sup> = haemophilia. The Y carries <b>no allele</b>, so write just Y.<br>Females: X<sup>H</sup>X<sup>H</sup> (normal), X<sup>H</sup>X<sup>h</sup> (normal <b>carrier</b>), X<sup>h</sup>X<sup>h</sup> (affected).<br>Males: X<sup>H</sup>Y (normal), X<sup>h</sup>Y (affected). A male can never be a carrier.</div>
<h4>Carrier mother × normal father (the classic exam cross)</h4>
<table class="t">
<tr><th>X<sup>B</sup>X<sup>b</sup> × X<sup>B</sup>Y</th><th>X<sup>B</sup></th><th>Y</th></tr>
<tr><th>X<sup>B</sup></th><td>X<sup>B</sup>X<sup>B</sup> normal girl</td><td>X<sup>B</sup>Y normal boy</td></tr>
<tr><th>X<sup>b</sup></th><td>X<sup>B</sup>X<sup>b</sup> carrier girl</td><td>X<sup>b</sup>Y colour-blind boy</td></tr>
</table>
<ul>
<li>Daughters: 50% normal, 50% carriers, <b>0% affected</b>.</li>
<li>Sons: <b>50% affected</b>.</li>
<li>Chance that <b>any</b> child is affected = 1/4. Chance that a <b>son</b> is affected = 1/2. Read carefully which one is asked!</li>
</ul>
<h4>Carrier mother × affected father (2022 Yearly Q13)</h4>
<table class="t">
<tr><th>X<sup>B</sup>X<sup>b</sup> × X<sup>b</sup>Y</th><th>X<sup>b</sup></th><th>Y</th></tr>
<tr><th>X<sup>B</sup></th><td>X<sup>B</sup>X<sup>b</sup> carrier girl</td><td>X<sup>B</sup>Y normal boy</td></tr>
<tr><th>X<sup>b</sup></th><td>X<sup>b</sup>X<sup>b</sup> colour-blind girl</td><td>X<sup>b</sup>Y colour-blind boy</td></tr>
</table>
<p>Half the daughters and half the sons are colour blind, so <b>half of the children regardless of sex</b>.</p>
<h4>Other crosses</h4>
<table class="t">
<tr><th>Parents</th><th>Daughters</th><th>Sons</th></tr>
<tr><td>Normal mother X<sup>H</sup>X<sup>H</sup> × affected father X<sup>h</sup>Y</td><td>all carriers</td><td>all normal (sons get their father’s Y, not his X)</td></tr>
<tr><td>Affected mother X<sup>h</sup>X<sup>h</sup> × normal father X<sup>H</sup>Y</td><td>all carriers</td><td><b>all affected</b></td></tr>
<tr><td>Affected mother × affected father</td><td>all affected</td><td>all affected</td></tr>
</table>
<ul>
<li><b>Haemophilia</b> (X-linked recessive): a missing clotting factor (usually factor VIII). Queen Victoria was a carrier and passed it into several European royal families.</li>
<li><b>Thomas Hunt Morgan</b> (fruit flies, ~1910): a white-eyed male × red-eyed female gave all-red F1. In the F2, all the white-eyed flies were <b>male</b> (X<sup>R</sup>X<sup>r</sup> × X<sup>R</sup>Y). This showed that the eye-colour gene is on the X chromosome.</li>
<li><b>X-linked dominant</b> (rare, e.g. vitamin D-resistant rickets): an affected father passes it to <b>all daughters</b> and <b>no sons</b>.</li>
</ul>
<div class="tip">For sex-linked questions, <b>always include the X and Y</b> in every genotype and give results separately for sons and daughters. Writing “Bb” for a male is wrong.</div>
`
    },
    {
      id: 'gen-o8d',
      title: 'Outcome 8 · Pedigree charts (autosomal & sex-linked)',
      html: `
<p>A <b>pedigree</b> is a family tree showing how a trait is inherited over several generations. For humans we use pedigrees because we cannot set up controlled breeding experiments (ethics), families are small, and generations take about 25 years.</p>
<svg viewBox="0 0 320 170" width="100%" style="max-height:220px" role="img" aria-label="Pedigree symbols and an example of autosomal recessive inheritance">
<g stroke="currentColor" stroke-width="2" fill="none">
<rect x="10" y="10" width="20" height="20"/><circle cx="20" cy="55" r="10"/>
<rect x="10" y="80" width="20" height="20" fill="currentColor"/><circle cx="20" cy="125" r="10" fill="currentColor"/>
<circle cx="20" cy="155" r="10"/><path d="M20 145 A10 10 0 0 1 20 165 Z" fill="currentColor"/>
<rect x="190" y="10" width="20" height="20"/><circle cx="270" cy="20" r="10"/>
<line x1="210" y1="20" x2="260" y2="20"/><line x1="235" y1="20" x2="235" y2="60"/>
<line x1="185" y1="60" x2="285" y2="60"/>
<line x1="185" y1="60" x2="185" y2="80"/><line x1="235" y1="60" x2="235" y2="80"/><line x1="285" y1="60" x2="285" y2="80"/>
<rect x="175" y="80" width="20" height="20" fill="currentColor"/><circle cx="235" cy="90" r="10"/><rect x="275" y="80" width="20" height="20"/>
</g>
<g fill="currentColor" font-size="11" font-family="sans-serif">
<text x="38" y="24">unaffected male</text><text x="38" y="59">unaffected female</text>
<text x="38" y="94">affected male</text><text x="38" y="129">affected female</text><text x="38" y="159">carrier female (optional)</text>
<text x="160" y="24">I</text><text x="160" y="94">II</text>
<text x="165" y="125">Unaffected parents, affected</text><text x="165" y="139">child → recessive. Both parents</text><text x="165" y="153">must be carriers (Aa).</text>
</g>
</svg>
<p>Horizontal line between a male and a female = mating. Vertical line down = their children, in birth order from left to right. Generations are labelled with Roman numerals (I, II, III) and individuals with numbers (II-3).</p>
<h4>Step 1: dominant or recessive?</h4>
<ul>
<li><b>Two unaffected parents have an affected child → RECESSIVE</b> (both parents must be carriers).</li>
<li><b>Two affected parents have an unaffected child → DOMINANT</b> (both parents must be heterozygous).</li>
<li>Clues (not proof): dominant traits appear in <b>every generation</b>, and every affected person has at least one affected parent. Recessive traits often <b>skip generations</b>.</li>
</ul>
<h4>Step 2: autosomal or X-linked?</h4>
<table class="t">
<tr><th>Pattern</th><th>Signs</th><th>Rule that disproves it</th></tr>
<tr><td><b>Autosomal recessive</b></td><td>Males and females affected about equally; skips generations</td><td>None needed. Proven autosomal if an <b>affected daughter has an unaffected father</b></td></tr>
<tr><td><b>Autosomal dominant</b></td><td>Every generation; both sexes equally; an affected father can have an affected son</td><td>Proven autosomal if an <b>affected father has an unaffected daughter</b> or an affected son has an unaffected mother</td></tr>
<tr><td><b>X-linked recessive</b></td><td><b>Mostly males</b>; passed from an affected grandfather through carrier daughters to grandsons; no father-to-son transmission</td><td><b>Ruled out</b> if an affected mother has an unaffected son, or an affected daughter has an unaffected father</td></tr>
<tr><td><b>X-linked dominant</b></td><td>An affected father → <b>all daughters affected, no sons</b></td><td><b>Ruled out</b> if an affected father has an unaffected daughter, or there is father-to-son transmission</td></tr>
</table>
<div class="key"><b>Father-to-son transmission rules out X-linkage</b>, because a son gets his father’s Y, not his X.</div>
<h4>Step 3: assign genotypes</h4>
<ul>
<li>Everyone showing the <b>recessive</b> phenotype = aa (or X<sup>a</sup>X<sup>a</sup> / X<sup>a</sup>Y).</li>
<li>A person with the dominant phenotype who has an aa parent <b>or</b> an aa child must be <b>Aa</b>.</li>
<li>If you cannot decide (e.g. AA or Aa), write “A_” and say why it cannot be determined.</li>
<li>For an X-linked recessive trait, the unaffected mother of an affected son must be a <b>carrier</b> X<sup>A</sup>X<sup>a</sup>.</li>
<li>The unaffected child of two carriers has a <b>2/3</b> chance of being a carrier.</li>
</ul>
<div class="model"><b>Model answer (2 marks), 2022 Yearly style:</b> <i>Polydactyly is autosomal dominant. Beth is affected; her husband is unaffected; one of their three children is unaffected. Is Beth homozygous or heterozygous? Justify.</i><br>Beth must be <b>heterozygous (Pp)</b>. Her unaffected child is pp and must have received a p allele from each parent, so Beth carries one p. If she were PP, every child would receive P and be affected.</div>
<div class="warn">The notes claim that “if the father is affected, the mother is a non-carrier and the daughter is affected, the trait is autosomal”. That is wrong: an X-linked <b>dominant</b> trait gives exactly this pattern. Use the rules in the table, which are based on what each parent can pass on.</div>
<div class="tip">Always <b>justify with specific individuals</b>: “II-3 and II-4 are unaffected but their son III-2 is affected, so the trait is recessive.” Shading means “has the trait”. It does not mean dominant.</div>
`
    },
    {
      id: 'gen-o9a',
      title: 'Outcome 9 · Genetic technologies I: cloning, DNA profiling, gene therapy',
      html: `
<p>The syllabus asks you to explain <b>one</b> technology in depth. The yearly asks you to <b>describe</b> it and <b>evaluate/discuss</b> it (2022: 4 marks; 2024: 5 marks). Learn one really well (DNA profiling or gene therapy are the easiest to evaluate), but know the basics of all six for MCQs.</p>
<h4>1. Cloning</h4>
<p>Cloning produces genetically identical copies of a gene, a cell or a whole organism.</p>
<ul>
<li><b>Natural:</b> identical twins; asexual reproduction (runners, bacteria). <b>Plants:</b> cuttings, grafting, tissue culture (used for bananas and orchids).</li>
<li><b>Reproductive cloning by somatic cell nuclear transfer (SCNT):</b> Dolly the sheep (1996, Roslin Institute, Scotland). See the steps below.</li>
<li><b>Therapeutic cloning:</b> SCNT is used to make an embryo only as a source of embryonic stem cells that match the patient. No baby is produced.</li>
</ul>
<ol>
<li>Take a somatic (body) cell from the animal to be cloned (Dolly: an udder cell from a Finn Dorset ewe).</li>
<li>Take an egg cell from a second sheep (a Scottish Blackface) and remove its nucleus (enucleate it).</li>
<li>Fuse the somatic cell, or inject its nucleus, into the empty egg using an electric pulse. The pulse also stimulates division.</li>
<li>The cell divides by mitosis into an embryo.</li>
<li>Implant the embryo into the uterus of a surrogate mother.</li>
<li>The offspring is genetically identical to the <b>nucleus donor</b>, not to the egg donor or the surrogate.</li>
</ol>
<table class="t">
<tr><th>Benefits</th><th>Limitations / risks</th><th>Ethical issues</th></tr>
<tr><td>Copies elite livestock or crops with desirable traits; could help save endangered species; produces animals that make medicines in their milk; therapeutic cloning could give matching tissue with no rejection</td><td>Very inefficient (Dolly took 277 attempts); clones often have health problems and shorter lives (Dolly was put down at 6 with lung disease and arthritis); <b>no genetic variation</b>, so a whole herd or crop can be wiped out by one disease</td><td>Animal welfare; therapeutic cloning creates and destroys embryos; fear of human reproductive cloning (banned in Australia and most countries); “playing God”</td></tr>
</table>
<div class="warn">Therapeutic cloning is <b>not</b> free of ethical issues: it involves creating and then destroying a human embryo. Don’t claim that cloning routinely “creates whole humans”. Human reproductive cloning has never been done and is illegal in Australia.</div>
<h4>2. DNA profiling (DNA fingerprinting)</h4>
<p>Developed by <b>Alec Jeffreys</b> (UK, 1984). It compares regions of <b>non-coding DNA</b> called <b>short tandem repeats (STRs)</b>, where the number of repeats differs greatly between people. Only identical twins share the same profile.</p>
<ol>
<li>Collect a biological sample (blood, saliva, hair root, semen, skin cells).</li>
<li>Extract the DNA from the cells.</li>
<li>Amplify (copy) the STR regions millions of times using the <b>polymerase chain reaction (PCR)</b>. This works even from tiny samples.</li>
<li>Separate the fragments by size using <b>gel electrophoresis</b>. DNA is negatively charged and moves towards the positive electrode, and <b>smaller fragments travel further</b>.</li>
<li>Visualise the bands (dye or fluorescence) to produce a profile, then compare it with other samples or a database.</li>
</ol>
<ul>
<li><b>Uses:</b> forensics (matching crime-scene DNA to suspects, and freeing the wrongly convicted; the first conviction was Colin Pitchfork in the UK in 1988), paternity and family testing (a child’s bands must each come from the mother or the father), identifying disaster victims and remains, tracking endangered species and illegal wildlife trade, and pedigree tests in animal breeding.</li>
<li><b>Limitations:</b> contamination or degraded samples; tiny or mixed samples are hard to interpret; human error in the lab or in interpreting the statistics; identical twins can’t be told apart; a match only shows someone was <b>present</b>, not that they committed the crime (DNA can be transferred innocently).</li>
<li><b>Ethical issues:</b> <b>privacy</b> of genetic information and who controls DNA databases; storing DNA of innocent people; consent; possible <b>discrimination</b>; family secrets revealed (non-paternity).</li>
</ul>
<h4>3. Gene therapy</h4>
<p>Gene therapy treats a genetic disorder by inserting a <b>working copy of a gene</b> into a patient’s cells, or by <b>editing</b> or <b>silencing</b> a faulty gene (e.g. with <b>CRISPR-Cas9</b>). It targets the <b>cause</b> of the disease, not just the symptoms.</p>
<ul>
<li>A normal allele is put into a <b>vector</b>, usually a modified harmless virus, which delivers it into the target cells. The cells can be treated in the body (<i>in vivo</i>) or removed, treated and returned (<i>ex vivo</i>, e.g. bone marrow stem cells).</li>
<li><b>Somatic</b> gene therapy changes only the patient’s body cells, so it is <b>not inherited</b>. <b>Germline</b> gene therapy (eggs, sperm, embryos) would be passed on to future generations. It is banned in Australia and most countries. (In 2018 He Jiankui’s CRISPR-edited babies in China were condemned worldwide.)</li>
<li><b>Successes:</b> treatments approved for an inherited blindness (Luxturna, 2017), spinal muscular atrophy (Zolgensma), and sickle-cell disease and beta-thalassaemia (Casgevy, a CRISPR therapy, 2023). Haemophilia and some leukaemias have also been treated.</li>
</ul>
<table class="t">
<tr><th>Benefits</th><th>Limitations / risks</th><th>Ethical issues</th></tr>
<tr><td>Treats the root cause; often a one-off treatment instead of lifelong medication; offers hope for diseases with no other treatment; better quality of life</td><td>Immune reactions to the viral vector (Jesse Gelsinger died in a 1999 trial); the gene can insert in the wrong place and trigger cancer; effects may wear off; only works for single-gene disorders; extremely <b>expensive</b> (millions of dollars per patient)</td><td>Who can afford it (equity); germline editing and <b>“designer babies”</b>/enhancement; consent of future generations; where the line between “treatment” and “improvement” lies</td></tr>
</table>
`
    },
    {
      id: 'gen-o9b',
      title: 'Outcome 9 · Genetic technologies II: genetic screening, stem cells, genetic modification + how to evaluate',
      html: `
<h4>4. Genetic screening</h4>
<p>Genetic screening tests a person’s DNA (or chromosomes) for alleles or mutations linked to a disease, often across a whole population group.</p>
<ul>
<li><b>Newborn screening</b> (heel-prick test, offered to every baby in Australia): detects phenylketonuria (PKU), cystic fibrosis, congenital hypothyroidism and more, so treatment can start early. PKU can be managed by diet.</li>
<li><b>Carrier screening</b>: tests prospective parents for recessive alleles (cystic fibrosis, spinal muscular atrophy, fragile X).</li>
<li><b>Prenatal testing</b>: NIPT (fetal DNA in the mother’s blood), amniocentesis and chorionic villus sampling (karyotype for Down syndrome). The invasive tests carry a small miscarriage risk.</li>
<li><b>Pre-implantation genetic diagnosis (PGD)</b> with IVF: only embryos without the disease allele are implanted.</li>
<li><b>Adult predictive testing</b>: e.g. BRCA1/BRCA2 (breast and ovarian cancer risk) and Huntington’s disease.</li>
</ul>
<table class="t">
<tr><th>Benefits</th><th>Limitations / risks</th><th>Ethical issues</th></tr>
<tr><td>Early treatment and better outcomes; informed reproductive choices; preventive action (e.g. surgery or extra checks for BRCA carriers); can reduce how often a disease occurs</td><td>False positives and negatives; many results only show <b>increased risk</b>, not certainty; some conditions have no cure; cost; invasive prenatal tests can cause miscarriage</td><td>Anxiety from knowing about untreatable disease (Huntington’s); <b>discrimination</b> by insurers or employers; privacy; termination decisions and selection of embryos; family members are affected by your results; the right <b>not</b> to know</td></tr>
</table>
<h4>5. Stem cells</h4>
<p><b>Stem cells</b> are unspecialised cells that can divide repeatedly and <b>differentiate</b> into specialised cell types.</p>
<ul>
<li><b>Embryonic stem cells</b> (from a ~5-day-old blastocyst, often spare IVF embryos): <b>pluripotent</b>, meaning they can become any body cell type.</li>
<li><b>Adult (somatic) stem cells</b> (bone marrow, umbilical cord blood, skin): <b>multipotent</b>, meaning they make only a limited range of cells (e.g. bone marrow makes blood cells).</li>
<li><b>Induced pluripotent stem cells (iPSCs)</b>: adult cells reprogrammed to act like embryonic cells (Yamanaka, 2006). No embryo is needed, and they match the patient.</li>
<li><b>Uses:</b> <b>bone marrow (haematopoietic) stem cell transplants</b> for leukaemia and lymphoma (a well-established treatment, used to replace cells destroyed by chemotherapy); skin grafts for burns; corneal repair. Research into treating spinal injury, Parkinson’s, type 1 diabetes and heart damage, and growing tissues for drug testing.</li>
</ul>
<table class="t">
<tr><th>Benefits</th><th>Limitations / risks</th><th>Ethical issues</th></tr>
<tr><td>Can replace damaged tissue; potential cures for currently incurable conditions; patient-matched cells (iPSCs) avoid rejection; reduces the need for animal testing of drugs</td><td>Rejection by the immune system if the cells are from a donor (patients need matched donors and immunosuppressant drugs); uncontrolled division can form tumours; many treatments are still experimental; expensive; unregulated “stem cell clinics” sell unproven treatments</td><td>Embryonic stem cells require <b>destroying a human embryo</b> (the debate over when life begins); consent of egg or embryo donors; fair access</td></tr>
</table>
<div class="warn">Stem cells with the desired characteristics are not “made from nothing”. They are taken from a source (embryo, bone marrow, cord blood, reprogrammed adult cells) and <b>cultured</b> under ideal conditions, then transplanted. The technology is best called <b>stem cell therapy</b>.</div>
<h4>6. Genetic modification (genetic engineering / recombinant DNA technology)</h4>
<p>Genetic modification directly changes an organism’s DNA, often by inserting a gene from another species. The result is a <b>transgenic</b> organism, or <b>GMO</b>.</p>
<ol>
<li>Identify the desired gene and cut it out using a <b>restriction enzyme</b> (which cuts DNA at specific base sequences).</li>
<li>Cut a <b>plasmid</b> (a small ring of bacterial DNA) with the same restriction enzyme so the ends match (“sticky ends”).</li>
<li>Join the gene into the plasmid with <b>DNA ligase</b>. The result is <b>recombinant DNA</b>.</li>
<li>Insert the plasmid into a host cell (a bacterium, or a plant cell via <i>Agrobacterium</i>). The host cells multiply and express the gene.</li>
</ol>
<ul>
<li><b>Examples:</b> human <b>insulin</b> made by GM bacteria (since 1982, replacing pig and cow insulin); <b>Bt cotton</b> (a gene from the bacterium <i>Bacillus thuringiensis</i> makes a protein toxic to caterpillar pests; most Australian cotton is GM, which cut insecticide use dramatically); herbicide-tolerant canola; <b>Golden Rice</b> (makes beta-carotene to fight vitamin A deficiency); disease-resistant crops; vaccines.</li>
</ul>
<table class="t">
<tr><th>Benefits</th><th>Limitations / risks</th><th>Ethical issues</th></tr>
<tr><td>Higher yields and more food security; less pesticide spraying; drought or salt tolerance; better nutrition; cheap, safe and plentiful medicines (insulin, clotting factors)</td><td>Genes could spread to wild relatives (gene flow); pests and weeds evolve resistance; less genetic diversity (monocultures); possible new allergens; long-term effects still being studied</td><td>Corporate patents on seeds (farmers must buy new seed every year, and poorer farmers depend on companies); consumers’ right to know (FSANZ labelling rules in Australia); animal welfare; “unnatural” or “playing God” objections</td></tr>
</table>
<div class="warn">“GMO” is the <b>product</b>, not the technology. Name the technology as <b>genetic modification / recombinant DNA technology</b>. Vague points like “improves crop quality” earn no marks. Say <i>what</i> quality (e.g. pest resistance, vitamin A content, shelf life).</div>
<h4>How to answer “Evaluate the use of one technology and its impact on society” (5 marks)</h4>
<ol>
<li><b>Name and outline</b> the technology (what it is and how it works, 1–2 sentences with a key process).</li>
<li><b>Benefits</b>: at least two <b>specific</b> ones, with examples.</li>
<li><b>Limitations / risks</b>: at least one scientific limitation.</li>
<li><b>Ethical / social issues</b>: at least one (privacy, discrimination, equity, embryo use, consent).</li>
<li><b>A judgement</b>: “Overall, the benefits outweigh the costs because… provided that…” Evaluate = make a judgement based on criteria. No judgement = no top mark.</li>
</ol>
<div class="model"><b>Model answer (5 marks): Evaluate gene therapy and its impact on society.</b><br>Gene therapy treats genetic disorders by inserting a working copy of a faulty gene into a patient’s cells, usually using a modified harmless virus as a vector, or by editing the faulty gene with CRISPR-Cas9. Its main benefit is that it treats the cause of a disease rather than its symptoms. For example, Casgevy (approved in 2023) edits patients’ bone marrow stem cells so they make functional haemoglobin, which can cure sickle-cell disease. It is often a one-off treatment, which improves quality of life and reduces lifelong medical costs. However, there are risks: the immune system can react to the vector (a patient died in a 1999 trial), and the gene can insert in the wrong place and cause cancer. It is also only suited to single-gene disorders. Treatments cost millions of dollars per patient, which raises equity issues. Germline editing would affect future generations who cannot consent and could lead to “designer babies”. Overall, somatic gene therapy has a strongly positive impact on society because it offers cures for previously untreatable diseases. Germline editing should remain banned, and costs must come down so that access is fair.</div>
`
    }
  ],
  cram: `
<h4>Mendel</h4>
<ul>
<li>Peas: contrasting traits, short generations, many offspring, controllable pollination. Pure-breeding P → F1 all dominant → F2 3 : 1.</li>
<li>Laws: <b>dominance</b>, <b>segregation</b> (2 alleles separate into gametes), <b>independent assortment</b> (9 : 3 : 3 : 1).</li>
</ul>
<h4>Terms</h4>
<ul>
<li>Gene = DNA section coding a protein; allele = version of a gene; genotype = alleles (Tt); phenotype = observable trait (genotype + environment).</li>
<li>Homozygous TT/tt; heterozygous Tt (carrier). Dominant expressed with 1 copy; recessive only when tt.</li>
<li>22 pairs of autosomes + XX/XY. X-linked recessive is mostly in males (one X). Gene mutation = base change (sickle cell, CF). Chromosomal = structure/number (Down syndrome, trisomy 21).</li>
</ul>
<h4>Ratios</h4>
<table class="t"><tr><th>Cross</th><th>Result</th></tr>
<tr><td>Aa × Aa</td><td>1 : 2 : 1 genotypes; 3 : 1 phenotypes</td></tr>
<tr><td>Aa × aa (test cross)</td><td>1 : 1. Any recessive offspring → the parent is Aa</td></tr>
<tr><td>Incomplete (pink) / co-dominant (roan) het × het</td><td>1 : 2 : 1 phenotypes</td></tr>
<tr><td>I<sup>A</sup>i × I<sup>B</sup>i</td><td>A, B, AB, O at 25% each</td></tr>
<tr><td>X<sup>B</sup>X<sup>b</sup> × X<sup>B</sup>Y</td><td>½ of sons affected, no daughters affected (½ carriers)</td></tr>
<tr><td>X<sup>B</sup>X<sup>b</sup> × X<sup>b</sup>Y</td><td>½ of children affected regardless of sex</td></tr>
<tr><td>X<sup>h</sup>X<sup>h</sup> × X<sup>H</sup>Y</td><td>all sons affected, all daughters carriers</td></tr></table>
<h4>Pedigrees</h4>
<ul>
<li>Unaffected parents → affected child = <b>recessive</b>. Affected parents → unaffected child = <b>dominant</b>.</li>
<li>Father → son transmission = <b>not X-linked</b>. Affected daughter with unaffected father = autosomal recessive. Affected father with unaffected daughter = autosomal dominant.</li>
<li>X-linked recessive: mostly males, skips generations, affected mother → all sons affected.</li>
</ul>
<h4>Technologies (benefit / limitation / ethics)</h4>
<ul>
<li><b>Cloning</b> (SCNT, Dolly 1996): copies elite stock / inefficient, no variation / embryo use, animal welfare.</li>
<li><b>DNA profiling</b> (STRs, PCR, gel electrophoresis): forensics, paternity / contamination, twins / privacy, databases.</li>
<li><b>Gene therapy</b> (viral vector, CRISPR): treats the cause / immune reaction, cost / germline, designer babies.</li>
<li><b>Genetic screening</b> (heel-prick, carrier, prenatal, BRCA): early treatment / false results, risk only / discrimination, anxiety.</li>
<li><b>Stem cells</b> (embryonic pluripotent, adult multipotent, iPSC): bone marrow transplants / rejection, tumours / embryo destruction.</li>
<li><b>GM</b> (restriction enzyme + ligase + plasmid): insulin, Bt cotton / gene flow, resistance / patents, labelling.</li>
<li>Evaluate = outline + benefits + limitations + ethics + <b>judgement</b>.</li>
</ul>
`
});

SD.cards.push(
  { id: 'gen-c1', topic: 'genetics', outcome: 'gen-o7', front: `Gene`, back: `A section of DNA at a specific locus on a chromosome that codes for a particular protein (and so a trait).` },
  { id: 'gen-c2', topic: 'genetics', outcome: 'gen-o7', front: `Allele`, back: `An alternative form (version) of a gene, e.g. T (tall) and t (short). One is inherited from each parent.` },
  { id: 'gen-c3', topic: 'genetics', outcome: 'gen-o7', front: `Genotype`, back: `The combination of alleles an organism has for a trait, e.g. TT, Tt or tt.` },
  { id: 'gen-c4', topic: 'genetics', outcome: 'gen-o7', front: `Phenotype`, back: `The observable characteristics of an organism, resulting from its genotype interacting with the environment (phenotype = genotype + environment).` },
  { id: 'gen-c5', topic: 'genetics', outcome: 'gen-o7', front: `Homozygous`, back: `Having two identical alleles for a gene (TT or tt). Also called pure-breeding.` },
  { id: 'gen-c6', topic: 'genetics', outcome: 'gen-o7', front: `Heterozygous`, back: `Having two different alleles for a gene (Tt). For a recessive disorder this person is a carrier.` },
  { id: 'gen-c7', topic: 'genetics', outcome: 'gen-o7', front: `Dominant allele`, back: `An allele that is expressed in the phenotype when only one copy is present. It masks the recessive allele. Written in upper case.` },
  { id: 'gen-c8', topic: 'genetics', outcome: 'gen-o7', front: `Recessive allele`, back: `An allele that is expressed only when two copies are present (homozygous recessive). Written in lower case.` },
  { id: 'gen-c9', topic: 'genetics', outcome: 'gen-o7b', front: `Autosome`, back: `Any chromosome that is not a sex chromosome. Humans have 22 pairs. Autosomal traits affect males and females equally.` },
  { id: 'gen-c10', topic: 'genetics', outcome: 'gen-o7b', front: `Sex-linked (X-linked) trait`, back: `A trait controlled by a gene on the X chromosome. X-linked recessive traits are more common in males because they have only one X (there is no matching allele on the Y). E.g. colour blindness, haemophilia.` },
  { id: 'gen-c11', topic: 'genetics', outcome: 'gen-o7b', front: `Gene (genetic) mutation`, back: `A change in the base sequence of a single gene (substitution, insertion or deletion), e.g. sickle-cell anaemia, cystic fibrosis.` },
  { id: 'gen-c12', topic: 'genetics', outcome: 'gen-o7b', front: `Chromosomal mutation`, back: `A change in the structure (deletion, duplication, inversion, translocation) or number of chromosomes, affecting many genes. E.g. Down syndrome (trisomy 21).` },
  { id: 'gen-c13', topic: 'genetics', outcome: 'gen-o7b', front: `Mutagen`, back: `An agent that increases the rate of mutation, e.g. UV light, X-rays and other ionising radiation, chemicals in tobacco smoke, some viruses.` },
  { id: 'gen-c14', topic: 'genetics', outcome: 'gen-o7b', front: `Which mutations are inherited?`, back: `Only mutations in gametes (or the germline cells that make them). Somatic (body cell) mutations affect only the individual.` },
  { id: 'gen-c15', topic: 'genetics', outcome: 'gen-o6', front: `Why did Mendel use pea plants?`, back: `Clear contrasting traits, short generation time, many offspring (large samples), they self-pollinate (pure lines) but can be cross-pollinated by hand (controlled crosses), and they are easy to grow.` },
  { id: 'gen-c16', topic: 'genetics', outcome: 'gen-o6', front: `Mendel’s F1 and F2 results (pure tall × pure short)`, back: `F1: all tall (Tt). F2 (F1 self-pollinated): 3 tall : 1 short, genotypes 1 TT : 2 Tt : 1 tt.` },
  { id: 'gen-c17', topic: 'genetics', outcome: 'gen-o6', front: `Law of dominance`, back: `In a heterozygote, one allele (dominant) is expressed and masks the other (recessive). This explains why the F1 all showed one parent’s trait.` },
  { id: 'gen-c18', topic: 'genetics', outcome: 'gen-o6', front: `Law of segregation`, back: `Each organism has two alleles for a trait, and they separate during gamete formation so each gamete carries only one. This explains the 3 : 1 F2 ratio.` },
  { id: 'gen-c19', topic: 'genetics', outcome: 'gen-o6', front: `Law of independent assortment`, back: `Alleles of different genes (on different chromosomes) are sorted into gametes independently of each other. This explains the 9 : 3 : 3 : 1 dihybrid ratio.` },
  { id: 'gen-c20', topic: 'genetics', outcome: 'gen-o6', front: `Pure-breeding (true-breeding)`, back: `An organism that is homozygous for a trait and always produces offspring with the same trait when self-fertilised. Mendel made these by self-pollinating for several generations.` },
  { id: 'gen-c21', topic: 'genetics', outcome: 'gen-o8a', front: `Monohybrid cross`, back: `A cross that follows the inheritance of a single gene (one trait), e.g. Tt × Tt.` },
  { id: 'gen-c22', topic: 'genetics', outcome: 'gen-o8a', front: `Aa × Aa ratios`, back: `Genotypic 1 AA : 2 Aa : 1 aa. Phenotypic 3 dominant : 1 recessive (75% : 25%).` },
  { id: 'gen-c23', topic: 'genetics', outcome: 'gen-o8a', front: `Test cross`, back: `Crossing an individual with the dominant phenotype (unknown AA or Aa) with a homozygous recessive (aa). All dominant offspring → probably AA. About 1 : 1 → Aa.` },
  { id: 'gen-c24', topic: 'genetics', outcome: 'gen-o8a', front: `Why may observed ratios differ from a Punnett square?`, back: `Punnett squares give probabilities. Fertilisation is random, so small samples deviate by chance. Larger samples get closer to the expected ratio.` },
  { id: 'gen-c25', topic: 'genetics', outcome: 'gen-o8b', front: `Incomplete dominance`, back: `Neither allele is completely dominant, so the heterozygote has an intermediate (blended) phenotype. E.g. red × white snapdragons → pink. F2 = 1 red : 2 pink : 1 white.` },
  { id: 'gen-c26', topic: 'genetics', outcome: 'gen-o8b', front: `Co-dominance`, back: `Both alleles are fully and separately expressed in the heterozygote. E.g. roan cattle (red and white hairs), blood group AB (both A and B antigens).` },
  { id: 'gen-c27', topic: 'genetics', outcome: 'gen-o8b', front: `ABO blood group alleles`, back: `Iᴬ and Iᴮ are co-dominant; both are dominant over i. A = IᴬIᴬ or Iᴬi; B = IᴮIᴮ or Iᴮi; AB = IᴬIᴮ; O = ii. 6 genotypes, 4 phenotypes.` },
  { id: 'gen-c28', topic: 'genetics', outcome: 'gen-o8b', front: `Roan × roan cattle`, back: `CᴿCᵂ × CᴿCᵂ → 1 red (CᴿCᴿ) : 2 roan (CᴿCᵂ) : 1 white (CᵂCᵂ).` },
  { id: 'gen-c29', topic: 'genetics', outcome: 'gen-o8b', front: `Multiple alleles`, back: `When a gene has more than two alleles in the population (e.g. ABO blood groups: Iᴬ, Iᴮ, i). Each person still carries only two.` },
  { id: 'gen-c30', topic: 'genetics', outcome: 'gen-o8c', front: `Carrier (sex-linked)`, back: `A female heterozygous for an X-linked recessive allele (e.g. XᴴXʰ). She is unaffected but can pass the allele on. Males cannot be carriers.` },
  { id: 'gen-c31', topic: 'genetics', outcome: 'gen-o8c', front: `XᴮXᵇ × XᴮY (colour blindness)`, back: `Daughters: ½ XᴮXᴮ, ½ XᴮXᵇ carriers, none affected. Sons: ½ XᴮY normal, ½ XᵇY colour blind. Overall ¼ of children affected.` },
  { id: 'gen-c32', topic: 'genetics', outcome: 'gen-o8c', front: `Why can’t a father pass an X-linked allele to his son?`, back: `A son receives his father’s Y chromosome (that is why he is male). His X comes from his mother.` },
  { id: 'gen-c33', topic: 'genetics', outcome: 'gen-o8c', front: `Haemophilia`, back: `An X-linked recessive disorder in which blood fails to clot properly (missing clotting factor, usually VIII). Queen Victoria was a carrier.` },
  { id: 'gen-c34', topic: 'genetics', outcome: 'gen-o8d', front: `Pedigree: two unaffected parents with an affected child`, back: `The trait is recessive. Both parents must be heterozygous carriers.` },
  { id: 'gen-c35', topic: 'genetics', outcome: 'gen-o8d', front: `Pedigree: two affected parents with an unaffected child`, back: `The trait is dominant. Both parents must be heterozygous.` },
  { id: 'gen-c36', topic: 'genetics', outcome: 'gen-o8d', front: `Pedigree: affected father has an affected son`, back: `Rules out X-linked inheritance (a son gets his father’s Y). The trait is autosomal (or Y-linked).` },
  { id: 'gen-c37', topic: 'genetics', outcome: 'gen-o8d', front: `Signs of X-linked recessive in a pedigree`, back: `Mostly males affected; skips generations; passed from affected men through carrier daughters to grandsons; an affected mother has all sons affected; an affected daughter has an affected father.` },
  { id: 'gen-c38', topic: 'genetics', outcome: 'gen-o8d', front: `Signs of X-linked dominant in a pedigree`, back: `An affected father passes the trait to ALL his daughters and NONE of his sons.` },
  { id: 'gen-c39', topic: 'genetics', outcome: 'gen-o8d', front: `Pedigree symbols`, back: `Square = male, circle = female, shaded = affected, half-shaded/dot = carrier, horizontal line = mating, vertical line = offspring, Roman numerals = generations.` },
  { id: 'gen-c40', topic: 'genetics', outcome: 'gen-o9a', front: `Somatic cell nuclear transfer (SCNT)`, back: `Cloning method: the nucleus of a somatic cell is put into an enucleated egg, which is stimulated (electric pulse) to divide into an embryo and implanted into a surrogate. The clone matches the nucleus donor (e.g. Dolly, 1996).` },
  { id: 'gen-c41', topic: 'genetics', outcome: 'gen-o9a', front: `Reproductive vs therapeutic cloning`, back: `Reproductive: produces a whole new organism (Dolly). Therapeutic: an embryo is created only to harvest patient-matched embryonic stem cells, and no baby is produced.` },
  { id: 'gen-c42', topic: 'genetics', outcome: 'gen-o9a', front: `DNA profiling: what is compared?`, back: `Short tandem repeats (STRs): non-coding regions where the number of repeats varies between individuals. They are amplified by PCR and separated by gel electrophoresis.` },
  { id: 'gen-c43', topic: 'genetics', outcome: 'gen-o9a', front: `PCR (polymerase chain reaction)`, back: `A technique that makes millions of copies of a specific DNA section, so tiny samples (e.g. a hair root) can be profiled.` },
  { id: 'gen-c44', topic: 'genetics', outcome: 'gen-o9a', front: `Gel electrophoresis`, back: `Separates DNA fragments by size in a gel using electric current. DNA (negative) moves towards the positive electrode, and smaller fragments travel further.` },
  { id: 'gen-c45', topic: 'genetics', outcome: 'gen-o9a', front: `Gene therapy`, back: `Treating a genetic disorder by inserting a working copy of a gene (usually via a modified virus vector) or editing/silencing the faulty gene (e.g. CRISPR-Cas9). Treats the cause, not the symptoms.` },
  { id: 'gen-c46', topic: 'genetics', outcome: 'gen-o9a', front: `Somatic vs germline gene therapy`, back: `Somatic: body cells only, not inherited (allowed). Germline: eggs, sperm or embryos, so changes pass to future generations (banned in Australia; raises designer-baby and consent issues).` },
  { id: 'gen-c47', topic: 'genetics', outcome: 'gen-o9b', front: `Genetic screening`, back: `Testing DNA or chromosomes for disease-linked alleles, e.g. the newborn heel-prick test (PKU, CF), carrier screening, prenatal tests (NIPT, amniocentesis), BRCA1/2. Benefit: early treatment. Issue: discrimination and anxiety.` },
  { id: 'gen-c48', topic: 'genetics', outcome: 'gen-o9b', front: `Stem cell`, back: `An unspecialised cell that can divide repeatedly and differentiate into specialised cells. Embryonic = pluripotent; adult = multipotent; iPSC = reprogrammed adult cell.` },
  { id: 'gen-c49', topic: 'genetics', outcome: 'gen-o9b', front: `Main ethical issue with embryonic stem cells`, back: `Obtaining them destroys a human embryo (the debate over when life begins). iPSCs avoid this.` },
  { id: 'gen-c50', topic: 'genetics', outcome: 'gen-o9b', front: `Recombinant DNA (genetic modification) tools`, back: `A restriction enzyme cuts the gene and the plasmid; DNA ligase joins them; the plasmid (vector) carries the gene into a host cell, e.g. human insulin made by bacteria.` },
  { id: 'gen-c51', topic: 'genetics', outcome: 'gen-o9b', front: `Bt cotton`, back: `GM cotton containing a gene from the bacterium Bacillus thuringiensis that makes a protein toxic to caterpillar pests. Benefit: much less insecticide spraying. Risk: pests evolving resistance.` },
  { id: 'gen-c52', topic: 'genetics', outcome: 'gen-bg', front: `Nucleotide`, back: `The monomer of DNA: a phosphate group + a deoxyribose sugar + a nitrogenous base (A, T, G or C). A pairs with T and G pairs with C.` },
  { id: 'gen-c53', topic: 'genetics', outcome: 'gen-bg', front: `Photo 51: what did it show?`, back: `Franklin’s X-ray diffraction image of B-form (wet) DNA. The X pattern showed a helix; it repeats every 3.4 nm and is about 2 nm wide (two strands), with the phosphates on the outside.` },
  { id: 'gen-c54', topic: 'genetics', outcome: 'gen-bg', front: `Mitosis vs meiosis (products)`, back: `Mitosis: 2 genetically identical diploid cells (growth/repair). Meiosis: 4 genetically different haploid gametes (sexual reproduction), with two divisions.` }
);

SD.mcq.push(
  { id: 'gen-q1', topic: 'genetics', outcome: 'gen-o6', q: `Which feature of pea plants was LEAST important to the success of Mendel’s experiments?`,
    options: [`They have several traits with two clearly contrasting forms`, `They produce many offspring in a short generation time`, `Their pollination can be controlled by hand`, `Their chromosomes are large and easy to see under a microscope`], answer: 3,
    explain: `Mendel never looked at chromosomes. They were not linked to inheritance until about 1902. Contrasting traits, large numbers of offspring and controlled pollination were all essential to his method.` },
  { id: 'gen-q2', topic: 'genetics', outcome: 'gen-o6', q: `Mendel crossed pure-breeding purple-flowered plants with pure-breeding white-flowered plants. All the F1 had purple flowers. This result illustrates the law of:`,
    options: [`dominance`, `segregation`, `independent assortment`, `incomplete dominance`], answer: 0,
    explain: `The F1 are all heterozygous (Pp), but only purple is expressed, so the purple allele masks the white allele (law of dominance). Segregation explains why white reappears in the F2, not the uniform F1.` },
  { id: 'gen-q3', topic: 'genetics', outcome: 'gen-o6', q: `In Mendel’s F2 generation, the recessive short trait reappeared in about a quarter of the plants. Which law best explains this?`,
    options: [`Law of dominance`, `Law of segregation`, `Law of independent assortment`, `Law of superposition`], answer: 1,
    explain: `Each F1 plant (Tt) produces two types of gamete (T or t) because the alleles separate (segregate). Two t gametes combine 1/4 of the time, giving tt short plants. Superposition is about rock layers.` },
  { id: 'gen-q4', topic: 'genetics', outcome: 'gen-o6', q: `A cross between two tall pea plants produced 787 tall and 277 short offspring. The most likely genotypes of the parents are:`,
    options: [`TT × TT`, `TT × Tt`, `Tt × Tt`, `Tt × tt`], answer: 2,
    explain: `787 : 277 ≈ 2.84 : 1, which is close to 3 : 1, the ratio from two heterozygotes. TT × Tt would give no short plants, and Tt × tt gives 1 : 1 (and one parent would be short).` },
  { id: 'gen-q5', topic: 'genetics', outcome: 'gen-o6', q: `How did Mendel make sure that a pea flower was fertilised only by pollen from the plant he chose?`,
    options: [`He grew each plant in a separate greenhouse`, `He removed the anthers before they matured and transferred chosen pollen with a brush`, `He used only plants that could not self-pollinate`, `He treated the flowers with chemicals to kill unwanted pollen`], answer: 1,
    explain: `Removing the anthers (stamens) stops self-pollination. Mendel then dusted pollen from the chosen parent onto the stigma, giving a controlled cross. Peas naturally self-pollinate, so option C is wrong.` },
  { id: 'gen-q6', topic: 'genetics', outcome: 'gen-o6', q: `Mendel crossed plants that were heterozygous for both seed shape and seed colour (RrYy × RrYy) and obtained a 9 : 3 : 3 : 1 ratio. This supports the law of:`,
    options: [`segregation only`, `dominance only`, `co-dominance`, `independent assortment`], answer: 3,
    explain: `The 9 : 3 : 3 : 1 ratio arises only if the alleles for shape and the alleles for colour are sorted into gametes independently, so all four combinations (RY, Ry, rY, ry) are equally likely.` },
  { id: 'gen-q7', topic: 'genetics', outcome: 'gen-o7', q: `Which statement correctly describes alleles?`,
    options: [`Alternative forms of the same gene found at the same locus`, `Different genes found on the same chromosome`, `The two strands of a DNA double helix`, `Proteins produced by a gene`], answer: 0,
    explain: `Alleles are versions of one gene (e.g. T and t for height) located at the same position (locus) on homologous chromosomes. Different genes on the same chromosome are not alleles.` },
  { id: 'gen-q8', topic: 'genetics', outcome: 'gen-o7', q: `Identical twins have the same genotype, but one twin is 4 cm taller than the other. The best explanation is:`,
    options: [`One twin has a mutation in a height gene`, `One twin inherited a dominant height allele`, `Height is a sex-linked trait`, `The phenotype is affected by both genotype and environment, e.g. nutrition`], answer: 3,
    explain: `Phenotype = genotype + environment. Identical twins have the same alleles, so differences in diet, illness or exercise explain the different heights. They cannot have inherited different alleles.` },
  { id: 'gen-q9', topic: 'genetics', outcome: 'gen-o7', q: `In guinea pigs, black fur (B) is dominant to white fur (b). Which statement is correct?`,
    options: [`A black guinea pig must be homozygous`, `A white guinea pig can be a carrier of the black allele`, `A Bb guinea pig has grey fur`, `A white guinea pig must be bb`], answer: 3,
    explain: `The recessive phenotype appears only when there are two recessive alleles, so every white animal is bb. A black animal could be BB or Bb. Grey would mean incomplete dominance, which is not the case here.` },
  { id: 'gen-q10', topic: 'genetics', outcome: 'gen-o7', q: `Which genotype is heterozygous?`,
    options: [`AA`, `aa`, `Aa`, `XᵃY`], answer: 2,
    explain: `Heterozygous means two different alleles (Aa). AA and aa are homozygous. A male XᵃY has only one allele for an X-linked gene, so he is neither homozygous nor heterozygous (he is hemizygous).` },
  { id: 'gen-q11', topic: 'genetics', outcome: 'gen-o7b', q: `A normal human body cell contains:`,
    options: [`22 autosomes and 1 sex chromosome`, `23 pairs of autosomes`, `22 pairs of autosomes and 1 pair of sex chromosomes`, `46 pairs of chromosomes`], answer: 2,
    explain: `46 chromosomes = 23 pairs: 22 pairs of autosomes plus XX or XY. Gametes (haploid) have 22 autosomes + 1 sex chromosome.` },
  { id: 'gen-q12', topic: 'genetics', outcome: 'gen-o7b', q: `Down syndrome is caused by an extra copy of chromosome 21. This is an example of:`,
    options: [`a chromosomal mutation (change in chromosome number)`, `a gene mutation caused by a base substitution`, `a sex-linked recessive trait`, `incomplete dominance`], answer: 0,
    explain: `Trisomy 21 (47 chromosomes) is a change in chromosome number, usually caused by non-disjunction in meiosis. It is visible in a karyotype. A gene mutation changes bases within a single gene.` },
  { id: 'gen-q13', topic: 'genetics', outcome: 'gen-o7b', q: `In sickle-cell anaemia, a single base in the haemoglobin gene is replaced by a different base. This is best described as:`,
    options: [`a chromosomal deletion`, `a translocation`, `non-disjunction`, `a gene (point) mutation, specifically a substitution`], answer: 3,
    explain: `Swapping one base for another in one gene is a substitution (point) mutation. It changes one amino acid in haemoglobin. Deletion, translocation and non-disjunction involve chromosome segments or whole chromosomes.` },
  { id: 'gen-q14', topic: 'genetics', outcome: 'gen-o7b', q: `A man develops a skin cancer caused by UV damage to the DNA of his skin cells. Will his children inherit this mutation?`,
    options: [`Yes, because all mutations are inherited`, `Yes, but only his sons`, `No, because only mutations in gametes (germline cells) are passed to offspring`, `No, because UV mutations are always recessive`], answer: 2,
    explain: `Somatic mutations stay in the body cells of that individual. Only mutations present in sperm or eggs (or the cells that make them) can be inherited.` },
  { id: 'gen-q15', topic: 'genetics', outcome: 'gen-o8a', q: `Two heterozygous tall plants (Tt) are crossed. What percentage of the offspring is expected to be short?`,
    options: [`0%`, `25%`, `50%`, `75%`], answer: 1,
    explain: `Tt × Tt gives TT, Tt, Tt, tt. Only tt (1 of 4 boxes) is short, so 25%. 75% is the percentage that are TALL, a common slip.` },
  { id: 'gen-q16', topic: 'genetics', outcome: 'gen-o8a', q: `In Labradors, black (B) is dominant to yellow (b). A heterozygous black dog is crossed with a yellow dog. The expected genotypic ratio of the puppies is:`,
    options: [`1 BB : 2 Bb : 1 bb`, `all Bb`, `1 Bb : 1 bb`, `3 Bb : 1 bb`], answer: 2,
    explain: `Bb × bb: the black parent gives B or b and the yellow parent only gives b, so the puppies are Bb or bb in equal numbers (1 : 1). Phenotypes are 1 black : 1 yellow.` },
  { id: 'gen-q17', topic: 'genetics', outcome: 'gen-o8a', q: `A breeder wants to know whether a long-winged fruit fly is VV or Vv (long wings dominant). The fly should be crossed with:`,
    options: [`a VV fly`, `a Vv fly`, `a vv fly`, `another long-winged fly of unknown genotype`], answer: 2,
    explain: `This is a test cross. A homozygous recessive (vv) partner contributes only v, so any recessive allele from the unknown fly shows up as short-winged offspring.` },
  { id: 'gen-q18', topic: 'genetics', outcome: 'gen-o8a', q: `A purple-flowered pea plant was test-crossed with a white-flowered plant (pp). Of 60 offspring, 31 were purple and 29 were white. The purple parent was:`,
    options: [`PP, because most offspring were purple`, `impossible to determine from a test cross`, `pp, because white offspring appeared`, `Pp, because about half the offspring were white`], answer: 3,
    explain: `About a 1 : 1 ratio from a test cross means the unknown parent passed on p to half its gametes, so it is Pp. A PP parent would give 100% purple offspring.` },
  { id: 'gen-q19', topic: 'genetics', outcome: 'gen-o8a', q: `Two carriers of an autosomal recessive condition (Aa × Aa) have an unaffected child. What is the probability that this child is a carrier?`,
    options: [`1/4`, `1/2`, `2/3`, `3/4`], answer: 2,
    explain: `The child is unaffected, so the aa box is excluded. That leaves AA, Aa, Aa: 2 of the 3 remaining boxes are carriers, giving 2/3. 1/2 is the chance for ANY child of being a carrier before you know the phenotype.` },
  { id: 'gen-q20', topic: 'genetics', outcome: 'gen-o8a', q: `A couple who are both carriers of cystic fibrosis already have three children with the condition. What is the chance that their next child will have cystic fibrosis?`,
    options: [`0%, because they have had their share of affected children`, `25%`, `50%`, `100%`], answer: 1,
    explain: `Each fertilisation is an independent event, so the probability for every child of Cc × Cc parents is 1/4 (25%), regardless of previous children.` },
  { id: 'gen-q21', topic: 'genetics', outcome: 'gen-o8a', q: `What is the probability that two heterozygous parents (Aa × Aa) have TWO children who both show the recessive phenotype?`,
    options: [`1/16`, `1/8`, `1/4`, `1/2`], answer: 0,
    explain: `The chance for each child is 1/4, and the events are independent, so multiply: 1/4 × 1/4 = 1/16.` },
  { id: 'gen-q22', topic: 'genetics', outcome: 'gen-o8b', q: `In snapdragons, red (CᴿCᴿ) × white (CᵂCᵂ) gives pink offspring. If two pink plants are crossed, the expected phenotypes are:`,
    options: [`3 red : 1 white`, `all pink`, `1 pink : 1 white`, `1 red : 2 pink : 1 white`], answer: 3,
    explain: `This is incomplete dominance. CᴿCᵂ × CᴿCᵂ → 1 CᴿCᴿ : 2 CᴿCᵂ : 1 CᵂCᵂ. Each genotype has its own phenotype, so the phenotypic ratio equals the genotypic ratio, 1 : 2 : 1.` },
  { id: 'gen-q23', topic: 'genetics', outcome: 'gen-o8b', q: `In cattle, red (CᴿCᴿ) and white (CᵂCᵂ) are co-dominant, and CᴿCᵂ cattle are roan. A roan bull is mated with a white cow. What proportion of calves are expected to be roan?`,
    options: [`0%`, `25%`, `50%`, `100%`], answer: 2,
    explain: `CᴿCᵂ × CᵂCᵂ: the bull gives Cᴿ or Cᵂ and the cow gives only Cᵂ, so the calves are 1/2 CᴿCᵂ (roan) and 1/2 CᵂCᵂ (white).` },
  { id: 'gen-q24', topic: 'genetics', outcome: 'gen-o8b', q: `Which observation shows co-dominance rather than incomplete dominance?`,
    options: [`Red and white snapdragons produce pink offspring`, `Roan cattle have a mixture of separate red hairs and white hairs`, `Tall and short pea plants produce tall offspring`, `Heterozygous plants have medium-length stems`], answer: 1,
    explain: `In co-dominance both alleles are expressed separately (each hair is fully red or fully white). Pink flowers and medium stems are intermediate blends, which is incomplete dominance. Tall offspring show complete dominance.` },
  { id: 'gen-q25', topic: 'genetics', outcome: 'gen-o8b', q: `A woman with blood group AB has children with a man with blood group O. Which blood groups could their children have?`,
    options: [`A or B only`, `AB or O only`, `A, B, AB or O`, `O only`], answer: 0,
    explain: `IᴬIᴮ × ii: the mother gives Iᴬ or Iᴮ and the father gives i, so the children are Iᴬi (A) or Iᴮi (B), 50 : 50. They can never be AB or O.` },
  { id: 'gen-q26', topic: 'genetics', outcome: 'gen-o8b', q: `A mother with blood group A and a father with blood group B have a child with blood group O. What are the parents’ genotypes?`,
    options: [`IᴬIᴬ and IᴮIᴮ`, `Iᴬi and IᴮIᴮ`, `IᴬIᴮ and ii`, `Iᴬi and Iᴮi`], answer: 3,
    explain: `A group O child is ii, so it must have received an i allele from EACH parent. The parents must therefore be Iᴬi and Iᴮi. With these genotypes, all four blood groups are possible in their children.` },
  { id: 'gen-q27', topic: 'genetics', outcome: 'gen-o8b', q: `How many different genotypes and phenotypes are possible in the ABO blood group system?`,
    options: [`3 genotypes, 3 phenotypes`, `4 genotypes, 4 phenotypes`, `6 genotypes, 4 phenotypes`, `9 genotypes, 6 phenotypes`], answer: 2,
    explain: `Genotypes: IᴬIᴬ, Iᴬi, IᴮIᴮ, Iᴮi, IᴬIᴮ, ii = 6. Phenotypes: A, B, AB, O = 4.` },
  { id: 'gen-q28', topic: 'genetics', outcome: 'gen-o8b', q: `A man claims to be the father of a child with blood group AB. The mother is group A. Which blood group would EXCLUDE him as the father?`,
    options: [`B`, `AB`, `O`, `None, because blood groups can never exclude a father`], answer: 2,
    explain: `The child (IᴬIᴮ) must have received Iᴮ from the father, because the group A mother has no Iᴮ. A group O man (ii) has no Iᴮ, so he cannot be the father. Men with group B or AB could be the father.` },
  { id: 'gen-q29', topic: 'genetics', outcome: 'gen-o8c', q: `Colour blindness is an example of sex-linked inheritance. A non-colour-blind woman carrying an allele for colour blindness marries a man who is colour blind. What possible offspring will they have?`,
    options: [`All of the daughters but none of the sons will be colour blind`, `Half will be colour blind, regardless of sex`, `All will be colour blind, regardless of sex`, `Half of the daughters and all of the sons will be colour blind`], answer: 1, source: '2022 Yearly Q13',
    explain: `XᴮXᵇ × XᵇY → daughters XᴮXᵇ (carrier) and XᵇXᵇ (colour blind); sons XᴮY (normal) and XᵇY (colour blind). So half the daughters AND half the sons are affected. Option D would only be true if the mother were colour blind (XᵇXᵇ). Sons get their X from their mother, not their father.` },
  { id: 'gen-q30', topic: 'genetics', outcome: 'gen-o8c', q: `A woman who is a carrier for haemophilia (XᴴXʰ) has children with an unaffected man (XᴴY). What is the probability that a SON of theirs will have haemophilia?`,
    options: [`0%`, `25%`, `50%`, `100%`], answer: 2,
    explain: `Sons receive Y from the father and one of the mother’s X chromosomes (Xᴴ or Xʰ), so 1/2 of the sons are XʰY. 25% is the chance that ANY child is an affected son. Read the question carefully.` },
  { id: 'gen-q31', topic: 'genetics', outcome: 'gen-o8c', q: `A man with haemophilia (XʰY) and a woman who is homozygous normal (XᴴXᴴ) have children. Which prediction is correct?`,
    options: [`All sons will have haemophilia`, `All daughters will be carriers and all sons will be unaffected`, `Half of the daughters will have haemophilia`, `All children will be carriers`], answer: 1,
    explain: `Every daughter receives the father’s Xʰ and the mother’s Xᴴ, so all daughters are XᴴXʰ carriers. Every son receives the father’s Y and the mother’s Xᴴ, so all sons are unaffected. Males cannot be carriers, which rules out D.` },
  { id: 'gen-q32', topic: 'genetics', outcome: 'gen-o8c', q: `Why are X-linked recessive disorders such as red–green colour blindness much more common in males than in females?`,
    options: [`Males have two X chromosomes`, `The Y chromosome carries a dominant allele that causes the disorder`, `Recessive alleles mutate more often in males`, `Males have only one X chromosome, so a single recessive allele is expressed`], answer: 3,
    explain: `The Y chromosome has no matching allele to mask a recessive allele on the X, so one copy is enough in males. Females need two copies (one from each parent), which is far less likely.` },
  { id: 'gen-q33', topic: 'genetics', outcome: 'gen-o8c', q: `A girl is red–green colour blind (X-linked recessive). What can be concluded about her parents?`,
    options: [`Her father must be colour blind`, `Her mother must be colour blind`, `Both parents must be colour blind`, `Neither parent can be colour blind`], answer: 0,
    explain: `She is XᵇXᵇ, so she received an Xᵇ from each parent. Her father has only one X, so he must be XᵇY (colour blind). Her mother could be a carrier (XᴮXᵇ) or colour blind.` },
  { id: 'gen-q34', topic: 'genetics', outcome: 'gen-o8c', q: `Which genotype represents a female carrier of haemophilia?`,
    options: [`XᴴXʰ`, `XʰY`, `Hh`, `XᴴY`], answer: 0,
    explain: `A carrier is heterozygous for the X-linked allele: XᴴXʰ. XʰY is an affected male, Hh ignores the sex chromosomes (wrong notation for sex-linked traits), and XᴴY is an unaffected male.` },
  { id: 'gen-q35', topic: 'genetics', outcome: 'gen-o8c', q: `Morgan crossed red-eyed F1 fruit flies (XᴿXʳ female × XᴿY male). Which result did he observe in the F2?`,
    options: [`White eyes appeared equally in males and females`, `All females had red eyes and half of the males had white eyes`, `All males had white eyes`, `No white-eyed flies appeared`], answer: 1,
    explain: `Daughters receive the father’s Xᴿ, so all are red-eyed. Sons receive Xᴿ or Xʳ from the mother, so half are white-eyed. This was the evidence that the eye-colour gene is on the X chromosome.` },
  { id: 'gen-q36', topic: 'genetics', outcome: 'gen-o8d', q: `In a pedigree, two unaffected parents have an affected daughter. What does this show?`,
    options: [`The trait is dominant and X-linked`, `The trait is dominant and autosomal`, `The trait is recessive and X-linked`, `The trait is recessive and autosomal`], answer: 3,
    explain: `Unaffected parents with an affected child means the trait is recessive. If it were X-linked recessive, an affected daughter (XᵃXᵃ) would need an affected father, but her father is unaffected. So it must be autosomal recessive.` },
  { id: 'gen-q37', topic: 'genetics', outcome: 'gen-o8d', q: `In a pedigree, an affected father has an affected son, and the mother is unaffected. Which mode of inheritance is ruled out?`,
    options: [`Autosomal dominant`, `Autosomal recessive`, `X-linked recessive`, `None can be ruled out`], answer: 2,
    explain: `A son inherits his father’s Y, not his X, so a father cannot pass an X-linked allele to his son. The son’s condition must come from an autosomal (or Y-linked) gene.` },
  { id: 'gen-q38', topic: 'genetics', outcome: 'gen-o8d', q: `Two affected parents have one affected son and one unaffected daughter. The trait is:`,
    options: [`autosomal recessive`, `autosomal dominant`, `X-linked recessive`, `X-linked dominant`], answer: 1,
    explain: `Affected parents with an unaffected child means the trait is dominant (both parents are heterozygous). If it were X-linked dominant, the affected father would pass his X to every daughter and all daughters would be affected. The unaffected daughter rules this out, so it is autosomal dominant.` },
  { id: 'gen-q39', topic: 'genetics', outcome: 'gen-o8d', q: `A trait appears mainly in males, often skips a generation, and is passed from an affected grandfather to his grandsons through his unaffected daughters. The most likely mode of inheritance is:`,
    options: [`autosomal dominant`, `X-linked dominant`, `Y-linked`, `X-linked recessive`], answer: 3,
    explain: `This is the classic X-linked recessive pattern (e.g. haemophilia). The daughters are carriers (XᴬXᵃ) and pass the allele to half their sons. Y-linked traits would pass directly from father to son.` },
  { id: 'gen-q40', topic: 'genetics', outcome: 'gen-o8d', q: `In several families, every affected father has only affected daughters and only unaffected sons. This pattern suggests:`,
    options: [`X-linked dominant inheritance`, `autosomal recessive inheritance`, `Y-linked inheritance`, `X-linked recessive inheritance`], answer: 0,
    explain: `Fathers pass their X to all daughters and their Y to all sons. If one copy of an X allele causes the trait (dominant), all daughters are affected and no sons are. X-linked recessive would not affect daughters of an unaffected mother.` },
  { id: 'gen-q41', topic: 'genetics', outcome: 'gen-o8d', q: `In a pedigree for an autosomal recessive condition, an unaffected woman has an affected father. Her genotype must be:`,
    options: [`AA`, `Aa`, `aa`, `AA or Aa (cannot be determined)`], answer: 1,
    explain: `Her affected father is aa and must have passed an a allele to her. She is unaffected, so she must also carry A. She is therefore Aa (a carrier).` },
  { id: 'gen-q42', topic: 'genetics', outcome: 'gen-o8d', q: `Polydactyly is caused by a dominant autosomal allele (P). An affected man and an unaffected woman have three children, one of whom is unaffected. What is the man’s genotype, and what fraction of their children are expected to be affected?`,
    options: [`PP; 100%`, `Pp; 75%`, `Pp; 50%`, `pp; 0%`], answer: 2,
    explain: `The unaffected child is pp, so the father must carry p and is Pp. Pp × pp gives 1 Pp : 1 pp, so 50% are expected to be affected. (Based on 2022 Yearly Section B Q5.)` },
  { id: 'gen-q43', topic: 'genetics', outcome: 'gen-o8d', q: `Which is NOT a reason why pedigree analysis is used to study human inheritance rather than breeding experiments?`,
    options: [`Controlled breeding of humans is unethical`, `Humans have long generation times`, `Human families are usually small`, `Human genes do not follow Mendel’s laws`], answer: 3,
    explain: `Human genes DO follow Mendel’s laws. Pedigrees are used because experimental crosses would be unethical, generations take decades, and families are too small for reliable ratios.` },
  { id: 'gen-q44', topic: 'genetics', outcome: 'gen-o8d', q: `On a pedigree chart, a circle with half of it shaded usually represents:`,
    options: [`an affected male`, `an unaffected male`, `a carrier female`, `a deceased female`], answer: 2,
    explain: `Circles are females and squares are males. Fully shaded = affected, unshaded = unaffected, and half-shaded (or a dot) = heterozygous carrier.` },
  { id: 'gen-q45', topic: 'genetics', outcome: 'gen-o9a', q: `Dolly the sheep was cloned by transferring a nucleus from an udder cell of sheep X into an enucleated egg from sheep Y, and implanting the embryo into sheep Z. Dolly was genetically identical to:`,
    options: [`sheep X`, `sheep Y`, `sheep Z`, `a mixture of X and Y`], answer: 0,
    explain: `Nearly all of the DNA is in the nucleus, which came from sheep X. The egg donor’s nucleus was removed, and the surrogate only carried the pregnancy. (Strictly, mitochondrial DNA came from Y, but for the nuclear genes the answer is X.)` },
  { id: 'gen-q46', topic: 'genetics', outcome: 'gen-o9a', q: `DNA profiling compares which regions of DNA between individuals?`,
    options: [`Short tandem repeats (STRs) in non-coding DNA that vary in length between people`, `Genes coding for proteins that are identical in all humans`, `Mitochondrial genes for respiration`, `The genes on the Y chromosome only`], answer: 0,
    explain: `STRs are non-coding repeated sequences whose number of repeats varies greatly between people, so a set of them gives a near-unique profile. Coding genes are too similar between people to be useful.` },
  { id: 'gen-q47', topic: 'genetics', outcome: 'gen-o9a', q: `During gel electrophoresis of DNA fragments:`,
    options: [`larger fragments travel further towards the negative electrode`, `DNA moves towards the negative electrode because it is positively charged`, `all fragments travel the same distance`, `smaller fragments travel further towards the positive electrode`], answer: 3,
    explain: `DNA is negatively charged (phosphate groups), so it moves towards the positive electrode. Small fragments move more easily through the gel, so they travel furthest.` },
  { id: 'gen-q48', topic: 'genetics', outcome: 'gen-o9a', q: `A crime-scene DNA sample shows bands at positions 2, 5 and 8. Suspect P has bands at 2, 5, 7; suspect Q at 2, 5, 8; suspect R at 1, 5, 8; suspect S at 3, 6, 8. Which suspect’s DNA matches the sample?`,
    options: [`P`, `Q`, `R`, `S`], answer: 1,
    explain: `A match requires ALL bands to be identical. Only Q has 2, 5 and 8. The others share some bands, which is common between unrelated people for individual STRs, so partial matches are not evidence.` },
  { id: 'gen-q49', topic: 'genetics', outcome: 'gen-o9a', q: `Which is a genuine LIMITATION of DNA profiling in forensic science?`,
    options: [`It requires large amounts of blood`, `DNA cannot be extracted from hair`, `Every person shares the same STR pattern`, `It cannot distinguish between identical twins, and samples can be contaminated`], answer: 3,
    explain: `Identical twins have identical DNA, and contamination or degraded samples can give misleading results. PCR means only tiny samples are needed, and hair roots do contain DNA.` },
  { id: 'gen-q50', topic: 'genetics', outcome: 'gen-o9a', q: `What is the key difference between somatic and germline gene therapy?`,
    options: [`Changes from germline therapy are passed on to future generations; somatic changes are not`, `Somatic therapy uses viruses; germline therapy does not`, `Somatic therapy treats only bacteria`, `Germline therapy is the only type used on humans today`], answer: 0,
    explain: `Germline therapy alters eggs, sperm or embryos, so the change is heritable. This raises consent and “designer baby” concerns, and it is banned in Australia. Somatic therapy changes only the patient’s body cells.` },
  { id: 'gen-q51', topic: 'genetics', outcome: 'gen-o9a', q: `In gene therapy, modified viruses are often used because they:`,
    options: [`naturally insert genetic material into host cells, so they can deliver a working gene`, `destroy the faulty gene`, `increase the patient’s immune response`, `make the cells divide faster`], answer: 0,
    explain: `Viruses are natural vectors that deliver DNA into cells. Scientists remove the disease-causing genes and add the working gene. A risk is an immune reaction against the virus.` },
  { id: 'gen-q52', topic: 'genetics', outcome: 'gen-o9b', q: `Embryonic stem cells differ from adult stem cells because embryonic stem cells:`,
    options: [`are pluripotent and can form almost any cell type`, `are already specialised`, `cannot divide`, `are found only in bone marrow`], answer: 0,
    explain: `Embryonic stem cells (from a blastocyst) are pluripotent. Adult stem cells, e.g. in bone marrow, are multipotent and form only a limited range of cell types.` },
  { id: 'gen-q53', topic: 'genetics', outcome: 'gen-o9b', q: `What is the main advantage of induced pluripotent stem cells (iPSCs) over embryonic stem cells?`,
    options: [`They are cheaper to buy`, `No embryo is destroyed, and they can be made from the patient’s own cells, reducing rejection`, `They can only become blood cells`, `They never form tumours`], answer: 1,
    explain: `iPSCs are reprogrammed adult cells, which avoids the ethical issue of embryo destruction and gives a genetic match to the patient. They can still carry a tumour risk, so D is wrong.` },
  { id: 'gen-q54', topic: 'genetics', outcome: 'gen-o9b', q: `Bt cotton contains a gene from the bacterium Bacillus thuringiensis. This is an example of:`,
    options: [`artificial selection`, `reproductive cloning`, `gene therapy`, `genetic modification producing a transgenic organism`], answer: 3,
    explain: `Inserting a gene from another species (a bacterium) into a plant is genetic modification using recombinant DNA technology. Artificial selection only breeds from existing variation and does not transfer genes between species.` },
  { id: 'gen-q55', topic: 'genetics', outcome: 'gen-o9b', q: `In producing human insulin with bacteria, which enzyme joins the human insulin gene into the bacterial plasmid?`,
    options: [`Restriction enzyme`, `DNA ligase`, `Amylase`, `DNA polymerase`], answer: 1,
    explain: `Restriction enzymes CUT the gene and the plasmid (leaving matching sticky ends), and DNA ligase JOINS them to make recombinant DNA.` },
  { id: 'gen-q56', topic: 'genetics', outcome: 'gen-o9b', q: `Which ethical issue is most specific to genetic screening?`,
    options: [`Destruction of embryos for stem cells`, `Animal welfare in cloning`, `Gene flow from crops to weeds`, `Insurers or employers discriminating against people with risk alleles`], answer: 3,
    explain: `Screening reveals a person’s genetic risks, which raises privacy and discrimination concerns, plus anxiety about untreatable conditions. The other options belong to stem cells, GM crops and cloning.` },
  { id: 'gen-q57', topic: 'genetics', outcome: 'gen-o9b', q: `The newborn heel-prick test is an example of genetic screening. Its main benefit is that it:`,
    options: [`allows early diagnosis and treatment of conditions such as PKU before damage occurs`, `cures genetic disorders`, `changes the baby’s genes`, `determines the baby’s blood group for transfusions`], answer: 0,
    explain: `Screening detects disorders, it does not cure them. Early detection of PKU means a special diet can prevent brain damage. Changing genes would be gene therapy.` },
  { id: 'gen-q58', topic: 'genetics', outcome: 'gen-bg', q: `Which correctly compares the products of meiosis with those of mitosis in humans?`,
    options: [`Meiosis: 2 diploid identical cells; mitosis: 4 haploid different cells`, `Meiosis: 4 haploid genetically different cells; mitosis: 2 diploid genetically identical cells`, `Both produce 4 haploid cells`, `Meiosis: 4 diploid cells; mitosis: 2 haploid cells`], answer: 1,
    explain: `Meiosis has two divisions and halves the chromosome number (n = 23), making varied gametes. Mitosis has one division and keeps the chromosome number (2n = 46), making identical body cells.` },
  { id: 'gen-q59', topic: 'genetics', outcome: 'gen-bg', q: `What is the purpose of the spindle fibres during mitosis?`,
    options: [`To provide support for the chromatids`, `To duplicate the chromatids`, `To pull the chromatids apart`, `To attach the sister chromatids together`], answer: 2, source: '2024 Yearly Q18',
    explain: `Spindle fibres attach at the centromeres and pull the sister chromatids to opposite poles in anaphase. DNA is duplicated in interphase, and the chromatids are held together by the centromere, not by the spindle.` },
  { id: 'gen-q60', topic: 'genetics', outcome: 'gen-bg', q: `A DNA sample contains 30% adenine. What percentage of the sample is guanine?`,
    options: [`20%`, `30%`, `40%`, `70%`], answer: 0,
    explain: `Chargaff’s rules: A = T = 30%, so A + T = 60%. That leaves 40% for G + C, so G = 20%.` },
  { id: 'gen-q61', topic: 'genetics', outcome: 'gen-bg', q: `Which statement about Rosalind Franklin’s Photo 51 is correct?`,
    options: [`It was an X-ray diffraction image of B-form DNA whose X-shaped pattern indicated a helix`, `It was taken by Watson and Crick using chromatography`, `It showed DNA was a single straight strand`, `It was an electron micrograph of A-form (wet) DNA`], answer: 0,
    explain: `Franklin (with Gosling) used X-ray crystallography/diffraction on hydrated B-form DNA. The X pattern indicated a helical structure, about 2 nm wide and repeating every 3.4 nm.` }
);

SD.saq.push(
  { id: 'gen-s1', topic: 'genetics', outcome: 'gen-o6', marks: 4,
    q: `Explain Mendel’s work in genetics using pea plants. Refer to his crosses and the laws he proposed.`,
    criteria: [
      `Describes Mendel’s method: pure-breeding lines, controlled cross-pollination, large numbers, one trait at a time`,
      `Describes the results: F1 all show one trait (e.g. all tall); F2 shows a 3 : 1 ratio`,
      `Links the F1 result to the law of dominance`,
      `Links the 3 : 1 ratio to the law of segregation (two factors per trait separating into gametes), and/or the dihybrid 9 : 3 : 3 : 1 to independent assortment`
    ],
    model: `Mendel bred pure-breeding pea plants by self-pollinating them for several generations, then cross-pollinated contrasting plants by hand (removing the anthers), studying one trait at a time with large numbers of plants. Crossing pure tall (TT) with pure short (tt) plants gave an F1 that was all tall. This showed that tall is dominant and masks short (<b>law of dominance</b>). Self-pollinating the F1 (Tt) gave an F2 of 3 tall : 1 short, so the short factor had not been lost. He concluded that each plant has two factors (alleles) for each trait, which separate so that each gamete receives only one (<b>law of segregation</b>). Dihybrid crosses giving 9 : 3 : 3 : 1 showed that different traits are inherited independently (<b>law of independent assortment</b>).`,
    keywords: ['pure-breeding', 'f1', 'f2', '3:1', 'dominant', 'recessive', 'segregation', 'independent assortment'] },
  { id: 'gen-s2', topic: 'genetics', outcome: 'gen-o7', marks: 2,
    q: `Distinguish between genotype and phenotype, using an example.`,
    criteria: [
      `Genotype = the combination of alleles an organism has; phenotype = the observable characteristic (genotype + environment)`,
      `A correct example linking the two (e.g. Tt genotype → tall phenotype)`
    ],
    model: `The <b>genotype</b> is the combination of alleles an organism carries for a gene (e.g. Tt). The <b>phenotype</b> is the observable trait that results from the genotype interacting with the environment (e.g. a tall pea plant). Both TT and Tt give the same tall phenotype because T is dominant.`,
    keywords: ['genotype', 'phenotype', 'alleles', 'observable', 'environment'] },
  { id: 'gen-s3', topic: 'genetics', outcome: 'gen-o7b', marks: 3,
    q: `Compare genetic (gene) mutations and chromosomal mutations. Include an example of each.`,
    criteria: [
      `Similarity: both are permanent changes to DNA that can be inherited if they occur in gametes / can be caused by mutagens`,
      `Difference: a gene mutation changes the base sequence of a single gene (substitution, insertion, deletion), whereas a chromosomal mutation changes the structure or number of whole chromosomes, affecting many genes`,
      `Correct example of each (e.g. sickle-cell anaemia / cystic fibrosis; Down syndrome trisomy 21)`
    ],
    model: `Both are permanent changes in DNA. They can arise spontaneously or from mutagens such as UV and X-rays, and are inherited if they occur in gametes. A <b>gene mutation</b> is a small change to the base sequence within one gene, e.g. a substitution in the haemoglobin gene causing <b>sickle-cell anaemia</b>. A <b>chromosomal mutation</b> is a large-scale change in the structure or number of chromosomes that affects many genes, e.g. an extra chromosome 21 in <b>Down syndrome</b>. Chromosomal mutations can be seen in a karyotype, whereas gene mutations need DNA sequencing to detect.`,
    keywords: ['base sequence', 'single gene', 'substitution', 'chromosome number', 'structure', 'sickle-cell', 'down syndrome', 'gametes'] },
  { id: 'gen-s4', topic: 'genetics', outcome: 'gen-o8a', marks: 3,
    q: `In pea plants, tall (T) is dominant to short (t). Explain how a test cross could be used to determine the genotype of a tall pea plant. Use Punnett squares to support your answer.`,
    criteria: [
      `Cross the tall plant with a homozygous recessive short plant (tt)`,
      `Shows Punnett squares: TT × tt → all Tt (tall); Tt × tt → 1 Tt : 1 tt`,
      `Interprets: all tall offspring → TT; about half short (any short offspring) → Tt`
    ],
    model: `Cross the tall plant with a short, homozygous recessive plant (tt), which can only pass on t.<br><table class="t"><tr><th>TT × tt</th><th>T</th><th>T</th></tr><tr><th>t</th><td>Tt</td><td>Tt</td></tr><tr><th>t</th><td>Tt</td><td>Tt</td></tr></table><table class="t"><tr><th>Tt × tt</th><th>T</th><th>t</th></tr><tr><th>t</th><td>Tt</td><td>tt</td></tr><tr><th>t</th><td>Tt</td><td>tt</td></tr></table>If all offspring are tall, the plant is probably <b>TT</b>. If about half are short (1 : 1), the plant is <b>Tt</b>. Even one short offspring proves it is Tt, because that offspring must have received t from it. A large number of offspring makes the conclusion reliable.`,
    keywords: ['test cross', 'homozygous recessive', 'tt', 'punnett', 'heterozygous', '1:1'] },
  { id: 'gen-s5', topic: 'genetics', outcome: 'gen-o8b', marks: 3,
    q: `In shorthorn cattle, the alleles for red coat (Cᴿ) and white coat (Cᵂ) are co-dominant; heterozygous cattle are roan. Two roan cattle are mated. Using a Punnett square, determine the expected genotypic and phenotypic ratios of the calves, and explain why the roan phenotype is an example of co-dominance.`,
    criteria: [
      `Correct Punnett square for CᴿCᵂ × CᴿCᵂ`,
      `Genotypes 1 CᴿCᴿ : 2 CᴿCᵂ : 1 CᵂCᵂ and phenotypes 1 red : 2 roan : 1 white`,
      `Explains co-dominance: both alleles fully expressed, giving a mixture of separate red and white hairs (not a blend)`
    ],
    model: `<table class="t"><tr><th>CᴿCᵂ × CᴿCᵂ</th><th>Cᴿ</th><th>Cᵂ</th></tr><tr><th>Cᴿ</th><td>CᴿCᴿ red</td><td>CᴿCᵂ roan</td></tr><tr><th>Cᵂ</th><td>CᴿCᵂ roan</td><td>CᵂCᵂ white</td></tr></table>Genotypic ratio 1 CᴿCᴿ : 2 CᴿCᵂ : 1 CᵂCᵂ. Phenotypic ratio 1 red : 2 roan : 1 white. Roan is co-dominance because <b>both alleles are fully expressed</b> in the heterozygote: each hair is either completely red or completely white, giving a mixed coat. With incomplete dominance, the hairs would instead be an intermediate (pinkish) colour.`,
    keywords: ['co-dominance', 'roan', 'punnett', '1:2:1', 'both alleles', 'expressed', 'heterozygous'] },
  { id: 'gen-s6', topic: 'genetics', outcome: 'gen-o8b', marks: 4,
    q: `A woman with blood group A and a man with blood group B have a child with blood group O. Explain how this is possible, and use a Punnett square to determine the probability that their next child will have blood group AB.`,
    criteria: [
      `States that A and B are co-dominant and both are dominant over i (O)`,
      `Deduces the parents must be heterozygous Iᴬi and Iᴮi because the O child is ii and received i from each parent`,
      `Correct Punnett square Iᴬi × Iᴮi`,
      `Probability of AB = 1/4 (25%)`
    ],
    model: `In the ABO system, Iᴬ and Iᴮ are co-dominant and both are dominant over i. A group O child is <b>ii</b>, so it must have received an i allele from each parent. The mother must therefore be <b>Iᴬi</b> and the father <b>Iᴮi</b>.<br><table class="t"><tr><th>Iᴬi × Iᴮi</th><th>Iᴮ</th><th>i</th></tr><tr><th>Iᴬ</th><td>IᴬIᴮ (AB)</td><td>Iᴬi (A)</td></tr><tr><th>i</th><td>Iᴮi (B)</td><td>ii (O)</td></tr></table>The probability that the next child has group AB is <b>1/4 (25%)</b>. Each child is an independent event.`,
    keywords: ['co-dominant', 'heterozygous', 'ii', 'recessive', 'punnett', '25%', 'iai', 'ibi'] },
  { id: 'gen-s7', topic: 'genetics', outcome: 'gen-o8c', marks: 4,
    q: `Haemophilia is an X-linked recessive disorder. A woman who is a carrier has children with a man who does not have haemophilia. (a) Using a Punnett square, determine the probability that a son of theirs will have haemophilia. (b) Explain why haemophilia is far more common in males than in females.`,
    criteria: [
      `Correct genotypes with sex-chromosome notation: XᴴXʰ × XᴴY`,
      `Correct Punnett square and probability: 50% of sons affected (daughters: none affected, 50% carriers)`,
      `Males have only one X chromosome and the Y carries no allele for the gene`,
      `So one recessive allele is expressed in males, whereas females need two (one from each parent, including an affected father), which is much less likely`
    ],
    model: `(a) <table class="t"><tr><th>XᴴXʰ × XᴴY</th><th>Xᴴ</th><th>Y</th></tr><tr><th>Xᴴ</th><td>XᴴXᴴ normal female</td><td>XᴴY normal male</td></tr><tr><th>Xʰ</th><td>XᴴXʰ carrier female</td><td>XʰY haemophiliac male</td></tr></table>Probability that a son has haemophilia = <b>1/2 (50%)</b>. No daughters are affected, but half are carriers.<br>(b) Males have only <b>one X chromosome</b>, and the Y chromosome carries no allele for this gene to mask the recessive allele. One copy of Xʰ is therefore enough to cause haemophilia in a male. A female needs <b>two</b> copies, one from her mother and one from an affected father, which is much rarer.`,
    keywords: ['x-linked', 'carrier', 'xhy', 'one x chromosome', 'y chromosome', 'recessive', '50%'] },
  { id: 'gen-s8', topic: 'genetics', outcome: 'gen-o8d', marks: 4,
    q: `Outline how a pedigree chart can be used to determine (a) whether a trait is dominant or recessive, and (b) whether it is autosomal or X-linked.`,
    criteria: [
      `Recessive: two unaffected parents have an affected child`,
      `Dominant: two affected parents have an unaffected child (trait often appears in every generation)`,
      `X-linked recessive signs: mostly males affected, affected mothers have all affected sons, no father-to-son transmission`,
      `Autosomal: roughly equal in both sexes; father-to-son transmission, or an affected daughter with an unaffected father (recessive) / an affected father with an unaffected daughter (dominant), rules out X-linkage`
    ],
    model: `(a) If two unaffected parents have an affected child, the trait must be <b>recessive</b>, because both parents carry a hidden allele. If two affected parents have an unaffected child, the trait must be <b>dominant</b>, because both parents are heterozygous. Dominant traits also tend to appear in every generation.<br>(b) An <b>X-linked recessive</b> trait affects mostly males, often skips generations through carrier females, and an affected mother has all affected sons. A father never passes it to his son, because he gives his son a Y. An <b>autosomal</b> trait affects both sexes about equally. <b>Father-to-son transmission</b> rules out X-linkage. For a recessive trait, an affected daughter with an unaffected father proves it is autosomal. For a dominant trait, an affected father with an unaffected daughter proves it is autosomal.`,
    keywords: ['unaffected parents', 'recessive', 'dominant', 'males', 'father-to-son', 'autosomal', 'x-linked', 'carrier'] },
  { id: 'gen-s9', topic: 'genetics', outcome: 'gen-o8d', marks: 4,
    q: `A type of polydactyly is caused by a dominant allele (P) and is not sex-linked. In a pedigree, Beth has polydactyly and her husband does not. They have three children: two with polydactyly and one without. (a) Is it possible to tell whether Beth is homozygous or heterozygous? Justify your answer. (b) Use a Punnett square to determine the probability that their next child will have polydactyly.`,
    criteria: [
      `(a) Identifies Beth as heterozygous (Pp)`,
      `(a) Justifies: the unaffected child is pp and must have received a p from Beth (if PP, all children would be affected)`,
      `(b) Correct Punnett square Pp × pp`,
      `(b) States 50% (1/2) probability`
    ],
    model: `(a) Yes, Beth must be <b>heterozygous (Pp)</b>. Polydactyly is dominant, so her unaffected child must be pp, having received one p allele from each parent. Beth must therefore carry p. If she were PP, every child would inherit P and have polydactyly.<br>(b) <table class="t"><tr><th>Pp × pp</th><th>P</th><th>p</th></tr><tr><th>p</th><td>Pp</td><td>pp</td></tr><tr><th>p</th><td>Pp</td><td>pp</td></tr></table>The probability that the next child has polydactyly is <b>1/2 (50%)</b>.`,
    keywords: ['heterozygous', 'pp', 'dominant', 'unaffected child', 'punnett', '50%'], source: '2022 Yearly Section B Q5 (adapted)' },
  { id: 'gen-s10', topic: 'genetics', outcome: 'gen-o9b', marks: 5,
    q: `“Biotechnology holds transformative potential, but it is crucial that we address ethical concerns proactively.” (George Church). Evaluate the use of ONE of the following technologies and its impact on society: cloning, DNA profiling, gene therapy, genetic screening, stem cells, genetic modification.`,
    criteria: [
      `Names and outlines the technology (what it is / how it works)`,
      `Gives specific benefits/applications with examples`,
      `Identifies scientific limitations or risks`,
      `Identifies ethical/social issues (e.g. privacy, discrimination, equity, consent)`,
      `Makes a clear, justified overall judgement about its impact on society`
    ],
    model: `<b>DNA profiling</b> identifies individuals from their unique DNA. A sample such as blood, saliva or hair is collected, the DNA is extracted, short tandem repeat (STR) regions are copied by PCR, and the fragments are separated by size using gel electrophoresis to give a profile. Its benefits include matching crime-scene DNA to suspects, which convicts criminals and has freed wrongly convicted people. It is also used for paternity testing and identifying disaster victims, and PCR means it works on tiny samples. Its limitations are that samples can be contaminated or degraded, mixed samples are hard to interpret, lab or interpretation errors can occur, and identical twins cannot be told apart. A match also shows only that a person’s DNA was present, not that they committed a crime. Ethically, storing profiles in databases raises concerns about <b>privacy</b>, consent and possible <b>discrimination</b>, especially when the DNA of innocent people is retained. Overall, DNA profiling has had a strongly positive impact on society through more accurate justice, provided that strict laboratory standards and laws protecting genetic privacy are enforced.`,
    keywords: ['benefit', 'limitation', 'ethical', 'privacy', 'discrimination', 'pcr', 'judgement', 'society'], source: '2024 Yearly Q34' },
  { id: 'gen-s11', topic: 'genetics', outcome: 'gen-o9b', marks: 4,
    q: `Describe ONE genetic technology and discuss ONE argument for and ONE argument against its use.`,
    criteria: [
      `Names one identified biotechnology`,
      `Outlines how the technology works`,
      `A valid, specific point in support (with example)`,
      `A valid, specific point in opposition`
    ],
    model: `<b>Genetic modification</b> (recombinant DNA technology) inserts a gene from one organism into another. The gene is cut out with a restriction enzyme, joined into a plasmid vector with DNA ligase, and inserted into host cells, which then express it. <b>For:</b> Bt cotton carries a gene from the bacterium <i>Bacillus thuringiensis</i> that produces a protein toxic to caterpillar pests, which has greatly reduced insecticide spraying in Australian cotton farming and protects farm workers and waterways. <b>Against:</b> widespread planting creates a selection pressure for pests to evolve resistance to the Bt toxin, and patented GM seed must be bought each season, making farmers dependent on large companies. The benefits are significant, but resistance must be managed (e.g. with refuge crops).`,
    keywords: ['recombinant dna', 'restriction enzyme', 'plasmid', 'bt cotton', 'resistance', 'patent', 'for', 'against'], source: '2022 Yearly Section B Q4 (style)' },
  { id: 'gen-s12', topic: 'genetics', outcome: 'gen-o9a', marks: 5,
    q: `Evaluate the use of gene therapy to treat genetic disorders.`,
    criteria: [
      `Outlines gene therapy: inserting a working gene (via a viral vector) or editing a faulty gene, e.g. CRISPR`,
      `Benefits with an example (treats the cause; one-off; e.g. sickle-cell disease, inherited blindness, SMA)`,
      `Limitations/risks (immune reaction, insertion causing cancer, only single-gene disorders, temporary effect)`,
      `Ethical/social issues (cost and equity, germline editing and designer babies, consent of future generations)`,
      `Overall judgement supported by reasoning`
    ],
    model: `Gene therapy treats genetic disorders by delivering a working copy of a gene into a patient’s cells using a modified virus as a vector, or by editing the faulty gene with CRISPR-Cas9. It treats the <b>cause</b> rather than the symptoms, and is often a one-off treatment. For example, Casgevy can cure sickle-cell disease, and Luxturna restores some vision in an inherited blindness. However, the immune system may react to the viral vector (a patient died in a 1999 trial), the inserted gene may land in the wrong place and trigger cancer, and the therapy only works for single-gene disorders. Treatments cost millions of dollars, raising <b>equity</b> concerns, and <b>germline</b> editing could lead to “designer babies” and would affect future generations who cannot consent. Overall, somatic gene therapy is highly beneficial because it offers cures for previously untreatable diseases. Germline editing should remain prohibited, and costs must fall for fair access.`,
    keywords: ['vector', 'virus', 'crispr', 'cause', 'immune', 'cost', 'germline', 'designer babies'] },
  { id: 'gen-s13', topic: 'genetics', outcome: 'gen-bg', marks: 3,
    q: `Compare mitosis and meiosis in humans in terms of the type of cells produced, whether they are diploid or haploid, and their purpose.`,
    criteria: [
      `Mitosis produces 2 genetically identical body (somatic) cells; meiosis produces 4 genetically different gametes`,
      `Mitosis: diploid (46); meiosis: haploid (23)`,
      `Mitosis: growth and repair/replacement; meiosis: sexual reproduction/producing gametes and variation`
    ],
    model: `<table class="t"><tr><th></th><th>Mitosis</th><th>Meiosis</th></tr><tr><td>Type of cells produced</td><td>2 genetically identical body (somatic) cells</td><td>4 genetically different gametes (sperm/eggs)</td></tr><tr><td>Diploid/haploid</td><td>Diploid (2n = 46)</td><td>Haploid (n = 23)</td></tr><tr><td>Purpose in humans</td><td>Growth, repair and replacement of cells</td><td>Producing gametes for sexual reproduction, creating variation</td></tr></table>`,
    keywords: ['diploid', 'haploid', 'identical', 'gametes', 'growth', 'repair', 'sexual reproduction'], source: '2024 Yearly Q23(c)' },
  { id: 'gen-s14', topic: 'genetics', outcome: 'gen-o8a', marks: 2,
    q: `A student crossed two heterozygous plants and obtained 14 dominant and 10 recessive offspring instead of the expected 3 : 1 ratio. Explain this result.`,
    criteria: [
      `Punnett squares give probabilities; fertilisation (which gametes combine) is random`,
      `The small sample size means results deviate by chance; a larger sample would approach 3 : 1`
    ],
    model: `A Punnett square predicts the <b>probability</b> of each outcome, but which gametes fuse at fertilisation is random. With only 24 offspring, chance variation can easily shift the ratio away from 3 : 1 (18 : 6). A much <b>larger sample</b> would give a ratio closer to the expected 3 : 1, as in Mendel’s experiments with hundreds of plants.`,
    keywords: ['probability', 'random', 'fertilisation', 'sample size', 'chance', 'larger'] }
);

SD.seq.push(
  { id: 'gen-seq1', topic: 'genetics', title: 'Order Mendel’s monohybrid experiment', items: [
    `Self-pollinate plants for several generations to produce pure-breeding lines`,
    `Cross-pollinate a pure tall plant with a pure short plant (remove anthers, transfer pollen)`,
    `Observe the F1 generation: all tall`,
    `Allow the F1 plants to self-pollinate`,
    `Count the F2 generation: about 3 tall : 1 short`,
    `Conclude the laws of dominance and segregation`
  ] },
  { id: 'gen-seq2', topic: 'genetics', title: 'Order the steps for solving a Punnett square problem', items: [
    `Write a key for the alleles (e.g. T = tall, t = short)`,
    `Write the genotypes of both parents`,
    `Separate each parent’s alleles into possible gametes`,
    `Place the gametes along the top and side of the square`,
    `Fill in the offspring genotypes in each box`,
    `State the genotypic and phenotypic ratios or probabilities`
  ] },
  { id: 'gen-seq3', topic: 'genetics', title: 'Order the steps used to clone Dolly the sheep (SCNT)', items: [
    `Take a somatic (udder) cell from the sheep to be cloned`,
    `Remove the nucleus from an egg cell taken from a second sheep`,
    `Fuse the somatic cell with the empty egg using an electric pulse`,
    `The fused cell divides by mitosis to form an embryo`,
    `Implant the embryo into the uterus of a surrogate mother`,
    `A lamb genetically identical to the nucleus donor is born`
  ] },
  { id: 'gen-seq4', topic: 'genetics', title: 'Order the steps of DNA profiling', items: [
    `Collect a biological sample (blood, saliva, hair root)`,
    `Extract the DNA from the cells`,
    `Amplify the STR regions using PCR`,
    `Separate the DNA fragments by size using gel electrophoresis`,
    `Visualise the bands to produce a DNA profile`,
    `Compare the profile with suspects or a database`
  ] },
  { id: 'gen-seq5', topic: 'genetics', title: 'Order the steps for making human insulin using genetically modified bacteria', items: [
    `Cut the human insulin gene out of DNA using a restriction enzyme`,
    `Cut a bacterial plasmid with the same restriction enzyme`,
    `Join the insulin gene into the plasmid using DNA ligase`,
    `Insert the recombinant plasmid into a bacterium`,
    `Grow the bacteria in large fermenters so they multiply and make insulin`,
    `Extract and purify the insulin for patients`
  ] }
);
