/** @format */

import Section from "./components/section";
import styles from "./App.module.css";
import Layout from "./components/layout";
import Input from "./components/customInput";
import Select from "./components/customSelect";
import { useQuery } from "react-query";

const App = () => {
  const filters = ["status", "original launch", "type"];

  const { isLoading, isSuccess, isError, data } = useQuery(
    "getCapsules",
    async () => {
      const capsules = await (
        await fetch(`http://localhost:3000/server/index.php`)
      ).json();
      return capsules;
    }
  );

  console.log(data);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error...</span>;
  }

  return (
    <Layout>
      <Section>
        <div id='home' className={styles.home}>
          <Info />
          <Photo />
        </div>
        <div id='find_capsules' className={styles.findCapsules}>
          Find Capsules
          <div>
            <div>
              <Input
                htmlFor='search'
                label='Search'
                id='search'
                type='text'
                placeHolder='Find a capsule'
              />
              <Select
                id='select'
                label='Filters'
                defaultValue='Type'
                itemsList={filters}
              />
            </div>
          </div>
        </div>
        <div id='capsules' className={styles.capsules}>
          Capsules
          <div className='flex-center'>
            <div className='align-cards'>
              {data.map((capsule: any, index: number) => {
                return <div key={index}>{capsule.capsule_id}</div>;
              })}
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

const Photo = () => {
  return (
    <div className={styles.photoContainer}>
      <img src='/home_rocket.jpg' className={styles.photo} alt='Home Rocket' />
    </div>
  );
};

const Info = () => {
  return (
    <div className={styles.info}>
      <h1 className={styles.welcome}>Welcome to SpaceX</h1>
      <p className={styles.welcome}>where innovation meets science.</p>
    </div>
  );
};
export default App;
