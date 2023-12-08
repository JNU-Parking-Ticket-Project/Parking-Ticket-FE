import { Outlet } from 'react-router-dom';
import { Footer } from '../components/common/FooterContainer';
import { MainContainer } from '../components/common/MainContainer';
import { NavContainer } from '../components/common/NavContainer';
import { NavTitle } from '../components/common/NavTitle';

export const CommonLayout = () => {
  return (
    <>
      <MainContainer>
        <nav className="flex flex-row">
          <NavTitle />
          <NavContainer />
        </nav>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  );
};
