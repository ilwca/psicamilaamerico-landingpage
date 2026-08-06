@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server (Next.js, App Router).
- `npm run build` — production build.
- `npm run lint` — ESLint (flat config, `eslint-config-next`).

There is no test suite yet.

## Project status

Six sections exist so far, in page order: **Hero**, **Sobre ("Sobre mim")**, **Services ("Atendimento")**, **Process ("Como funciona")**, **Contact ("Vamos conversar")**, and **Footer**. The full one-page structure is now in place; further work is refining copy, media, and interaction detail within these sections rather than adding new ones — confirm with the user before introducing another top-level section. As of 2026-08-06, every section except Hero was restyled to the "Refined Organicism" visual language from `style/DESIGN.md` (glassmorphism, blobs, pills) — see the Design system section below.

**Stack:** Next.js (App Router, TypeScript) + Tailwind CSS v4 (CSS-based `@theme`, no `tailwind.config.js`) + Framer Motion for scroll-driven animation. No shadcn/ui was added — no section so far needs forms/dialogs/etc.; revisit if a future requirement does. Copy-paste component references (Skiper UI, ReactBits) are fine to adapt in-place since they're just Tailwind/Framer Motion JSX, not installed dependencies — no stack change needed for those. GSAP would be additive too, but only reach for it if a future interaction needs something Framer Motion's `useScroll`/`useTransform` genuinely can't do (e.g. complex pinned multi-step timelines); avoid running both engines on the same element.

## Architecture

- `src/app/layout.tsx` — loads fonts (Frunchy via `next/font/local` from `src/fonts/Frunchy.ttf`, Montserrat via `next/font/google`) and exposes them as CSS variables consumed by the Tailwind theme.
- `src/app/globals.css` — the entire design system lives here: the Tailwind v4 `@theme` block (colors, incl. the "fixed" roles, type scale, `shadow-soft`/`shadow-glow`) is a direct translation of `base/DESIGN.md` + `style/DESIGN.md`'s frontmatter tokens (identical hex values, just a superset), plus two `@utility` classes (`glass-card`, `glass-card-dark`, `blob-shape` + its `blob-morph` keyframes) implementing `style/DESIGN.md`'s Refined Organicism treatment. When adding new UI, prefer existing tokens/utilities (`bg-primary`, `text-on-surface-variant`, `text-headline-lg`, `glass-card`, `blob-shape`, etc.) over inventing new values.
- `src/components/hero.tsx` — the scroll-driven hero. Structure: an oversized wrapper (`h-[300vh]`) containing a `sticky top-0 h-screen` viewport; `framer-motion`'s `useScroll`/`useTransform` map scroll progress within that wrapper to: photo opacity/scale, a warm tint overlay opacity, the brand mark's scale/opacity/rotation (growing from a small accent into an abstract frame-filling texture), and the copy's opacity/translate (fades out early). The photo uses a plain `<picture>` with breakpoint `<source>`s (not `next/image` art-direction, which doesn't support it) pointing at the three pre-cropped files in `public/images/`.
- `src/components/sobre.tsx` (formerly `about.tsx`) — two-column section, `whileInView` fade rather than Hero's scroll-jacking (that pinned-scroll treatment is meant to stay unique to the Hero). A short static gradient strip (not scroll-linked) carries the Hero's dark closing tone into this section's light `surface` background across a fixed ~96–128px band, so the seam still reads continuous without risking on-surface (near-black) text sitting over a dark background for most of the section — an earlier version spanned the whole gradient across the scroll-linked content and read as too dark/heavy for the brand. The portrait reuses `hero-square.jpg` (same photo shoot as the Hero crops, see below) inside a `glass-card` floating badge + `blob-shape` accent; a faint (`opacity-[0.07]`) echo of `logo-mark.svg` sits behind it, tying back to the Hero's brand-mark motif. The floating badge states a confirmed fact ("Mestra em Psicologia"), not an invented stat like years-of-experience.
- `src/components/services.tsx` — three `glass-card` cards with a Frunchy-numeral badge overlapping each card's top edge (no icon library) on a `surface-container-low` section background with a blurred blob accent, alternating the tonal layer from Sobre's plain `surface`.
- `src/components/process.tsx` — pull-quote block + 3-step "como funciona" list, both restyled as `glass-card`s with overlapping numbered badges and a connecting line (desktop). The quote is Camila's own philosophy statement, **not** a patient testimonial: CFP Resolution 11/2018 restricts psychologists from publicizing client endorsements, so this section deliberately substitutes for the usual "social proof" slot rather than fabricating reviews — there is intentionally no "Depoimentos" section. Real client testimonials should only replace it after an explicit ethics/compliance check. The decorative quote-mark glyph is set in `font-body` (Montserrat), not `font-display` — see the Frunchy glyph-coverage note below.
- `src/components/contact.tsx` — CTA-only (WhatsApp + email buttons), no `<form>`: there's no backend/API route in this app to receive submissions, so a form would silently do nothing. Styled as a large `rounded-[3rem]` `primary`-filled card with blurred blob glows and pill buttons. The WhatsApp number and email address are obvious placeholders (`5500000000000` / `contato@camilaamerico.com.br`) — replace before launch.
- `src/components/footer.tsx` — dark `inverse-surface` bookend (mirrors the Hero's dark tone at the other end of the page, which is why it keeps a dark surface even though Hero itself wasn't restyled), brand mark + wordmark, pill-chip anchor nav to the other sections' `id`s, WhatsApp/email links reusing Contact's placeholders, and a placeholder CRP number.
- `public/images/` — pre-cropped hero photo (`hero-desktop.jpg` 16:9, `hero-square.jpg` 1:1, `hero-mobile.jpg` portrait) and the brand mark (`logo-mark.svg`). These are copies of files from `base/`; if the source photo/logo changes, re-copy here rather than editing in place. Note `base/pic-hero.jpeg`/`pic-hero-1.jpeg`/`pic-hero-2.jpg` are the same single photo shoot as these three crops (verified byte-identical) — there is only one real production photo in `base/` right now, so any new section needing imagery either reuses one of these three crops (as Sobre now does with `hero-square.jpg`) or waits for new photography, rather than pretending there's a different pose available.

