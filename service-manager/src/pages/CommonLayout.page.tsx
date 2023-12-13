import { Outlet } from 'react-router-dom';
import { Footer } from '../components/common/FooterContainer';
import { MainContainer } from '../components/common/MainContainer';
import { NavContainer } from '../components/common/NavContainer';
import { NavTitle } from '../components/common/NavTitle';
import ErrorBoundary from '../components/common/ErrorBoundary';
import { Suspense } from 'react';

export const CommonLayout = () => {
  return (
    <>
      <MainContainer>
        <nav className="flex flex-row min-w-[60rem]">
          <NavTitle />
          <NavContainer />
        </nav>
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
