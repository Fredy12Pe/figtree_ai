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
            color: '#36363E',
            fontSize: '400px',
            marginRight: '30px',
            fontWeight: 700,
            fontFamily: 'Inter, sans-serif',
            zIndex: 1
          }}
        >
          01
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
              Discovery<br />Call
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
              We learn your process,<br />
              pain points, and tools.
            </p>
            
            <p style={{ 
              color: 'white',
              fontSize: '18px',
              fontFamily: 'Inter',
              fontWeight: 400,
              wordWrap: 'break-word',
              width: '440px'
            }}>
              Start with a personalized discovery call where we learn about your unique workflows, current tools, and key challenges.<br /><br />
              This step helps us map out where automation can bring the most value to your daily operations.
            </p>
          </div>
        </div>
        
        {/* Right Side with Animated Image */}
        <div 
          className="relative" 
          style={{ 
            width: '1200px', 
            height: '636px', 
            marginRight: '300px', 
            zIndex: 3 
          }}
        >
          <motion.img 
            src="/Assets/Breakdown/Discovery_call.png" 
            alt="Professional on a discovery call"
            style={{ 
              width: 'auto',
              height: '636px',
              position: 'absolute',
              right: '50px',
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

export default DiscoveryCall;
