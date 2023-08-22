import RevenueMetricContainer from "./revenue-metric-container";
import LabelTrue from "./label-true";
import ChartTypeBarMobile from "./chart-type-bar-mobile";
import styles from "../styles/metric-container.module.css";
const MetricContainer = () => {
  return (
    <div className={styles.allMetrics}>
      <div className={styles.barGraphAndMap}>
        <div className={styles.cardsAndGraph}>
          <div className={styles.cards}>
            <RevenueMetricContainer
              metricLabel="Total revenue this month"
              revenueThisMonthProjectVa="$1,280"
              revenueMetricProjectMetri="/arrowup.svg"
              percentageValue="10%"
              dimensionValue="/dotsvertical.svg"
            />
            <RevenueMetricContainer
              metricLabel="Average project value"
              revenueThisMonthProjectVa="$91.42"
              revenueMetricProjectMetri="/arrowdown.svg"
              percentageValue="2%"
              dimensionValue="/dotsvertical1.svg"
              propBackgroundColor="#fef3f2"
              propColor="#f04438"
            />
          </div>
          <div className={styles.barGraph}>
            <div className={styles.sectionHeader}>
              <div className={styles.title}>
                <img
                  className={styles.coinsStacked03Icon}
                  alt=""
                  src="/coinsstacked03.svg"
                />
                <div className={styles.text}>Revenue by service</div>
              </div>
              <div className={styles.buttonGroup}>
                <div className={styles.buttonGroupBase}>
                  <div className={styles.text1}>Year</div>
                </div>
                <div className={styles.buttonGroupBase1}>
                  <div className={styles.text1}>Month</div>
                </div>
                <div className={styles.buttonGroupBase2}>
                  <div className={styles.text1}>Week</div>
                </div>
              </div>
              <div className={styles.horizontalTabs}>
                <div className={styles.tabButtonBase}>
                  <div className={styles.text1}>Transaltion</div>
                </div>
                <div className={styles.tabButtonBase1}>
                  <div className={styles.text1}>Transcription</div>
                </div>
                <div className={styles.tabButtonBase}>
                  <div className={styles.text1}>Subtitling</div>
                </div>
                <div className={styles.tabButtonBase}>
                  <div className={styles.text1}>Proofreading</div>
                </div>
                <div className={styles.tabButtonBase}>
                  <div className={styles.text1}>QC</div>
                </div>
              </div>
            </div>
            <div className={styles.lineAndBarChart}>
              <div className={styles.axis}>
                <div className={styles.content}>
                  <div className={styles.yAxis}>
                    <LabelTrue
                      number="$1,000"
                      divider="/divider.svg"
                      labelTruePosition="unset"
                      labelTrueWidth="unset"
                      labelTrueHeight="22px"
                      labelTrueAlignSelf="stretch"
                      numberColor="#344054"
                    />
                    <LabelTrue
                      number="$800"
                      divider="/divider1.svg"
                      labelTruePosition="unset"
                      labelTrueWidth="unset"
                      labelTrueHeight="17px"
                      labelTrueAlignSelf="stretch"
                      numberColor="#344054"
                    />
                    <LabelTrue
                      number="$600"
                      divider="/divider2.svg"
                      labelTruePosition="unset"
                      labelTrueWidth="unset"
                      labelTrueHeight="17px"
                      labelTrueAlignSelf="stretch"
                      numberColor="#344054"
                    />
                    <LabelTrue
                      number="$400"
                      divider="/divider3.svg"
                      labelTruePosition="unset"
                      labelTrueWidth="unset"
                      labelTrueHeight="17px"
                      labelTrueAlignSelf="stretch"
                      numberColor="#344054"
                    />
                    <LabelTrue
                      number="$200"
                      divider="/divider4.svg"
                      labelTruePosition="unset"
                      labelTrueWidth="unset"
                      labelTrueHeight="17px"
                      labelTrueAlignSelf="stretch"
                      numberColor="#344054"
                    />
                    <LabelTrue
                      number="0"
                      divider="/divider5.svg"
                      labelTruePosition="unset"
                      labelTrueWidth="unset"
                      labelTrueHeight="17px"
                      labelTrueAlignSelf="stretch"
                      numberColor="#344054"
                    />
                  </div>
                  <div className={styles.xAxis}>
                    <div className={styles.xAxis1}>
                      <div className={styles.jan}>Jan</div>
                      <div className={styles.jan}>Feb</div>
                      <div className={styles.jan}>Mar</div>
                      <div className={styles.jan}>Apr</div>
                      <div className={styles.jan}>May</div>
                      <div className={styles.jan}>June</div>
                      <div className={styles.jan}>Jul</div>
                      <div className={styles.jan}>Aug</div>
                      <div className={styles.jan}>Sep</div>
                      <div className={styles.jan}>Oct</div>
                      <div className={styles.jan}>Nov</div>
                      <div className={styles.jan}>Dec</div>
                    </div>
                  </div>
                  <div className={styles.xAxisLabel}>
                    <div className={styles.text9}>Month</div>
                  </div>
                </div>
              </div>
              <ChartTypeBarMobile
                bar="/bar.svg"
                bar1="/bar1.svg"
                bar2="/bar2.svg"
                bar3="/bar3.svg"
                bar4="/bar4.svg"
                bar5="/bar5.svg"
                bar6="/bar6.svg"
                bar7="/bar7.svg"
                bar8="/bar8.svg"
                bar9="/bar9.svg"
                bar10="/bar10.svg"
                bar11="/bar11.svg"
                chartTypeBarMobilePosition="absolute"
                chartTypeBarMobileWidth="calc(100% - 58px)"
                chartTypeBarMobileHeight="calc(100% - 65.71px)"
                chartTypeBarMobileTop="16px"
                chartTypeBarMobileRight="-2px"
                chartTypeBarMobileBottom="49.71px"
                chartTypeBarMobileLeft="60px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricContainer;
