import { https } from '../functions/https';
import {
  RegistrationOptionsResponse,
  RegistrationRequest,
  RegistrationResponse,
} from './dtos/registration.dtos';

export const postRegistration = async (registration: RegistrationRequest) => {
  const { isRegistration, ...rest } = registration;
  const { data: resData } = await https.post(
    `/v1/registration/${registration.isRegistration}`,
    rest,
  );
  return new RegistrationResponse(resData);
};

export const getRegistration = async () => {
  const { data: resData } = await https.get('/v1/registration');
  return new RegistrationOptionsResponse(resData);
};
