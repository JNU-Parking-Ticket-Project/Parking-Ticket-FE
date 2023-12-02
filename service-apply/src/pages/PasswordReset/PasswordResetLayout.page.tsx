import { Footer } from '../../components/common/FooterContainer';
import { MainContainer } from '../../components/common/MainContainer';
import { CommonTitle } from '../../components/common/CommonTitle';
import { Outlet } from 'react-router-dom';

// TODO: header 교체
export const PasswordResetLayout = () => {
  return (
    <>
      <MainContainer>
        <CommonTitle />
        <div className="flex items-center justify-center h-full">
          <Outlet />
        </div>
      </MainContainer>
      <Footer />
    </>
  );
};
