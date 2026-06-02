import {
  MutateOptions,
  useMutation,
  useSuspenseQuery,
} from '@tanstack/react-query';
import {
  getAllRegistration,
  postEmail,
  postTransmitResult,
} from '../../apis/registration.apis';

export const useAllRegistrationQuery = (eventId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['allRegistration', eventId],
    queryFn: () => getAllRegistration(eventId),
  });
  return { registrations: data };
};

export const useTransmitEmail = (eventId: string) => {
  const { postEmail } = useEmailTransmitMutate();

  const onEmailTransmit = () => {
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

export const useTransmitResult = (eventId: string) => {
  const { postTransmitResult } = useTransmitResultMutate();

  const onTransmitResult = () => {
    postTransmitResult(eventId, {
      onError: () => {
        alert('신청 결과 집계 실패');
      },
      onSuccess: () => {
        alert('신청 결과 집계 완료');
      },
    });
  };
  return {
    onTransmitResult,
  };
};

export const useTransmitResultMutate = () => {
  const { mutate } = useMutation({
    mutationKey: ['transmitResult'],
    mutationFn: postTransmitResult,
  });

  return {
    postTransmitResult: (
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
