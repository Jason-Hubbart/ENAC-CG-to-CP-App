# ENAC Church Planting App

A proper Vite + React project wrapping `enac-church-planting-hubb.jsx` — the single-file
Claude Artifact — so it can run as a real, shareable web app instead of only inside claude.ai.

## Get a shareable feedback link in ~2 minutes (CodeSandbox)

1. Go to https://codesandbox.io
2. Click **"Create" → "Import Project"** (or just drag this whole `enac-church-planting-app`
   folder onto the CodeSandbox homepage)
3. CodeSandbox installs dependencies and gives you a live preview URL immediately —
   copy that URL and send it to whoever you want feedback from. No sign-in required to view it.
4. To edit: open the file tree on the left, click `src/App.jsx`, and edit text/JSX directly.
   The preview updates live as you type. You can also drag whole blocks (e.g. a stage's
   `tools` array, or a JSX section) to reorder content.

StackBlitz (https://stackblitz.com) works the same way if you prefer it — same import flow.

## Run it locally instead

```bash
npm install
npm run dev
```

Opens at http://localhost:5173 with hot-reload as you edit `src/App.jsx`.

## When you're ready to deploy for real

**Option A — from CodeSandbox:** use its built-in "Deploy" button (supports Vercel) to push
straight from the sandbox to a live production URL.

**Option B — push to GitHub, then Vercel:**
1. Create a new GitHub repo and push this folder to it
2. Go to https://vercel.com → "Add New Project" → import the repo
3. Vercel auto-detects Vite, builds, and gives you a permanent URL (e.g. `enac-church-plant.vercel.app`)
4. Every time you push a change to GitHub, Vercel redeploys automatically

Netlify (https://netlify.com) works the same way if you prefer it over Vercel.

## Known issue to fix before wider release

The **Ask AI** tab calls `https://api.anthropic.com/v1/messages` directly from the browser
with no API key. This worked (or silently failed) inside claude.ai because that environment
handles auth differently — it will not work once deployed as a standalone site, and you
should never put a real Anthropic API key directly in frontend code (anyone could steal and
use it). Before launching to real users, this call needs to go through a small backend
proxy (e.g. a Vercel serverless function) that holds the API key server-side. Fine to leave
as-is for now while collecting feedback on content/design — feedback-givers will just see
"Something went wrong" if they try the Ask AI tab.

## What's in here

- `src/App.jsx` — the entire app (content, styling, logic) — same file structure as before,
  just wrapped so it can build and run as a standalone site
- `src/main.jsx` — mounts the app
- `index.html`, `vite.config.js`, `package.json` — standard Vite scaffolding
