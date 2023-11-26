import { ApplyForm } from '../components/apply/Form';
import { ApplyTitle } from '../components/apply/Title';
import { Footer } from '../components/common/Footer';

export const ApplyPage = () => {
  return (
    <main>
      <div className="max-w-[1280px] m-auto px-12">
        <ApplyTitle />
        <ApplyForm />
      </div>
      <Footer />
    </main>
  );
};
