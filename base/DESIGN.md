---
name: Earth & Empathy
colors:
  surface: '#fff8f5'
  surface-dim: '#f5d3c2'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1ea'
  surface-container: '#ffeadf'
  surface-container-high: '#ffe3d4'
  surface-container-highest: '#fddcca'
  on-surface: '#29180d'
  on-surface-variant: '#52443c'
  inverse-surface: '#402c20'
  inverse-on-surface: '#ffede5'
  outline: '#85746b'
  outline-variant: '#d7c2b8'
  surface-tint: '#89502b'
  primary: '#6f3b18'
  on-primary: '#ffffff'
  primary-container: '#8c522d'
  on-primary-container: '#ffd3bb'
  inverse-primary: '#ffb68c'
  secondary: '#725a46'
  on-secondary: '#ffffff'
  secondary-container: '#fadac0'
  on-secondary-container: '#765e49'
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
  secondary-fixed: '#fddcc3'
  secondary-fixed-dim: '#e0c1a8'
  on-secondary-fixed: '#281808'
  on-secondary-fixed-variant: '#584230'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59a'
  on-tertiary-fixed: '#370e01'
  on-tertiary-fixed-variant: '#6e3823'
  background: '#fff8f5'
  on-background: '#29180d'
  surface-variant: '#fddcca'
typography:
  display-lg:
    fontFamily: Frunchy
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Frunchy
    fontSize: 36px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Frunchy
    fontSize: 28px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Frunchy
    fontSize: 22px
    fontWeight: '400'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-lg:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-md:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Frunchy
    fontSize: 30px
    fontWeight: '400'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1140px
  gutter: 24px
  margin-mobile: 20px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 64px
---

## Brand & Style

This design system is crafted for a clinical psychology practice, focusing on the intersection of professional expertise and human warmth. The brand personality is grounded, empathetic, and sophisticated. It seeks to evoke a sense of safety and serenity, providing a digital "safe space" for clients.

The visual style is a blend of **Minimalism** and **Modern Organic**. It prioritizes high-quality negative space and a restrained color palette to reduce cognitive load. The aesthetic avoids the sterility of traditional medical interfaces, opting instead for a tactile, high-end editorial feel that suggests both care and clinical excellence.

## Colors

The palette is rooted in earth tones to provide a sense of stability and natural comfort. 

- **Primary (#8C522D):** A rich Terracotta used for primary actions and key brand moments. It represents warmth and vitality.
- **Secondary (#CAAC94):** A soft Beige-Sand used for large surface areas, secondary buttons, and decorative elements.
- **Tertiary (#401504):** A deep Espresso Brown reserved for high-contrast typography and sophisticated accents.
- **Neutral (#D1B2A1):** A muted Taupe for borders, disabled states, and subtle backgrounds.

The default mode is **Light**, utilizing a very soft off-white (`#F8F5F2`) as the base canvas to prevent the harshness of pure white while maintaining a clean, professional look.

## Typography

The typography strategy balances character with legibility. **Frunchy** is used for headlines to provide a distinctive, elegant, and personal touch that feels like a signature of quality. **Montserrat** is the workhorse for all functional text, providing a clean, geometric counterpoint that ensures readability and modern professionalism.

For mobile devices, display and large headline sizes should be scaled down to prevent excessive word-breaking. Montserrat should maintain a minimum of 16px for body text to ensure accessibility for all age groups.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain an editorial, balanced feel, centering content with generous lateral margins. 

- **Grid:** A 12-column grid system with 24px gutters.
- **Rhythm:** An 8px base unit governs all spatial relationships. 
- **Breathe:** Use high-density "stack" spacing (64px+) between major sections to allow the user's eyes to rest, reflecting the unhurried pace of a therapeutic environment.
- **Mobile:** Transition to a single-column layout with 20px side margins. Padding within components should be slightly increased to facilitate touch interaction.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layers** rather than heavy shadows. 

- **Surfaces:** Use subtle shifts in background color (e.g., placing a Secondary Beige card on a Soft-White background) to indicate depth.
- **Outlines:** Low-contrast outlines using the Neutral color (#D1B2A1) are preferred for defining form fields and containers.
- **Shadows:** When necessary for functional depth (like floating action buttons or dropdowns), use "Ambient Shadows"—extremely diffused (20px-40px blur), low opacity (8-10%), and tinted with the Tertiary Brown color to maintain warmth.

## Shapes

The shape language is **Soft**. Sharp corners are avoided to minimize visual "aggression," but we also avoid fully pill-shaped elements to maintain a professional, structured architectural feel. 

Standard components use a `0.25rem` (4px) radius. Larger containers or imagery may use `0.5rem` (8px) to emphasize the welcoming nature of the brand.

## Components

- **Buttons:** Primary buttons use the Terracotta background with White or light Beige text. Secondary buttons are outlined in Neutral or Primary color. All buttons feature a subtle transition on hover, deepening the color slightly.
- **Input Fields:** Use a minimalist approach with a bottom-only border or a very light Neutral stroke. Labels should use `label-md` in Montserrat.
- **Cards:** Cards should be flat with a subtle background color shift (Secondary Beige). Use generous internal padding (32px) to maintain the "minimalist" feel.
- **Chips/Tags:** Used for therapy specialties. These should have a light Beige background and Espresso text, using the `label-md` type style.
- **Lists:** Use custom bullet points (small circles or organic shapes) in the Primary Terracotta color.
- **Specialty Components:** 
    - *Testimonial Blocks:* Italicized Montserrat Body text centered within a Secondary Beige container.
    - *Booking Calendar:* Clean, grid-based with plenty of whitespace, using the Primary color for selected dates.