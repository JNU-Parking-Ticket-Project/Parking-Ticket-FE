import { PropsWithChildren } from 'react';

interface MainContainerProps extends PropsWithChildren {}

export const MainContainer = ({ children }: MainContainerProps) => {
  return <main className="max-w-[1280px] m-auto px-12">{children}</main>;
};
