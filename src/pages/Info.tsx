import React from 'react';
import email from '../images/mail.svg';
import profile from '../images/profile-footer.svg';
import key from '../images/key.svg';
import { useAppDispatch } from '../hooks/redux-hooks';
import { setDisplayName, setUser } from '../redux/User/slice';
import back from '../images/back.svg';
import { useNavigate } from 'react-router-dom';

const Info = () => {
  const navigate = useNavigate();
  const ref = React.useRef(null);
  const dispatch = useAppDispatch();

  return (
    <div className="info">
      <div className="info__title">
        <img onClick={() => navigate(-1)} src={back} alt="back" />
        <h2>Account Information</h2>
      </div>
      <div>
        <div className="header__search">
          <img className="header__search-img" src={profile} alt="profile" />
          <input
            ref={ref}
            onChange={(e) => dispatch(setDisplayName(e.target.value))}
            type="text"
            placeholder="Full Name"
          />
        </div>
        {/* <div className="header__search">
          <img className="header__search-img" src={email} alt="email" />
          <input
            ref={ref}
            // onChange={(e) => dispatch(setEmail(e.target.value))}
            type="mail"
            placeholder="Change Email"
          />
        </div>
        <div className="header__search">
          <img className="header__search-img" src={key} alt="password" />
          <input
            ref={ref}
            // onChange={(e) => dispatch(setDisplayName(e.target.value))}
            type="password"
            placeholder="Change password"
          />
        </div> */}
      </div>
      <button className="info__btn">Change settings</button>
    </div>
  );
};

export default Info;
