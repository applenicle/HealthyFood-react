import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import Home from '../../images/homeIco.svg';
import Favourite from '../../images/favIco.svg';
import MainBtn from '../../images/Rest.svg';
import Profile from '../../images/profileIco.svg';
import Cart from '../../images/cartIco.svg';

const Footer = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <Link to="/">
          <img src={Home} alt="Home" />
        </Link>
        <Link to="/favourite">
          <img src={Favourite} alt="Favourite" />
        </Link>
        <div className={styles.mainBtn}>
          <Link to="/">
            <img src={MainBtn} alt="MainBtn" />
          </Link>
        </div>
        <Link to="/profile">
          <img src={Profile} alt="Profile" />
        </Link>
        <Link to="/cart">
          <img src={Cart} alt="Cart" />
        </Link>
      </nav>
    </div>
  );
};

export default Footer;
