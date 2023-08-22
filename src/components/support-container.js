import styles from "../styles/support-container.module.css";
import icon from "../assets/Icon.svg"
const SupportContainer = ({
  imageDimensions,
  imageCode,
  imageCodeDimensions,
  imageCodeDimensions2,
  logOut01Icon,
  avatarIcon,
  lifeBuoy01Icon,
imageCodeUrl

}) => {
  return (
    <div className={styles.footer}>
      <div className={styles.navigation}>
        <div className={styles.support}>
          <div className={styles.content}>
          <img
              className={styles.lifeBuoy01Icon}
              alt=""
              src={imageDimensions}
            />
            <div className={styles.text}>Support</div>
          </div>
        </div>
        <div className={styles.support}>
          <div className={styles.content}>
          <img className={styles.lifeBuoy01Icon} alt="" src={imageCode} />
            <div className={styles.text}>Settings</div>
          </div>
        </div>
      </div>
      <div className={styles.account}>
        <div className={styles.avatarLabelGroup}>
        <img
            className={styles.logOut01Icon}
            alt=""
            src={imageCodeDimensions}
          />
          <div className={styles.textAndSupportingText}>
            <div className={styles.text2}>Alvin</div>
            <div className={styles.supportingText}>Alvin@compareling.c..</div>
          </div>
        </div>
        <div className={styles.button}>
        <img
            className={styles.logOut01Icon}
            alt=""
            src={icon}
          />
        </div>
      </div>
    </div>
  );
};

export default SupportContainer;
