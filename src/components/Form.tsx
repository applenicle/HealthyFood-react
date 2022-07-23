import React from 'react';
import mail from '../images/mail.svg';
import key from '../images/key.svg';
import logo from '../images/logo.svg';
import shape from '../images/Shape.svg';

type FormProps = {
  handler: (email: string, password: string) => void;
  title: string;
};

const Form: React.FC<FormProps> = ({ handler, title }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <div>
      <div className="user__shape">
        <img src={shape} alt="shape" />
      </div>
      <div className="user__greeting">
        <img src={logo} alt="logo" />
        <h2 className="user__title">
          Welcome Back <br /> to Foodbase
        </h2>
        <p className="user__text">Hello there, sign in to continue!</p>
      </div>
      <div className="user__inputs">
        <div>
          <img src={mail} alt="mail" />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            type="mail"
          />
        </div>
        <div>
          <img src={key} alt="password" />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <button onClick={() => handler(email, password)} className="user__btn">
          {title}
        </button>
        <p className="user__text">Or continue with social account</p>
      </div>
    </div>
  );
};

export default Form;
