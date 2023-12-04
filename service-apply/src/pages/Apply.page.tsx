import { ApplyForm } from '../components/apply/ApplyForm';
import { ApplyTitle } from '../components/apply/ApplyTitle';
import { CommonTitle } from '../components/common/CommonTitle';
import { Footer } from '../components/common/Footer';
import { MainContainer } from '../components/common/MainContainer';

export const ApplyPage = () => {
  return (
    <>
      <MainContainer>
        <CommonTitle />
        <ApplyTitle />
        <ApplyForm />
      </MainContainer>
      <Footer />
    </>
  );
};
