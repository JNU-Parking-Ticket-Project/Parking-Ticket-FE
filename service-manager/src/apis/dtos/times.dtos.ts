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
