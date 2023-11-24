import clsx from 'clsx';

const colorType = {
  primay: 'text-[#0255D5]',
  secondary: 'text-[#777777]',
  error: 'text-[#DC0000]',
  white: 'text-[#FFFFFF]',
  black: 'text-[#0B0B0B]',
  placeholder: 'text-[#B0B0B0]',
  disabled: 'text-[#D9D9D9]',
};

const sizeType = {
  base: 'text-base',
  h6: 'text-xl',
  h5: 'text-xl font-semibold',
  h4: 'text-2xl font-semibold',
  h3: 'text-3xl font-semibold',
  h2: 'text-6xl font-semibold',
  h1: 'text-7xl font-semibold',
};

export interface TxtProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    React.PropsWithChildren {
  color?: keyof typeof colorType;
  size?: keyof typeof sizeType;
}

export function Txt({
  color = 'black',
  size = 'base',
  children,
  className,
  ...props
}: TxtProps) {
  return (
    <span
      {...props}
      className={clsx(colorType[color], sizeType[size], className)}
    >
      {children}
    </span>
  );
}

export default Txt;
