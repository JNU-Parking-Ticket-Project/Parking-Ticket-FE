import { getErrorContent } from '../functions/error';
import { https } from '../functions/https';
import { removeToken, setToken } from '../functions/jwt';
import type { Role } from '../types/admin';
import { isErrorResponse } from './dtos/response.dtos';
import {
  UserToken,
  PasswordFind,
  PasswordReset,
  UserSignUpResponse,
  Council,
  CheckEmailResponse,
  AdminRoleResponse,
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
  return new UserToken(response);
};

export const postLogout = async () => {
  const response = await https.post(`/v1/auth/logout`, {});
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return response;
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
  return new UserSignUpResponse(response);
};

export const reissueToken = async () => {
  const token = localStorage.getItem('refreshToken');

  if (!token) {
    throw new Error('로그인을 해주세요.');
  }
  const response = await https.post('/v1/auth/login', { refreshtoken: token });
  if (isErrorResponse(response)) {
    removeToken();
    throw new Error('토큰이 만료되었습니다. 다시 로그인해주세요.');
  }

  setToken(new UserToken(response));
};

export const putAdminRole = async ({
  userId,
  role,
}: {
  userId: number;
  role: Role;
}): Promise<AdminRoleResponse> => {
  const response = await https.put(`/v1/admin/role/${userId}`, { role });
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return new AdminRoleResponse(response);
};

export const getAllCouncils = async () => {
  const response = await https.get('/v1/admin/councils');

  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return response.users.map((data: any) => new Council(data)) as Council[];
};

export const postCheckEmail = async (email: string) => {
  const response = await https.post('/v1/auth/check/email', { email });
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return new CheckEmailResponse(response);
};
