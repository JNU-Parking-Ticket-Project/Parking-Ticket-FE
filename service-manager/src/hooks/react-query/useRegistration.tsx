import { useSuspenseQuery } from '@tanstack/react-query';
import { getAllRegistration } from '../../apis/registration.apis';
import { Q_KEY_ALL_REGISTRATION } from '../../constants/tqkey';

export const useAllRegistrationQuery = () => {
  const { data } = useSuspenseQuery({
    queryKey: [Q_KEY_ALL_REGISTRATION],
    queryFn: getAllRegistration,
  });
  return { registrations: data.sort((a, b) => a.id - b.id) };
};
