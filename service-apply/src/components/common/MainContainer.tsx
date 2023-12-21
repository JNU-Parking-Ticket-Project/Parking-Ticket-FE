import { PropsWithChildren } from 'react';
import Background from '../../assets/background.png';
import clsx from 'clsx';

interface MainContainerProps extends PropsWithChildren {}

export const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <main className="min-h-[calc(100dvh-11rem)] m-auto px-12 max-sm:px-4">
      <img
        src={Background}
        className={clsx(
          'absolute right-0 top-0 -z-50',
          location.pathname !== '/' && 'opacity-[.43]',
        )}
      />
      {children}
    </main>
  );
};
