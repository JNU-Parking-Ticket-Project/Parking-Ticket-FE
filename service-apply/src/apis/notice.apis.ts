import { https } from '../functions/https';
import { Notice } from './dtos/notice.dtos';

export const getNotice = async () => {
  const { data: resData } = await https.get('/v1/notice');
  return new Notice(resData);
};
