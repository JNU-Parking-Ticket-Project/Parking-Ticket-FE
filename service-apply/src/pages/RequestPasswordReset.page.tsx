import EmailForm from '../components/password-reset/EmailForm';
import Layout from '../components/password-reset/Layout';

const RequestPasswordResetPage = () => {
  // TODO: Header, Footer 변경해야 함
  return (
    <Layout>
      <EmailForm />
    </Layout>
  );
};

export default RequestPasswordResetPage;
