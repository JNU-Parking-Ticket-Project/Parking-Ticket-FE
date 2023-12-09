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
    // TODO: response dto에 status와 reason을 추가해야 아래 로직 가능
    // throw new Error(response.reason);
    throw new Error('로그인을 실패했습니다');
  }
  return new UserToken(response);
};

export interface PasswordFindRequest {
  email: string;
}

export const postPasswordFind = async ({ email }: PasswordFindRequest) => {
  const response = await https.post(`/v1/user/password/find`, { email });
  if (isErrorResponse(response)) {
    throw new Error('이메일 전송에 실패했습니다');
    // TODO: response dto에 status와 reason을 추가해야 아래 로직 가능
    // throw new Error(response.reason);
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
    // TODO: response dto에 status와 reason을 추가해야 아래 로직 가능
    // throw new Error(response.reason);
    throw new Error('비밀번호 초기화를 실패했습니다');
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
    // TODO: response dto에 status와 reason을 추가해야 아래 로직 가능
    // throw new Error(response.reason);
    throw new Error('토큰 재발급에 실패했습니다. 다시 로그인 해주세요.');
  }

  setToken(new UserToken(response.data));
  return retryCallback();
};
