import { Txt } from '@quokka/design-system';
import { AnnouncementCreate } from '../../components/announcement/AnnouncementCreate';

export const AnnouncementCreatePage = () => {
  return (
    <>
      <div>
        <Txt size="h3" color="primary">
          공지사항 작성
        </Txt>
        <AnnouncementCreate />
      </div>
    </>
  );
};
