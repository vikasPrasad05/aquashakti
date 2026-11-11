---
name: industrial-water-web-design
description: >-
  Use this skill to design, build, or refactor high-converting, enterprise-grade B2B engineering, industrial manufacturing, and turnkey plant websites. Applicable across any industry (water treatment, clean energy, HVAC, heavy machinery, chemical processing, automation, hardware systems). Covers visual design tokens, layout hierarchy, 3D assistant mascot banners, product detail architectures, interactive mega-menus, and lead-generation quote flows.
---

# Enterprise B2B Industrial & Engineering Web Design System

A point-to-point, industry-agnostic blueprint for designing and engineering high-converting corporate websites for B2B manufacturing, heavy industry, turnkey plants, and technical equipment systems (inspired by the design standards of Culligan Commercial, Thermax Global, Siemens, and ABB).

---

## 1. Visual Language & Design Tokens

Every project using this design system must establish consistent CSS custom properties:

### 1.1 Color Palette Architecture
*   **Primary Corporate Dark (Deep Authority)**:
    `--color-primary-dark: #001a40` (Navy / Deep Indigo). Use for global footers, contrast hero overlays, and enterprise trust sections. Never use pure `#000000`.
*   **Brand Action Color (Primary Interactive)**:
    `--color-brand-primary: #0059a8` (Engineering Blue) or industry equivalent (e.g., `#0066cc`, `#008080`). Use for primary buttons, active states, key headings, and links.
*   **Vibrant Accent (High-Urgency & Actions)**:
    `--color-accent-vibrant: #e51b24` (Safety Red / Signal Orange `#ff5500`). Use sparingly for search action buttons, status pills, phone icons, and primary CTAs.
*   **Neutral Canvas Backgrounds**:
    *   Pure White: `#ffffff` (Primary content sections, clean card backgrounds).
    *   Warm Neutral Stone: `#f6f4f2` (Exact color for interactive assistant cards, feature highlights, alternating section bands).
    *   Subtle Cold Grey: `#f8f9fa` (Sidebar boxes, specification tables, technical data sheets).
*   **Typography Colors**:
    *   Heading High-Contrast: `#1a1a1a` or `#0f172a` (Never pure black).
    *   Body Text: `#4a5568` or `#334155` (Optimum readability, `line-height: 1.6`).
    *   Muted Metadata: `#64748b` or `#8c8c8c` (Timestamps, spec labels, subtitles).
*   **Borders & Dividers**:
    *   Subtle: `rgba(0, 0, 0, 0.06)` or `#e2e8f0`.
    *   Active/Hover: `rgba(0, 89, 168, 0.3)`.

### 1.2 Typography Hierarchy
*   **Header Font Family**: Geometric / Grotesque Sans-Serif (`font-family: 'Manrope', 'Plus Jakarta Sans', -apple-system, sans-serif`).
    *   Hero Display: `2.75rem – 3.75rem` (`44px – 60px`), `font-weight: 800`, `letter-spacing: -0.025em`.
    *   Section H2: `1.85rem – 2.25rem` (`30px – 36px`), `font-weight: 700`, `line-height: 1.25`.
    *   Card H3 / Subtitles: `1.2rem – 1.4rem` (`19px – 22px`), `font-weight: 600`.
*   **Body Font Family**: Neutral Sans-Serif (`font-family: 'Inter', 'Open Sans', sans-serif`).
    *   Standard Body: `0.95rem – 1.05rem` (`15px – 17px`), `line-height: 1.65`.
    *   Technical Specs: `0.85rem – 0.9rem` (`13px – 14px`), tabular numerals (`font-variant-numeric: tabular-nums`).

### 1.3 Depth, Elevation & Corner Radii
*   **Card Containers**: `border-radius: 16px` to `22px`.
*   **Search & Action Pills**: `border-radius: 9999px`.
*   **Button Squarcles**: `border-radius: 8px` to `12px`.
*   **Soft Elevation Shadow**: `box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.02)`.
*   **Floating Lift (Hover)**: `box-shadow: 0 12px 36px rgba(0, 0, 0, 0.08); transform: translateY(-4px)`.

---

## 2. Global Component Architecture

### 2.1 Enterprise Navigation Header
*   **Sticky / Floating Header**: Position fixed/sticky with background `rgba(255, 255, 255, 0.96)`, `backdrop-filter: blur(8px)`, subtle border-bottom `1px solid rgba(0,0,0,0.06)`.
*   **Logo & Identity**: Left-aligned with brand mark + clear bold title.
*   **Non-Navigating Category Triggers (Crucial Rule)**:
    *   If a menu item (e.g., "Products", "Solutions", "Equipment") has a dropdown, **its top-level link must NOT navigate to a dead index page**. It must function strictly as an open/close toggle trigger (e.g. `<button type="button" class="nav-dropdown-trigger">`).
    *   Only individual child options navigate to dedicated product pages.
