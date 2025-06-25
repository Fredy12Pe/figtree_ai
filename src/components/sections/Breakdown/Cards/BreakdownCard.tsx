"use client";

import React, { useEffect, useState } from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';
import styles from '../Breakdown.module.css';

interface BreakdownCardProps {
  CardComponent: React.ComponentType<{ animationProgress: MotionValue<number>; imageAnimationProgress: MotionValue<number>; isMobile?: boolean }>;
  scrollYProgress: MotionValue<number>;
  index: number;
}

const BreakdownCard = ({ CardComponent, scrollYProgress, index }: BreakdownCardProps) => {
  const [isMobile, setIsMobile] = useState(false);

  // Create all motion values first
  const cardProgress = useTransform(scrollYProgress, 
    index === 0 
      ? [0, 0.25] 
      : index === 2 // Last card
        ? [0.5, 0.75]
        : [index * 0.25, (index + 1) * 0.25], 
    [0, 1]
  );

  const imageProgress = useTransform(scrollYProgress,
    index === 0 
      ? [0, 0.25]
      : index === 2 // Last card
        ? [0.5, 0.75]
        : [Math.max(0, (index - 0.1) * 0.25), (index + 1) * 0.25],
    [0, 1]
  );

  // Mobile animation values
  const mobileOpacity = useTransform(cardProgress, 
    index === 0
      ? [0, 0.7, 0.85]
      : index === 2 // Last card
        ? [0, 0.1, 1]
        : [0, 0.1, 0.7, 0.85], 
    index === 0
      ? [1, 1, 0]
      : index === 2 // Last card
        ? [0, 1, 1]
        : [0, 1, 1, 0]
  );
  
  const mobileScale = useTransform(cardProgress,
    index === 0
      ? [0, 0.7, 0.85]
      : index === 2 // Last card
        ? [0, 0.1, 1]
        : [0, 0.1, 0.7, 0.85],
    index === 0
      ? [1, 1, 0.8]
      : index === 2 // Last card
        ? [0.8, 1, 1]
        : [0.8, 1, 1, 0.8]
  );
  
  const mobileY = useTransform(cardProgress,
    index === 0
      ? [0, 0.7, 0.85]
      : index === 2 // Last card
        ? [0, 0.1, 1]
        : [0, 0.1, 0.7, 0.85],
    index === 0
      ? [0, 0, -100]
      : index === 2 // Last card
        ? [100, 0, 0]
        : [100, 0, 0, -100]
  );

  // Desktop animation values
  const desktopY = useTransform(cardProgress, 
    index === 2 // Last card
      ? [0, 0.7]
      : [0, 0.7, 1], 
    index === 2 // Last card
      ? [0, 0]
      : [0, 0, -200]
  );
  
  const desktopScale = useTransform(cardProgress, 
    index === 2 // Last card
      ? [0, 0.7]
      : [0, 0.7, 1], 
    index === 2 // Last card
      ? [1, 1]
      : [1, 1, 0.8]
  );
  
  const desktopOpacity = useTransform(cardProgress, 
    index === 2 // Last card
      ? [0, 0.7]
      : [0, 0.7, 0.85, 1], 
    index === 2 // Last card
      ? [1, 1]
      : [1, 1, 0.5, 0]
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1023);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cardContent = (
    <CardComponent 
      animationProgress={cardProgress} 
      imageAnimationProgress={imageProgress}
      isMobile={isMobile}
    />
  );

  if (isMobile) {
    return (
      <motion.div
        className={styles.card}
        style={{ 
          opacity: mobileOpacity,
          scale: mobileScale,
          y: mobileY,
          zIndex: 3 - index,
          height: '561px'
        }}
      >
        {cardContent}
      </motion.div>
    );
  }

  if (index === 2) {
    return (
      <motion.div
        key={index}
        className={styles.card}
        style={{ 
          y: 0, 
          scale: 1, 
          opacity: desktopOpacity,
          zIndex: 3 - index 
        }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return (
    <motion.div
      key={index}
      className={styles.card}
      style={{ 
        y: desktopY, 
        scale: desktopScale, 
        opacity: desktopOpacity,
        zIndex: 3 - index 
      }}
    >
      {cardContent}
    </motion.div>
  );
};

export default BreakdownCard; 