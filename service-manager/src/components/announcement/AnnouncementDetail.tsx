import { Button, Container, Txt } from '@quokka/design-system';
import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import { useAnnounceDetailQuery } from '../../hooks/react-query/useAnnounce';
import { lazy } from 'react';
import { AnnouncementImgList } from './AnnouncementImg';

const ToastViewer = lazy(() =>
  import('@toast-ui/react-editor').then((module) => ({
    default: module.Viewer,
  })),
);

interface AnnouncementDetailProps {
  onOpenModal: () => void;
  announcementId: number;
}

export const AnnouncementDetail = ({
  onOpenModal,
  announcementId,
}: AnnouncementDetailProps) => {
  const { announceDetailData } = useAnnounceDetailQuery(+announcementId);
  const announcementContent = announceDetailData.announceContent;
  const imageUrl = announceDetailData.imageUrl;

  return (
    <Container
      className="min-h-[calc(100dvh-33rem)] my-12 min-w-[35rem]"
      size="large"
    >
      <Link to="/announcement" className="flex items-center py-4 px-2">
        <Icon
          type="rightArrow"
          className="cursor-pointer rotate-180 scale-125"
        />
        뒤로가기
      </Link>
      <div className="float-right flex gap-4">
        <Link to={`/announcement/update/${announcementId}`}>
          <Button size="small" color="primary">
            글 수정
          </Button>
        </Link>
        <Button size="small" color="secondary" onClick={onOpenModal}>
          글 삭제
        </Button>
      </div>
      <h3>
        <Txt size="h3">{announceDetailData.announceTitle}</Txt>
      </h3>
      <div className="flex gap-4 items-center py-5">
        <Txt>등록일자</Txt>
        <span className="h-4 border-black border-l"></span>
        <Txt>
          {new Date(announceDetailData.announceCreatedAt).toLocaleDateString(
            'ko-KR',
            {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            },
          )}
        </Txt>
      </div>
      <ToastViewer initialValue={announcementContent} />
      <div className="mt-8 flex flex-col gap-3">
        <Txt size="h4">이미지</Txt>
        <AnnouncementImgList images={imageUrl} />
      </div>
    </Container>
  );
};
