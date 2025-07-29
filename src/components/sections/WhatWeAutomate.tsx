'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    icon: '/Assets/AutomationExplainer/Leads.png',
    title: <>Smart Lead <br /> Follow-ups:</>,
    description: 'Auto-reply to leads via email/SMS, qualify, tag, and book.',
  },
  {
    icon: '/Assets/AutomationExplainer/Ai_scheduling.png',
    title: <>AI-Powered <br /> Scheduling:</>,
    description: 'Auto-book showings and sync to calendar.',
  },
  {
    icon: '/Assets/AutomationExplainer/Contract_automation.png',
    title: <>Contract & Form <br /> Automation:</>,
    description: 'Auto-fill and deliver common forms and agreements.',
  },
  {
    icon: '/Assets/AutomationExplainer/Ai_chatbot.png',
    title: <>Website AI <br /> Chatbot:</>,
    description: 'GPT-powered agent answers questions and captures leads 24/7.',
  },
  {
    icon: '/Assets/AutomationExplainer/CRM_integration.png',
    title: <>CRM <br /> Integration:</>,
    description: 'Auto-update stages, tags, notes, and pipelines.',
  },
  {
    icon: '/Assets/AutomationExplainer/Notifications.png',
    title: <>AI Reports & <br /> Notifications:</>,
    description: 'Get summaries of lead activity and progress.',
  },
];

