import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { getPresignedUrl, putImageToS3 } from '../../apis/image.apis';
import Add from '../../assets/add.svg';
import { setNewImage } from '../../functions/announcement';

interface AnnouncementAddImgProps {
  setImageUrls: Dispatch<SetStateAction<string[]>>;
}

export const AnnouncementAddImg = ({
  setImageUrls,
}: AnnouncementAddImgProps) => {
  const onFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const extension = files[0].name.split('.').at(-1);

      try {
        const res = await getPresignedUrl(`${extension}`);
        await putImageToS3(
          res.presignedUrl,
          new File([files[0]], files[0].name),
          `${extension}`,
        );
        setNewImage(res, setImageUrls);
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message);
        }
      }
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
};
