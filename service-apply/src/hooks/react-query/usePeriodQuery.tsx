import { useSuspenseQuery } from '@tanstack/react-query';
import { getRegistrationPeriod } from '../../apis/registration.apis';

export const usePeriodQuery = () => {
  const {
    data: { startAt, endAt },
  } = useSuspenseQuery({
    queryKey: ['period'],
    queryFn: getRegistrationPeriod,
  });
  return { startAt, endAt };
};
