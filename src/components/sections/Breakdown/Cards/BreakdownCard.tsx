"use client";

import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';

interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  additionalText: string;
  bgColor: string;
}

interface BreakdownCardProps {
  step: Step;
  activeCardIndex: MotionValue<number>;
  index: number;
}

const BreakdownCard = ({ step, activeCardIndex, index }: BreakdownCardProps) => {
  const distance = useTransform(activeCardIndex, (latest) => index - latest);

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
      className="absolute w-[400px] h-[600px] rounded-[28px] overflow-hidden text-white"
      style={{ 
        y,
        scale,
        opacity,
        zIndex: 3 - index,
        backgroundColor: step.bgColor,
      }}
    >
      {/* Background Number */}
      <div 
        className="absolute z-0 opacity-30 leading-none"
        style={{
          fontSize: '260px',
          color: numberColor,
          right: '-16px',
          bottom: '-30px',
          fontFamily: 'Inter',
          fontWeight: 600,
          wordWrap: 'break-word',
      }}
    >
        {step.number}
      </div>

      {/* Card Content */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 p-8 flex flex-col justify-start">
          <div style={{ width: '290px', height: '265px', marginLeft: '36px', marginTop: '36px' }}>
            <h3 
              className="" 
              style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '26px', color: 'white' }}
            >
              {step.title}
            </h3>
            <div style={{ height: '8px' }} />
            <p 
              className="" 
              style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '18px', color: 'rgba(255, 255, 255, 0.60)' }}
            >
              {step.subtitle}
            </p>
            <div style={{ height: '14px' }} />
            <p 
              className="leading-relaxed" 
              style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', color: 'white' }}
            >
              {step.description}
            </p>
            <div style={{ height: '16px' }} />
            <p 
              className="leading-relaxed" 
              style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', color: 'white' }}
            >
              {step.additionalText}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BreakdownCard; 







