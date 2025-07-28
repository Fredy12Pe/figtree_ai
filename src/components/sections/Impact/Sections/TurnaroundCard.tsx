"use client";
import React from 'react';
import Image from 'next/image';

export default function TurnaroundCard({ className = '' }) {
  console.log('TurnaroundCard rendering', className);
  
  // Determine tablet sizing based on className
  const isTabletBottomCard = className.includes('tablet-bottom-card');
  
  // Define tablet-specific styles
  const tabletCardStyle = isTabletBottomCard ? {
    width: '243px',
    height: '216px',
    padding: '24px',
    borderRadius: '28px'
  } : {};
  
  return (
    <div 
      className={`
        relative overflow-hidden rounded-[28px]
        ${isTabletBottomCard ? '' : 'h-[320px] w-[400px] p-[36px]'}
        xl:h-[400px] xl:w-[500px] xl:p-[48px]
        cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.02] 
        flex flex-col
        ${isTabletBottomCard ? '' : 'm-[6px]'}
        ${className}
      `}
      style={{
        background: `
          linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 46, 122, 0.60) 100%),
          url(/Assets/ImpactSections/Turnaround_time/Group%207.png),
          black
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        ...tabletCardStyle
      }}
    >
      {/* Content */}
      <div className="relative z-10">
        {/* Heading Section */}
        <div className={isTabletBottomCard ? '' : 'mb-[20px]'} style={isTabletBottomCard ? {marginBottom: '16px'} : {}}>
          <h3 
            className={`font-inter font-medium ${isTabletBottomCard ? '' : 'text-[26px] xl:text-[34px]'}`}
            style={{ 
              color: '#ffffff', 
              lineHeight: '1.4',
              fontSize: isTabletBottomCard ? '20px' : undefined
            }}
          >
            2-4 week<br />
            turnaround time
          </h3>
        </div>
      </div>
    </div>
  );
} 