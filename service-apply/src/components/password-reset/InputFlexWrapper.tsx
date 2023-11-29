import { PropsWithChildren } from 'react';

export const InputFlexWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex items-center justify-between gap-13 w-96 gap-2">
      {children}
    </div>
  );
};
