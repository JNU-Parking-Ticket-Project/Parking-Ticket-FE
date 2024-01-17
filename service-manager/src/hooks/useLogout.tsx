import { useLogoutMutate } from './react-query/useUser';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '../functions/jwt';

export const useLogout = () => {
  const { postLogout } = useLogoutMutate();
  const navigate = useNavigate();

  const onLogout = () => {
    postLogout({
      onSuccess: () => {
        removeToken();
        navigate('/');
      },
    });
  };
  return { onLogout };
};
