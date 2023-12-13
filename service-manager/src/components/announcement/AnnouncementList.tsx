import { Txt } from '@quokka/design-system';
import { AnnouncementListItem } from './AnnouncementListItem';
import { Announce } from '../../apis/dtos/announce.dtos';

interface AnnouncementListProps {
  announcementListData: Omit<Announce, 'announceContent'>[];
}

export const AnnouncementList = (
  { announcementListData: data }: AnnouncementListProps = {
    announcementListData: [],
  },
) => {
  return (
    <div className="max-w-[786px] mx-auto mt-12 w-full">
      <div className="border-b-4 flex justify-between p-3">
        <Txt size="h4">제목</Txt>
        <Txt size="h4" className="w-24 text-center">
          등록날짜
        </Txt>
      </div>
      {data.map((announce) => (
        <AnnouncementListItem key={announce.announceId} {...announce} />
      ))}
    </div>
  );
};
