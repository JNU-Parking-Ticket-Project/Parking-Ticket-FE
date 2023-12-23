import { useSuspenseQuery } from '@tanstack/react-query';
import { getNotice } from '../../apis/notice.apis';
import { Q_KEY_INFOMATION } from '../../constants/tqkey';

export const useInformationQuery = () => {
  const { data } = useSuspenseQuery({
    queryKey: [Q_KEY_INFOMATION],
    queryFn: getNotice,
  });
  return { information: data.noticeContent };
};
