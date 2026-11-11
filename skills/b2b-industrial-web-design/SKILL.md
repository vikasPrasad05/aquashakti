---
name: b2b-industrial-web-design
description: >-
  Industry-agnostic design system and engineering blueprint for high-converting B2B industrial, engineering, turnkey plant, and technical manufacturing websites (inspired by Thermax Global, Culligan Commercial, Siemens, ABB). Includes visual design tokens, slow-motion hero section, interactive 3D mascot assistant card, dedicated product detail architectures, technical specs tables, and lead-generation quote flows.
---

# Enterprise B2B Industrial & Engineering Web Design System

A comprehensive, **point-to-point, industry-agnostic specification** for designing, structuring, and developing enterprise-grade B2B websites. Use this skill whenever building or refactoring a website for manufacturing, turnkey engineering plants, heavy equipment, industrial machinery, HVAC, energy, water treatment, or technical systems.

---

## 1. Visual Language & Token Architecture

All projects adhering to this design system must define the following CSS custom properties in global stylesheet (`src/styles/global.css` or `:root`):

### 1.1 Color Palette Tokens

```css
:root {
  /* Corporate Authority Base (Footers, Dark Overlays, High-Contrast Sections) */
  --color-primary-dark: #001a40;          /* Deep Indigo / Navy — Never pure #000000 */
  --color-primary-dark-rgb: 0, 26, 64;

  /* Primary Brand Action (Buttons, Active States, Key Links, Brand Badges) */
  --color-brand-primary: #0059a8;         /* Engineering Blue (adapt to brand) */
  --color-brand-primary-hover: #004280;

  /* High-Urgency Action Accent (Search CTAs, Live Status, Urgent Badges) */
  --color-accent-vibrant: #e51b24;        /* Signal Red / Safety Orange */
  --color-accent-hover: #c4121a;

  /* Neutral Background Canvases */
  --color-bg-white: #ffffff;              /* Crisp White for main content cards */
  --color-bg-stone: #f6f4f2;              /* Warm Stone: Assistant cards, video banners */
  --color-bg-muted: #f8f9fa;              /* Technical data tables, subtle panels */
  --color-bg-border: rgba(0, 0, 0, 0.08); /* Clean dividers */

  /* High-Legibility Typography */
  --color-text-heading: #0f172a;          /* Slate 900 for high-contrast titles */
  --color-text-body: #334155;             /* Slate 700 for optimal readability */
  --color-text-muted: #64748b;            /* Slate 500 for captions, timestamps */

  /* Elevation Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 12px 36px rgba(0, 0, 0, 0.09);
  --shadow-hover: 0 16px 44px rgba(0, 0, 0, 0.12);

  /* Corner Radii */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-xl: 24px;
  --radius-full: 9999px;
}
```

### 1.2 Typography Hierarchy
*   **Headings**: Geometric / Modern Grotesque Sans (`font-family: 'Manrope', 'Plus Jakarta Sans', system-ui, sans-serif`).
    *   `Display (Hero)`: `clamp(2.5rem, 5vw, 3.75rem)` | `font-weight: 800` | `letter-spacing: -0.03em`.
    *   `H2 (Section Titles)`: `clamp(1.75rem, 3vw, 2.25rem)` | `font-weight: 700` | `letter-spacing: -0.02em`.
    *   `H3 (Card Titles)`: `1.25rem – 1.45rem` | `font-weight: 600`.
*   **Body & Technical Specs**: High-legibility neutral sans (`font-family: 'Inter', system-ui, sans-serif`).
    *   `Body`: `1rem (16px)` | `line-height: 1.65` | `font-weight: 400`.
    *   `Technical Tables & Data`: `0.875rem (14px)` with `font-variant-numeric: tabular-nums`.

---

## 2. Key Component Architectural Blueprints

### 2.1 Sticky Enterprise Navigation Header
*   **Position**: Fixed/Sticky (`top: 0; z-index: 100; backdrop-filter: blur(10px); background: rgba(255, 255, 255, 0.95);`).
*   **Non-Navigating Category Dropdowns (Strict Rule)**:
    *   If a menu item (e.g., "Products", "Turnkey Solutions", "Systems") acts as a dropdown container, its top-level element **must not navigate to a blank or 404 URL**.
    *   Implement as an interactive toggle button `<button type="button" class="dropdown-toggle" aria-expanded="false">` or a non-clickable container.
    *   Only individual child items navigate to their dedicated detail URLs.
