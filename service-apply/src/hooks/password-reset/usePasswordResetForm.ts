import { ChangeEventHandler, FormEventHandler, useState } from 'react';

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
    alert('비밀번호 재설정이 완료 되었습니다.');
    // TODO: navigate homepage
  };

  return { passwordResetForm, handleInput, submitChangePassword };
};
