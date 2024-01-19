import { Button } from '@quokka/design-system';
import { Link, useSearchParams } from 'react-router-dom';
import { SettingList } from '../../components/setting/SettingList';
import { PageNav } from '../../components/announcement/PageNav';
import { useSectionBoard } from '../../hooks/useSetting/useSectionBoard';

export const SettingBoardPage = () => {
  const [searchParam] = useSearchParams();
  const currentPage = searchParam.get('page') ?? '0';

  const {
    coupon: { couponEvents, lastPage },
    canCreate,
  } = useSectionBoard(+currentPage);
  return (
    <div>
      {canCreate ? (
        <Link to={'/setting/create'}>
          <Button size="small" className="float-right">
            생성하기
          </Button>
        </Link>
      ) : (
        <Button size="small" className="float-right" disabled>
          생성하기
        </Button>
      )}
      <SettingList couponEvents={couponEvents} />
      <PageNav lastIdx={+lastPage} currentIdx={+currentPage} />
    </div>
  );
};
