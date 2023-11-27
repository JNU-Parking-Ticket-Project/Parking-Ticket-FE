import { AnnouncementListItem } from './AnnouncementListItem';

export const AnnouncementList = () => {
  return (
    <table className="w-[50rem] mx-auto mt-12">
      <thead>
        <tr className="border-b-4">
          <th className="text-left py-2">제목</th>
          <th className="text-right py-2">등록날짜</th>
        </tr>
      </thead>
      <tbody>
        <AnnouncementListItem
          title="전남대학교 주차권 1차 신청일은 12-03일 입니다. 아래 공지에서 확인"
          date="11-26"
        />
        <AnnouncementListItem
          title="전남대학교 주차권 1차 신청일은 12-03일 입니다. 아래 공지에서 확인"
          date="11-26"
        />
        <AnnouncementListItem
          title="전남대학교 주차권 1차 신청일은 12-03일 입니다. 아래 공지에서 확인"
          date="11-26"
        />
        <AnnouncementListItem
          title="전남대학교 주차권 1차 신청일은 12-03일 입니다. 아래 공지에서 확인"
          date="11-26"
        />
        <AnnouncementListItem
          title="전남대학교 주차권 1차 신청일은 12-03일 입니다. 아래 공지에서 확인"
          date="11-26"
        />
        <AnnouncementListItem
          title="전남대학교 주차권 1차 신청일은 12-03일 입니다. 아래 공지에서 확인"
          date="11-26"
        />
      </tbody>
    </table>
  );
};
