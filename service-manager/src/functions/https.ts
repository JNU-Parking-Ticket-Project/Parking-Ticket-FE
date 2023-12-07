import { ErrorResponse, Response } from '../apis/dtos/response.dtos';
import { getAccessToken } from './jwt';

const BASE_URL = import.meta.env.VITE_PUBLIC_API_URL || 'http://localhost:8080';

const fetcher = async (url: string, req: RequestInit) => {
  const token = getAccessToken();
  const headers: HeadersInit = token
    ? {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `Bearer ${token}`,
      }
    : {
        'Content-Type': 'application/json;charset=UTF-8',
      };

  const response = await fetch(BASE_URL + '/api' + url, {
    ...req,
    headers,
  });
  if (response.status >= 400) {
    return await errorStatusResult(response);
  }
  return await response.json().then((data) => new Response(data));
};

const errorStatusResult = async (response: globalThis.Response) => {
  const errorResponse = await response
    .json()
    .then((data) => new ErrorResponse(data));
  if (errorResponse.status === 401 || errorResponse.status === 403) {
    alert('로그인이 필요합니다.');
    window.location.href = '/';
  }
  return errorResponse;
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
