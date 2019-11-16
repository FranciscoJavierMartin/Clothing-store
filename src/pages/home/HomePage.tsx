import React from 'react';
import styles from './HomePage.module.scss';
import Directory from '../../components/directory/Directory';

const HomePage = () => (
  <div className={styles.homepage} data-test='home-component'>
    <Directory/>
  </div>
);

export default HomePage;
