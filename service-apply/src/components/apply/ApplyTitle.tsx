import { Txt } from '@quokka/design-system';
import { usePeriodQuery } from '../../hooks/react-query/usePeriodQuery';
import { getApplyDateString } from '../../functions/date';

export const ApplyTitle = () => {
  const { startAt } = usePeriodQuery();
  return (
    <h2 className="border-b-4 border-black mt-3 pb-2">
      <Txt size="h3" color="primary" className="mr-5">
        주차권 신청
      </Txt>
      <Txt>{getApplyDateString(startAt)}</Txt>
    </h2>
  );
};
