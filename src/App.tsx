/** @format */

import Section from "./components/section";
import styles from "./App.module.css";
import Layout from "./components/layout";
import Input from "./components/customInput";
import Select from "./components/customSelect";
import { useQuery } from "react-query";
import Card from "./components/card";
import FeedBack from "./components/feedback";

const App = () => {
  const filters = ["status", "original launch", "type"];

  const { isLoading, isError, data } = useQuery("getRockets", async () => {
    const rockets = await (
      await fetch(`http://localhost:3000/server/index.php`)
    ).json();
    return rockets;
  });

  console.log(data);

  if (isLoading) {
    return <FeedBack feedbackImage='/loading.gif' />;
  }

  if (isError) {
    return <FeedBack feedbackImage='/error.gif' />;
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
              {/* <div className='grid grid-cols-2 gap-6 mt-[2rem] bg-red-500'> */}
              {data.map((rocket: any, index: number) => {
                return (
                  <Card key={index}>
                    <img
                      src={rocket.flickr_images[0]}
                      className={styles.rockets}
                      alt='Rockets'
                    />
                  </Card>
                );
              })}
            </div>
            {/* </div> */}
          </div>
        </div>

        {/* <div className='grid grid-rows-3 grid-flow-col gap-4'>
          <div className='row-start-2 row-span-2 bg-blue-500 h-[100px]'>01</div>
          <div className='row-end-3 row-span-2 bg-blue-500'>02</div>
          <div className='row-start-1 row-end-4 bg-blue-500'>03</div>
        </div> */}
        {/* <div className='grid grid-rows-3 grid-flow-col-3 gap-4 mt-[2rem]'></div>
        <div className='grid grid-rows-3 grid-flow-col gap-4 mt-[2rem]'></div>
        <div className='grid grid-rows-3 grid-flow-col gap-4 mt-[2rem]'></div> */}

        {/* <div className='grid grid-rows-3 grid-flow-col gap-4 mt-[2rem]'>
          <div className='row-start-1 row-end-4 bg-blue-500'>03</div>
          <div className='row-end-3 row-span-2 bg-blue-500'>02</div>
          <div className='row-start-2 row-span-2 bg-blue-500 h-[100px]'>01</div>
        </div> */}
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
