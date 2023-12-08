import { Txt } from '@quokka/design-system';
import { Link } from 'react-router-dom';
import { useAnounceQuery } from '../../hooks/react-query/useAnnounce';
import clsx from 'clsx';

export const HomeAnnounce = () => {
  const { announceData } = useAnounceQuery();

  return (
    <div className="my-12 pl-10 border-[#D9D9D9] border rounded-lg flex gap-8 items-center">
      <Txt size="h4" color="primary">
        공지
      </Txt>
      <Link
        to={`/announcement/${announceData.announceId}`}
        className={clsx('text-left flex-1 truncate', {
          'cursor-not-allowed pointer-events-none':
            announceData.announceId <= 0,
        })}
      >
        <Txt size="h6">{announceData.announceTitle}</Txt>
      </Link>
      <Link to="/announcement" className="pr-10 py-8">
        <Txt size="h6">더보기</Txt>
      </Link>
    </div>
  );
};
