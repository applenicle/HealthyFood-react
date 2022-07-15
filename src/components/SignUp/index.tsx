import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.scss';
import logo from '../../images/logo.svg';
import shape from '../../images/Shape.svg';
import mail from '../../images/mail.svg';
import key from '../../images/key.svg';
import fb from '../../images/Facebook.svg';
import google from '../../images/Google.svg';
type LoginProps = {
  handler: (email: string, password: string) => void;
  title: string;
};

const SignUp: React.FC<LoginProps> = ({ title, handler }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <div className={styles.signUp}>
      <div className={styles.shape}>
        <img src={shape} alt="shape" />
      </div>
      <div className={styles.greeting}>
        <img src={logo} alt="logo" />
        <h2 className={styles.title}>
          Welcome Back <br /> to Foodbase
        </h2>
        <p className={styles.text}>Hello there, sign in to continue!</p>
      </div>
      <div className={styles.inputs}>
        <div>
          <img src={mail} alt="mail" />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            type="mail"
          />
        </div>
        {/* <div>
          <img src={mail} alt="tel" />
          <input placeholder="Enter your phone number" type="tel" />
        </div> */}
        <div>
          <img src={key} alt="password" />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            type="password"
          />
        </div>
      </div>
      <button onClick={() => handler(email, password)} className={styles.btn}>
        {title}
      </button>
      <p className={styles.text}>Or continue with social account</p>
      <div className={styles.social}>
        <div>
          <img src={google} alt="google" />
          <button>Google</button>
        </div>
        <div>
          <img src={fb} alt="fb" />
          <button>Facebook</button>
        </div>
      </div>
      <p className={styles.linkText}>
        Dont’s have an account?
        <Link className={styles.link} to="/login">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
