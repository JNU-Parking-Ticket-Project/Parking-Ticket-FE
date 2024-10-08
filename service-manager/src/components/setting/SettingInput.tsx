import { InputText, InputTextProps, Txt } from '@quokka/design-system';
import { clsx } from 'clsx';

interface SettingInputProps extends Omit<InputTextProps, 'type'> {
  isEdit: boolean;
  value: string;
}

export const SettingInput = ({
  isEdit,
  value,
  ...props
}: SettingInputProps) => {
  return isEdit ? (
    <InputText
      className={clsx('text-center bg-transparent w-full', props.className)}
      value={value}
      {...props}
      type="text"
      designType="underline"
    />
  ) : (
    <Txt className="px-4">{value}</Txt>
  );
};
