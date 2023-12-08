import { useSuspenseQuery } from '@tanstack/react-query';
import { getAllAnnounce, getAnnounceById } from '../../apis/announce.apis';

export const useAnounceListQuery = (page: number) => {
  const { data: announceListData } = useSuspenseQuery({
    queryKey: ['anounceList', page],
    queryFn: () => getAllAnnounce(page),
  });
  return { announceListData };
};

export const useAnounceDetailQuery = (announceId: number) => {
  const { data: announceDetailData } = useSuspenseQuery({
    queryKey: ['anounceDetail', announceId],
    queryFn: () => getAnnounceById(announceId),
  });
  return { announceDetailData };
};
