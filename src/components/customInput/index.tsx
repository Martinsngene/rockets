/** @format */

import { InputPropsI } from "../interface";
import styles from "./styles.module.css";

const Input = ({
  htmlFor,
  label,
  id,
  type,
  placeHolder,
  containerStyles,
  inputValue,
  onChange,
}: InputPropsI) => {
  return (
    <div className={containerStyles}>
      <label className={styles.label} htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className={styles.input}
        id={id}
        type={type}
        onChange={onChange}
        placeholder={placeHolder}
        value={inputValue}
      />
    </div>
  );
};

export default Input;
