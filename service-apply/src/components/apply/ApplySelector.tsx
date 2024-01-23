import { SelectHTMLAttributes, useId } from 'react';
import { Txt } from '@quokka/design-system';
import {
  AffiliationList,
  AFFILIATION_LIST,
} from 'service-apply/src/constants/affiliation';

interface ParkingSection {
  sectionNumber: number;
  sectionMajor: string;
}

interface SectionSelectorProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  type: string;
  options: ParkingSection[];
}

interface AffiliationSelectorProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  type: string;
  options: AffiliationList[];
}

export const SectionSelector = ({
  label,
  type,
  options,
  ...props
}: SectionSelectorProps) => {
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
          <option key={options.sectionNumber} value={options.sectionNumber}>
            {options.sectionMajor}
          </option>
        ))}
      </select>
    </div>
  );
};

export const AffiliationSelector = ({
  label,
  type,
  options,
  ...props
}: AffiliationSelectorProps) => {
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
          <option key={options.label} value={options.value}>
            {options.label}
          </option>
        ))}
      </select>
    </div>
  );
};
