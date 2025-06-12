import React from 'react';

interface DescriptionProps {
  className?: string;
}

const Description = ({ className = '' }: DescriptionProps) => {
  return (
    <div 
      className={`${className}`}
      style={{ 
        width: '455px', 
        height: '324px',
        justifyContent: 'flex-end', 
        display: 'flex', 
        flexDirection: 'column', 
        color: 'white', 
        fontSize: '18px', 
        fontFamily: 'Inter', 
        fontWeight: 400, 
        wordWrap: 'break-word' 
      }}
    >
      We build custom AI-powered automations that handle the everyday tasks holding your business back. From lead management and scheduling to contracts, CRM updates, and client communications — every part of your workflow is mapped, automated, and fully integrated with your existing tools. Our systems free up hours every week, allowing you to scale operations, stay consistent, and deliver a better client experience — all while keeping full control of your business processes.
    </div>
  );
};

export default Description; 