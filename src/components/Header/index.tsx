import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import avatar from '../../images/Avatar.png';
import profile from '../../images/profile.svg';

const Header: React.FC = () => {
  return (
    <>
      <div>
        <div className={styles.profile}>
          <img className={styles.avatar} src={avatar} alt="avatar" />
          <div className={styles.content}>
            <p className={styles.text}>Good Morning</p>
            <h6 className={styles.subtitle}>Hi, Kítbase</h6>
          </div>
          <Link className={styles.profile} to="/">
            <img src={profile} alt="profile" />
          </Link>
        </div>
        <h2 className={styles.title}>
          Find and Order <br /> Food for You 🥘
        </h2>
      </div>
    </>
  );
};

export default Header;
