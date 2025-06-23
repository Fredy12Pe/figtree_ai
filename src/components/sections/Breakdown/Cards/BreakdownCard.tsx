"use client";

import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';
import styles from '../Breakdown.module.css';

interface BreakdownCardProps {
  CardComponent: React.ComponentType<{ animationProgress: MotionValue<number>; imageAnimationProgress: MotionValue<number> }>;
  scrollYProgress: MotionValue<number>;
  index: number;
}

const BreakdownCard = ({ CardComponent, scrollYProgress, index }: BreakdownCardProps) => {
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

  // Last card should stay visible for longer during the pause period
  if (index === 2) {
    // Card 3: Stay fully visible until 90% scroll, then fade out
    const y = 0;
    const scale = 1;
    const opacity = useTransform(scrollYProgress, [0.75, 0.9, 1], [1, 1, 0]);
    
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
};

export default BreakdownCard; 