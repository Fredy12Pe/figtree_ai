'use client';

import React, { useState, useEffect } from 'react';

const videoSrc = '/Assets/AutomationExplainer/Jun_06__0221_22s_202506060247_gj149.mp4';

export default function VideoExplainerSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1023);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const buttonStyle = {
    width: isMobile ? '100%' : '284px',
    height: '56px',
    marginTop: '40px',
    borderRadius: '28px',
    outline: '1px white solid',
    outlineOffset: '-1px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'inline-flex',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    backgroundColor: isHovered ? 'white' : 'transparent',
  };

  const textStyle: React.CSSProperties = {
    color: isHovered ? 'black' : 'white',
    fontSize: '16px',
    fontFamily: 'Inter',
    fontWeight: 500,
    wordWrap: 'break-word',
  };

  if (isMobile) {
    return (
      <section
        className="w-full flex items-center justify-center"
        style={{ backgroundColor: '#000000', padding: '40px 0' }}
      >
        <div
          className="relative w-[398px] h-[482px] overflow-hidden"
          style={{ borderRadius: '28px' }}
        >
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0,
            }}
            src={videoSrc}
          />

          {/* Gradient Overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(263deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.50) 42%, rgba(0, 0, 0, 0.80) 100%)',
              zIndex: 1,
            }}
          />

          {/* Content */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              left: '40px',
              right: '40px',
              zIndex: 2,
              color: 'white',
            }}
          >
            <h2
              style={{
                fontSize: '28px',
                fontFamily: 'Inter',
                fontWeight: 600,
                wordWrap: 'break-word',
                color: 'white',
                marginBottom: '20px',
              }}
            >
              Why AI + Automation?
            </h2>
            <p
              style={{
                fontSize: '16px',
                fontFamily: 'Inter',
                fontWeight: 400,
                lineHeight: '22px',
                wordWrap: 'break-word',
                color: 'white',
                margin: 0,
                marginBottom: '1rem',
              }}
            >
              You can&apos;t automate everything, but you shouldn&apos;t do everything manually either.
            </p>
            <p
              style={{
                fontSize: '16px',
                fontFamily: 'Inter',
                fontWeight: 400,
                lineHeight: '22px',
                wordWrap: 'break-word',
                color: 'white',
                margin: 0,
                marginBottom: '1rem',
              }}
            >
              AI replaces busywork, not your expertise.
            </p>
            <p
              style={{
                fontSize: '16px',
                fontFamily: 'Inter',
                fontWeight: 400,
                lineHeight: '22px',
                wordWrap: 'break-word',
                color: 'white',
                margin: 0,
                marginBottom: '40px',
              }}
            >
              Time saved = revenue gained and more time to dedicate to building relationships with your clients.
            </p>
            <button
              style={{
                ...buttonStyle,
                ...textStyle,
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Book a Free Consultation
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="w-full flex items-center justify-center"
      style={{ backgroundColor: '#000000', minHeight: '85vh' }}
    >
      <div
        className="relative max-w-[1440px] w-full h-[620px] overflow-hidden mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-24"
        style={{ borderRadius: '28px' }}
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
          src={videoSrc}
        />

        {/* Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(263deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.50) 42%, rgba(0, 0, 0, 0.80) 100%)',
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '80px',
            transform: 'translateY(-50%)',
            zIndex: 2,
            width: '480px',
            color: 'white',
          }}
        >
          <h2
            className="mb-8"
            style={{
              fontSize: '38px',
              fontFamily: 'Inter',
              fontWeight: 700,
              wordWrap: 'break-word',
              color: 'white',
              marginBottom: '20px',
            }}
          >
            Why AI + Automation?
          </h2>
          <p
            style={{
              width: '100%',
              fontSize: '16px',
              fontFamily: 'Inter',
              fontWeight: 400,
              lineHeight: '22px',
              wordWrap: 'break-word',
              color: 'white',
              margin: 0,
              marginBottom: '1rem',
            }}
          >
            You can&apos;t automate everything, but you shouldn&apos;t do everything manually either.
          </p>
          <p
            style={{
              width: '100%',
              fontSize: '16px',
              fontFamily: 'Inter',
              fontWeight: 400,
              lineHeight: '22px',
              wordWrap: 'break-word',
              color: 'white',
              margin: 0,
              marginBottom: '1rem',
            }}
          >
            AI replaces busywork, not your expertise.
          </p>
          <p
            style={{
              width: '100%',
              fontSize: '16px',
              fontFamily: 'Inter',
              fontWeight: 400,
              lineHeight: '22px',
              wordWrap: 'break-word',
              color: 'white',
              margin: 0,
            }}
          >
            Time saved = revenue gained and more time to dedicate to building relationships with your clients.
          </p>
          <button
            style={{
              ...buttonStyle,
              ...textStyle,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
} 