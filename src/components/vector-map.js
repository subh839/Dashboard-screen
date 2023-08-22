import { useMemo } from "react";
import styles from "../styles/vector-map.module.css";
const VectorMap = ({
  vectorMapVectorMap,
  vectorMapIconPosition,
  vectorMapIconWidth,
  vectorMapIconHeight,
  vectorMapIconTop,
  vectorMapIconRight,
  vectorMapIconBottom,
  vectorMapIconLeft,
  vectorMapIconMaxWidth,
  vectorMapIconOverflow,
  vectorMapIconMaxHeight,
}) => {
  const vectorMapIconStyle = useMemo(() => {
    return {
      position: vectorMapIconPosition,
      width: vectorMapIconWidth,
      height: vectorMapIconHeight,
      top: vectorMapIconTop,
      right: vectorMapIconRight,
      bottom: vectorMapIconBottom,
      left: vectorMapIconLeft,
      maxWidth: vectorMapIconMaxWidth,
      overflow: vectorMapIconOverflow,
      maxHeight: vectorMapIconMaxHeight,
    };
  }, [
    vectorMapIconPosition,
    vectorMapIconWidth,
    vectorMapIconHeight,
    vectorMapIconTop,
    vectorMapIconRight,
    vectorMapIconBottom,
    vectorMapIconLeft,
    vectorMapIconMaxWidth,
    vectorMapIconOverflow,
    vectorMapIconMaxHeight,
  ]);

  return (
    <img
      className={styles.vectorMapIcon}
      alt=""
      src={vectorMapVectorMap}
      style={vectorMapIconStyle}
    />
  );
};

export default VectorMap;
