import {
  MutateOptions,
  useMutation,
  useSuspenseQuery,
} from '@tanstack/react-query';
import {
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
import {
  M_KEY_APPLY,
  M_KEY_TEMPORARY_SAVE,
  Q_KEY_APPLY,
  Q_KEY_CAPTCHA,
} from '../../constants/tqkey';

export const useApplyMutate = () => {
  const { mutate } = useMutation({
    mutationKey: [M_KEY_APPLY],
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
    mutationKey: [M_KEY_TEMPORARY_SAVE],
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

export const useApplyQuery = () => {
  const { data } = useSuspenseQuery({
    queryKey: [Q_KEY_APPLY],
    queryFn: getRegistration,
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
    queryKey: [Q_KEY_CAPTCHA],
    queryFn: getCaptcha,
  });

  return {
    captchaCode: data.captchaCode,
    captchaImageUrl: data.captchaImageUrl,
  };
};
