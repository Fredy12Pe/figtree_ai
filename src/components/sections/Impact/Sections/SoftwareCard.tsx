"use client";
import React from 'react';
import Image from 'next/image';

export default function SoftwareCard({ className = '' }) {
  console.log('NEW SoftwareCard with 90px logos loading!');
  
  // Determine sizing based on className
  const isTabletBottomCard = className.includes('tablet-bottom-card');
  const isDesktopBottomCard = className.includes('desktop-bottom');
  
  // Define responsive styles
  const responsiveCardStyle = isTabletBottomCard ? {
    width: '243px',
    height: '216px',
    padding: '20px',
    borderRadius: '28px'
  } : {};
  
  return (
    <div 
      className={`
        relative overflow-hidden rounded-[28px]
        ${isTabletBottomCard ? '' : 'h-[311px] w-[400px] p-[36px]'}
        cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.02] 
        flex flex-col
        ${isTabletBottomCard ? '' : 'm-[6px]'}
        ${className}
      `}
      style={{
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 46, 122, 0.60) 100%), black',
        ...responsiveCardStyle
      }}
    >
      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .bounce-animation {
          animation: bounce 2s ease-in-out infinite;
        }
      `}</style>

      {/* Heading Section */}
      <div className={isTabletBottomCard ? '' : 'mb-[40px]'} style={isTabletBottomCard ? {marginBottom: '16px'} : {}}>
        <h3 
          className="font-inter font-medium"
          style={{ 
            color: '#ffffff', 
            lineHeight: '1.4',
            fontSize: isTabletBottomCard ? '16px' : '26px'
          }}
        >
          Connect with<br />
          currently used<br />
          software
        </h3>
      </div>

      {/* Software Icons - Responsive sizing */}
      <div className="flex justify-start" style={{gap: isTabletBottomCard ? '8px' : '16px', marginTop: isTabletBottomCard ? '20px' : '8px'}}>
        {/* Gmail */}
        <div 
          className="bg-white rounded-[20px] flex items-center justify-center bounce-animation"
          style={{ 
            width: isTabletBottomCard ? '54px' : isDesktopBottomCard ? '110px' : '80px', 
            height: isTabletBottomCard ? '54px' : isDesktopBottomCard ? '110px' : '80px',
            minWidth: isTabletBottomCard ? '54px' : isDesktopBottomCard ? '110px' : '80px',
            minHeight: isTabletBottomCard ? '54px' : isDesktopBottomCard ? '110px' : '80px',
            animationDelay: '0s',
            borderRadius: isTabletBottomCard ? '12px' : '20px'
          }}
        >
          <Image
            src="/Assets/ImpactSections/Software_connections/Gmail.png"
            alt="Gmail"
            width={isTabletBottomCard ? 54 : isDesktopBottomCard ? 110 : 80}
            height={isTabletBottomCard ? 54 : isDesktopBottomCard ? 110 : 80}
            className="object-contain"
            style={{ 
              width: isTabletBottomCard ? '54px' : isDesktopBottomCard ? '110px' : '80px', 
              height: isTabletBottomCard ? '54px' : isDesktopBottomCard ? '110px' : '80px' 
            }}
          />
        </div>

        {/* Notion */}
        <div 
          className="bg-white rounded-[20px] flex items-center justify-center bounce-animation"
          style={{ 
            width: isTabletBottomCard ? '54px' : isDesktopBottomCard ? '110px' : '80px', 
            height: isTabletBottomCard ? '54px' : isDesktopBottomCard ? '110px' : '80px',
            minWidth: isTabletBottomCard ? '54px' : isDesktopBottomCard ? '110px' : '80px',
            minHeight: isTabletBottomCard ? '54px' : isDesktopBottomCard ? '110px' : '80px',
            animationDelay: '0.5s',
            borderRadius: isTabletBottomCard ? '12px' : '20px'
          }}
        >
          <Image
            src="/Assets/ImpactSections/Software_connections/Notion.png"
            alt="Notion"
            width={isTabletBottomCard ? 54 : isDesktopBottomCard ? 110 : 80}
            height={isTabletBottomCard ? 54 : isDesktopBottomCard ? 110 : 80}
            className="object-contain"
            style={{ 
              width: isTabletBottomCard ? '54px' : isDesktopBottomCard ? '110px' : '80px', 
              height: isTabletBottomCard ? '54px' : isDesktopBottomCard ? '110px' : '80px' 
            }}
          />
        </div>

        {/* SalesForce */}
        <div 
          className="bg-white rounded-[20px] flex items-center justify-center bounce-animation"
          style={{ 
            width: isTabletBottomCard ? '54px' : isDesktopBottomCard ? '110px' : '80px', 
            height: isTabletBottomCard ? '54px' : isDesktopBottomCard ? '110px' : '80px',
            minWidth: isTabletBottomCard ? '54px' : isDesktopBottomCard ? '110px' : '80px',
            minHeight: isTabletBottomCard ? '54px' : isDesktopBottomCard ? '110px' : '80px',
            animationDelay: '1s',
            borderRadius: isTabletBottomCard ? '12px' : '20px'
          }}
        >
          <Image
            src="/Assets/ImpactSections/Software_connections/SalesForce.png"
            alt="SalesForce"
            width={isTabletBottomCard ? 54 : isDesktopBottomCard ? 110 : 80}
            height={isTabletBottomCard ? 54 : isDesktopBottomCard ? 110 : 80}
            className="object-contain"
            style={{ 
              width: isTabletBottomCard ? '54px' : isDesktopBottomCard ? '110px' : '80px', 
              height: isTabletBottomCard ? '54px' : isDesktopBottomCard ? '110px' : '80px' 
            }}
          />
        </div>

        {/* Zapier */}
        <div 
          className="bg-[#FF4A00] rounded-[20px] flex items-center justify-center bounce-animation"
          style={{ 
            width: isTabletBottomCard ? '54px' : isDesktopBottomCard ? '110px' : '80px', 
            height: isTabletBottomCard ? '54px' : isDesktopBottomCard ? '110px' : '80px',
            minWidth: isTabletBottomCard ? '54px' : isDesktopBottomCard ? '110px' : '80px',
            minHeight: isTabletBottomCard ? '54px' : isDesktopBottomCard ? '110px' : '80px',
            animationDelay: '1.5s',
            borderRadius: isTabletBottomCard ? '12px' : '20px'
          }}
        >
          <Image
            src="/Assets/ImpactSections/Software_connections/Zapier.png"
            alt="Zapier"
            width={isTabletBottomCard ? 54 : isDesktopBottomCard ? 110 : 80}
            height={isTabletBottomCard ? 54 : isDesktopBottomCard ? 110 : 80}
            className="object-contain"
            style={{ 
              width: isTabletBottomCard ? '54px' : isDesktopBottomCard ? '110px' : '80px', 
              height: isTabletBottomCard ? '54px' : isDesktopBottomCard ? '110px' : '80px' 
            }}
          />
        </div>
      </div>
    </div>
  );
} 