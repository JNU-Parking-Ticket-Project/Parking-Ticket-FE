import { Dispatch, SetStateAction } from 'react';
import { getPresignedUrl, putImageToS3 } from '../../apis/image.apis';
import Add from '../../assets/add.svg';

interface AnnouncementAddImgProps {
  setImages?: Dispatch<SetStateAction<string[]>>;
}

export function AnnouncementAddImg({ setImages }: AnnouncementAddImgProps) {
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

              if (setImages) {
                setImages((prev) => [
                  ...prev,
                  new URL(
                    fileName,
                    import.meta.env.VITE_IMAGE_BASE_URL,
                  ).toString(),
                ]);
              }
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
        accept=".png, .jpg, .jpeg"
        onChange={onFileChange}
      />
    </>
  );
}
