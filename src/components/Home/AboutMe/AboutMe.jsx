import styles from './AboutMe.module.css';

export const AboutMe = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.profilePicWrapper}>
        <img
          src="/images/profile-pic.webp" // Place your profile picture in public/assets or src/assets
          alt="Profile"
          className={styles.profilePic}
        />
      </div>
      <div className={styles.aboutContent}>
        <h2 className={styles.heading}>Кой съм аз?</h2>
        <p className={styles.text}>
          Hi! I’m [Your Name], a passionate web developer with a love for clean design and modern web technologies.
          I specialize in building fast, accessible, and visually appealing websites for clients who want to stand out online.
        </p>
        <p className={styles.text}>
          When I’m not coding, you’ll find me exploring new tech, reading, or enjoying the outdoors. Let’s work together to bring your ideas to life!
        </p>
      </div>
    </section>
  );
};
