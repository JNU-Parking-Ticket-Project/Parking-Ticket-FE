import { getErrorContent } from '../functions/error';
import { https } from '../functions/https';
import { Period } from './dtos/period.dtos';
import {
  CaptchaResponse,
  RegistrationEventIdResponse,
  RegistrationOptionsResponse,
  RegistrationRequest,
  RegistrationResponse,
  TemporarySaveRequest,
} from './dtos/registration.dtos';
import { isErrorResponse } from './dtos/response.dtos';

export const postRegistration = async (
  data: RegistrationRequest,
): Promise<RegistrationResponse> => {
  const { eventId, ...props } = data;
  const response = await https.post(`/v1/registration/${eventId}`, props);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return new RegistrationResponse(response);
};

export const postTemporarySave = async (
  data: TemporarySaveRequest,
): Promise<RegistrationResponse> => {
  const { eventId, ...props } = data;
  const response = await https.post(
    `/v1/registration/temporary/${eventId}`,
    props,
  );
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return new RegistrationResponse(response);
};

// export const postEmailTransmit = async () => {
//   const response = await https.post('url');
//   if (isErrorResponse(response)) {
//     throw new Error(response.reason);
//   }
//   return response;
// };

export const getRegistration = async ({
  eventId,
}: RegistrationEventIdResponse): Promise<RegistrationOptionsResponse> => {
  const response = await https.get(`/v1/registration/${eventId}`);
  if (isErrorResponse(response)) {
    const erorrContext = getErrorContent(response.code);
    switch (erorrContext.type) {
      case 'ALERT':
        alert(response.reason);
        break;
      case 'ALERT_WITH_REDIRECT':
        alert(erorrContext.content);
        window.location.href = erorrContext.redirect;
        break;
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
        alert(errorContent.content);
        window.location.href = errorContent.redirect;
        break;
      default:
        break;
    }
    throw new Error('신청기간 기간이 아닙니다.');
  }
  return new Period(response);
};
