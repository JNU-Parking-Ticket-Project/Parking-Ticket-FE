import { Txt } from '@quokka/design-system';
import { Outlet } from 'react-router-dom';
import { CommonTitle } from '../../components/common/CommonTitle';
import { MainContainer } from '../../components/common/MainContainer';
import { Footer } from '../../components/common/Footer';
import ErrorBoundary from '../../components/common/ErrorBoundary';
import { Suspense, useEffect } from 'react';
import { removeToken } from '../../functions/jwt';

export const AnnouncementLayoutPage = () => {
  useEffect(() => {
    removeToken();
  }, []);

  return (
    <>
      <MainContainer>
        <CommonTitle />
        <h2 className="border-b-4 border-black mt-3 pb-2">
          <Txt size="h3" color="primary" className="max-sm:text-2xl">
            공지사항
          </Txt>
        </h2>
        <ErrorBoundary>
          <Suspense>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </MainContainer>
      <Footer />
    </>
  );
};
