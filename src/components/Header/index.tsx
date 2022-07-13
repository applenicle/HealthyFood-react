import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import avatar from '../../images/Avatar.png';
import profile from '../../images/profile.svg';

const Header: React.FC = () => {
  const nickname = 'test';
  return (
    <>
      <div>
        <div className={styles.profile}>
          <Link to="/profile">
            <img className={styles.avatar} src={avatar} alt="avatar" />
          </Link>
          <div className={styles.content}>
            <p className={styles.text}>Good Morning</p>
            <h6 className={styles.subtitle}>Hi, {nickname}</h6>
          </div>
          <Link className={styles.profileLink} to="/">
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
