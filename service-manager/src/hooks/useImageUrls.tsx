import { SetStateAction } from 'jotai';
import { Dispatch, useState } from 'react';

export const useImageUrls = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const setNewImageUrls = (
    res: { presignedUrl: string },
    setImageUrls: Dispatch<SetStateAction<string[]>>,
  ) => {
    const url = new URL(res.presignedUrl);
    const fileName = url.pathname.slice(1);

    const newFileImageUrl = new URL(
      fileName,
      import.meta.env.VITE_IMAGE_BASE_URL,
    );
    setImageUrls((prev) => [...prev, newFileImageUrl.toString()]);
  };

  return { imageUrls, setImageUrls, setNewImageUrls };
};
