import { ChangeEvent } from 'react';
import { InputText } from '../../../../design-system/src';

interface LoginInputBoxProps {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: 'text' | 'password'; // NOTE: If you need more types, add them here.
  name: string;
}

const LoginInputBox = ({
  placeholder,
  value,
  onChange,
  type,
  name,
}: LoginInputBoxProps) => {
  return (
    <div className="w-full">
      <InputText
        designType="box"
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full p-4"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default LoginInputBox;
