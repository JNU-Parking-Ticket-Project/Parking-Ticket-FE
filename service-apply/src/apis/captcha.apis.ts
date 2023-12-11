import { https } from '../functions/https';
import { Captcha } from './dtos/captcha.dtos';
import { isErrorResponse } from './dtos/response.dtos';

export const getCaptcha = async () => {
  const response = await https.get('/v1/captcha');
  if (isErrorResponse(response)) {
    throw new Error('자동 신청 방지 이미지 조회를 실패했습니다.');
  }

  return new Captcha(response);
};
