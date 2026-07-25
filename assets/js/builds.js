// Renders the category-grouped deck list on builds.html from data/decks.js
document.addEventListener("DOMContentLoaded", function () {
  var decks = window.PORTAL_DECKS || [];
  var categoryOrder = window.PORTAL_DECK_CATEGORY_ORDER || [];
  var containerEl = document.getElementById("deck-categories");
  var emptyEl = document.getElementById("deck-list-empty");

  if (!decks.length) {
    containerEl.hidden = true;
    emptyEl.hidden = false;
    return;
  }

  emptyEl.hidden = true;
  containerEl.hidden = false;

  // Zenitha (the heading font) doesn't render digit glyphs correctly, so any
  // number inside a heading needs to go through the Oldstyle .num-prefix override.
  function withOldstyleDigits(text) {
    return text.replace(/\d+/g, function (match) {
      return '<span class="num-prefix">' + match + "</span>";
    });
  }

  var byCategory = {};
  decks.forEach(function (deck) {
    var category = deck.category || "Other";
    if (!byCategory[category]) byCategory[category] = [];
    byCategory[category].push(deck);
  });

  var orderedCategories = categoryOrder.filter(function (c) {
    return byCategory[c];
  });
  Object.keys(byCategory).forEach(function (c) {
    if (orderedCategories.indexOf(c) === -1) orderedCategories.push(c);
  });

  orderedCategories.forEach(function (category) {
    var section = document.createElement("section");
    section.className = "deck-category";

    var heading = document.createElement("h2");
    heading.innerHTML = withOldstyleDigits(category);
    section.appendChild(heading);

    var list = document.createElement("ul");
    list.className = "deck-grid";

    byCategory[category].forEach(function (deck) {
      var li = document.createElement("li");
      li.className = "deck-grid__item";

      var a = document.createElement("a");
      a.href = "deck.html?slug=" + encodeURIComponent(deck.slug);
      a.innerHTML = withOldstyleDigits(deck.name);

      li.appendChild(a);
      list.appendChild(li);
    });

    section.appendChild(list);
    containerEl.appendChild(section);
  });
});
