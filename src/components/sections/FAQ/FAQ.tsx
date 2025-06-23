"use client";

import React from 'react';
import styles from './FAQ.module.css';
import {
  Clock,
  Code2,
  Link,
  DollarSign,
  Lock,
  Wrench,
  Target,
  TrendingUp
} from 'lucide-react';
import { motion } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "How long does setup take?",
    answer: "Most automation systems are live within 2–4 weeks depending on the complexity of your workflow.",
    icon: <Clock className={styles.icon} />
  },
  {
    question: "Do I need to know code or tech?",
    answer: "Nope — we handle everything. You just tell us how you work and what you need help with.",
    icon: <Code2 className={styles.icon} />
  },
  {
    question: "Can this work with my CRM or tool?",
    answer: "Yes — we integrate with over 3,000+ apps via Zapier, Make, or custom APIs.",
    icon: <Link className={styles.icon} />
  },
  {
    question: "How much does it cost?",
    answer: "Every build is custom. We'll give you pricing after the free consultation — no pressure, no obligations.",
    icon: <DollarSign className={styles.icon} />
  },
  {
    question: "Will I still have control over my leads and data?",
    answer: "Yes — you stay fully in control. We simply automate the repetitive parts, but you approve all workflows and data stays within your systems.",
    icon: <Lock className={styles.icon} />
  },
  {
    question: "What happens if something breaks?",
    answer: "We monitor your automations and offer ongoing support to keep things running smoothly. If anything changes in your process, we can adjust the workflows as your business grows.",
    icon: <Wrench className={styles.icon} />
  },
  {
    question: "What types of tasks can't be automated?",
    answer: "We focus on high-volume, rule-based tasks (follow-ups, scheduling, CRM updates, forms). Personalized sales conversations and complex judgment calls still require your expertise.",
    icon: <Target className={styles.icon} />
  },
  {
    question: "Can I add more automations later?",
    answer: "Absolutely — most clients start small and expand over time as they see the value. We can add layers as your business needs evolve.",
    icon: <TrendingUp className={styles.icon} />
  }
];

const FAQ = () => {
  return (
    <section className="bg-white py-[120px] flex justify-center">
      <div className="max-w-[1440px] w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <div className="mb-[60px]">
          <h2 
            className="mb-6"
            style={{
              fontSize: '48px',
              fontFamily: 'Inter',
              fontWeight: 600,
              color: 'black'
            }}
          >
            Frequently Asked Questions
          </h2>
          <p 
            style={{
              fontSize: '18px',
              fontFamily: 'Inter',
              fontWeight: 400,
              color: '#666666',
              maxWidth: '600px',
              lineHeight: '1.6'
            }}
          >
            Quick answers to questions you may have. Can't find what you're looking for? 
            <button 
              className="text-black underline ml-2 hover:opacity-70"
              onClick={() => window.location.href = '#contact'}
            >
              Contact us
            </button>.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-16 gap-y-32">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className="pb-20"
            >
              <div className="w-full flex items-start text-left">
                <span className={styles.iconContainer}>
                  {item.icon}
                </span>
                <div className="flex-1">
                  <h3 className={styles.question}>
                    {item.question}
                  </h3>
                  <p className={`${styles.answer} mt-4`}>
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 

