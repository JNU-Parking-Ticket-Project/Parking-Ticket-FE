import { Txt } from '@quokka/design-system';
import { AnnouncementListItem } from './AnnouncementListItem';
import { useAnounceListQuery } from '../../hooks/react-query/useAnnounce';

const datas = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  title: '전남대학교 주차권 1차 신청일은 12-03일 입니다. 아래 공지에서 확인',
  date: '11-26',
}));

interface AnnouncementListProps {
  page: number;
}

export const AnnouncementList = ({ page }: AnnouncementListProps) => {
  const { announceListData } = useAnounceListQuery(page);

  return (
    <div className="max-w-[786px] mx-auto mt-12 w-full">
      <div className="border-b-4 flex justify-between p-3">
        <Txt size="h4">제목</Txt>
        <Txt size="h4" className="w-24 text-center">
          등록날짜
        </Txt>
      </div>
      {announceListData.announces.map(({ ...props }) => (
        <AnnouncementListItem key={props.announceId} {...props} />
      ))}
    </div>
  );
};
