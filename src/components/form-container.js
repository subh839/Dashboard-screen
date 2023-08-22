import { useMemo } from "react";
import styles from "../styles/form-container.module.css";
const FormContainer = ({
  productCode,
  price,
  propBorderBottom,
  propBorderBottom1,
}) => {
  const tableCellStyle = useMemo(() => {
    return {
      borderBottom: propBorderBottom,
    };
  }, [propBorderBottom]);

  const tableCell1Style = useMemo(() => {
    return {
      borderBottom: propBorderBottom1,
    };
  }, [propBorderBottom1]);

  return (
    <div className={styles.row1}>
      <div className={styles.tableCell} style={tableCellStyle}>
        <img className={styles.avatarIcon} alt="" src={productCode} />
        <div className={styles.textAndSupportingText}>
          <div className={styles.text}>J-Texon</div>
          <div className={styles.supportingText}>Project name here</div>
        </div>
      </div>
      <div className={styles.tableCell1} style={tableCell1Style}>
        <div className={styles.text1}>{price}</div>
      </div>
    </div>
  );
};

export default FormContainer;
