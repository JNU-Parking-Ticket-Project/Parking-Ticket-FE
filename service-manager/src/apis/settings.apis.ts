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
import { CouponEvent, CouponEventDetail, SettingTime } from './dtos/times.dtos';
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

export const getSectorsBy = async (eventId: string): Promise<Sector[]> => {
  const response = await https.get(`/v1/events/${eventId}/sectors`);
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

export const getSettingReadyTime = async (): Promise<SettingTime> => {
  const response = await https.get(`/v1/events/period`);
  if (isErrorResponse(response)) {
    if (getErrorContent(response.code).type === 'REISSUE') {
      return reissueToken(getSettingReadyTime);
    }
    throw new Error(response.reason);
  }
  return new SettingTime(response);
};

export const getSettingTimeBy = async (eventId: string) => {
  const response = await https.get(`/v1/events/${eventId}/period`);
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
    dateTimePeriod: {
      startAt: format(date.startAt, pattern, { locale: ko }).replace(' ', 'T'),
      endAt: format(date.endAt, pattern, { locale: ko }).replace(' ', 'T'),
    },
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

export const getSettingEvents = async (page: number): Promise<CouponEvent> => {
  const response = await https.get(`/v1/events?page=${page}`);
  if (isErrorResponse(response)) {
    if (getErrorContent(response.code).type === 'REISSUE') {
      return reissueToken(() => getSettingEvents(page));
    }
    throw new Error(response.reason);
  }
  return new CouponEvent(response);
};

export const getSettingEventBy = async (
  eventId: string,
): Promise<CouponEventDetail> => {
  const response = await https.get(`/v1/events/${eventId}`);
  if (isErrorResponse(response)) {
    if (getErrorContent(response.code).type === 'REISSUE') {
      return reissueToken(() => getSettingEventBy(eventId));
    }
    throw new Error(response.reason);
  }
  return new CouponEventDetail(response);
};
