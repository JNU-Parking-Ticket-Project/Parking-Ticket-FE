import { Button, Txt } from '@quokka/design-system';
import { Editor } from '@toast-ui/react-editor';
import { useRef, lazy, Suspense, useState } from 'react';
import { useAnnounceUpdate } from '../../hooks/react-query/useAnnounceForm';
import { useAnnounceDetailQuery } from '../../hooks/react-query/useAnnounce';
import ErrorBoundary from '../common/ErrorBoundary';
import { AnnouncementImgList } from './AnnouncementImg';
import { AnnouncementAddImg } from './AnnouncementAddImg';

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
  const [title, setTitle] = useState(announceDetailData.announceTitle);
  const [imageUrls, setImageUrls] = useState<string[]>(
    announceDetailData.imageUrls,
  );

  const { onUpdate } = useAnnounceUpdate();

  const editorRef = useRef<Editor>(null);

  const onUpdateAnnounce = () => {
    const editorInstance = editorRef.current?.getInstance();
    if (!editorInstance) throw new Error('editorInstance is undefined');
    const markdown = editorInstance?.getMarkdown();
    if (!markdown || !title) {
      alert('공지사항을 입력해주세요');
      return;
    }
    onUpdate({
      announceId,
      announceTitle: title,
      announceContent: markdown,
      imageUrls: imageUrls,
    });
  };

  const onAddImageBlobHook = () => {
    alert('하단에서 이미지를 등록해주세요.');
  };

  return (
    <>
      <input
        type="text"
        placeholder="제목을 입력해주세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full h-12 p-4 my-4 text-xl border border-gray-200 rounded-md outline-none"
      />
      <ErrorBoundary>
        <Suspense>
          <ToastEditor
            initialValue={announceDetailData.announceContent}
            toolbarItems={[
              ['heading', 'bold', 'italic', 'strike'],
              ['hr', 'quote'],
              ['ul', 'ol', 'task', 'indent', 'outdent'],
              ['table', 'link'],
            ]}
            previewStyle="vertical"
            height="30rem"
            minHeight="calc(100vh - 33rem)"
            previewHighlight={false}
            ref={editorRef}
            hooks={{
              addImageBlobHook: onAddImageBlobHook,
            }}
          />
        </Suspense>
      </ErrorBoundary>
      <div className="mt-8 flex flex-col gap-3">
        <Txt size="h4">이미지 수정</Txt>
        <AnnouncementImgList
          isEditPage
          setImageUrls={setImageUrls}
          imageUrls={imageUrls}
        >
          <AnnouncementAddImg setImageUrls={setImageUrls} />
        </AnnouncementImgList>
      </div>
      <Button
        size="small"
        className="float-right my-4 px-[4rem]"
        onClick={onUpdateAnnounce}
      >
        수정
      </Button>
    </>
  );
};