*   **Quick Direct Contact Pill**: Prominent right-side phone icon with clickable international number (`tel:+...`) + WhatsApp quick-connect button.
*   **Mobile Drawer**: Hamburger menu that expands full-height on `< 1024px` with clear accordions for sub-categories.

---

### 2.2 Cinematic Slow-Motion Hero Section
*   **Video Background**:
    *   Autoplay, muted, loop, playsinline video background (`video/mp4` / `video/webm`).
    *   Subject: Cinematic slow-motion footage relevant to the industry (water droplets, robotic arms, laser cutting, turbine spinning, cleanroom manufacturing).
    *   Duration: 12s–20s seamless loop.
*   **Contrast Overlay Gradient**:
    *   `background: linear-gradient(180deg, rgba(0, 26, 64, 0.65) 0%, rgba(0, 26, 64, 0.85) 100%)`.
    *   Ensures white typography remains accessible (WCAG AAA contrast).
*   **Dual Call-To-Action (CTA)**:
    1.  *Primary Action*: "Request Turnkey Quote" or "Get Engineering Proposal" (opens Modal).
    2.  *Secondary Action*: "Explore Systems & Specs ↓" (smooth scrolls to solutions).
*   **Trust Metrics Bar**: 4-point counter row below hero:
    `[20+ Years Excellence] | [500+ Plants Commissioned] | [ISO 9001:2015 Certified] | [24/7 AMC Support]`.

---

### 2.3 Interactive 3D Mascot / AI Customer Assistant Section ("The REDD Pattern")

A high-converting, modern corporate pattern that bridges customer inquiry with technical product matching.

#### Layout Specification:
```
┌────────────────────────────────────────────────────────────────────────┐
│ .redd-card (background: #f6f4f2, border-radius: 22px, padding: 24px)   │
│                                                                        │
│  ┌──────────────────┐  ┌────────────────────────────────────────────┐  │
│  │ 3D Mascot        │  │ Have any questions?                        │  │
│  │ Video / Rig      │  │ Our [Brand] Expert can help                │  │
│  │ (220px x 220px)  │  │                                            │  │
│  │                  │  │ ┌────────────────────────────────────────┐ │  │
│  │ (Skates in from  │  │ │ Ask about [Capacity, Specs, Process]...│ │  │
│  │  distance/runs)  │  │ └──────────────────────────────────────[🔍]┘ │  │
│  └──────────────────┘  └────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

#### Key Implementation Details:
1.  **Background Color Uniformity**:
    *   The container card background must match the video background precisely: `#f6f4f2` (RGB: `246, 244, 242`).
    *   **NEVER use `mix-blend-mode: multiply`** on video elements if the colors are already identical; multiply creates a darker square border artifact.
2.  **3D Skateboard / Character Arrival Animation**:
    *   Use an HTML5 video player with dual sources (`webm` + `mp4` fallback):
        ```html
        <video id="mascotVideo" class="mascot-video" playsinline muted autoplay preload="auto">
          <source src="/images/mascot.webm" type="video/webm" />
          <source src="/images/mascot.mp4" type="video/mp4" />
        </video>
        ```
    *   Control via `IntersectionObserver`: When card scrolls into view (threshold: `0.25`), play from `currentTime = 0`.
    *   When the video finishes the arrival move, hold on the final standing frame.
    *   Clicking the video restarts the animation.
3.  **Dynamic Typewriter Search Pill**:
    *   Animated typewriter placeholder cycling industry-specific technical queries with a blinking cursor:
        *   `"Ask about [Core System] capacities and engineering skids..."`
        *   `"Ask about [Process Type] & environmental compliance norms..."`
        *   `"Ask about [Equipment Type] specifications & technical datasheets..."`
        *   `"Ask about Turnkey Plant Engineering, Capacities & Quotations..."`
    *   Pause on input focus, resume typing on blur if empty.
4.  **Intelligent Keyword Routing & Assistant Modal**:
    *   Pressing Enter or clicking the search icon parses query keywords (e.g. `ro`, `stp`, `hvac`, `filter`, `pump`, `capacity`).
    *   If a specific product matches: immediately routes to `/that-product-page`.
    *   If a general question: pops up an **Interactive Assistant Dialog Modal** with pre-filled WhatsApp link (`wa.me`) and direct phone contact.

