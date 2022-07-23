import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../redux/User/slice';
import Form from '../components/Form';
import fb from '../images/Facebook.svg';
import google from '../images/Google.svg';
import { useAppDispatch } from '../hooks/redux-hooks';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handler = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            displayName: user.email,
            token: user.refreshToken,
          }),
        );
        navigate('/');
      })
      .catch(console.error);
  };
  return (
    <div className="user">
      <Form title="Login" handler={handler} />
      <div className="user__social">
        <div>
          <img src={google} alt="google" />
          <button>Sign In with Google</button>
        </div>
        <div>
          <img src={fb} alt="fb" />
          <button>Sign In with Google</button>
        </div>
      </div>
      <p className="user__link--text">
        Dont’s have an account?
        <Link className="user__link" to="/SignUp">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
