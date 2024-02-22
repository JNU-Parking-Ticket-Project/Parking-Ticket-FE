import { Txt } from '@quokka/design-system';
import { Link } from 'react-router-dom';
import { CouponEventData } from '../../apis/dtos/times.dtos';

export const SettingListItem = ({
  eventId,
  eventStatus,
  eventTitle,
  dateTimePeriod,
}: CouponEventData) => {
  return (
    <Link to={`/setting/${eventId}`}>
      <div className="border-b border-black flex justify-between hover:bg-gray-100 p-3">
        <Txt className="flex-[2_0_0]">{eventTitle}</Txt>
        <Txt className="flex-1 text-center">{eventStatus}</Txt>
        <Txt className="flex-[2_0_0] w-44 text-center">{dateTimePeriod}</Txt>
      </div>
    </Link>
  );
};
