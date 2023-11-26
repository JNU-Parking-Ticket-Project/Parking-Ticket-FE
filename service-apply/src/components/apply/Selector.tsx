import { SelectHTMLAttributes } from 'react';
import { parkingSection } from '../constants/parkingSection';

interface SelectorProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  type: string;
  options: typeof parkingSection;
}

export const Selector = ({ label, type, options, ...props }: SelectorProps) => {
  return (
    <div className="flex justify-between">
      <label htmlFor={label}>{label}</label>
      <select
        {...props}
        id={label}
        className="p-2 w-[22rem] border border-[#D9D9D9] "
      >
        {options.map((options) => (
          <option value={options.sectionNumber}>{options.sectionMajor}</option>
        ))}
      </select>
    </div>
  );
};
