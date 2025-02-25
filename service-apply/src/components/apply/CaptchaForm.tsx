import { ChangeEventHandler, Dispatch, SetStateAction, useEffect } from 'react';
import { Txt, InputText, Button } from '@quokka/design-system';
import { useQueryClient } from '@tanstack/react-query';
import { useCaptchaForm } from 'service-apply/src/hooks/apply/useCaptchaForm';

interface CaptchaFormProps {
  codeInput: string;
  setInput: Dispatch<SetStateAction<string>>;
  handleCodeInput: ChangeEventHandler<HTMLInputElement>;
  captchaImageUrl: string;
  handleSubmit: () => void;
}

export const CaptchaForm = ({
  codeInput,
  setInput,
  handleCodeInput,
  captchaImageUrl,
  handleSubmit,
}: CaptchaFormProps) => {
  const queryClient = useQueryClient();
  const refetchCaptcha = () => {
    // TODO: 쿼리키 상수화
    queryClient.refetchQueries({ queryKey: ['captcha'] });
  };

  useEffect(() => {
    return setInput('');
  }, []);

  return (
    <div>
      <Txt size="h3" className="block text-center pb-4">
        자동 신청 방지
      </Txt>
      <Txt size="sm" className="block text-center pb-4">
        두 정수의 덧/뺄셈(+,-)결과를 입력해주세요.
      </Txt>
      <img className="m-auto" src={`https://${captchaImageUrl}`} />
      <div className="w-full flex justify-center align-center py-4">
        <InputText
          type="text"
          value={codeInput}
          onChange={handleCodeInput}
          placeholder="정답"
          className="w-full max-w-lg text-center"
        />
      </div>
      <div className="flex justify-center align-center pt-4 gap-4">
        <Button size="small" color="secondary" onClick={refetchCaptcha}>
          새로고침
        </Button>
        <form onSubmit={handleSubmit}>
          <Button color="primary" size="small" className="px-8">
            확인
          </Button>
        </form>
      </div>
    </div>
  );
};
