import { ChangeEvent, useState } from 'react';
import { useLoginMutate } from '../react-query/useUser';
import { useNavigate } from 'react-router-dom';
import { isEmail, isPassword } from '../../functions/validator';

const useLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { postLogin, status } = useLoginMutate();
  const navigate = useNavigate();

  const formAction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      alert('이메일을 입력해 주세요.');
      return;
    }
    if (!password) {
      alert('비밀번호를 입력해 주세요.');
      return;
    }
    if (!isEmail(email)) {
      alert('올바른 형식의 이메일을 입력해 주세요.');
      setIsError(true);
      setErrorMessage('올바른 형식의 이메일을 입력해 주세요.');
      return;
    }
    if (!isPassword(password)) {
      alert(
        '비밀번호는 최소 8자 이상, 16자리 이하이며 최소 하나의 영문자, 숫자, 특수문자(!@#$%^&*)가 포함되어야 합니다.',
      );
      setIsError(true);
      setErrorMessage(
        '비밀번호는 최소 8자 이상, 16자리 이하이며 최소 하나의 영문자, 숫자, 특수문자(!@#$%^&*)가 포함되어야 합니다.',
      );
      return;
    }
    postLogin(
      { email, pwd: password },
      {
        onError: (error) => {
          alert(error.message);
          setIsError(true);
          setErrorMessage(error.message);
        },
        onSuccess: () => {
          navigate('/apply');
        },
      },
    );
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsError(false);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setIsError(false);
  };

  return {
    formAction,
    email,
    onChangeEmail,
    password,
    onChangePassword,
    isError,
    errorMessage,
  };
};

export default useLoginForm;
