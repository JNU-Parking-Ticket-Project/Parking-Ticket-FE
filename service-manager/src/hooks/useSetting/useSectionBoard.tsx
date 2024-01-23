import { useSettingEventsQuery } from '../react-query/useSetting';

export const useSectionBoard = (pageIndex: number) => {
  const { coupon } = useSettingEventsQuery(pageIndex);
  let checkCoupon = coupon;
  let canCreate = true;
  if (pageIndex !== 1) {
    const { coupon } = useSettingEventsQuery(1);
    checkCoupon = coupon;
  }
  if (
    coupon.couponEvents.some(
      (event) => event.eventStatus === 'OPEN' || event.eventStatus === 'READY',
    )
  ) {
    canCreate = false;
  }
  return { coupon, canCreate };
};
