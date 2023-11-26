import ApplyForm from '../components/apply/Form';
import Title from '../components/apply/Title';
import Footer from '../components/common/Footer';

export const ApplyPage = () => {
  return (
    <main>
      <div className="max-w-[1280px] m-auto px-12">
        <div>
          <Title />
          <ApplyForm />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ApplyPage;
