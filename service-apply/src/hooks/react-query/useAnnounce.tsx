import { useSuspenseQuery } from '@tanstack/react-query';
import {
  getAnnounceLast,
  getAllAnnounce,
  getAnnounceById,
} from '../../apis/announce.apis';

export const useAnnounceQuery = () => {
  const { data: announceData } = useSuspenseQuery({
    queryKey: ['anounce'],
    queryFn: getAnnounceLast,
  });
  return { announceData };
};

export const useAnnounceListQuery = (page: number) => {
  const { data: announceListData } = useSuspenseQuery({
    queryKey: ['anounceList', page],
    queryFn: () => getAllAnnounce(page - 1),
  });
  return { announceListData };
};

export const useAnnounceDetailQuery = (announceId: number) => {
  const { data: announceDetailData } = useSuspenseQuery({
    queryKey: ['anounceDetail', announceId],
    queryFn: () => getAnnounceById(announceId),
  });
  return { announceDetailData };
};
