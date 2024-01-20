import { SettingTime } from '../../components/setting/SettingTime';
import { SettingTable } from '../../components/setting/SettingTable';
import { useParams } from 'react-router-dom';

export const SectionSettingPage = () => {
  const { eventId } = useParams<{ eventId: string }>();

  return (
    <>
      <SettingTime eventId={eventId ?? ''} />
      <SettingTable eventId={eventId ?? ''} />
    </>
  );
};
