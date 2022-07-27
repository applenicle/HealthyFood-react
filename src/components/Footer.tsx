import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../images/home-footer.svg';
import Favourite from '../images/fav-footer.svg';
import MainBtn from '../images/MainBtn.svg';
import Profile from '../images/profile-footer.svg';
import Cart from '../images/footer-cart.svg';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <nav className="footer__nav">
        <Link to="/">
          <img src={Home} alt="Home" />
        </Link>
        <Link to="/favourite">
          <img src={Favourite} alt="Favourite" />
        </Link>
        <div className="footer__btn">
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