*   **Direct RFQ & Contact Action**:
    *   Prominent right-side button group: Clickable Phone link (`tel:+...`) + WhatsApp pill + "Request Quote" trigger.

---

### 2.2 Cinematic Slow-Motion Hero Section
*   **Media**: Autoplay, muted, loop, playsinline background video (`.mp4` / `.webm`) showing high-tech industrial processes (clean fluid flow, robotic machinery, turbine rotation, cleanroom manufacturing).
*   **Contrast Overlay**:
    ```css
    .hero-overlay {
      background: linear-gradient(
        180deg,
        rgba(0, 26, 64, 0.6) 0%,
        rgba(0, 26, 64, 0.85) 100%
      );
    }
    ```
*   **Dual CTA Architecture**:
    *   `Primary`: High-emphasis button ("Get Engineering Proposal" or "Request Plant Quote") triggering a modal.
    *   `Secondary`: Ghost button ("Explore Equipment & Specs ↓") smooth-scrolling to product catalog.
*   **Enterprise Credibility Ribbon**: 4-part KPI counter row directly beneath hero:
    `[20+ Years Excellence] | [500+ Commissioned Plants] | [ISO 9001:2015 Certified] | [24/7 AMC Support]`.

---

### 2.3 Interactive 3D Mascot / AI Assistant Section ("The Thermax REDD Pattern")

A proven interactive pattern that increases visitor engagement and guides technical inquiries to the right product page.

#### Visual Layout:
```
┌────────────────────────────────────────────────────────────────────────┐
│ .mascot-assistant-card (background: #f6f4f2, border-radius: 22px)      │
│                                                                        │
│  ┌──────────────────┐  ┌────────────────────────────────────────────┐  │
│  │ 3D Character     │  │ Have any questions?                        │  │
│  │ Animated Video   │  │ Our [Brand] Technical Expert can help      │  │
│  │ (220px x 220px)  │  │                                            │  │
│  │                  │  │ ┌────────────────────────────────────────┐ │  │
│  │ Arrives on       │  │ │ Ask about [Capacity, Specs, Skids]...  │ │  │
│  │ Skateboard / Runs│  │ └──────────────────────────────────────[🔍]┘ │  │
│  └──────────────────┘  └────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

#### Strict Implementation Rules:
1.  **Exact Background Color Match**:
    *   The container card background **must match the video background precisely**: `#f6f4f2`.
    *   **CRITICAL ANTI-PATTERN**: Never apply `mix-blend-mode: multiply` on the video element. On light stone backgrounds, `multiply` darkens the video canvas, producing an ugly grey box border.
2.  **Scroll-Triggered Arrival Animation**:
    *   Use an `IntersectionObserver` (threshold `0.25`).
    *   When the card scrolls into viewport, trigger `video.currentTime = 0; video.play()`.
    *   The video plays the character skating/running into position (frames 1–8) and stops at the final standing frame.
    *   Clicking on the mascot restarts the arrival animation.
3.  **Dynamic Typewriter Placeholder**:
    *   Input field cycles through high-intent queries with a blinking cursor:
        *   `"Ask about [Core Plant/System] capacities and turnkey skids..."`
        *   `"Ask about [Process Type] & environmental consent norms..."`
        *   `"Ask about [Equipment Variant] technical specifications & datasheets..."`
        *   `"Ask about Custom Engineering, Capex/Opex & Quotations..."`
    *   Pauses typing on user focus, resumes on blur if input is empty.
4.  **Intelligent Keyword Routing & Fallback Modal**:
    *   When user submits the query:
        *   Check keywords against product catalogue (e.g. `ro`, `stp`, `boiler`, `hvac`, `filter`, `chiller`).
        *   If matched, route directly: `window.location.href = matchedProduct.url`.
        *   If query is general, pop open the **Technical Assistant Modal** with direct WhatsApp pre-filled message and immediate phone link.

---

### 2.4 Dedicated Product Detail Page Architecture

Every technical product or equipment variant listed in navigation **must have its own dedicated page** (`/products/product-slug`) with this 5-part architecture:

