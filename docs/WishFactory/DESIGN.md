# Design System Strategy: The Ethereal Editorial

## 1. Overview & Creative North Star

The Creative North Star for this design system is **"The Digital Alchemist."**

Unlike standard social platforms that prioritize rapid-fire consumption and rigid "feed" structures, this system treats digital space as a sacred gallery for intention. We move away from the "Dashboard" and the "Clone" by embracing **Intentional Asymmetry**. We do not use center-aligned grids; we use staggered verticality and overlapping "Wishes" to create a sense of depth and discovery. The interface should feel like an high-end art monograph—expensive, quiet, and deeply considered.

Text is our only medium. Therefore, typography is not just for reading; it is the primary visual texture. Through high-contrast scale shifts and ethereal glass layers, we transform simple desires into prestigious artifacts.

---

## 2. Colors: The Midnight Spectrum

The palette is rooted in `surface` (`#131316`), a deep, obsidian base that allows our "ethereal" accents to vibrate.

- **Primary (`primary` `#c6c6c6`):** Used for silver-toned essential text and high-importance "Wishes."
- **Secondary & Tertiary (`secondary` `#b6c4ff`, `tertiary` `#c5c5d8`):** These provide the "iridescent" highlights. Use `secondary` for interactive Remixes and `tertiary` for subtle metadata.
- **The "No-Line" Rule:** Explicitly prohibit 1px solid borders for sectioning. We define boundaries exclusively through tonal shifts. A "Weekly Top" list should sit on `surface-container-high` against a `surface` background. No lines. No boxes.
- **Surface Hierarchy & Nesting:** Treat the UI as stacked sheets of smoked glass.
  - **Base:** `surface` (`#131316`)s
  - **Sectioning:** `surface-container-low` (`#1b1b1e`)
  - **Interactive Elements:** `surface-container-high` (`#2a2a2d`)
- **The "Glass & Gradient" Rule:** Floating "Wishes" must utilize Glassmorphism. Use a semi-transparent `surface-container-highest` with a `backdrop-filter: blur(20px)`. To add "soul," apply a 15% opacity linear gradient from `primary` to `secondary` across the background of major CTA containers.

---

## 3. Typography: Editorial Authority

We utilize a sharp contrast between the "Newsreader" serif and the "Manrope" sans-serif to create a prestigious, editorial atmosphere.

- **Display & Headline (Newsreader):** Use `display-lg` for the core text of a "Wish." It should feel like a headline in an elite fashion magazine. Tracking should be slightly tightened (-0.02em) to increase the "prestige" feel.
- **Body & Title (Manrope):** Use `body-lg` for functional descriptions and `title-sm` for "Remix" attributions. The clean sans-serif acts as the grounded anchor to the more expressive serif headlines.
- **Text as Art:** In the absence of photos, use `headline-lg` for short-form wishes. Let the letterforms breathe. Use the `spacing-20` scale to create massive margins around short text blocks, forcing the eye to focus on the intent.

---

## 4. Elevation & Depth

Depth is achieved through **Tonal Layering**, not shadows or strokes.

- **The Layering Principle:** To lift a "Remix" layer above a "Wish," transition from `surface-container-low` to `surface-container-highest`. The eye perceives the lighter grey as being physically closer to the viewer.
- **Ambient Shadows:** For "Weekly Tops" or floating modals, use a highly diffused shadow: `0 24px 48px rgba(0, 0, 0, 0.4)`. The shadow must never be a hard edge; it should feel like a soft glow in reverse.
- **The "Ghost Border" Fallback:** If a tactile edge is required for accessibility, use the `outline-variant` token at **15% opacity**. It should be barely perceptible—a "whisper" of a boundary.
- **Glassmorphism Depth:** When a user "remixes" a wish, the new text block should use a glass background. This allows the original "Wish" to blur softly underneath, visually representing the "layering" of collaborative desires.

---

## 5. Components

### Wishes (Text Blocks)

The core unit of the platform.

- **Container:** No border. `surface-container-low` background.
- **Typography:** `display-md` (Serif).
- **Spacing:** `padding-8` (2.75rem) to ensure the text feels "curated."
- **Interaction:** On hover, the background shifts to `surface-container-high` with a subtle `secondary` glow (5px blur).

### Remixes (Collaborative Layers)

- **Style:** Offset from the parent Wish by `spacing-3`.
- **Effect:** Glassmorphism (semi-transparent `surface-variant` + 12px blur).
- **Typography:** `title-md` for the contributor, `body-lg` for the remixed text.

### Buttons (The Alchemist’s Tools)

- **Primary:** `primary` background, `on-primary` text. `roundness-sm` (0.125rem). Avoid fully rounded "pill" shapes; they feel too "tech." A subtle 4px corner feels more architectural.
- **Secondary:** No background. `outline-variant` (20% opacity) "Ghost Border." `primary` text.

### Lists (Weekly Tops)

- **Structure:** No dividers. Use `spacing-10` between items.
- **Hierarchy:** The #1 spot uses `display-sm` (Serif), while #2–#10 use `headline-sm`.
- **Background:** Use a vertical gradient fade from `surface-container-highest` at the top of the list to `surface` at the bottom.

### Input Fields

- **Style:** Minimalist. Only a bottom "Ghost Border" (20% `outline-variant`).
- **Focus:** The border animates to 100% `secondary` with a soft `secondary_container` outer glow.
- **Label:** `label-md` in `on-surface-variant`.

---

## 6. Do’s and Don’ts

### Do:

- **Embrace Negative Space:** If a Wish is only three words, let it sit in the center of a massive `surface-container` with at least `spacing-16` of padding.
- **Asymmetric Grids:** Offset your columns. If the "Weekly Top" is on the right, let the "Main Feed" start 15% from the left margin.
- **Tonal Transitions:** Use `surface-container` tiers to guide the eye. The most important content should always be on the "highest" (lightest) surface.

### Don’t:

- **Don't use 1px Dividers:** Never use a solid line to separate two pieces of content. Use white space or a background color shift.
- **Don't use Standard Emojis:** They break the "Editorial" prestige. If icons are needed, use ultra-thin (1pt) stroke icons in `primary-fixed-dim`.
- **Don't use "Pill" Shapes:** Avoid `roundness-full` for buttons or tags. It feels like a standard SaaS app. Stick to `roundness-sm` for a bespoke, custom-tailored feel.
- **Don't Center Everything:** Center-alignment is for templates. Use purposeful left or right alignment with staggered vertical offsets to create an "Alchemist" aesthetic.
