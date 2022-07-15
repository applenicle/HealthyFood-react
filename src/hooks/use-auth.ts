import { useSelector } from 'react-redux';

export function useAuth() {
  const { email, id, token } = useSelector((state: any) => state.UserReducer);
  return {
    isAuth: !!email,
    email,
    id,
    token,
  };
}
