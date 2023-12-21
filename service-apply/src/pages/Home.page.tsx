import { Suspense, useEffect } from 'react';
import { Footer } from '../components/common/Footer';
import { MainContainer } from '../components/common/MainContainer';
import { HomeInformation } from '../components/home/HomeInformation';
import { HomeLogin } from '../components/home/HomeLogin';
import { HomeAnnounce } from '../components/home/HomeAnnounce';
import { HomeTitle } from '../components/home/HomeTitle';
import ErrorBoundary from '../components/common/ErrorBoundray';
import { removeToken } from '../functions/jwt';

export const HomePage = () => {
  useEffect(() => {
    removeToken();
  }, []);

  return (
    <>
      <MainContainer>
        <HomeTitle />
        <div className="flex gap-4 max-sm:flex-col">
          <div className="flex-1 sm:w-1/2">
            <ErrorBoundary>
              <Suspense>
                <HomeInformation />
              </Suspense>
            </ErrorBoundary>
            <ErrorBoundary>
              <Suspense>
                <HomeAnnounce />
              </Suspense>
            </ErrorBoundary>
          </div>
          <div className="flex-1 sm:w-1/2">
            <HomeLogin />
          </div>
        </div>
      </MainContainer>
      <Footer />
    </>
  );
};
