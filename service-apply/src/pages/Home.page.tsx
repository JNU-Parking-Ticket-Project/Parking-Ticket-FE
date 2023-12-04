import { Footer } from '../components/common/Footer';
import { MainContainer } from '../components/common/MainContainer';
import { HomeInforamtion } from '../components/home/HomeInformation';
import { HomeLogin } from '../components/home/HomeLogin';
import { HomeNotice } from '../components/home/HomeNotice';
import { HomeTitle } from '../components/home/HomeTitle';

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
