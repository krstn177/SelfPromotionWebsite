import { useState } from "react";
import styles from "./Features.module.css";

const featuresData = [
  {
    title: "Hero Секция",
    image: "/images/SectionsShowcase/Hero-example.webp",
    description: "Easily collect leads with optimized forms and automated follow-ups. Increase conversion rates and grow your audience.",
    aspectRatio: "2/1",
  },
  {
    title: "За продукта Ви",
    image: "/images/SectionsShowcase/About-example.webp",
    description: "Set up automated email campaigns to nurture leads and drive sales, all with minimal effort.",
    aspectRatio: "2/1",
  },
  {
    title: "Пример/Съдържание на продукта",
    image: "/images/SectionsShowcase/Contents-example.webp",
    description: "Monitor your funnel’s performance with real-time analytics and actionable insights.",
    aspectRatio: "16/9",
  },
  {
    title: "Секции за бонуси",
    image: "/images/SectionsShowcase/bonus-example.webp",
    description: "Monitor your funnel’s performance with real-time analytics and actionable insights.",
    aspectRatio: "2/1",
  },
  {
    title: "Форма за поръчка",
    image: "/images/SectionsShowcase/Order-form-example.webp",
    description: "Monitor your funnel’s performance with real-time analytics and actionable insights.",
    aspectRatio: "2/1",
  },
  {
    title: "Страници с условията на сайта",
    image: "/images/SectionsShowcase/legal-example.webp",
    description: "Monitor your funnel’s performance with real-time analytics and actionable insights.",
    aspectRatio: "4/3",
  },
];

export const Features = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={styles.featuresSection}>
      <h2 className={styles.heading}>ОСНОВНИ СЕКЦИИ НА САЙТА ВИ</h2>
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
                <div style={{aspectRatio: feature.aspectRatio}} className={styles.featureImageWrapper}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className={styles.featureImage}
                  />
                </div>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
