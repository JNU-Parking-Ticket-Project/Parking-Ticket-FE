import { Link, useNavigate } from 'react-router-dom';
import { generatePaginationIndexs } from '../../constants/announcement';
import clsx from 'clsx';
import { Icon } from './Icon';
import { Txt } from '@quokka/design-system';

interface PageNavProps {
  lastIdx: number;
  currentIdx: number;
}

export const PageNav = ({ lastIdx, currentIdx }: PageNavProps) => {
  return (
    <div className="max-w-[768px] w-full mx-auto my-8">
      <div className="flex items-center justify-end">
        {currentIdx !== 1 ? (
          <>
            <Link className="p-1" to={`/announce?pages=${1}`}>
              <Icon type="rightDoubleArrow" className="rotate-180" />
            </Link>
            <Link to={`/announce?pages=${currentIdx - 1}`} className="px-1">
              <Icon type="rightArrow" className="rotate-180" />
            </Link>
          </>
        ) : (
          <>
            <div className="cursor-not-allowed p-1">
              <Icon
                type="rightDoubleArrow"
                color="disabled"
                className="rotate-180"
              />
            </div>
            <div className="cursor-not-allowed p-1">
              <Icon type="rightArrow" color="disabled" className="rotate-180" />
            </div>
          </>
        )}
        {generatePaginationIndexs(currentIdx, lastIdx).map((page) => (
          <Link key={page} to={`/announce?pages=${page}`}>
            <Txt
              color={page === currentIdx ? 'black' : 'placeholder'}
              className="text-xl p-2"
            >
              {page}
            </Txt>
          </Link>
        ))}
        {currentIdx !== lastIdx ? (
          <>
            <Link to={`/announce?pages=${currentIdx + 1}`} className="px-1">
              <Icon type="rightArrow" />
            </Link>
            <Link className="px-1" to={`/announce?pages=${lastIdx}`}>
              <Icon type="rightDoubleArrow" />
            </Link>
          </>
        ) : (
          <>
            <div className="cursor-not-allowed p-1">
              <Icon type="rightDoubleArrow" color="disabled" />
            </div>
            <div className="cursor-not-allowed p-1">
              <Icon type="rightArrow" color="disabled" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
