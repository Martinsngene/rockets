/** @format */

import styles from "./styles.module.css";
import NavBar from "../navigation/NavBar";
import { GlobalPropsI } from "../interface";
import Footer from "../navigation/Footer";

const Layout = ({ children }: GlobalPropsI) => {
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
