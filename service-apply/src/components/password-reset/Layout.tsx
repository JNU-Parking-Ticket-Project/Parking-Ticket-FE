import { PropsWithChildren } from 'react';
import Footer from '../common/Footer';

// TODO: main-page merge시 footer 교체
export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <header>
        <h1 className="text-4xl">전남대학교 주차권 신청 시스템</h1>
      </header>
      <main className="flex items-center justify-center h-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};
