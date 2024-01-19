import { Button } from '@quokka/design-system';
import { Link } from 'react-router-dom';
import { SettingList } from '../../components/setting/SettingList';
import { useSectionBoard } from '../../hooks/useSetting/useSectionBoard';

export const SettingBoardPage = () => {
  const { coupon } = useSectionBoard();
  return (
    <div>
      <Link to={'/setting/create'}>
        <Button size="small" className="float-right">
          생성하기
        </Button>
      </Link>
      <SettingList couponEvnets={coupon} />
    </div>
  );
};
