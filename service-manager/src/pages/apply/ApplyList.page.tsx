import { useParams } from 'react-router-dom';
import { ApplyList } from '../../components/apply-list/ApplyList';

export const ApplyListPage = () => {
  const { eventId } = useParams();
  if (!eventId) return <div>잘못된 접근입니다.</div>;

  return <ApplyList eventId={eventId} />;
};
