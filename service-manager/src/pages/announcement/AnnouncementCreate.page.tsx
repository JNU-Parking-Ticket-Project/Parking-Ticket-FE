import { NavTitle } from '../../components/common/NavTitle';
import { NavContainer } from '../../components/common/NavContainer';
import { MainContainer } from '../../components/common/MainContainer';
import { Footer } from '../../components/common/FooterContainer';
import { AnnouncementCreate } from '../../components/announcement/AnnouncementCreate';

export const AnnouncementCreatePage = () => {
  return (
    <>
      <nav className="flex flex-row">
        <NavTitle />
        <NavContainer />
      </nav>
      <MainContainer>
        <AnnouncementCreate />
      </MainContainer>
      <Footer />
    </>
  );
};
