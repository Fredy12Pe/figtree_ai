"use client";

import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import styles from '../Breakdown.module.css';

interface AutomationProps {
  animationProgress: MotionValue<number>;
  imageAnimationProgress: MotionValue<number>;
  isMobile?: boolean;
}

const Automation = ({ isMobile, animationProgress, imageAnimationProgress }: AutomationProps) => {
  if (isMobile) {
    return (
      <>
        <div className={styles.cardNumber}>02</div>
        <div className={styles.cardContent}>
          <div className={styles.cardTitle}>Automation Build</div>
          <div className={styles.cardSubtitle}>
            We design and build custom automations based on your goals.
          </div>
          <div className={styles.cardDescription}>
            We design and build custom automation systems tailored to your business goals.<br/><br/>
            From lead follow-ups to CRM syncing, every workflow is crafted to save you time and streamline your process, without disrupting what already works.
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
      style={{ backgroundColor: '#EF7822', borderRadius: '28px' }}
    >
      <div className="flex items-start justify-between w-full h-full relative">
        {/* Left Content */}
        <div className="relative flex flex-col" style={{ padding: '80px 33px 0 80px', maxWidth: '600px', zIndex: 2 }}>
          <h3 style={{ 
            color: 'white',
            fontSize: '64px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            lineHeight: '1.1',
            marginBottom: '32px'
          }}>
            Automation<br/>Build
          </h3>
          
          <p style={{ 
            color: 'white',
            fontSize: '32px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            lineHeight: '1.3',
            marginBottom: '24px'
          }}>
            We design and build custom<br/>
            automations based on your goals.
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
            We design and build custom automation systems tailored to your business goals.<br/><br/>
            From lead follow-ups to CRM syncing, every workflow is crafted to save you time and streamline your process, without disrupting what already works.
          </p>
        </div>

        {/* Background Number */}
        <div 
          style={{
            position: 'absolute',
            right: '0px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#DE7223',
            fontSize: '400px',
            fontWeight: 700,
            fontFamily: 'Inter, sans-serif',
            opacity: 0.6,
            zIndex: 1,
            lineHeight: '1'
          }}
        >
          02
        </div>

        {/* Right Side with Image */}
        <motion.div 
          className="relative" 
          style={{ 
            position: 'absolute',
            left: '600px',
            top: 0,
            width: '689px',
            height: '636px',
            zIndex: 2
          }}
        >
          <motion.img 
            src="/Assets/Breakdown/Automation.png" 
            alt="Professional monitoring automation performance"
            style={{ 
              width: '689px',
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

export default Automation;
