const groups = [...new Set(terms.map(({ group }) => group))].sort();
const pages = [
  { kind: "cover" },
  { kind: "index" },
  ...groups.map((group) => ({ kind: "group", group }))
];

let currentPage = 0;
let isTurning = false;

const page = document.querySelector("#book-page");
const previous = document.querySelector("#previous-page");
const next = document.querySelector("#next-page");
const indicator = document.querySelector("#page-indicator");
const alphabet = document.querySelector("#alphabet-links");
const search = document.querySelector("#term-search");
const results = document.querySelector("#search-results");
const resultList = document.querySelector("#result-list");

document.querySelector("#term-count").textContent = `${terms.length} terms in the first edition`;

function esc(value) {
  return value.replace(/[&<>"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  }[character]));
}

function renderAlphabet() {
  const letters = [...new Set(groups.map((group) => group.charAt(0)))];
  alphabet.innerHTML = letters.map((letter) => `
    <button type="button" data-letter="${letter}">${letter}</button>
  `).join("");

  alphabet.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const pageIndex = pages.findIndex((item) => item.group?.startsWith(button.dataset.letter));
      turnTo(pageIndex);
    });
  });
}

function termCard(item) {
  return `
    <section class="term-entry" id="${item.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")}">
      <div class="entry-heading">
        <h3>${esc(item.term)}</h3>
        <span>${esc(item.type)}</span>
      </div>
      <p class="pronunciation">${esc(item.pronunciation)}</p>
      <p class="definition">${esc(item.definition)}</p>
      <p class="example"><strong>Example</strong> ${esc(item.example)}</p>
      <p class="related"><strong>Related</strong> ${item.related.map(esc).join(" · ")}</p>
    </section>
  `;
}

function renderPage() {
  const selected = pages[currentPage];
  if (selected.kind === "cover") {
    page.className = "book-page cover-page";
    page.innerHTML = `
      <div class="cover-ornament">B E D</div>
      <div class="cover-copy">
        <p class="eyebrow">First edition</p>
        <h2>The Backend<br>Engineering<br>Dictionary</h2>
        <p>A plain English guide to modern software terms.</p>
      </div>
      <p class="cover-footer">Ankit Kumar Jaipuriar</p>
    `;
    indicator.textContent = "Cover";
  } else if (selected.kind === "index") {
    page.className = "book-page";
    page.innerHTML = `
      <p class="page-kicker">How to use this book</p>
      <h2>Find a term. Understand it. Use it.</h2>
      <p class="intro">Every entry follows a dictionary format: pronunciation, word type, plain-English definition, universal example, and related concepts.</p>
      <div class="index-grid">
        ${groups.map((group) => `<button type="button" data-group="${group}">${group}<span>${terms.filter((item) => item.group === group).length} terms</span></button>`).join("")}
      </div>
      <p class="page-number">01</p>
    `;
    page.querySelectorAll("[data-group]").forEach((button) => {
      button.addEventListener("click", () => turnTo(pages.findIndex((item) => item.group === button.dataset.group)));
    });
    indicator.textContent = "Contents";
  } else {
    const entries = terms.filter((item) => item.group === selected.group);
    page.className = "book-page";
    page.innerHTML = `
      <p class="page-kicker">${selected.group.charAt(0)}</p>
      <h2>${selected.group}</h2>
      <div class="entries">${entries.map(termCard).join("")}</div>
      <p class="page-number">${String(currentPage).padStart(2, "0")}</p>
    `;
    indicator.textContent = `${selected.group} · ${currentPage} of ${pages.length - 1}`;
  }

  previous.disabled = currentPage === 0;
  next.disabled = currentPage === pages.length - 1;
}

function turnTo(index) {
  if (isTurning || index < 0 || index >= pages.length || index === currentPage) return;
  isTurning = true;
  const direction = index > currentPage ? "turn-forward" : "turn-back";
  page.classList.add(direction);

  window.setTimeout(() => {
    currentPage = index;
    renderPage();
    page.classList.add(direction);
    requestAnimationFrame(() => page.classList.remove(direction));
    window.setTimeout(() => { isTurning = false; }, 420);
  }, 210);
}

function displayResults(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    results.hidden = true;
    return;
  }
  const matches = terms.filter((item) => [item.term, item.definition, ...item.related]
    .join(" ").toLowerCase().includes(normalized));
  results.hidden = false;
  resultList.innerHTML = matches.length
    ? matches.map((item) => `<button type="button" class="search-result" data-term="${item.term}">
        <span>${esc(item.group)}</span><strong>${esc(item.term)}</strong><p>${esc(item.definition)}</p>
      </button>`).join("")
    : `<p class="no-results">No terms found. Try a broader search.</p>`;

  resultList.querySelectorAll("[data-term]").forEach((button) => {
    button.addEventListener("click", () => {
      const term = terms.find((item) => item.term === button.dataset.term);
      turnTo(pages.findIndex((item) => item.group === term.group));
      results.hidden = true;
      search.value = "";
    });
  });
}

previous.addEventListener("click", () => turnTo(currentPage - 1));
next.addEventListener("click", () => turnTo(currentPage + 1));
search.addEventListener("input", (event) => displayResults(event.target.value));
document.querySelector("#close-search").addEventListener("click", () => {
  search.value = "";
  results.hidden = true;
  search.focus();
});
document.querySelector("#random-term").addEventListener("click", () => {
  const selected = terms[Math.floor(Math.random() * terms.length)];
  turnTo(pages.findIndex((item) => item.group === selected.group));
});
window.addEventListener("keydown", (event) => {
  if (document.activeElement === search) return;
  if (event.key === "ArrowRight") turnTo(currentPage + 1);
  if (event.key === "ArrowLeft") turnTo(currentPage - 1);
});

renderAlphabet();
renderPage();
