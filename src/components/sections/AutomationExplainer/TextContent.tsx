import React from 'react';
import Heading from './Heading';
import Description from './Description';

interface TextContentProps {
  className?: string;
  isMobile?: boolean;
}

export default function TextContent({ className = '', isMobile = false }: TextContentProps) {
  return (
    <div 
      className={`${isMobile ? 'w-full' : 'flex-[0_0_auto]'} ${className}`} 
      style={{ 
        width: isMobile ? '100%' : '455px',
        height: isMobile ? 'auto' : '877px',
        position: 'relative',
        ...(isMobile && {
          paddingLeft: '36px',
          paddingTop: '36px'
        })
      }}
    >
      <div 
        style={{ 
          position: isMobile ? 'relative' : 'absolute', 
          top: 0,
          maxWidth: isMobile ? '356px' : 'none'
        }}
      >
        <Heading isMobile={isMobile} />
      </div>
      <div 
        style={{ 
          position: isMobile ? 'relative' : 'absolute', 
          bottom: isMobile ? 'auto' : 0,
          marginTop: isMobile ? '24px' : 0,
          maxWidth: isMobile ? '358px' : 'none'
        }}
      >
        <Description isMobile={isMobile} />
      </div>
    </div>
  );
} 