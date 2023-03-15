/** @format */

import { GlobalPropsI } from "../interface";
import styles from "./styles.module.css";

const Card = ({ children, onClick }: GlobalPropsI) => {
  return (
    <div
      onClick={onClick}
      className='row-start-2 row-span-2 even:row-start-1 even:row-end-4 w-[300px] h-[350px] rounded-md border border-[#aaa] cursor-pointer'>
      {children}
    </div>
  );
};

export default Card;
