"use client";

import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import styles from '../Breakdown.module.css';

interface DiscoveryCallProps {
  animationProgress: MotionValue<number>;
  imageAnimationProgress: MotionValue<number>;
  isMobile?: boolean;
}

const DiscoveryCall = ({ isMobile, animationProgress, imageAnimationProgress }: DiscoveryCallProps) => {
  if (isMobile) {
    return (
      <>
        <div className={styles.cardNumber}>01</div>
        <div className={styles.cardContent}>
          <div className={styles.cardTitle}>Discovery Call</div>
          <div className={styles.cardSubtitle}>
            We learn your process, pain points, and tools.
          </div>
          <div className={styles.cardDescription}>
            Start with a personalized discovery call where we learn about your unique workflows, current tools, and key challenges.<br/><br/>
            This step helps us map out where automation can bring the most value to your daily operations.
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
      style={{ backgroundColor: '#414149', borderRadius: '28px' }}
    >
      <div className="flex items-start justify-between w-full h-full relative">
        {/* Left Content */}
        <div className="relative flex flex-col" style={{ padding: '80px 40px 0 80px', maxWidth: '600px', zIndex: 2 }}>
          <h3 style={{ 
            color: 'white',
            fontSize: '64px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            lineHeight: '1.1',
            marginBottom: '32px'
          }}>
            Discovery<br/>Call
          </h3>
          
          <p style={{ 
            color: 'white',
            fontSize: '32px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            lineHeight: '1.3',
            marginBottom: '24px'
          }}>
            We learn your process,<br/>
            pain points, and tools.
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
            Start with a personalized discovery call where we learn about your unique workflows, current tools, and key challenges.<br/><br/>
            This step helps us map out where automation can bring the most value to your daily operations.
          </p>
        </div>

        {/* Background Number */}
        <div 
          style={{
            position: 'absolute',
            right: '0px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#36363E',
            fontSize: '400px',
            fontWeight: 700,
            fontFamily: 'Inter, sans-serif',
            opacity: 0.4,
            zIndex: 1,
            lineHeight: '1'
          }}
        >
          01
        </div>

        {/* Right Side with Image */}
        <motion.div 
          className="relative" 
          style={{ 
            position: 'absolute',
            left: '580px',
            top: 0,
            width: '565px',
            height: '636px',
            zIndex: 2
          }}
        >
          <motion.img 
            src="/Assets/Breakdown/Discovery_call.png" 
            alt="Professional on a discovery call"
            style={{ 
              width: '565px',
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

export default DiscoveryCall;
