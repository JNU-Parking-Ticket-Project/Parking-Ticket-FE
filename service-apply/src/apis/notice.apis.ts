import { https } from '../functions/https';
import { Notice } from './dtos/notice.dtos';
import { isErrorResponse } from './dtos/response.dtos';

export const getNotice = async () => {
  const response = await https.get('/v1/notice');
  if (isErrorResponse(response)) {
    return new Notice({ noticeContent: '' });
  }
  return new Notice(response.data);
};
