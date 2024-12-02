import { Modal } from '@quokka/design-system';

interface AnnouncementImgModalProps {
  image: string;
  isOpen: boolean;
  setClose: () => void;
}

export const AnnouncementImgModal = ({
  image,
  isOpen,
  setClose,
}: AnnouncementImgModalProps) => {
  return (
    <Modal
      className="announcementImg-modal"
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
      <img alt="공지사항" src={image} className="mx-auto w-fit max-h-screen" />
    </Modal>
  );
};
