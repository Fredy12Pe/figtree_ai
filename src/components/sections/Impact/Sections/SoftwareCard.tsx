"use client";
import Image from 'next/image';
import styles from './SoftwareCard.module.css';

export default function SoftwareCard({ className = '' }) {
  return (
    <div className={`${styles.card} ${className}`}>
      {/* Heading Section */}
      <div className={styles.headingSection}>
        <p className={styles.cardTitle}>
          Seamless Integration
        </p>
        <h3 className={styles.largeTitle}>
          Connect with your<br />
          favorite tools
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
              width={112}
              height={112}
              className={styles.toolIcon}
            />
          </div>
          <p className={styles.toolName}>
            Gmail
          </p>
        </div>

        {/* Notion */}
        <div className={styles.toolItem}>
          <div className={styles.toolContainer}>
            <Image
              src="/Assets/ImpactSections/Software_connections/Notion.png"
              alt="Notion"
              width={112}
              height={112}
              className={styles.toolIcon}
            />
          </div>
          <p className={styles.toolName}>
            Notion
          </p>
        </div>

        {/* Salesforce */}
        <div className={styles.toolItem}>
          <div className={styles.toolContainer}>
            <Image
              src="/Assets/ImpactSections/Software_connections/SalesForce.png"
              alt="Salesforce"
              width={112}
              height={112}
              className={styles.toolIcon}
            />
          </div>
          <p className={styles.toolName}>
            Salesforce
          </p>
        </div>

        {/* Zapier */}
        <div className={styles.toolItem}>
          <div className={styles.toolContainer}>
            <Image
              src="/Assets/ImpactSections/Software_connections/Zapier.png"
              alt="Zapier"
              width={112}
              height={112}
              className={styles.toolIcon}
            />
          </div>
          <p className={styles.toolName}>
            Zapier
          </p>
        </div>
      </div>
    </div>
  );
} 