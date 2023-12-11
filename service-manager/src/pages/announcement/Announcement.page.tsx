import { Container, Txt } from '@quokka/design-system';
import { useNavigate, useParams } from 'react-router-dom';
import { useAnounceDetailQuery } from '../../hooks/react-query/useAnnounce';
import { Icon } from '../../components/announcement/Icon';

export const AnnouncementPage = () => {
  const { announcementId } = useParams();
  if (!announcementId) throw new Error('announcementId is required');
  if (isNaN(+announcementId)) throw new Error('announcementId must be number');
  const navigate = useNavigate();

  const { announceDetailData } = useAnounceDetailQuery(+announcementId);
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
      {announceDetailData.announceContent}
    </Container>
  );
};
