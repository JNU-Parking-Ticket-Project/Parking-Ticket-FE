import { Viewer } from '@toast-ui/react-editor';
import { useRef, lazy, Suspense } from 'react';
import { Button } from '@quokka/design-system';
import { Link } from 'react-router-dom';
import { useNoticeQuery } from '../../hooks/react-query/useNotice';
import ErrorBoundary from '../common/ErrorBoundary';

const ToastViewer = lazy(() =>
  import('@toast-ui/react-editor').then((module) => ({
    default: module.Viewer,
  })),
);

export const NoticeView = () => {
  const { noticeData } = useNoticeQuery();
  const editorRef = useRef<Viewer>(null);
  const content = noticeData.noticeContent;

  return (
    <>
      <ErrorBoundary>
        <Suspense>
          <ToastViewer initialValue={content} ref={editorRef} />
        </Suspense>
      </ErrorBoundary>
      <Link to="/notice-update" className="float-right">
        <Button size="small" color="secondary">
          수정하기
        </Button>
      </Link>
    </>
  );
};
