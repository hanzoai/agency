# Hanzo Agency Website Project

## Project Overview
This project is a React application built with TypeScript, Vite, shadcn-ui, and Tailwind CSS. It's a portfolio website for Hanzo AI agency showcasing their case studies and services.

## Project Structure
- `/src`: Main source code
  - `/components`: Reusable UI components
  - `/pages`: Top-level page components
  - `/data`: Static data files
    - `/data/case-studies`: Individual case study data files
    - `/data/caseStudies.ts`: Main file that imports and exports all case studies
  - `/hooks`: Custom React hooks
  - `/utils`: Utility functions
  - `/types`: TypeScript type definitions
- `/components`: Top-level components (Header, Navigation)
- `/styles`: CSS files
  - `/styles/navigation.css`: Navigation menu styling
  - `/styles/variables.css`: CSS variables

## Routing System
The application uses react-router-dom for routing. The main routes are defined in `App.tsx`:
- `/`: Homepage
- `/case-studies`: All case studies overview
- `/case-studies-alt`: Alternative case studies view
- `/case-study/:id`: Individual case study pages (using the CaseStudy component)
- `/contact`: Contact page
- `/subscribe`: Newsletter subscription
- `/onboarding`: Client onboarding form

## Case Studies System
Case studies are a key part of the website and follow a consistent pattern:

1. **Data Organization**:
   - Each case study has its own file in `src/data/case-studies/` directory:
     - `damon.ts`
     - `bellabeat.ts`
     - `triller.ts`
     - `unikrn.ts`
     - `cover.ts`
     - `casper.ts`
     - `myle.ts`
   - All case studies are imported and exported together in `src/data/caseStudies.ts`

2. **Rendering Components**:
   - `src/pages/CaseStudy.tsx`: Dynamic page component that renders any case study based on the URL parameter
   - `src/components/CaseStudyPage.tsx`: Component for rendering a case study's full content
   - `src/components/CaseStudy.tsx`: Component used on the homepage to showcase featured case studies

3. **Case Study IDs**:
   - Each case study file exports an object with an `id` property matching its filename
   - IDs are used consistently throughout the application
   - The ID `damon-motorcycles` is used in data but sometimes referred to as `damon` in UI components

4. **Routing Structure**:
   - All case studies are accessed via the route pattern: `/case-study/:id`
   - The ID in the route corresponds to the ID in the case study file

## UI Components and Navigation

1. **Header and Navigation**:
   - Header component (`/components/Header.tsx`) contains the main navigation
   - Navigation component (`/components/Navigation.tsx`) implements the main menu
   - Desktop navigation includes dropdown menus for Services and Solutions sections
   - Mobile navigation collapses into a hamburger menu at screen widths below 768px

2. **Navigation Structure**:
   - The navigation uses a combination of CSS classes for styling
   - Dropdown menus are positioned absolutely in relation to the header
   - CSS variables in `variables.css` define key measurements, including header height
   - Navigation is responsive with different behaviors at desktop and mobile breakpoints

3. **UI Design Pattern**:
   - Navigation now uses shadcn's NavigationMenu component for dropdowns
   - Navigation content is stored in a separate data file (`src/data/navigationItems.ts`)
   - Hero headline updated to "AI is our super power"
   - Fixed header with proper dropdown positioning
   - Navigation dropdown fixes applied via CSS overrides to ensure visibility on hover
   - Multiple CSS files used to fix dropdown issues:
     - `NavigationDropdownFix.css` - Basic hover and pointer-events fixes
     - `navbar-dropdown-final-fix.css` - Comprehensive overflow and z-index fixes
     - `navigation-dropdown-override.css` - High-specificity overrides

