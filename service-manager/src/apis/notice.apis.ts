import { https } from '../functions/https';
import { Notice } from './dtos/notice.dtos';
import { isErrorResponse } from './dtos/response.dtos';
import { reissueToken } from './user.apis';

export const getNotice = async () => {
  const response = await https.get('/v1/notice');
  if (isErrorResponse(response)) {
    return new Notice({ noticeContent: '' });
  }
  return new Notice(response);
};

export const putNotice = async (data: {
  noticeContent: string;
}): Promise<Notice> => {
  const response = await https.put('/v1/notice', data);
  if (isErrorResponse(response)) {
    if (response.code === 'AUTH_401_1') {
      return reissueToken(() => putNotice(data));
    }
    throw new Error(response.reason);
  }
  return new Notice(response);
};
