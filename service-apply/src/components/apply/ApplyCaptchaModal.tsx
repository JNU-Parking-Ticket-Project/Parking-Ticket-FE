import { Modal, Txt } from '@quokka/design-system';
import { CaptchaForm } from './CaptchaForm';
import { useCaptchaForm } from '../../hooks/apply/useCaptchaForm';
import Loader from '../common/Loader';

interface ApplyCaptchaModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  safeClose: () => void;
}

export const ApplyCaptchaModal = ({
  isOpen,
  onRequestClose,
  safeClose,
}: ApplyCaptchaModalProps) => {
  const {
    isLoading,
    onClearInput,
    input,
    handleInput,
    captchaImageUrl,
    handleSubmit,
  } = useCaptchaForm({
    closeModal: onRequestClose,
  });

  return (
    <Modal
      className="captcha-modal"
      isOpen={isOpen}
      onRequestClose={safeClose}
      overLayCss={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      contentCss={{
        padding: '2rem',
        width: '80%',
        maxWidth: '44rem',
        backgroundColor: 'white',
        boxShadow: '0px 0px 4px 4px rgba(17, 12, 34, 0.10)',
        borderRadius: '1rem',
      }}
    >
      {isLoading ? (
        <div className="flex flex-col justify-center align-center gap-1">
          <Txt size="h6" className="text-center font-bold">
            신청 접수 중입니다. 잠시만 기다려주세요.
          </Txt>
          <Txt size="h6" className="text-center">
            새로고침하거나 모달 바깥창을 누르면 신청이 취소됩니다.
          </Txt>
          <div className="w-full flex justify-center mt-4">
            <Loader color="#0255D5" />
          </div>
        </div>
      ) : (
        <CaptchaForm
          codeInput={input}
          onClearInput={onClearInput}
          handleCodeInput={handleInput}
          captchaImageUrl={captchaImageUrl}
          handleSubmit={handleSubmit}
        />
      )}
    </Modal>
  );
};
