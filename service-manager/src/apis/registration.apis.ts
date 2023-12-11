import { https } from '../functions/https';
import { RegistrationResponse } from './dtos/registration.dto';
import { isErrorResponse } from './dtos/response.dtos';

export const getAllRegistration = async (): Promise<RegistrationResponse[]> => {
  const response = await https.get(`/v1/registrations`);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return response.registrations.map(
    (item: any) => new RegistrationResponse(item),
  );
};
