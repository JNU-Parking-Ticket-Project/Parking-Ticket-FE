import { useState } from 'react';
import { useLoginMutate } from './react-query/useUser';
import { useNavigate } from 'react-router-dom';
import { isEmail } from '../functions/validator';

export const useLoginForm = () => {
  const { postLogin } = useLoginMutate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onLogin = () => {
    if (!email) return alert('이메일을 입력해주세요.');
    if (!password) return alert('비밀번호를 입력해주세요.');
    if (!isEmail(email)) return alert('이메일 형식이 올바르지 않습니다.');

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
