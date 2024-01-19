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

export class CouponEvent {
  id: number;
  startAt: string;
  endAt: string;
  title: string;
  status: string;
  constructor({ id, startAt, endAt, title, status }: CouponEvent) {
    this.id = id;
    this.startAt = startAt;
    this.endAt = endAt;
    this.title = title;
    this.status = status;
  }
}
