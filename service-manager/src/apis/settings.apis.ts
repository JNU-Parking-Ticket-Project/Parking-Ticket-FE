import { format } from 'date-fns';
import { getErrorContent } from '../functions/error';
import { https } from '../functions/https';
import { isErrorResponse } from './dtos/response.dtos';
import {
  DeleteSectorResponse,
  PostSectorResponse,
  PostSettingsResponse,
  PutSectorResponse,
  Sector,
} from './dtos/sector.dtos';
import { CouponEvent, SettingTime } from './dtos/times.dtos';
import { ko } from 'date-fns/locale';
import { reissueToken } from './user.apis';

interface SectorRequest {
  name: string;
  sectorNumber: string;
  sectorCapacity: number;
  reserve: number;
}

export const getSectors = async (): Promise<Sector[]> => {
  const response = await https.get('/v1/sectors');
  if (isErrorResponse(response)) {
    if (getErrorContent(response.code).type === 'REISSUE') {
      return reissueToken(getSectors);
    }
    throw new Error(response.reason);
  }
  return response.map((sector: any) => new Sector(sector));
};

export const putSectors = async (
  data: SectorRequest[],
): Promise<PutSectorResponse> => {
  const response = await https.put('/v1/sectors', data);
  if (isErrorResponse(response)) {
    if (getErrorContent(response.code).type === 'REISSUE') {
      return reissueToken(() => putSectors(data));
    }
    throw new Error(response.reason);
  }
  return new PutSectorResponse(response);
};

export const postSectors = async (
  data: SectorRequest[],
): Promise<PostSectorResponse> => {
  const response = await https.post('/v1/sectors', data);
  if (isErrorResponse(response)) {
    if (getErrorContent(response.code).type === 'REISSUE') {
      return reissueToken(() => postSectors(data));
    }
    throw new Error(response.reason);
  }
  return new PostSectorResponse(response);
};

export const deleteSector = async (
  sectorNumber: string,
): Promise<DeleteSectorResponse> => {
  const response = await https.delete(`/v1/sectors/${sectorNumber}`);
  if (isErrorResponse(response)) {
    if (getErrorContent(response.code).type === 'REISSUE') {
      return reissueToken(() => deleteSector(sectorNumber));
    }
    throw new Error(response.reason);
  }
  return new DeleteSectorResponse(response);
};

export const getSettingTime = async () => {
  const response = await https.get(`/v1/events/period`);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return new SettingTime(response);
};

export const postSettingTime = async (
  date: SettingTime,
): Promise<PostSettingsResponse> => {
  const pattern = 'yyyy-MM-dd HH:mm:ss';
  const datesString = {
    startAt: format(date.startAt, pattern, { locale: ko }).replace(' ', 'T'),
    endAt: format(date.endAt, pattern, { locale: ko }).replace(' ', 'T'),
    title: date.title,
  };
  const response = await https.post(`/v1/events`, datesString);
  if (isErrorResponse(response)) {
    if (getErrorContent(response.code).type === 'REISSUE') {
      return reissueToken(() => postSettingTime(date));
    }
    throw new Error(response.reason);
  }
  return new PostSettingsResponse(response);
};

export const getSettingEvents = async () => {
  const response = await https.get(`/v1/events`);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return response.map((event: any) => new CouponEvent(event));
};
