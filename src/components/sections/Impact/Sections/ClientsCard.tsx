import React from 'react';
import styles from './ClientsCard.module.css';

export default function ClientsCard({ className = '' }) {
  return (
    <div
      className={`${styles.card} ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 46, 122, 0.60) 100%), 
          url('/Assets/ImpactSections/Clients/image.png')
        `,
      }}
    >
      {/* Heading Section */}
      <div className={styles.headingSection}>
        <p className={styles.cardTitle}>
          Focus On What's Really Important
        </p>
        <h3 className={styles.largeTitle}>
          Connecting with<br />
          clients
        </h3>
      </div>
    </div>
  );
} 