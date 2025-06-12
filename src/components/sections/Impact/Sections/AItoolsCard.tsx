import Image from 'next/image';
import styles from './AItoolsCard.module.css';

export default function AItoolsCard({ className = '' }) {
  return (
    <div className={`${styles.card} ${className}`}>
      {/* Heading Section */}
      <div className={styles.headingSection}>
        <p className={styles.cardTitle}>
          Powered by Smart Automation
        </p>
        <h3 className={styles.largeTitle}>
          Using the latest<br />
          AI tools
        </h3>
      </div>

      {/* Tools Grid */}
      <div className={styles.toolsGrid}>
        {/* ChatGPT */}
        <div className={styles.toolItem}>
          <div className={styles.toolContainer}>
            <Image
              src="/Assets/ImpactSections/Ai_tools/ChatGpt.png"
              alt="ChatGPT"
              width={112}
              height={112}
              className={styles.toolIcon}
            />
          </div>
          <p className={styles.toolName}>Chat GPT</p>
        </div>

        {/* Lindy AI */}
        <div className={styles.toolItem}>
          <div className={styles.toolContainer}>
            <Image
              src="/Assets/ImpactSections/Ai_tools/LindyAi.png"
              alt="Lindy AI"
              width={112}
              height={112}
              className={styles.toolIcon}
            />
          </div>
          <p className={styles.toolName}>Lindy AI</p>
        </div>

        {/* Zapier */}
        <div className={styles.toolItem}>
          <div className={styles.toolContainer}>
            <Image
              src="/Assets/ImpactSections/Ai_tools/Zapier.png"
              alt="Zapier"
              width={112}
              height={112}
              className={styles.toolIcon}
            />
          </div>
          <p className={styles.toolName}>Zapier</p>
        </div>

        {/* Google Gemini */}
        <div className={styles.toolItem}>
          <div className={styles.toolContainer}>
            <Image
              src="/Assets/ImpactSections/Ai_tools/Gemini.png"
              alt="Google Gemini"
              width={112}
              height={112}
              className={styles.toolIcon}
            />
          </div>
          <p className={styles.toolName}>Google Gemini</p>
        </div>
      </div>
    </div>
  );
} 