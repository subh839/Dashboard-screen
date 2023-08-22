import { useMemo } from "react";
import styles from "../styles/type-icon-open-false1.module.css";
const TypeIconOpenFalse1 = ({
  dotsVertical,
  typeIconOpenFalsePosition,
  typeIconOpenFalseMargin,
  typeIconOpenFalseTop,
  typeIconOpenFalseRight,
  typeIconOpenFalseZIndex,
}) => {
  const typeIconOpenFalse1Style = useMemo(() => {
    return {
      position: typeIconOpenFalsePosition,
      margin: typeIconOpenFalseMargin,
      top: typeIconOpenFalseTop,
      right: typeIconOpenFalseRight,
      zIndex: typeIconOpenFalseZIndex,
    };
  }, [
    typeIconOpenFalsePosition,
    typeIconOpenFalseMargin,
    typeIconOpenFalseTop,
    typeIconOpenFalseRight,
    typeIconOpenFalseZIndex,
  ]);

  return (
    <div className={styles.typeiconOpenfalse} style={typeIconOpenFalse1Style}>
      <img className={styles.dotsVerticalIcon} alt="" src={dotsVertical} />
    </div>
  );
};

export default TypeIconOpenFalse1;
