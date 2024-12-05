import { Modal } from '@quokka/design-system';

interface AnnouncementImgModalProps {
  imageUrl: string;
  isOpen: boolean;
  setClose: () => void;
}

export const AnnouncementImgModal = ({
  imageUrl,
  isOpen,
  setClose,
}: AnnouncementImgModalProps) => {
  return (
    <Modal
      className="announcement-img-modal"
      isOpen={isOpen}
      onRequestClose={setClose}
      overLayCss={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 20,
        width: '100%',
      }}
      contentCss={{
        borderRadius: '1rem',
        width: '800px',
        position: 'relative',
      }}
    >
      <button
        onClick={setClose}
        className="text-6xl absolute -right-16 -top-16"
      >
        X
      </button>
      <img
        alt="공지사항"
        src={imageUrl}
        className="mx-auto w-fit max-h-screen"
      />
    </Modal>
  );
};
