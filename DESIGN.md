---
name: Warm Confetti & Cream
colors:
  surface: '#fdf9f3'
  surface-dim: '#dddad4'
  surface-bright: '#fdf9f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ed'
  surface-container: '#f1ede7'
  surface-container-high: '#ebe8e2'
  surface-container-highest: '#e6e2dc'
  on-surface: '#1c1c18'
  on-surface-variant: '#574142'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f4f0ea'
  outline: '#8a7172'
  outline-variant: '#ddbfc0'
  surface-tint: '#a63745'
  primary: '#a33443'
  on-primary: '#ffffff'
  primary-container: '#c34c5a'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb2b6'
  secondary: '#805600'
  on-secondary: '#ffffff'
  secondary-container: '#fdc266'
  on-secondary-container: '#754e00'
  tertiary: '#944523'
  on-tertiary: '#ffffff'
  tertiary-container: '#b35c39'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdadb'
  primary-fixed-dim: '#ffb2b6'
  on-primary-fixed: '#40000d'
  on-primary-fixed-variant: '#861e30'
  secondary-fixed: '#ffddaf'
  secondary-fixed-dim: '#f6bc61'
  on-secondary-fixed: '#281800'
  on-secondary-fixed-variant: '#614000'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb59a'
  on-tertiary-fixed: '#370d00'
  on-tertiary-fixed-variant: '#793010'
  background: '#fdf9f3'
  on-background: '#1c1c18'
  surface-variant: '#e6e2dc'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 3.5rem
    fontWeight: '700'
    lineHeight: 4rem
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 2.5rem
    fontWeight: '700'
    lineHeight: 3rem
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: 2.75rem
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
  headline-md:
    fontFamily: Playfair Display
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.6rem
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.4rem
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: 1.25rem
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.04em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-md: 1.5rem
  margin: 1.25rem
  margin-md: 2rem
  margin-lg: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system embodies heartfelt celebration, warmth, and nostalgic charm tailored for digital greeting cards. It blends tactile editorial stationery aesthetics with modern, celebratory micro-interactions. The target audience spans individuals curating bespoke, heartfelt birthday moments for friends, family, and loved ones on mobile devices.

### Design Movement: Tactile Editorial Warmth & Festive Modernism
- **Tactile Paper Quality:** Surfaces utilize creamy, organic textures reminiscent of heavyweight cotton greeting paper rather than flat synthetic plastics.
- **Warm Luminous Accents:** Highlights rely on soft ambient golds and delicate luminous drops rather than stark techno-neons.
- **Organic Flow:** Forms favor generous curves, pillowy softness, and human-crafted intimacy over rigid corporate grids.

## Colors

The palette is anchored in warm celebratory warmth, avoiding stark digital whites or sterile cool grays:
- **Primary (`#D95D6A` - Rose Blush):** Used for focal headlines, primary celebratory action buttons, interactive hearts, and prominent badge emblems.
- **Secondary (`#DCA54C` - Soft Gilded Ochre):** Applied to festive metallic flourishes, foil-stamp effects, star ratings/wishes, and decorative border accents.
- **Tertiary (`#F08C65` - Warm Peach Blossom):** Powers secondary interactive accents, tags, envelope ribbons, and soft energetic gradients.
- **Neutral Canvas (`#FDF9F3` - Pure Warm Cream):** Forms the foundational paper background. Paired with deep warm mocha (`#3A2C2A`) for high-legibility typographic contrast that remains softer and warmer than pure pitch black.
- **Confetti Tones:** Soft sage mint (`#98B9A0`) and dusty sky lilac (`#9A8EC2`) serve as gentle contextual accents for scattered confetti illustrations and decorative stamp tags.

## Typography

Typography blends the graceful, emotive elegance of a high-end luxury greeting card with the effortless readability of modern mobile interfaces.

- **Headlines & Display:** Set in **Playfair Display**. It gives celebratory greetings, ages, and names a traditional letterpress and foil-embossed editorial presence.
- **Body & Labels:** Set in **Plus Jakarta Sans**. Its rounded terminals, open counters, and humanistic geometry harmonize with the soft card aesthetics while guaranteeing exceptional clarity for personalized notes, wish messages, and interactive buttons on compact mobile screens.
- **Mobile Responsive Scale:** Headings above `2rem` automatically downscale via mobile-specific tokens (`display-lg-mobile`, `headline-lg-mobile`) to eliminate awkward wrapping on narrow screens.

