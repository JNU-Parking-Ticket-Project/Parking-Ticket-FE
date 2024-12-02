import { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import Close from '../../assets/close.svg';
import { AnnouncementImgModal } from './AnnouncementImgModal';

interface AnnouncementImgListProps {
  imageUrls: string[];
  setImageUrls?: Dispatch<SetStateAction<string[]>>;
  isEditPage?: boolean;
  children?: ReactNode;
}

export const AnnouncementImgList = ({
  imageUrls,
  setImageUrls,
  isEditPage,
  children,
}: AnnouncementImgListProps) => {
  return (
    <div className="grid grid-cols-4 gap-5">
      {imageUrls.map((image) => (
        <AnnouncementImg
          isEditPage={isEditPage}
          setImageUrls={setImageUrls}
          image={image}
          key={image}
        />
      ))}
      {children}
    </div>
  );
};

interface AnnouncementImgProps
  extends Pick<AnnouncementImgListProps, 'setImageUrls' | 'isEditPage'> {
  image: string;
}

export const AnnouncementImg = ({
  isEditPage,
  image,
  setImageUrls,
}: AnnouncementImgProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (setImageUrls) {
      setImageUrls((prevImages) => prevImages.filter((img) => img !== image));
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
};
