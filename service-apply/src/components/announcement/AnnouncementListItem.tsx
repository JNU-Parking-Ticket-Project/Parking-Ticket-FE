interface AnnouncementItemProps {
  title: string;
  date: string;
}

// TODO: 아이템 데이터 스키마에 따라 변경해야함.
export const AnnouncementListItem = ({
  title,
  date,
}: AnnouncementItemProps) => {
  return (
    <tr className="border-b px-8">
      <td className="py-2 text-left">{title}</td>
      <td className="py-2 text-right">{date}</td>
    </tr>
  );
};
