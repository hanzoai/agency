# Hanzo Agency Website Project

## Project Overview
This project is a React application built with TypeScript, Vite, shadcn-ui, and Tailwind CSS. It's a portfolio website for Hanzo AI agency showcasing their case studies and services.

## Project Structure
- `/src`: Main source code
  - `/components`: Reusable UI components
  - `/pages`: Top-level page components
  - `/data`: Static data files
  - `/hooks`: Custom React hooks
  - `/utils`: Utility functions
  - `/types`: TypeScript type definitions

## Routing System
The application uses react-router-dom for routing. The main routes are defined in `App.tsx`:
- `/`: Homepage
- `/case-studies`: All case studies overview
- `/case-study/:id`: Individual case study pages
- `/contact`: Contact page
- `/subscribe`: Newsletter subscription
- `/onboarding`: Client onboarding form

There are also legacy routes that redirect to the current unified case study system.

## Case Studies System
Case studies are a key part of the website and follow a consistent pattern:

1. Data is stored in:
   - `src/data/caseStudiesData.ts`: Contains the comprehensive data structure for all case studies
   
2. Case Study Rendering:
   - `src/pages/ProjectDetail.tsx`: Renders individual case study pages using data from caseStudiesData.ts
   - `src/pages/CaseStudies.tsx`: Renders the list of all case studies using data from caseStudiesData.ts

3. Case study IDs:
   - All case study IDs should be consistent across the codebase
   - The ID `trillerfest` is used for the Triller case study 
   - The ID `damon-motorcycles` is used in the data, but sometimes displayed as `damon` in the UI

4. Social links data:
   - Social links are included directly in caseStudiesData.ts for each case study

## Known Issues & Resolutions

### Case Study ID Consistency
- **Issue**: There was an inconsistency between case study IDs, with some files using 'triller' and others using 'trillerfest'.
- **Resolution**: Standardized all references to use 'trillerfest' to maintain consistency across the codebase.
- **Files Updated**:
  - `App.tsx`: Updated redirect path
  - `components/CaseStudy.tsx`: Updated link paths
  - `components/VideoCard.tsx`: Updated thumbnail reference
  - `components/case-studies/triller-fest/*.tsx`: Updated social links references
  - `data/socialLinksData.ts`: Updated key name
  - `pages/ProjectDetail.tsx`: Updated project ID
  - `pages/CaseStudies.tsx`: Updated project ID

### Data Consolidation
- **Issue**: Case study data was duplicated in both caseStudiesData.ts and ProjectDetail.tsx.
- **Resolution**: Consolidated all case study data into caseStudiesData.ts and updated ProjectDetail.tsx and CaseStudies.tsx to use this single data source.
- **Files Updated**:
  - `pages/ProjectDetail.tsx`: Modified to use caseStudiesData instead of internal static data
  - `pages/CaseStudies.tsx`: Modified to use caseStudiesData instead of internal static data

## Best Practices for Development

1. **Single Data Source**: All case study data should now be maintained exclusively in `caseStudiesData.ts`. Do not add case study data directly to components.

2. **ID Consistency**: When working with case studies, always use the ID as defined in `caseStudiesData.ts`.

3. **Route Structure**: Follow the `/case-study/:id` pattern for all case study pages.

4. **Component Hierarchy**:
   - Use the CaseStudyTemplate component for new case studies
   - Maintain consistent styling with existing case studies

5. **Adding New Case Studies**: 
   - Add new case studies to `caseStudiesData.ts`
   - Follow the existing structure and include all required fields
   - Be mindful of ID mapping for special cases like 'damon-motorcycles' → 'damon'