const WhatWeAutomate = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < features.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const inactiveColor = '#2C2C2E';
  const activeColor = '#636366';

  return (
    <>
      <style jsx>{`
        .whatweautomate-mobile-layout {
          display: flex;
        }
        .whatweautomate-tablet-layout {
          display: none;
        }
        .whatweautomate-desktop-layout {
          display: none;
        }
        
        @media (min-width: 768px) and (max-width: 1023px) {
          .whatweautomate-mobile-layout {
            display: none !important;
          }
          .whatweautomate-tablet-layout {
            display: flex !important;
          }
          .whatweautomate-desktop-layout {
            display: none !important;
          }
        }
        
        @media (min-width: 1024px) {
          .whatweautomate-mobile-layout {
            display: none !important;
          }
          .whatweautomate-tablet-layout {
            display: none !important;
          }
          .whatweautomate-desktop-layout {
            display: flex !important;
          }
        }
        
        @media (max-width: 767px) {
          .whatweautomate-tablet-layout, .whatweautomate-desktop-layout {
            display: none !important;
          }
        }
      `}</style>

      {/* Mobile Layout (Original Carousel) */}
      <div className="whatweautomate-mobile-layout" style={{ width: '100%', flexDirection: 'column', alignItems: 'center', paddingTop: '36px' }}>
        {/* Text Content */}
        <div style={{ width: '358px', marginBottom: '48px' }}>
          <div style={{ marginBottom: '36px' }}>
            <h2 style={{ color: 'white', fontSize: '26px', fontWeight: 600, lineHeight: '1.1', marginBottom: '10px' }}>
              What we automate
            </h2>
            <p style={{ color: '#373737', fontSize: '20px', fontWeight: 600, lineHeight: '1.4' }}>
              Smarter workflows. <br />
              Better results.
            </p>
          </div>
          <p style={{ color: 'white', fontSize: '16px', lineHeight: '1.7' }}>
            We build custom AI-powered automations that handle the everyday tasks holding your business back. From lead management and scheduling to contracts, CRM updates, and client communications — every part of your workflow is mapped, automated, and fully integrated with your existing tools. Our systems free up hours every week, allowing you to scale operations, stay consistent, and deliver a better client experience — all while keeping full control of your business processes.
          </p>
        </div>

        {/* Carousel */}
        <div style={{ position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              style={{ 
                width: '398px', 
                height: '280px',
                backgroundColor: '#1C1C1E',
                borderRadius: '28px',
                paddingLeft: '40px',
                paddingRight: '24px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {/* Main Content Group */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '290px' }}>
                {/* Icon and Heading Group */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
                  <Image src={features[currentIndex].icon} alt="" width={56} height={56} />
                  <h3 style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
                    {features[currentIndex].title}
                  </h3>
                </div>
                {/* Description */}
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '16px' }}>
                  {features[currentIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Controls */}
          <div style={{ 
            width: '398px',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            marginTop: '24px' 
          }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      border: 'none',
                      cursor: 'pointer',
                      backgroundColor: currentIndex === index ? 'white' : 'rgba(255, 255, 255, 0.3)',
                    }}
                  />
                ))}
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                  onClick={handlePrev} 
                  style={{ 
                    background: currentIndex === 0 ? inactiveColor : activeColor, 
                    borderRadius: '50%', 
                    padding: '8px', 
                    border: 'none', 
                    cursor: currentIndex === 0 ? 'not-allowed' : 'pointer', 
                    display: 'flex',
                    transition: 'background-color 0.3s',
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" style={{ width: '20px', height: '20px', opacity: currentIndex === 0 ? 0.2 : 1, transition: 'opacity 0.3s' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button 
                  onClick={handleNext} 
                  style={{ 
                    background: currentIndex === features.length - 1 ? inactiveColor : activeColor, 
                    borderRadius: '50%', 
                    padding: '8px', 
                    border: 'none', 
                    cursor: currentIndex === features.length - 1 ? 'not-allowed' : 'pointer', 
                    display: 'flex',
                    transition: 'background-color 0.3s',
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" style={{ width: '20px', height: '20px', opacity: currentIndex === features.length - 1 ? 0.2 : 1, transition: 'opacity 0.3s' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>
        </div>
      </div>

      {/* Tablet Layout (Text Top, 2x3 Grid Below) */}
      <div 
        className="whatweautomate-tablet-layout" 
        style={{
          width: '100%',
          paddingLeft: '31px',
          paddingRight: '31px',
          paddingTop: '72px',
          paddingBottom: '72px',
          background: 'black',
          overflow: 'hidden',
          borderTopLeftRadius: '28px',
          borderTopRightRadius: '28px',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '40px',
          boxSizing: 'border-box'
        }}
      >
        {/* Top Text Content */}
        <div style={{
          maxWidth: '1100px',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '32px',
          display: 'flex',
          textAlign: 'left',
          width: '100%',
          alignSelf: 'flex-start'
        }}>
          {/* Heading Group (Heading + Subheading) */}
          <div style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '8px',
            display: 'flex'
          }}>
            <div style={{
              color: 'white',
              fontSize: '26px',
              fontFamily: 'Inter',
              fontWeight: '600',
              wordWrap: 'break-word'
            }}>
              What we automate
            </div>
            <div style={{
              color: '#373737',
              fontSize: '20px',
              fontFamily: 'Inter',
              fontWeight: '600',
              wordWrap: 'break-word'
            }}>
              Smarter workflows. <br/>Better results.
            </div>
          </div>
          
          {/* Paragraph */}
          <div style={{
            color: 'white',
            fontSize: '16px',
            fontFamily: 'Inter',
            fontWeight: '400',
            wordWrap: 'break-word',
            lineHeight: '1.6',
            width: '75%'
          }}>
            We build custom AI-powered automations that handle the everyday tasks holding your business back. From lead management and scheduling to contracts, CRM updates, and client communications — every part of your workflow is mapped, automated, and fully integrated with your existing tools. Our systems free up hours every week, allowing you to scale operations, stay consistent, and deliver a better client experience — all while keeping full control of your business processes.
          </div>
        </div>

        {/* 2x3 Grid Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(3, 224px)',
          gap: '16px',
          width: '100%',
          maxWidth: '1100px'
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                width: '100%',
                height: '224px',
                background: '#191919',
                borderRadius: '28px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                display: 'flex'
              }}
            >
              <div style={{
                paddingLeft: '30px',
                width: '350px',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '12px',
                display: 'flex'
              }}>
                {/* Icon and Title Group */}
                <div style={{
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '8px',
                  display: 'flex'
                }}>
                  <Image src={feature.icon} alt="" width={48} height={48} />
                  <div style={{
                    color: 'white',
                    fontSize: '18px',
                    fontFamily: 'Inter',
                    fontWeight: '700',
                    wordWrap: 'break-word'
                  }}>
                    {feature.title}
                  </div>
                </div>
                {/* Paragraph */}
                <div style={{
                  color: 'white',
                  fontSize: '16px',
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  wordWrap: 'break-word'
                }}>
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout (3x2 Grid) */}
      <div 
        className="whatweautomate-desktop-layout" 
        style={{
          width: '100%',
          paddingTop: '120px',
          paddingBottom: '120px',
          background: 'black',
          overflow: 'hidden',
          borderTopLeftRadius: '40px',
          borderTopRightRadius: '40px',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '80px',
          boxSizing: 'border-box'
        }}
      >
        {/* 1440px Content Container */}
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '80px',
          width: '100%'
        }}>
          {/* Top Text Content */}
          <div style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '40px',
            display: 'flex',
            textAlign: 'left',
            width: '100%'
          }}>
            {/* Heading Group (Heading + Subheading) */}
            <div style={{
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '16px',
              display: 'flex'
            }}>
              <div style={{
                color: 'white',
                fontSize: '48px',
                fontFamily: 'Inter',
                fontWeight: '600',
                wordWrap: 'break-word'
              }}>
                What we automate
              </div>
              <div style={{
                color: '#373737',
                fontSize: '32px',
                fontFamily: 'Inter',
                fontWeight: '600',
                wordWrap: 'break-word'
              }}>
                Smarter workflows. <br/>Better results.
              </div>
            </div>
            
            {/* Paragraph */}
            <div style={{
              color: 'white',
              fontSize: '20px',
              fontFamily: 'Inter',
              fontWeight: '400',
              wordWrap: 'break-word',
              lineHeight: '1.7',
              width: '70%'
            }}>
              We build custom AI-powered automations that handle the everyday tasks holding your business back. From lead management and scheduling to contracts, CRM updates, and client communications — every part of your workflow is mapped, automated, and fully integrated with your existing tools. Our systems free up hours every week, allowing you to scale operations, stay consistent, and deliver a better client experience — all while keeping full control of your business processes.
            </div>
          </div>

          {/* 3x2 Grid Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(2, 280px)',
            gap: '24px',
            width: '100%'
          }}>
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  width: '100%',
                  height: '280px',
                  background: '#191919',
                  borderRadius: '32px',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  display: 'flex',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  paddingLeft: '40px',
                  paddingRight: '40px',
                  width: '100%',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '20px',
                  display: 'flex'
                }}>
                  {/* Icon and Title Group */}
                  <div style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: '16px',
                    display: 'flex'
                  }}>
                    <Image src={feature.icon} alt="" width={64} height={64} />
                    <div style={{
                      color: 'white',
                      fontSize: '24px',
                      fontFamily: 'Inter',
                      fontWeight: '700',
                      wordWrap: 'break-word',
                      lineHeight: '1.3'
                    }}>
                      {feature.title}
                    </div>
                  </div>
                  {/* Paragraph */}
                  <div style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '18px',
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    wordWrap: 'break-word',
                    lineHeight: '1.6'
                  }}>
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeAutomate; 