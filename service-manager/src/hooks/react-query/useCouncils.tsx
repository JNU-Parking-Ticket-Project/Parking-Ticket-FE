import { useSuspenseQuery } from '@tanstack/react-query';
import { getAllCouncils } from '../../apis/user.apis';
import { Q_KEY_COUNCILS } from '../../constants/tqkey';

export const useCouncils = () => {
  const { data: councils } = useSuspenseQuery({
    queryKey: [Q_KEY_COUNCILS],
    queryFn: getAllCouncils,
  });

  return { councils };
};
