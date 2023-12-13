import { Button } from '@quokka/design-system';
import { Editor } from '@toast-ui/react-editor';
import { useRef, lazy, Suspense } from 'react';
import { useAnnounceForm } from '../../hooks/react-query/useAnnounceForm';
import ErrorBoundary from '../common/ErrorBoundary';

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
    if (!editorInstance) throw new Error('editorInstance is undefined');
    const markdown = editorInstance?.getMarkdown();
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
      <form id="announceForm" method="post" onSubmit={onSubmitAnnounce}>
        <div className="">
          <label
            htmlFor="announceTitle"
            className="block text-sm font-medium text-gray-700"
          ></label>
          <input
            type="text"
            name="announceTitle"
            id="announceTitle"
            placeholder="제목을 입력해주세요."
            value={title}
            className="p-3 my-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full text-2xl border-gray-300 rounded-lg"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <ErrorBoundary>
          <Suspense>
            <ToastEditor
              previewStyle="vertical"
              height="600px"
              initialValue={content}
              initialEditType="markdown"
              placeholder="공지사항을 입력해주세요."
              ref={editorRef}
            />
            <Button type="submit">등록</Button>
          </Suspense>
        </ErrorBoundary>
      </form>
    </>
  );
};
