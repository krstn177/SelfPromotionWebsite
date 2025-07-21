import styles from '../Separator.module.css';

export const Separator = ({ fill, bgColor }) => {
  return (
    <div style={{ backgroundColor: bgColor }} className={styles.wrapper}>
      <svg className={styles.separatorLine} viewBox="0 0 1440 150" preserveAspectRatio="none">
        <path
          d="M0,0 Q720,200 1440,0 L1440,150 L0,150 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};
