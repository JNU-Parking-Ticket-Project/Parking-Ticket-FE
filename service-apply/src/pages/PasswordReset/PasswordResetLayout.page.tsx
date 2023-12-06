import { Footer } from '../../components/common/Footer';
import { MainContainer } from '../../components/common/MainContainer';
import { CommonTitle } from '../../components/common/CommonTitle';
import { Outlet } from 'react-router-dom';

// TODO: header 교체
export const PasswordResetLayout = () => {
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
