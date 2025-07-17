import styles from './Landing.module.css'

export const Landing = () => {
  return (
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>ФУНИИ, КОИТО ПРОДАВАТ</h1>
        <p className={styles.subtitle}>Ще Ви съдействам в изработката на уебсайт, който гарантирано ще носи резултати</p>
        <div className={styles.heroButtons}>
          <a href="#question-form" className={styles.ctaButton}>
            Направи запитване
          </a>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img 
          src="/images/Landing.webp" 
          alt="Antistress Hero"
          loading="eager"
          width="500"
          height="500"
          className={styles.heroImg}
        />
      </div>
    </header>
  )
}
