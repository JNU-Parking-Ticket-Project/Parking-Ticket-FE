import { Button, InputText, Txt } from '@quokka/design-system';
import { Link } from 'react-router-dom';
import { useLoginForm } from '../../hooks/useLogin';

export const ManagerLogin = () => {
  const { email, onLogin, password, setEmail, setPassword } = useLoginForm();

  return (
    <div className="max-w-lg">
      <Txt size="h3" color="primary" className="my-4">
        관리자 로그인
      </Txt>
      <form
        className="flex flex-col gap-3 items-end"
        onSubmit={(e) => {
          e.preventDefault();
          onLogin();
        }}
      >
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
        <Button className="py-4 px-14 rounded-lg" type="submit">
          로그인
        </Button>
      </form>
    </div>
  );
};
