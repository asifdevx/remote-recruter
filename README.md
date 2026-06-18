# RemoteRecruit (Frontend)

RemoteRecruit is a frontend-only marketing / landing site built with React, Vite and Tailwind CSS. The project implements a responsive UI showcasing the product with a hero, feature rows, a signup call-to-action with an animated dashboard preview, an FAQ accordion, header/mobile navigation and a pricing-style footer.

This README documents the repository contents, how to run and build the app, the tech stack, folder layout and known limitations.

---

## Project overview

- Static single-page React application with client-side routing via `react-router-dom` ([src/routes/index.tsx](src/routes/index.tsx)).
- Key UI pieces:
  - Hero section with SVG background and animated entrance ([src/components/sections/HeroSection.tsx](src/components/sections/HeroSection.tsx)).
  - Feature rows showcasing product highlights ([src/components/sections/Feature/index.tsx](src/components/sections/Feature/index.tsx)) and individual row component ([src/components/sections/Feature/FeatureRow.tsx](src/components/sections/Feature/FeatureRow.tsx)).
  - Signup CTA block with an animated dashboard preview and reveal animations ([src/components/sections/SignUpAd/index.tsx](src/components/sections/SignUpAd/index.tsx), [`DashboardPanel`](src/components/sections/SignUpAd/DashboardPanel.tsx), [`SignUpAdContent`](src/components/sections/SignUpAd/SignUpAdContent.tsx), [`CtaButton`](src/components/sections/SignUpAd/CtaButton.tsx)).
  - FAQ accordion with expandable rows ([src/components/sections/FAQ/index.tsx](src/components/sections/FAQ/index.tsx), [`FaqRows`](src/components/sections/FAQ/FaqRows.tsx)).
  - Header with desktop links and a mobile drawer ([src/components/header/index.tsx](src/components/header/index.tsx), [`MobileMenu`](src/components/header/MobileMenu.tsx)).
  - Footer with two pricing cards and social links ([src/components/footer/index.tsx](src/components/footer/index.tsx), [`PricingCard`](src/components/footer/PriceCard.tsx)).

Entry point: [src/App.tsx](src/App.tsx). Static HTML template: [index.html](index.html).

---

## Setup

Recommended: pnpm (this repo contains a `pnpm-lock.yaml`), but npm or yarn can be used.

1. Install dependencies
```sh
pnpm install
# or
npm install
# or
yarn
```

2. Run development server
```sh
pnpm dev
# or
npm run dev
# or
yarn dev
```

3. Build for production
```sh
pnpm build
# or
npm run build
# or
yarn build
```
(Build runs `tsc -b` then `vite build` as defined in [package.json](package.json).)

4. Preview production build
```sh
pnpm preview
# or
npm run preview
# or
yarn preview
```

Relevant configuration files:
- Vite: [vite.config.ts](vite.config.ts)
- TypeScript: [tsconfig.json](tsconfig.json)
- Tailwind: [tailwind.config.js](tailwind.config.js)
- PostCSS: [postcss.config.js](postcss.config.js)

---

## Tech stack

(Only libraries present in [package.json](package.json))

Runtime / UI:
- react
- react-dom
- react-router-dom
- react-icons
- lucide-react
- usehooks-ts


Styling:
- tailwindcss
- tailwind-merge
- tailwindcss-animate
- clsx

Build / tooling:
- vite
- typescript

Linting / dev tools:
- eslint and related plugins

See dependency list: [package.json](package.json)

---

## Folder structure (key files)

- src/
  - [App.tsx](src/App.tsx) — app bootstrap
  - [routes/index.tsx](src/routes/index.tsx) — router configuration
  - [layout/RootLayout.tsx](src/layout/RootLayout.tsx) — site layout wrapper
  - pages/
    - [Home.tsx](src/pages/Home.tsx)
    - [NotFound.tsx](src/pages/NotFound.tsx)
  - components/
    - header/
      - [index.tsx](src/components/header/index.tsx)
      - [MobileMenu.tsx](src/components/header/MobileMenu.tsx)
    - footer/
      - [index.tsx](src/components/footer/index.tsx)
      - [PriceCard.tsx](src/components/footer/PriceCard.tsx)
    - sections/
      - [HeroSection.tsx](src/components/sections/HeroSection.tsx)
      - Feature/
        - [index.tsx](src/components/sections/Feature/index.tsx)
        - [FeatureRow.tsx](src/components/sections/Feature/FeatureRow.tsx)
      - SignUpAd/
        - [index.tsx](src/components/sections/SignUpAd/index.tsx)
        - [DashboardPanel.tsx](src/components/sections/SignUpAd/DashboardPanel.tsx)
        - [SignUpAdContent.tsx](src/components/sections/SignUpAd/SignUpAdContent.tsx)
        - [CtaButton.tsx](src/components/sections/SignUpAd/CtaButton.tsx)
      - FAQ/
        - [index.tsx](src/components/sections/FAQ/index.tsx)
        - [FaqRows.tsx](src/components/sections/FAQ/FaqRows.tsx)
  - hooks/
    - [`useInView`](src/hooks/useInView.ts) — intersection observer helper
  - utils/
    - [`cn`](src/utils/cn.ts) — classNames + tailwind-merge helper
  - styles/
    - [global.css](src/styles/global.css)
    - [font.css](src/styles/font.css)

