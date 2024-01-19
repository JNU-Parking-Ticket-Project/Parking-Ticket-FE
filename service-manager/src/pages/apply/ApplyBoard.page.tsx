import { useSearchParams } from 'react-router-dom';
import { PageNav } from '../../components/announcement/PageNav';
import { useSettingEventsQuery } from '../../hooks/react-query/useSetting';
import { ApplyBoardList } from '../../components/apply-list/ApplyBoardList';

export const ApplyBoardPage = () => {
  const [searchParam] = useSearchParams();
  const currentPage = searchParam.get('page') ?? '0';

  const {
    coupon: { couponEvents, lastPage },
  } = useSettingEventsQuery(+currentPage);
  return (
    <>
      <ApplyBoardList couponEvents={couponEvents} />
      <PageNav lastIdx={+lastPage} currentIdx={+currentPage} />
    </>
  );
};
