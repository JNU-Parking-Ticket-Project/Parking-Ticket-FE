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
  eventStatus: string;
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
  eventTitle: string;
  eventStatus: string;
  constructor({
    eventTitle,
    eventStatus,
  }: {
    eventTitle: string;
    eventStatus: string;
  }) {
    this.eventTitle = eventTitle;
    this.eventStatus = eventStatus;
  }
}
