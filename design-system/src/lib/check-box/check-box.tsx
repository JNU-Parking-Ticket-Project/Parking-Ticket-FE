import { clsx } from 'clsx';
import { InputHTMLAttributes } from 'react';

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'checkbox' | 'Radio';
  checked?: boolean;
  checkState?: boolean;
  className?: string;
  color?: keyof typeof colorType;
}

const colorType = {
  true: 'border=[#000000] bg-[#448BF9] text-[#000000]',
  false: 'border=[#000000] bg-[#FFFFFF] text-[#000000]',
};

export function CheckBox({
  type = 'checkbox',
  checked,
  checkState,
  className,
  color = 'false',
  ...props
}: CheckBoxProps) {
  return (
    <input
      type={type}
      {...props}
      className={clsx('border py-2 px-2', className)}
    />
  );
}

export default CheckBox;
