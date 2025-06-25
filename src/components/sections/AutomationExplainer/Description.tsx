import React from 'react';

interface DescriptionProps {
  className?: string;
  isMobile?: boolean;
}

const Description = ({ className = '', isMobile = false }: DescriptionProps) => {
  return (
    <div 
      className={`${className}`}
      style={{ 
        width: isMobile ? '100%' : '455px', 
        color: 'white', 
        fontSize: isMobile ? '16px' : '18px', 
        fontFamily: 'Inter', 
        fontWeight: 400,
        lineHeight: '1.5',
        wordWrap: 'break-word',
        marginBottom: isMobile ? '32px' : 0
      }}
    >
      We build custom AI-powered automations that handle the everyday tasks holding your business back. From lead management and scheduling to contracts, CRM updates, and client communications — every part of your workflow is mapped, automated, and fully integrated with your existing tools. Our systems free up hours every week, allowing you to scale operations, stay consistent, and deliver a better client experience — all while keeping full control of your business processes.
    </div>
  );
};

export default Description; 