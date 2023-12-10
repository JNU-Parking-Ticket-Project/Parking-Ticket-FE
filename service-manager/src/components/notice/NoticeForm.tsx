import { Button } from '@quokka/design-system';
import { Editor } from '@toast-ui/react-editor';
import { useState, useRef, lazy, Suspense } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
export interface NoticeFormProps {
  content: string;
}

const INIT_CONTENT = `# 안내사항`;

const ToastEditor = lazy(() =>
  import('@toast-ui/react-editor').then((module) => ({
    default: module.Editor,
  })),
);
``;

export const NoticeForm = ({ content }: NoticeFormProps) => {
  const initContent = content || INIT_CONTENT;
  const editorRef = useRef<Editor>(null);
  const [noticeContent, setNoticeContent] = useState(initContent);

  const onSubmitNotice = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const editorInstance = editorRef.current?.getInstance();
    const markdown = editorInstance?.getMarkdown();
    console.log(markdown);
    //TODO: API 연결
  };
  return (
    <form>
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
  );
};
