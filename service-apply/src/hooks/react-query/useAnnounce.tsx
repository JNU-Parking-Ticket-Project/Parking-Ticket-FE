import { useSuspenseQuery } from '@tanstack/react-query';
import { getAnnounceLast } from '../../apis/announce.apis';

export const useAnounceQuery = () => {
  const { data: announceData } = useSuspenseQuery({
    queryKey: ['anounce'],
    queryFn: getAnnounceLast,
  });
  return { announceData };
};
