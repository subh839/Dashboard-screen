import { useMemo } from "react";
import Progress10LabelRight from "./progress10-label-right";
import styles from "../styles/country.module.css";
const Country = ({
  uS,
  text,
  percentage,
  countryPosition,
  countryWidth,
  countryAlignSelf,
  progressWidth,
  progressRight,
}) => {
  const countryStyle = useMemo(() => {
    return {
      position: countryPosition,
      width: countryWidth,
      alignSelf: countryAlignSelf,
    };
  }, [countryPosition, countryWidth, countryAlignSelf]);

  const progressStyle = useMemo(() => {
    return {
      width: progressWidth,
      right: progressRight,
    };
  }, [progressWidth, progressRight]);

  return (
    <div className={styles.country} style={countryStyle}>
      <img className={styles.usIcon} alt="" src={uS} />
      <div className={styles.textAndProgressBar}>
        <div className={styles.text}>{text}</div>
        <Progress10LabelRight
          percentage="50%"
          progress10LabelRightPosition="unset"
          progress10LabelRightWidth="unset"
          progress10LabelRightAlignSelf="stretch"
          progressWidth="50.36%"
          progressRight="49.64%"
        />
      </div>
    </div>
  );
};

export default Country;
