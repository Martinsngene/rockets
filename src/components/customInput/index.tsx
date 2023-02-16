/** @format */

import { InputPropsI } from "../interface";
import styles from "./styles.module.css";

const Input = ({
  htmlFor,
  label,
  id,
  type,
  placeHolder,
  onChange,
}: InputPropsI) => {
  return (
    <div>
      <label className={styles.label} htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className={styles.input}
        id={id}
        type={type}
        onChange={onChange}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default Input;
