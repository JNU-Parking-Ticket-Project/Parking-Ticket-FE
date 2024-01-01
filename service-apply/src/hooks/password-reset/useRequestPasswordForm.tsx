import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { isEmail } from '../../functions/validator';
import { usePasswordFindMutate } from '../react-query/useUser';
import { useNavigate } from 'react-router-dom';

export const useRequestPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [isError, setIsError] = useState(false);
  const { postPasswordResetRequest } = usePasswordFindMutate();
  const navigate = useNavigate();

  const changeEmail: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
    setIsError(false);
  };

  const requestPasswordReset: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!email) {
      alert('이메일을 입력해주세요.');
      return;
    }
    if (!isEmail(email)) {
      alert('올바른 형식의 이메일을 입력해 주세요.');
      setIsError(true);
      return;
    }
    postPasswordResetRequest(
      { email },
      {
        onSuccess: () => {
          alert('본인인증 이메일이 전송되었습니다.');
          navigate('/');
        },
        onError: (error) => {
          alert(error.message);
          setIsError(true);
        },
      },
    );
  };

  return { email, isError, changeEmail, requestPasswordReset };
};
