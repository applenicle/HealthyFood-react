import React from 'react';
import profileIcon from '../images/profile-footer.svg';
import arrowRight from '../images/ArrowRight.svg';
import { setMode } from '../redux/User/slice';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { Link } from 'react-router-dom';

const ProfileInfo: React.FC = () => {
  const dispatch = useAppDispatch();

  const { mode } = useAppSelector((state) => state.UserReducer);
  const switchMode = () => {
    dispatch(setMode(!mode));
  };
  return (
    <div className="scroll">
      <h2 className="profile__subtitle">General</h2>
      <Link to="info">
        <div className="profile__block">
          <img src={profileIcon} alt="profileIcon" />
          <div>
            <h2>Account Information</h2>
            <p>Change your Account information</p>
          </div>
          <img src={arrowRight} alt="arrowRight" />
        </div>
      </Link>
      <h2 className="profile__subtitle">More</h2>
      <div className="profile__block">
        <img src={profileIcon} alt="profileIcon" />
        <div>
          <h2>Theme</h2>
          <p>Change your theme</p>
        </div>
        <div onClick={switchMode} className="profile__btn">
          {<div className={mode ? 'profile__btn--unactive' : 'profile__btn--active'}></div>}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
