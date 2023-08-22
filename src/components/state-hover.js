import { useMemo } from "react";
import styles from "../styles/state-hover.module.css";
const StateHover = ({
  cursor,
  aU,
  smithStreet,
  countryIcon = true,
  stateHoverPosition,
  stateHoverWidth,
  stateHoverHeight,
  stateHoverTop,
  stateHoverRight,
  stateHoverBottom,
  stateHoverLeft,
  outerCircleTop,
  outerCircleLeft,
  middleCircleTop,
  middleCircleLeft,
  innerCircleTop,
  innerCircleLeft,
  cursorIconHeight,
  cursorIconWidth,
  cursorIconBottom,
  cursorIconLeft,
  tooltipLeft,
  smithStreetMarginBlockStart,
  smithStreetMarginBlockEnd,
  smithStreetPosition,
  smithStreetWidth,
  smithStreetHeight,
}) => {
  const stateHoverStyle = useMemo(() => {
    return {
      position: stateHoverPosition,
      width: stateHoverWidth,
      height: stateHoverHeight,
      top: stateHoverTop,
      right: stateHoverRight,
      bottom: stateHoverBottom,
      left: stateHoverLeft,
    };
  }, [
    stateHoverPosition,
    stateHoverWidth,
    stateHoverHeight,
    stateHoverTop,
    stateHoverRight,
    stateHoverBottom,
    stateHoverLeft,
  ]);

  const outerCircle1Style = useMemo(() => {
    return {
      top: outerCircleTop,
      left: outerCircleLeft,
    };
  }, [outerCircleTop, outerCircleLeft]);

  const middleCircle1Style = useMemo(() => {
    return {
      top: middleCircleTop,
      left: middleCircleLeft,
    };
  }, [middleCircleTop, middleCircleLeft]);

  const innerCircle1Style = useMemo(() => {
    return {
      top: innerCircleTop,
      left: innerCircleLeft,
    };
  }, [innerCircleTop, innerCircleLeft]);

  const cursorIconStyle = useMemo(() => {
    return {
      height: cursorIconHeight,
      width: cursorIconWidth,
      bottom: cursorIconBottom,
      left: cursorIconLeft,
    };
  }, [cursorIconHeight, cursorIconWidth, cursorIconBottom, cursorIconLeft]);

  const tooltipStyle = useMemo(() => {
    return {
      left: tooltipLeft,
    };
  }, [tooltipLeft]);

  const smithStreetStyle = useMemo(() => {
    return {
      marginBlockStart: smithStreetMarginBlockStart,
      marginBlockEnd: smithStreetMarginBlockEnd,
      position: smithStreetPosition,
      width: smithStreetWidth,
      height: smithStreetHeight,
    };
  }, [
    smithStreetMarginBlockStart,
    smithStreetMarginBlockEnd,
    smithStreetPosition,
    smithStreetWidth,
    smithStreetHeight,
  ]);

  return (
    <div className={styles.statehover} style={stateHoverStyle}>
      <div className={styles.outerCircle} style={outerCircle1Style} />
      <div className={styles.middleCircle} style={middleCircle1Style} />
      <div className={styles.innerCircle} style={innerCircle1Style} />
      <img
        className={styles.cursorIcon}
        alt=""
        src={cursor}
        style={cursorIconStyle}
      />
      <div className={styles.tooltip} style={tooltipStyle}>
        <div className={styles.content}>
          {countryIcon && <img className={styles.auIcon} alt="" src={aU} />}
          <div className={styles.textAndSupportingText}>
            <div className={styles.text}>Melbourne, AUS</div>
            <div className={styles.supportingText}>
              <p className={styles.smithStreet} style={smithStreetStyle}>
                {smithStreet}
              </p>
              <p className={styles.collingwoodVic3066}>
                Collingwood VIC 3066 AU
              </p>
            </div>
          </div>
        </div>
        <img className={styles.tooltipIcon} alt="" src="/tooltip1.svg" />
      </div>
    </div>
  );
};

export default StateHover;
