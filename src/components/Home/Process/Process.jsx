import styles from './Process.module.css';

const processSteps = [
  {
    icon: "📞",
    title: "1. Initial Contact",
    description: "You reach out with your idea or requirements for a website. We discuss your goals, vision, and any specific needs."
  },
  {
    icon: "📝",
    title: "2. Proposal & Agreement",
    description: "I provide a project proposal with timeline and pricing. Once you approve, we sign an agreement to get started."
  },
  {
    icon: "🎨",
    title: "3. Design & Feedback",
    description: "I create design mockups for your site. You review and provide feedback until you’re happy with the look and feel."
  },
  {
    icon: "💻",
    title: "4. Development",
    description: "I build your website based on the approved design, keeping you updated throughout the process."
  }
];

export const Process = () => (
  <section className={styles.processSection}>
    <h2 className={styles.heading}>How the Process Works</h2>
    <ol className={styles.processList}>
      {processSteps.map((step, idx) => (
        <li className={styles.processItem} key={idx}>
          <span className={styles.icon}>{step.icon}</span>
          <div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  </section>
);
