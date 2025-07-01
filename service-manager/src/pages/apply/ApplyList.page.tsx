import { useParams } from 'react-router-dom';
import { ApplyList } from '../../components/apply-list/ApplyList';
import ErrorBoundary from '../../components/common/ErrorBoundary';
import { Suspense } from 'react';

export const ApplyListPage = () => {
  const { eventId } = useParams();
  if (!eventId) return <div>잘못된 접근입니다.</div>;

  return (
    <ErrorBoundary>
      <Suspense>
        <ApplyList eventId={eventId} />
      </Suspense>
    </ErrorBoundary>
  );
};
