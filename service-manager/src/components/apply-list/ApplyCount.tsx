import { Txt } from '@quokka/design-system';
import { useAllRegistrationQuery } from '../../hooks/react-query/useRegistration';
import {
  useSectorQueryById,
  useSectorsQuery,
} from '../../hooks/react-query/useSetting';

interface ApplyCountProps {
  eventId: string;
  sector: string;
}

export const ApplyCount = ({ eventId, sector }: ApplyCountProps) => {
  const { sectorSettingData } = useSectorQueryById(eventId);
  const { registrations } = useAllRegistrationQuery(eventId);

  const applicantNumber =
    registrations?.filter((data) => data.sectorNum === sector) ?? [];
  const limit = sectorSettingData?.find((data) => data.sectorNumber === sector);
  const noCompactCount = registrations?.filter((data) => !data.isCompact)
    .length;

  return (
    <div className="flex flex-col gap-2">
      <Txt size="h6" color="black">
        {`구간정원: ${Math.min(
          applicantNumber.length,
          limit?.sectorCapacity ?? 0,
        )}명 / ${limit?.sectorCapacity ?? 0}명`}
      </Txt>
      <Txt size="h6" color="black">
        {`예비정원: ${Math.max(
          applicantNumber.length - (limit?.sectorCapacity ?? 0),
          0,
        )}명 / ${limit?.reserve ?? 0}명`}
      </Txt>
      <Txt size="h6" color="black">
        {`경차 아닌 학생 정원: ${noCompactCount}명 / ${registrations.length}명`}
      </Txt>
    </div>
  );
};
