import clsx from 'clsx';
import { InputHTMLAttributes, useId } from 'react';

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'password' | 'email' | 'search';
  className?: string;
  labelClassName?: string;
  error?: boolean;
  label?: string;
}

export function InputText({
  type,
  className,
  labelClassName,
  error = false,
  label,
  ...props
}: InputTextProps) {
  const id = useId();

  const inputStatusClassName = error
    ? 'outline-[#DC0000] border-[#DC0000]'
    : 'border-[#1F1F1F]';

  return (
    <>
      <label className={clsx(labelClassName)} htmlFor={id}>
        {label}
        {!props.required ? null : <span className="text-[#DC0000]">*</span>}
      </label>
      <input
        {...props}
        id={id}
        className={clsx('border-b py-2', inputStatusClassName, className)}
      />
    </>
  );
}

export default InputText;
