"use client";

import React, { useRef, useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';
import DiscoveryCall from './Cards/Discovery_call';
import Automation from './Cards/Automation';
import GoLive from './Cards/Go_live';
import styles from './Breakdown.module.css';
import BreakdownCard from './Cards/BreakdownCard';

interface BreakdownProps {
  className?: string;
}

const cardComponents = [DiscoveryCall, Automation, GoLive];

const Breakdown = ({ className = '' }: BreakdownProps) => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Always create scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
    layoutEffect: false
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1023);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div ref={containerRef} className={`${styles.container} ${className}`}>
      <div className={styles.stickyArea}>
        <div 
          className={styles.backgroundImage}
          style={{ backgroundImage: 'url(/Assets/Breakdown/Main_backgound.png)' }} 
        />

        <div className={styles.titleSection}>
          <h2 className={styles.sectionTitle}>
            How It Works
          </h2>
        </div>

        <div className={styles.viewport} style={{ height: isMobile ? '561px' : 'auto' }}>
          <div className={styles.cardContainer}>
            {cardComponents.map((CardComponent, index) => (
              <BreakdownCard
                key={index}
                CardComponent={CardComponent}
                scrollYProgress={scrollYProgress}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breakdown;