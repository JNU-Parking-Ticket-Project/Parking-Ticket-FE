import { MainContainer } from '../../components/common/MainContainer';
import { CommonTitle } from '../../components/common/CommonTitle';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { removeToken } from '../../functions/jwt';
import { Footer } from '../../components/common/Footer';

export const PasswordResetLayout = () => {
  useEffect(() => {
    removeToken();
  }, []);
  return (
    <>
      <MainContainer>
        <CommonTitle />
        <div className="flex justify-center items-center min-h-[calc(100dvh-30rem)]">
          <Outlet />
        </div>
      </MainContainer>
      <Footer />
    </>
  );
};
