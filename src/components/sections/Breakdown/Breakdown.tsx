"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import DiscoveryCall from './Cards/Discovery_call';
import Automation from './Cards/Automation';
import GoLive from './Cards/Go_live';
import styles from './Breakdown.module.css';

interface BreakdownProps {
  className?: string;
}

const Breakdown = ({ className = '' }: BreakdownProps) => {
  const containerRef = useRef(null);

  // Track scroll progress through the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
    layoutEffect: false // Ensure smooth bidirectional scrolling
  });

  return (
    <div ref={containerRef} className={`${styles.container} ${className}`}>
      <div className={styles.stickyArea}>
        <div 
          className={styles.backgroundImage}
          style={{ backgroundImage: 'url(/Assets/Breakdown/Main_backgound.png)' }} 
        />

        {/* Title Section */}
        <div className={styles.titleSection}>
          <h2 className={styles.sectionTitle}>
            How it works
          </h2>
        </div>

        <div className={styles.cardContainer}>
          {[DiscoveryCall, Automation, GoLive].map((CardComponent, index) => {
            // Cards complete by 75% of scroll, leaving 25% for pause
            const cardProgress = useTransform(scrollYProgress, 
              [index * 0.25, (index + 1) * 0.25], 
              [0, 1]
            );

            // Image animation timing based on card position
            let imageProgress;
            if (index === 0) {
              // First card: Only animate when coming back from second card (scrolling up)
              imageProgress = useTransform(scrollYProgress,
                [0.15, 0.25], // Only in the transition zone from card 2 back to card 1
                [0, 1]        // Animate in when scrolling up
              );
            } else {
              // Other cards: Image animates when previous card is 90% faded
              imageProgress = useTransform(scrollYProgress,
                [Math.max(0, (index - 0.1) * 0.25), (index + 1) * 0.25],
                [0, 1]
              );
            }

            // Last card should stay visible during the pause period (75%-100% of total scroll)
            if (index === 2) {
              // Card 3: Stay fully visible throughout its entire progress + pause
              const y = 0;
              const scale = 1;
              const opacity = useTransform(scrollYProgress, [0.75, 0.95, 1], [1, 1, 0]);
              
              return (
                <motion.div
                  key={index}
                  className={styles.card}
                  style={{ 
                    y, 
                    scale, 
                    opacity,
                    zIndex: 3 - index 
                  }}
                >
                  <CardComponent 
                    animationProgress={cardProgress} 
                    imageAnimationProgress={imageProgress}
                  />
                </motion.div>
              );
            }
            
            // Cards 1 & 2: Normal timing
            const pausePoint = 0.7;
            const fadeStart = 0.85;
            
            const y = useTransform(cardProgress, [0, pausePoint, 1], [0, 0, -200]);
            const scale = useTransform(cardProgress, [0, pausePoint, 1], [1, 1, 0.8]);
            const opacity = useTransform(cardProgress, [0, pausePoint, fadeStart, 1], [1, 1, 0.5, 0]);

            return (
              <motion.div
                key={index}
                className={styles.card}
                style={{ 
                  y, 
                  scale, 
                  opacity,
                  zIndex: 3 - index 
                }}
              >
                <CardComponent 
                  animationProgress={cardProgress} 
                  imageAnimationProgress={imageProgress}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Breakdown;