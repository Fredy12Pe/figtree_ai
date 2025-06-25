'use client';

import React from 'react';
import styles from './ScrollBanner.module.css';

const technologies = [
  "Zapier,", "GPT-4,", "Make,", "Slack,", "Gmail,", "Hubspot,", 
  "Pipedrive,", "Notion,", "Airtable,", "Google Calendar,", 
  "Typeform,", "Calendly,", "Salesforce,"
];

const ScrollBanner = () => {
  return (
    <section className="bg-white">
      <div className={styles.marquee}>
        <div className={styles.track}>
          {[...technologies, ...technologies].map((tech, index) => (
            <span 
              key={index} 
              className={styles.techItem}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollBanner; 