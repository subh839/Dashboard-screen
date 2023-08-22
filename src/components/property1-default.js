import { useMemo } from "react";
import SearchFormContainer from "./search-form-container";
import SupportContainer from "./support-container";
import styles from "../styles/property1-default.module.css";
const Property1Default = ({
  logoText,
  searchLg,
  homeLine,
  notificationText,
  user02,
  building02,
  magicWand01,
  alertTriangle,
  currencyDollarCircle,
  fileCheck02,
  chevronDown,
  lifeBuoy01,
  settings01,
  avatar,
  logOut01,
  property1DefaultPosition,
  property1DefaultFlexShrink,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      position: property1DefaultPosition,
      flexShrink: property1DefaultFlexShrink,
    };
  }, [property1DefaultPosition, property1DefaultFlexShrink]);

  return (
    <div className={styles.property1default} style={property1DefaultStyle}>
      <div className={styles.content}>
        <SearchFormContainer
          dimension=""
          productDimensions="/logo-text1.svg"
          dimensionText="/searchlg1.svg"
          dimensionText2="/homeline1.svg"
          imageDimensions="/notificationtext1.svg"
          imageDimensionsText="/user021.svg"
          imageDimensionsText2="/building021.svg"
          imageDimensionsText3="/magicwand011.svg"
          imageDimensionsText4="/alerttriangle1.svg"
          dimensionText3="/currencydollarcircle1.svg"
          dimensionText4="/filecheck021.svg"
          dimensionText5="/chevrondown1.svg"
        />
        <SupportContainer
          imageDimensions="/lifebuoy011.svg"
          imageCode="/settings011.svg"
          imageCodeDimensions="/avatar5@2x.png"
          imageCodeDimensions2="/logout011.svg"
        />
      </div>
    </div>
  );
};

export default Property1Default;
