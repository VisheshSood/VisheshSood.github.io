````md
<h1 align="center">Innovative Gloves Website</h1>

<p align="center">
  Official website for <strong>Innovative Gloves Co., Ltd.</strong>
</p>

<p align="center">
  <a href="https://innovativegloves.net/">
    <img src="https://img.shields.io/badge/Live%20Website-innovativegloves.net-2ea44f?style=for-the-badge" alt="Live Website">
  </a>
  <img src="https://img.shields.io/badge/Built%20with-Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white" alt="Built with Astro">
</p>

<p align="center">
  <img src="public/readme-website-preview.png" alt="Innovative Gloves Website Preview" width="1000">
</p>

---

## About

This repository contains the official website for **Innovative Gloves Co., Ltd.**, a Thailand-based manufacturer of premium disposable gloves.

The website showcases our company, products, proprietary glove technologies, manufacturing capabilities, certifications, sustainability initiatives, global presence, and history of innovation.

Innovative Gloves was established in **2001** and is based in **Hat Yai, Songkhla, Thailand**.

## Website

**Live website:**  
https://innovativegloves.net/

---

## Tech Stack

The website is built with:

- [Astro](https://astro.build/)
- HTML
- CSS
- JavaScript / TypeScript
- Node.js
- npm

Astro is used to keep the website fast, lightweight, and optimized for primarily content-driven pages.

---

## Getting Started

### Prerequisites

Install the current LTS version of:

- Node.js
- npm

Check that both are installed:

```bash
node --version
npm --version
````

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Enter the project directory:

```bash
cd <repository-folder>
```

Install dependencies:

```bash
npm install
```

---

## Local Development

Start the Astro development server:

```bash
npm run dev
```

The website will normally be available at:

```text
http://localhost:4321
```

Changes made to the project will automatically reload during development.

---

## Production Build

Create a production build:

```bash
npm run build
```

The compiled website will be generated inside:

```text
dist/
```

Preview the production build locally:

```bash
npm run preview
```

---

## Available Commands

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm install`     | Install project dependencies         |
| `npm run dev`     | Start the Astro development server   |
| `npm run build`   | Build the website for production     |
| `npm run preview` | Preview the production build locally |

---

## Project Structure

```text
/
├── public/
│   ├── images/
│   └── readme-website-preview.png
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── styles/
│
├── astro.config.mjs
├── package.json
└── README.md
```

### `src/pages/`

Contains the website pages and routes.

Astro automatically creates routes based on files placed inside this directory.

### `src/components/`

Contains reusable website components such as:

* Navigation
* Footer
* Product cards
* Technology sections
* Buttons
* Headers
* Content sections
* Reusable UI elements

### `src/layouts/`

Contains shared layouts used across multiple pages.

### `src/assets/`

Contains images and other assets processed through Astro.

### `public/`

Contains static files that are served directly without being processed by Astro.

---

## Website Content

The website presents information about Innovative Gloves including:

* Company overview
* Manufacturing capabilities
* Disposable nitrile gloves
* Disposable latex gloves
* Heavy-duty industrial gloves
* Long-cuff gloves
* Dual-tone gloves
* Biodegradable nitrile gloves
* Diamond Textured gloves
* Micro Diamond technology
* ZIG Grip technology
* Tyre Tread / Gripper texture
* Product applications
* Certifications
* Quality control
* Sustainability
* Global markets
* Company history
* Contact and sales enquiries

---

## Development Guidelines

When making changes to the website:

* Keep reusable elements inside components.
* Maintain consistent styling and spacing throughout the site.
* Keep product names and specifications consistent.
* Optimize large images before adding them to the repository.
* Maintain responsive layouts for desktop, tablet, and mobile.
* Avoid unnecessary client-side JavaScript.
* Prefer Astro components for static content.
* Check internal links after adding or moving pages.
* Test the production build before deployment.

Before deploying major changes, run:

```bash
npm run build
```

and ensure the build completes without errors.

---

## Adding the README Preview Image

The README expects a website preview image at:

```text
public/readme-website-preview.png
```

Take a screenshot of the website, save it using that filename, and place it inside the `public` folder.

GitHub will then display it automatically near the top of this README.

If you use a different filename or location, update this line:

```html
<img src="public/readme-website-preview.png" alt="Innovative Gloves Website Preview" width="1000">
```

---

## Company

**Innovative Gloves Co., Ltd.**

Hat Yai, Songkhla
Thailand

Established **2001**

Website:
https://innovativegloves.net/

---

## License

This repository and its contents are proprietary to **Innovative Gloves Co., Ltd.**

Unless otherwise stated, the source code, website designs, graphics, product photography, written content, trademarks, product names, and proprietary technologies contained within this repository may not be copied, distributed, reproduced, modified, or reused without prior authorization from Innovative Gloves Co., Ltd.

© Innovative Gloves Co., Ltd. All rights reserved.

```
```
