import React from 'react';
import styles from './HomePage.module.scss';
import Directory from '../../components/directory/Directory';

interface IHomePageProps {}

const HomePage = (props: IHomePageProps) => {
  return (
    <div className={styles.homepage} data-test='home-component'>
      <Directory/>
    </div>
  );
};

export default HomePage;
