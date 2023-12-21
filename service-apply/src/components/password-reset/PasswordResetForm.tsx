import { InputText, Button, Txt } from '@quokka/design-system';
import { FormContainer } from '../common/FormContainer';
import { InputFlexWrapper } from './InputFlexWrapper';
import { usePasswordResetForm } from '../../hooks/password-reset/usePasswordResetForm';
import { useEffect } from 'react';

export const PasswordResetForm = ({ code }: { code: string }) => {
  const {
    passwordResetForm,
    submitChangePassword,
    handleInput,
    setCode,
    isError,
    errorMessage,
  } = usePasswordResetForm();

  useEffect(() => {
    setCode(code);
  }, [code]);

  return (
    <FormContainer title="비밀번호 재설정" onSubmit={submitChangePassword}>
      <InputFlexWrapper>
        <InputText
          type="password"
          className="flex-[1_0_7rem]"
          label="비밀번호"
          labelClassName="w-28"
          placeholder="새로운 비밀번호 입력"
          value={passwordResetForm.password}
          name="password"
          onChange={handleInput}
        />
        <InputText
          type="password"
          className="flex-[1_0_7rem]"
          label="비밀번호 재입력"
          labelClassName="w-28"
          placeholder="새로운 비밀번호 확인"
          name="confirmPassword"
          value={passwordResetForm.confirmPassword}
          onChange={handleInput}
        />
      </InputFlexWrapper>
      {isError && (
        <Txt color="error" className="block mt-2">
          {errorMessage}
        </Txt>
      )}
      <Button size="small" className="mt-8 w-full">
        변경하기
      </Button>
    </FormContainer>
  );
};