Public assets live under `public/` and `public/assets/` (images and fonts referenced by the UI).

---

## Implemented features

- Responsive hero with animated SVG background and entrance animation ([HeroSection](src/components/sections/HeroSection.tsx)).
- Feature list rendered from config data ([src/config/Feature.ts](src/config/Feature.ts)) using a reusable row component ([FeatureRow](src/components/sections/Feature/FeatureRow.tsx)).
- Signup CTA area with:
  - dashboard preview with shimmer loading state ([DashboardPanel](src/components/sections/SignUpAd/DashboardPanel.tsx)),
  - reveal animations driven by an intersection observer hook ([useInView](src/hooks/useInView.ts)),
  - a styled CTA button ([CtaButton](src/components/sections/SignUpAd/CtaButton.tsx)).
- FAQ accordion with smooth open/close transitions ([FAQ](src/components/sections/FAQ/index.tsx), [FaqRows](src/components/sections/FAQ/FaqRows.tsx)).
- Header navigation with desktop and mobile behaviors ([src/components/header/index.tsx], [MobileMenu](src/components/header/MobileMenu.tsx)).
- Footer with pricing-style cards and social links using config data ([src/config/Footer.ts](src/config/Footer.ts), [PricingCard](src/components/footer/PriceCard.tsx)).

All UI content is driven by local config files: [src/config/Feature.ts](src/config/Feature.ts), [src/config/FAQ.ts](src/config/FAQ.ts), [src/config/Footer.ts](src/config/Footer.ts).

---

## Known issues & limitations

- Frontend-only: no backend or APIs. All content and state are static/local.
- Largest Contentful Paint (LCP) risk:
  - Hero uses a full-viewport SVG background and large text; ensure critical fonts/assets are optimized. Fonts are loaded via [src/styles/font.css](src/styles/font.css) and use `font-display: swap`.
  - Several images are loaded with `loading="eager"` (e.g., feature images and dashboard preview). That can increase initial load time on slow networks.
- Images and dashboard preview are not lazy-loaded by default — consider deferring non-critical images or using code-splitting for heavy visuals.
- No server-side rendering (Vite + SPA) — SEO/meta tags live in [index.html](index.html) but runtime rendering is client-side.
- Accessibility: basic semantics are present, but advanced accessibility auditing has not been applied (keyboard focus management, skip links, aria-expanded patterns are minimally implemented).
- No global state management or persistence — suitable for marketing/landing flows only.

---

## Deployment notes

- The app is a static SPA produced by Vite. Build with `pnpm build` (runs `vite build`) and serve the generated `dist/` folders with any static hosting.
- Vercel is a natural fit (static hosting for Vite apps). Note the repository contains a canonical URL pointing to Vercel in [index.html](index.html) but no Vercel config files are included.
- When deploying:
  - Ensure the build command is `pnpm build` (or `npm run build`), and the output directory is the Vite default `dist`.
  - Public assets under `public/` will be copied to the root of the deployed site (fonts and images are referenced from `/font/...` and `/assets/...`).

---

## Useful files & references

- App entry: [src/App.tsx](src/App.tsx)  
- Router: [src/routes/index.tsx](src/routes/index.tsx)  
- Layout: [src/layout/RootLayout.tsx](src/layout/RootLayout.tsx)  
- Global styles: [src/styles/global.css](src/styles/global.css) and [src/styles/font.css](src/styles/font.css)  
- Hook: [`useInView`](src/hooks/useInView.ts)  
- Utility: [`cn`](src/utils/cn.ts)  
- Config data: [src/config/Feature.ts](src/config/Feature.ts), [src/config/FAQ.ts](src/config/FAQ.ts), [src/config/Footer.ts](src/config/Footer.ts)  
- Build & tooling: [vite.config.ts](vite.config.ts), [tsconfig.json](tsconfig.json), [tailwind.config.js](tailwind.config.js), [package.json](package.json), [index.html](index.html)
