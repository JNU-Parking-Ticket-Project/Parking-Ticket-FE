import { Button, InputText } from '@quokka/design-system';
import { Editor } from '@toast-ui/react-editor';
import { useRef, lazy, Suspense } from 'react';
import { useAnnounceForm } from '../../hooks/react-query/useAnnounceForm';
import ErrorBoundary from '../common/ErrorBoundary';
import { EditorIconImage } from '../../constants/announcement';

const ToastEditor = lazy(() =>
  import('@toast-ui/react-editor').then((module) => ({
    default: module.Editor,
  })),
);

export interface AnnouncementFormProps {
  announceTitle: string;
  announceContent: string;
}

export const AnnouncementCreate = () => {
  const editorRef = useRef<Editor>(null);
  const { title, setTitle, content, onSubmit } = useAnnounceForm();

  const onSubmitAnnounce = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    onSubmit({
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
      <div
        className={`[&_.toastui-editor-toolbar_button]:[background-image:url(${EditorIconImage})]`}
      >
        <ErrorBoundary>
          <Suspense>
            <ToastEditor
              previewStyle="vertical"
              initialValue={content}
              height="30rem"
              minHeight="calc(100vh - 33rem)"
              initialEditType="markdown"
              placeholder="공지사항을 입력해주세요."
              ref={editorRef}
            />
            <Button className="my-4 float-right px-[4rem]" size="small">
              등록
            </Button>
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
};
