import { SelectHTMLAttributes, useId } from 'react';
import { Txt } from '@quokka/design-system';

interface ApplySelectorProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value'> {
  label: string;
  type: string;
  options: {
    label: string;
    value: string | null;
  }[];
}

export const ApplySelector = ({
  label,
  type,
  options,
  ...props
}: ApplySelectorProps) => {
  const id = useId();

  return (
    <div className="grid grid-cols-5 items-center">
      <label htmlFor={id}>
        {label}
        {props.required && <Txt color="error">*</Txt>}
      </label>
      <select
        {...props}
        id={id}
        className="p-2 border border-[#D9D9D9] col-span-4 rounded-md"
      >
        {options.map((options) => (
          <option key={options.label} value={options.value ?? undefined}>
            {options.label}
          </option>
        ))}
      </select>
    </div>
  );
};
