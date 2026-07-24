// Renders a single deck's card list on deck.html, based on the ?slug= query param
document.addEventListener("DOMContentLoaded", function () {
  var decks = window.PORTAL_DECKS || [];
  var params = new URLSearchParams(location.search);
  var slug = params.get("slug");
  var deck = decks.find(function (d) {
    return d.slug === slug;
  });

  var titleEl = document.getElementById("deck-title");
  var metaEl = document.getElementById("deck-meta");
  var descEl = document.getElementById("deck-description");
  var listEl = document.getElementById("deck-card-list");
  var notFoundEl = document.getElementById("deck-not-found");

  if (!deck) {
    titleEl.textContent = "Deck not found";
    notFoundEl.hidden = false;
    metaEl.hidden = true;
    descEl.hidden = true;
    listEl.hidden = true;
    return;
  }

  document.title = deck.name + " — PORTAL Builds";
  titleEl.textContent = deck.name;

  if (deck.colors && deck.colors.length) {
    metaEl.textContent = deck.colors.join(" / ");
    metaEl.hidden = false;
  }

  if (deck.description) {
    descEl.textContent = deck.description;
    descEl.hidden = false;
  }

  (deck.cards || []).forEach(function (card) {
    var li = document.createElement("li");
    var qty = card.qty ? card.qty + "× " : "";
    li.textContent = qty + card.name;
    listEl.appendChild(li);
  });
});
