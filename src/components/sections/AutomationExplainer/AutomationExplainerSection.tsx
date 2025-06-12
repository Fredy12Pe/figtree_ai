import React from 'react';
import Heading from './Heading';
import Description from './Description';
import ServicesGrid from './ServicesGrid';

interface AutomationExplainerSectionProps {
  className?: string;
}

// Main AutomationExplainer section component
export default function AutomationExplainerSection({ className = '' }: AutomationExplainerSectionProps) {
  return (
    <section 
      className={`bg-black h-screen ${className}`} 
      style={{ 
        backgroundColor: '#000000',
        borderRadius: '56px 56px 0 0' 
      }}
    >
      <div className="px-[240px] py-[120px] h-full">
        <div className="flex w-full h-full gap-[120px]">
          {/* Left side - Title at top, Description at bottom */}
          <div className="flex-[0_0_auto] flex flex-col justify-between" style={{ width: '455px' }}>
            <div>
              <Heading />
            </div>
            <div>
              <Description />
            </div>
          </div>
          
          {/* Right side - Services Grid */}
          <div className="flex-1 flex items-center justify-start">
            <ServicesGrid />
          </div>
        </div>
      </div>
    </section>
  );
} 