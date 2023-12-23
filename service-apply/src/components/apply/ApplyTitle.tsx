import { Txt } from '@quokka/design-system';
import { usePeriodQuery } from '../../hooks/react-query/usePeriodQuery';
import { getApplyDateString } from '../../functions/date';
import ErrorBoundary from '../common/ErrorBoundary';
import { Suspense } from 'react';

export const ApplyTitle = () => {
  return (
    <>
      <h2 className="border-b-4 border-black mt-3 mb-2 pb-2">
        <Txt size="h3" color="primary" className="mr-5">
          주차권 신청
        </Txt>
        <ErrorBoundary>
          <Suspense>
            <ApplyStartTime />
          </Suspense>
        </ErrorBoundary>
      </h2>
      <Txt color="error">
        올바른 서식이 아니라면 신청이 되지 않습니다. 신청 시간 전 임시저장을
        통해 서식이 올바른지 확인하시길 권장드립니다.
      </Txt>
    </>
  );
};

const ApplyStartTime = () => {
  const { startAt } = usePeriodQuery();

  return <Txt>{getApplyDateString(startAt)}</Txt>;
};
