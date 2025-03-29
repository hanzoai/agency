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
   - Full-width dropdown menus on desktop use `width: 100vw` with `margin-left: calc(-50vw + 50%)` for proper alignment
   - Content within dropdowns is constrained to `max-width: var(--max-width)`
   - Consistent z-index hierarchy ensures proper layering of UI elements
