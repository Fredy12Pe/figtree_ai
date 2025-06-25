"use client";
import { useEffect, useState } from 'react';
import ImpactMobile from './ImpactMobile';
import ImpactDesktop from './Impact';

export default function ImpactWrapper() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <ImpactMobile /> : <ImpactDesktop />;
} 