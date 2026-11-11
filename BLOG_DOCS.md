# Developer Guide: Adding New Blog Posts via Markdown in Code (No Admin Panel)

Step-by-step instructions on adding new blog articles to this Astro static website simply by creating a Markdown (.md) file in `src/content/blog/`.

This website is built with **Astro 5+ / 7 Static Site Generation (SSG)** using Astro's modern Content Layer API. 

There is **no administrative dashboard, no WordPress database, and no server backend** required. Everything is 100% static, lightning-fast, and version-controlled directly in Git.

---

## How to Publish a New Blog Post in 3 Steps

### Step 1: Create a `.md` File

Navigate to the `src/content/blog/` directory in your code editor and create a new file with a descriptive, URL-friendly name:

```
src/content/blog/my-new-water-article.md
```

The filename automatically becomes the URL slug:  
`https://your-domain.com/blog/my-new-water-article`

---

### Step 2: Add Frontmatter at the Top

Paste this YAML block at the very top of your file:

```markdown
---
title: "Your Descriptive Article Title Here"
description: "A 1-2 sentence compelling summary for Google SEO and card previews."
pubDate: 2026-05-01
heroImage: "/images/hero-plant.jpg"
category: "Industrial RO"
tags: ["RO Plants", "Gujarat", "Water Treatment"]
author: "Your Name or Aqua Shakti Team"
readingTime: "5 min read"
---
```

#### Frontmatter Fields Explained:
- `title` *(string, required)*: The main headline displayed on the article and page title.
- `description` *(string, required)*: Used for search engine meta descriptions and card excerpts.
- `pubDate` *(YYYY-MM-DD, required)*: Date of publication.
- `heroImage` *(string, optional)*: Image path (e.g. `/images/hero-plant.jpg` or any image in `public/images/`).
- `category` *(string, optional)*: Category pill badge (e.g. `Industrial RO`, `Wastewater Treatment`, `Commercial RO`, etc.).
- `tags` *(array of strings, optional)*: List of hashtags.
- `author` *(string, optional)*: Displayed alongside the publication date.
- `readingTime` *(string, optional)*: E.g. `5 min read`.

---

### Step 3: Write Your Content in Markdown

Underneath the closing `---`, simply write standard Markdown:

```markdown
## 1. Introduction

Write your paragraphs naturally. Astro handles all formatting automatically!

### Key Features:
- Bullet points
- **Bold text**
- *Italic text*
- [Clickable links](https://aquashakti.in)

### Specification Table:
| Model | Flow Rate | Pressure |
| :--- | :--- | :--- |
| RO-500 | 500 LPH | 14 kg/cm² |
| RO-1000 | 1000 LPH | 16 kg/cm² |

> **Pro Tip:** Blockquotes receive custom Aqua Shakti industrial styling automatically!
```

---

## Build and Deploy

When you are ready, run:

```bash
npm run build
```

Astro compiles all markdown files into pre-rendered static HTML and generates an updated `/blog` index and an XML sitemap at `/sitemap-index.xml`.
