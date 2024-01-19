import { Txt } from '@quokka/design-system';
import { Link } from 'react-router-dom';
import { Setting } from '../../apis/dtos/setting.dtos';

export const SettingListItem = ({
  settingId,
  settingCreatedAt,
  settingTitle,
}: Omit<Setting, 'settingContent'>) => {
  const date = new Date(settingCreatedAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    <Link to={`/setting/${settingId}`}>
      <div className="border-b border-black flex justify-between hover:bg-gray-100 p-3">
        <Txt>{settingTitle}</Txt>
        <Txt className="w-24 text-center">{`${year}-${month}-${day}`}</Txt>
      </div>
    </Link>
  );
};
