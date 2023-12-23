import { Txt } from '@quokka/design-system';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ErrorBoundary from '../../components/common/ErrorBoundary';

export const AnnouncementLayout = () => {
  return (
    <div className="max-w-[1080px] mx-auto mt-12">
      <Txt size="h3" color="primary">
        공지사항
      </Txt>
      <ErrorBoundary>
        <Suspense>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
