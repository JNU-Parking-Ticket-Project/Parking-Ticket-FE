import { Container, Txt } from '@quokka/design-system';
import { useParams } from 'react-router-dom';
import Footer from '../components/common/Footer';

export const AnnouncementPage = () => {
  const { announcementId } = useParams();

  return (
    <div className="absolute h-screen w-full left-0 top-0">
      <header>
        <h1>
          <Txt size="h3">전남대학교 주차권 신청 시스템</Txt>
        </h1>
      </header>
      <main className="h-full px-24 py-12">
        <Txt size="h4" color="primay">
          공지사항
        </Txt>
        <hr className="mt-3 border-solid bg-black h-1" />
        <Container
          className="w-full mt-12 h-[75%] overflow-scroll"
          size="large"
        >
          {/* content here. */}
        </Container>
      </main>
      <Footer />
    </div>
  );
};
