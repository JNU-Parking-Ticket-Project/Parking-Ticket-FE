import { Button, InputText, Txt } from '@quokka/design-system';
import { Link } from 'react-router-dom';

export const HomeLogin = () => {
  return (
    <div className="flex justify-end">
      <form className="flex-1 max-w-lg" action="">
        <Txt size="h3" color="primay" className="my-4">
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
          <Link to={'/'}>
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
