import { useState } from "react";
import styles from "./Features.module.css";

const featuresData = [
  {
    title: "Lead Capture",
    image: "/assets/lead-capture.jpg",
    description: "Easily collect leads with optimized forms and automated follow-ups. Increase conversion rates and grow your audience.",
  },
  {
    title: "Automated Email Sequences",
    image: "/assets/email-sequence.jpg",
    description: "Set up automated email campaigns to nurture leads and drive sales, all with minimal effort.",
  },
  {
    title: "Analytics & Tracking",
    image: "/assets/analytics.jpg",
    description: "Monitor your funnel’s performance with real-time analytics and actionable insights.",
  },
];

export const Features = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={styles.featuresSection}>
      <h2 className={styles.heading}>Main Funnel Features</h2>
      <div className={styles.featureList}>
        {featuresData.map((feature, idx) => (
          <div key={idx} className={styles.featureItem}>
            <button
              className={`${styles.featureButton} ${openIndex === idx ? styles.activeFeature : ''}`}
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`feature-panel-${idx}`}
            >
              <span className={styles.featureTitle}>{feature.title}</span>
              <span className={`${styles.arrowRight} ${openIndex === idx ? styles.activeFeatureArrow : ''}`}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{
                    transform: openIndex === idx ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                  }}
                >
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            {openIndex === idx && (
              <div
                className={styles.featurePanel}
                id={`feature-panel-${idx}`}
                role="region"
                aria-labelledby={`feature-title-${idx}`}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className={styles.featureImage}
                />
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
