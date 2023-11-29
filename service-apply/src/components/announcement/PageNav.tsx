import { Link, useNavigate } from 'react-router-dom';
import { generatePaginationIndexs } from '../../constants/announcement';
import clsx from 'clsx';

interface PageNavProps {
  lastIdx: number;
  currentIdx: number;
}

export const PageNav = ({ lastIdx, currentIdx }: PageNavProps) => {
  return (
    <div className="max-w-[768px] w-full mx-auto my-8">
      <div className="text-right">
        <Link to="/announce?pages=1" className="px-1">
          처음
        </Link>
        <Link to={`/announce?pages=${currentIdx - 1}`} className="px-1">
          이전
        </Link>
        {generatePaginationIndexs(currentIdx, lastIdx).map((page) => (
          <Link
            to={`/announce?pages=${page}`}
            className={clsx(
              page === currentIdx ? 'font-bold' : 'font-light',
              'px-1',
            )}
          >
            {page}
          </Link>
        ))}
        <Link to={`/announce?pages=${currentIdx + 1}`} className="px-1">
          다음
        </Link>
        <Link className="px-1" to={`/announce?pages=${lastIdx}`}>
          끝으로
        </Link>
      </div>
    </div>
  );
};
