import styles from "../styles/search-form-container.module.css";
import Frlogo from "../assets/Frlogo.svg"
import Proj from "../assets/notification-text.svg"
import user from "../assets/user-02.svg"
import dash from "../assets/home-line.svg"
import build from "../assets/building-02.svg"
import activat from "../assets/magic-wand-01.svg"
import alert from "../assets/alert-triangle.svg"
import curr from "../assets/currency-dollar-circle.svg"
const SearchFormContainer = ({

  dimension,
  dimensionText,
  dimensionCode,
  dimensionValue,
  dimensionCodeText,
  imageDimensionCode,
  imageDimensionCodeText,
  imageDimensions,
  dimensionCodeText2,
  dimensionTextCode,
  imageDimensionsText,
  dimensionCodeText3,
  searchlg,
  divider,
  path36
}) => {
  return (
    <div className={styles.nav}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logomark}>
            <img  alt="" src={Frlogo} />
          </div>
       
        </div>
      </div>
      <div className={styles.search}>
        <div className={styles.input}>
          <div className={styles.content}>
          <img className={styles.logoTextIcon} alt="" src={dimensionText} />
            <div className={styles.text}>Search</div>
          </div>
        </div>
      </div>
      <div className={styles.navigation}>
        <div className={styles.dashboard}>
          <div className={styles.content1}>
          <img
              className={styles.homeLineIcon}
              alt=""
              src={dash}
            />
            <div className={styles.text1}>Dashboard</div>
          </div>
        </div>
        <div className={styles.allProjects}>
          <div className={styles.content1}>
          <img
              className={styles.homeLineIcon}
              alt=""
              src={Proj}
            />
            <div className={styles.text1}>Projects</div>
          </div>
        </div>
        <div className={styles.allUsers}>
          <div className={styles.content1}>
          <img
              className={styles.homeLineIcon}
              alt=""
              src={user}
            />
            <div className={styles.text1}>Clients</div>
          </div>
        </div>
        <div className={styles.allUsers}>
          <div className={styles.content1}>
            <img
              className={styles.homeLineIcon}
              alt=""
              src={build}
            />
            <div className={styles.text1}>Agencies</div>
          </div>
        </div>
        <div className={styles.allUsers}>
          <div className={styles.content1}>
            <img className={styles.homeLineIcon} alt="" src={activat} />
            <div className={styles.text1}>Agency activations</div>
          </div>
        </div>
        <div className={styles.allUsers}>
          <div className={styles.content1}>
          <img
              className={styles.homeLineIcon}
              alt=""
              src={alert}
            />
            <div className={styles.text1}>Project cancellations</div>
          </div>
        </div>
        <div className={styles.allUsers}>
          <div className={styles.content1}>
          <img
              className={styles.homeLineIcon}
              alt=""
              src={curr}
            />
            <div className={styles.text1}>Payment requests</div>
          </div>
        </div>
        <div className={styles.allUsers}>
          <div className={styles.content1}>
            <img
              className={styles.homeLineIcon}
              alt=""
              src={imageDimensionsText}
            />
            <div className={styles.text8}>Quality check</div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFormContainer;
