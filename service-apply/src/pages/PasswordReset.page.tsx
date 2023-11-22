import { useParams } from 'react-router-dom';
import Layout from '../components/password-reset/Layout';
import { Button, Container, InputText } from '@quokka/design-system';
import CenterFormContainer from '../components/password-reset/CenterFormContainer';

const PasswordResetPage = () => {
  const { resetId } = useParams();

  return (
    <Layout>
      <CenterFormContainer title="비밀번호 재설정">
        <div className="flex justify-between items-center gap-13 w-96 gap-2">
          <InputText
            type="text"
            className="flex-1"
            label="비밀번호"
            labelClassName="w-28"
          />
        </div>
        <div className="flex justify-between items-center gap-13 w-96 gap-2">
          <InputText
            type="password"
            className="flex-1"
            label="비밀번호 재설정"
            labelClassName="w-28"
          />
        </div>
        <Button>변경하기</Button>
      </CenterFormContainer>
    </Layout>
  );
};

export default PasswordResetPage;
