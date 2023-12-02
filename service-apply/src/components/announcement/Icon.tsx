import { clsx } from 'clsx';

const iconType = {
  rightArrow:
    'w-4 h-4 before:absolute before:w-2 before:h-2 before:border-r before:border-t before:rotate-45 before:left-1 before:top-1 relative',
  rightDoubleArrow:
    'w-4 h-4 before:absolute before:w-2 before:h-2 before:border-r before:border-t before:rotate-45 before:top-1 relative ' +
    'after:absolute after:w-2 after:h-2 after:border-r after:border-t after:rotate-45 after:left-1 after:top-1',
};

const colorType = {
  primay: 'before:border-[#0255D5] after:border-[#0255D5]',
  secondary: 'before:border-[#777777] after:border-[#777777]',
  error: 'before:border-[#DC0000] after:border-[#DC0000]',
  white: 'before:border-[#FFFFFF] after:border-[#FFFFFF]',
  black: 'before:border-[#0B0B0B] after:border-[#0B0B0B]',
  placeholder: 'before:border-[#B0B0B0] after:border-[#B0B0B0]',
  disabled: 'before:border-[#D9D9D9] after:border-[#D9D9D9]',
};

interface IconProps {
  type: keyof typeof iconType;
  color?: keyof typeof colorType;
  className?: string;
}

export const Icon = ({ type, color = 'black', className }: IconProps) => {
  return (
    <div className={clsx(iconType[type], colorType[color], className)}></div>
  );
};
