# The Bayat Archives

**The Bayat Archives** is a premium, interactive historical tracking website and digital archive curated by Yusuf Olia, dedicated to tracing the migrations, branches, and imperial footprint of the historical Oghuz Turkic **Bayat (and Bhayat)** clan.

Designed with a clean, modern archival theme, the platform blends elegant Serif typography (Playfair Display) and warm ivory backgrounds with interactive GIS mapping to visualize a millennium of history.

---

## 🌟 Core Features

- **100% Free Live Map (Leaflet)**: Operates out-of-the-box with **zero billing accounts, API keys, or configurations required**.
- **Parchment Styling Filters**: Tiles are customized with an inline sepia and contrast filter to blend CartoDB tiles seamlessly with our light-ivory archive palette (`#FAF9F6`).
- **Interactive Directory**: A responsive split layout where selecting locations on the sidebar pans the map viewport and reveals custom historical Popups.
- **Dashed Migration Trails**: Layered visual pathways tracking:
  - **Oghuz Westward Migrations** (China -> Khorasan -> Caucasus -> Anatolia -> Syria)
  - **Subcontinent Bhayat Settlements** (Khorasan -> Sindh -> Gujarat)
  - **Qezelbash Relocations** (Caucasus -> Khorasan -> Afghanistan)
- **Historical Milestones Timeline**: Traces key markers from 950 AD to the 20th century. Clicking any timeline entry automatically flies the map coordinates to that historic location.
- **Tribal Branches Grid**: An catalog detailed historical significance of the **Ak-Bayat**, **Kara-Bayat**, **Šām Bayātī**, and **Bhayat** branches.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router, React 19, TypeScript)
- **Styling**: Tailwind CSS v4 (CSS-first config)
- **Mapping Library**: `leaflet`, `react-leaflet`, and `@types/leaflet`
- **Icons**: `lucide-react`
- **Animations**: `framer-motion`

---

## 🚀 Getting Started

### 1. Installation

Make sure you have [Node.js](https://nodejs.org) (v18.x or later) installed on your system. 

Install project dependencies:

```bash
npm install
```

### 2. Running the Development Server

Start the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser to explore the archive. No API keys or environmental setup are required!

### 3. Build for Production

Compile the optimized bundle:

```bash
npm run build
npm run start
```

---

## 📂 Project Structure

- `src/app/page.tsx`: Main dashboard entry point, dynamically loading the Leaflet component with `ssr: false` to ensure server-rendering stability.
- `src/app/layout.tsx`: Configures Google Fonts (Playfair Display & Inter) and SEO metadata.
- `src/app/globals.css`: Tailwind v4 base configurations, Leaflet core styling imports, and custom map popup parchment styles.
- `src/app/types.ts`: TypeScript typings for locations, timeline, and branches.
- `src/app/data/locations.ts`: Contains the database coordinates and narrative summaries.
- `src/app/components/MigrationMap.tsx`: Interactive Leaflet map container rendering custom SVG divIcons, tiles, markers, and paths.
