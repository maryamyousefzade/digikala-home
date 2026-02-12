<<<<<<< HEAD

# digikala-home

# “Recreated Digikala landing page with responsive Bootstrap/Sass styling.

# Digikala Homepage Clone

A fully responsive recreation of Digikala’s main landing page built with Bootstrap, Sass, and custom CSS. The project replicates layout and styling while demonstrating a clean Sass workflow and responsive design principles.

## Overview

- Pixel-inspired clone of Digikala’s homepage with attention to detail.
- Mobile-first responsive design covering phones, tablets, and desktops.
- Modular Sass architecture with automated build scripts.

## Features

- Responsive grid and components powered by Bootstrap 5.
- Sass partials for layout, components, utilities, and variables.
- PostCSS Autoprefixer integration for broad browser support.
- Build pipeline for compiling, prefixing, and compressing CSS.
- Readable development CSS alongside production-ready minified output.

## Tech Stack

- HTML5
- Sass (Dart Sass)
- Bootstrap 5
- PostCSS + Autoprefixer
- Node.js npm scripts

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- npm (bundled with Node.js)
- Optional: local HTTP server (e.g., `live-server`, VS Code Live Server extension)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/digikala-homepage-clone.git
cd digikala-homepage-clone

### 2. Install dependencies
bash
npm install

### 3. Run the Sass watcher for development
bash
npm run watch:sass

## Available npm Scripts
json
"watch:sass": "sass sass/main.scss public/css/style.css -w",
"compile:sass": "sass sass/main.scss public/css/style.compile.css",
"prefix:css": "postcss --use autoprefixer -b 'last 10 version' public/css/style.compile.css -o public/css/style.prefix.css",
"compress:css": "sass public/css/style.prefix.css public/css/style.css --style=compressed"
 "build:css": "npm-run-all compile:sass prefix:css compress:css "

### Recommended build flow
npm run build:css
or
1. `npm run compile:sass` – compile Sass to an intermediate CSS file
2. `npm run prefix:css` – add vendor prefixes
3. `npm run compress:css` – generate the final minified stylesheet



## Project Structure
text
project-root/
├─ public/
│  ├─ css/
│  │  ├─ style.css
│  │  ├─ style.prefix.css
│  │  └─ style.compile.css
│  ├─ img/
│  └─ index.html
├─ sass/
│  ├─ base/
│  ├─ components/
│  ├─ layout/
│  ├─ utilities/
│  └─ main.scss
├─ package.json
└─ README.md


```
