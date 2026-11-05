# CLAUDE.md — ENAC Church Planting App

Read this file at the start of every session, before changing anything.

---

## Project Overview

**What it is:** An interactive reference web app for ENAC (Every Nation Auckland City) church planters and leaders.

**What it does:** Guides users through the 5 stages of the ENAC church planting lifecycle, with content, markers, leadership guidance, resources and an Ask AI assistant for each stage.

**Who uses it:** Mainly ENAC church planters, cluster leaders and pastoral staff. Occasionally outside stakeholders. Internal-first.

**Client and designer:** Built for Every Nation Auckland City (the client). Designed by HUBB Group, which appears only as a small footer credit.

---

## Where Things Live

- **Repo folder:** `~/Documents/ENAC CG to CP`
- **Main file:** `src/App.jsx` (single-file React app, 1,100+ lines)
- **Branch:** `main` (work directly on `main`; no pull requests)
- **Deployment:** pushing to GitHub triggers an automatic Vercel deploy of the live site
- **Build tool and scripts:** see `package.json`
- `node_modules/` is never committed

This repo is the only live copy of the app. Copies in claude.ai projects or old downloads are out of date and must never be used as a source.

---

## Session Workflow

Jason plans and decides in claude.ai chat. All file editing happens here in Claude Code.

1. **Queue first.** Jason usually lists several changes before asking for implementation. Collect them all.
2. **Ask before building.** If anything is unclear, ask clarifying questions before editing. Always ask before rebuilding or redoing an existing section.
3. **Explain recommendations.** Jason wants to understand the reasoning behind suggestions before they're implemented.
4. **One batch pass.** Implement all queued changes together in a single pass.
5. **Verify.** After editing, check that braces, parentheses and brackets are balanced, and grep to confirm each change landed. Line count should grow over time; if it shrinks a lot, something was deleted by accident.
6. **Show the diff and wait.** Always show the diff and wait for Jason's explicit confirmation before committing or pushing. A push changes the live site.
7. **Commit and push** only after confirmation, with a clear commit message.

**Editing tips:** For global find-and-replace across `App.jsx`, an inline Python script is more reliable than chained `sed` or many small edits. Have it report any target string it didn't find.

**Prototypes:** New features are prototyped in standalone demo files first. The three-hub portal (Discipleship, Leadership and Church Planting hubs) and the login/tracking system exist only as prototypes. Do not merge them into `App.jsx` unless Jason explicitly asks; that will happen later as one planned migration.

---

## Tech Stack

- React, functional components, `useState` only (no Redux, no context)
- Inline styles only; no Tailwind. The `<style>` block holds minimal resets, hover states and media queries.
- No external dependencies beyond React
- Ask AI tab calls the Anthropic Messages API (`https://api.anthropic.com/v1/messages`)

---

## Brand

Every Nation Auckland City's brand leads. Never use HUBB Group's own colours (e.g. navy `#1F3770`, green `#2A9640`) anywhere in the UI.

### Colours

```js
enBlue:      "#005EB9"  // primary: header, primary buttons, key UI
enTeal:      "#1AADAD"  // accent: active states, highlights, Stage 1
enTealLight: "#E6F7F7"
enBlueDark:  "#1A3A5C"
enBlueLight: "#E6EFF9"
enPurple:    "#7B6BAF"  // use sparingly
offWhite:    "#F5F5F5"
lightBorder: "#D6E4F0"
gray:        "#6B7280"
```

The identity strip under the header's teal border is neutral gray `#4B5563`.

### Stage accent colours

| Stage | `color` | `lightColor` |
|-------|---------|--------------|
| 1 | `#1AADAD` | `#E6F7F7` |
| 2 | `#005EB9` | `#E6EFF9` |
| 3 | `#1A3A5C` | `#E6EFF9` |
| 4 | `#2A7AB5` | `#E6EFF9` |
| 5 | `#0A4A8C` | `#E6EFF9` |

### Header and footer

- Header background EN Blue, white text
- Header wordmark reads **"Every Nation / City Church"**. Everywhere else in the app, the abbreviation stays **ENAC**.
- Footer: a small, muted "Designed by HUBB Group" credit only. No HUBB logo or colours.

### Logo rules (EN brand guidelines)

Blue logo on white/light backgrounds only. Don't change its colour, place it on a busy background, add effects, or distort the globe.

---

## Stages

There are 5 stages, in a fixed order. Stage titles, keys and order are fixed; do not rename them unless Jason asks. Read the current titles from the `stages` array in `App.jsx`.

The lifecycle flows: Connect Groups → Cluster → Core Team → Pre-Launch → New Church. The underlying philosophy is **depth of discipleship before breadth of church**.

---

## ENAC Terminology

Use these terms exactly:

| Term | Meaning |
|------|---------|
| **Connect Group (CG)** | Small discipleship group, the foundational unit |
| **Tripod** | Three-person accountability and mentoring structure (a leader developing 2 apprentices) |
| **Cluster** | 3–6 Connect Groups in the same region |
| **Cluster Leader** | Oversees and coaches CG leaders in a cluster |
| **Core Team** | 4–8 committed members forming the pre-launch team |
| **Church Plant (CP)** | A new church |
| **F.A.I.T.H** | Leadership character assessment |
| **ENAC Lead Pipeline** | Leadership development pathway from new believer to church planter |
| **Disciple Maker (DM)** | Someone actively making disciples, not just growing personally |
| **Preview Service** | Monthly gathering in the pre-launch phase |
| **MOU** | Memorandum of Understanding between a new church and ENAC senior leadership |
| **SP** | Senior Pastor |
| **LP** | Local (church plant) Pastor |

**Do not use:** "Triad" (renamed to Tripod), "small group", "cell group", "launch service" (use Preview Service), "plant leader" (use church plant leader), "Core Values" (use Core Practices).

**Tab name:** the resources tab is labelled **"Resources & Tools"**.

---

## Content Rules

- Plain, warm, practitioner-friendly English. Not academic or corporate.
- Actionable and specific, not vague.
- Each stage should feel distinct; don't recycle phrases across stages.
- **Never invent ENAC content.** All doctrinal and process content must come from documents Jason provides or his explicit instructions.

---

## Design Rules

- Shadows: subtle, e.g. `0 1px 4px rgba(0,94,185,0.10)`
- Border radius: cards `10px`, buttons `7–8px`, badges `20px`
- Card padding `20–24px`; section gaps `12–14px`
- Body text line-height `1.6–1.7`
- Every button needs hover/active feedback
- Animate only `transform` and `opacity`
- Must work at 320px width and scale up; check 375px, 768px and 1024px

---

## Resources & Tools Tab

- Each stage has a `tools` array of categories, each with items (`name`, `description`, `url`)
- Items without a real link show a **"Coming Soon"** badge
- Never give an item a link or mark it available unless the actual resource has been provided
- Reference/cohort reading lives in categories marked `isReference: true`
- Resources come from the "ENAC CG to CP" Google Drive folder

---

## Ask AI Tab

- Update the system prompt whenever significant new content is added to the stages
- Suggested questions should be stage-specific
- The AI must not make up ENAC-specific content; if the system prompt doesn't cover something, it should say so

---

## What Not to Do

- Don't use HUBB colours or branding beyond the footer credit
- Don't rename stages or add tabs unless asked
- Don't use Tailwind classes
- Don't invent ENAC content
- Don't merge prototype features into `App.jsx` unless asked
- Don't commit or push without showing the diff and getting confirmation
