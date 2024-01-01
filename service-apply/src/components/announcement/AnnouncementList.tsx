import { Txt } from '@quokka/design-system';
import { AnnouncementListItem } from './AnnouncementListItem';
import { Announce } from 'service-apply/src/apis/dtos/announce.dtos';

interface AnnouncementListProps {
  data: Omit<Announce, 'announceContent'>[];
}

export const AnnouncementList = ({ data }: AnnouncementListProps) => {
  return (
    <div className="max-w-[786px] mx-auto mt-12 w-full">
      <div className="border-b-4 flex justify-between p-3">
        <Txt size="h4" className="max-sm:text-xl">
          제목
        </Txt>
        <Txt size="h4" className="w-24 text-center max-sm:text-xl">
          등록날짜
        </Txt>
      </div>
      {data.map(({ ...props }) => (
        <AnnouncementListItem key={props.announceId} {...props} />
      ))}
    </div>
  );
};
