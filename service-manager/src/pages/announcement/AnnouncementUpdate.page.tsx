import { Txt } from '@quokka/design-system';
import { AnnouncementUpdate } from '../../components/announcement/AnnouncementUpdate';
import { useParams } from 'react-router-dom';

export const AnnouncementUpdatePage = () => {
  const { announcementId } = useParams();
  if (!announcementId) throw new Error('announcementId is required');
  if (isNaN(+announcementId)) throw new Error('announcementId must be number');

  return (
    <>
      <div>
        <Txt size="h3" color="primary">
          공지사항 수정
        </Txt>
        <AnnouncementUpdate announceId={+announcementId} />
      </div>
    </>
  );
};
