import { Button } from '@quokka/design-system';
import { Editor } from '@toast-ui/react-editor';
import { useState, useRef, lazy, Suspense } from 'react';
import { useNoticeQuery, useNoticeMutate } from '../../hooks/useNotice';
import { useNoticeForm } from '../../hooks/react-query/useNoticeForm';
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
  const { state, dispatch, onSubmit } = useNoticeForm({
    content: noticeData?.noticeContent || '# 안내 사항',
  });

  const onSubmitNotice = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const editorInstance = editorRef.current?.getInstance();
    const markdown = editorInstance?.getMarkdown() ?? '';
    dispatch({ type: 'content', payload: markdown });
    onSubmit();
  };

  return (
    <>
      <form
        id="noticeForm"
        method="post"
        onSubmit={onSubmitNotice}
        className="my-4"
      >
        <Suspense fallback={<div>Loading...</div>}>
          <ToastEditor
            initialValue={state.content}
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
