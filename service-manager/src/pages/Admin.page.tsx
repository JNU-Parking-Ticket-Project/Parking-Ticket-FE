import { NavContainer } from '../components/common/NavContainer';
import { NavTitle } from '../components/common/NavTitle';

export const AdminPage = () => {
  return (
    <>
      <nav className="flex flex-row">
        <NavTitle />
        <NavContainer />
      </nav>
    </>
  );
};
