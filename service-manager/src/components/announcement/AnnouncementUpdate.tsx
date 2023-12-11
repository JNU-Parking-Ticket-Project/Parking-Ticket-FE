import { Button } from '@quokka/design-system';
import { Editor } from '@toast-ui/react-editor';
import { useRef, lazy, Suspense } from 'react';
import { useAnnounceUpdate } from '../../hooks/react-query/useAnnounceForm';
import { useAnnounceDetailQuery } from '../../hooks/react-query/useAnnounce';

interface AnnouncementUpdateProps {
  announceId: number;
}

const ToastEditor = lazy(() =>
  import('@toast-ui/react-editor').then((module) => ({
    default: module.Editor,
  })),
);

export const AnnouncementUpdate = ({ announceId }: AnnouncementUpdateProps) => {
  const { announceDetailData } = useAnnounceDetailQuery(announceId);
  const { title, content, setTitle, onUpdate } = useAnnounceUpdate({
    announceId,
    announceTitle: announceDetailData.announceTitle,
    announceContent: announceDetailData.announceContent,
  });
  const editorRef = useRef<Editor>(null);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onUpdateAnnounce = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const editorInstance = editorRef.current?.getInstance();
    const markdown = editorInstance?.getMarkdown();
    onUpdate({
      announceId,
      announceTitle: title,
      announceContent: markdown || '',
    });
  };

  return (
    <form onSubmit={onUpdateAnnounce}>
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={onChangeTitle}
          className="w-full h-12 p-4 text-xl border border-gray-200 rounded-md outline-none"
        />
        <Suspense fallback={<div>Loading...</div>}>
          <ToastEditor
            initialValue={content}
            previewStyle="vertical"
            height="600px"
            initialEditType="markdown"
            useCommandShortcut={true}
            ref={editorRef}
          />
        </Suspense>
      </div>
      <div className="flex justify-end">
        <Button>수정</Button>
      </div>
    </form>
  );
};
