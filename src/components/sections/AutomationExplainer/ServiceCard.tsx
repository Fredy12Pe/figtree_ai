'use client';

import React, { useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  isMobile?: boolean;
}

const ServiceCard = ({ title, description, icon, isMobile = false }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const titleLines = title.split('\n');

  if (isMobile) {
    return (
      <div 
        style={{ 
          width: '398px',
          height: '280px',
          backgroundColor: '#141414',
          borderRadius: '28px',
          position: 'relative',
          overflow: 'hidden',
          margin: '0 auto'
        }}
      >
        <div 
          style={{ 
            position: 'relative', 
            zIndex: 2,
            paddingLeft: '40px',
            paddingTop: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '320px'
          }}
        >
          <div 
            style={{
              width: '56px',
              height: '56px',
              marginBottom: '8px'
            }}
          >
            <img 
              src={icon} 
              alt={title}
              style={{
                width: '56px',
                height: '56px',
                objectFit: 'contain'
              }}
            />
          </div>
          <div 
            style={{ 
              color: 'white',
              fontSize: '20px',
              fontFamily: 'Inter',
              fontWeight: 500,
              wordWrap: 'break-word',
              marginBottom: '16px',
              whiteSpace: 'pre-line',
              width: '100%'
            }}
          >
            {title}
          </div>
          <div 
            style={{ 
              color: '#FFFFFF',
              fontSize: '16px',
              fontFamily: 'Inter',
              fontWeight: 400,
              opacity: 0.8,
              wordWrap: 'break-word',
              lineHeight: '24px',
              width: '100%'
            }}
          >
            {description}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="rounded-[16px] group"
      style={{ 
        background: isHovered 
          ? 'linear-gradient(180deg, #001443 0%, #191919 100%)'
          : '#191919',
        width: '423px',
        height: '279px',
        paddingLeft: '40px',
        paddingTop: '47px',
        transition: 'all 500ms ease-in-out'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon && (
        <div 
          className="mb-[16px]"
          style={{
            opacity: isHovered ? 1 : 0.46,
            transition: 'opacity 500ms ease-in-out'
          }}
        >
          <div className="w-[56px] h-[56px] flex items-center justify-center">
            <img 
              src={icon} 
              alt={title} 
              className="w-[56px] h-[56px] object-contain"
            />
          </div>
        </div>
      )}
      
      <h3 
        className="mb-[8px] leading-[1.3]"
        style={{ 
          color: 'white',
          fontSize: '24px',
          fontFamily: 'Inter',
          fontWeight: 700,
          wordWrap: 'break-word',
          opacity: isHovered ? 1 : 0.46,
          transition: 'opacity 500ms ease-in-out'
        }}
      >
        {titleLines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < titleLines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </h3>
      
      <p 
        className="leading-[1.5]"
        style={{ 
          color: 'white',
          fontSize: '16px',
          fontFamily: 'Inter',
          fontWeight: 500,
          wordWrap: 'break-word',
          width: '290px',
          opacity: isHovered ? 1 : 0.46,
          transition: 'opacity 500ms ease-in-out'
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default ServiceCard; 