'use client';

import React, { useState, useEffect } from 'react';
import TextContent from './TextContent';
import ServicesGrid from './ServicesGrid';

interface AutomationExplainerSectionProps {
  className?: string;
}

// Main AutomationExplainer section component
export default function AutomationExplainerSection({ className = '' }: AutomationExplainerSectionProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1023);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section 
      className={`bg-black min-h-screen flex justify-center ${className}`} 
      style={{ 
        backgroundColor: '#000000',
        borderRadius: isMobile ? '28px 28px 0 0' : '56px 56px 0 0',
      }}
    >
      <div className={`max-w-[1440px] w-full h-full ${isMobile ? 'px-5 py-10' : 'px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-[120px]'}`}>
        <div className={`w-full h-full ${isMobile ? 'flex flex-col gap-8' : 'flex gap-[120px]'}`}>
          {/* Left side - Text content */}
          <TextContent isMobile={isMobile} />
          
          {/* Right side - Services Grid */}
          <div className={`${isMobile ? 'w-full' : 'flex-1'} h-full`}>
            <ServicesGrid isMobile={isMobile} />
          </div>
        </div>
      </div>
    </section>
  );
} 