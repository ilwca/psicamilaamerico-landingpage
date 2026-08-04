@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server (Next.js, App Router).
- `npm run build` — production build.
- `npm run lint` — ESLint (flat config, `eslint-config-next`).

There is no test suite yet.

## Project status

Two sections exist so far: the **Hero** and the **About ("Sobre mim")** section. Scope is intentionally narrow and incremental — do not add further sections (services, testimonials, booking, footer, etc.) unless explicitly requested.

**Stack:** Next.js (App Router, TypeScript) + Tailwind CSS v4 (CSS-based `@theme`, no `tailwind.config.js`) + Framer Motion for scroll-driven animation. No shadcn/ui was added — the two current sections don't need a component library yet; revisit if future sections need forms/dialogs/etc.

## Architecture

- `src/app/layout.tsx` — loads fonts (Frunchy via `next/font/local` from `src/fonts/Frunchy.ttf`, Montserrat via `next/font/google`) and exposes them as CSS variables consumed by the Tailwind theme.
- `src/app/globals.css` — the entire design system lives here as a Tailwind v4 `@theme` block (colors, type scale). This is a direct translation of `base/DESIGN.md`'s frontmatter tokens — when adding new UI, prefer existing tokens (`bg-primary`, `text-on-surface-variant`, `text-headline-lg`, etc.) over inventing new values.
- `src/components/hero.tsx` — the scroll-driven hero. Structure: an oversized wrapper (`h-[300vh]`) containing a `sticky top-0 h-screen` viewport; `framer-motion`'s `useScroll`/`useTransform` map scroll progress within that wrapper to: photo opacity/scale, a warm tint overlay opacity, the brand mark's scale/opacity/rotation (growing from a small accent into an abstract frame-filling texture), and the copy's opacity/translate (fades out early). The photo uses a plain `<picture>` with breakpoint `<source>`s (not `next/image` art-direction, which doesn't support it) pointing at the three pre-cropped files in `public/images/`.
- `src/components/about.tsx` — static two-column section; its background gradient starts from the same tone the hero's tint animates toward, so the transition between sections reads as continuous rather than a hard cut.
- `public/images/` — pre-cropped hero photo (`hero-desktop.jpg` 16:9, `hero-square.jpg` 1:1, `hero-mobile.jpg` portrait) and the brand mark (`logo-mark.svg`). These are copies of files from `base/`; if the source photo/logo changes, re-copy here rather than editing in place.

## Content notes

- The About section's bio copy and specialty tags are placeholder editorial content (grounded only in the confirmed facts: clinical psychologist, Master's in Psychology) — replace with the real bio, CRP registration number, and confirmed specialties when available. Don't treat this copy as final/approved.

## Design system (`base/DESIGN.md`)

Name: **"Earth & Empathy"**. Read `base/DESIGN.md` before styling anything rather than guessing values — `globals.css` mirrors its frontmatter token-for-token.

- **Brand feel:** grounded, empathetic, sophisticated editorial — minimalism + "modern organic". Avoid sterile/clinical UI conventions; avoid pill-shaped or sharp-cornered elements (soft, restrained radii: 4px standard, 8px for large containers/imagery).
- **Type:** Frunchy (single 400 weight) for all headline/display styles via the `font-display` utility; Montserrat for body/label text via `font-body`. Body text must not go below 16px; headline sizes shrink for mobile using the `-mobile` type scale variants (e.g. `text-headline-lg-mobile`) rather than fluid scaling.
- **Color roles:** `primary` (#6f3b18, actions), `primary-container` (#8c522d, the warmer terracotta accent used in prose/branding), `secondary`/`secondary-container` (beige-sand surfaces), `tertiary` (#703a25, high-contrast accents), plus the full surface/on-surface scale for backgrounds and text. Base canvas is `surface` (`#fff8f5`), not pure white.
- **Layout:** 12-column grid, 24px gutters, 8px spacing unit, 1140px max container width (`max-w-[1140px]`). Generous inter-section spacing (64px+) is intentional. Mobile: single column, 20px side margins.
- **Depth:** Prefer tonal-layer surface shifts over shadows. When shadows are needed, keep them large/diffuse/low-opacity and tinted with the tertiary brown, never sharp/neutral-gray.

## Working with the user on this project

- Confirm content/copy and section scope with the user before building — this is a slow, deliberate, section-by-section build, not a full-page scaffold.
- The reference `hero-1.jpg`…`hero-6.png` images in `base/` are storyboards for the zoom-into-logo effect, not assets to embed as-is in the final page.
