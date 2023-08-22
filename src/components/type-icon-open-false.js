import { useMemo } from "react";
import styles from "../styles/type-icon-open-false.module.css";
const TypeIconOpenFalse = ({ dotsVertical, typeIconOpenFalsePosition }) => {
  const typeIconOpenFalseStyle = useMemo(() => {
    return {
      position: typeIconOpenFalsePosition,
    };
  }, [typeIconOpenFalsePosition]);

  return (
    <div className={styles.typeiconOpenfalse} style={typeIconOpenFalseStyle}>
      <img className={styles.dotsVerticalIcon} alt="" src={dotsVertical} />
    </div>
  );
};

export default TypeIconOpenFalse;
