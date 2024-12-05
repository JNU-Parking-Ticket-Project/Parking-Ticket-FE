import { Container, Txt } from '@quokka/design-system';
import { useNavigate, useParams } from 'react-router-dom';
import { useAnnounceDetailQuery } from '../../hooks/react-query/useAnnounce';
import { Icon } from '../../components/announcement/Icon';
import { Suspense, lazy } from 'react';
import ErrorBoundary from '../../components/common/ErrorBoundary';
import { AnnouncementImgList } from '../../components/announcement/AnnouncementImg';

const ToastViewer = lazy(() =>
  import('@toast-ui/react-editor').then((module) => ({
    default: module.Viewer,
  })),
);

export const AnnouncementPage = () => {
  const { announcementId } = useParams();
  if (!announcementId) throw new Error('announcementId is required');
  if (isNaN(+announcementId)) throw new Error('announcementId must be number');
  const navigate = useNavigate();

  const { announceDetailData } = useAnnounceDetailQuery(+announcementId);
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Container className="w-full my-12 h-3/4" size="large">
      <button className="flex items-center py-4 px-2" onClick={handleGoBack}>
        <Icon
          type="rightArrow"
          className="cursor-pointer rotate-180 scale-125"
        />
        뒤로가기
      </button>
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
      <ErrorBoundary>
        <Suspense>
          <ToastViewer
            initialValue={announceDetailData.announceContent}
            usageStatistics={false}
          />
        </Suspense>
      </ErrorBoundary>
      {announceDetailData.imageUrls.length !== 0 && (
        <div className="mt-8 flex flex-col gap-3">
          <Txt size="h4">이미지</Txt>
          <AnnouncementImgList imageUrls={announceDetailData.imageUrls} />
        </div>
      )}
    </Container>
  );
};
