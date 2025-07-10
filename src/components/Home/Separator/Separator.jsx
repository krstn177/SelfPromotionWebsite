import styles from './Separator.module.css';

export const Separator = ({ fill, bgColor }) => {
  return (
    <div style={{backgroundColor: bgColor}} className={styles.wrapper}>
      <svg className={styles.separatorLine} viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path
          d="M0,100 L240,20 L480,80 L720,10 L960,90 L1200,30 L1440,100 L1440,100 L0,100 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};
