import { Txt } from '@quokka/design-system';
import { Link } from 'react-router-dom';
import { CouponEvent } from 'service-manager/src/apis/dtos/times.dtos';

export const SettingListItem = ({
  endAt,
  id,
  startAt,
  title,
  status,
}: CouponEvent) => {
  return (
    <Link to={`/setting/${id}`}>
      <div className="border-b border-black flex justify-between hover:bg-gray-100 p-3">
        <Txt>{title}</Txt>
        <Txt className="w-24 text-center">{status}</Txt>
        <Txt className="w-24 text-center">{startAt}</Txt>
        <Txt className="w-24 text-center">{endAt}</Txt>
      </div>
    </Link>
  );
};
