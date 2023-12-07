import { InputText, Button } from '@quokka/design-system';
import { FormContainer } from '../common/FormContainer';
import { InputFlexWrapper } from './InputFlexWrapper';

export const PasswordResetForm = () => {
  return (
    <FormContainer title="비밀번호 재설정">
      <InputFlexWrapper>
        <InputText
          type="text"
          className="flex-[1_0_7rem]"
          label="비밀번호"
          labelClassName="w-28"
          placeholder="새로운 비밀번호 입력"
          name="password"
        />
      </InputFlexWrapper>
      <InputFlexWrapper>
        <InputText
          type="password"
          className="flex-[1_0_7rem]"
          label="비밀번호 재설정"
          labelClassName="w-28"
          placeholder="새로운 비밀번호 확인"
          name="confirmPassword"
        />
      </InputFlexWrapper>
      <Button size="small" className="mt-8 w-full">
        변경하기
      </Button>
    </FormContainer>
  );
};
