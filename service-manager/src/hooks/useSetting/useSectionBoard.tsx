import { useSettingEventsQuery } from '../react-query/useSetting';

export const useSectionBoard = (pageIndex: number) => {
  const { coupon } = useSettingEventsQuery(pageIndex);
  let checkCoupon = coupon;
  let canCreate = false;
  if (pageIndex !== 1) {
    const { coupon } = useSettingEventsQuery(1);
    checkCoupon = coupon;
  }

  if (coupon.couponEvents.every((event) => event.eventStatus === 'CLOSED')) {
    canCreate = true;
  }
  return { coupon, canCreate };
};
