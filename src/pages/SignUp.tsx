import React from 'react';
import { Link } from 'react-router-dom';
import { setUser } from '../redux/User/slice';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from '../hooks/redux-hooks';
import Form from '../components/Form';
import fb from '../images/Facebook.svg';
import google from '../images/Google.svg';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handler = (email: string, password: string) => {
    const auth = getAuth();
    console.log(auth);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            displayName: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        );
        navigate('/');
      })
      .catch(console.error);
  };
  return (
    <div className="user">
      <Form title="Sign Up" handler={handler} />
      <div className="user__social--mini">
        <div>
          <img src={google} alt="google" />
          <button>Google</button>
        </div>
        <div>
          <img src={fb} alt="fb" />
          <button>Facebook</button>
        </div>
      </div>
      <p className="user__link--text">
        Dont’s have an account?
        <Link className="user__link" to="/login">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
