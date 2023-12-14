import { useSuspenseQuery } from '@tanstack/react-query';
import { getRegistrationPeriod } from '../../apis/registration.apis';

export const usePeriod = () => {
  const {
    data: { startAt, endAt },
  } = useSuspenseQuery({
    queryKey: ['period'],
    queryFn: getRegistrationPeriod,
  });
  return { startAt, endAt };
};