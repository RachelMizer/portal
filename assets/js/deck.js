// Renders a single deck's full detail on deck.html, based on the ?slug= query param
document.addEventListener("DOMContentLoaded", function () {
  var decks = window.PORTAL_DECKS || [];
  var params = new URLSearchParams(location.search);
  var slug = params.get("slug");
  var deck = decks.find(function (d) {
    return d.slug === slug;
  });

  var titleEl = document.getElementById("deck-title");
  var taglineEl = document.getElementById("deck-tagline");
  var notFoundEl = document.getElementById("deck-not-found");
  var contentEl = document.getElementById("deck-content");

  if (!deck) {
    titleEl.textContent = "Deck not found";
    notFoundEl.hidden = false;
    taglineEl.hidden = true;
    contentEl.hidden = true;
    return;
  }

  // Zenitha (the heading font) doesn't render digit glyphs correctly, so any
  // number inside a heading needs to go through the Oldstyle .num-prefix override.
  function withOldstyleDigits(text) {
    return text.replace(/\d+/g, function (match) {
      return '<span class="num-prefix">' + match + "</span>";
    });
  }

  document.title = deck.name + " — PORTAL Builds";
  titleEl.innerHTML = withOldstyleDigits(deck.name);

  if (deck.tagline) {
    taglineEl.textContent = deck.tagline;
    taglineEl.hidden = false;
  }

  contentEl.hidden = false;

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) {
      if (/^h[1-6]$/.test(tag)) {
        node.innerHTML = withOldstyleDigits(text);
      } else {
        node.textContent = text;
      }
    }
    return node;
  }

  function renderCardList(cards) {
    var ul = el("ul", "card-list panel");
    cards.forEach(function (card) {
      var li = document.createElement("li");
      var qty = card.qty ? card.qty + "× " : "";
      li.appendChild(document.createTextNode(qty + card.name));
      if (card.note) {
        var note = el("span", "card-note", " (" + card.note + ")");
        li.appendChild(note);
      }
      ul.appendChild(li);
    });
    return ul;
  }

  // Description paragraphs
  (deck.description || []).forEach(function (paragraph) {
    contentEl.appendChild(el("p", null, paragraph));
  });

  // Cost note (budget builds)
  if (deck.costNote) {
    var costPanel = el("p", "panel");
    costPanel.innerHTML = "<strong>" + deck.costNote + "</strong>";
    contentEl.appendChild(costPanel);
  }

  // Deck Structure
  if (deck.structure) {
    contentEl.appendChild(el("h2", null, "Deck Structure"));
    var structureList = el("ul");
    var s = deck.structure;
    structureList.appendChild(el("li", null, "Creatures: " + s.creatures));
    structureList.appendChild(el("li", null, "Spells: " + s.spells));
    structureList.appendChild(el("li", null, "Artifacts: " + s.artifacts));
    structureList.appendChild(el("li", null, "Planeswalkers: " + s.planeswalkers));
    structureList.appendChild(el("li", null, "Suggested Healer: " + s.healer));
    contentEl.appendChild(structureList);
  }

  // Creatures
  if (deck.creatureGroups && deck.creatureGroups.length) {
    contentEl.appendChild(el("h2", null, "Creatures"));
    deck.creatureGroups.forEach(function (group) {
      contentEl.appendChild(el("h3", null, group.label));
      if (group.note) contentEl.appendChild(el("p", "card-note", group.note));
      contentEl.appendChild(renderCardList(group.cards));
    });
  }

  // Spells
  if (deck.spellGroups && deck.spellGroups.length) {
    contentEl.appendChild(el("h2", null, "Spells"));
    deck.spellGroups.forEach(function (group) {
      contentEl.appendChild(el("h3", null, group.label));
      if (group.note) contentEl.appendChild(el("p", "card-note", group.note));
      contentEl.appendChild(renderCardList(group.cards));
    });
  }

  // Artifacts
  if (deck.artifacts && deck.artifacts.length) {
    contentEl.appendChild(el("h2", null, "Artifacts"));
    contentEl.appendChild(renderCardList(deck.artifacts));
  }

  // Planeswalkers
  if (deck.planeswalkers && deck.planeswalkers.length) {
    contentEl.appendChild(el("h2", null, "Planeswalkers"));
    contentEl.appendChild(renderCardList(deck.planeswalkers));
  }

  // Closing themed section (Combo Themes / budget rationale / etc.)
  if (deck.closing) {
    contentEl.appendChild(el("h2", null, deck.closing.title));
    var closingList = el("ul");
    (deck.closing.items || []).forEach(function (item) {
      closingList.appendChild(el("li", null, item));
    });
    contentEl.appendChild(closingList);
    if (deck.closing.note) contentEl.appendChild(el("p", null, deck.closing.note));
  }

  // Incomplete-source note
  if (deck.incomplete && deck.incompleteNote) {
    var incompletePanel = el("p", "panel");
    var em = document.createElement("em");
    em.textContent = deck.incompleteNote;
    incompletePanel.appendChild(em);
    contentEl.appendChild(incompletePanel);
  }
});
