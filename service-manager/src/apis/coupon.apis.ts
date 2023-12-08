import { https } from '../functions/https';
import { isErrorResponse } from './dtos/response.dtos';

interface CouponRequest {
  startAt: string;
  endAt: string;
}

export const postCoupon = async (data: CouponRequest) => {
  const response = await https.post(`/v1/coupon`, data);
  if (isErrorResponse(response)) {
    throw new Error(response.reason);
  }
  return response.data;
};
