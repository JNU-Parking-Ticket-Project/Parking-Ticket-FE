import { useParams } from 'react-router-dom';
import { AnnouncementDeleteModal } from '../../components/announcement/AnnouncementDeleteModal';
import { useState } from 'react';
import { AnnouncementDetail } from '../../components/announcement/AnnouncementDetail';

export const AnnouncementPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { announcementId } = useParams();

  if (!announcementId) throw new Error('announcementId is required');
  if (isNaN(+announcementId)) throw new Error('announcementId must be number');

  const onCloseModal = () => {
    setIsOpen(false);
  };
  const onOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <AnnouncementDetail
        onOpenModal={onOpenModal}
        announcementId={+announcementId}
      />
      <AnnouncementDeleteModal
        isOpen={isOpen}
        onRequestClose={onCloseModal}
        announcementId={+announcementId}
      />
    </>
  );
};
