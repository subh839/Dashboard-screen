import { useMemo } from "react";
import styles from "../styles/sizemd-icon-icon-leading-co.module.css";
const SizemdIconIconLeadingCo = ({
  arrowUp,
  text,
  sizemdIconIconLeadingCoPosition,
  sizemdIconIconLeadingCoBackgroundColor,
  textColor,
}) => {
  const sizemdIconIconLeadingCoStyle = useMemo(() => {
    return {
      position: sizemdIconIconLeadingCoPosition,
      backgroundColor: sizemdIconIconLeadingCoBackgroundColor,
    };
  }, [sizemdIconIconLeadingCoPosition, sizemdIconIconLeadingCoBackgroundColor]);

  const textStyle = useMemo(() => {
    return {
      color: textColor,
    };
  }, [textColor]);

  return (
    <div
      className={styles.sizemdIconiconLeadingCo}
      style={sizemdIconIconLeadingCoStyle}
    >
      <img className={styles.arrowUpIcon} alt="" src={arrowUp} />
      <div className={styles.text} style={textStyle}>
        {text}
      </div>
    </div>
  );
};

export default SizemdIconIconLeadingCo;
