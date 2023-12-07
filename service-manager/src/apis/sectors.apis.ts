import { https } from '../functions/https';
import { isErrorResponse } from './dtos/response.dtos';

interface SectorRequset {
  name: string;
  sectorNumber: string;
  sectorCapacity: number;
  reserve: number;
}

export const putSectors = async (data: SectorRequset[]) => {
  const response = await https.put(`/v1/sectors`, data);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return response.data;
};

export const postSectors = async (data: SectorRequset[]) => {
  const response = await https.post(`/v1/sectors`, data);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return response.data;
};

export const deleteSector = async (sectorNumber: string) => {
  const response = await https.delete(`/v1/sectors/${sectorNumber}`);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return response.data;
};
