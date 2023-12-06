import { https } from '../functions/https';
import { removeToken, setToken } from '../functions/jwt';
import { isErrorResponse } from './dtos/response.dtos';
import { UserToken } from './dtos/user.dtos';

export interface UserLoginRequest {
  email: string;
  pwd: string;
}

export const postLogin = async (data: UserLoginRequest) => {
  const response = await https.post(`/v1/auth/login`, data);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return new UserToken(response.data);
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

  setToken(new UserToken(response.data));
  return retryCallback();
};
