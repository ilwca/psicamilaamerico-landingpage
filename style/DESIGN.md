---
name: Earthy Serenity
colors:
  surface: '#fff8f5'
  surface-dim: '#f5d4bb'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1e8'
  surface-container: '#ffeadb'
  surface-container-high: '#ffe3ce'
  surface-container-highest: '#fddcc3'
  on-surface: '#281808'
  on-surface-variant: '#52443c'
  inverse-surface: '#402c1b'
  inverse-on-surface: '#ffeee2'
  outline: '#85746b'
  outline-variant: '#d7c2b8'
  surface-tint: '#89502b'
  primary: '#6f3b18'
  on-primary: '#ffffff'
  primary-container: '#8c522d'
  on-primary-container: '#ffd3bb'
  inverse-primary: '#ffb68c'
  secondary: '#72594b'
  on-secondary: '#ffffff'
  secondary-container: '#fad9c7'
  on-secondary-container: '#765d4f'
  tertiary: '#703a25'
  on-tertiary: '#ffffff'
  tertiary-container: '#8c513a'
  on-tertiary-container: '#ffd2c2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbc9'
  primary-fixed-dim: '#ffb68c'
  on-primary-fixed: '#321200'
  on-primary-fixed-variant: '#6d3916'
  secondary-fixed: '#fddcca'
  secondary-fixed-dim: '#e0c0af'
  on-secondary-fixed: '#29180d'
  on-secondary-fixed-variant: '#584235'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59a'
  on-tertiary-fixed: '#370e01'
  on-tertiary-fixed-variant: '#6e3823'
  background: '#fff8f5'
  on-background: '#281808'
  surface-variant: '#fddcc3'
  deep-earth: '#47240D'
  muted-clay: '#7C5246'
  soft-parchment: '#FDF9F6'
typography:
  display-lg:
    fontFamily: Frunchy
    fontSize: 72px
    fontWeight: '400'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Frunchy
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Frunchy
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-md:
    fontFamily: Frunchy
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style
The design system is centered on a "Refined Organicism" philosophy, tailored for a high-end psychological practice. It aims to evoke a sense of grounded tranquility, exclusivity, and professional warmth. The target audience seeks a sanctuary for mental wellness that feels both sophisticated and deeply human.

The visual style blends **Minimalism** with **Glassmorphism** and **Tactile** elements. Heavy whitespace is balanced by organic, fluid shapes that suggest growth and movement. Translucent layers provide a "frosted" depth, while a palette of rich earthy tones ensures the experience feels anchored in nature and reliability. The aesthetic avoids clinical coldness in favor of a premium, boutique-like atmosphere.

## Colors
The palette is a curated selection of earthy chromatics. 
- **Primary (#8C522D):** Used for key actions and brand-heavy UI elements to provide a sturdy, grounded feel.
- **Secondary (#D1B2A1):** A soft, skin-tone adjacent hue used for secondary surfaces and supporting accents.
- **Tertiary (#401504):** A deep, dark brown reserved for high-contrast typography and critical navigational nodes.
- **Neutral (#CAAC94):** The foundation for backgrounds and large containers, providing a warm alternative to sterile grays.

`soft-parchment` serves as the global background color, ensuring the glassmorphic effects have a light, breathable base to interact with.

## Typography
The typographic hierarchy relies on the contrast between the artisanal, high-contrast curves of **Frunchy** and the geometric clarity of **Montserrat**.

- **Frunchy** is used exclusively for Display and Headline roles. Its fluid, script-like anatomy should be given ample breathing room to highlight its organic transitions.
- **Montserrat** handles all functional text. For labels and small caps, utilize wide tracking (0.1em) to maintain a premium, editorial feel. 
- Line heights are intentionally generous to improve legibility and reinforce the "calm" brand narrative.

## Layout & Spacing
The layout follows a **fluid grid** model with a generous 12-column structure for desktop. To maintain the "innovative" feel, elements should often break the strict vertical lines of the grid using offset margins or organic "blob" containers that bleed off the screen edges.

- **Mobile:** 4-column grid with 20px side margins. 
- **Desktop:** Fixed 1200px max-width container for content, centered within the viewport.
- **Rhythm:** Use an 8px base unit. Section spacing should be aggressive (128px+) to create a gallery-like, high-end experience that doesn't feel crowded.

## Elevation & Depth
Depth is communicated through **Glassmorphism** and **Tonal Layering**. 

1. **Surface Layers:** Primary surfaces use a semi-transparent version of `soft-parchment` (80% opacity) with a 20px backdrop blur.
2. **Ambient Shadows:** Shadows are soft, long, and tinted with the `deep-earth` color rather than pure black. This creates a more natural, "sunlight" effect. 
3. **Outlines:** Use thin, low-contrast borders (1px) in `secondary` or `neutral` tones to define edges on glass elements without breaking the softness.
4. **Organic Depth:** Overlap fluid vector shapes with varying gradient opacities to create a sense of three-dimensional "flow."

## Shapes
The design system prioritizes **Rounded** shapes to mirror natural forms and evoke comfort. Standard UI components (cards, buttons) use a 0.5rem (8px) base radius.

However, for decorative elements and large imagery, use **Organic Masks**. These are non-geometric, hand-drawn bezier paths that mimic leaves, pebbles, or water droplets. Buttons should maintain a more structured "Rounded" or "Pill" shape to ensure clear affordance, while background "blobs" should remain fluid and asymmetrical.

## Components
- **Buttons:** Primary buttons use a solid `primary` fill with white or `soft-parchment` text. Secondary buttons should be "glass" style with a 1px `primary` border and backdrop blur.
- **Cards:** Utilize the glassmorphic treatment. Borders should be subtle and tonal. Internal padding should be generous (32px+).
- **Input Fields:** Flat, bottom-border-only fields in `deep-earth` for a minimalist look, or fully enclosed fields with a very soft `neutral` background.
- **Chips/Badges:** Pill-shaped with `secondary` backgrounds and `tertiary` text.
- **Interactive Elements:** Hover states should involve a subtle "lift" (increased shadow diffusion) and a slight increase in backdrop blur intensity rather than a sharp color shift.
- **Lists:** Use organic icons (e.g., small leaf-shaped bullets) instead of standard dots to maintain brand consistency.