import React from 'react';
import { SignUp } from '../../components';
import { setUser } from '../../redux/User/slice';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from '../../hooks/redux-hooks';

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handler = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({ email: user.email, id: user.uid, token: user.refreshToken }));
        navigate('/');
      })
      .catch(console.error);
  };
  return <SignUp title="Login" handler={handler} />;
};

export default SignUpPage;
