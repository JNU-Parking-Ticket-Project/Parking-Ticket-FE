import { useSettingEventsQuery } from '../react-query/useSetting';

export const useSectionBoard = (pageIndex: number) => {
  const { coupon } = useSettingEventsQuery(pageIndex);
  let checkCoupon;
  let canCreate = false;
  if (pageIndex !== 1) {
    const { coupon } = useSettingEventsQuery(1);
    checkCoupon = coupon;
  } else {
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
