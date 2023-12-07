import { NavContainer } from '../../components/common/NavContainer';
import { NavTitle } from '../../components/common/NavTitle';
import { Footer } from '../../components/common/FooterContainer';
import { MainContainer } from '../../components/common/MainContainer';

export const NoticeView = () => {
  return (
    <>
      <nav className="flex flex-row">
        <NavTitle />
        <NavContainer />
      </nav>
      <MainContainer></MainContainer>
      <Footer />
    </>
  );
};
