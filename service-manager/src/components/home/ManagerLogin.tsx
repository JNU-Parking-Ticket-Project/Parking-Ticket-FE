import { Button, InputText, Txt } from '@quokka/design-system';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutate } from '../../hooks/react-query/useUser';
import { useState } from 'react';
import { isEmail } from '../../functions/validator';

export const ManagerLogin = () => {
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
          alert('로그인에 성공하였습니다.');
          navigate('/apply-list');
        },
      },
    );
  };

  return (
    <div className="max-w-lg">
      <Txt size="h3" color="primary" className="my-4">
        관리자 로그인
      </Txt>
      <div className="flex flex-col gap-3 items-end">
        <InputText
          designType="box"
          type="text"
          placeholder="이메일"
          className="w-full p-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputText
          designType="box"
          type="password"
          placeholder="비밀번호"
          className="w-full p-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex flex-row">
          <Link to={'/signup'} className="mr-4">
            <Txt color="secondary">회원 가입</Txt>
          </Link>
          <Link to={'/password-reset'}>
            <Txt color="secondary">비밀번호 찾기</Txt>
          </Link>
        </div>
        <Button className="py-4 px-14 rounded-lg" onClick={onLogin}>
          로그인
        </Button>
      </div>
    </div>
  );
};
