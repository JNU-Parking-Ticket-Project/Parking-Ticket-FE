import clsx from 'clsx';
import { InputHTMLAttributes, useId } from 'react';

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'password' | 'email' | 'search';
  designType?: 'box' | 'underline';
  className?: string;
  labelClassName?: string;
  error?: boolean;
  label?: string;
}

const getBorderClassName = (
  designType: InputTextProps['designType'],
  error: boolean,
) => {
  if (error) {
    return 'border-[#DC0000] rounded-lg';
  }

  switch (designType) {
    case 'box':
      return 'border border-[#D9D9D9] rounded-lg';
    case 'underline':
      return 'border-b border-[#0B0B0B]';
    default:
      return '';
  }
};

export function InputText({
  designType = 'underline',
  className,
  labelClassName,
  error = false,
  label,
  ...props
}: InputTextProps) {
  const id = useId();
  return (
    <>
      <label className={clsx(`${labelClassName} flex flex-row`)} htmlFor={id}>
        {label}
        {!props.required ? null : <span className="text-[#DC0000]">*</span>}
      </label>
      <input
        {...props}
        id={id}
        className={clsx(
          'p-3 text-[#0B0B0B]',
          getBorderClassName(designType, error),
          className,
        )}
      />
    </>
  );
}

export default InputText;
