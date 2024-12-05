import { useState } from 'react';
import { AnnouncementImgModal } from './AnnouncementImgModal';

interface AnnouncementImgListProps {
  imageUrls: string[];
}

export const AnnouncementImgList = ({
  imageUrls,
}: AnnouncementImgListProps) => {
  return (
    <div className="grid grid-cols-4 gap-5">
      {imageUrls.map((imageUrl) => (
        <AnnouncementImg imageUrl={imageUrl} key={imageUrl} />
      ))}
    </div>
  );
};

interface AnnouncementImgProps {
  imageUrl: string;
}

export const AnnouncementImg = ({ imageUrl }: AnnouncementImgProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="relative" onClick={() => setIsOpen(true)}>
        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
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
          imageUrl={imageUrl}
          setClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
