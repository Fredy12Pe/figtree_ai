'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  Code2,
  Link,
  Lock,
  Target,
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "How long does setup take?",
    answer: "Most automation systems are live within 2–4 weeks depending on the complexity of your workflow.",
    icon: <Clock style={{ width: '16px', height: '16px' }} className="text-black" />
  },
  {
    question: "Can this work with my CRM tool?",
    answer: "Yes — we integrate with over 3,000+ apps via Zapier, Make, or custom APIs.",
    icon: <Link style={{ width: '16px', height: '16px' }} className="text-black" />
  },
  {
    question: "Will I still have control over my leads?",
    answer: "Yes — you stay in control. We simply automate the repetitive parts, but you approve all workflows and data stays within your systems.",
    icon: <Lock style={{ width: '16px', height: '16px' }} className="text-black" />
  },
  {
    question: "Which tasks can't be automated?",
    answer: "We focus on high-volume, rule-based tasks (follow-ups, scheduling, CRM updates, forms). Personalized sales conversations and complex judgment calls still require your expertise.",
    icon: <Target style={{ width: '16px', height: '16px' }} className="text-black" />
  },
  {
    question: "Do I need to know code or tech?",
    answer: "Nope — we handle everything. You just tell us how you work and what you need help with.",
    icon: <Code2 style={{ width: '16px', height: '16px' }} className="text-black" />
  },
];

const AccordionItem = ({ item, isOpen, onClick }: { item: FAQItem, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="bg-white shadow-[0px_0px_4px_rgba(0,0,0,0.10)] rounded-[12px] w-full">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left"
        style={{ paddingLeft: '24px', paddingRight: '24px', paddingTop: '24px', paddingBottom: '24px' }}
      >
        <div className="flex items-center gap-[10px]">
          <div 
            className="bg-white shadow-[0px_0px_4px_rgba(0,0,0,0.10)] rounded-[4px]"
            style={{
              width: '32px',
              height: '32px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {item.icon}
          </div>
          <span className="text-black text-[16px] font-medium font-inter">{item.question}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="13" height="6" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L6.5 6L13 0H0Z" fill="black"/>
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-[24px]" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
              <p className="text-gray-600 text-[16px] pl-[34px]">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Desktop-specific accordion item with larger styling
const DesktopAccordionItem = ({ item, isOpen, onClick }: { item: FAQItem, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.08)] rounded-[16px] w-full">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left"
        style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '32px', paddingBottom: '32px' }}
      >
        <div className="flex items-center gap-[16px]">
          <div 
            className="bg-white shadow-[0px_2px_8px_rgba(0,0,0,0.08)] rounded-[8px]"
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {item.icon}
          </div>
          <span className="text-black text-[20px] font-medium font-inter">{item.question}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L8 8L16 0H0Z" fill="black"/>
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-[32px]" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
              <p className="text-gray-600 text-[18px] pl-[48px] leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <style jsx>{`
        .faq-mobile-layout {
          display: block;
        }
        .faq-tablet-layout {
          display: none;
        }
        .faq-desktop-layout {
          display: none;
        }
        
        @media (min-width: 768px) and (max-width: 1023px) {
          .faq-mobile-layout {
            display: none !important;
            visibility: hidden !important;
          }
          .faq-tablet-layout {
            display: flex !important;
            visibility: visible !important;
          }
          .faq-desktop-layout {
            display: none !important;
          }
        }
        
        @media (min-width: 1024px) {
          .faq-mobile-layout {
            display: none !important;
            visibility: hidden !important;
          }
          .faq-tablet-layout {
            display: none !important;
            visibility: hidden !important;
          }
          .faq-desktop-layout {
            display: block !important;
          }
        }
        
        /* Ensure only one layout is visible at any time */
        @media (max-width: 767px) {
          .faq-tablet-layout, .faq-desktop-layout {
            display: none !important;
            visibility: hidden !important;
          }
        }
      `}</style>

      {/* Mobile Layout */}
      <section 
        className="faq-mobile-layout bg-white" 
        style={{ 
          paddingLeft: '16px', 
          paddingRight: '16px', 
          paddingTop: '1rem', 
          paddingBottom: '4rem' 
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div style={{ marginBottom: '28px' }}>
            <h2 
              className="text-bold leading-tight"
              style={{ fontSize: '28px', marginBottom: '10px', fontWeight: 600 }}
            >
              Frequently Asked<br/>Questions
            </h2>
            <p className="text-gray-600" style={{ fontSize: '16px', color: '#666666' }}>
              Quick answers to questions you may have.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tablet Layout */}
      <section 
        className="faq-tablet-layout bg-white" 
        style={{ 
          paddingLeft: '31px', 
          paddingRight: '31px', 
          paddingTop: '2rem',
          paddingBottom: '4rem',
          justifyContent: 'center'
        }}
      >
        <div style={{ maxWidth: '758px', width: '100%' }}>
          <div style={{ marginBottom: '28px' }}>
            <h2 
              className="text-bold leading-tight"
              style={{ fontSize: '28px', marginBottom: '10px', fontWeight: 600 }}
            >
              Frequently Asked<br/>Questions
            </h2>
            <p className="text-gray-600" style={{ fontSize: '16px', color: '#666666' }}>
              Quick answers to questions you may have.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Desktop Layout */}
      <section 
        className="faq-desktop-layout bg-white" 
        style={{ 
          paddingTop: '8rem',
          paddingBottom: '8rem'
        }}
      >
        {/* 1440px Content Container */}
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{ width: '100%' }}>
            <div style={{ marginBottom: '48px', textAlign: 'left' }}>
              <h2 
                className="text-bold leading-tight"
                style={{ 
                  fontSize: '48px', 
                  marginBottom: '16px', 
                  fontWeight: 600,
                  fontFamily: 'Inter',
                  lineHeight: '1.2'
                }}
              >
                Frequently Asked<br/>Questions
              </h2>
              <p className="text-gray-600" style={{ 
                fontSize: '20px', 
                color: '#666666',
                fontFamily: 'Inter',
                lineHeight: '1.5'
              }}>
                Quick answers to questions you may have.
              </p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqData.map((item, index) => (
                <DesktopAccordionItem
                  key={index}
                  item={item}
                  isOpen={openIndex === index}
                  onClick={() => handleClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ; 


