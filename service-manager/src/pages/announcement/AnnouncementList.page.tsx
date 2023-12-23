import { Link, useSearchParams } from 'react-router-dom';
import { AnnouncementList } from '../../components/announcement/AnnouncementList';
import { PageNav } from '../../components/announcement/PageNav';
import { useAnnounceListQuery } from '../../hooks/react-query/useAnnounce';
import { Button } from '@quokka/design-system';

export const AnnouncementListPage = () => {
  const [searchParam] = useSearchParams();
  const currentPage = searchParam.get('page') ?? '0';

  const {
    announceListData: { announces, lastPage },
  } = useAnnounceListQuery(+currentPage);

  return (
    <>
      <AnnouncementList announcementListData={announces} />
      <div className="flex items-center gap-8 justify-between">
        <Link to="/announcement/create" className="float-right">
          <Button size="small" color="secondary">
            공지 작성
          </Button>
        </Link>
        <PageNav lastIdx={+lastPage} currentIdx={+currentPage} />
      </div>
    </>
  );
};
