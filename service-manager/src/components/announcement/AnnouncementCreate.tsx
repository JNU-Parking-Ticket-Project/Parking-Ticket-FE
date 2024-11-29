import { Button, InputText, Txt } from '@quokka/design-system';
import { Editor } from '@toast-ui/react-editor';
import { useRef, lazy, Suspense, useState } from 'react';
import { useCreateAnnouncement } from '../../hooks/react-query/useAnnounceForm';
import ErrorBoundary from '../common/ErrorBoundary';
import { AnnouncementImgList } from './AnnouncementImg';
import { AnnouncementAddImg } from './AnnouncementAddImg';

const ToastEditor = lazy(() =>
  import('@toast-ui/react-editor').then((module) => ({
    default: module.Editor,
  })),
);

export const AnnouncementCreate = () => {
  const [title, setTitle] = useState('');
  const editorRef = useRef<Editor>(null);
  const { onCreate } = useCreateAnnouncement();
  const [images, setImages] = useState<string[]>([]);

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
      imageUrls: images,
    });
  };

  const onAddImageBlobHook = (blob: Blob) => {
    alert('하단에서 이미지를 등록해주세요.');
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
      <div className="mt-8 flex flex-col gap-3">
        <Txt size="h4">이미지 등록</Txt>
        <AnnouncementImgList isEditPage setImages={setImages} images={images}>
          <AnnouncementAddImg setImages={setImages} />
        </AnnouncementImgList>
      </div>
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
