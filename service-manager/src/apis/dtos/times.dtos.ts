export class SettingTime {
  startAt: Date;
  endAt: Date;
  constructor({ startAt, endAt }: { startAt: string; endAt: string }) {
    this.startAt = new Date(startAt);
    this.endAt = new Date(endAt);
  }
}
