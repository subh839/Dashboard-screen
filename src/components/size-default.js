import { useMemo } from "react";
import styles from "../styles/size-default.module.css";
const SizeDefault = ({ sizeDefaultPosition, sizeDefaultFlexShrink }) => {
  const sizeDefaultStyle = useMemo(() => {
    return {
      position: sizeDefaultPosition,
      flexShrink: sizeDefaultFlexShrink,
    };
  }, [sizeDefaultPosition, sizeDefaultFlexShrink]);

  return (
    <div className={styles.sizedefault} style={sizeDefaultStyle}>
      <div className={styles.text}>View all</div>
    </div>
  );
};

export default SizeDefault;
