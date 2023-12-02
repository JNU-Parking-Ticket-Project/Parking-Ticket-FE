import { Txt } from '@quokka/design-system';
import { Outlet } from 'react-router-dom';
import { CommonTitle } from '../../components/common/CommonTitle';
import { MainContainer } from '../../components/common/MainContainer';
import { Footer } from '../../components/common/Footer';

export const AnnouncementLayoutPage = () => {
  return (
    <>
      <MainContainer>
        <CommonTitle />
        <h2 className="border-b-4 border-black mt-3 pb-2">
          <Txt size="h3" color="primary">
            공지사항
          </Txt>
        </h2>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  );
};
