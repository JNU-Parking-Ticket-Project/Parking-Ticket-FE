import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { usePasswordResetMutate } from '../react-query/useUser';
import { useNavigate } from 'react-router-dom';

interface PasswordResetForm {
  password: string;
  confirmPassword: string;
}

export const usePasswordResetForm = () => {
  const [passwordResetForm, setPasswordResetForm] = useState<PasswordResetForm>(
    {
      password: '',
      confirmPassword: '',
    },
  );
  const [code, setCode] = useState<string>('');

  const { postPasswordReset } = usePasswordResetMutate();
  const navigate = useNavigate();

  const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPasswordResetForm({
      ...passwordResetForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitChangePassword: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (passwordResetForm.password !== passwordResetForm.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    postPasswordReset(
      {
        password: passwordResetForm.password,
        code,
      },
      {
        onSuccess: () => {
          alert('비밀번호 재설정이 완료 되었습니다.');
          navigate('/');
        },
      },
    );
  };

  return { passwordResetForm, handleInput, submitChangePassword, setCode };
};
