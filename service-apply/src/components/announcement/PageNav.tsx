import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import { Txt } from '@quokka/design-system';
import { generatePaginationIndexs } from '../../functions/generator';

interface PageNavProps {
  lastIdx: number;
  currentIdx: number;
}

const PrevNavLinkGroup = ({ currentIdx }: { currentIdx: number }) => {
  if (currentIdx > 1) {
    return (
      <>
        <Link className="p-1" to={`/announcement?pages=${1}`}>
          <Icon type="rightDoubleArrow" className="rotate-180" />
        </Link>
        <Link to={`/announcement?pages=${currentIdx - 1}`} className="px-1">
          <Icon type="rightArrow" className="rotate-180" />
        </Link>
      </>
    );
  }
  return (
    <>
      <div className="cursor-not-allowed p-1">
        <Icon type="rightDoubleArrow" color="disabled" className="rotate-180" />
      </div>
      <div className="cursor-not-allowed p-1">
        <Icon type="rightArrow" color="disabled" className="rotate-180" />
      </div>
    </>
  );
};

const NextNavLinkGroup = ({
  currentIdx,
  lastIdx,
}: {
  currentIdx: number;
  lastIdx: number;
}) => {
  if (currentIdx < lastIdx) {
    return (
      <>
        <Link to={`/announcement?pages=${currentIdx + 1}`} className="px-1">
          <Icon type="rightArrow" />
        </Link>
        <Link className="px-1" to={`/announcement?pages=${lastIdx}`}>
          <Icon type="rightDoubleArrow" />
        </Link>
      </>
    );
  }
  return (
    <>
      <div className="cursor-not-allowed p-1">
        <Icon type="rightDoubleArrow" color="disabled" />
      </div>
      <div className="cursor-not-allowed p-1">
        <Icon type="rightArrow" color="disabled" />
      </div>
    </>
  );
};

export const PageNav = ({ lastIdx, currentIdx }: PageNavProps) => {
  return (
    <div className="max-w-[768px] w-full mx-auto my-8">
      <div className="flex items-center justify-end">
        <PrevNavLinkGroup currentIdx={currentIdx} />
        {generatePaginationIndexs(currentIdx, lastIdx).map((page) => (
          <Link
            key={page}
            to={`/announcement?pages=${page}`}
            className="w-6 text-center"
          >
            <Txt
              color={page === currentIdx ? 'black' : 'placeholder'}
              className="text-xl"
            >
              {page}
            </Txt>
          </Link>
        ))}
        <NextNavLinkGroup currentIdx={currentIdx} lastIdx={lastIdx} />
      </div>
    </div>
  );
};
