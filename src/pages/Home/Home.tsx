import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Categories, Search, Header } from '../../components';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Search />
      <Categories />
      <h3 className={styles.title}>Most Popular</h3>
      <div className={styles.wrapper}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
