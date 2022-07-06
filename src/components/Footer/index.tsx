import React from 'react';
import styles from './Footer.module.scss';
import Home from '../../images/homeIco.svg';
import Favourite from '../../images/favIco.svg';
import MainBtn from '../../images/Rest.svg';
import Profile from '../../images/profileIco.svg';
import Cart from '../../images/cartIco.svg';

const Footer = () => {
  return (
    <div>
      <ul className={styles.list}>
        <li>
          <img src={Home} alt="Home" />
        </li>
        <li>
          <img src={Favourite} alt="Favourite" />
        </li>
        <li className={styles.mainBtn}>
          <img src={MainBtn} alt="MainBtn" />
        </li>
        <li>
          <img src={Profile} alt="Profile" />
        </li>
        <li>
          <img src={Cart} alt="Cart" />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
