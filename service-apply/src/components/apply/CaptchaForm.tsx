import { useCaptchaForm } from '../../hooks/apply/useCaptchaForm';
import { Txt, InputText, Button } from '@quokka/design-system';

interface CaptchaFormProps {
  handleSave: ({
    inputCode,
    answerCode,
  }: {
    inputCode: string;
    answerCode: string;
  }) => void;
  handleSubmitLoading: () => void;
}

export const CaptchaForm = ({
  handleSave,
  handleSubmitLoading,
}: CaptchaFormProps) => {
  const { input, handleInput, captchaImageUrl, handleSubmit } = useCaptchaForm({
    postRegistration: handleSave,
  });

  return (
    <div>
      <Txt size="h3" className="block text-center pb-4">
        자동 신청 방지
      </Txt>
      <div className="flex justify-center align-center">
        <img src={`https://${captchaImageUrl}`} />
      </div>
      <div className="w-full flex justify-center align-center py-4">
        <InputText
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="정답"
          pattern="[0-9]*"
          className="w-full max-w-lg text-center"
        />
      </div>
      <div className="flex justify-center align-center pt-4">
        <Button
          onClick={() => {
            handleSubmitLoading();
            handleSubmit();
          }}
          color="primary"
          size="small"
          className="px-8"
        >
          확인
        </Button>
      </div>
    </div>
  );
};
