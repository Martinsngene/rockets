/** @format */
import { FeedBackPropsI } from "../interface";
import styles from "./styles.module.css";

const FeedBack = ({ feedbackImage }: FeedBackPropsI) => {
  return (
    <div className={styles.container}>
      <img src={feedbackImage} alt='Feedback Screen' className={styles.photo} />
    </div>
  );
};

export default FeedBack;
