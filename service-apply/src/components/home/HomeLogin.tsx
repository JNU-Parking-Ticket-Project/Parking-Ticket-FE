import { Button, InputText, Txt } from '@quokka/design-system';
import { Link } from 'react-router-dom';
import useLoginForm from '../../hooks/home/useLoginForm';

export const HomeLogin = () => {
  const {
    formAction,
    email,
    onChangeEmail,
    password,
    onChangePassword,
    isError,
    errorMessage,
  } = useLoginForm();

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
              onChange={onChangeEmail}
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
              onChange={onChangePassword}
            />
          </div>
          <Link to={'/password-reset'}>
            <Txt color="secondary">비밀번호 찾기</Txt>
          </Link>
          <Button
            type="submit"
            className="py-4 px-14 rounded-lg max-sm:py-2 max-sm:px-8"
          >
            폼으로 이동
          </Button>
          {isError && (
            <Txt size="sm" color="error">
              {errorMessage}
            </Txt>
          )}
        </div>
      </form>
    </div>
  );
};
