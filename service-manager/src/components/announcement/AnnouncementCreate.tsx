import { Button, Txt } from '@quokka/design-system';
import { Editor } from '@toast-ui/react-editor';
import { useRef, lazy, Suspense } from 'react';
import { useAnnounceForm } from '../../hooks/react-query/useAnnounceForm';
import { useAnnounceCreateMutate } from '../../hooks/react-query/useAnnounce';

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
  const { postAnnounce } = useAnnounceCreateMutate();
  const { title, setTitle, content, onSubmit } = useAnnounceForm();

  const onSubmitAnnounce = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const editorInstance = editorRef.current?.getInstance();
    const markdown = editorInstance?.getMarkdown();
    console.log(title, markdown);
    onSubmit({
      announceTitle: title,
      announceContent: markdown || '',
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
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
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
      </form>
    </>
  );
};
