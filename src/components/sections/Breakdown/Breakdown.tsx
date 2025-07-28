"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import styles from './Breakdown.module.css'; // Assuming this is needed for root styles
import BreakdownCard from './Cards/BreakdownCard';

// Tablet-specific card component - exact copy of mobile behavior
const TabletBreakdownCard = ({ step, activeCardIndex, index }: { 
  step: any, 
  activeCardIndex: MotionValue<number>, 
  index: number 
}) => {
  // EXACT SAME transforms as mobile BreakdownCard
  const distance = useTransform(activeCardIndex, (latest: number) => index - latest);

  const y = useTransform(
    distance,
    [-1, 0, 1, 2, 3],
    [-50, 0, 20, 40, 60]
  );

  const scale = useTransform(
    distance,
    [-1, 0, 1, 2, 3],
    [0.8, 1, 0.9, 0.8, 0.7]
  );

  const opacity = useTransform(
    distance,
    [-1, 0],
    [0, 1]
  );

  const numberColor = step.bgColor === "#E5CEB9" ? "#D9C1AB" : 
                      step.bgColor === "#EF7822" ? "#DE7223" : "#36363E";

  return (
    <motion.div
      className="absolute rounded-[28px] overflow-hidden text-white"
      style={{ 
        y,
        scale,
        opacity,
        zIndex: 3 - index,
        backgroundColor: step.bgColor,
        width: '758px',
        height: '420px'
      }}
    >
      {/* Background Number */}
      <div 
        className="absolute z-0 opacity-50 leading-none"
        style={{
          fontSize: '220px',
          color: numberColor,
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: 'Inter',
          fontWeight: 600,
          wordWrap: 'break-word',
        }}
      >
        {step.number}
      </div>

      {/* Card Content - tablet specific layout */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 p-8 flex flex-col justify-start">
          <div style={{ width: '368px', marginLeft: '46px', marginTop: '65px' }}>
            <h3 
              style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '26px', color: 'white' }}
            >
              {step.title}
            </h3>
            <div style={{ height: '6px' }} />
            <p 
              style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '18px', color: 'rgba(255, 255, 255, 0.60)' }}
            >
              {step.subtitle}
            </p>
            <div style={{ height: '22px' }} />
            <p 
              className="leading-relaxed" 
              style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', color: 'white', lineHeight: '1.6' }}
            >
              {step.description}
            </p>
            <div style={{ height: '16px' }} />
            <p 
              className="leading-relaxed" 
              style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', color: 'white', lineHeight: '1.6' }}
            >
              {step.additionalText}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    subtitle: "We learn your process, pain points, and tools.",
    description: "Start with a personalized discovery call where we learn about your unique workflows, current tools, and key challenges.",
    additionalText: "This step helps us map out where automation can bring the most value to your daily operations.",
    bgColor: "#414149"
  },
  {
    number: "02",
    title: "Custom Automation",
    subtitle: "We build and implement your AI solutions.",
    description: "Our team builds and implements custom AI automation solutions tailored to your specific needs. We integrate with your existing tools and create seamless workflows.",
    additionalText: "This process transforms your manual tasks into efficient, automated systems that save time and reduce errors.",
    bgColor: "#EF7822"
  },
  {
    number: "03",
    title: "Go Live & Support",
    subtitle: "We launch and provide ongoing assistance.",
    description: "We launch your automation system and provide ongoing support to ensure everything runs smoothly. Our team monitors performance and makes adjustments as needed.",
    additionalText: "This ensures your automation continues to maximize productivity gains and evolve with your business needs.",
    bgColor: "#E5CEB9"
  }
];

