import { AnnouncementList } from '../../components/announcement/AnnouncementList';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { PageNav } from '../../components/announcement/PageNav';

const useQueryParameter = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

export const AnnouncementListPage = () => {
  const query = useQueryParameter();
  const currentPage = query.get('pages') ?? '1';

  return (
    <>
      <AnnouncementList page={+currentPage} />
      <PageNav lastIdx={8} currentIdx={+currentPage} />
    </>
  );
};
