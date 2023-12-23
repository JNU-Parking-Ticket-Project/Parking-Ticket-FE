import { https } from '../functions/https';
import { Period } from './dtos/period.dtos';
import {
  CaptchaResponse,
  RegistrationOptionsResponse,
  RegistrationRequest,
  RegistrationResponse,
  TemporarySaveRequest,
} from './dtos/registration.dtos';
import { isErrorResponse } from './dtos/response.dtos';
import { reissueToken } from './user.apis';

export const postRegistration = async (
  data: RegistrationRequest,
): Promise<RegistrationResponse> => {
  const response = await https.post('/v1/registration', data);
  if (isErrorResponse(response)) {
    if (response.status === 401 || response.status === 403) {
      return reissueToken(() => postRegistration(data));
    }
    console.log(response.reason);
    throw new Error(response.reason);
  }
  return new RegistrationResponse(response);
};

export const postTemporarySave = async (
  data: TemporarySaveRequest,
): Promise<RegistrationResponse> => {
  const response = await https.post('/v1/registration/temporary', data);
  if (isErrorResponse(response)) {
    if (response.status === 401 || response.status === 403) {
      return reissueToken(() => postTemporarySave(data));
    }
    throw new Error(response.reason);
  }
  return new RegistrationResponse(response);
};

export const getRegistration =
  async (): Promise<RegistrationOptionsResponse> => {
    const response = await https.get('/v1/registration');
    if (isErrorResponse(response)) {
      if (response.status === 401 || response.status === 403) {
        return reissueToken(getRegistration);
      }
      return new RegistrationOptionsResponse({
        carNum: '',
        email: '',
        isLight: false,
        phoneNum: '',
        sectors: [],
        studentNum: '',
        name: '',
        selectSectorId: -1,
        affiliation: '',
      });
    }
    return new RegistrationOptionsResponse(response);
  };

export const getCaptcha = async () => {
  const response = await https.get('/v1/captcha');
  if (isErrorResponse(response)) {
    throw new Error('자동 신청 방지 이미지 조회를 실패했습니다.');
  }

  return new CaptchaResponse(response);
};

export const getRegistrationPeriod = async () => {
  const response = await https.get('/v1/events/period');
  if (isErrorResponse(response)) {
    throw new Error('신청기간 조회에 실패하였습니다.');
  }
  return new Period(response);
};
