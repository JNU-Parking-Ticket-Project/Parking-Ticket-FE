import { Txt } from '@quokka/design-system';
import { useAllRegistrationQuery } from '../../hooks/react-query/useRegistration';
import { useSectorQueryById } from '../../hooks/react-query/useSetting';

interface ApplyCountProps {
  eventId: string;
  sector: string;
}

export const ApplyCount = ({ eventId, sector }: ApplyCountProps) => {
  const { sectorSettingData } = useSectorQueryById(eventId);
  const { registrations } = useAllRegistrationQuery(eventId);
  const applicantNumber = registrations?.filter(
    (data) => data.sectorNum === sector,
  );
  const limit = sectorSettingData?.find((data) => data.sectorNumber === sector);

  return (
    <div className="flex flex-col gap-2">
      <Txt size="h6" color="black">
        {`구간정원: ${Math.min(
          applicantNumber.length,
          limit?.reserve ?? 0,
        )}명 / ${limit?.reserve}명`}
      </Txt>
      <Txt size="h6" color="black">
        {`예비정원: ${Math.abs(
          registrations.length - (limit?.reserve ?? 0),
        )}명 / ${limit?.sectorCapacity}명`}
      </Txt>
    </div>
  );
};
