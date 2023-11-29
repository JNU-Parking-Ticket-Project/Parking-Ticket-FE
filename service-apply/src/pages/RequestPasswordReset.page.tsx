import { EmailForm } from '../components/password-reset/EmailForm';
import { Layout } from '../components/password-reset/Layout';

export const RequestPasswordResetPage = () => {
  // TODO: Header, Footer 변경해야 함
  return (
    <Layout>
      <EmailForm />
    </Layout>
  );
};
