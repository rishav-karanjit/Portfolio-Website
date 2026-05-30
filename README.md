# Rishav Karanjit — Portfolio

Personal portfolio and TIL (Today I Learned) site. Built with plain HTML, CSS, and JavaScript — no framework, no build step, no server required.

## Structure

```
├── index.html        # Home page (About + Contact)
├── til.html          # TIL page
├── css/
│   ├── base.css      # Shared styles (nav, layout, footer)
│   └── til.css       # TIL-specific styles
└── js/
    ├── til-data.js   # TIL entries — edit this to add new posts
    └── til.js        # Rendering and filter logic
```

## Adding a TIL

Open `js/til-data.js` and add an entry to the top of the `TIL` array:

```js
{
  date: "2026-05-30",
  category: "cryptography",        // "cryptography" | "software-engineering"
  tag: "Cryptography",             // displayed as a pill tag
  heading: "Your title here",
  body: "What you learned."
},
```

That's it — no HTML to touch.

## Running locally

Open `index.html` directly in a browser. No server or build step needed.
