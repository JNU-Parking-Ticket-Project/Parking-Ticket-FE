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
  UserLogoutRequest,
  UserSignUpRequest,
  postCheckEmail,
  postLogin,
  postLogout,
  postPasswordFind,
  postPasswordReset,
  postSignup,
  putAdminRole,
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

export const useLogoutMutate = () => {
  const { mutate } = useMutation({
    mutationKey: ['logout'],
    mutationFn: postLogout,
  });

  return {
    postLogout: (
      logoutRequest: UserLogoutRequest,
      mutateOption?: Omit<
        MutateOptions<UserToken, Error, UserLogoutRequest, unknown>,
        'onSettled'
      >,
    ) => {
      mutate(logoutRequest, {
        ...mutateOption,
        onSettled: (data) => {
          if (!data) throw new Error('data is undefined');
        },
      });
    },
  };
}

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

export const useEamilCheckMutate = () => {
  const { mutate } = useMutation({
    mutationKey: ['email-check'],
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
    mutationKey: ['admin-role'],
    mutationFn: putAdminRole,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['councils'],
      });
    },
  });
  return { putAdminRoleMutate };
};
