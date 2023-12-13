import { https } from '../functions/https';
import { isErrorResponse } from './dtos/response.dtos';
import { Sector } from './dtos/sector.dtos';

interface SectorRequest {
  name: string;
  sectorNumber: string;
  sectorCapacity: number;
  reserve: number;
}

export const getSectors = async (): Promise<Sector[]> => {
  const response = await https.get('/v1/sectors');
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return response.map((sector: any) => new Sector(sector));
};

export const putSectors = async (data: SectorRequest[]) => {
  const response = await https.put('/v1/sectors', data);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return response;
};

export const postSectors = async (data: SectorRequest[]) => {
  const response = await https.post('/v1/sectors', data);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return response;
};

export const deleteSector = async (sectorNumber: string) => {
  const response = await https.delete(`/v1/sectors/${sectorNumber}`);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return response;
};
