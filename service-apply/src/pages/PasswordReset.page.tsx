import { useParams } from 'react-router-dom';
import { Layout } from '../components/password-reset/Layout';
import { Button, InputText } from '@quokka/design-system';
import { InputFlexWrapper } from '../components/password-reset/InputFlexWrapper';
import { CenterFormContainer } from '../components/password-reset/CenterFormContainer';
import { usePasswordResetForm } from '../hooks/password-reset/usePasswordResetForm';

export const PasswordResetPage = () => {
  // TODO: resetId를 이용해 백엔드에 유효한 resetId인지 검증한 후, 페이지를 보여주어야 함.
  const { resetId } = useParams();
  const { passwordResetForm, submitChangePassword, handleInput } =
    usePasswordResetForm();

  return (
    <Layout>
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
    </Layout>
  );
};
