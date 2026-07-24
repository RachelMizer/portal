# Portal

A static site for **Portal** — a multiplayer, shared-deck, creature-slot combat format for Magic: The Gathering.

See `BUILDLOG.md` for a session-by-session history of what's been built and why.

## Structure

```
index.html          Landing page
rules.html           Core Rules (with anchor-link table of contents)
banned-list.html      Banned List
builds.html           List of Portal builds (decklists)
deck.html             Single-deck view, e.g. deck.html?slug=some-deck
contact.html          Feedback form (Google Form embed, with a mailto fallback)

assets/
  css/style.css       All site styling
  js/                 Small vanilla-JS behaviors (no build step, no dependencies)
  fonts/              Oldstyle (body) + Zenitha (headings)
  img/                Logo art

data/
  decks.js            Source of truth for Portal builds — add a deck here
  contact-config.js    Where the real Google Form embed URL goes
```

No build tools, no npm install, no framework. Just plain HTML/CSS/JS, so it can be hosted anywhere.

## Previewing locally

Because `builds.html` and `deck.html` load deck data via a `<script>` tag
(not `fetch`), you can just double-click `index.html` and browse the site
directly from disk — no local server required.

If you'd prefer a live-reloading local server anyway (e.g. via the VS Code
"Live Server" extension, or `npx serve`), that works too.

## Adding a Portal build

Open `data/decks.js` and add an object to the `PORTAL_DECKS` array:

```js
{
  slug: "some-deck",              // used in the URL: deck.html?slug=some-deck
  name: "Some Deck",
  colors: ["Green", "Blue"],       // flavor text only
  description: "One or two sentences about the deck's plan.",
  cards: [
    { name: "Card Name", qty: 1 },
    { name: "Another Card", qty: 2 }
  ]
}
```

It'll show up on `builds.html` automatically — no new HTML file needed.

## Wiring up the contact form

`contact.html` is set up for a Google Form embed:

1. Create the Google Form.
2. Send → the `<>` (embed HTML) icon → copy the `src="..."` URL from the `<iframe>` it gives you.
3. Paste that URL into `PORTAL_CONTACT_FORM_URL` in `data/contact-config.js`.

Until that's set, the page shows a plain "email us" fallback link instead —
update the placeholder address in `contact.html` before publishing.

## Hosting

No host has been chosen yet. Since this is plain static HTML/CSS/JS with no
build step, any of these work with just a repo connection and no config:

- **GitHub Pages** — simplest, since the site already lives in a GitHub repo. Settings → Pages → deploy from branch.
- **Netlify** — same simplicity, and if you switch the contact form from Google Forms to Netlify Forms later, submissions land directly in the Netlify dashboard with zero extra setup.
- **Cloudflare Pages** — also free, fast global CDN.

## Updating "last updated" timestamps

Each page's footer has a hard-coded `<time>` — there's no build step to
auto-generate it, so bump it by hand in that page's HTML when you meaningfully
edit its content.
