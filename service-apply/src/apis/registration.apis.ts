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
    `/v1/registration/${registration.isRegistration}`,
    rest,
  );
  if (isErrorResponse(response)) {
    if (response.status === 401 || response.status === 403) {
      return reissueToken(() => postRegistration(registration));
    }
    throw new Error(response.reason);
  }
  return new RegistrationResponse(response.data);
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
        sector: [],
        studentNum: '',
        name: '',
        selectSectorId: -1,
        affiliation: '',
      });
    }
    return new RegistrationOptionsResponse(response.data);
  };
