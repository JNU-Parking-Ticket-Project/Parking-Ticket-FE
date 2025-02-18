import {
  MutateOptions,
  useMutation,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { getAllRegistration, postEmail } from '../../apis/registration.apis';

export const useAllRegistrationQuery = (eventId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['allRegistration', eventId],
    queryFn: () => getAllRegistration(eventId),
  });
  return { registrations: data };
};

export const useTransmitEmail = () => {
  const { postEmail } = useEmailTransmitMutate();

  const onEmailTransmit = (eventId: string) => {
    postEmail(eventId, {
      onError: (error) => {
        alert(error.message);
      },
      onSuccess: (data) => {
        alert(data.message);
      },
    });
  };
  return {
    onEmailTransmit,
  };
};

export const useEmailTransmitMutate = () => {
  const { mutate } = useMutation({
    mutationKey: ['email'],
    mutationFn: postEmail,
  });

  return {
    postEmail: (
      eventId: string,
      mutateOption?: Omit<
        MutateOptions<{ message: string }, Error, unknown>,
        'onSettled'
      >,
    ) => {
      mutate(eventId, {
        ...mutateOption,
      });
    },
  };
};
