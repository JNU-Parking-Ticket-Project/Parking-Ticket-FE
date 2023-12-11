import { Link, useSearchParams } from 'react-router-dom';
import { AnnouncementList } from '../../components/announcement/AnnouncementList';
import { PageNav } from '../../components/announcement/PageNav';
import { useAnnounceListQuery } from '../../hooks/react-query/useAnnounce';
import { Button } from '@quokka/design-system';

export const AnnouncementListPage = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const currentPage = searchParam.get('page') ?? '1';

  const {
    announceListData: { announces, lastPage },
  } = useAnnounceListQuery(+currentPage);

  return (
    <>
      <AnnouncementList data={announces} />
      <PageNav lastIdx={+lastPage} currentIdx={+currentPage} />
      <Link to="/announcement-create">
        <Button className="">공지 작성</Button>
      </Link>
    </>
  );
};
