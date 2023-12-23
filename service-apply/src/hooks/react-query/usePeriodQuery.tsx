import { useSuspenseQuery } from '@tanstack/react-query';
import { getRegistrationPeriod } from '../../apis/registration.apis';
import { Q_KEY_PERIOD } from '../../constants/tqkey';

export const usePeriodQuery = () => {
  const {
    data: { startAt, endAt },
  } = useSuspenseQuery({
    queryKey: [Q_KEY_PERIOD],
    queryFn: getRegistrationPeriod,
  });
  return { startAt, endAt };
};
