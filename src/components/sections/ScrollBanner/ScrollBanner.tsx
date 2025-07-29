'use client';

import React from 'react';

const technologies = [
  "Zapier, ", "GPT-4, ", "Make, ", "Slack, ", "Gmail, ", "Hubspot, ", 
  "Pipedrive, ", "Notion, ", "Airtable, ", "Google Calendar, ", 
  "Typeform, ", "Calendly, ", "Salesforce, ", "etc..."
];

const ScrollBanner = () => {
  return (
    <section className="bg-white" style={{ marginTop: '0', paddingTop: '0' }}>
      <div 
        className="relative w-full overflow-hidden flex items-center"
        style={{ height: '200px' }}
      >
        <div 
          className="flex absolute whitespace-nowrap will-change-transform items-center animate-marquee"
        >
          {[...technologies, ...technologies].map((tech, index) => {
            const isZapier = tech.includes("Zapier");
            return (
              <span 
                key={index} 
                className="inline-block whitespace-nowrap font-inter transition-all duration-300 ease-in-out cursor-pointer"
                style={{
                  color: isZapier ? '#0015FF' : 'rgba(0, 0, 0, 0.10)',
                  fontSize: 'clamp(60px, 8vw, 180px)',
                  fontWeight: 400,
                  wordWrap: 'break-word',
                  marginLeft: '8px',
                  marginRight: '8px',
                }}
              >
                {tech}
              </span>
            );
          })}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 120s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ScrollBanner; 