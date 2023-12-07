import { https } from '../functions/https';
import { removeToken, setToken } from '../functions/jwt';
import { isErrorResponse } from './dtos/response.dtos';
import {
  UserToken,
  PasswordFind,
  PasswordReset,
  UserSignUpResponse,
  Council,
} from './dtos/user.dtos';

export interface UserLoginRequest {
  email: string;
  pwd: string;
}

export const postLogin = async (data: UserLoginRequest) => {
  const response = await https.post(`/v1/auth/login/council`, data);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return new UserToken(response.data);
};

export interface PasswordFindRequest {
  email: string;
}

export const postPasswordFind = async ({ email }: PasswordFindRequest) => {
  const response = await https.post(`/v1/user/password/find`, { email });
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return new PasswordFind(response.data);
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
  return new PasswordReset(response.data);
};

export interface UserSignUpRequest {
  email: string;
  pwd: string;
  name: string;
  phoneNum: string;
  studentNum: string;
}

export const postSignup = async (data: UserSignUpRequest) => {
  const response = await https.post('/v1/council/signup', data);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return new UserSignUpResponse(response.data);
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

export const putAdminRole = async (userId: number, role: string) => {
  const response = await https.put(`/v1/admin/role/${userId}`, { role });
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return response.data;
};

export const getAllCouncil = async () => {
  const response = await https.get(`/v1/admin/councils`);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return response.data.users.map((data: any) => new Council(data));
};