import { useSuspenseQuery } from '@tanstack/react-query';
import { getNotice } from '../../apis/notice.apis';

export const useInformationQuery = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['information'],
    queryFn: getNotice,
  });
  return { information: data.noticeContent };
};
