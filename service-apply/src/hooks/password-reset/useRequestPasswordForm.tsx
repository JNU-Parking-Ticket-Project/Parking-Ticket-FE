import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { isEmail } from '../../functions/validator';

export const useRequestPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [isError, setIsError] = useState(false);

  const changeEmail: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
    setIsError(!isEmail(e.target.value));
  };

  const requestPasswordReset: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!email) {
      alert('이메일을 입력해주세요.');
      return;
    }
    if (isError) {
      alert('이메일을 확인해주세요.');
      return;
    }
    // TODO: MUTATE LOGIC
  };

  return { email, isError, changeEmail, requestPasswordReset };
};
