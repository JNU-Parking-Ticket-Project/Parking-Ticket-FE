import { PropsWithChildren } from 'react';

interface MainContainerProps extends PropsWithChildren {}

export const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <main className="min-h-[calc(100dvh-11rem)] max-w-[1280px] m-auto px-12">
      {children}
    </main>
  );
};
