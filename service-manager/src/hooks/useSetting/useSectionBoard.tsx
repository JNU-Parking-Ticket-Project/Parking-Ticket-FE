import { useSettingEventsQuery } from '../react-query/useSetting';

export const useSectionBoard = (pageIndex: number) => {
  const { coupon } = useSettingEventsQuery(pageIndex);
  let checkCoupon = coupon;
  if (coupon.couponEvents.length === 0) {
    return { coupon, canCreate: true };
  }
  let canCreate = false;
  if (pageIndex !== 0) {
    const { coupon } = useSettingEventsQuery(0);
    checkCoupon = coupon;
  }
  if (
    checkCoupon.couponEvents.find(
      (event) => event.eventStatus === 'OPEN' || event.eventStatus === 'READY',
    )
  ) {
    canCreate = true;
  }
  return { coupon, canCreate };
};
