import { useMemo } from "react";
import SizemdIconIconLeadingCo from "./sizemd-icon-icon-leading-co";
import TypeIconOpenFalse1 from "./type-icon-open-false1";
import styles from "../styles/revenue-metric-container.module.css";
const RevenueMetricContainer = ({
  metricLabel,
  revenueThisMonthProjectVa,
  revenueMetricProjectMetri,
  percentageValue,
  dimensionValue,
  propBackgroundColor,
  propColor,
}) => {
  const sizemdIconIconLeadingCoStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const textStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.metricItem}>
      <div className={styles.heading}>{metricLabel}</div>
      <div className={styles.numberAndBadge}>
        <div className={styles.number}>{revenueThisMonthProjectVa}</div>
        <div className={styles.badgeWrap}>
          <SizemdIconIconLeadingCo
            arrowUp="/arrowup.svg"
            text="10%"
            sizemdIconIconLeadingCoPosition="unset"
            sizemdIconIconLeadingCoBackgroundColor="#ecfdf3"
            textColor="#12b76a"
          />
        </div>
      </div>
      <TypeIconOpenFalse1
        dotsVertical="/dotsvertical.svg"
        typeIconOpenFalsePosition="absolute"
        typeIconOpenFalseMargin="0 !important"
        typeIconOpenFalseTop="20px"
        typeIconOpenFalseRight="20px"
        typeIconOpenFalseZIndex="2"
      />
    </div>
  );
};

export default RevenueMetricContainer;
