// Renders the deck list on builds.html from data/decks.js
document.addEventListener("DOMContentLoaded", function () {
  var decks = window.PORTAL_DECKS || [];
  var listEl = document.getElementById("deck-list");
  var emptyEl = document.getElementById("deck-list-empty");

  if (!decks.length) {
    listEl.hidden = true;
    emptyEl.hidden = false;
    return;
  }

  emptyEl.hidden = true;
  listEl.hidden = false;

  decks.forEach(function (deck) {
    var li = document.createElement("li");
    li.className = "deck-grid__item";

    var a = document.createElement("a");
    a.href = "deck.html?slug=" + encodeURIComponent(deck.slug);
    a.textContent = deck.name;

    li.appendChild(a);
    listEl.appendChild(li);
  });
});
