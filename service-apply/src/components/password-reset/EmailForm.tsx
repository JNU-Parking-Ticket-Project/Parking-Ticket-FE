import { Button, InputText } from '@quokka/design-system';
import { InputFlexWrapper } from './InputFlexWrapper';
import { FormContainer } from '../common/FormContainer';
import { EmailError } from './EmailError';
import { useRequestPasswordForm } from '../../hooks/password-reset/useRequestPasswordForm';

export const EmailForm = () => {
  const { email, isError, requestPasswordReset, changeEmail } =
    useRequestPasswordForm();
  return (
    <FormContainer
      title="본인인증 이메일 보내기"
      onSubmit={requestPasswordReset}
    >
      <InputFlexWrapper>
        <InputText
          type="text"
          placeholder="asdf1234@jnu.ac.kr"
          label="Email"
          required={false}
          className="w-full"
          value={email}
          error={isError}
          onChange={changeEmail}
        />
      </InputFlexWrapper>
      {isError && <EmailError />}
      <Button size="small" className="mt-8 w-full" color="primary">
        email 인증하기
      </Button>
    </FormContainer>
  );
};
