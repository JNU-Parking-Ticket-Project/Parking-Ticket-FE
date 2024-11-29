import { Txt } from '@quokka/design-system';
import { Link } from 'react-router-dom';
import { Announce } from '../../apis/dtos/announce.dtos';

export const AnnouncementListItem = ({
  announceId,
  announceCreatedAt,
  announceTitle,
}: Omit<Announce, 'announceContent' | 'imageUrls'>) => {
  const date = new Date(announceCreatedAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    <Link to={`/announcement/${announceId}`}>
      <div className="border-b border-black flex justify-between hover:bg-gray-100 p-3">
        <Txt>{announceTitle}</Txt>
        <Txt className="w-24 text-center">{`${year}-${month}-${day}`}</Txt>
      </div>
    </Link>
  );
};
