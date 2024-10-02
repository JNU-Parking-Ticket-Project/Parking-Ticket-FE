import { useSuspenseQuery } from '@tanstack/react-query';
import { getRegistrationPeriod } from '../../apis/registration.apis';

interface PeriodQueryParams {
  retryNumber?: number;
}

export const usePeriodQuery = ({ retryNumber = 3 }: PeriodQueryParams = {}) => {
  const {
    data: { startAt, endAt, eventId },
  } = useSuspenseQuery({
    queryKey: ['period'],
    queryFn: getRegistrationPeriod,
    retry: retryNumber,
  });
  return { startAt, endAt, eventId };
};
