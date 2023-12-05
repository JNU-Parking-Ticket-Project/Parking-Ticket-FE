import { https } from '../functions/https';
import {
  RegistrationOptionsResponse,
  RegistrationRequest,
  RegistrationResponse,
} from './dtos/registration.dtos';
import { isErrorResponse } from './dtos/response.dtos';

export const postRegistration = async (registration: RegistrationRequest) => {
  const { isRegistration, ...rest } = registration;
  const response = await https.post(
    `/v1/registration/${registration.isRegistration}`,
    rest,
  );
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return new RegistrationResponse(response.data);
};

export const getRegistration = async () => {
  const response = await https.get('/v1/registration');
  if (isErrorResponse(response)) {
    return new RegistrationOptionsResponse({
      carNum: '',
      email: '',
      isLight: false,
      phoneNum: '',
      sector: [],
      studentNum: '',
      name: '',
      selectSectoId: -1,
    });
  }
  return new RegistrationOptionsResponse(response.data);
};
