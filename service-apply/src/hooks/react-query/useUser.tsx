import { UserLoginRequest, postLogin, postLogout } from '../../apis/user.apis';
import { setToken } from '../..//functions/jwt';
import { MutateOptions, useMutation } from '@tanstack/react-query';
import { UserToken } from 'service-apply/src/apis/dtos/user.dtos';

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
          const isSuccess = setToken(data);
          if (isSuccess.error) throw new Error(isSuccess.error);
        },
      });
    },
  };
};
