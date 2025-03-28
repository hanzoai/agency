import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import caseStudies from '@/data/caseStudies';

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  
  // If no ID is found, or the ID doesn't match any case study, redirect to case studies
  if (!id || !caseStudies[id]) {
    return <Navigate to="/case-studies" replace />;
  }
  
  return <CaseStudyTemplate data={caseStudies[id]} />;
};

export default CaseStudy;