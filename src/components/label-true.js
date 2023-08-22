import { useMemo } from "react";
import styles from "../styles/label-true.module.css";
const LabelTrue = ({
  number,
  divider,
  labelTruePosition,
  labelTrueWidth,
  labelTrueHeight,
  labelTrueAlignSelf,
  numberColor,
}) => {
  const labelTrueStyle = useMemo(() => {
    return {
      position: labelTruePosition,
      width: labelTrueWidth,
      height: labelTrueHeight,
      alignSelf: labelTrueAlignSelf,
    };
  }, [labelTruePosition, labelTrueWidth, labelTrueHeight, labelTrueAlignSelf]);

  const numberStyle = useMemo(() => {
    return {
      color: numberColor,
    };
  }, [numberColor]);

  return (
    <div className={styles.labeltrue} style={labelTrueStyle}>
      <div className={styles.number} style={numberStyle}>
        {number}
      </div>
      <img className={styles.dividerIcon} alt="" src={divider} />
    </div>
  );
};

export default LabelTrue;
