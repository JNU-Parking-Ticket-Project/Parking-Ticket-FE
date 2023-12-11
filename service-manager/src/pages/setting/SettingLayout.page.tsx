import { Outlet } from 'react-router-dom';
import { SettingNavbar } from '../../components/setting/SettingNavbar';

export const SettingLayout = () => {
  return (
    <>
      <SettingNavbar />
      <Outlet />
    </>
  );
};
