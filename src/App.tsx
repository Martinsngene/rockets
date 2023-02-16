/** @format */

import Section from "./components/section";
import Seo from "./components/seo";
import styles from "./App.module.css";
import Layout from "./components/layout";

const App = () => {
  return (
    <Layout>
      <Section>
        <div className={styles.container}>
          {/* <Photo /> */}
          <Info />
        </div>
      </Section>
    </Layout>
  );
};

const Photo = () => {
  return (
    <div className={styles.photo}>
      <img src='/me-home.jpg' alt='' width={450} height={299} />
    </div>
  );
};

const Info = () => {
  return (
    <div className={styles.info}>
      <div>Hello World</div>
    </div>
  );
};

export default App;
