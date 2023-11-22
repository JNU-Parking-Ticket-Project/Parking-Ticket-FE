import { Button, Container, InputText } from '@quokka/design-system';
import EmailError from './EmailError';
import useRequestPasswordForm from '../../hooks/password-reset/useRequestPasswordForm';
import CenterFormContainer from './CenterFormContainer';

const EmailForm = () => {
  const { email, isError, requestPasswordReset, changeEmail } =
    useRequestPasswordForm();
  return (
    <CenterFormContainer
      title={'본인인증 이메일 보내기'}
      onSubmit={requestPasswordReset}
    >
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
    </CenterFormContainer>
  );
};

export default EmailForm;
