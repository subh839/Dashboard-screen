import { useMemo } from "react";
import styles from "../styles/chart-type-bar-mobile.module.css";
const ChartTypeBarMobile = ({
  bar,
  bar1,
  bar2,
  bar3,
  bar4,
  bar5,
  bar6,
  bar7,
  bar8,
  bar9,
  bar10,
  bar11,
  chartTypeBarMobilePosition,
  chartTypeBarMobileWidth,
  chartTypeBarMobileHeight,
  chartTypeBarMobileTop,
  chartTypeBarMobileRight,
  chartTypeBarMobileBottom,
  chartTypeBarMobileLeft,
}) => {
  const chartTypeBarMobileStyle = useMemo(() => {
    return {
      position: chartTypeBarMobilePosition,
      width: chartTypeBarMobileWidth,
      height: chartTypeBarMobileHeight,
      top: chartTypeBarMobileTop,
      right: chartTypeBarMobileRight,
      bottom: chartTypeBarMobileBottom,
      left: chartTypeBarMobileLeft,
    };
  }, [
    chartTypeBarMobilePosition,
    chartTypeBarMobileWidth,
    chartTypeBarMobileHeight,
    chartTypeBarMobileTop,
    chartTypeBarMobileRight,
    chartTypeBarMobileBottom,
    chartTypeBarMobileLeft,
  ]);

  return (
    <div className={styles.chartTypebarMobile} style={chartTypeBarMobileStyle}>
      <div className={styles.chart}>
        <img className={styles.barIcon} alt="" src={bar} />
        <img className={styles.barIcon} alt="" src={bar1} />
        <img className={styles.barIcon} alt="" src={bar2} />
        <img className={styles.barIcon} alt="" src={bar3} />
        <img className={styles.barIcon} alt="" src={bar4} />
        <img className={styles.barIcon} alt="" src={bar5} />
        <img className={styles.barIcon} alt="" src={bar6} />
        <img className={styles.barIcon} alt="" src={bar7} />
        <img className={styles.barIcon} alt="" src={bar8} />
        <img className={styles.barIcon} alt="" src={bar9} />
        <img className={styles.barIcon} alt="" src={bar10} />
        <img className={styles.barIcon} alt="" src={bar11} />
      </div>
    </div>
  );
};

export default ChartTypeBarMobile;
