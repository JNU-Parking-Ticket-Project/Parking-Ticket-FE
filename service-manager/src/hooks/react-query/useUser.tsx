import {
  MutateOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import {
  CheckEmailResponse,
  PasswordFind,
  PasswordReset,
  UserSignUpResponse,
  UserToken,
} from '../../apis/dtos/user.dtos';
import {
  PasswordFindRequest,
  PasswordResetRequest,
  UserLoginRequest,
  UserSignUpRequest,
  postCheckEmail,
  postLogin,
  postPasswordFind,
  postPasswordReset,
  postSignup,
  putAdminRole,
} from '../../apis/user.apis';
import { setToken } from '../../functions/jwt';
import {
  M_KEY_ADMIN_ROLE,
  M_KEY_EMAIL_CHECK,
  M_KEY_LOGIN,
  M_KEY_PWD_FIND,
  M_KEY_PWD_RESET,
  M_KEY_SIGN_UP,
  Q_KEY_COUNCILS,
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

export const useSignUpMutate = () => {
  const { mutate } = useMutation({
    mutationKey: [M_KEY_SIGN_UP],
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

export const useEamilCheckMutate = () => {
  const { mutate } = useMutation({
    mutationKey: [M_KEY_EMAIL_CHECK],
    mutationFn: postCheckEmail,
  });

  return {
    postEmailCheck: (
      emailCheck: string,
      mutateOption?: Omit<
        MutateOptions<CheckEmailResponse, Error, string, unknown>,
        'onSettled'
      >,
    ) => {
      mutate(emailCheck, {
        ...mutateOption,
        onSettled: (data) => {
          if (!data) throw new Error('data is undefined');
        },
      });
    },
  };
};

export const useAdminRoleMutate = () => {
  const queryClient = useQueryClient();

  const { mutate: putAdminRoleMutate } = useMutation({
    mutationKey: [M_KEY_ADMIN_ROLE],
    mutationFn: putAdminRole,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [Q_KEY_COUNCILS],
      });
    },
  });
  return { putAdminRoleMutate };
};
