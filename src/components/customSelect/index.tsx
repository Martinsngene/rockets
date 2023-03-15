/** @format */

import { useState } from "react";
import styles from "./styles.module.css";
import { SelectPropsI } from "../interface";

/*
- onClick of the button the section is set to display and shows with a list of items
- An array will be mapped in items section
- onClick of an array item, the section is hidden and the title is set to the array item clicked
*/

const Select = ({
  id,
  defaultValue,
  itemsList,
  label,
  labelStyles,
}: SelectPropsI) => {
  const [currentItem, setCurrentItem] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);

  const handleItems = (itemValue: string) => {
    setCurrentItem(itemValue);
    setIsOpen(!isOpen);
  };

  const handleIsOpen = () => setIsOpen(!isOpen);

  return (
    <div className={styles.container}>
      <label className={`${styles.label} ${labelStyles}`} htmlFor={id}>
        {label}
      </label>
      <div
        onClick={handleIsOpen}
        className={`${styles.dropDown} ${isOpen ? "border" : ""}`}>
        <p className={styles.currentItem}>{currentItem}</p>
        <button className={styles.selectBtn}>
          <img
            src='/down.svg'
            alt='arrow-right'
            className='w-[30px] h-[30px]'
          />
        </button>
      </div>
      {isOpen && (
        <ul className={styles.itemContainer}>
          {itemsList.map((item, index) => {
            return (
              <li
                className={styles.item}
                onClick={() => handleItems(item)}
                key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