1.  **Hero & Technical Brief**:
    *   High-resolution equipment photograph or 3D CAD render.
    *   Capacity pill badge (e.g., `500 LPH to 100,000 LPH` or `10 kW to 2.5 MW`).
    *   Executive engineering overview + "Download Technical Datasheet (PDF)" button.
    *   "Request Custom Quote" primary CTA button.
2.  **Horizontal Equipment Gallery (`.img-row-horizontal`)**:
    *   Variants displayed in a single horizontal row (`display: flex; gap: 1.5rem; justify-content: center;`).
    *   Uniform card height, clean white borders, subtle box shadows.
    *   Never stack horizontally intended cards vertically on desktop screens.
3.  **Comprehensive Specifications Table**:
    *   Tabular layout with alternating zebra rows (`background: #ffffff` and `#f8f9fa`).
    *   Key parameters: Feed/Inlet conditions, MOC (Material of Construction: SS304/SS316/FRP/MS), Flow Rates, Automation Level (Manual / PLC-SCADA), Power & Footprint.
4.  **Industry Applications Grid**:
    *   Grid showcasing deployment sectors (e.g., Pharmaceuticals, Textiles, Automotive, Food & Beverage, Heavy Manufacturing, Commercial Real Estate).
5.  **Regulatory & Environmental Compliance**:
    *   Pollution Control Board norms, ISO/ASME/CE standards fulfilled by the equipment.

---

### 2.5 High-Converting Lead Capture (RFQ Modal)
*   **Trigger**: Available globally on all pages via navbar button, product pages, and mascot assistant card.
*   **Key Fields**:
    1.  Full Name & Company / Unit Name.
    2.  Work Email & WhatsApp Phone Number.
    3.  Selected Equipment / Plant System.
    4.  Required Capacity / Flow Rate / Sizing.
    5.  Technical Source Parameter (Feed analysis or specs notes).
*   **Instant Forwarding**: Dual submission action — sends data to sales desk API/email and provides one-click instant WhatsApp RFQ forwarding.

---

## 3. Industry Adaptation Matrix

Use this matrix to swap terminology while keeping the exact same high-converting layout:

| Industry Sector | Primary Dark | Brand Accent | Hero Media | Mascot Placeholder Queries |
| :--- | :--- | :--- | :--- | :--- |
| **Water & Wastewater Treatment** | `#001a40` (Navy) | `#0059a8` (Cyan Blue) | Crystal water flow, membrane filtration | "Ask about Industrial RO Plants, STP MBBR skids & GPCB norms..." |
| **Solar & Clean Energy** | `#0a192f` (Deep Slate) | `#00a86b` / `#f59e0b` (Sun Amber) | Solar farm time-lapse, wind turbines | "Ask about Megawatt Solar Rooftops, Inverter specs & Net Metering..." |
| **HVAC & Industrial Cooling** | `#0b1b2b` (Deep Steel) | `#0284c7` (Cool Blue) | Chiller compressor, airflow simulation | "Ask about Central Chiller Plants, AHU CFM capacity & Energy efficiency..." |
| **Heavy Machinery & Robotics** | `#111827` (Graphite) | `#e51b24` (Signal Red) | CNC machining, robotic arm welding | "Ask about 5-Axis CNC Milling tolerances, Servo automation & cycle times..." |
| **Chemical & Pharma Processing**| `#0d1f2d` (Dark Petrol)| `#10b981` (Pharma Teal) | Reactor vessels, hygienic piping skids | "Ask about SS316 Reaction Vessels, GMP compliance & CIP/SIP systems..." |

---

## 4. Anti-Patterns & Quality Checklist

Before completing any B2B industrial website project, verify:
*   [ ] **Zero Broken Dropdown Parents**: Navigation dropdown headers do not point to blank `/products` index pages.
*   [ ] **No Dark Video Boxes**: Mascot video container matches `#f6f4f2` with **no `mix-blend-mode: multiply`**.
*   [ ] **Horizontal Gallery Integrity**: Showcase galleries remain in a clean horizontal flex row on desktop.
*   [ ] **Industry-Specific Nomenclature**: Realistic engineering units used throughout (MOC, LPH, CFM, Bar, kW, PLC, ISO).
*   [ ] **Instant WhatsApp Access**: Clickable WhatsApp button pre-filled with technical query string.
*   [ ] **Production Build Check**: `npm run build` succeeds with zero static routing errors.

