'use client';

import React, { useState } from 'react';

const videoSrc = '/Assets/AutomationExplainer/Jun_06__0221_22s_202506060247_gj149.mp4';

export default function VideoExplainerSection() {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    width: '284px',
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

  return (
    <section
      className="w-full flex items-center justify-center"
      style={{ backgroundColor: '#000000', minHeight: '85vh' }}
    >
      <div
        className="relative w-[1440px] h-[620px] overflow-hidden"
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
            width: '380px',
            color: 'white',
          }}
        >
          <h2
            className="mb-8"
            style={{
              width: '426px',
              fontSize: '38px',
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
              width: '100%',
              fontSize: '16px',
              fontFamily: 'Inter',
              fontWeight: 500,
              lineHeight: '22px',
              wordWrap: 'break-word',
              color: 'white',
              margin: 0,
            }}
          >
            You can't automate everything, but you shouldn't do everything manually either.<br /><br />
            AI replaces busywork, not your expertise.<br /><br />
            Time saved = revenue gained and more time to dedicate to building relationships with your clients.
          </p>
          <div
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              style={textStyle}
            >
              Book a Free Consultation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 