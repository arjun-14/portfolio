# Arjun Adukathil — Portfolio

A personal portfolio built with Next.js 14, styled after the visual language of the game GRIS — each page has its own color chapter with atmospheric SVG backdrops and smooth Framer Motion transitions.

## Pages

| Route | Chapter | Description |
|---|---|---|
| `/` | — | Landing with interactive radial menu (MenuDial) |
| `/projects` | Red | Project cards in a bento grid with GRIS-inspired ruins |
| `/journey` | Pink | Bio, work history, education, and links |
| `/media` | Blue | Currently playing, reading, watching, listening |
| `/techstack` | Colorful | 3D dome gallery of tools and technologies |

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS custom properties for chapter theming
- **Animation**: Framer Motion
- **3D Interaction**: `@use-gesture/react` (dome gallery drag + inertia)
- **Icons**: `lucide-react`, `react-icons/si`
- **Audio**: subtle hover/click sounds via Web Audio API

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Building

```bash
npm run build
npm start
```

## Deploying

Deployed on [Vercel](https://vercel.com). Push to `main` triggers a production deploy automatically after connecting the repo in the Vercel dashboard.
