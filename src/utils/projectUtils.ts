import caseStudies from '@/data/caseStudies';
import { CaseStudyData, RelatedProject } from '@/types/caseStudy';

/**
 * Get a specific number of related projects that are different from the current project
 * @param currentProjectId - The ID of the current project
 * @param count - Number of related projects to return (default: 2)
 * @returns Array of related project data
 */
export function getRelatedProjects(currentProjectId: string, count: number = 2): RelatedProject[] {
  // Get all project IDs except the current one
  const otherProjectIds = Object.keys(caseStudies).filter(id => id !== currentProjectId);
  
  // Shuffle the array to get random projects
  const shuffledIds = shuffleArray([...otherProjectIds]);
  
  // Take the first 'count' projects
  const selectedIds = shuffledIds.slice(0, count);
  
  // Create related project objects with correct data from the source
  return selectedIds.map(id => {
    const project = caseStudies[id];
    
    // Get the first image from the project or use a default
    const projectImage = project.images && project.images.length > 0 
      ? project.images[0] 
      : `/images/thumbnails/${id}-thumbnail.jpg`;
    
    return {
      id: project.id,
      title: project.title,
      subtitle: project.subtitle,
      imageUrl: projectImage,
      route: `/case-study/${project.id}`
    };
  });
}

/**
 * Shuffle an array using the Fisher-Yates algorithm
 * @param array - The array to shuffle
 * @returns Shuffled array
 */
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

/**
 * Update related projects for all case studies
 * This function generates new related projects for all case studies
 * using data from the central data source
 * @returns Updated case studies data
 */
export function refreshAllRelatedProjects(): Record<string, CaseStudyData> {
  const updatedCaseStudies = { ...caseStudies };
  
  // Update related projects for each case study
  Object.keys(updatedCaseStudies).forEach(id => {
    updatedCaseStudies[id] = {
      ...updatedCaseStudies[id],
      relatedProjects: getRelatedProjects(id, 2)
    };
  });
  
  return updatedCaseStudies;
}
