// PORTAL build data
//
// This file is the single source of truth for the "Builds" page and the
// individual deck-detail pages. It's loaded as a plain <script> (not fetched
// as JSON) so the site keeps working when opened straight from disk, with no
// local server required.
//
// To add a new deck, add an object to the PORTAL_DECKS array below:
//
//   {
//     slug: "kebab-case-unique-id",   // used in the URL: deck.html?slug=...
//     name: "Deck Display Name",
//     colors: ["Green", "Blue"],       // 1-2 colors, flavor text only
//     description: "One or two sentences about the deck's plan.",
//     cards: [
//       { name: "Card Name", qty: 1 },
//       { name: "Another Card", qty: 2 }
//     ]
//   }
//
// No decks yet — this array is intentionally empty until builds are ready.
window.PORTAL_DECKS = [];
