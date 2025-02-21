import { useSuspenseQuery } from '@tanstack/react-query';
import { getAllRegistration } from '../../apis/registration.apis';

export const useAllRegistrationQuery = (eventId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['allRegistration', eventId],
    queryFn: () => getAllRegistration(eventId),
  });
  return { registrations: data };
};
