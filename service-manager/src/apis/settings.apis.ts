import { format } from 'date-fns';
import { https } from '../functions/https';
import { isErrorResponse } from './dtos/response.dtos';
import { Sector } from './dtos/sector.dtos';
import { SettingTime } from './dtos/times.dtos';
import { ko } from 'date-fns/locale';

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

export const getSettingTime = async () => {
  const response = await https.get(`/v1/events/period`);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return new SettingTime(response);
};

export const postSettingTime = async (date: SettingTime) => {
  const pattern = 'yyyy-MM-dd HH:mm:ss';
  const datesString = {
    startAt: format(date.startAt, pattern, { locale: ko }).replace(' ', 'T'),
    endAt: format(date.endAt, pattern, { locale: ko }).replace(' ', 'T'),
  };
  const response = await https.post(`/v1/events`, datesString);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return response as { message: string };
};
