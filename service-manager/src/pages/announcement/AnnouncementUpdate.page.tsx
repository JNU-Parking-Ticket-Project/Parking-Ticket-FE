import { AnnouncementUpdate } from '../../components/announcement/AnnouncementUpdate';
import { useParams } from 'react-router-dom';

export const AnnouncementUpdatePage = () => {
  const { announcementId } = useParams();
  if (!announcementId) throw new Error('잘못된 접근입니다.');
  if (isNaN(+announcementId)) throw new Error('잘못된 접근입니다.');

  return <AnnouncementUpdate announceId={+announcementId} />;
};
