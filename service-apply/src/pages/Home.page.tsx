import { Suspense } from 'react';
import { Footer } from '../components/common/Footer';
import { MainContainer } from '../components/common/MainContainer';
import { HomeInforamtion } from '../components/home/HomeInformation';
import { HomeLogin } from '../components/home/HomeLogin';
import { HomeAnnounce } from '../components/home/HomeAnnounce';
import { HomeTitle } from '../components/home/HomeTitle';
import ErrorBoundary from '../components/common/ErrorBoundray';

export const HomePage = () => {
  return (
    <>
      <MainContainer>
        <HomeTitle />
        <div className="flex gap-4">
          <div className="flex-1 w-1/2">
            <ErrorBoundary>
              <Suspense>
                <HomeInforamtion />
              </Suspense>
              <Suspense>
                <HomeAnnounce />
              </Suspense>
            </ErrorBoundary>
          </div>
          <div className="flex-1 w-1/2">
            <HomeLogin />
          </div>
        </div>
      </MainContainer>
      <Footer />
    </>
  );
};
