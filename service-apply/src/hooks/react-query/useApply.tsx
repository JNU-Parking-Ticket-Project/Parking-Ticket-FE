import {
  MutateOptions,
  useMutation,
  useSuspenseQuery,
} from '@tanstack/react-query';
import {
  RegistrationEventIdResponse,
  RegistrationRequest,
  RegistrationResponse,
  TemporarySaveRequest,
} from '../../apis/dtos/registration.dtos';
import {
  getCaptcha,
  getRegistration,
  postRegistration,
  postTemporarySave,
} from '../../apis/registration.apis';

export const useApplyMutate = () => {
  const debouncedPostRegistration = debounce(
    (requset: RegistrationRequest) => postRegistration(requset),
    300,
  );
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

export const useTemporarySaveMutate = () => {
  const { mutate } = useMutation({
    mutationKey: ['applyTemporarySave'],
    mutationFn: postTemporarySave,
  });

  return {
    postTemporarySave: (
      temporarySaveRequest: TemporarySaveRequest,
      mutateOption?: Omit<
        MutateOptions<
          RegistrationResponse,
          Error,
          TemporarySaveRequest,
          unknown
        >,
        'onSettled'
      >,
    ) => {
      mutate(temporarySaveRequest, {
        ...mutateOption,
        onSettled: (data) => {
          if (!data) throw new Error('data is undefined');
        },
      });
    },
  };
};

export const useApplyQuery = ({ eventId }: RegistrationEventIdResponse) => {
  const { data } = useSuspenseQuery({
    queryKey: ['apply'],
    queryFn: () => getRegistration({ eventId }),
    gcTime: Infinity,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return {
    registrationData: data,
  };
};

export const useCaptchaQuery = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['captcha'],
    queryFn: getCaptcha,
  });

  return {
    captchaCode: data.captchaCode,
    captchaImageUrl: data.captchaImageUrl,
  };
};
