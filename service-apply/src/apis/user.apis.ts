import { https } from '../functions/https';
import { LogoutMessage, UserToken } from './dtos/user.dtos';

export interface UserLoginRequest {
  email: string;
  password: string;
}

export const postLogin = async (data: UserLoginRequest) => {
  const { data: resData } = await https.post(`/v1/auth/login`, data);
  return new UserToken(resData);
};

export const postReissue = async (data: { refreshtoken: string }) => {
  const { data: resData } = await https.post(`/v1/auth/login`, data);
  return new UserToken(resData);
};

export const postLogout = async () => {
  const { data: resData } = await https.post(`/v1/auth/logout`, null);
  return new LogoutMessage(resData);
};
