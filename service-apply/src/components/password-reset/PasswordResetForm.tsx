import { InputText, Button } from '@quokka/design-system';
import { CenterFormContainer } from '../common/CenterFormContainer';
import { InputFlexWrapper } from './InputFlexWrapper';
import { usePasswordResetForm } from '../../hooks/password-reset/usePasswordResetForm';

export const PasswordResetForm = () => {
  const { passwordResetForm, submitChangePassword, handleInput } =
    usePasswordResetForm();

  return (
    <CenterFormContainer
      title="비밀번호 재설정"
      onSubmit={submitChangePassword}
    >
      <InputFlexWrapper>
        <InputText
          type="text"
          className="flex-1"
          label="비밀번호"
          labelClassName="w-28"
          placeholder="새로운 비밀번호 입력"
          value={passwordResetForm.password}
          name="password"
          onChange={handleInput}
        />
      </InputFlexWrapper>
      <InputFlexWrapper>
        <InputText
          type="password"
          className="flex-1"
          label="비밀번호 재설정"
          labelClassName="w-28"
          placeholder="새로운 비밀번호 확인"
          name="confirmPassword"
          value={passwordResetForm.confirmPassword}
        />
      </InputFlexWrapper>
      <Button size="small" className="mt-8 w-full">
        변경하기
      </Button>
    </CenterFormContainer>
  );
};
