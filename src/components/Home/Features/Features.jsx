import { useState } from "react";
import styles from "./Features.module.css";

const featuresData = [
  {
    title: "HERO Секция",
    image: "/images/SectionsShowcase/Hero-example.webp",
    description: (
      <p className={styles.featureDescription}>
        <strong>HERO секцията</strong> е първото нещо, което посетителите виждат при зареждане на сайта. Тя съдържа запомнящо се заглавие, кратко но въздействащо описание на продукта и ясен призив за действие.
      </p>
    ),
    aspectRatio: "2/1",
  },
  {
    title: "За продукта Ви",
    image: "/images/SectionsShowcase/About-example.webp",
    description: (
      <p className={styles.featureDescription}>
        <strong>За продукта Ви</strong> представя основните предимства, характеристики и ползи от вашия продукт или услуга, като изгражда доверие у посетителите.
      </p>
    ),
    aspectRatio: "2/1",
  },
  {
    title: "Пример/Съдържание на продукта",
    image: "/images/SectionsShowcase/Contents-example.webp",
    description: (
      <p className={styles.featureDescription}>
        <strong>Пример/Съдържание на продукта</strong> показва реални примери, съдържание или демонстрации, които помагат на клиента да разбере стойността на продукта.
      </p>
    ),
    aspectRatio: "16/9",
  },
  {
    title: "Секции за бонуси",
    image: "/images/SectionsShowcase/bonus-example.webp",
    description: (
      <p className={styles.featureDescription}>
        <strong>Секции за бонуси</strong> представят допълнителни оферти или подаръци, които увеличават стойността на основния продукт и мотивират клиента да поръча.
      </p>
    ),
    aspectRatio: "2/1",
  },
  {
    title: "Форма за поръчка",
    image: "/images/SectionsShowcase/Order-form-example.webp",
    description: (
      <p className={styles.featureDescription}>
        <strong>Форма за поръчка</strong> улеснява клиента да направи поръчка или запитване директно от сайта, като събира необходимата информация.
      </p>
    ),
    aspectRatio: "2/1",
  },
  {
    title: "Страници с условията на сайта",
    image: "/images/SectionsShowcase/legal-example.webp",
    description: (
      <p className={styles.featureDescription}>
        <strong>Страници с условията на сайта</strong> съдържат важна правна информация – общи условия, политика за поверителност и други, които вдъхват доверие и сигурност.
      </p>
    ),
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
                {feature.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
