import { useParams } from 'react-router-dom';
import { Layout } from '../components/password-reset/Layout';
import { Button, InputText } from '@quokka/design-system';
import { InputFlexWrapper } from '../components/password-reset/InputFlexWrapper';
import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useState,
} from 'react';
import { CenterFormContainer } from '../components/password-reset/CenterFormContainer';

interface PasswordResetForm {
  password: string;
  confirmPassword: string;
}

export const PasswordResetPage = () => {
  // TODO: resetId를
  const { resetId } = useParams();

  const [passwordResetForm, setPasswordResetForm] = useState<PasswordResetForm>(
    {
      password: '',
      confirmPassword: '',
    },
  );

  const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPasswordResetForm({
      ...passwordResetForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitChangePassword: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (passwordResetForm.password !== passwordResetForm.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    alert('비밀번호 재설정이 완료 되었습니다.');
    // TODO: navigate homepage
  };

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
