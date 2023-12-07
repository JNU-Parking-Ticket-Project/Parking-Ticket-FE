import { Button, InputText, Txt } from '@quokka/design-system';
import { Link } from 'react-router-dom';

export const ManagerLogin = () => {
  return (
    <div className="flex justify-start">
      <form className="flex-1 max-w-lg" action="">
        <Txt size="h3" color="primary" className="my-4">
          관리자 로그인
        </Txt>
        <div className="flex flex-col gap-3 items-end">
          <div className="w-full">
            <InputText
              designType="box"
              type="text"
              placeholder="이메일"
              name="email"
              className="w-full p-4"
            />
          </div>
          <div className="w-full">
            <InputText
              designType="box"
              type="password"
              placeholder="비밀번호"
              name="password"
              className="w-full p-4"
            />
          </div>
          <div className="flex flex-row">
            <Link to={'/signup'} className="mr-4">
              <Txt color="secondary">회원 가입</Txt>
            </Link>
            <Link to={'/password-reset'}>
              <Txt color="secondary">비밀번호 찾기</Txt>
            </Link>
          </div>
          <Button type="submit" className="py-4 px-14 rounded-lg">
            로그인
          </Button>
        </div>
      </form>
    </div>
  );
};
