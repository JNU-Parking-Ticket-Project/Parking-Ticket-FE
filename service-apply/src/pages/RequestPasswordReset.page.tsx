import EmailForm from '../components/password-reset/EmailForm';
import Layout from '../components/password-reset/Layout';

const RequestPasswordResetPage = () => {
  // TODO: Header, Footer 변경해야 함
  return (
    <Layout>
      <header>
        <h1 className="text-4xl">전남대학교 주차권 신청 시스템</h1>
      </header>
      <main className="flex items-center justify-center h-full">
        <EmailForm />
      </main>
      <footer className="w-full border-t flex flex-row-reverse py-4">
        <div className="pr-8">
          <h3 className="font-bold text-xl pb-4">Contact Us</h3>
          <p className="color-[#2B2B39] font-light text-sm pb-2">
            전남대학교 총학생회 : 062-530-xxxx
          </p>
          <p className="color-[#2B2B39] font-light text-sm pb-2">
            JNU-student council
          </p>
        </div>
      </footer>
    </Layout>
  );
};

export default RequestPasswordResetPage;
