import { ERROR_CODE } from 'service-manager/src/functions/error';

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

export class ErrorResponse {
  code: ERROR_CODE;
  path: string;
  reason: string;
  status: number;
  success: boolean;
  timeStamp: Date;
  constructor({
    code,
    path,
    reason,
    status,
    success,
    timeStamp,
  }: {
    code: ERROR_CODE;
    path: string;
    reason: string;
    status: number;
    success: boolean;
    timeStamp: string;
  }) {
    this.code = code;
    this.path = path;
    this.reason = reason;
    this.status = status;
    this.success = success;
    this.timeStamp = new Date(timeStamp);
  }
}

export const isErrorResponse = (data: any): data is ErrorResponse => {
  return data.code !== undefined;
};
