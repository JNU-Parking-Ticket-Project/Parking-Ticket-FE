import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { useCaptchaQuery } from '../react-query/useCaptcha';

export const useCaptchaForm = ({
  postRegistration,
}: {
  postRegistration: ({
    inputCode,
    answerCode,
  }: {
    inputCode: string;
    answerCode: string;
  }) => void;
}) => {
  const [input, setInput] = useState('');
  const { captchaCode, captchaImageUrl } = useCaptchaQuery();

  const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value.replace(/[^0-9]/g, ''));
  };

  const handleSubmit = () => {
    postRegistration({ inputCode: input, answerCode: captchaCode });
  };

  return { input, handleInput, captchaImageUrl, handleSubmit };
};
