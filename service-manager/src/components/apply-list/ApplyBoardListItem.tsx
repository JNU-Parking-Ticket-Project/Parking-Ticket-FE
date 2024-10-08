import { Txt } from '@quokka/design-system';
import { Link } from 'react-router-dom';
import { CouponEventData } from '../../apis/dtos/times.dtos';

export const ApplyBoardListItem = ({
  eventId,
  eventStatus,
  eventTitle,
  dateTimePeriod,
}: CouponEventData) => {
  return (
    <Link to={`/apply-list/${eventId}`}>
      <div className="border-b border-black flex justify-between hover:bg-gray-100 p-3">
        <Txt className="flex-[2_0_0]">{eventTitle}</Txt>
        <Txt className="w-12 text-center">{eventStatus}</Txt>
        <Txt className="flex-1 w-44 text-center">{dateTimePeriod}</Txt>
      </div>
    </Link>
  );
};
