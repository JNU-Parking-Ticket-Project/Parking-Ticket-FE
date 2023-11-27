import { Txt } from '@quokka/design-system';
import Footer from '../components/common/Footer';
import { AnnouncementList } from '../components/announcement/AnnouncementList';
import { Navigate, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { PageNav } from '../components/announcement/PageNav';

const useQueryParameter = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

export const AnnouncementListPage = () => {
  const query = useQueryParameter();
  const pages = query.get('pages');
  if (!pages) {
    return <Navigate replace to="/announcement?pages=1" />;
  }

  return (
    <div className="absolute h-full w-full left-0 top-0">
      <header>
        <h1>
          <Txt size="h3">전남대학교 주차권 신청 시스템</Txt>
        </h1>
      </header>
      <main className="h-full w-full px-24 py-12">
        <Txt size="h4" color="primay">
          공지사항
        </Txt>
        <hr className="mt-3 border-solid bg-black h-1" />
        <AnnouncementList />
        <PageNav lastIdx={10} currentIdx={+pages} />
      </main>
      <Footer />
    </div>
  );
};
