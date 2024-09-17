import { https } from '../functions/https';
import { removeToken, setToken } from '../functions/jwt';
import { isErrorResponse } from './dtos/response.dtos';
import { UserToken, PasswordFind, PasswordReset } from './dtos/user.dtos';

export interface UserLoginRequest {
  email: string;
  pwd: string;
}

export const postLogin = async (data: UserLoginRequest) => {
  const response = await https.post(`/v1/auth/login`, data);
  if (isErrorResponse(response)) {
    // TODO: Error에 대한 처리가 필요합니다.
    if (response.code === 'NETWORK_ERROR') {
      throw new Error('준비중입니다. 잠시 후 다시 시도해주세요.');
    }
    throw new Error(response.reason);
  }
  return new UserToken(response);
};

export interface PasswordFindRequest {
  email: string;
}

export const postPasswordFind = async ({ email }: PasswordFindRequest) => {
  const response = await https.post(`/v1/user/password/find`, { email });
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return new PasswordFind(response);
};

export interface PasswordResetRequest {
  code: string;
  password: string;
}

export const postPasswordReset = async ({
  code,
  password,
}: PasswordResetRequest) => {
  const response = await https.post(`/v1/user/update/password/${code}`, {
    password,
  });
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return new PasswordReset(response);
};

export const reissueToken = async <T>(retryCallback: () => T): Promise<T> => {
  const token = localStorage.getItem('refreshToken');

  if (!token) {
    throw new Error('Refresh token not found');
  }
  const response = await https.post(`/v1/auth/login`, { refreshtoken: token });
  if (isErrorResponse(response)) {
    removeToken();
    throw new Error(response.reason);
  }

  setToken(new UserToken(response));
  return retryCallback();
};