## Services Section Redesign
- Updated Services component to match two-card pricing layout from design mockup
- Left card: Dark green (#3a4a42) with flexible pricing information
- Right card: Beige (#f5f3e9) with included features checklist
- Responsive design: Cards stack vertically on mobile/tablet, side-by-side on desktop
- Service categories displayed in responsive grid below the main cards
- Custom CSS file (Services.css) for precise styling and animations

## Creative Portfolio Carousel
- Added CreativePortfolioCarousel component (`src/components/CreativePortfolioCarousel.tsx`)
- Uses shadcn/ui carousel component with Embla Carousel for smooth scrolling
- Features 13 creative works spanning design and AI capabilities:
  - Design Work: Presentation Design, Branding Services, Illustration, Ad Creative, Social Media, Video Production, Web Design, Motion Design, 3D/AR Design
  - AI Solutions: AI Enhanced Creative, AI Pipeline Development, LLM Fine Tuning, RAG System Implementation
- Images stored in `public/images/carousel/` with exact filenames from desktop
- Responsive layout: 3 items on desktop, 2 on tablet, 1 on mobile
- Category badges overlay on images for easy identification
- Hover effects with scale transformation and shadow enhancement
- Mobile-friendly with swipe gesture support and scroll indicator
- Added to homepage between Services and AICapabilities sections

## AI Capabilities Section
- Enhanced AICapabilities component (`src/components/AICapabilities.tsx`) with improved image handling
- Features three main capabilities cards with SVG graphics:
  - Intelligent Systems (ai-nodes.svg)
  - Predictive Analytics (data-wave.svg)
  - Custom Development (code-blocks.svg)
- Displays partner logos for AI models and cloud platforms
- Implemented robust image error handling:
  - Loading states with skeleton placeholders
  - Error fallbacks showing label text if images fail to load
  - Lazy loading for better performance
  - Console logging for debugging image load failures
- All images stored in `public/images/logo/` and `public/images/graphics/`
- Test page available at `/test-ai-capabilities-images.html` to verify all images load correctly

## Checkout BFF (server-side, 0.1.1) — closes the P0 anon-mint regression

The onboarding checkout used to POST the mint request straight from the browser
to `commerce.hanzo.ai/api/v1/checkout/sessions` (old `src/lib/commerce.ts`).
The commerce P0 fix (v1.46.4) closed that anonymous mint path — the browser POST
now correctly 401s — so the site broke. It is now fixed by a server-side BFF:

- **`server/`** — a small stdlib-only Go binary that serves the embedded Vite
  SPA (`server/static`, populated from `dist/` at docker build) AND the ONE
  checkout entry `POST /v1/checkout`.
- The browser (`src/lib/commerce.ts`) POSTs `{plan,email,name,paymentMethod}`
  to same-origin `/v1/checkout`. It holds NO token and can choose NO org, price,
  or redirect.
- The BFF authenticates to commerce with a per-org **Published storefront
  token** (`COMMERCE_STOREFRONT_TOKEN`, minted via `POST /v1/store/storefront-token`,
  stored in KMS, synced to the `agency-secrets` K8s Secret via KMSSecret). Org is
  derived by commerce from the token; item prices come from the server-side
  `plans` map; `successUrl`/`cancelUrl` are built from `PUBLIC_BASE_URL`
  (`https://hanzo.agency`). Fails CLOSED (503) if the token is unset — never an
  anon mint.
- Config (env, KMS-sourced secret): `COMMERCE_URL` (default
  `http://commerce.hanzo.svc:8001`), `COMMERCE_ORG` (default `hanzo`),
  `PUBLIC_BASE_URL` (default `https://hanzo.agency`), `COMMERCE_STOREFRONT_TOKEN`.
- commerce v1.46.7 adds `hanzo.agency` to the hanzo brand's checkout redirect
  allowlist so the authed `successUrl` passes.
- Deployed in DOKS (hanzo-k8s) as `ghcr.io/hanzoai/agency` — the site is no
  longer a static GitHub Pages bundle (a static host can't hold the token).
  Manifests: universe `infra/k8s/agency/`.
- Tests: `server/checkout_test.go` (authed mint, no client price/org/redirect
  override, fail-closed without token, unknown-plan reject, wire, non-POST).
