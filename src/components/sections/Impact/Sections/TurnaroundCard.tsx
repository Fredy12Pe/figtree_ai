"use client";
import styles from './TurnaroundCard.module.css';
 
export default function TurnaroundCard({ className = '' }) {
  return (
    <div 
      className={`${styles.card} ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 46, 122, 0.60) 100%), 
          url('/Assets/ImpactSections/Turnaround_time/Group 7.png')
        `,
      }}
    >
      {/* Heading Section */}
      <div className={styles.headingSection}>
        <p className={styles.cardTitle}>
          Delivery timeline
        </p>
        <h3 className={styles.largeTitle}>
          2-4 week<br />
          turnaround time
        </h3>
      </div>
    </div>
  );
} 