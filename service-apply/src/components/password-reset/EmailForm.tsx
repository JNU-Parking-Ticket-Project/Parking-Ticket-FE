import { Button, Container, InputText } from '@quokka/design-system';
import EmailError from './EmailError';
import useRequestPasswordForm from '../../hooks/password-reset/useRequestPasswordForm';

const EmailForm = () => {
  const { email, isError, requestPasswordReset, changeEmail } =
    useRequestPasswordForm();
  return (
    <Container className="flex flex-col rounded-2xl" size="large">
      <form onSubmit={requestPasswordReset}>
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
      </form>
    </Container>
  );
};

export default EmailForm;
