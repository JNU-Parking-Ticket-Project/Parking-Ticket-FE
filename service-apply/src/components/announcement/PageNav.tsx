import { useNavigate } from 'react-router-dom';
import { generatePaginationIndexs } from '../../constants/announcement';
import clsx from 'clsx';

interface PageNavProps {
  lastIdx: number;
  currentIdx: number;
}

export const PageNav = ({ lastIdx, currentIdx }: PageNavProps) => {
  const navigate = useNavigate();

  const goLast = () => {
    navigate(`/announcement?pages=${lastIdx}`);
  };
  const goPrev = () => {
    if (currentIdx === 1) return;
    navigate(`/announcement?pages=${currentIdx - 1}`);
  };

  const goNext = () => {
    if (currentIdx === lastIdx) return;
    navigate(`/announcement?pages=${currentIdx + 1}`);
  };

  const goFirst = () => {
    navigate('/announcement?pages=1');
  };

  return (
    <div className="w-[50rem] mx-auto mt-8">
      <div className="text-right">
        <button className="px-1" onClick={goFirst}>
          처음
        </button>
        <button className="px-1" onClick={goPrev}>
          이전
        </button>
        {generatePaginationIndexs(currentIdx, lastIdx).map((page) => (
          <button
            className={clsx(
              page === currentIdx ? 'font-bold' : 'font-light',
              'px-1',
            )}
            onClick={() => {
              navigate(`/announcement?pages=${page}`);
            }}
          >
            {page}
          </button>
        ))}
        <button className="px-1" onClick={goNext}>
          다음
        </button>
        <button className="px-1" onClick={goLast}>
          끝으로
        </button>
      </div>
    </div>
  );
};
