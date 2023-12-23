interface PeriodResponse {
  startAt: string;
  endAt: string;
}
export class Period {
  startAt: Date;
  endAt: Date;
  constructor({ startAt, endAt }: PeriodResponse) {
    this.startAt = new Date(startAt);
    this.endAt = new Date(endAt);
  }
}
