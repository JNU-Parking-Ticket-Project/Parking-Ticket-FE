import { useSearchParams } from 'react-router-dom';
import { AnnouncementList } from '../../components/announcement/AnnouncementList';
import { PageNav } from '../../components/announcement/PageNav';
import { useAnounceListQuery } from '../../hooks/react-query/useAnnounce';

export const AnnouncementListPage = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const currentPage = searchParam.get('page') ?? '1';

  const {
    announceListData: { announces, lastPage },
  } = useAnounceListQuery(+currentPage);

  return (
    <>
      <AnnouncementList data={announces} />
      <PageNav lastIdx={+lastPage} currentIdx={+currentPage} />
    </>
  );
};
