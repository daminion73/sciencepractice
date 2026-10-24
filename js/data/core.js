// Shared content registry. Each topic file pushes into these arrays.
// Load order: _core.js first, then topic files, then app scripts.
window.SD = {
  topics: [], // {id, name, short, color, examined, scope, notes:[{id,title,html}], cram}
  cards: [],  // {id, topic, outcome, front, back}
  mcq: [],    // {id, topic, outcome, q, options:[4], answer:index, explain, source?}
  saq: [],    // {id, topic, outcome, marks, q, criteria:[...], model, keywords:[...], source?}
  seq: [],    // {id, topic, title, items:[correct order]}
  images: []  // {id, topic, outcome, src, caption, from} (slide pictures; picture MCQs go in mcq with pic:true)
};
