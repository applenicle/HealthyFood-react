// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import { setUser } from '../redux/User/slice';
// import { Login } from '../components';
// import { useAppDispatch } from '../hooks/redux-hooks';

// const LoginPage: React.FC = () => {
//   const navigate = useNavigate();
//   const dispatch = useAppDispatch();
//   const handler = (email: string, password: string) => {
//     const auth = getAuth();
//     signInWithEmailAndPassword(auth, email, password)
//       .then(({ user }) => {
//         dispatch(setUser({ email: user.email, id: user.uid, token: user.refreshToken }));
//         navigate('/');
//       })
//       .catch(console.error);
//   };
//   return <Login title="Login" handleClick={handler} />;
// };

// export default LoginPage;
import React from 'react';

const Login = () => {
  return <div>Login</div>;
};

export default Login;
