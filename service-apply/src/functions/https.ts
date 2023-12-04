import { Response } from '../apis/dtos/response.dtos';

const token = '';
const BASE_URL = process.env.PUBLIC_API_URL || 'http://localhost:3000';

console.log('BASE_URL', BASE_URL);

const headers: HeadersInit = token
  ? {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${token}`,
    }
  : {
      'Content-Type': 'application/json;charset=UTF-8',
    };

const fetcher = (url: string, headers: HeadersInit) =>
  fetch(BASE_URL + '/api' + url, { headers })
    .catch((error) => {
      console.error(error);
    })
    .then((response) => {
      if (response) {
        return response.json().then((data) => new Response(data));
      }
      throw new Error('Network response was not ok.');
    });

export const https = {
  get: (url: string) =>
    fetcher(url, {
      method: 'GET',
      ...headers,
    }),
  post: (url: string, data: any) =>
    fetcher(url, {
      method: 'POST',
      ...headers,
      body: JSON.stringify(data),
    }),
  put: (url: string, data: any) =>
    fetcher(url, {
      method: 'PUT',
      ...headers,
      body: JSON.stringify(data),
    }),
  delete: (url: string) =>
    fetcher(url, {
      method: 'DELETE',
      ...headers,
    }),
};
