import { Txt } from '@quokka/design-system';
import { NavTitle } from './NavTitle';
import { Link } from 'react-router-dom';

export const NavContainer = () => {
  return (
    <div className="max-w-[1280px]">
      <nav className="py-9 px-8">
        <Link to="/user" className="mr-12">
          <Txt size="h4">신청 목록</Txt>
        </Link>
        <Link to="/user" className="mr-12">
          <Txt size="h4">공지 사항</Txt>
        </Link>
        <Link to="/user" className="mr-12">
          <Txt size="h4">안내 사항</Txt>
        </Link>
        <Link to="/user" className="mr-12">
          <Txt size="h4">관리자 설정</Txt>
        </Link>
      </nav>
    </div>
  );
};
