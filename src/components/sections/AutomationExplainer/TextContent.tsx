import React from 'react';
import Heading from './Heading';
import Description from './Description';

interface TextContentProps {
  className?: string;
}

export default function TextContent({ className = '' }: TextContentProps) {
  return (
    <div 
      className={`flex-[0_0_auto] ${className}`} 
      style={{ 
        width: '455px',
        height: '877px', // Total grid height (279px × 3 + 20px × 2)
        position: 'relative'
      }}
    >
      <div style={{ position: 'absolute', top: 0 }}>
        <Heading />
      </div>
      <div style={{ position: 'absolute', bottom: 0 }}>
        <Description />
      </div>
    </div>
  );
} 