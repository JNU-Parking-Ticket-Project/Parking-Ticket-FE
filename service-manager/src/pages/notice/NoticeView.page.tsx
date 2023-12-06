import { NavContainer } from '../../components/common/NavContainer';
import { NavTitle } from '../../components/common/NavTitle';
import { Footer } from '../../components/common/FooterContainer';
import { MainContainer } from '../../components/common/MainContainer';
import { NoticeRead } from '../../components/notice/NoticeRead';

export const NoticeView = () => {
  return (
    <>
      <nav className="flex flex-row">
        <NavTitle />
        <NavContainer />
      </nav>
      <MainContainer>
        <NoticeRead />
      </MainContainer>
      <Footer />
    </>
  );
};
