import { Button } from '@quokka/design-system';
import { Editor } from '@toast-ui/react-editor';
import { useRef, lazy, Suspense } from 'react';
import { useNoticeQuery } from '../../hooks/react-query/useNotice';
import { useNoticeForm } from '../../hooks/useNoticeForm';
import ErrorBoundary from '../common/ErrorBoundary';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import '@toast-ui/editor/dist/toastui-editor.css';

const ToastEditor = lazy(() =>
  import('@toast-ui/react-editor').then((module) => ({
    default: module.Editor,
  })),
);

export const NoticeUpdate = () => {
  const editorRef = useRef<Editor>(null);
  const { noticeData } = useNoticeQuery();
  const { onUpdate } = useNoticeForm();

  const onUpdateNotice = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const editorInstance = editorRef.current?.getInstance();
    if (!editorInstance) throw new Error('editorInstance is undefined');
    const markdown = editorInstance.getMarkdown();
    if (!markdown) {
      alert('내용을 입력해주세요.');
      return;
    }
    onUpdate({ noticeContent: markdown });
  };

  return (
    <>
      <form
        id="noticeForm"
        method="post"
        onSubmit={onUpdateNotice}
        className="my-4"
      >
        <ErrorBoundary>
          <Suspense>
            <ToastEditor
              initialValue={noticeData?.noticeContent}
              previewStyle="vertical"
              height="30rem"
              minHeight="calc(100vh - 33rem)"
              initialEditType="markdown"
              previewHighlight={false}
              ref={editorRef}
            />
          </Suspense>
        </ErrorBoundary>
        <div className="float-right py-4">
          <Button size="small" className="px-[4rem]" type="submit">
            저장
          </Button>
        </div>
      </form>
    </>
  );
};
