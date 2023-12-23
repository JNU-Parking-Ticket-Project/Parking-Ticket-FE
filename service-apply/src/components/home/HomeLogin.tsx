import { Button, InputText, Txt } from '@quokka/design-system';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutate } from '../../hooks/react-query/useUser';
import { isEmail } from '../../functions/validator';

export const HomeLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { postLogin } = useLoginMutate();
  const navigate = useNavigate();

  const formAction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      alert('이메일을 입력해주세요.');
      return;
    }
    if (!password) {
      alert('비밀번호를 입력해주세요.');
      return;
    }
    if (isEmail(email) === false) {
      alert('이메일을 확인해주세요.');
      setIsError(true);
      setErrorMessage('이메일을 확인해주세요.');
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

  return (
    <div className="flex justify-end max-sm:mb-4">
      <form className="flex-1 sm:max-w-lg" onSubmit={formAction}>
        <Txt size="h3" color="primary" className="block my-4 max-sm:text-2xl">
          신청 폼 작성하기
        </Txt>
        <div className="flex flex-col gap-3 items-end">
          <div className="w-full">
            <InputText
              designType="box"
              type="text"
              placeholder="이메일"
              name="email"
              className="w-full p-4"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setIsError(false);
              }}
            />
          </div>
          <div className="w-full">
            <InputText
              designType="box"
              type="password"
              placeholder="비밀번호"
              name="password"
              className="w-full p-4"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setIsError(false);
              }}
            />
          </div>
          {isError && <Txt color="error">{errorMessage}</Txt>}
          <Link to={'/password-reset'}>
            <Txt color="secondary">비밀번호 찾기</Txt>
          </Link>
          <Button
            type="submit"
            className="py-4 px-14 rounded-lg max-sm:py-2 max-sm:px-8"
          >
            폼으로 이동
          </Button>
        </div>
      </form>
    </div>
  );
};
