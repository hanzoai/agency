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
     - `damon-motorcycles.ts`
     - `bellabeat.ts`
     - `trillerfest.ts`
     - `unikoin-gold.ts`
     - `cover-build.ts`
     - `casper-blockchain.ts`
     - `myle-tap.ts`
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

## Project Cleanup History

### Case Study Page Versioning
- **Issue**: Need an alternative design for case study pages while maintaining the current one
- **Resolution**: Created a new case study page component (CaseStudyV2) that works with all case studies
- **Files Added/Updated**:
  - `src/pages/CaseStudyV1.tsx`: Renamed from the existing CaseStudy component
  - `src/pages/CaseStudyV2.tsx`: New component based on older design but updated to work with current data structure
  - `App.tsx`: Updated to use CaseStudyV2 as default but keep CaseStudyV1 as an option
  - `src/utils/projectUtils.ts`: Updated default image paths to match actual directory structure
- **Routing Structure**:
  - `/case-study/:id`: Default route now uses the new V2 component
  - `/case-study-v1/:id`: Alternative route using the original version
  - Each page has a toggle to switch between versions

### Case Study Page Consolidation
- **Issue**: Multiple versions of case study pages causing confusion and maintenance overhead
- **Resolution**: Consolidated to a single, modern case study page design (V3)
- **Files Updated/Removed**:
  - Removed `src/pages/CaseStudyV1.tsx` and `src/pages/CaseStudyV2.tsx`
  - Updated `src/pages/CaseStudyV3.tsx` to remove version toggles 
  - Updated `App.tsx` to import CaseStudyV3 as CaseStudy and remove other version routes
- **Simplified Routing Structure**:
  - Single route `/case-study/:id` using the modern V3 design

### Case Study Image Path Fixes
- **Issue**: Broken images on the landing page in case study sections for Trillerfest and Unikoin Gold
- **Resolution**: Updated image paths to match the actual directory structure in the public folder
- **Files Updated**:
  - `src/components/CaseStudy.tsx`: Fixed fallback image paths to use correct folder names and file paths
  - `src/data/case-studies/trillerfest.ts`: Updated image paths to match actual files
  - `src/data/case-studies/unikoin-gold.ts`: Updated image paths to match actual files

### Component Naming
- **Issue**: CaseStudyTemplate naming was confusing and component was missing
- **Resolution**: Created CaseStudyPage component with clear naming that better reflects its purpose
- **Files Updated**:
  - Created `src/components/CaseStudyPage.tsx` to render individual case studies
  - Updated `src/pages/CaseStudy.tsx` to use the new component

### Data Reorganization
- **Issue**: Case study data was split across multiple files with duplication and inconsistencies
- **Resolution**: Created individual files for each case study and a centralized import/export system
- **Files Updated**:
  - Created `src/data/case-studies/` directory with individual files for each case study
  - Created `src/data/caseStudies.ts` to import and export all case studies
  - Updated all components to reference the new data structure
  - Removed deprecated files `caseStudiesData.ts` and `additionalCaseStudies.ts`

### Component Consolidation
- **Issue**: Multiple redundant components for rendering case studies
- **Resolution**: Standardized on using CaseStudy.tsx with CaseStudyPage.tsx
- **Files Removed**:
  - Individual case study pages (CaseStudyBellabeat.tsx, CaseStudyDamonMotorcycles.tsx, etc.)
- **Files Updated**:
  - Updated import paths in all components that use case study data

### ID Consistency
- **Issue**: Inconsistent usage of IDs across the application (e.g., 'damon' vs 'damon-motorcycles')
- **Resolution**: Made sure all components link to the correct IDs as defined in the case study files
- **Files Updated**:
  - `src/components/CaseStudy.tsx`: Updated link to use 'damon-motorcycles' instead of 'damon'
  - `src/components/VideoCard.tsx`: Updated thumbnail map to include both 'damon' and 'damon-motorcycles'

### Alternative Case Studies Page
- **Previous Effort**: Added an alternative design to showcase projects with a card-based layout, but it was later deprecated
- **Resolution**: Removed unused alternative case study pages as part of codebase cleanup
- **Files Removed**:
  - `src/pages/AlternativeCaseStudies.tsx`: Unused alternative layout
  - `src/pages/CaseStudy2.tsx`: Alternative case studies view that was accessible via `/case-studies-alt`
- **Files Updated**:
  - `App.tsx`: Removed import and route for CaseStudy2

## Best Practices for Development

1. **Modular Data Management**: 
   - Each case study should be in its own file in the `src/data/case-studies/` directory
   - When adding a new case study, create a new file and then import it in `caseStudies.ts`

2. **ID Consistency**: 
   - When working with case studies, always use the ID as defined in the case study file
   - Keep filenames and IDs matching (e.g., `damon-motorcycles.ts` and `id: "damon-motorcycles"`)

3. **Component Usage**:
   - For displaying a case study page: Use `CaseStudy.tsx` with the correct ID in the URL
   - For displaying a case study's content: Use `CaseStudyPage.tsx` 
   - For displaying featured case studies on homepage: Use `components/CaseStudy.tsx`

4. **Adding New Case Studies**:
   - Create a new file in `src/data/case-studies/` directory following the existing structure
   - Import and add the new case study in `caseStudies.ts`
   - No need to create individual page components - the dynamic CaseStudy.tsx will handle rendering

5. **Routing Pattern**:
   - Always use `/case-study/:id` for linking to case studies
   - Ensure the ID in the link matches the ID in the case study file

6. **Special ID Handling**:
   - Use consistent mapping between display IDs and data IDs (e.g., 'damon' → 'damon-motorcycles')
   - Make sure any ID mappings are documented and consistently applied across components