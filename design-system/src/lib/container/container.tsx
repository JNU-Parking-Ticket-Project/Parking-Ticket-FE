import { clsx } from 'clsx';
import { PropsWithChildren } from 'react';

export interface ContainerProps extends PropsWithChildren {
  className?: string;
  size?: keyof typeof sizeType;
}

const sizeType = {
  small: 'p-4',
  medium: 'p-6',
  large: 'p-8',
};

export function Container({
  className,
  children,
  size = 'medium',
}: ContainerProps) {
  return (
    <div
      className={clsx(
        'rounded-lg border border-[#D9D9D9]',
        sizeType[size],
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Container;
