import { useMemo } from "react";
import styles from "../styles/property1-language.module.css";
const Property1Language = ({
  translate02,
  text,
  property1LanguagePosition,
}) => {
  const property1LanguageStyle = useMemo(() => {
    return {
      position: property1LanguagePosition,
    };
  }, [property1LanguagePosition]);

  return (
    <div className={styles.property1language} style={property1LanguageStyle}>
      <img className={styles.translate02Icon} alt="" src={translate02} />
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default Property1Language;
