import { SelectHTMLAttributes, useId } from 'react';
import { parkingSection } from '../constants/parkingSection';

interface SelectorProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  type: string;
  options: typeof parkingSection;
}

export const Selector = ({ label, type, options, ...props }: SelectorProps) => {
  const id = useId();

  return (
    <div className="grid grid-cols-5 justify-between">
      <label htmlFor={id}>{label}</label>
      <select
        {...props}
        id={id}
        className="p-2  border border-[#D9D9D9] col-span-4"
      >
        {options.map((options) => (
          <option value={options.sectionNumber}>{options.sectionMajor}</option>
        ))}
      </select>
    </div>
  );
};
