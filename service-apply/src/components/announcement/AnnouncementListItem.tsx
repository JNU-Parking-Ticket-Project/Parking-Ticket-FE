interface AnnouncementItemProps {
  title: string;
  date: string;
}
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
