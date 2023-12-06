import {
  PasswordFindRequest,
  PasswordResetRequest,
  UserLoginRequest,
  postLogin,
  postPasswordFind,
  postPasswordReset,
} from '../../apis/user.apis';
import { MutateOptions, useMutation } from '@tanstack/react-query';
import {
  PasswordFind,
  PasswordReset,
  UserToken,
} from 'service-apply/src/apis/dtos/user.dtos';

export const useLoginMutate = () => {
  const { mutate } = useMutation({
    mutationKey: ['login'],
    mutationFn: postLogin,
  });

  return {
    postLogin: (
      loginRequest: UserLoginRequest,
      mutateOption?: Omit<
        MutateOptions<UserToken, Error, UserLoginRequest, unknown>,
        'onSettled'
      >,
    ) => {
      mutate(loginRequest, {
        ...mutateOption,
        onSettled: (data) => {
          if (!data) throw new Error('data is undefined');
        },
      });
    },
  };
};

export const usePasswordResetMutate = () => {
  const { mutate } = useMutation({
    mutationKey: ['password-reset'],
    mutationFn: postPasswordReset,
  });

  return {
    postPasswordReset: (
      passwordReset: PasswordResetRequest,
      mutateOption?: Omit<
        MutateOptions<PasswordReset, Error, PasswordResetRequest, unknown>,
        'onSettled'
      >,
    ) => {
      mutate(passwordReset, {
        ...mutateOption,
        onSettled: (data) => {
          if (!data) throw new Error('data is undefined');
        },
      });
    },
  };
};

export const usePasswordFindMutate = () => {
  const { mutate } = useMutation({
    mutationKey: ['password-reset-request'],
    mutationFn: postPasswordFind,
  });

  return {
    postPasswordResetRequest: (
      passwordFind: PasswordFindRequest,
      mutateOption?: Omit<
        MutateOptions<PasswordFind, Error, PasswordFindRequest, unknown>,
        'onSettled'
      >,
    ) => {
      mutate(passwordFind, {
        ...mutateOption,
        onSettled: (data) => {
          if (!data) throw new Error('data is undefined');
        },
      });
    },
  };
};
