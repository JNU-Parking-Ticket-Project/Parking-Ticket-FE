import {
  MutateOptions,
  useMutation,
  useSuspenseQuery,
} from '@tanstack/react-query';
import {
  RegistrationRequest,
  RegistrationResponse,
} from '../../apis/dtos/registration.dtos';
import {
  getRegistration,
  postRegistration,
} from '../../apis/registration.apis';

export const useApplyMutate = () => {
  const { mutate } = useMutation({
    mutationKey: ['apply'],
    mutationFn: postRegistration,
  });

  return {
    postRegistration: (
      registrationRequest: RegistrationRequest,
      mutateOption?: Omit<
        MutateOptions<
          RegistrationResponse,
          Error,
          RegistrationRequest,
          unknown
        >,
        'onSettled'
      >,
    ) => {
      mutate(registrationRequest, {
        ...mutateOption,
        onSettled: (data) => {
          if (!data) throw new Error('data is undefined');
        },
      });
    },
  };
};

export const useApplyQuery = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['apply'],
    queryFn: getRegistration,
    gcTime: Infinity,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return {
    registrationData: data,
  };
};
