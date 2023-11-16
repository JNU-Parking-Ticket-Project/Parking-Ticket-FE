import { clsx } from 'clsx';
import { InputHTMLAttributes, useId } from 'react';

export interface OptionButtonProps
  extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  labelClassName?: string;
  label?: string;
  type: 'radio' | 'checkbox';
}

function OptionButton({
  className,
  labelClassName,
  label,
  type,
  ...props
}: OptionButtonProps) {
  const id = useId();

  return (
    <>
      <input
        {...props}
        id={id}
        type={type}
        className={clsx('border py-2 px-2', className)}
      />
      <label className={clsx(labelClassName)} htmlFor={id}>
        {label}
      </label>
    </>
  );
}

export interface CheckBoxProps extends Omit<OptionButtonProps, 'type'> {}

export default OptionButton;
