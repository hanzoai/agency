import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import CaseStudyPage from '@/components/CaseStudyPage';
import caseStudies from '@/data/caseStudies';

const CaseStudyV1 = () => {
  const { id } = useParams<{ id: string }>();
  
  // If no ID is found, or the ID doesn't match any case study, redirect to case studies
  if (!id || !caseStudies[id]) {
    return <Navigate to="/case-studies" replace />;
  }
  
  return (
    <div className="relative">
      <div className="absolute top-24 right-4 z-50 flex gap-2">
        <Link 
          to={`/case-study/${id}`} 
          className="text-xs text-accent/70 hover:text-accent bg-black/50 px-3 py-1 rounded-full"
        >
          Switch to V3
        </Link>
        <Link 
          to={`/case-study-v2/${id}`} 
          className="text-xs text-accent/70 hover:text-accent bg-black/50 px-3 py-1 rounded-full"
        >
          Switch to V2
        </Link>
      </div>
      <CaseStudyPage data={caseStudies[id]} />
    </div>
  );
};

export default CaseStudyV1;