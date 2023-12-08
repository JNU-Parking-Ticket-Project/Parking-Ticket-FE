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
      alert('이메일을 확인해주세요.');
      setIsError(true);
      return;
    }
    postPasswordResetRequest(
      { email },
      {
        onError: (error) => {
          alert('알 수 없는 오류가 발생했습니다.: ' + error);
        },
        // TODO: 회원가입 완료 페이지 보이기
        onSuccess: () => {
          alert('이메일을 확인해주세요.');
          navigate('/');
        },
      },
    );
  };

  return { email, isError, changeEmail, requestPasswordReset };
};
