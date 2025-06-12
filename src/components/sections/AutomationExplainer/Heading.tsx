import React from 'react';

interface HeadingProps {
  className?: string;
}

const Heading = ({ className = '' }: HeadingProps) => {
  return (
    <div className={`mb-[40px] ${className}`}>
      <h2 
        className="mb-[24px]" 
        style={{ 
          color: 'white',
          fontSize: '48px',
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
          fontSize: '28px', 
          fontFamily: 'Inter', 
          fontWeight: 600, 
          wordWrap: 'break-word' 
        }}
      >
        Smarter workflows. <br/>Better results.
      </div>
    </div>
  );
};

export default Heading; 