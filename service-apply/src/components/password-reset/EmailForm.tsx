import { Button, InputText } from '@quokka/design-system';
import { InputFlexWrapper } from './InputFlexWrapper';
import { CenterFormContainer } from './CenterFormContainer';
import { EmailError } from './EmailError';
import { useRequestPasswordForm } from '../../hooks/password-reset/useRequestPasswordForm';

export const EmailForm = () => {
  const { email, isError, requestPasswordReset, changeEmail } =
    useRequestPasswordForm();
  return (
    <CenterFormContainer
      title={'본인인증 이메일 보내기'}
      onSubmit={requestPasswordReset}
    >
      <InputFlexWrapper>
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
      </InputFlexWrapper>
      {isError && <EmailError isError={isError} />}
      <Button size="small" className="mt-8 w-full" color="primary">
        email 인증하기
      </Button>
    </CenterFormContainer>
  );
};