## Layout & Spacing

The layout philosophy centers on a single-column, mobile-first card canvas that expands into a balanced, centered greeting viewport on tablets and desktops.

- **Mobile Canvas:** Full bleed with an intentional outer safe margin (`margin: 1.25rem`). Card components mimic the physical aspect ratio of folded greetings (4:5 or 3:4).
- **Tablet & Desktop Reflow:** On screens wider than `768px`, the greeting card anchors centrally with a maximum container width of `680px`, surrounded by subtle ambient warm margins (`margin-lg: 3rem`) to preserve the intimate feel of holding an envelope and letter.
- **Rhythm & Stacking:** Micro-spacing inside greeting elements (`space-xs` to `space-sm`) maintains tight affinity between celebratory icons and badges, while `space-lg` and `space-xl` cleanly separate greeting chapters (Hero Cover -> Heartfelt Note -> Interactive Wish Action).

## Elevation & Depth

Visual depth is achieved through tactile stationery layering, subtle warm glow, and ambient cast shadows rather than synthetic gray drop-shadows.

- **Foil & Ambient Glow:** Elevated active states, envelope flaps, and interactive wish triggers cast a warm, tinted amber-rose aura: `0 8px 30px -4px rgba(217, 93, 106, 0.16), 0 4px 14px -2px rgba(220, 165, 76, 0.12)`.
- **Deckled Stationery Layering:** Interactive floating cards rest on slightly rotated background layers (`rotate-1` / `-rotate-1`), using soft ambient shadows (`0 10px 25px -5px rgba(58, 44, 42, 0.08)`) to mimic folded paper nestled inside a premium envelope liner.
- **Surface Contrast:** Surface borders are low-contrast and warm (`rgba(220, 165, 76, 0.22)`), evoking metallic foil-stamped edging.

## Shapes

The shape system adopts a pill-shaped and deeply rounded profile (`roundedness: 3`). 

- **Greeting Cards & Envelopes:** Use generous radii (`2rem` / `3rem` on desktop) evoking rounded die-cut stationery cards.
- **Chips, Badges & CTA Buttons:** Use full pill curves (`rounded-full`) to communicate warmth, accessibility, and playful tactile touch.
- **Form Controls:** Text inputs, message fields, and photo frames maintain softened curves (`1.25rem` to `1.5rem`) to eliminate harsh geometric edges throughout the experience.

## Components

### 1. Cards (Greeting Card Canvas & Envelope)
- **Base Surface:** Styled with cream neutral (`#FDF9F3`) or faint rose-tinted ivory, bounded by a soft gilded hairline stroke (`border border-amber-200/50`).
- **Interactive Variants:** Multi-layered cards feature a faux envelope flap or slight tilt animation upon tap/hover.
- **Confetti Bed:** Supports an absolute-positioned floating layer with SVG confetti petals in soft gold, blush rose, and pastel sage.

### 2. Buttons
- **Primary Celebratory Button:** Full-pill silhouette with a warm gradient from Rose Blush (`#D95D6A`) to Peach (`#F08C65`), white bold text, and a soft warm shadow that expands slightly on tap (`active:scale-95 transition-transform`).
- **Secondary Ribbon Button:** Transparent or soft cream surface with gilded border (`#DCA54C`), serif or semibold sans typography, and subtle ochre hover glow.

### 3. Chips & Confetti Badges
- **Wishes & Milestones:** Pill-shaped tags (`rounded-full`) filled with translucent pastel tints (`bg-rose-50 text-rose-700` or `bg-amber-50 text-amber-800`), featuring a micro sparkle or candle icon prefix.

### 4. Interactive Candle & Wish Triggers
- **Toggle/Action:** A dedicated component allowing recipients to "Make a Wish" or "Blow the Candle", shifting states via smooth CSS transitions, triggering dynamic floating sparkles and micro-animations.

### 5. Input Fields (Custom Dedications & Signatures)
- **Signature Note Area:** Generous padding with warm off-white fill (`#FFFDFB`), soft rose borders on focus (`focus:border-[#D95D6A] focus:ring-2 focus:ring-[#D95D6A]/20`), and an optional cursive/script decorative placeholder style.

### 6. Checkboxes & Stamp Selectors
- **Stamp Selector (Checkable):** Styled like postal stamps or wax seals, turning solid gilded ochre or rose with an inset checkmark or heart icon when active.