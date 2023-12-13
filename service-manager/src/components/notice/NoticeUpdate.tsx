import { Button } from '@quokka/design-system';
import { Editor } from '@toast-ui/react-editor';
import { useRef, lazy, Suspense } from 'react';
import { useNoticeQuery } from '../../hooks/react-query/useNotice';
import { useNoticeForm } from '../../hooks/useNoticeForm';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

const ToastEditor = lazy(() =>
  import('@toast-ui/react-editor').then((module) => ({
    default: module.Editor,
  })),
);

export const NoticeUpdate = () => {
  const editorRef = useRef<Editor>(null);
  const { noticeData } = useNoticeQuery();
  const { content, onUpdate } = useNoticeForm();

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
        <Suspense fallback={<div>Loading...</div>}>
          <ToastEditor
            initialValue={content}
            previewStyle="vertical"
            previewHighlight={false}
            toolbarItems={[
              ['heading', 'bold', 'italic', 'strike'],
              ['hr', 'quote'],
              ['ul', 'ol', 'task', 'indent', 'outdent'],
              ['table', 'link'],
              ['code', 'codeblock'],
            ]}
            height="600px"
            initialEditType="markdown"
            useCommandShortcut={true}
            ref={editorRef}
          />
        </Suspense>
        <div className="flex justify-end">
          <Button type="submit">저장</Button>
        </div>
      </form>
    </>
  );
};
