import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import avatar from '../../images/Avatar.png';
import profile from '../../images/profile.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';

const Header: React.FC = () => {
  const test = 'test';
  // const { email } = useSelector((state: any) => state.UserReducer);
  return (
    <>
      <div>
        <div className={styles.profile}>
          <Link to="/profile">
            <img className={styles.avatar} src={avatar} alt="avatar" />
          </Link>
          <div className={styles.content}>
            <p className={styles.text}>Good Morning</p>
            <h6 className={styles.subtitle}>Hi, {test}</h6>
          </div>
          <Link className={styles.themeToogle} to="/">
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
