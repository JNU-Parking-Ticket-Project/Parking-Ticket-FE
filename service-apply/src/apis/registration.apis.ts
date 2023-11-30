import { https } from '../functions/https';
import {
  RegistrationOptionsResponse,
  RegistrationRequest,
  RegistrationResponse,
} from './dtos/registration.dtos';

export const postRegistration = async (
  registration: RegistrationRequest,
  isRegistration = false,
) => {
  const { data: resData } = await https.post(
    `/api/v1/registration${isRegistration ? 'true' : 'false'}`,
    registration,
  );
  return new RegistrationResponse(resData);
};

export const getRegistration = async () => {
  const { data: resData } = await https.get('/api/v1/registration');
  return new RegistrationOptionsResponse(resData);
};
