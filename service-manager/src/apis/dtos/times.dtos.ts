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

type couponEvent = {
  eventId: number;
  eventTitle: string;
  eventStatus: 'READY' | 'OPEN' | 'CALCULATING' | 'CLOSED';
  dateTimePeriod: string;
};

export class CouponEvent {
  couponEvents: couponEvent[];
  lastPage: number;
  nextPage: number;
  constructor({
    events,
    lastPage,
    nextPage,
  }: {
    events: couponEvent[];
    lastPage: number;
    nextPage: number;
  }) {
    this.couponEvents = events;
    this.lastPage = lastPage;
    this.nextPage = nextPage;
  }
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
  }: {
    dateTimePeriod: { startAt: string; endAt: string };
    eventTitle: string;
    eventStatus: 'READY' | 'OPEN' | 'CALCULATING' | 'CLOSED';
    sectors: Sector[];
  }) {
    this.eventTitle = eventTitle;
    this.dateTimePeriod = {
      startAt: new Date(dateTimePeriod.startAt),
      endAt: new Date(dateTimePeriod.endAt),
    };
    this.eventStatus = eventStatus;
    this.sectors = sectors;
  }
}
