import { PropsWithChildren } from 'react';

export const InputFlexWrapper = ({ children }: PropsWithChildren) => {
  return <div className="grid gap-2 min-w-[24rem]">{children}</div>;
};