## Content notes

- The About section's bio copy and specialty tags are placeholder editorial content (grounded only in the confirmed facts: clinical psychologist, Master's in Psychology) — replace with the real bio, CRP registration number, and confirmed specialties when available. Don't treat this copy as final/approved.
- Services, Process, Contact, and Footer copy (service descriptions, the process quote/steps, CTA copy, WhatsApp number, email address, CRP number, business hours) are all placeholder, invented to fill out the page structure per explicit instruction. None of it is approved — treat all of it as provisional until the user supplies real content.

## Design system

Two layered documents govern styling now — read both before styling anything rather than guessing values:

- **`base/DESIGN.md` — "Earth & Empathy"** (color/type tokens, flatter depth treatment). Still the source of truth for every color and type-scale value in `globals.css`'s `@theme` block, and for **Hero specifically**, which was never restyled and keeps its original flat/tonal treatment.
- **`style/DESIGN.md` — "Refined Organicism"** (2026-08-06). Adopted for every section *except* Hero: Sobre, Services, Process, Contact, Footer. Same color hex values as `base/DESIGN.md` (it's the identical M3 token set, including the "fixed" roles like `primary-fixed`/`tertiary-fixed` now added to `globals.css` for this) — what changes is the shape/depth language layered on top. This supersedes the older "avoid pill/glass, prefer flat tonal layering" rule for those five sections; Hero is the one place that rule still applies as originally written.

**What "Refined Organicism" means in practice here:**
- **Glassmorphism:** the `glass-card` utility (`globals.css`) — semi-transparent `surface-container-lowest` + `backdrop-blur` + a soft `deep-earth`-tinted shadow + a hairline `outline-variant` border. `glass-card-dark` is the same idea against `inverse-surface` (used in Footer/Contact's dark contexts). Prefer these over flat opaque fills for cards/badges/chips.
- **Blobs:** the `blob-shape` utility (animated organic border-radius, `globals.css`) plus large blurred `rounded-full` glow accents (`blur-[80–120px]`, low opacity, tinted with a brand color — never neutral gray) for ambient section decoration.
- **Pills:** buttons, nav links, and tag chips use `rounded-full`. This reverses the prior "avoid pill-shaped elements" rule — that rule now only binds Hero.
- **Overlapping badges:** Services/Process cards get extra top padding (`pt-12`/`pt-14`) so a numeral or step-number badge can overlap the card's top edge (`absolute -top-6`/`-top-8`), echoing `style/code.html`'s card treatment.
- Large containers still use generous, soft radii (`rounded-[2rem]`/`rounded-[3rem]`), just bigger than Earth & Empathy's original 4–8px scale.
- **Frunchy glyph coverage:** Frunchy (single 400 weight) is missing some glyphs (confirmed: capital `É` renders as tofu). Any large *decorative* glyph (quote marks, symbols) should default to `font-body` (Montserrat) unless the exact character has been visually confirmed in Frunchy first.
- **Type:** Frunchy for all headline/display styles via `font-display`; Montserrat for body/label text via `font-body`. Body text must not go below 16px; headline sizes shrink for mobile using the `-mobile` type scale variants (e.g. `text-headline-lg-mobile`) rather than fluid scaling.
- **Color roles:** `primary` (#6f3b18, actions), `primary-container` (#8c522d, the warmer terracotta accent used in prose/branding), `secondary`/`secondary-container` (beige-sand surfaces), `tertiary` (#703a25, high-contrast accents), the "fixed" roles (`primary-fixed`, `secondary-fixed`, `tertiary-fixed` + `-dim` variants) for blob/glow accents, plus the full surface/on-surface scale for backgrounds and text. Base canvas is `surface` (`#fff8f5`), not pure white.
- **Layout:** 12-column grid, 24px gutters, 8px spacing unit, 1140px max container width (`max-w-[1140px]`). Generous inter-section spacing (64px+, often 128px+ under the new system) is intentional. Mobile: single column, 20px side margins.
- **Depth:** Shadows (`shadow-soft`/`shadow-glow` theme tokens) stay large/diffuse/low-opacity and tinted with `deep-earth`/tertiary brown, never sharp/neutral-gray — that part of the original rule is unchanged, just now paired with blur/glass instead of pure flat tonal shifts.

## Working with the user on this project

- Confirm content/copy and section scope with the user before building — this is a slow, deliberate, section-by-section build, not a full-page scaffold.
- The reference `hero-1.jpg`…`hero-6.png` images in `base/` are storyboards for the zoom-into-logo effect, not assets to embed as-is in the final page.
