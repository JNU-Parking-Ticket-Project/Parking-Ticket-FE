import { InputText, Button, InputTextProps, Txt } from '@quokka/design-system';
import { clsx } from 'clsx';
import { useSignUpForm } from '../../hooks/useSignUp';

export const SignUpInputText = ({ className, ...props }: InputTextProps) => {
  return (
    <div className="gap-3 grid grid-cols-5 justify-between items-center text-center mb-2">
      <InputText {...props} className={clsx(className, 'col-span-4')} />
    </div>
  );
};

interface EmailInputTextProps extends InputTextProps {
  onEmailValid: () => void;
  emailValid: boolean;
}

export const EmailInputText = ({
  className,
  onEmailValid,
  emailValid,
  ...props
}: EmailInputTextProps) => {
  return (
    <div className="gap-3 grid grid-cols-5 justify-between items-center text-center mb-2">
      <InputText
        {...props}
        className={clsx(className, 'col-span-3')}
        error={!emailValid}
      />
      <Button className="h-full w-max" size="small" onClick={onEmailValid}>
        중복확인
      </Button>
    </div>
  );
};

export const SignUpForm = () => {
  const {
    email,
    name,
    onSignUp,
    password,
    phoneNumber,
    setEmail,
    setName,
    setPassword,
    setPhoneNumber,
    setStudentNumber,
    studentNumber,
    emailValid,
    onEmailValid,
  } = useSignUpForm();

  return (
    <div className="flex flex-col gap-4 max-w-[520px] m-auto">
      <EmailInputText
        className="flex-1"
        label="이메일"
        type="text"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        emailValid={emailValid}
        onEmailValid={onEmailValid}
      />
      {!emailValid && (
        <Txt size="sm" color="error" className="w-full text-right">
          이메일 형식이 올바르지 않습니다.
        </Txt>
      )}
      <SignUpInputText
        label="비밀번호"
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <SignUpInputText
        label="이름"
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <SignUpInputText
        label="전화번호"
        type="text"
        required
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <SignUpInputText
        label="학생번호"
        type="text"
        required
        value={studentNumber}
        onChange={(e) => setStudentNumber(e.target.value)}
      />
      <Button color="primary" onClick={onSignUp}>
        신청하기
      </Button>
    </div>
  );
};
