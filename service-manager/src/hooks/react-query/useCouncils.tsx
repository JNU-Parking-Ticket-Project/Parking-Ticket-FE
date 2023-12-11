import { useSuspenseQuery } from '@tanstack/react-query';
import { getAllCouncils } from '../../apis/user.apis';

export const useCouncils = () => {
  const { data: councils } = useSuspenseQuery({
    queryKey: ['councils'],
    queryFn: getAllCouncils,
  });

  return { councils };
};
