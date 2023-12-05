import { Footer } from '../components/common/FooterContainer';
import { MainContainer } from '../components/common/MainContainer';
import { MainTitle } from '../components/home/MainTitle';
import { ManagerLogin } from '../components/home/ManagerLogin';

export const MainPage = () => {
  return (
    <>
      <MainContainer>
        <MainTitle />
        <div className="flex gap-4">
          <div className="flex-1">
            <ManagerLogin />
          </div>
        </div>
      </MainContainer>
      <div className="mt-14">
        <Footer />
      </div>
    </>
  );
};
