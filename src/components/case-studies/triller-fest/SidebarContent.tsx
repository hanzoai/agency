
import { ChevronRight } from 'lucide-react';

const SidebarContent = () => {
  return (
    <div className="sticky top-8">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6 reveal">
        <h3 className="text-lg font-bold mb-4">Table of Contents</h3>
        <ul className="space-y-2">
          <li>
            <a href="#introduction" className="flex items-center text-primary/80 hover:text-accent transition-colors">
              <ChevronRight size={16} className="mr-2" />
              Introduction
            </a>
          </li>
          <li>
            <a href="#key-objectives" className="flex items-center text-primary/80 hover:text-accent transition-colors">
              <ChevronRight size={16} className="mr-2" />
              Key Objectives
            </a>
          </li>
          <li>
            <a href="#strategic-approach" className="flex items-center text-primary/80 hover:text-accent transition-colors">
              <ChevronRight size={16} className="mr-2" />
              Strategic Approach
            </a>
          </li>
          <li>
            <a href="#key-results" className="flex items-center text-primary/80 hover:text-accent transition-colors">
              <ChevronRight size={16} className="mr-2" />
              Key Results
            </a>
          </li>
        </ul>
      </div>

      <div className="bg-accent/10 rounded-2xl p-6 reveal">
        <h3 className="text-lg font-bold mb-4">Want similar results?</h3>
        <p className="text-primary/80 mb-4">
          Learn how Hanzo can help your business achieve unprecedented growth with AI-driven marketing strategies.
        </p>
        <a href="#book-call" className="btn-primary w-full">Book a Call Today</a>
      </div>
    </div>
  );
};

export default SidebarContent;
