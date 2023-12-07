import { NavContainer } from '../../components/common/NavContainer';
import { NavTitle } from '../../components/common/NavTitle';
import { Footer } from '../../components/common/FooterContainer';
import { MainContainer } from '../../components/common/MainContainer';
import { Txt } from '@quokka/design-system';
import { NoticeForm } from '../../components/notice/NoticeForm';

export const NoticeCreatePage = () => {
  return (
    <>
      <nav className="flex flex-row">
        <NavTitle />
        <NavContainer />
      </nav>
      <MainContainer>
        <div className="flex flex-col my-48 ml-20">
          <Txt size="h3">안내사항 작성</Txt>
          <NoticeForm content="" />
        </div>
      </MainContainer>
      <Footer />
    </>
  );
};
