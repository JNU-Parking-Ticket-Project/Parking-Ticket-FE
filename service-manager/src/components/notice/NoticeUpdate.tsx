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

  const onUpdateNotice = () => {
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
    <div className="py-4">
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
      <Button
        size="small"
        className="float-right my-4 px-[4rem]"
        type="submit"
        onClick={onUpdateNotice}
      >
        저장
      </Button>
    </div>
  );
};
