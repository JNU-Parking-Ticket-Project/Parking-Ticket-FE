import { Txt } from '@quokka/design-system';
import { Link } from 'react-router-dom';

export const NavTitle = () => {
  return (
    <header>
      <Link to="/apply-list" className="flex flex-col h-42 p-12 pl-0">
        <Txt size="h3">전남대학교</Txt>
        <Txt size="h6">주차권 신청 시스템</Txt>
      </Link>
    </header>
  );
};
