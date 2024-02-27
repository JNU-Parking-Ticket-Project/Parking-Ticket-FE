import { format } from 'date-fns';
import { https } from '../functions/https';
import { isErrorResponse } from './dtos/response.dtos';
import {
  PostSettingsResponse,
  PutSettingsResponse,
  Sector,
} from './dtos/sector.dtos';
import {
  CouponEvent,
  CouponEventDetail,
  CouponPublishResponse,
  RemoveEventsResponse,
  SettingTime,
} from './dtos/times.dtos';
import { ko } from 'date-fns/locale';

export const getSettingReadyTime = async (): Promise<SettingTime> => {
  const response = await https.get(`/v1/events/period`);
  if (isErrorResponse(response)) {
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
    throw new Error(response.reason);
  }
  return new PostSettingsResponse(response);
};

export const putSettingTime = async (eventId: string, date: SettingTime) => {
  const pattern = 'yyyy-MM-dd HH:mm:ss';
  const datesString = {
    dateTimePeriod: {
      startAt: format(date.startAt, pattern, { locale: ko }).replace(' ', 'T'),
      endAt: format(date.endAt, pattern, { locale: ko }).replace(' ', 'T'),
    },
    title: date.title,
  };

  const response = await https.put(`/v1/events/${eventId}`, datesString);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return new PutSettingsResponse(response);
};

export const getSettingEvents = async (page: number): Promise<CouponEvent> => {
  const response = await https.get(`/v1/events?page=${page}`);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return new CouponEvent(response);
};

export const getSettingEventBy = async (
  eventId: string,
): Promise<CouponEventDetail> => {
  const response = await https.get(`/v1/events/${eventId}`);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return new CouponEventDetail(response);
};

export const getSectorsBy = async (eventId: string): Promise<Sector[]> => {
  const response = await https.get(`/v1/events/${eventId}/sectors`);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return response.map((sector: any) => new Sector(sector));
};

export const getPublishBy = async (eventId: string) => {
  const response = await https.get(`/v1/events/publish/${eventId}`);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return new CouponPublishResponse(response);
};

export const putPublishBy = async (eventId: string, publish: boolean) => {
  const response = await https.put(`/v1/events/publish/${eventId}`, {
    publish,
  });
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return new CouponPublishResponse(response);
};

export const deleteEventBy = async (eventId: string) => {
  const response = await https.delete(`/v1/events/${eventId}`);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return new RemoveEventsResponse(response);
};
