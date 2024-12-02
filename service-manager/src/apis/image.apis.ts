export const getPresignedUrl = async (extension: string) => {
  try {
    const response = await fetch(
      new URL(
        '/api/frontend-image-upload-lambda',
        import.meta.env.VITE_IMAGE_UPLOAD_LAMBDA_URL,
      ),
      {
        method: 'GET',
        headers: {
          'Content-Type': `application/${extension}`,
          'x-extension': extension,
        },
        mode: 'cors',
      },
    );

    if (!response.ok) {
      throw new Error('이미지 업로드를 위한 URL 발급에 실패했습니다.');
    }

    const requestBody = await response.json();

    return requestBody as { presignedUrl: string };
  } catch {
    throw new Error(
      '네트워크 오류로 이미지 업로드를 위한 URL 발급에 실패했습니다.',
    );
  }
};

export const putImageToS3 = async (
  presignedUrl: string,
  file: File,
  extension: string,
) => {
  try {
    const response = await fetch(presignedUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': `application/${extension}`,
      },
      body: file,
    });

    if (!response.ok) {
      throw new Error('이미지 업로드에 실패했습니다.');
    }
  } catch {
    throw new Error('네트워크 오류로 이미지 업로드에 실패했습니다.');
  }
};
