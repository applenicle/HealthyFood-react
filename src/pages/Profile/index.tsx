import React from 'react';
import styles from './Profile.module.scss';
import profileIcon from '../../images/profileIcon.svg';
import arrowRight from '../../images/ArrowRight.svg';
import profile from '../../images/Avatar.png';
import { setDisplayName, setMode } from '../../redux/User/slice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';

const Profile = () => {
  const dispatch = useAppDispatch();
  const { displayName, mode } = useAppSelector((state) => state.UserReducer);
  // const ref = React.useRef(null);
  // const changeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   dispatch(setDisplayName(e.target.value));
  //   //   <div>
  //   //   <input ref={ref} onChange={changeNickname} type="text" placeholder="Full Name" />
  //   // </div>
  // };
  const switchMode = () => {
    dispatch(setMode(!mode));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <h1>Profile</h1>
        <img src={profileIcon} alt="" />
      </div>
      <div className={styles.user}>
        <img src={profile} alt="" />
        <div>
          <h3>{displayName}</h3>
          <div>@foodbase</div>
        </div>
      </div>

      <div>
        <span onClick={switchMode}>+</span>
        <span onClick={switchMode}>-</span>
      </div>

      <div className={styles.scroll}>
        <h2 className={styles.subtitle}>General</h2>
        <div className={styles.block}>
          <img src={profileIcon} alt="profileIcon" />
          <div>
            <h2>Account Information</h2>
            <p>Change your Account information</p>
          </div>
          <img src={arrowRight} alt="arrowRight" />
        </div>
        <div className={styles.block}>
          <img src={profileIcon} alt="profileIcon" />
          <div>
            <h2>Account Information</h2>
            <p>Change your Account information</p>
          </div>
          <img src={arrowRight} alt="arrowRight" />
        </div>
        <div className={styles.block}>
          <img src={profileIcon} alt="profileIcon" />
          <div>
            <h2>Account Information</h2>
            <p>Change your Account information</p>
          </div>
          <img src={arrowRight} alt="arrowRight" />
        </div>
        <div className={styles.block}>
          <img src={profileIcon} alt="profileIcon" />
          <div>
            <h2>Account Information</h2>
            <p>Change your Account information</p>
          </div>
          <img src={arrowRight} alt="arrowRight" />
        </div>
        <div className={styles.block}>
          <img src={profileIcon} alt="profileIcon" />
          <div>
            <h2>Account Information</h2>
            <p>Change your Account information</p>
          </div>
          <img src={arrowRight} alt="arrowRight" />
        </div>
        <h2 className={styles.subtitle}>More</h2>
        <div className={styles.block}>
          <img src={profileIcon} alt="profileIcon" />
          <div>
            <h2>Account Information</h2>
            <p>Change your Account information</p>
          </div>
          <img src={arrowRight} alt="arrowRight" />
        </div>
        <div className={styles.block}>
          <img src={profileIcon} alt="profileIcon" />
          <div>
            <h2>Account Information</h2>
            <p>Change your Account information</p>
          </div>
          <img src={arrowRight} alt="arrowRight" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
