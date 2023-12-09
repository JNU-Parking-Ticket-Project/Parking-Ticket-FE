import { AnnouncementList } from '../../components/announcement/AnnouncementList';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { PageNav } from '../../components/announcement/PageNav';
import { useAnnounceListQuery } from '../../hooks/react-query/useAnnounce';

const useQueryParameter = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

export const AnnouncementListPage = () => {
  const query = useQueryParameter();
  const currentPage = query.get('pages') ?? '1';
  const {
    announceListData: { announces, lastPage },
  } = useAnnounceListQuery(+currentPage);

  return (
    <>
      <AnnouncementList data={announces} />
      <PageNav lastIdx={+lastPage} currentIdx={+currentPage} />
    </>
  );
};
