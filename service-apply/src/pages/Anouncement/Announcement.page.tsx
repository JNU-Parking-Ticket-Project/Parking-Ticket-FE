import { Container } from '@quokka/design-system';
import { useParams } from 'react-router-dom';

export const AnnouncementPage = () => {
  const { announcementId } = useParams();

  return (
    <Container className="w-full my-12 h-3/4" size="large">
      {/* content here. */}
    </Container>
  );
};
