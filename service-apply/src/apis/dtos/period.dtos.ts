interface PeriodResponse {
  eventId: number;
  dateTimePeriod: { startAt: string; endAt: string };
}
export class Period {
  startAt: Date;
  endAt: Date;
  eventId: number;
  constructor({ eventId, dateTimePeriod: { startAt, endAt } }: PeriodResponse) {
    this.eventId = eventId;
    this.startAt = new Date(startAt);
    this.endAt = new Date(endAt);
  }
}
