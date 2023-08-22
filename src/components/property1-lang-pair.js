import { useMemo } from "react";
import styles from "../styles/property1-lang-pair.module.css";
const Property1LangPair = ({
  translate02,
  text,
  text1,
  text2,
  showText,
  textVisible,
  property1LangPairPosition,
}) => {
  const property1LangPairStyle = useMemo(() => {
    return {
      position: property1LangPairPosition,
    };
  }, [property1LangPairPosition]);

  return (
    <div className={styles.property1langPair} style={property1LangPairStyle}>
      <img className={styles.translate02Icon} alt="" src={translate02} />
      <div className={styles.text}>{text}</div>
      {showText && <div className={styles.text}>{text1}</div>}
      {textVisible && <div className={styles.text}>{text2}</div>}
    </div>
  );
};

export default Property1LangPair;
