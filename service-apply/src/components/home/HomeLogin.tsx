import { Button, InputText, Txt } from '@quokka/design-system';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutate } from '../../hooks/react-query/useUser';

export const HomeLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { postLogin } = useLoginMutate();
  const navigate = useNavigate();

  const formAction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postLogin(
      { email, password },
      {
        onError: (error) => {
          console.error(error);
        },
        onSuccess: (data) => {
          console.log(data);
          navigate('/apply');
        },
      },
    );
  };

  return (
    <div className="flex justify-end">
      <form className="flex-1 max-w-lg" onSubmit={formAction}>
        <Txt size="h3" color="primary" className="block my-4">
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to={'/password-reset'}>
            <Txt color="secondary">비밀번호 찾기</Txt>
          </Link>
          <Button type="submit" className="py-4 px-14 rounded-lg">
            폼으로 이동
          </Button>
        </div>
      </form>
    </div>
  );
};
