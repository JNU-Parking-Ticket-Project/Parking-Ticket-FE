import { CheckBoxProps } from './option-button';
import OptionButton from './option-button';

export function Radio({ ...props }: CheckBoxProps) {
  return <OptionButton {...props} type="radio" />;
}

export default Radio;
