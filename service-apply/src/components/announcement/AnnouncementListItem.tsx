import { Txt } from '@quokka/design-system';
import { Link } from 'react-router-dom';

interface AnnouncementItemProps {
  id: number;
  title: string;
  date: string;
}

// TODO: 아이템 데이터 스키마에 따라 변경해야함.
export const AnnouncementListItem = ({
  id,
  title,
  date,
}: AnnouncementItemProps) => {
  return (
    <Link to={`/announce/${id}`}>
      <div className="border-b border-black flex justify-between hover:bg-gray-100 p-3">
        <Txt>{title}</Txt>
        <Txt className="w-24 text-center">{date}</Txt>
      </div>
    </Link>
  );
};
