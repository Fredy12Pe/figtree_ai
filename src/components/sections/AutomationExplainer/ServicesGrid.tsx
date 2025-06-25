'use client';

import React, { useState } from 'react';
import ServiceCard from './ServiceCard';

interface ServicesGridProps {
  className?: string;
  isMobile?: boolean;
}

export default function ServicesGrid({ className = '', isMobile = false }: ServicesGridProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      title: "Smart Lead\nFollow-ups:",
      description: "Auto-reply to leads via email/SMS, qualify, tag, and book.",
      icon: "/Assets/AutomationExplainer/Leads.png"
    },
    {
      title: "AI-Powered\nScheduling:",
      description: "Auto-book showings and sync to calendar.",
      icon: "/Assets/AutomationExplainer/Ai_scheduling.png"
    },
    {
      title: "Contract &\nForm Automation:",
      description: "Auto-fill and deliver common forms and agreements.",
      icon: "/Assets/AutomationExplainer/Contract_automation.png"
    },
    {
      title: "Website AI\nChatbot:",
      description: "GPT-powered agent answers questions and captures leads 24/7.",
      icon: "/Assets/AutomationExplainer/Ai_chatbot.png"
    },
    {
      title: "CRM\nIntegration:",
      description: "Auto-update stages, tags, notes, and pipelines.",
      icon: "/Assets/AutomationExplainer/CRM_integration.png"
    },
    {
      title: "AI Reports &\nNotifications:",
      description: "Get summaries of lead activity and progress.",
      icon: "/Assets/AutomationExplainer/Notifications.png"
    }
  ];

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < services.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (isMobile) {
    return (
      <div className="relative" style={{ width: '398px', margin: '0 auto' }}>
        {/* Current Card */}
        <ServiceCard
          key={currentIndex}
          title={services[currentIndex].title}
          description={services[currentIndex].description}
          icon={services[currentIndex].icon}
          isMobile={true}
        />

        {/* Container for dots and navigation */}
        <div style={{ marginTop: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Indicator Dots */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: index <= currentIndex ? '#FFFFFF' : '#666666',
                    border: 'none',
                    transition: 'background-color 0.2s ease-in-out'
                  }}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div style={{ display: 'flex', gap: '18px' }}>
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="w-[40px] h-[40px] rounded-full flex items-center justify-center transition-all duration-200"
                style={{ 
                  backgroundColor: currentIndex === 0 ? '#191919' : '#86868A',
                  cursor: currentIndex === 0 ? 'default' : 'pointer'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === services.length - 1}
                className="w-[40px] h-[40px] rounded-full flex items-center justify-center transition-all duration-200"
                style={{ 
                  backgroundColor: currentIndex === services.length - 1 ? '#191919' : '#86868A',
                  cursor: currentIndex === services.length - 1 ? 'default' : 'pointer'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`grid h-full ${className}`} 
      style={{ 
        gridTemplateColumns: 'repeat(2, 423px)',
        columnGap: '20px',
        rowGap: '20px',
        alignContent: 'flex-start'
      }}
    >
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
          isMobile={false}
        />
      ))}
    </div>
  );
} 