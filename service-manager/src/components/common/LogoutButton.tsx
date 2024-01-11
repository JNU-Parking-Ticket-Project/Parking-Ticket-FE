import { Button, Txt } from '@quokka/design-system';
import { useLogout } from '../../hooks/useLogout';

export const LogoutButton = () => {
  const { onLogout } = useLogout();

  return (
    <Button
      color='secondary'
      size='small'
      className="py-2 px-4 rounded-lg"
      onClick={() => {
        onLogout();
      }}
    >
     로그아웃
    </Button>
  );
};

