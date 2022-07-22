import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../images/Avatar.png';
import profile from '../images/profile.svg';
import { useAppSelector } from '../hooks/redux-hooks';

const Header: React.FC = () => {
  const { displayName } = useAppSelector((state) => state.UserReducer);
  return (
    <>
      <div className="header">
        <div className="header__profile">
          <Link to="/profile">
            <img className="header__avatar" src={avatar} alt="avatar" />
          </Link>
          <div className="header__content">
            <p className="header__text">Good Morning</p>
            <h6 className="header__subtitle">Hi, {displayName}</h6>
          </div>
          <Link className="header__themeToogle" to="/">
            <img src={profile} alt="profile" />
          </Link>
        </div>
        <h2 className="header__title">
          Find and Order <br /> Food for You 🥘
        </h2>
      </div>
    </>
  );
};

export default Header;
