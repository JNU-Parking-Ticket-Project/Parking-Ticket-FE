import { Viewer } from '@toast-ui/react-editor';
import { useState, useRef, lazy, Suspense } from 'react';
import { Button } from '@quokka/design-system';
import { Link } from 'react-router-dom';

const ToastViewer = lazy(() =>
  import('@toast-ui/react-editor').then((module) => ({
    default: module.Viewer,
  })),
);

const INIT_CONTENT = '## 안내사항 \n - 안내사항을 작성해주세요.';

interface NoticeFormProps {
  content: string;
}
export const NoticeView = ({
  content: inintContent = INIT_CONTENT,
}: NoticeFormProps) => {
  const editorRef = useRef<Viewer>(null);
  const [content, setContent] = useState(inintContent);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ToastViewer initialValue={content} ref={editorRef} />
      </Suspense>
      <Link to="/notice-update" className="flex justify-end">
        <Button color="secondary">수정하기</Button>
      </Link>
    </>
  );
};
