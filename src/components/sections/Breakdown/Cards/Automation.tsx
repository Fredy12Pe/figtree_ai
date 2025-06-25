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
      className={`w-[1440px] h-[636px] overflow-hidden relative`}
      style={{ backgroundColor: '#EF7822', borderRadius: '28px' }}
    >
      {/* Orange Accent Border */}
      <div className="h-2 bg-orange-500"></div>
      
      {/* Card Content */}
      <div className="h-full flex relative">
        {/* Background Number */}
        <div 
          className="absolute flex items-center justify-center"
          style={{
            right: '40px',
            top: '0px',
            width: '400px',
            height: '636px',
            color: '#DE7223',
            fontSize: '400px',
            marginRight: '30px',
            fontWeight: 700,
            fontFamily: 'Inter, sans-serif',
            zIndex: 1
          }}
        >
          02
        </div>

        {/* Left Content */}
        <div className="text-white flex items-center" style={{ paddingLeft: '78px', width: '954px', zIndex: 2, position: 'relative' }}>
          <div>
            <h3 className="font-semibold" style={{ 
              fontSize: '74px', 
              lineHeight: 'auto', 
              letterSpacing: '0%',
              fontWeight: 700,
              fontFamily: 'Inter, sans-serif',
              marginBottom: '20px',
              color: 'white'
            }}>
              Automation<br />Build
            </h3>
            
            <p style={{ 
              color: 'white',
              fontSize: '24px',
              fontFamily: 'Inter',
              fontWeight: 500,
              wordWrap: 'break-word',
              marginBottom: '16px',
              width: '521px'
            }}>
              We design and build custom<br />
              automations based on your goals.
            </p>
            
            <p style={{ 
              color: 'white',
              fontSize: '18px',
              fontFamily: 'Inter',
              fontWeight: 400,
              wordWrap: 'break-word',
              width: '440px'
            }}>
              We design and build custom automation systems tailored to your business goals.<br /><br />
              From lead follow-ups to CRM syncing, every workflow is crafted to save you time and streamline your process, without disrupting what already works.
            </p>
          </div>
        </div>
        
        {/* Right Side with Animated Image */}
        <div 
          className="relative" 
          style={{ 
            width: '1200px', 
            height: '636px', 
            marginRight: '190px', 
            zIndex: 3 
          }}
        >
          <motion.img 
            src="/Assets/Breakdown/Automation.png" 
            alt="Professional woman working on automation implementation"
            style={{ 
              width: 'auto',
              height: '636px',
              position: 'absolute',
              right: 0,
              top: 0,
              x: imageX,
              opacity: imageOpacity
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Automation;
