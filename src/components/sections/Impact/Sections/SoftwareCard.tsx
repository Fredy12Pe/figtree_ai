"use client";
import Image from 'next/image';
import styles from './SoftwareCard.module.css';
import { useEffect, useState } from 'react';

export default function SoftwareCard({ className = '' }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1023);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const imageSize = isMobile ? 90 : 110;

  return (
    <div className={`${styles.card} ${className}`}>
      {/* Heading Section */}
      <div className={styles.headingSection}>
        <h3 className={styles.largeTitle}>
          Connect with<br />
          currently used<br />
          software
        </h3>
      </div>

      {/* Software Grid */}
      <div className={styles.softwareGrid}>
        {/* Gmail */}
        <div className={styles.toolItem}>
          <div className={styles.toolContainer}>
            <Image
              src="/Assets/ImpactSections/Software_connections/Gmail.png"
              alt="Gmail"
              width={imageSize}
              height={imageSize}
              className={styles.toolIcon}
            />
          </div>
        </div>

        {/* Notion */}
        <div className={styles.toolItem}>
          <div className={styles.toolContainer}>
            <Image
              src="/Assets/ImpactSections/Software_connections/Notion.png"
              alt="Notion"
              width={imageSize}
              height={imageSize}
              className={styles.toolIcon}
            />
          </div>
        </div>

        {/* Salesforce */}
        <div className={styles.toolItem}>
          <div className={styles.toolContainer}>
            <Image
              src="/Assets/ImpactSections/Software_connections/SalesForce.png"
              alt="Salesforce"
              width={imageSize}
              height={imageSize}
              className={styles.toolIcon}
            />
          </div>
        </div>

        {/* Zapier */}
        <div className={styles.toolItem}>
          <div className={styles.toolContainer}>
            <Image
              src="/Assets/ImpactSections/Software_connections/Zapier.png"
              alt="Zapier"
              width={imageSize}
              height={imageSize}
              className={styles.toolIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 