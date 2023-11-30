export class Response {
  status: number;
  success: string;
  data: any;
  timeStamp: Date;
  constructor({
    status,
    success,
    data,
    timeStamp,
  }: {
    status: number;
    success: string;
    data: any;
    timeStamp: string;
  }) {
    this.status = status;
    this.success = success;
    this.data = data;
    this.timeStamp = new Date(timeStamp);
  }
}
