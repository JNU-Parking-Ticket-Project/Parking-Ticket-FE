import { Button, InputText } from '@quokka/design-system';
import { Editor } from '@toast-ui/react-editor';
import { useRef, lazy, Suspense, useState } from 'react';
import { useCreateAnnouncement } from '../../hooks/react-query/useAnnounceForm';
import ErrorBoundary from '../common/ErrorBoundary';
import { getPresignedUrl, putImageToS3 } from '../../apis/image.apis';

const ToastEditor = lazy(() =>
  import('@toast-ui/react-editor').then((module) => ({
    default: module.Editor,
  })),
);

export const AnnouncementCreate = () => {
  const [title, setTitle] = useState('');
  const editorRef = useRef<Editor>(null);
  const { onCreate } = useCreateAnnouncement();

  const onPostAnnounce = () => {
    const editorInstance = editorRef.current?.getInstance();
    if (!editorInstance) {
      alert('오류가 있습니다 새로고침하여 시도해주세요.');
      return;
    }
    const markdown = editorInstance.getMarkdown();
    if (!markdown || !title) {
      alert('공지사항을 입력해주세요');
      return;
    }
    onCreate({
      announceTitle: title,
      announceContent: markdown,
    });
  };

  const onAddImageBlobHook = (blob: Blob, callback: (url: string) => void) => {
    const extension = blob.name.split('.')[1];

    getPresignedUrl(extension)
      .then((res) => {
        putImageToS3(res.presignedUrl, new File([blob], blob.name), extension)
          .then(() => {
            const url = new URL(res.presignedUrl);
            const fileName = url.pathname.slice(1);
            callback(
              new URL(fileName, import.meta.env.VITE_IMAGE_BASE_URL).toString(),
            );
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

    return;
  };

  return (
    <>
      <InputText
        type="text"
        placeholder="제목을 입력해주세요."
        value={title}
        className="p-3 my-4 w-full text-2xl"
        onChange={(e) => setTitle(e.target.value)}
      />

      <ErrorBoundary>
        <Suspense>
          <ToastEditor
            previewStyle="vertical"
            height="30rem"
            toolbarItems={[
              ['heading', 'bold', 'italic', 'strike'],
              ['hr', 'quote'],
              ['ul', 'ol', 'task', 'indent', 'outdent'],
              ['table', 'link'],
            ]}
            minHeight="calc(100vh - 33rem)"
            placeholder="공지사항을 입력해주세요."
            previewHighlight={false}
            ref={editorRef}
            hooks={{
              addImageBlobHook: onAddImageBlobHook,
            }}
          />
        </Suspense>
      </ErrorBoundary>
      <Button
        className="my-4 float-right px-[4rem]"
        size="small"
        onClick={onPostAnnounce}
      >
        등록
      </Button>
    </>
  );
};
