import { useMemo } from "react";
import styles from "../styles/state-default.module.css";
const StateDefault = ({
  stateDefaultPosition,
  stateDefaultWidth,
  stateDefaultHeight,
  stateDefaultTop,
  stateDefaultRight,
  stateDefaultBottom,
  stateDefaultLeft,
  outerCircleTop,
  outerCircleLeft,
  middleCircleTop,
  middleCircleLeft,
  innerCircleTop,
  innerCircleLeft,
}) => {
  const stateDefaultStyle = useMemo(() => {
    return {
      position: stateDefaultPosition,
      width: stateDefaultWidth,
      height: stateDefaultHeight,
      top: stateDefaultTop,
      right: stateDefaultRight,
      bottom: stateDefaultBottom,
      left: stateDefaultLeft,
    };
  }, [
    stateDefaultPosition,
    stateDefaultWidth,
    stateDefaultHeight,
    stateDefaultTop,
    stateDefaultRight,
    stateDefaultBottom,
    stateDefaultLeft,
  ]);

  const outerCircleStyle = useMemo(() => {
    return {
      top: outerCircleTop,
      left: outerCircleLeft,
    };
  }, [outerCircleTop, outerCircleLeft]);

  const middleCircleStyle = useMemo(() => {
    return {
      top: middleCircleTop,
      left: middleCircleLeft,
    };
  }, [middleCircleTop, middleCircleLeft]);

  const innerCircleStyle = useMemo(() => {
    return {
      top: innerCircleTop,
      left: innerCircleLeft,
    };
  }, [innerCircleTop, innerCircleLeft]);

  return (
    <div className={styles.statedefault} style={stateDefaultStyle}>
      <div className={styles.outerCircle} style={outerCircleStyle} />
      <div className={styles.middleCircle} style={middleCircleStyle} />
      <div className={styles.innerCircle} style={innerCircleStyle} />
    </div>
  );
};

export default StateDefault;
