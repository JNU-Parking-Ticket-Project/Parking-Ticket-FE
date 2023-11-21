import OptionButton from './option-button';
import { CheckBoxProps } from './option-button';

export function CheckBox({ ...props }: CheckBoxProps) {
  return <OptionButton {...props} type="checkbox" />;
}

export default CheckBox;
