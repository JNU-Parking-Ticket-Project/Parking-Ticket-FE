import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { usePasswordResetMutate } from '../react-query/useUser';
import { useNavigate } from 'react-router-dom';
import {
  PasswordResetFormInput,
  passwordResetFormValidator,
} from '../../functions/validator';

export const usePasswordResetForm = () => {
  const [passwordResetForm, setPasswordResetForm] =
    useState<PasswordResetFormInput>({
      password: '',
      confirmPassword: '',
    });
  const [code, setCode] = useState('');

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
    const { success, message } = passwordResetFormValidator(passwordResetForm);

    if (!success) {
      setIsError(true);
      setErrorMessage(message);
      alert(message);
      return;
    }

    setIsError(false);
    setErrorMessage('');

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

  return {
    passwordResetForm,
    handleInput,
    submitChangePassword,
    setCode,
    isError,
    errorMessage,
  };
};
