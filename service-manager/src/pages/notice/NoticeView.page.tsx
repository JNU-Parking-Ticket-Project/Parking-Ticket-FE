import { NavContainer } from '../../components/common/NavContainer';
import { NavTitle } from '../../components/common/NavTitle';
import { Footer } from '../../components/common/FooterContainer';
import { MainContainer } from '../../components/common/MainContainer';
import { NoticeView } from '../../components/notice/NoticeView';

export const NoticeViewPage = () => {
  return (
    <>
      <nav className="flex flex-row">
        <NavTitle />
        <NavContainer />
      </nav>
      <MainContainer>
        <NoticeView content="" />
      </MainContainer>
      <Footer />
    </>
  );
};
