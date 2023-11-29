import { Txt } from '@quokka/design-system';
import { AnnouncementListItem } from './AnnouncementListItem';

const datas = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  title: '전남대학교 주차권 1차 신청일은 12-03일 입니다. 아래 공지에서 확인',
  date: '11-26',
}));

export const AnnouncementList = () => {
  // TODO: 공지사항 목록 map으로 처리하는데, query를 가급적 이 부분에서 사용하면 좋다고 생각합니다.
  return (
    <table className="max-w-[786px] mx-auto mt-12 w-full">
      <thead>
        <tr className="border-b-4">
          <th className="text-left py-2">
            <Txt size="h4">제목</Txt>
          </th>
          <th className="text-right py-2 w-fit">
            <Txt size="h4">등록날짜</Txt>
          </th>
        </tr>
      </thead>
      <tbody>
        {datas.map(({ id, ...props }) => (
          <AnnouncementListItem key={id} {...props} />
        ))}
      </tbody>
    </table>
  );
};
