import { Sector } from './sector.dtos';

export class SettingTime {
  startAt: Date;
  endAt: Date;
  title: string;
  constructor({ startAt, endAt, title }: SettingTime) {
    this.startAt = new Date(startAt);
    this.endAt = new Date(endAt);
    this.title = title;
  }
}

export type CouponEventData = {
  eventId: number;
  eventTitle: string;
  eventStatus: 'READY' | 'OPEN' | 'CALCULATING' | 'CLOSED';
  dateTimePeriod: string;
};

export class CouponEvent {
  couponEvents: CouponEventData[];
  lastPage: number;
  nextPage: number;
  constructor({
    events,
    lastPage,
    nextPage,
  }: {
    events: CouponEventData[];
    lastPage: number;
    nextPage: number;
  }) {
    this.couponEvents = events;
    this.lastPage = lastPage;
    this.nextPage = nextPage;
  }
}

interface CouponEventDetailInterface
  extends Omit<CouponEventData, 'eventId' | 'dateTimePeriod'> {
  sectors: Sector[];
  dateTimePeriod: { startAt: Date; endAt: Date };
}

export class CouponEventDetail {
  dateTimePeriod: { startAt: Date; endAt: Date };
  eventTitle: string;
  eventStatus: 'READY' | 'OPEN' | 'CALCULATING' | 'CLOSED';
  sectors: Sector[];
  constructor({
    dateTimePeriod,
    eventTitle,
    eventStatus,
    sectors,
  }: CouponEventDetailInterface) {
    this.eventTitle = eventTitle;
    this.dateTimePeriod = {
      startAt: new Date(dateTimePeriod.startAt),
      endAt: new Date(dateTimePeriod.endAt),
    };
    this.eventStatus = eventStatus;
    this.sectors = sectors;
  }
}

export class CouponPublishResponse {
  publish: string;
  constructor({ publish }: { publish: string }) {
    this.publish = publish;
  }
}

export class RemoveEventsResponse {
  message: string;
  constructor({ message }: { message: string }) {
    this.message = message;
  }
}
