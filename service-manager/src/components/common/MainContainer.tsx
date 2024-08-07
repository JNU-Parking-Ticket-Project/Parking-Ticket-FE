import { PropsWithChildren } from 'react';
import Background from '../../assets/background.png';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

interface MainContainerProps extends PropsWithChildren {}

export const MainContainer = ({ children }: MainContainerProps) => {
  const location = useLocation();

  return (
    <main className="min-h-[calc(100dvh-11rem)] max-w-[1600px] m-auto px-12">
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
