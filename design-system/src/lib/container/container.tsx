import { clsx } from 'clsx';
import { PropsWithChildren } from 'react';

export interface ContainerProps extends PropsWithChildren {
  className?: string;
  size?: keyof typeof sizeType;
}

const sizeType = {
  small: 'px-4 py-2',
  medium: 'px-6 py-4',
  large: 'px-8 py-6',
};

export function Container({
  className,
  children,
  size = 'medium',
}: ContainerProps) {
  return (
    <div
      className={clsx(
        'shadow-[0_0_4px_4px_rgba(17,12,34,0.20)] bg-white round-lg',
        sizeType[size],
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Container;
