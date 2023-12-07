import { MutateOptions, useMutation } from '@tanstack/react-query';
import { UserSignUpResponse, UserToken } from '../../apis/dtos/user.dtos';
import {
  UserLoginRequest,
  UserSignUpRequest,
  postLogin,
  postSignup,
} from '../../apis/user.apis';
import { setToken } from '../../functions/jwt';

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
          const error = setToken(data);
          if (error) throw error.error;
        },
      });
    },
  };
};

export const useSignUpMutate = () => {
  const { mutate } = useMutation({
    mutationKey: ['signUp'],
    mutationFn: postSignup,
  });

  return {
    postSignup: (
      signUpRequest: UserSignUpRequest,
      mutateOption?: Omit<
        MutateOptions<UserSignUpResponse, Error, UserSignUpRequest, unknown>,
        'onSettled'
      >,
    ) => {
      mutate(signUpRequest, {
        ...mutateOption,
        onSettled: (data) => {
          if (!data) throw new Error('data is undefined');
        },
      });
    },
  };
};
