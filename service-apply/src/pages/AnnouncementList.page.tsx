import { Txt } from '@quokka/design-system';
import Footer from '../components/common/Footer';
import { AnnouncementList } from '../components/announcement/AnnouncementList';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { PageNav } from '../components/announcement/PageNav';
import { CommonTitle } from '../components/common/CommonTitle';
import { MainContainer } from '../components/common/MainConatiner';

const useQueryParameter = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

export const AnnouncementListPage = () => {
  const query = useQueryParameter();
  const pages = query.get('pages') ?? 1;

  return (
    <>
      <MainContainer>
        <CommonTitle />
        <h2 className="border-b-4 border-black mt-3 pb-2">
          <Txt size="h3" color="primay">
            공지사항
          </Txt>
        </h2>
        <AnnouncementList />
        <PageNav lastIdx={10} currentIdx={+pages} />
      </MainContainer>
      <Footer />
    </>
  );
};
