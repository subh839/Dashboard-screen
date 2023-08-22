import Property1Group27307 from "./property1-group27307";
import Property1Group27306 from "./property1-group27306";
import styles from "../styles/welcome-section-container.module.css";
const WelcomeSectionContainer = () => {
  return (
    <div className={styles.headerSection}>
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <div className={styles.content}>
            <div className={styles.textAndSupportingText}>
              <div className={styles.text}>
                <div className={styles.text1}>Welcome to Compareling Alvin</div>
                <img className={styles.eveningIcon} alt="" src="/evening.svg" />
              </div>
              <div className={styles.supportingText}>
                Get to know a summary of all the activities on the platform from
                here.
              </div>
            </div>
            <div className={styles.actions}>
              <Property1Group27307 bell01="/bell01.svg" />
              <Property1Group27306 messageSquare01="/messagesquare01.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSectionContainer;
