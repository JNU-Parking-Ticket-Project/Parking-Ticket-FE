import { Txt } from '@quokka/design-system';
import { Link } from 'react-router-dom';
import { useAnnounceQuery } from '../../hooks/react-query/useAnnounce';
import clsx from 'clsx';

export const HomeAnnounce = () => {
  const { announceData } = useAnnounceQuery();

  return (
    <div className="my-12 pl-10 border-[#D9D9D9] border rounded-lg flex gap-8 items-center max-sm:my-4 max-sm:pl-4">
      <Txt size="h4" color="primary" className="max-sm:text-lg">
        공지
      </Txt>
      <Link
        to={`/announcement/${announceData.announceId}`}
        className={clsx('text-left flex-1 truncate', {
          'cursor-not-allowed pointer-events-none':
            announceData.announceId <= 0,
        })}
      >
        <Txt size="h6" className="max-lg:text-base">
          {announceData.announceTitle}
        </Txt>
      </Link>
      <Link to="/announcement" className="pr-10 py-8 max-sm:py-4 max-sm:pr-4">
        <Txt size="h6" className="max-lg:text-base">
          더보기
        </Txt>
      </Link>
    </div>
  );
};
