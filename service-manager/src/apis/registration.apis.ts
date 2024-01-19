import { getErrorContent } from '../functions/error';
import { https } from '../functions/https';
import { RegistrationResponse } from './dtos/registration.dto';
import { isErrorResponse } from './dtos/response.dtos';
import { reissueToken } from './user.apis';

export const getAllRegistration = async (
  eventId: string,
): Promise<RegistrationResponse[]> => {
  const response = await https.get(`/v1/registrations/${eventId}`);
  if (isErrorResponse(response)) {
    if (getErrorContent(response.code).type === 'REISSUE') {
      return reissueToken(() => getAllRegistration(eventId));
    }
    throw new Error(response.reason);
  }
  return response.registrations.map(
    (item: any) => new RegistrationResponse(item),
  );
};