---

### 2.4 Dedicated Product & Turnkey Plant Pages Architecture

Every product offered in navigation MUST have its own dedicated URL (`/product-slug`) following this standardized layout:

#### Section 1: Hero & Technical Brief
*   Left Column: Technical product title, high-resolution equipment photo/3D render, capacity badge (`500 LPH to 1,00,000 LPH`), and "Download Datasheet (PDF)" button.
*   Right Column: Executive engineering summary, working principle, input/output parameters, and instant "Request Plant Quotation" button.

#### Section 2: Horizontal Equipment Gallery (`.img-row-horizontal`)
*   Display equipment variants (e.g., Skid-mounted, Pre-treatment, Control Panel) in a **single clean horizontal row** (`display: flex; gap: 1.5rem; justify-content: center;`).
*   Uniform card height, clean white borders, subtle box shadows.

#### Section 3: Technical Specifications Table
*   Tabular layout with alternating row backgrounds:
    *   `Parameter | Standard Model | Heavy Duty Model | Turnkey Industrial`
    *   Feed Parameters (TDS, Hardness, COD/BOD, Temperature, Pressure).
    *   MOC (Material of Construction: SS 304, SS 316, FRP, Mild Steel Rubber Lined).
    *   Automation: Manual, Semi-Automatic, Fully Automated PLC-SCADA.

#### Section 4: Industry Applications Grid
*   Grid of sectors where this machine is deployed:
    `[Pharmaceutical] | [Textile & Dyeing] | [Automobile] | [Food & Beverage] | [Commercial Real Estate] | [Power Plants]`.

#### Section 5: Regulatory Compliance & Consents
*   Pollution Control Board compliance, ASME, ISO, CE, and environmental standards certified by the manufacturer.

---

### 2.5 High-Converting Lead Capture (Quote Modal)
*   Backdrop with `backdrop-filter: blur(6px)`.
*   Form Fields tailored to B2B engineering:
    1.  Full Name & Company / Industrial Unit Name.
    2.  Work Email & WhatsApp Phone Number.
    3.  Select System / Plant Required.
    4.  Expected Capacity / Flow Rate (e.g. `LPH`, `TPH`, `CFM`, `kW`).
    5.  Feed Water / Source Analysis (or file upload).
*   Dual Submission Action:
    *   Direct email submission to sales engineering desk.
    *   One-click instant forwarding to official WhatsApp business chat.

---

## 3. Step-by-Step Execution Guide for New Projects

When applying this skill to a new project:

1.  **Initialize Astro / Modern Static Engine**:
    Set up clean asset directories: `public/images/`, `public/fonts/`, `src/components/`, `src/layouts/`.
2.  **Establish Color & Typography Tokens**:
    In root CSS, declare the 5 core colors: Primary Dark, Brand Action, Vibrant Accent, Warm Neutral `#f6f4f2`, and Clean Slate.
3.  **Construct `Header.astro`**:
    *   Build non-navigating parent dropdown toggles.
    *   Connect each dropdown child to dedicated product pages.
4.  **Implement `ProductDetailLayout.astro`**:
    *   Reusable layout with unified breadcrumbs, sidebar RFQ widget, specs tables, and related solutions.
5.  **Build the Animated Mascot / Assistant Component**:
    *   Embed the 640x640 mascot video.
    *   Set container to `#f6f4f2`.
    *   Wire typewriter search loop + product keyword routing.
6.  **Verify Cross-Device Responsiveness**:
    *   Test Desktop (`1280px`), Tablet (`768px-1024px`), and Mobile (`375px-480px`).
    *   Ensure horizontal image galleries switch to smooth scroll or grid on mobile.

---

## 4. Anti-Patterns & Strict Rules

*   ❌ **NEVER leave top-level dropdown items navigating to dead or removed `/products` pages.** Either give them distinct index content or make them non-navigating category toggles.
*   ❌ **NEVER apply `mix-blend-mode: multiply` to video backgrounds on colored cards.** It darkens light neutrals into muddy grey boxes. Match the hex background directly.
*   ❌ **NEVER stack equipment gallery images vertically when the user asks for a horizontal showcase.** Use `display: flex; flex-direction: row; gap: 1.5rem;` with `flex: 1`.
*   ❌ **NEVER display generic lorem-ipsum for industrial plants.** Use authentic engineering nomenclature (MOC, LPH, GPCB/CPCB norms, MBBR, RO skids, PLC automation).
