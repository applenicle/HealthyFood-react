import React from 'react';
import styles from './Search.module.scss';
import cog from '../../images/Cog.svg';
import search from '../../images/search.svg';

const Search: React.FC = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.search}>
          <img className={styles.searchImg} src={search} alt="search" />
          <input className={styles.input} type="text" placeholder="Search Your Food" />
          <img className={styles.cog} src={cog} alt="cog" />
        </div>
      </div>
    </>
  );
};

export default Search;
