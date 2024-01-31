import { useSettingEventsQuery } from '../react-query/useSetting';

export const useSectionBoard = (pageIndex: number) => {
  const { coupon: pageCoupon } = useSettingEventsQuery(pageIndex);
  const { coupon: forCreateCoupon } = useSettingEventsQuery(1);

  const canCreate = !forCreateCoupon.couponEvents.some(
    (event) => event.eventStatus === 'OPEN' || event.eventStatus === 'READY',
  );
  return { coupon: pageCoupon, canCreate };
};
