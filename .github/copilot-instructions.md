## Nova AI - Quick on-ramp for AI coding agents

This is a small single-page React "coming soon" site bootstrapped with Create React App. The goal of this document is to give an AI coding agent the minimal, actionable context to be immediately productive in this repo.

High level
- Type: Create React App (react-scripts v5). See `package.json` scripts: `npm start`, `npm run build`, `npm test`.
- Purpose: static marketing/landing page with a canvas particle background, countdown timer, and an email signup form.

Key components and responsibilities
- `src/App.js` — page layout and sections (Hero, Countdown, Signup, Features, Footer).
- `src/components/Particles.js` — canvas-based particle renderer (controls animation, resize behavior, quantity prop).
- `src/components/Countdown.js` — client-side countdown. The launch date is hard-coded at `new Date('2025-12-01T00:00:00')` — update here to change the target date.
- `src/components/SignupForm.js` — simple email capture UI. Currently logs to console and shows a success message; there is a `// TODO: Integrate EmailJS or backend` comment where integration belongs.
- `src/components/Features.js` — static feature tiles.

Styling & assets
- TailwindCSS + custom utilities: `tailwind.config.js` + `postcss.config.js` are configured. Main CSS lives in `src/index.css` which imports Tailwind and defines project-specific classes such as `.glass`, `.neon-glow`, `.font-orbitron`, and `.animate-float`.
- Fonts and <head> assets are declared in `public/index.html` (Orbitron, Inter).

Developer workflows (how to run / build / test)
- Install: `npm install` (repo uses `react-scripts` and Tailwind in devDependencies).
- Dev server: `npm start` — runs CRA dev server on http://localhost:3000.
- Build for production: `npm run build` — outputs to `build/`.
- Tests: `npm test` — default CRA test runner.

Project-specific patterns and notes for edits
- Changing the countdown target: edit `src/components/Countdown.js` — change the `launchDate` value.
- Signup backend integration: wire a backend or third-party (EmailJS, Mailchimp) at the TODO in `src/components/SignupForm.js`. The component currently prevents default submission and logs the email.
- Particle density: adjust `quantity` prop in `src/App.js` or default in `Particles.js`.
- Styling pattern: use Tailwind utility classes and the project’s custom helpers in `src/index.css` (use `glass` and `neon-glow` for cards/effects).

Integration & external dependencies
- No backend included. Any API keys / services (email providers) must be added by integrating with `SignupForm.js` or by adding a server endpoint.
- Runtime libs: `react`, `react-dom`, `react-icons`, `framer-motion` (present but not heavily used in the current code).

Debugging tips & hotspots
- Canvas issues: Particles uses `canvas.getContext('2d')` and sets `canvas.width`/`height` from `window.innerWidth/innerHeight`. Resize handling is in the effect; check for device pixel ratio or repaint issues when debugging visuals.
- Missing styles: custom classes live in `src/index.css`. If a Tailwind utility isn't applied, ensure `tailwind.config.js` content globs include the file (they do: `./src/**/*.{js,jsx,ts,tsx}`).
- Console traces: `SignupForm` logs signups with `console.log('Notify:', email)` — use this when testing flows locally.

What NOT to change without confirmation
- Do not eject CRA (`npm run eject`) unless requested — it’s one-way and not needed for small changes.

Patch examples (where to edit)
- Update countdown target: `src/components/Countdown.js` (search for `new Date('2025-12-01T00:00:00')`).
- Hook up signup: `src/components/SignupForm.js` (look for `// TODO: Integrate EmailJS or backend`).

If anything's unclear or you'd like the agent to make specific edits (e.g., add EmailJS integration, change launch date, tune particle density), tell me which change and I will implement it and run the dev server build checks locally.
