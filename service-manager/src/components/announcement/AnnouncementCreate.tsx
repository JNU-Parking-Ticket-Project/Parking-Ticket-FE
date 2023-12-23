import { Button, InputText } from '@quokka/design-system';
import { Editor } from '@toast-ui/react-editor';
import { useRef, lazy, Suspense, useState, useEffect } from 'react';
import { useCreateAnnouncement } from '../../hooks/react-query/useAnnounceForm';
import ErrorBoundary from '../common/ErrorBoundary';

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
            minHeight="calc(100vh - 33rem)"
            placeholder="공지사항을 입력해주세요."
            previewHighlight={false}
            ref={editorRef}
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
