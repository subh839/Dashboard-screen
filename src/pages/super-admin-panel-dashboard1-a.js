import Property1Default from "../components/property1-default";
import WelcomeSectionContainer from "../components/welcome-section-container";
import MetricContainer from "../components/metric-container";
import TopEmployeeLanguagePairContain from "../components/top-employee-language-pair-contain";
import TrafficInsightsByCountryContai from "../components/traffic-insights-by-country-contai";
import styles from "./super-admin-panel-dashboard1-a.module.css";
const SuperAdminPanelDashboard1A = () => {
  return (
    <div className={styles.superAdminPanelDashboard1a}>
      <Property1Default
        
        logoText="/logo-text.svg"
        searchLg="/searchlg.svg"
        homeLine="/homeline.svg"
        notificationText="/notificationtext.svg"
        user02="/user02.svg"
        building02="/building02.svg"
        magicWand01="/magicwand01.svg"
        alertTriangle="/alerttriangle.svg"
        currencyDollarCircle="/currencydollarcircle.svg"
        fileCheck02="/filecheck02.svg"
        chevronDown="/chevrondown.svg"
        lifeBuoy01="/lifebuoy01.svg"
        settings01="/settings01.svg"
        avatar="/avatar@2x.png"
        logOut01="/logout01.svg"
        property1DefaultPosition="unset"
        property1DefaultFlexShrink="0"
      />
      <div className={styles.mainWrap}>
        <div className={styles.main}>
          <WelcomeSectionContainer />
          <MetricContainer />
          <TopEmployeeLanguagePairContain />
          <TrafficInsightsByCountryContai />
        </div>
      </div>
    </div>
  );
};

export default SuperAdminPanelDashboard1A;
