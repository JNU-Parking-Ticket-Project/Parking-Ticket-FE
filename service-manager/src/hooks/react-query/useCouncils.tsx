import { useSuspenseQuery } from '@tanstack/react-query';
import { getAllCouncils } from '../../apis/user.apis';

export const useCouncils = () => {
  const { data: councils } = useSuspenseQuery({
    queryKey: ['council'],
    queryFn: () => getAllCouncils(),
  });

  return { councils };
};
