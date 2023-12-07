import { https } from '../functions/https';
import { isErrorResponse } from './dtos/response.dtos';

export const getAllRegistration = async () => {
  const response = await https.get(`/v1/registration`);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return response.data;
};
