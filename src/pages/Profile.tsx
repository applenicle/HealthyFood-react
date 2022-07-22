import React from 'react';
import profile from '../images/Avatar.png';
import { useAppSelector } from '../hooks/redux-hooks';
import { ProfileInfo } from '../components';

const Profile = () => {
  const { displayName } = useAppSelector((state) => state.UserReducer);

  return (
    <div>
      <div className="profile__info">
        <h1>Profile</h1>
        <img src="" alt="" />
      </div>
      <div className="profile__user">
        <img src={profile} alt="" />
        <div>
          <h3>{displayName}</h3>
          <div>@foodbase</div>
        </div>
      </div>
      <ProfileInfo />
    </div>
  );
};

export default Profile;
