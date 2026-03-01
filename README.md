# Single-Page Developer Portfolio

A dark, single-page developer portfolio built with Create React App and styled to mirror the provided Figma reference. All profile data lives in one place (`src/content.js`) so it can be swapped easily with real details later.

## What you get
- Pixel-close hero, skills, projects, and contact sections with responsive layouts
- Accessible form with inline validation and keyboard-friendly focus states
- Local placeholder assets to replace with real screenshots/portrait
- Social links + CTA anchors that scroll to the contact form

## Tech stack
- React (Create React App)
- CSS (custom, no external UI libraries)
- Google Font: Space Grotesk

## Running locally
```bash
npm install
npm start
# open http://localhost:3000
```

## Build for production
```bash
npm run build
```
Output goes to the `build/` directory.

## Deploy (Netlify, static hosting friendly)
1) Create a production bundle: `npm run build`  
2) Drag the `build/` folder into the Netlify UI **or** use CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir build
```
That’s it—CRA builds are static, so no extra config is required. If you prefer GitHub Pages, add a `homepage` entry to `package.json`, install `gh-pages`, and run `npm run deploy`.

## Swap in real content
- Update all profile info, skills, projects, and social links in `src/content.js`.
- Replace placeholder SVGs in `src/assets/` with your own images/screenshots (keep the filenames or update imports in `src/content.js`).

## Contact form on Vercel
This repo includes a Vercel serverless function at `api/contact.js` that sends form submissions using Resend.

Set these environment variables in Vercel (`Project > Settings > Environment Variables`):
- `RESEND_API_KEY`: your Resend API key.
- `TO_EMAIL`: destination inbox (for this site, use `raunakuk2016@gmail.com`).
- `FROM_EMAIL`: sender identity, for example `Portfolio Contact <no-reply@yourdomain.com>`.

Notes:
- `FROM_EMAIL` should be from a verified domain in Resend for production.
- If `TO_EMAIL` is not set, the function defaults to `raunakuk2016@gmail.com`.

## Notes
- Design colors and spacing follow the provided preview; adjust CSS tokens in `src/index.css` and `src/App.css` if your brand palette differs.
