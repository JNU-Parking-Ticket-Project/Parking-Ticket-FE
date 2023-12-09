import { https } from '../functions/https';
import {
  RegistrationOptionsResponse,
  RegistrationRequest,
  RegistrationResponse,
} from './dtos/registration.dtos';
import { isErrorResponse } from './dtos/response.dtos';
import { reissueToken } from './user.apis';

export const postRegistration = async (
  registration: RegistrationRequest,
): Promise<RegistrationResponse> => {
  const { isRegistration, ...rest } = registration;
  const response = await https.post(
    `/v1/registration${registration.isRegistration || '/temporary'}`,
    rest,
  );
  if (isErrorResponse(response)) {
    // TODO: response 값에 status와 reason이 없기 때문에 토큰 재발행 로직 불가능
    // if (response.status === 401 || response.status === 403) {
    //   return reissueToken(() => postRegistration(registration));
    // }
    // throw new Error(response.reason);
    throw new Error('주차권 임시저장에 실패했습니다');
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
