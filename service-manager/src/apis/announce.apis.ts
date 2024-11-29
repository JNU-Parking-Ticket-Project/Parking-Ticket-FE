import { https } from '../functions/https';
import { AllAnnounce, Announce, AnnounceDelete } from './dtos/announce.dtos';
import { isErrorResponse } from './dtos/response.dtos';

export const getAllAnnounce = async (page: number) => {
  const response = await https.get(`/v1/announce?page=${page}`);
  if (isErrorResponse(response)) {
    return new AllAnnounce({ announces: [], lastPage: 0, nextPage: 0 });
  }
  return new AllAnnounce(response);
};

export const getAnnounceById = async (announceId: number) => {
  const response = await https.get(`/v1/announce/${announceId}`);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return new Announce(response);
};

export interface AnnounceRequest {
  announceTitle: string;
  announceContent: string;
  imageUrls: string[];
}

export const postAnnounce = async (
  data: AnnounceRequest,
): Promise<Announce> => {
  const response = await https.post('/v1/announce', data);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return new Announce(response);
};

export const putAnnounceById = async ({
  announceId,
  data,
}: {
  announceId: number;
  data: AnnounceRequest;
}): Promise<Announce> => {
  const response = await https.put(`/v1/announce/${announceId}`, data);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return new Announce(response);
};

export const deleteAnnounceById = async (
  announceId: number,
): Promise<AnnounceDelete> => {
  const response = await https.delete(`/v1/announce/${announceId}`);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return new AnnounceDelete(response);
};
