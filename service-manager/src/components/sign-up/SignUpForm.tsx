import { InputText, Button, InputTextProps, Txt } from '@quokka/design-system';
import { clsx } from 'clsx';

export const SignUpInputText = ({ className, ...props }: InputTextProps) => {
  return (
    <div className="gap-3 grid grid-cols-5 justify-between items-center mb-2">
      <InputText {...props} className={clsx(className, 'col-span-4')} />
    </div>
  );
};

export const SignUpForm = () => {
  return (
    <form className="flex flex-col gap-4 max-w-[520px] m-auto">
      <SignUpInputText label="이메일" name="email" type="text" required />
      <SignUpInputText
        label="비밀번호"
        name="password"
        type="password"
        required
      />
      <SignUpInputText label="이름" name="studentName" type="text" required />
      <SignUpInputText
        label="전화번호"
        name="phoneNumber"
        type="text"
        required
      />
      <Button className="" color="primary" type="submit">
        신청하기
      </Button>
    </form>
  );
};
