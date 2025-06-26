"use client";

import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import styles from '../Breakdown.module.css';

interface GoLiveProps {
  animationProgress: MotionValue<number>;
  imageAnimationProgress: MotionValue<number>;
  isMobile?: boolean;
}

const GoLive = ({ isMobile, animationProgress, imageAnimationProgress }: GoLiveProps) => {
  if (isMobile) {
    return (
      <>
        <div className={styles.cardNumber}>03</div>
        <div className={styles.cardContent}>
          <div className={styles.cardTitle}>Go live in 2-4 weeks</div>
          <div className={styles.cardSubtitle}>
            Launch your automation system.<br/>
            Win back your focus. Save time.
          </div>
          <div className={styles.cardDescription}>
            Your automation system is fully implemented and launched within 2-4 weeks.<br/><br/>
            We provide onboarding support and refinements, so you can shift your focus from repetitive tasks to higher-impact work, fast.
          </div>
        </div>
      </>
    );
  }

  const imageX = useTransform(imageAnimationProgress, [0, 0.5], [100, 0]);
  const imageOpacity = useTransform(imageAnimationProgress, [0, 0.3], [0, 1]);

  return (
    <div 
      className="w-[1440px] h-[636px] overflow-hidden relative"
      style={{ backgroundColor: '#E5CEB9', borderRadius: '28px' }}
    >
      <div className="flex items-start justify-between w-full h-full relative">
        {/* Left Content */}
        <div className="relative flex flex-col" style={{ padding: '80px 0 0 80px', maxWidth: '600px', zIndex: 2 }}>
          <h3 style={{ 
            color: 'white',
            fontSize: '64px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            lineHeight: '1.1',
            marginBottom: '32px'
          }}>
            Go live in<br/>2-4 weeks
          </h3>
          
          <p style={{ 
            color: 'white',
            fontSize: '32px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            lineHeight: '1.3',
            marginBottom: '24px'
          }}>
            Launch your automation system.<br/>
            Win back your focus. Save time.
          </p>
          
          <p style={{ 
            color: 'white',
            fontSize: '18px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            lineHeight: '1.6',
            opacity: 0.8,
            maxWidth: '480px'
          }}>
            Your automation system is fully implemented and launched within 2-4 weeks.<br/><br/>
            We provide onboarding support and refinements, so you can shift your focus from repetitive tasks to higher-impact work, fast.
          </p>
        </div>

        {/* Background Number */}
        <div 
          style={{
            position: 'absolute',
            right: '0px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#D9C1AB',
            fontSize: '400px',
            fontWeight: 700,
            fontFamily: 'Inter, sans-serif',
            opacity: 0.6,
            zIndex: 1,
            lineHeight: '1'
          }}
        >
          03
        </div>

        {/* Right Side with Image */}
        <motion.div 
          className="relative" 
          style={{ 
            position: 'absolute',
            left: '560px',
            top: 0,
            width: '493px',
            height: '636px',
            zIndex: 2
          }}
        >
          <motion.img 
            src="/Assets/Breakdown/Go_live.png" 
            alt="Professional monitoring automation performance"
            style={{ 
              width: '493px',
              height: '636px',
              objectFit: 'contain',
              objectPosition: 'center',
              x: imageX,
              opacity: imageOpacity
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default GoLive;
