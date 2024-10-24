export const getPresignedUrl = async (extension: string) => {
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

  const requestBody = await response.json();

  return requestBody as { presignedUrl: string };
};

export const putImageToS3 = async (
  presignedUrl: string,
  file: File,
  extension: string,
) => {
  const response = await fetch(presignedUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': `application/${extension}`,
    },
    body: file,
  });
};
