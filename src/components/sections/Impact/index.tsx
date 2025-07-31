import React, { useRef } from 'react';
import { AItoolsCard, ClientsCard, TurnaroundCard, LogoCard, SoftwareCard } from './Sections';

export default function Impact() {
  console.log('Impact component rendering - PROPER CARD SCALING');
  const videoRef = useRef<HTMLVideoElement>(null);
  
  return (
    <>
      <style jsx>{`
        .impact-mobile-layout {
          display: flex !important;
          flex-wrap: wrap;
          justify-content: center;
          align-items: flex-start;
          gap: 12px;
          padding: 0 16px;
        }
        .impact-tablet-layout {
          display: none !important;
        }
        .impact-desktop-layout {
          display: none !important;
        }
        
        @media (min-width: 768px) and (max-width: 1023px) {
          .impact-mobile-layout {
            display: none !important;
          }
          .impact-tablet-layout {
            display: flex !important;
          }
          .impact-desktop-layout {
            display: none !important;
          }
        }
        
        @media (min-width: 1024px) {
          .impact-mobile-layout {
            display: none !important;
          }
          .impact-tablet-layout {
            display: none !important;
          }
          .impact-desktop-layout {
            display: flex !important;
          }
        }
        
        /* Ensure only one layout is visible */
        @media (max-width: 767px) {
          .impact-tablet-layout, .impact-desktop-layout {
            display: none !important;
            visibility: hidden !important;
          }
        }
        
        /* Desktop card overrides */
        .desktop-top-left-card,
        .desktop-top-right-card,
        .desktop-bottom-left-card,
        .desktop-bottom-middle-card,
        .desktop-bottom-right-card {
          width: 100% !important;
          height: 100% !important;
          max-width: none !important;
          max-height: none !important;
        }
        

        

      `}</style>
      
      <section style={{width: '100%', position: 'relative', background: 'white', paddingTop: '120px', paddingBottom: '60px'}}>
        
        {/* Mobile Layout */}
        <div className="impact-mobile-layout">
          <h2 
            className="text-center text-[28px] w-full mb-7"
            style={{ 
              color: 'black', 
              fontFamily: 'Inter', 
              fontWeight: 600, 
              wordWrap: 'break-word' 
            }}
          >
            Smart tools. Real impact.
          </h2>
          <AItoolsCard />
          <ClientsCard />
          <TurnaroundCard />
          <LogoCard />
          <SoftwareCard />
        </div>
        
        {/* Tablet Layout - Proper Grid */}
        <div className="impact-tablet-layout" style={{
          width: '758px',
          margin: '0 auto',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '28px',
          display: 'flex'
        }}>
          
          {/* Title */}
          <div style={{
            width: '238px',
            height: '94px',
            color: 'black',
            fontSize: '38px',
            fontFamily: 'Inter',
            fontWeight: '600',
            wordWrap: 'break-word'
          }}>
            Smart tools.<br/>Real impact.
          </div>
          
          {/* Cards Container */}
          <div style={{
            alignSelf: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '17px',
            display: 'flex'
          }}>
            
            {/* Top Row - 2 Cards */}
            <div style={{
              alignSelf: 'stretch',
              justifyContent: 'space-between',
              alignItems: 'center',
              display: 'inline-flex',
              gap: '14px'
            }}>
              <AItoolsCard className="tablet-left-card" />
              <ClientsCard className="tablet-right-card" />
            </div>
            
            {/* Bottom Row - 3 Cards */}
            <div style={{
              alignSelf: 'stretch',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '14px',
              display: 'inline-flex'
            }}>
              <TurnaroundCard className="tablet-bottom-card" />
              <LogoCard className="tablet-bottom-card" />
              <SoftwareCard className="tablet-bottom-card" />
            </div>
            
          </div>
        </div>
        
        {/* Desktop Layout */}
        <div className="impact-desktop-layout" style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          background: 'white'
        }}>
          {/* 1440px Content Container */}
          <div style={{
            maxWidth: '1440px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '28px',
            width: '100%'
          }}>
          
          {/* Title */}
          <div style={{
            width: '100%',
            textAlign: 'left',
            color: 'black',
            fontSize: '48px',
            fontFamily: 'Inter',
            fontWeight: '600',
            wordWrap: 'break-word',
            marginBottom: '40px'
          }}>
            Smart tools. Real impact.
          </div>
          
          {/* Cards Container */}
          <div style={{
            alignSelf: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '20px',
            display: 'flex'
          }}>
            
            {/* Top Row - 2 Cards */}
            <div style={{
              alignSelf: 'stretch',
              justifyContent: 'flex-start',
              alignItems: 'center',
              display: 'inline-flex',
              gap: '20px'
            }}>
              {/* Top Left Card - 831x389px */}
              <AItoolsCard className="desktop-top-left-card" />
              
              {/* Top Right Card - 586x389px */}
              <div 
                className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.02]"
                style={{ 
                  width: '586px', 
                  height: '389px',
                  background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 46, 122, 0.46) 100%), url('/Assets/ImpactSections/Clients/image.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '28px',
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <p style={{ color: '#ffffff', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', marginBottom: '2px' }}>
                    Focus On What's Really Important
                  </p>
                  <h3 style={{ color: '#ffffff', fontSize: 36, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', lineHeight: '1.3' }}>
                    Connecting with<br />clients
                  </h3>
                </div>
              </div>
            </div>
            
            {/* Bottom Row - 3 Cards */}
            <div style={{
              alignSelf: 'stretch',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '20px',
              display: 'inline-flex'
            }}>
              {/* Bottom Left Card - 467px */}
              <div 
                className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.02]"
                style={{ 
                  width: '467px', 
                  height: '389px',
                  background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 46, 122, 0.46) 100%), url('/Assets/ImpactSections/Turnaround_time/Group 7.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '28px',
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <h3 style={{ color: '#ffffff', fontSize: 36, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', lineHeight: '1.3' }}>
                  2-4 week<br />turnaround time
                </h3>
              </div>
              
                                                {/* Bottom Middle Card - 467px */}
                    <div 
                      className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.02]"
                      style={{ 
                        width: '467px', 
                        height: '389px',
                        borderRadius: '28px',
                        padding: '36px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      onMouseEnter={() => {
                        if (videoRef.current) {
                          videoRef.current.currentTime = 1;
                          videoRef.current.play();
                        }
                      }}
                      onMouseLeave={() => {
                        if (videoRef.current) {
                          // Create black overlay for fade to black effect
                          const overlay = document.createElement('div');
                          overlay.style.position = 'absolute';
                          overlay.style.top = '0';
                          overlay.style.left = '0';
                          overlay.style.width = '100%';
                          overlay.style.height = '100%';
                          overlay.style.backgroundColor = 'black';
                          overlay.style.opacity = '0';
                          overlay.style.transition = 'opacity 0.3s ease-out';
                          overlay.style.zIndex = '2';
                          overlay.style.borderRadius = '28px';
                          
                          const cardElement = videoRef.current.parentElement;
                          if (cardElement) {
                            cardElement.appendChild(overlay);
                            
                            // Fade to black
                            setTimeout(() => {
                              overlay.style.opacity = '1';
                            }, 10);
                            
                            setTimeout(() => {
                              if (videoRef.current) {
                                videoRef.current.pause();
                                videoRef.current.currentTime = 0;
                              }
                              // Fade back from black
                              overlay.style.opacity = '0';
                              setTimeout(() => {
                                if (cardElement && overlay.parentElement === cardElement) {
                                  cardElement.removeChild(overlay);
                                }
                              }, 300);
                            }, 300);
                          }
                        }
                      }}
                    >
                      <video 
                        ref={videoRef}
                        src="/Assets/ImpactSections/Video_highlight/In_a_dark_202505221920.mp4"
                        muted
                        playsInline
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '28px'
                        }}
                        onTimeUpdate={() => {
                          if (videoRef.current && videoRef.current.duration) {
                            const timeLeft = videoRef.current.duration - videoRef.current.currentTime;
                            if (timeLeft < 1) {
                              videoRef.current.currentTime = 1;
                            }
                          }
                        }}
                      />
                      {/* Gradient Overlay */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 46, 122, 0.46) 100%)',
                        borderRadius: '28px',
                        pointerEvents: 'none',
                        zIndex: 1
                      }}></div>
                    </div>
              
                                  {/* Bottom Right Card - 467px */}
                    <div 
                      className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.02]"
                      style={{ 
                        width: '467px', 
                        height: '389px',
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 46, 122, 0.46) 100%), black',
                        borderRadius: '28px',
                        padding: '36px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        overflow: 'hidden',
                        position: 'relative'
                      }}
                    >
                      <h3 style={{ color: '#ffffff', fontSize: 36, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', lineHeight: '1.3' }}>
                        Connect with<br />currently used<br />software
                      </h3>
                      <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-start', position: 'absolute', bottom: '56px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', transition: 'transform 0.3s ease-in-out' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                          <div style={{ width: '110px', height: '110px', backgroundColor: '#0A1628', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src="/Assets/ImpactSections/Software_connections/Gmail.png" alt="Gmail" style={{ width: '110px', height: '110px', opacity: '1' }} />
                          </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', transition: 'transform 0.3s ease-in-out' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                          <div style={{ width: '110px', height: '110px', backgroundColor: '#0A1628', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src="/Assets/ImpactSections/Software_connections/Notion.png" alt="Notion" style={{ width: '110px', height: '110px', opacity: '1' }} />
                          </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', transition: 'transform 0.3s ease-in-out' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                          <div style={{ width: '110px', height: '110px', backgroundColor: '#0A1628', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src="/Assets/ImpactSections/Software_connections/SalesForce.png" alt="Salesforce" style={{ width: '110px', height: '110px', opacity: '1' }} />
                          </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', transition: 'transform 0.3s ease-in-out' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                          <div style={{ width: '110px', height: '110px', backgroundColor: '#0A1628', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src="/Assets/ImpactSections/Software_connections/Zapier.png" alt="Zapier" style={{ width: '110px', height: '110px', opacity: '1' }} />
                          </div>
                        </div>
                      </div>
                    </div>
            </div>
            
          </div>
        </div>
        </div>
        
      </section>
    </>
  )
} 