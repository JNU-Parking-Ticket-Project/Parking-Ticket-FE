import { Suspense, lazy } from 'react';
import { useInformationQuery } from '../../hooks/react-query/useInformation';

const ToastViewer = lazy(() =>
  import('@toast-ui/react-editor').then((module) => ({
    default: module.Viewer,
  })),
);

export const HomeInformationContent = () => {
  const { information } = useInformationQuery();

  return (
    <Suspense>
      <ToastViewer initialValue={information} />
    </Suspense>
  );
};
