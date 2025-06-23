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
      className={`bg-black h-screen flex justify-center ${className}`} 
      style={{ 
        backgroundColor: '#000000',
        borderRadius: '56px 56px 0 0',
      }}
    >
      <div className="max-w-[1440px] w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-[120px] h-full">
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