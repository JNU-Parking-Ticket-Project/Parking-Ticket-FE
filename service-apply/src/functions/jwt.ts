import { UserToken } from '../apis/dtos/user.dtos';

export const setToken = (token: UserToken) => {
  if (!window) return { error: 'window is not defined' };
  localStorage.setItem('accessToken', token.accessToken);
  localStorage.setItem('refreshToken', token.refreshToken);

  return { error: null };
};

export const getAccessToken = () => {
  if (!window) return '';
  try {
    return localStorage.getItem('accessToken');
  } catch {
    return '';
  }
};

export const getRefreshToken = () => {
  if (!window) return '';
  try {
    return localStorage.getItem('refreshToken');
  } catch {
    return '';
  }
};
