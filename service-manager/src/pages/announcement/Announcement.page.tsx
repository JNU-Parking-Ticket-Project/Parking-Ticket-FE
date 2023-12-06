import { AnnouncementList } from '../../components/announcement/AnnouncementList';
import { NavTitle } from '../../components/common/NavTitle';
import { NavContainer } from '../../components/common/NavContainer';
import { MainContainer } from '../../components/common/MainContainer';
import { Footer } from '../../components/common/FooterContainer';

export const AnnouncementPage = () => {
  return (
    <>
      <nav className="flex flex-row">
        <NavTitle />
        <NavContainer />
      </nav>
      <MainContainer>
        <AnnouncementList page={1} />
      </MainContainer>
      <Footer />
    </>
  );
};
