'use client';

import React from 'react';
import Link from 'next/link';

const WhyAi = () => {
  return (
    <>
      <style jsx>{`
        .whyai-mobile-layout {
          display: flex;
        }
        .whyai-tablet-layout {
          display: none;
        }
        .whyai-desktop-layout {
          display: none;
        }
        
        @media (min-width: 768px) and (max-width: 1023px) {
          .whyai-mobile-layout {
            display: none !important;
            visibility: hidden !important;
          }
          .whyai-tablet-layout {
            display: flex !important;
            visibility: visible !important;
          }
          .whyai-desktop-layout {
            display: none !important;
          }
        }
        
        @media (min-width: 1024px) {
          .whyai-mobile-layout {
            display: none !important;
            visibility: hidden !important;
          }
          .whyai-tablet-layout {
            display: none !important;
            visibility: hidden !important;
          }
          .whyai-desktop-layout {
            display: flex !important;
          }
        }
        
        /* Ensure only one layout is visible at any time */
        @media (max-width: 767px) {
          .whyai-tablet-layout, .whyai-desktop-layout {
            display: none !important;
            visibility: hidden !important;
          }
        }
      `}</style>

      {/* Mobile Layout */}
      <section className="whyai-mobile-layout" style={{ 
        width: '100%', 
        height: '100%', 
        position: 'relative', 
        overflow: 'hidden', 
        borderRadius: '28px',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
          }}
        >
          <source src="/Assets/AutomationExplainer/Jun_06__0221_22s_202506060247_gj149.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 2,
        }} />

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 3,
          color: 'white',
          textAlign: 'center',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
        }}>
          <h2 style={{ fontSize: '26px', fontWeight: 'bold' }}>
            Why AI + Automation?
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '16px', maxWidth: '500px' }}>
            <p>You can't automate everything, but you shouldn't do everything manually either.</p>
            <p>AI replaces busywork, not your expertise.</p>
            <p>Time saved = revenue gained and more time to dedicate to building relationships with your clients.</p>
          </div>
          
          <Link 
            href="#contact" 
            style={{
              border: '1px solid white',
              borderRadius: '9999px',
              padding: '12px 24px',
              textDecoration: 'none',
              color: 'white',
              marginTop: '1rem',
            }}
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>

      {/* Tablet Layout */}
      <section className="whyai-tablet-layout" style={{ 
        width: '100%', 
        height: '100%', 
        position: 'relative', 
        overflow: 'hidden', 
        borderRadius: '28px',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '60px'
      }}>
        {/* Video Container - Matching WhatWeAutomate structure */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          paddingLeft: '31px',
          paddingRight: '31px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box'
        }}>
          <div style={{
            maxWidth: '1100px',
            width: '100%',
            height: '100%',
            position: 'relative',
            borderRadius: '28px',
            overflow: 'hidden'
          }}>
            {/* Background Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: 1,
              }}
            >
              <source src="/Assets/AutomationExplainer/Jun_06__0221_22s_202506060247_gj149.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)',
              zIndex: 2,
            }} />
          </div>
        </div>

        {/* Content - Constrained to match WhatWeAutomate */}
        <div style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: '1100px',
          width: '100%',
          color: 'white',
          textAlign: 'center',
          padding: '2rem',
          paddingBottom: '4rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
        }}>
          <h2 style={{ fontSize: '26px', fontWeight: 'bold' }}>
            Why AI + Automation?
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '16px', maxWidth: '500px' }}>
            <p>You can't automate everything, but you shouldn't do everything manually either.</p>
            <p>AI replaces busywork, not your expertise.</p>
            <p>Time saved = revenue gained and more time to dedicate to building relationships with your clients.</p>
          </div>
          
          <Link 
            href="#contact" 
            style={{
              border: '1px solid white',
              borderRadius: '9999px',
              padding: '12px 24px',
              textDecoration: 'none',
              color: 'white',
              marginTop: '1rem',
            }}
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>

      {/* Desktop Layout */}
      <section className="whyai-desktop-layout" style={{ 
        width: '100%', 
        height: '100%', 
        position: 'relative', 
        overflow: 'hidden', 
        borderRadius: '40px',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '80px'
      }}>
        {/* 1440px Content Container */}
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          width: '100%',
          height: '100%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box'
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            borderRadius: '40px',
            overflow: 'hidden'
          }}>
            {/* Background Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: 1,
              }}
            >
              <source src="/Assets/AutomationExplainer/Jun_06__0221_22s_202506060247_gj149.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 80%)',
              zIndex: 2,
            }} />
          </div>
        </div>

        {/* Content - Desktop optimized */}
        <div style={{
          position: 'absolute',
          zIndex: 3,
          maxWidth: '1440px',
          margin: '0 auto',
          width: '100%',
          color: 'white',
          padding: '3rem',
          paddingBottom: '3rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '30px',
        }}>
          <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 18, display: 'flex'}}>
              <div style={{alignSelf: 'stretch', color: 'white', fontSize: 38, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Why AI + Automation?</div>
              <div style={{width: 380}}>
                <p style={{marginBottom: '12px'}}>You can't automate everything, but you shouldn't do everything manually either.</p>
                <p style={{marginBottom: '12px'}}>AI replaces busywork, not your expertise.</p>
                <p>Time saved = revenue gained and more time to dedicate to building relationships with your clients.</p>
              </div>
            </div>
            <Link 
              href="#contact" 
              style={{
                width: 284,
                height: 56,
                padding: 10,
                background: 'transparent',
                borderRadius: 28,
                outline: '1px white solid',
                outlineOffset: '-1px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                display: 'inline-flex',
                textDecoration: 'none',
                color: 'white',
                fontSize: 16,
                fontFamily: 'Inter',
                fontWeight: '500',
                wordWrap: 'break-word',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <div style={{color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Book a Free Consultation</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyAi; 