import { useMemo } from "react";
import styles from "../styles/progress10-label-right.module.css";
const Progress10LabelRight = ({
  percentage,
  progress10LabelRightPosition,
  progress10LabelRightWidth,
  progress10LabelRightAlignSelf,
  progressWidth,
  progressRight,
}) => {
  const progress10LabelRightStyle = useMemo(() => {
    return {
      position: progress10LabelRightPosition,
      width: progress10LabelRightWidth,
      alignSelf: progress10LabelRightAlignSelf,
    };
  }, [
    progress10LabelRightPosition,
    progress10LabelRightWidth,
    progress10LabelRightAlignSelf,
  ]);

  const progressStyle = useMemo(() => {
    return {
      width: progressWidth,
      right: progressRight,
    };
  }, [progressWidth, progressRight]);

  return (
    <div
      className={styles.progress10Labelright}
      style={progress10LabelRightStyle}
    >
      <div className={styles.progressBar}>
        <div className={styles.background} />
        <div className={styles.progress} style={progressStyle} />
      </div>
      <div className={styles.percentage}>{percentage}</div>
    </div>
  );
};

export default Progress10LabelRight;
