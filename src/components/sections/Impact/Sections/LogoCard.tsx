"use client";
import React from 'react';
import { useRef, useEffect } from 'react';
import { motion, MotionValue } from 'framer-motion';

interface LogoCardProps {
  className?: string;
}

const LogoCard: React.FC<LogoCardProps> = ({ className = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.currentTime >= 7) {
        video.currentTime = 1.5;
      }
    };

    const handleEnded = () => {
      video.currentTime = 1.5;
      video.play();
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);
    
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 1.5;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 1.5;
    }
  };

  return (
    <div 
      className={`rounded-[28px] min-h-[390px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-102 relative overflow-hidden ${className}`}
      style={{
        background: 'black',
        position: 'relative',
        zIndex: 0
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          borderRadius: '28px',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      >
        <source
          src="/Assets/ImpactSections/Video_highlight/In_a_dark_202505221920.mp4"
          type="video/mp4"
        />
      </video>
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 46, 122, 0.8) 100%)',
          borderRadius: '28px',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 999
        }}
      />
    </div>
  );
}

export default LogoCard; 