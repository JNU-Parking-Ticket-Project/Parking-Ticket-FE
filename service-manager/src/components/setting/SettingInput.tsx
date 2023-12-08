import { InputText, InputTextProps } from '@quokka/design-system';

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
    <InputText value={value} {...props} type="text" designType="underline" />
  ) : (
    value
  );
};
