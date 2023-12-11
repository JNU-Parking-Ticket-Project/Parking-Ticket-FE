import { Button, Modal, Txt } from '@quokka/design-system';
import { useNavigate } from 'react-router-dom';
import { useAnnounceDelete } from '../../hooks/react-query/useAnnounceForm';

interface AnnouncementDeleteModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  announcementId: number;
}

export const AnnouncementDeleteModal = ({
  isOpen,
  onRequestClose,
  announcementId,
}: AnnouncementDeleteModalProps) => {
  const { onDelete } = useAnnounceDelete();
  const navigate = useNavigate();

  const onDeleteAnnouncement = () => {
    onDelete(announcementId);
    navigate('/announcement');
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className="w-[500px] h-[200px] m-auto flex flex-col justify-center items-center"
        overLayCss={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
        }}
        contentCss={{}}
      >
        <Txt size="h4">해당 글을 삭제 하시겠습니까?</Txt>
        <div className="flex flex-row gap-6 mt-4">
          <Button color="primary" onClick={onRequestClose}>
            취소
          </Button>
          <Button color="secondary" onClick={onDeleteAnnouncement}>
            삭제
          </Button>
        </div>
      </Modal>
    </>
  );
};
