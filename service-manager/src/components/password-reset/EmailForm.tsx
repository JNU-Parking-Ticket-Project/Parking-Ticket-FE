import { Button, InputText } from '@quokka/design-system';
import { InputFlexWrapper } from './InputFlexWrapper';
import { FormContainer } from '../common/FormContainer';

export const EmailForm = () => {
  return (
    <FormContainer title="본인인증 이메일 보내기">
      <InputFlexWrapper>
        <InputText
          type="text"
          placeholder="asdf1234@jnu.ac.kr"
          label="email"
          required={false}
          className="w-full"
        />
      </InputFlexWrapper>
      <Button size="small" className="mt-8 w-full" color="primary">
        email 인증하기
      </Button>
    </FormContainer>
  );
};
