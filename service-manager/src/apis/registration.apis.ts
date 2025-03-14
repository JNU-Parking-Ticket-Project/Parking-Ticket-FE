import { https } from '../functions/https';
import { EmailResponse, RegistrationResponse } from './dtos/registration.dto';
import { isErrorResponse } from './dtos/response.dtos';

export const getAllRegistration = async (
  eventId: string,
): Promise<RegistrationResponse[]> => {
  const response = await https.get(`/v1/registrations/${eventId}`);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return response.registrations.map(
    (item: any) => new RegistrationResponse(item),
  );
};

export const postEmail = async (
  eventId: string,
): Promise<{ message: string }> => {
  const response = await https.post(`/v1/council/emails/${eventId}`, {});

  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }

  return new EmailResponse(response);
};
