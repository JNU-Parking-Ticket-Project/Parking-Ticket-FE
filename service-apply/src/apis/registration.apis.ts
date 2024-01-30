import { getErrorContent } from '../functions/error';
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
    if (getErrorContent(response.code).type === 'REISSUE') {
      return reissueToken(() => postRegistration(data));
    }
    throw new Error(response.reason);
  }
  return new RegistrationResponse(response);
};

export const postTemporarySave = async (
  data: TemporarySaveRequest,
): Promise<RegistrationResponse> => {
  const response = await https.post('/v1/registration/temporary', data);
  if (isErrorResponse(response)) {
    if (getErrorContent(response.code).type === 'REISSUE') {
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
      const erorrContext = getErrorContent(response.code);
      switch (erorrContext.type) {
        case 'ALERT':
          alert(response.reason);
          break;
        case 'ALERT_WITH_REDIRECT':
          alert(response.reason);
          window.location.href = erorrContext.redirect;
          break;
        case 'REISSUE':
          return reissueToken(getRegistration);
        default:
          break;
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

export const getRegistrationPeriod = async (): Promise<Period> => {
  const response = await https.get('/v1/events/period');
  if (isErrorResponse(response)) {
    const errorContent = getErrorContent(response.code);
    switch (errorContent.type) {
      case 'ALERT':
        alert(response.reason);
        break;
      case 'NONE':
        break;
      case 'ALERT_WITH_REDIRECT':
        alert(response.reason);
        window.location.href = errorContent.redirect;
        break;
      case 'REISSUE':
        return reissueToken(getRegistrationPeriod);
      default:
        break;
    }
    throw new Error('신청기간 기간이 아닙니다.');
  }
  return new Period(response);
};
