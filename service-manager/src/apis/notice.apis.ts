import { https } from '../functions/https';
import { Notice } from './dtos/notice.dtos';
import { isErrorResponse } from './dtos/response.dtos';

export const getNotice = async () => {
  const response = await https.get('/v1/notice');
  if (isErrorResponse(response)) {
    return new Notice({ noticeContent: '' });
  }
  return new Notice(response);
};

export const putNotice = async (data: { noticeContent: string }) => {
  const response = await https.put('/v1/notice', data);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return new Notice(response);
};
