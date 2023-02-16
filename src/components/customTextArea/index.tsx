/** @format */

import { TextAreaPropsI } from "../interface";
import styles from "./styles.module.css";

const TextArea = ({
  htmlFor,
  label,
  id,
  placeHolder,
  onChange,
}: TextAreaPropsI) => {
  return (
    <div>
      <label htmlFor={htmlFor} className={styles.textLabel}>
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeHolder}
        onChange={onChange}
        className={styles.textArea}></textarea>
    </div>
  );
};

export default TextArea;
