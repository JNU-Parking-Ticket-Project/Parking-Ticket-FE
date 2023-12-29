import { https } from '../functions/https';
import { RegistrationResponse } from './dtos/registration.dto';
import { isErrorResponse } from './dtos/response.dtos';
import { reissueToken } from './user.apis';

export const getAllRegistration = async (): Promise<RegistrationResponse[]> => {
  const response = await https.get('/v1/registrations');
  if (isErrorResponse(response)) {
    if (response.code === 'AUTH_401_1') {
      return reissueToken(getAllRegistration);
    }
    throw new Error(response.reason);
  }
  return response.registrations.map(
    (item: any) => new RegistrationResponse(item),
  );
};
