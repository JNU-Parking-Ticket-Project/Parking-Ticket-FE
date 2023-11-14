import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { clsx } from 'clsx';

/* eslint-disable-next-line */
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  className?: string;
  color?: keyof typeof colorType;
  size?: keyof typeof sizeType;
}

const colorType = {
  primary:
    'border-[#16ADEA] bg-[#16ADEA] text-[#FFFFFF] focus:shadow-[0px_0px_4rem_.5rem_#A0C5FF7F] hover:border-[#1678EA7F] active:bg-[#0255D5] disabled:bg-[#A0C5FF7F] disabled:border-none disabled:cursor-not-allowed',
  secondary:
    'border-[#1D1D1D] bg-[#1D1D1D] text-[#E7E7E7] focus:shadow-[0px_0px_4rem_.5rem_#A0C5FF7F] hover:border-[#16ADEA] active:bg-[#0255D5] disabled:bg-[#A0C5FF7F] disabled:border-none disabled:cursor-not-allowed',
};

const sizeType = {
  small: 'px-4 py-2',
  medium: 'px-6 py-4',
  large: 'px-8 py-6',
};

export function Button({
  className,
  children,
  color = 'primary',
  size = 'medium',
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        'rounded-md transition-all duration-150 ease-in-out border-2',
        colorType[color],
        sizeType[size],
        className,
      )}
    >
      {children}
    </button>
  );
}

export default Button;
