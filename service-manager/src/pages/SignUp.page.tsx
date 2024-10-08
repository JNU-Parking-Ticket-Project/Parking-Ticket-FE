import { Footer } from '../components/common/Footer';
import { MainContainer } from '../components/common/MainContainer';
import { SignUpForm } from '../components/sign-up/SignUpForm';
import { SignUpTitle } from '../components/sign-up/SignUpTitle';

export const SignUpPage = () => {
  return (
    <>
      <MainContainer>
        <SignUpTitle />
        <div className="flex gap-4">
          <div className="flex-1">
            <SignUpForm />
          </div>
        </div>
      </MainContainer>
      <Footer />
    </>
  );
};
