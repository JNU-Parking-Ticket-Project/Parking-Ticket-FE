import { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import Close from '../../assets/close.png';
import { Modal } from '@quokka/design-system';

interface AnnouncementImgListProps {
  images: string[];
  setImages?: Dispatch<SetStateAction<string[]>>;
  isEditPage?: boolean;
  children?: ReactNode;
}
interface AnnouncementImgProps
  extends Pick<AnnouncementImgListProps, 'setImages' | 'isEditPage'> {
  image: string;
}
interface AnnouncementImgModalProps {
  image: string;
  isOpen: boolean;
  setClose: () => void;
}

export function AnnouncementImgList({
  images,
  setImages,
  isEditPage,
  children,
}: AnnouncementImgListProps) {
  return (
    <div className="grid grid-cols-4 gap-5">
      {images.map((image) => (
        <AnnouncementImg
          isEditPage={isEditPage}
          setImages={setImages}
          image={image}
          key={image}
        />
      ))}
      {children}
    </div>
  );
}

export function AnnouncementImg({
  isEditPage,
  image,
  setImages,
}: AnnouncementImgProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (setImages) {
      setImages((prevImages) => prevImages.filter((img) => img !== image));
    }
  };

  return (
    <>
      <button className="relative" onClick={() => setIsOpen(true)}>
        {isEditPage && (
          <img
            src={Close}
            alt="삭제"
            className="absolute top-2 right-2 z-10 bg-white w-6 h-6 rounded-full"
            onClick={handleDelete}
          />
        )}

        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          role="img"
          className="w-full h-full aspect-square"
        />
      </button>
      {isOpen && (
        <AnnouncementImgModal
          isOpen={isOpen}
          image={image}
          setClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export function AnnouncementImgModal({
  image,
  isOpen,
  setClose,
}: AnnouncementImgModalProps) {
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
}
