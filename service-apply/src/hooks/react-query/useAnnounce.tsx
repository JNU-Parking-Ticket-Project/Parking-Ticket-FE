import { useSuspenseQuery } from '@tanstack/react-query';
import {
  getAnnounceLast,
  getAllAnnounce,
  getAnnounceById,
} from '../../apis/announce.apis';
import {
  Q_KEY_ANNOUNCE,
  Q_KEY_ANNOUNCE_DETAIL,
  Q_KEY_ANNOUNCE_LIST,
} from '../../constants/tqkey';

export const useAnnounceQuery = () => {
  const { data: announceData } = useSuspenseQuery({
    queryKey: [Q_KEY_ANNOUNCE],
    queryFn: getAnnounceLast,
  });
  return { announceData };
};

export const useAnnounceListQuery = (page: number) => {
  const { data: announceListData } = useSuspenseQuery({
    queryKey: [Q_KEY_ANNOUNCE_LIST, page],
    queryFn: () => getAllAnnounce(page - 1),
  });
  return { announceListData };
};

export const useAnnounceDetailQuery = (announceId: number) => {
  const { data: announceDetailData } = useSuspenseQuery({
    queryKey: [Q_KEY_ANNOUNCE_DETAIL, announceId],
    queryFn: () => getAnnounceById(announceId),
  });
  return { announceDetailData };
};
