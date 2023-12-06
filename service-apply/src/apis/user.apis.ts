import { https } from '../functions/https';
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

export const postReissue = async (data: { refreshtoken: string }) => {
  const response = await https.post(`/v1/auth/login`, data);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return new UserToken(response.data);
};
