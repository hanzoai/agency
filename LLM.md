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
- `/case-study/:id`: Individual case study pages (using the CaseStudy component)
- `/contact`: Contact page
- `/subscribe`: Newsletter subscription
- `/onboarding`: Client onboarding form

## Case Studies System
Case studies are a key part of the website and follow a consistent pattern:

1. **Data Source**:
   - Main case study data is stored in `src/data/caseStudiesData.ts`
   - Additional case studies in `src/data/additionalCaseStudies.ts` (imported into caseStudiesData.ts)
   - The complete set includes: Damon Motorcycles, Bellabeat, TrillerFest, Unikoin Gold, Cover Build, Casper Blockchain, and Myle Tap
   
2. **Rendering Components**:
   - `src/pages/CaseStudy.tsx`: Dynamic page component that renders any case study based on the URL parameter
   - `src/components/CaseStudyTemplate.tsx`: Template component for rendering a case study's content
   - `src/components/CaseStudy.tsx`: Component used on the homepage to showcase featured case studies

3. **Case Study IDs**:
   - All case study IDs are defined in `caseStudiesData.ts`
   - IDs are used consistently throughout the application
   - The ID `damon-motorcycles` is used in data but sometimes referred to as `damon` in UI components

4. **Routing Structure**:
   - All case studies are accessed via the route pattern: `/case-study/:id`
   - The ID in the route corresponds to the ID in `caseStudiesData.ts`

## Project Cleanup History

### Data Consolidation
- **Issue**: Case study data was duplicated in both caseStudiesData.ts and ProjectDetail.tsx
- **Resolution**: Consolidated all case study data into caseStudiesData.ts
- **Files Updated**:
  - `src/pages/ProjectDetail.tsx` was replaced by `src/pages/CaseStudy.tsx`
  - `App.tsx` updated to use CaseStudy.tsx instead of ProjectDetail.tsx
  - Updated all components to reference consistent IDs from caseStudiesData.ts

### Component Consolidation
- **Issue**: Multiple redundant components for rendering case studies
- **Resolution**: Standardized on using CaseStudy.tsx with CaseStudyTemplate.tsx
- **Files Removed**:
  - Individual case study pages (CaseStudyBellabeat.tsx, CaseStudyDamonMotorcycles.tsx, etc.)
- **Files Updated**:
  - Links in components now point to the correct case study IDs

### ID Consistency
- **Issue**: Inconsistent usage of IDs across the application (e.g., 'damon' vs 'damon-motorcycles')
- **Resolution**: Made sure all components link to the correct IDs as defined in caseStudiesData.ts
- **Files Updated**:
  - `src/components/CaseStudy.tsx`: Updated link to use 'damon-motorcycles' instead of 'damon'
  - `src/components/VideoCard.tsx`: Updated thumbnail map to include both 'damon' and 'damon-motorcycles'

### Complete Case Studies
- **Issue**: Missing case studies (Cover Build, Casper Blockchain, and Myle Tap) that were referenced but not fully implemented
- **Resolution**: Added all missing case studies to ensure complete portfolio
- **Files Updated**:
  - Created `src/data/additionalCaseStudies.ts` with detailed information for missing case studies
  - Updated `src/data/caseStudiesData.ts` to include all case studies
  - Ensured all case studies are available for display on the case studies page

## Best Practices for Development

1. **Single Data Source**: All case study data must be maintained exclusively in `caseStudiesData.ts` and its imports.

2. **ID Consistency**: When working with case studies, always use the ID as defined in `caseStudiesData.ts`.

3. **Component Usage**:
   - For displaying a case study page: Use `CaseStudy.tsx` with the correct ID in the URL
   - For displaying featured case studies on homepage: Use `components/CaseStudy.tsx`

4. **Adding New Case Studies**:
   - Add new case study data to `caseStudiesData.ts` directly, or to `additionalCaseStudies.ts` which is then imported
   - Follow the existing structure and include all required fields
   - No need to create individual page components - the dynamic CaseStudy.tsx will handle rendering

5. **Routing Pattern**:
   - Always use `/case-study/:id` for linking to case studies
   - Ensure the ID in the link matches the ID in `caseStudiesData.ts`

6. **Special ID Handling**:
   - Use consistent mapping between display IDs and data IDs (e.g., 'damon' → 'damon-motorcycles')
   - Make sure any ID mappings are documented and consistently applied across components