# Hanzo Agency Website Project

## Project Overview
This project is a React application built with TypeScript, Vite, shadcn-ui, and Tailwind CSS. It's a portfolio website for Hanzo AI agency showcasing their case studies and services.

## How it ships
`.hanzo/workflows/deploy.yml` on the git.hanzo.ai forge (`hanzo-build-linux-amd64`):
build `dist` -> `POST /v1/projects/agency/deploy` (202, queued) -> `aws s3 sync`
to the bucket+prefix cloud names in that 202 -> `POST .../complete {"status":"live"}`.
The bytes never pass through the API; BodyLimit is 16 MiB. No GitHub Pages, no
Cloudflare Pages, and no image -- a static export has no compute to run.

Telemetry is `@hanzo/event` (`src/analytics.tsx`, mounted inside the router in `src/App.tsx`) posting to `api.hanzo.ai/v1/event`. One
client for pageviews, events and errors: no GA, no Meta Pixel, no Plausible, no
separate error SDK.

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
