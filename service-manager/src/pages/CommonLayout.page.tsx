import { Outlet } from 'react-router-dom';
import { Footer } from '../components/common/Footer';
import { MainContainer } from '../components/common/MainContainer';
import { NavContainer } from '../components/common/NavContainer';
import { NavTitle } from '../components/common/NavTitle';
import { LogoutButton } from '../components/common/LogoutButton';
import ErrorBoundary from '../components/common/ErrorBoundary';
import { Suspense } from 'react';

export const CommonLayout = () => {
  return (
    <>
      <MainContainer>
        <nav className="flex flex-row min-w-[60rem]">
          <NavTitle />
          <NavContainer />
          <div className='flex items-center ml-auto'>
            <LogoutButton />
          </div>
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
