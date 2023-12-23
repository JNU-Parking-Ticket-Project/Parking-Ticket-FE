import { Txt } from '@quokka/design-system';
import { usePeriodQuery } from '../../hooks/react-query/usePeriodQuery';
import { getApplyDateString } from '../../functions/date';

export const ApplyTitle = () => {
  const { startAt } = usePeriodQuery();
  return (
    <>
      <h2 className="border-b-4 border-black mt-3 mb-2 pb-2">
        <Txt size="h3" color="primary" className="mr-5">
          주차권 신청
        </Txt>
        <Txt>신청 기간 : 2023년 12월 15일 14:00</Txt>
      </h2>
      <Txt color="error">
        올바른 서식이 아니라면 신청이 되지 않습니다. 신청 시간 전 임시저장을
        통해 서식이 올바른지 확인하시길 권장드립니다.
      </Txt>
      <Txt>{getApplyDateString(startAt)}</Txt>
    </>
  );
};
