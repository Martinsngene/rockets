/** @format */

import styles from "./styles.module.css";
import NavBar from "../navigation/NavBar";
import { GlobalPropsI } from "../interface";
import Footer from "../navigation/Footer";
import FeedBack from "../feedback";

const Layout = ({ children, isLoading, isError }: GlobalPropsI) => {
  if (isLoading) {
    return <FeedBack feedbackImage='/loading.gif' />;
  }

  if (isError) {
    return <FeedBack feedbackImage='/error.gif' />;
  }
  return (
    <>
      <div className={styles.container}>
        <>
          <NavBar />
        </>
        <div className='h-[85vh]'>{children}</div>
        <>
          <Footer />
        </>
      </div>
    </>
  );
};

export default Layout;