const Breakdown = ({ className = '' }) => {
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);
  const tabletContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: containerRef2,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: tabletScrollYProgress } = useScroll({
    target: tabletContainerRef,
    offset: ["start start", "end end"],
  });

  const activeCardIndex = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.7, 0.8, 1],
    [0, 0, 1, 1, 2, 2]
  );

  const activeCardIndex2 = useTransform(
    scrollYProgress2,
    [0, 0.2, 0.3, 0.7, 0.8, 1],
    [0, 0, 1, 1, 2, 2]
  );

  const tabletActiveCardIndex = useTransform(
    tabletScrollYProgress,
    [0, 0.15, 0.25, 0.45, 0.55, 0.75, 0.85, 1],
    [0, 0, 0, 1, 1, 1, 2, 2]
  );

  return (
    <>
      <style jsx>{`
        .mobile-breakdown {
          display: block;
        }
        .tablet-breakdown {
          display: none;
        }
        .desktop-breakdown {
          display: none;
        }
        
        @media (min-width: 768px) and (max-width: 1023px) {
          .mobile-breakdown {
            display: none !important;
          }
          .tablet-breakdown {
            display: block !important;
          }
          .desktop-breakdown {
            display: none !important;
          }
        }
        
        @media (min-width: 1024px) {
          .mobile-breakdown {
            display: none !important;
          }
          .tablet-breakdown {
            display: none !important;
          }
          .desktop-breakdown {
            display: block !important;
          }
        }
        
        @media (max-width: 767px) {
          .tablet-breakdown, .desktop-breakdown {
            display: none !important;
          }
        }
      `}</style>

      {/* Mobile Layout */}
      <div ref={containerRef} className={`mobile-breakdown ${styles.container} ${className}`}>
        <div className={styles.stickyArea}>
          <div 
            className={styles.backgroundImage}
            style={{ backgroundImage: 'url(/Assets/Breakdown/Main_backgound.png)'}} 
          />
          
          <div className="h-full w-full flex flex-col justify-between items-center">
            {/* Main Content Block */}
            <div className="flex flex-col items-center pt-[60px]">
              {/* Title */}
              <div className="w-full px-4 sm:px-8 md:px-20 lg:px-[240px] z-20">
                <h2 
                  className="text-black m-0 leading-tight text-center" 
                  style={{ 
                    fontSize: '28px',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                  }}
                >
                  How it works
                </h2>
              </div>

              {/* Spacer */}
              <div style={{ height: '28px' }} />

              {/* Cards Container */}
              <div className="relative w-[400px] h-[600px] pointer-events-none mx-auto">
                {steps.map((step, index) => (
                  <BreakdownCard
                    key={index}
                    step={step}
                    index={index}
                    activeCardIndex={activeCardIndex}
                  />
                ))}
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <motion.div
              className="text-black opacity-10 flex flex-col items-center pb-[32px]"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
                ease: "easeInOut",
              }}
            >
              <span className="font-medium">Scroll</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m0 0l6-6m-6 6l-6-6"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tablet Layout */}
      <div ref={tabletContainerRef} className={`tablet-breakdown ${styles.container}`}>
        
        {/* Debug indicator */}
        <div style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          background: 'blue',
          color: 'white',
          padding: '5px',
          zIndex: 1000,
          fontSize: '12px'
        }}>
          TABLET BREAKDOWN ACTIVE
        </div>
        
        <div className={styles.stickyArea}>
          <div 
            className={styles.backgroundImage}
            style={{ backgroundImage: 'url(/Assets/Breakdown/Main_backgound.png)'}} 
          />
          
          <div className="h-full w-full flex flex-col justify-between items-center">
            {/* Main Content Block */}
            <div className="flex flex-col items-center pt-[110px]">
              {/* Title */}
              <div className="w-full px-4 sm:px-8 md:px-20 lg:px-[240px] z-20">
                <h2 
                  className="text-black m-0 leading-tight text-center" 
                  style={{ 
                    fontSize: '38px',
                    fontFamily: 'Inter',
                    fontWeight: 600,
                  }}
                >
                  How it works
                </h2>
              </div>

              {/* Spacer */}
              <div style={{ height: '20px' }} />

              {/* Cards Container - Tablet Specific Size */}
              <div className="relative pointer-events-none mx-auto" style={{
                width: '758px',
                height: '420px'
              }}>
                {steps.map((step, index) => (
                  <TabletBreakdownCard
                    key={index}
                    step={step}
                    index={index}
                    activeCardIndex={tabletActiveCardIndex}
                  />
                ))}
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <motion.div
              className="text-black opacity-10 flex flex-col items-center pb-[32px]"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
                ease: "easeInOut",
              }}
            >
              <span className="font-medium">Scroll</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m0 0l6-6m-6 6l-6-6"
                />
              </svg>
            </motion.div>
          </div>
          
        </div>
      </div>

      {/* Desktop Layout */}
      <div ref={containerRef2} className={`desktop-breakdown ${styles.container} ${className}`}>
        <div className={styles.stickyArea}>
          <div 
            className={styles.backgroundImage}
            style={{ backgroundImage: 'url(/Assets/Breakdown/Main_backgound.png)'}} 
          />
          
          <div className="h-full w-full flex flex-col justify-between items-center">
            {/* Main Content Block */}
            <div className="flex flex-col items-center pt-[60px]">
              {/* Title */}
              <div className="w-full px-4 sm:px-8 md:px-20 lg:px-[240px] z-20">
                <h2 
                  className="text-black m-0 leading-tight text-center" 
                  style={{ 
                    fontSize: '28px',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                  }}
                >
                  How it works
                </h2>
              </div>

              {/* Spacer */}
              <div style={{ height: '28px' }} />

              {/* Cards Container */}
              <div className="relative w-[400px] h-[600px] pointer-events-none mx-auto">
                {steps.map((step, index) => (
                  <BreakdownCard
                    key={index}
                    step={step}
                    index={index}
                    activeCardIndex={activeCardIndex2}
                  />
                ))}
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <motion.div
              className="text-black opacity-10 flex flex-col items-center pb-[32px]"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
                ease: "easeInOut",
              }}
            >
              <span className="font-medium">Scroll</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m0 0l6-6m-6 6l-6-6"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breakdown;