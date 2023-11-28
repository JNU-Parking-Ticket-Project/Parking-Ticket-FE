import { AnnouncementListItem } from './AnnouncementListItem';

const datas = [
  {
    id: 1,
    title: '전남대학교 주차권 1차 신청일은 12-03일 입니다. 아래 공지에서 확인',
    date: '11-26',
  },
  {
    id: 2,
    title: '전남대학교 주차권 1차 신청일은 12-03일 입니다. 아래 공지에서 확인',
    date: '11-26',
  },
  {
    id: 3,
    title: '전남대학교 주차권 1차 신청일은 12-03일 입니다. 아래 공지에서 확인',
    date: '11-26',
  },
  {
    id: 4,
    title: '전남대학교 주차권 1차 신청일은 12-03일 입니다. 아래 공지에서 확인',
    date: '11-26',
  },
  {
    id: 5,
    title: '전남대학교 주차권 1차 신청일은 12-03일 입니다. 아래 공지에서 확인',
    date: '11-26',
  },
  {
    id: 6,
    title: '전남대학교 주차권 1차 신청일은 12-03일 입니다. 아래 공지에서 확인',
    date: '11-26',
  },
  {
    id: 7,
    title: '전남대학교 주차권 1차 신청일은 12-03일 입니다. 아래 공지에서 확인',
    date: '11-26',
  },
  {
    id: 8,
    title: '전남대학교 주차권 1차 신청일은 12-03일 입니다. 아래 공지에서 확인',
    date: '11-26',
  },
];
export const AnnouncementList = () => {
  // TODO: 공지사항 목록 map으로 처리하는데, query를 가급적 이 부분에서 사용하면 좋다고 생각합니다.
  return (
    <table className="w-[50rem] mx-auto mt-12">
      <thead>
        <tr className="border-b-4">
          <th className="text-left py-2">제목</th>
          <th className="text-right py-2">등록날짜</th>
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
