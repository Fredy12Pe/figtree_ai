import React from 'react';
import TextContent from './TextContent';
import ServicesGrid from './ServicesGrid';

interface AutomationExplainerSectionProps {
  className?: string;
}

// Main AutomationExplainer section component
export default function AutomationExplainerSection({ className = '' }: AutomationExplainerSectionProps) {
  return (
    <section 
      className={`bg-black h-screen flex ${className}`} 
      style={{ 
        backgroundColor: '#000000',
        borderRadius: '56px 56px 0 0',
      }}
    >
      <div className="px-[240px] py-[120px] h-full w-full">
        <div className="flex w-full h-full gap-[120px]">
          {/* Left side - Text content */}
          <TextContent />
          
          {/* Right side - Services Grid */}
          <div className="flex-1 h-full">
            <ServicesGrid />
          </div>
        </div>
      </div>
    </section>
  );
} 