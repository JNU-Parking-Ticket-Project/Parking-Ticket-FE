import { Button, Container, Txt } from '@quokka/design-system';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from './Icon';
import { useAnnounceDetailQuery } from '../../hooks/react-query/useAnnounce';

interface AnnouncementDetailProps {
  onOpenModal: () => void;
  announcementId: number;
}

export const AnnouncementDetail = ({
  onOpenModal,
  announcementId,
}: AnnouncementDetailProps) => {
  const { announceDetailData } = useAnnounceDetailQuery(+announcementId);

  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="flex justify-end gap-6">
        <Link to="update">
          <Button color="primary">글 수정</Button>
        </Link>
        <div onClick={onOpenModal}>
          <Button color="secondary">글 삭제</Button>
        </div>
      </div>
      <Container className="w-full my-12 h-3/4" size="large">
        <button className="flex items-center py-4 px-2" onClick={onBack}>
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
    </>
  );
};
