import { Button } from '@quokka/design-system';
import { Link, useLocation } from 'react-router-dom';

const NAVBAR_LIST = [
  { name: '구간 인원 설정', path: '/setting/section' },
  { name: '시간 설정', path: '/setting/time' },
];

export const SettingNavbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="py-6">
      <ul className="flex gap-4">
        {NAVBAR_LIST.map((nav) => (
          <li key={nav.name}>
            <Link to={nav.path}>
              <Button
                color={pathname === nav.path ? 'primary' : 'secondary'}
                size="small"
              >
                {nav.name}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
