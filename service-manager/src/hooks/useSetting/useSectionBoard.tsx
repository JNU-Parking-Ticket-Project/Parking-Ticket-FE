import { useSettingEventsQuery } from '../react-query/useSetting';

export const useSectionBoard = (pageIndex: number) => {
  const { coupon } = useSettingEventsQuery(pageIndex);
  let checkCoupon = coupon;
  if (pageIndex !== 1) {
    const { coupon } = useSettingEventsQuery(1);
    checkCoupon = coupon;
  }
  const canCreate = !coupon.couponEvents.some(
    (event) => event.eventStatus === 'OPEN' || event.eventStatus === 'READY',
  );
  return { coupon, canCreate };
};
