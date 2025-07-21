import styles from '../Separator.module.css';

export const SeparatorInverted = ({ fill, bgColor }) => {
  return (
    <div style={{ backgroundColor: bgColor }} className={styles.wrapper}>
      <svg className={styles.separatorLine} viewBox="0 0 1440 150" preserveAspectRatio="none">
        <path
          d="M0,150 Q720,-50 1440,150 L1440,0 L0,0 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};
