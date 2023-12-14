import { Txt } from '@quokka/design-system';
import { usePeriod } from '../../hooks/react-query/usePeriod';
import { parseISO8601ToFormatString } from '../../functions/date';

export const getApplyDateString = (startAt: string, endAt: string) => {
  return `${parseISO8601ToFormatString(startAt)} ~ ${parseISO8601ToFormatString(
    endAt,
  )}`;
};

export const ApplyTitle = () => {
  const { startAt, endAt } = usePeriod();
  return (
    <h2 className="border-b-4 border-black mt-3 pb-2">
      <Txt size="h3" color="primary" className="mr-5">
        주차권 신청
      </Txt>
      <Txt>신청기간: {getApplyDateString(startAt, endAt)}</Txt>
    </h2>
  );
};
