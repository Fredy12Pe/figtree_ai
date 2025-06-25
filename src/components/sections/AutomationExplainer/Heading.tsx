import React from 'react';

interface HeadingProps {
  className?: string;
  isMobile?: boolean;
}

const Heading = ({ className = '', isMobile = false }: HeadingProps) => {
  return (
    <div className={`${className}`}>
      <h2 
        className="mb-3" 
        style={{ 
          color: 'white',
          fontSize: isMobile ? '28px' : '48px',
          fontFamily: 'Inter',
          fontWeight: 600,
          wordWrap: 'break-word',
          lineHeight: '1.2'
        }}
      >
        What we automate
      </h2>
      <div 
        style={{ 
          color: '#373737', 
          fontSize: isMobile ? '20px' : '28px', 
          fontFamily: 'Inter', 
          fontWeight: 600, 
          wordWrap: 'break-word',
          marginBottom: isMobile ? '24px' : 0
        }}
      >
        Smarter workflows.<br/>Better results.
      </div>
    </div>
  );
};

export default Heading; 