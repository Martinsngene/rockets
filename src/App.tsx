/** @format */

import { useState } from "react";
import { useQuery } from "react-query";

import Section from "./components/section";
import styles from "./App.module.css";
import Layout from "./components/layout";
import Input from "./components/customInput";
import Select from "./components/customSelect";
import Card from "./components/card";
import { filterDataFromSearch, getRockets } from "./utils";

const App = () => {
  const filters = ["status", "original launch", "type"];

  // useState Hook to manage the state of the search input field
  const [searchVal, setSearchVal] = useState("");

  // Query to get data from PHP server
  const { isLoading, isError, data } = useQuery("getRockets", getRockets);

  let search = true;

  const queryStates = {
    isLoading: isLoading,
    isError: isError,
  };

  return (
    <Layout {...queryStates}>
      <Section>
        {/* Home Section to welcome users */}
        <div id='home' className={styles.home}>
          <div className={styles.info}>
            <h1 className={styles.welcome}>Welcome to SpaceX</h1>
            <p className={styles.welcome}>where innovation meets science.</p>
          </div>
          <div className={styles.photoContainer}>
            <img
              src='/home_rocket.jpg'
              className={styles.photo}
              alt='Home Rocket'
            />
          </div>
        </div>
        {/* Search for a Rocket or a Capsule */}
        <div id='find_capsules' className={styles.findCapsules}>
          <h2>Find Capsules</h2>
          <div className={styles.searchFilter}>
            <Input
              htmlFor='search'
              label='Search'
              id='search'
              type='text'
              placeHolder='Find a capsule'
              containerStyles='w-[50%]'
              onChange={(e) => setSearchVal(e.target.value)}
            />
            <Select
              id='select'
              label='Filters'
              defaultValue='Type'
              itemsList={filters}
              containerStyles='w-[50%]'
            />
          </div>
          <div className='flex-center flex-col'>
            {searchVal === "" ? (
              <div className={styles.searchResults}>
                <img
                  src={search ? "/search.gif" : "/search-not-found.gif"}
                  alt='Search Rockets'
                  className={styles.searchImage}
                />
                <h3 className={styles.searchText}>
                  {search ? "Search for Rockets" : "No results found"}
                </h3>
              </div>
            ) : (
              <div className='flex mt-6 md:mt-16'>
                {filterDataFromSearch(data, searchVal).map(
                  (rocket: any, index: number) => {
                    return (
                      <Card key={index}>
                        <img
                          src={rocket.flickr_images[0]}
                          className={styles.rockets}
                          alt='Rockets'
                        />
                      </Card>
                    );
                  }
                )}
              </div>
            )}
          </div>
        </div>
        {/* Data Grid For Rockets */}
        <div id='capsules' className={styles.capsules}>
          Rockets
          <div className='flex-center'>
            <div className='align-cards'>
              {data?.map((rocket: any, index: number) => {
                return (
                  <Card onClick={() => alert("Hi")} key={index}>
                    <img
                      src={rocket.flickr_images[0]}
                      className={styles.rockets}
                      alt='Rockets'
                    />
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default App;
