import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return <div className="w-screen h-screen flex flex-col">{children}</div>;
};

export default Layout;
