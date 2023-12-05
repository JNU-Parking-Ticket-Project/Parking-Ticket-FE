import { NavContainer } from '../../components/common/NavContainer';
import { NavTitle } from '../../components/common/NavTitle';
import { Footer } from '../../components/common/FooterContainer';
import { MainContainer } from '../../components/common/MainContainer';
import { Txt } from '@quokka/design-system';
import { NoticeForm } from '../../components/notice/NoticeForm';

export const NoticeCreate = () => {
  return (
    <>
      <nav className="flex flex-row">
        <NavTitle />
        <NavContainer />
      </nav>
      <MainContainer>
        <div className="flex flex-col">
          <Txt size="h3">안내사항 작성</Txt>
          <NoticeForm />
        </div>
      </MainContainer>
      <Footer />
    </>
  );
};
