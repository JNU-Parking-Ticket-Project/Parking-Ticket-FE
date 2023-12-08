import { useSuspenseQuery } from '@tanstack/react-query';
import { getAllRegistration } from '../../apis/registration.apis';

export const useAllRegistrationQuery = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['allRegistration'],
    queryFn: () => getAllRegistration(),
  });
  return { registrations: data.sort((a, b) => a.id - b.id) };
};
