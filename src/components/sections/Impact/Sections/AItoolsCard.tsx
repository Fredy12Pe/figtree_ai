"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function AItoolsCard({ className = '' }) {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  
  // Determine sizing based on className
  const isTabletLeftCard = className.includes('tablet-left-card');
  const isDesktopTopLeftCard = className.includes('desktop-top-left-card');
  
  // Animation effect for logos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prev) => (prev + 1) % 4); // 4 logos total
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);
  
  // Define base styles
  const baseCardStyle = {
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 46, 122, 0.60) 100%), black'
  };
  
  // Define responsive styles
  const responsiveCardStyle = isTabletLeftCard ? {
    width: '434px',
    height: '216px',
    padding: '24px',
    borderRadius: '28px'
  } : isDesktopTopLeftCard ? {
    width: '831px',
    height: '389px',
    padding: '36px',
    borderRadius: '28px',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'space-between'
  } : {};
  
  return (
    <div 
      className={`
      relative overflow-hidden rounded-[28px]
        ${isTabletLeftCard ? '' : 'h-[400px] w-[400px] p-[36px]'}
        lg:h-[500px] lg:w-[500px] lg:p-[48px]
      flex flex-col
      transition-transform duration-300 ease-in-out cursor-pointer
      hover:scale-[1.02]
        ${isTabletLeftCard ? '' : 'm-[6px]'}
      ${className}
    `}
    style={{
        ...baseCardStyle,
        ...responsiveCardStyle
      }}
    >
      
      {/* Heading Section */}
      <div className={isTabletLeftCard ? '' : 'mb-[20px]'} style={isTabletLeftCard ? {marginBottom: '16px'} : {}}>
        <p 
          className={`font-inter font-medium ${isTabletLeftCard ? '' : 'text-[13px] lg:text-[15px]'} mb-[8px]`}
          style={{ 
            color: '#ffffff',
            fontSize: isTabletLeftCard ? '11px' : isDesktopTopLeftCard ? '16px' : undefined
          }}
        >
          Powered by Smart Automation
        </p>
        <h3 
          className={`font-inter font-medium ${isTabletLeftCard ? '' : 'text-[26px] lg:text-[36px]'}`}
          style={{ 
            color: '#ffffff', 
            lineHeight: '1.4',
            fontSize: isTabletLeftCard ? '20px' : isDesktopTopLeftCard ? '36px' : undefined
          }}
        >
          Using the latest<br />
          AI tools
        </h3>
      </div>

      {/* Tools Grid - Using explicit margins */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Spacer to push logos down */}
        <div style={{ flex: 1 }}></div>
        {/* Top Row - 3 Tools */}
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {/* ChatGPT */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            cursor: 'pointer', 
            transition: 'all 0.3s ease-in-out',
            marginRight: isTabletLeftCard ? '16px' : '46px',
            transform: currentLogoIndex === 0 ? 'scale(1.1)' : 'scale(1)',
            filter: currentLogoIndex === 0 ? 'brightness(1.2)' : 'brightness(1)'
          }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = currentLogoIndex === 0 ? 'scale(1.1)' : 'scale(1)'}>
            <div style={{ 
              width: isTabletLeftCard ? '60px' : '60px', 
              height: isTabletLeftCard ? '60px' : '60px', 
              backgroundColor: '#0A1628', 
              borderRadius: '20px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginBottom: '8px',
              transition: 'all 0.3s ease-in-out'
            }}>
              <Image
                src="/Assets/ImpactSections/Ai_tools/ChatGpt.png"
                alt="ChatGPT"
                width={isTabletLeftCard ? 60 : 60}
                height={isTabletLeftCard ? 60 : 60}
                className="opacity-70"
                style={{
                  width: isTabletLeftCard ? '60px' : '60px',
                  height: isTabletLeftCard ? '60px' : '60px',
                  transition: 'all 0.3s ease-in-out'
                }}
              />
            </div>
            <span style={{ 
              color: 'rgba(255, 255, 255, 0.14)', 
              fontSize: isTabletLeftCard ? '9px' : '12px', 
              fontFamily: 'Inter', 
              fontWeight: '500',
              transition: 'all 0.3s ease-in-out'
            }}>
              Chat GPT
            </span>
          </div>

          {/* Lindy AI */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            cursor: 'pointer', 
            transition: 'all 0.3s ease-in-out',
            marginRight: isTabletLeftCard ? '16px' : '46px',
            transform: currentLogoIndex === 1 ? 'scale(1.1)' : 'scale(1)',
            filter: currentLogoIndex === 1 ? 'brightness(1.2)' : 'brightness(1)'
          }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = currentLogoIndex === 1 ? 'scale(1.1)' : 'scale(1)'}>
            <div style={{ 
              width: isTabletLeftCard ? '60px' : '60px', 
              height: isTabletLeftCard ? '60px' : '60px', 
              backgroundColor: '#0A1628', 
              borderRadius: '20px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginBottom: '8px',
              transition: 'all 0.3s ease-in-out'
            }}>
              <Image
                src="/Assets/ImpactSections/Ai_tools/LindyAi.png"
                alt="Lindy AI"
                width={isTabletLeftCard ? 60 : 60}
                height={isTabletLeftCard ? 60 : 60}
                className="opacity-70"
                style={{
                  width: isTabletLeftCard ? '60px' : '60px',
                  height: isTabletLeftCard ? '60px' : '60px',
                  transition: 'all 0.3s ease-in-out'
                }}
              />
            </div>
            <span style={{ 
              color: 'rgba(255, 255, 255, 0.14)', 
              fontSize: isTabletLeftCard ? '9px' : '12px', 
              fontFamily: 'Inter', 
              fontWeight: '500',
              transition: 'all 0.3s ease-in-out'
            }}>
              Lindy AI
            </span>
          </div>

          {/* Zapier */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            cursor: 'pointer', 
            transition: 'all 0.3s ease-in-out',
            marginRight: isTabletLeftCard ? '16px' : '46px',
            transform: currentLogoIndex === 2 ? 'scale(1.1)' : 'scale(1)',
            filter: currentLogoIndex === 2 ? 'brightness(1.2)' : 'brightness(1)'
          }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = currentLogoIndex === 2 ? 'scale(1.1)' : 'scale(1)'}>
            <div style={{ 
              width: isTabletLeftCard ? '60px' : '60px', 
              height: isTabletLeftCard ? '60px' : '60px', 
              backgroundColor: '#0A1628', 
              borderRadius: '20px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginBottom: '8px',
              transition: 'all 0.3s ease-in-out'
            }}>
              <Image
                src="/Assets/ImpactSections/Ai_tools/Zapier.png"
                alt="Zapier"
                width={isTabletLeftCard ? 60 : 60}
                height={isTabletLeftCard ? 60 : 60}
                className="opacity-70"
                style={{
                  width: isTabletLeftCard ? '60px' : '60px',
                  height: isTabletLeftCard ? '60px' : '60px',
                  transition: 'all 0.3s ease-in-out'
                }}
              />
            </div>
            <span style={{ 
              color: 'rgba(255, 255, 255, 0.14)', 
              fontSize: isTabletLeftCard ? '9px' : '12px', 
              fontFamily: 'Inter', 
              fontWeight: '500',
              transition: 'all 0.3s ease-in-out'
            }}>
              Zapier
            </span>
          </div>
          
          {/* Google Gemini - Top row for tablet and desktop */}
          {(isTabletLeftCard || isDesktopTopLeftCard) && (
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              cursor: 'pointer', 
              transition: 'all 0.3s ease-in-out',
              marginRight: isTabletLeftCard ? '16px' : '46px',
              transform: currentLogoIndex === 3 ? 'scale(1.1)' : 'scale(1)',
              filter: currentLogoIndex === 3 ? 'brightness(1.2)' : 'brightness(1)'
            }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = currentLogoIndex === 3 ? 'scale(1.1)' : 'scale(1)'}>
              <div style={{ 
                width: isTabletLeftCard ? '60px' : '112px', 
                height: isTabletLeftCard ? '60px' : '112px', 
                backgroundColor: '#0A1628', 
                borderRadius: '20px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '8px',
                transition: 'all 0.3s ease-in-out'
              }}>
                <Image
                  src="/Assets/ImpactSections/Ai_tools/Gemini.png"
                  alt="Google Gemini"
                  width={isTabletLeftCard ? 60 : 112}
                  height={isTabletLeftCard ? 60 : 112}
                  className="opacity-70"
                  style={{
                    width: isTabletLeftCard ? '60px' : '112px',
                    height: isTabletLeftCard ? '60px' : '112px',
                    transition: 'all 0.3s ease-in-out'
                  }}
                />
              </div>
              <span style={{ 
                color: 'rgba(255, 255, 255, 0.14)', 
                fontSize: isTabletLeftCard ? '9px' : '12px', 
                fontFamily: 'Inter', 
                fontWeight: '500',
                transition: 'all 0.3s ease-in-out'
              }}>
                Google Gemini
              </span>
            </div>
          )}
        </div>

        {/* Bottom Row - 1 Tool Left Aligned (only for mobile) */}
        {!isTabletLeftCard && !isDesktopTopLeftCard && (
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row',
            marginTop: '24px'
          }}>
            {/* Google Gemini */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              cursor: 'pointer', 
              transition: 'all 0.3s ease-in-out',
              transform: currentLogoIndex === 3 ? 'scale(1.1)' : 'scale(1)',
              filter: currentLogoIndex === 3 ? 'brightness(1.2)' : 'brightness(1)'
            }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = currentLogoIndex === 3 ? 'scale(1.1)' : 'scale(1)'}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#0A1628', 
                borderRadius: '20px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '8px',
                transition: 'all 0.3s ease-in-out'
              }}>
                <Image
                  src="/Assets/ImpactSections/Ai_tools/Gemini.png"
                  alt="Google Gemini"
                  width={60}
                  height={60}
                  className="opacity-70"
                  style={{
                    width: '60px',
                    height: '60px',
                    transition: 'all 0.3s ease-in-out'
                  }}
                />
              </div>
              <span style={{ 
                color: 'rgba(255, 255, 255, 0.14)', 
                fontSize: '12px', 
                fontFamily: 'Inter', 
                fontWeight: '500',
                transition: 'all 0.3s ease-in-out'
              }}>
                Google Gemini
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 