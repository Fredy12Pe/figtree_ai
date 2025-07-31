"use client";
import React, { useEffect, useRef } from 'react';

export default function LogoCard({ className = '' }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Determine tablet sizing based on className
  const isTabletBottomCard = className.includes('tablet-bottom-card');
  
  // Define tablet-specific styles
  const tabletCardStyle = isTabletBottomCard ? {
    width: '244px',
    height: '216px',
    borderRadius: '28px'
  } : {};
  
  // Set video to start from 1 second and loop
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 1;
      videoRef.current.play().catch(console.error);
    }
  }, []);
  
  return (
    <div 
      className={`
        relative overflow-hidden rounded-[28px]
        ${isTabletBottomCard ? '' : 'h-[285px] w-[400px]'}
        cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.02] 
        flex flex-col
        ${isTabletBottomCard ? '' : 'm-[6px]'}
        bg-black
        ${className}
      `}
      style={tabletCardStyle}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        style={{ zIndex: 1 }}
      >
        <source src="/Assets/ImpactSections/Video_highlight/In_a_dark_202505221920.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div 
        className="absolute top-0 left-0 w-full h-full"
        style={{
          zIndex: 2,
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 46, 122, 0.60) 100%)',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
} 