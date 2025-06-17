import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface GoLiveProps {
  className?: string;
  imageAnimationProgress: MotionValue<number>;
}

export default function GoLive({ className = '', imageAnimationProgress }: GoLiveProps) {
  const imageX = useTransform(imageAnimationProgress, [0, 0.5], [100, 0]);
  const imageOpacity = useTransform(imageAnimationProgress, [0, 0.3], [0, 1]);

  return (
    <div 
      className={`w-[1440px] h-[636px] overflow-hidden relative ${className}`}
      style={{ backgroundColor: '#E5CEB9', borderRadius: '28px' }}
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
            color: '#D9C1AB',
            fontSize: '400px',
            marginRight: '30px',
            fontWeight: 700,
            fontFamily: 'Inter, sans-serif',
            zIndex: 1
          }}
        >
          03
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
              Go live in<br />2-4 weeks
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
              Launch your automation system.<br />Win back your focus. Save time.
            </p>
            
            <p style={{ 
              color: 'white',
              fontSize: '18px',
              fontFamily: 'Inter',
              fontWeight: 400,
              wordWrap: 'break-word',
              width: '440px'
            }}>
              Your automation system is fully implemented and launched within 2-4 weeks. <br/><br/>We provide onboarding support and refinements, so you can shift your focus from repetitive tasks to higher-impact work, fast.
            </p>
          </div>
        </div>
        
        {/* Right Side with Animated Image */}
        <div 
          className="relative" 
          style={{ 
            width: '1200px', 
            height: '636px', 
            marginRight: '370px', 
            zIndex: 3 
          }}
        >
          <motion.img 
            src="/Assets/Breakdown/Go_live.png" 
            alt="Professional woman with tablet ready to go live"
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
}
