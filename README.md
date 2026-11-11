# Aqua Shakti Industries — Static Website & Engineering Blog

Official static website and Markdown-driven engineering knowledge base for **Aqua Shakti Industries** — an ISO 9001:2008 certified manufacturer, supplier, and service provider of water treatment plants, industrial reverse osmosis, and water treatment chemicals based in Vapi, Gujarat, India.

---

## 🌟 Key Features

- **100% Static & Blazing Fast:** Built with Astro SSG. Zero server latency, optimal SEO, and instant page loads.
- **Markdown-Driven Blog (No Admin Panel):** Publish, update, and manage blog articles purely through `.md` files in the code repository. No CMS, no databases, no dashboard needed.
- **Brochure-Inspired Engineering Portfolio:**
  - **Industrial RO & Sea Water Desalination Plants** (500 to 50,000+ LPH)
  - **Commercial RO Models** (25, 50, 100, 250, 500, 1,000 LPH with SS 304 skids)
  - **Water Treatment Plants with Secondary Settling Tanks & Multi-Media Filters**
  - **Industrial Boiler Plants & Super Economizers**
  - **Effluent Treatment Plants (ETP)** (BOD/COD removal & zero liquid discharge)
  - **Sewage Treatment Plants (STP - DELTA PR)** (IMO & Marpol 73/78 compliant)
  - **Water Softeners & Demineralization (DM) / Mix Bed Plants**
  - **Comprehensive Industrial Chemicals Catalog:**
    - Cooling Water Treatment Products (`CTreat_301` to `CTreat_310`)
    - Descaling & Cleaning Products (`DS_401` to `DS_409`)
    - Boiler Water Treatment Products (`ASTreat_2001` to `ASTreat_2010`)
    - Wastewater Flocculants (`ASTreat_2501`) & Coagulants
  - **Reputed Client Partners:** Nilkamal, Blue Star, Shapoorji Pallonji, Sterling Generators, Macleods Pharma, Lords Hotels & Resorts, Pluz Resort, Powerica, etc.
  - **Authorized Dealer Network:** Varanasi, Allahabad, Beawar, Bhilwara, and Ajmer.
- **Interactive Plant Sizing & RFQ Tool:** Instant estimation widget with direct WhatsApp routing to the technical team.

---

## ✍️ How to Add a New Blog Post (In Code)

No admin panel is required! To publish a new article:

1. Create a `.md` file inside `src/content/blog/`:
   ```bash
   src/content/blog/your-article-slug.md
   ```

2. Add the frontmatter at the top:
   ```markdown
   ---
   title: "Your Technical Article Title"
   description: "A short 1-2 sentence summary for Google search and preview cards."
   pubDate: 2026-04-20
   heroImage: "/images/hero-plant.jpg"
   category: "Industrial RO"
   tags: ["RO Plants", "Water Treatment", "Gujarat"]
   author: "Aqua Shakti Technical Directorate"
   readingTime: "5 min read"
   ---

   ## 1. Introduction

   Write your content naturally in standard Markdown!
   ```

3. Commit and push. Astro automatically builds the static HTML at `/blog/your-article-slug` and updates the `/blog` index!

---

## 💻 Tech Stack

- **Framework:** [Astro 5+ / 7](https://astro.build) (Static Site Generation)
- **Styling:** Custom Vanilla CSS Design System with responsive variables and glassmorphism
- **Typography:** Plus Jakarta Sans & Space Grotesk
- **Images:** High-resolution industrial photography stored in `public/images/`

---

## 🚀 Development & Build Commands

```bash
# Install dependencies
npm install

# Start local development server (runs at http://localhost:4321)
npm run dev

# Build static production bundle into ./dist/
npm run build

# Preview the static production build locally
npm run preview
```

---

## 📍 Contact & Works

- **Head Office & Works:** Vapi Timber Compound, Opp. Chandralok Tower, Nr. D Mart, Chanod, VAPI - 396 195 (Gujarat, India)
- **Direct Sales:** +91 99139 36995 / +91 93775 55014
- **Helpline:** 6356008944
- **Email:** aquashakti99@gmail.com
- **Website:** [www.aquashakti.in](https://www.aquashakti.in)

---

&copy; Aqua Shakti Industries. Ideal Solution for all types of Water.
# aquashakti
