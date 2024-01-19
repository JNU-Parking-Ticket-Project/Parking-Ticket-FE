import { Txt } from '@quokka/design-system';
import { Announce } from '../../apis/dtos/announce.dtos';
import { SettingListItem } from './SettingListItem';

interface SettingListProps {
  settingListData: Omit<Announce, 'announceContent'>[];
}

export const SettingList = (
  { settingListData: data }: SettingListProps = {
    settingListData: [],
  },
) => {
  return (
    <div className="mx-auto mt-12">
      <div className="border-b-4 flex justify-between p-3">
        <Txt size="h4">제목</Txt>
        <Txt size="h4" className="w-24 text-center">
          등록날짜
        </Txt>
      </div>
      {data.map((announce) => (
        <SettingListItem key={announce.announceId} {...announce} />
      ))}
    </div>
  );
};
