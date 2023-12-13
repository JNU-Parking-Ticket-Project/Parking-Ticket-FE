import { Link, useSearchParams } from 'react-router-dom';
import { AnnouncementList } from '../../components/announcement/AnnouncementList';
import { PageNav } from '../../components/announcement/PageNav';
import { useAnnounceListQuery } from '../../hooks/react-query/useAnnounce';
import { Button, Txt } from '@quokka/design-system';

export const AnnouncementListPage = () => {
  const [searchParam] = useSearchParams();
  const currentPage = searchParam.get('page') ?? '0';

  const {
    announceListData: { announces, lastPage },
  } = useAnnounceListQuery(+currentPage);

  return (
    <div className="max-w-[1080px] mx-auto mt-12">
      <Txt size="h3">공지사항 목록</Txt>
      <Link to="/announcement/create" className="float-right mr-36">
        <Button>공지 작성</Button>
      </Link>
      <AnnouncementList announcementListData={announces} />
      <PageNav lastIdx={+lastPage} currentIdx={+currentPage} />
    </div>
  );
};
