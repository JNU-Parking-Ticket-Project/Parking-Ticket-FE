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
} from '../../apis/dtos/user.dtos';
import { setToken } from '../../functions/jwt';
import {
  M_KEY_LOGIN,
  M_KEY_PWD_FIND,
  M_KEY_PWD_RESET,
} from '../../constants/tqkey';

export const useLoginMutate = () => {
  const { mutate } = useMutation({
    mutationKey: [M_KEY_LOGIN],
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
          const error = setToken(data);
          if (error) throw error.error;
        },
      });
    },
  };
};

export const usePasswordResetMutate = () => {
  const { mutate } = useMutation({
    mutationKey: [M_KEY_PWD_RESET],
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
    mutationKey: [M_KEY_PWD_FIND],
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
