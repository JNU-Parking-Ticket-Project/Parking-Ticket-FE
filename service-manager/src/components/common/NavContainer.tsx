import { Txt } from '@quokka/design-system';
import { Link } from 'react-router-dom';

const NAV_LIST = [
  {
    name: '신청 목록',
    path: '/apply-list',
  },
  {
    name: '공지 사항',
    path: '/announcement',
  },
  {
    name: '안내 사항',
    path: '/notice',
  },
  {
    name: '관리자 설정',
    path: '/',
  },
];

export const NavContainer = () => {
  return (
    <nav className="h-42 flex justify-center items-center">
      <ul className="flex">
        {NAV_LIST.map((nav) => (
          <li key={nav.name}>
            <Link to={nav.path} className="p-8">
              <Txt size="h4">{nav.name}</Txt>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
