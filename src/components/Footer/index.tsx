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
      <ul className={styles.list}>
        <li>
          <Link to="/">
            <img src={Home} alt="Home" />
          </Link>
        </li>
        <li>
          <Link to="/favourite">
            <img src={Favourite} alt="Favourite" />
          </Link>
        </li>
        <li className={styles.mainBtn}>
          <Link to="/">
            <img src={MainBtn} alt="MainBtn" />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <img src={Profile} alt="Profile" />
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <img src={Cart} alt="Cart" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
