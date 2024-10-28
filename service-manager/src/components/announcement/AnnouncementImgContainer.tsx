import { Dispatch, SetStateAction, useState } from 'react';
import Add from '../../assets/add.svg';
import Close from '../../assets/close.png';
import { getPresignedUrl, putImageToS3 } from '../../apis/image.apis';
import { Modal } from '@quokka/design-system';

interface AnnouncementImgContainerProps {
  images: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
}
interface AnnouncementImgListProps extends AnnouncementImgContainerProps {
  addImages: boolean;
}
interface AnnouncementImgProps {
  image: string;
  setImages: Dispatch<SetStateAction<string[]>>;
}
interface AnnouncementImgModalProps {
  image: string;
  isOpen: boolean;
  setIsOpen: () => void;
}
interface AnnouncementAddImgProps
  extends Pick<AnnouncementImgContainerProps, 'setImages'> {}

export default function AnnouncementImgContainer({
  images,
  setImages,
}: AnnouncementImgContainerProps) {
  return (
    <div className="mt-8 flex flex-col gap-3">
      <p>이미지 등록</p>
      <AnnouncementImgList addImages setImages={setImages} images={images} />
    </div>
  );
}

export function AnnouncementImgList({
  images,
  setImages,
  addImages,
}: AnnouncementImgListProps) {
  return (
    <div className="grid grid-cols-4 gap-5">
      {images.map((image) => (
        <AnnouncementImg setImages={setImages} image={image} key={image} />
      ))}
      {addImages && <AnnouncementAddImg setImages={setImages} />}
    </div>
  );
}

export function AnnouncementImg({ image, setImages }: AnnouncementImgProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = (event: React.MouseEvent) => {
    event.stopPropagation();
    setImages((prevImages) => prevImages.filter((img) => img !== image));
  };

  return (
    <>
      <button className="relative" onClick={() => setIsOpen(true)}>
        <img
          src={Close}
          alt="삭제"
          className="absolute top-2 right-2 z-10 bg-white w-6 h-6 rounded-full"
          onClick={handleDelete}
        />
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          role="img"
          className="w-full h-full"
        />
      </button>
      {isOpen && (
        <AnnouncementImgModal
          isOpen={isOpen}
          image={image}
          setIsOpen={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export function AnnouncementImgModal({
  image,
  isOpen,
  setIsOpen,
}: AnnouncementImgModalProps) {
  return (
    <Modal
      className="announcementImg-modal"
      isOpen={isOpen}
      onRequestClose={setIsOpen}
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
      }}
    >
      <img alt="공지사항" src={image} className="mx-auto w-fit max-h-screen" />
    </Modal>
  );
}

function AnnouncementAddImg({ setImages }: AnnouncementAddImgProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const extension = files[0].name.split('.')[1];
      getPresignedUrl(extension)
        .then((res) => {
          putImageToS3(
            res.presignedUrl,
            new File([files[0]], files[0].name),
            extension,
          )
            .then(() => {
              const url = new URL(res.presignedUrl);
              const fileName = url.pathname.slice(1);

              setImages((prev) => [
                ...prev,
                new URL(
                  fileName,
                  import.meta.env.VITE_IMAGE_BASE_URL,
                ).toString(),
              ]);
            })
            .catch(() => {
              alert('이미지 업로드에 실패했습니다.');
            });
        })
        .catch(() => {
          alert(
            '이미지 업로드를 위한 URL 발급에 실패했습니다. 파일은 <파일명.확장자> 형식으로 업로드 되어야 합니다.',
          );
        });
    }
  };

  return (
    <>
      <label
        htmlFor="announcementFile"
        className="cursor-pointer w-full h-full aspect-square bg-slate-100	 flex justify-center items-center"
      >
        <img className="w-20 h-20" src={Add} alt="파일 추가 버튼" />
      </label>
      <input
        id="announcementFile"
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
    </>
  );
}
