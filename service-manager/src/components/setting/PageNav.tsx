import { Link } from 'react-router-dom';
import { Txt } from '@quokka/design-system';
import { generatePaginationIndexs } from '../../functions/announcement';
import { PAGE_FIRST } from '../../constants/announcement';
import { Icon } from './Icon';

interface PageNavProps {
  lastIdx: number;
  currentIdx: number;
}

const PrevNavLinkGroup = ({ currentIdx }: { currentIdx: number }) => {
  if (currentIdx > PAGE_FIRST) {
    return (
      <>
        <Link className="p-1" to={`/setting?page=${PAGE_FIRST}`}>
          <Icon type="rightDoubleArrow" className="rotate-180" />
        </Link>
        <Link to={`/setting?page=${currentIdx - 1}`} className="px-1">
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
        <Link to={`/setting?page=${currentIdx + 1}`} className="px-1">
          <Icon type="rightArrow" />
        </Link>
        <Link className="px-1" to={`/setting?page=${lastIdx}`}>
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
    <div className="my-8 flex items-center justify-end">
      <PrevNavLinkGroup currentIdx={currentIdx} />
      {generatePaginationIndexs(currentIdx, lastIdx).map((page) => (
        <Link
          key={page}
          to={`/setting?page=${page}`}
          className="w-6 text-center"
        >
          <Txt
            color={page === currentIdx ? 'black' : 'placeholder'}
            className="text-xl"
          >
            {page + 1}
          </Txt>
        </Link>
      ))}
      <NextNavLinkGroup currentIdx={currentIdx} lastIdx={lastIdx} />
    </div>
  );
};
