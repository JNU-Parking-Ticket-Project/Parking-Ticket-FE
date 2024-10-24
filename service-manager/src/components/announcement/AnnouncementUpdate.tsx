import { Button } from '@quokka/design-system';
import { Editor } from '@toast-ui/react-editor';
import { useRef, lazy, Suspense, useState } from 'react';
import { useAnnounceUpdate } from '../../hooks/react-query/useAnnounceForm';
import { useAnnounceDetailQuery } from '../../hooks/react-query/useAnnounce';
import ErrorBoundary from '../common/ErrorBoundary';
import { getPresignedUrl, putImageToS3 } from '../../apis/image.apis';

interface AnnouncementUpdateProps {
  announceId: number;
}

const ToastEditor = lazy(() =>
  import('@toast-ui/react-editor').then((module) => ({
    default: module.Editor,
  })),
);

export const AnnouncementUpdate = ({ announceId }: AnnouncementUpdateProps) => {
  const { announceDetailData } = useAnnounceDetailQuery(announceId);
  const [title, setTitle] = useState(announceDetailData.announceTitle);
  const { onUpdate } = useAnnounceUpdate();

  const editorRef = useRef<Editor>(null);

  const onUpdateAnnounce = () => {
    const editorInstance = editorRef.current?.getInstance();
    if (!editorInstance) throw new Error('editorInstance is undefined');
    const markdown = editorInstance?.getMarkdown();
    if (!markdown || !title) {
      alert('공지사항을 입력해주세요');
      return;
    }
    onUpdate({
      announceId,
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
      <input
        type="text"
        placeholder="제목을 입력해주세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full h-12 p-4 my-4 text-xl border border-gray-200 rounded-md outline-none"
      />
      <ErrorBoundary>
        <Suspense>
          <ToastEditor
            initialValue={announceDetailData.announceContent}
            toolbarItems={[
              ['heading', 'bold', 'italic', 'strike'],
              ['hr', 'quote'],
              ['ul', 'ol', 'task', 'indent', 'outdent'],
              ['table', 'link'],
            ]}
            previewStyle="vertical"
            height="30rem"
            minHeight="calc(100vh - 33rem)"
            previewHighlight={false}
            ref={editorRef}
            hooks={{
              addImageBlobHook: onAddImageBlobHook,
            }}
          />
        </Suspense>
      </ErrorBoundary>
      <Button
        size="small"
        className="float-right my-4 px-[4rem]"
        onClick={onUpdateAnnounce}
      >
        수정
      </Button>
    </>
  );
};
