import { Button, Container, InputText } from '@quokka/design-system';
import {
  ChangeEventHandler,
  FormEventHandler,
  PropsWithChildren,
  useState,
} from 'react';

// TODO: 공통 컴포넌트로 분리
const Layout = ({ children }: PropsWithChildren) => {
  return <div className="w-screen h-screen flex flex-col">{children}</div>;
};
interface EmailErrorProps {
  isError: boolean;
}
const EmailError = ({ isError }: EmailErrorProps) => {
  return (
    <div>
      <span className="flex flex-row-reverse text-sm w-full">
        {isError && (
          <p className="text-[#DC0000]">이메일이 올바르지 않습니다.</p>
        )}
      </span>
    </div>
  );
};

const isValidEmailFormat = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const RequestPasswordResetPage = () => {
  const [email, setEmail] = useState('');
  const [isError, setIsError] = useState(false);

  const changeEmail: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
    setIsError(!isValidEmailFormat(e.target.value));
  };

  const requestPasswordReset: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!email) {
      alert('이메일을 입력해주세요.');
      return;
    }
    if (isError) {
      alert('이메일을 확인해주세요.');
      return;
    }
    // TODO: MUTATE LOGIC
  };

  // TODO: Header 변경해야 함
  return (
    <Layout>
      <header>
        <h1 className="text-4xl">전남대학교 주차권 신청 시스템</h1>
      </header>
      <main className="flex items-center justify-center h-full">
        <form onSubmit={requestPasswordReset}>
          <Container className="flex flex-col rounded-2xl" size="large">
            <h2 className="text-[#0255D5] text-2xl font-bold pb-8">
              본인인증 이메일 보내기
            </h2>
            <div className="flex items-center gap-13 w-96 gap-2">
              <InputText
                type="text"
                placeholder="asdf1234@jnu.ac.kr"
                label="email"
                required={false}
                className="w-full"
                value={email}
                error={isError}
                onChange={changeEmail}
              />
            </div>
            {isError && <EmailError isError={isError} />}
            <Button className="mt-8" color="primary">
              email 인증하기
            </Button>
          </Container>
        </form>
      </main>
      <footer className="w-full border-t flex flex-row-reverse py-4">
        <div className="pr-8">
          <h3 className="font-bold text-xl pb-4">Contact Us</h3>
          <p className="color-[#2B2B39] font-light text-sm pb-2">
            전남대학교 총학생회 : 062-530-xxxx
          </p>
          <p className="color-[#2B2B39] font-light text-sm pb-2">
            JNU-student council
          </p>
        </div>
      </footer>
    </Layout>
  );
};

export default RequestPasswordResetPage;
