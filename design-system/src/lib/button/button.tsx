import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { clsx } from 'clsx';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  className?: string;
  color?: keyof typeof colorType;
  size?: keyof typeof sizeType;
  disabled?: boolean;
}

const colorType = {
  primary: 'bg-[#0255D5] text-[#FFFFFF]',
  secondary: 'bg-[#D9D9D9]',
  error: 'bg-[#DC0000] text-[#FFFFFF]',
};

const sizeType = {
  small: 'px-6 py-2',
  medium: 'px-12 py-4',
  large: 'px-24 py-6',
};

export function Button({
  className,
  children,
  color = 'primary',
  size = 'medium',
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        'rounded-lg transition-all duration-150 ease-in-out',
        disabled
          ? 'bg-[#D9D9D9] text-[#777777] border-none cursor-not-allowed'
          : colorType[color],
        sizeType[size],
        className,
      )}
    >
      {children}
    </button>
  );
}

export default Button;
