
import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  title: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps, title }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-black">{title}</h2>
        <span className="text-sm text-black/60">Step {currentStep + 1} of {totalSteps}</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div
          className="bg-accent h-2 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
