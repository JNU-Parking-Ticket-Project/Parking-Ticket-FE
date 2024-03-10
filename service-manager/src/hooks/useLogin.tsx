import { useState } from 'react';
import { useLoginMutate } from './react-query/useUser';
import { useNavigate } from 'react-router-dom';
import { isEmail, isPassword } from '../functions/validator';

export const useLoginForm = () => {
  const { postLogin } = useLoginMutate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onLogin = () => {
    if (!email) return alert('이메일을 입력해주세요.');
    if (!password) return alert('비밀번호를 입력해주세요.');
    if (!isEmail(email)) return alert('이메일 형식이 올바르지 않습니다.');
    if (!isPassword(password))
      return alert(
        '비밀번호는 최소 8자 이상, 16자리 이하이며 최소 하나의 영문자, 숫자, 특수문자(!@#$%^&*)가 포함되어야 합니다.',
      );

    postLogin(
      { email, pwd: password },
      {
        onError: (error) => {
          alert(error.message);
        },
        onSuccess: () => {
          navigate('/apply-list');
        },
      },
    );
  };
  return { email, setEmail, password, setPassword, onLogin };
};
