import { Button } from '@quokka/design-system';
import { Link } from 'react-router-dom';

export const SettingBoardPage = () => {
  return (
    <div>
      <Link to={'/setting/create'}>
        <Button size="small" className="float-right">
          생성하기
        </Button>
      </Link>
      <h1>SettingBoardPage</h1>
    </div>
  );
};
