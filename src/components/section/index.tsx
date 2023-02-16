/** @format */

import { GlobalPropsI } from "../interface";
import styles from "./styles.module.css";

const Section = ({ children, className, showHeader, header }: GlobalPropsI) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {showHeader && <div className={styles.header}>{header}</div>}
      {children}
    </div>
  );
};

export default Section;
