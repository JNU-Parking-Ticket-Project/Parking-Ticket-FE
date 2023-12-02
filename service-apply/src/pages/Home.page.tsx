import { Footer } from '../components/common/Footer';
import { MainContainer } from '../components/common/MainContainer';
import { HomeInforamtion } from '../components/home/Information';
import { HomeLogin } from '../components/home/Login';
import { HomeNotice } from '../components/home/Notice';
import { HomeTitle } from '../components/home/Title';

export const HomePage = () => {
  return (
    <>
      <MainContainer>
        <HomeTitle />
        <div className="flex gap-4">
          <div className="flex-1">
            <HomeInforamtion />
            <HomeNotice />
          </div>
          <div className="flex-1">
            <HomeLogin />
          </div>
        </div>
      </MainContainer>
      <Footer />
    </>
  );
};
