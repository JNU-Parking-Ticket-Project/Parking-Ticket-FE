import { Suspense } from 'react';
import { ApplyForm } from '../components/apply/ApplyForm';
import { ApplyTitle } from '../components/apply/ApplyTitle';
import { CommonTitle } from '../components/common/CommonTitle';
import ErrorBoundary from '../components/common/ErrorBoundray';
import { Footer } from '../components/common/Footer';
import { MainContainer } from '../components/common/MainContainer';

export const ApplyPage = () => {
  return (
    <>
      <MainContainer>
        <CommonTitle />
        <ApplyTitle />
        <ErrorBoundary>
          <Suspense>
            <ApplyForm />
          </Suspense>
        </ErrorBoundary>
      </MainContainer>
      <Footer />
    </>
  );
};
