export class Period {
  startAt: string;
  endAt: string;
  constructor({ startAt, endAt }: Period) {
    this.startAt = startAt;
    this.endAt = endAt;
  }
}
