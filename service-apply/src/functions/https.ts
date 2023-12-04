import { Response } from '../apis/dtos/response.dtos';
import { getAccessToken } from './jwt';

const BASE_URL = import.meta.env.VITE_PUBLIC_API_URL || 'http://localhost:8080';

const fetcher = (url: string, req: RequestInit) => {
  const token = getAccessToken();
  const headers: HeadersInit = token
    ? {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `Bearer ${token}`,
      }
    : {
        'Content-Type': 'application/json;charset=UTF-8',
      };

  return fetch(BASE_URL + '/api' + url, { ...req, headers })
    .catch((error) => {
      console.error(error);
    })
    .then((response) => {
      if (response) {
        return response.json().then((data) => new Response(data));
      }
      throw new Error('Network response was not ok.');
    });
};

export const https = {
  get: (url: string) =>
    fetcher(url, {
      method: 'GET',
    }),
  post: (url: string, data: any) =>
    fetcher(url, {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  put: (url: string, data: any) =>
    fetcher(url, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  delete: (url: string) =>
    fetcher(url, {
      method: 'DELETE',
    }),
};
