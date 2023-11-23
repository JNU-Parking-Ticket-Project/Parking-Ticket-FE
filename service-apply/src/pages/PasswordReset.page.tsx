import { useParams } from 'react-router-dom';
import Layout from '../components/password-reset/Layout';
import { Button, Container, InputText } from '@quokka/design-system';
import CenterFormContainer from '../components/password-reset/CenterFormContainer';
import { InputFlexWrapper } from '../components/password-reset/InputFlexWrapper';

const PasswordResetPage = () => {
  const { resetId } = useParams();

  return (
    <Layout>
      <CenterFormContainer title="비밀번호 재설정">
        <InputFlexWrapper>
          <InputText
            type="text"
            className="flex-1"
            label="비밀번호"
            labelClassName="w-28"
          />
        </InputFlexWrapper>
        <InputFlexWrapper>
          <InputText
            type="password"
            className="flex-1"
            label="비밀번호 재설정"
            labelClassName="w-28"
          />
        </InputFlexWrapper>
        <Button size="small">변경하기</Button>
      </CenterFormContainer>
    </Layout>
  );
};

export default PasswordResetPage;
