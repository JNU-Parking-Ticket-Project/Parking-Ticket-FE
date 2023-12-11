import { Modal } from '@quokka/design-system';
import { PropsWithChildren, Suspense, useState } from 'react';
import { CaptchaForm } from './CaptchaForm';
import { Spinner } from '../../assets/Spinner';

interface ApplyCaptchaModalProps extends PropsWithChildren {
  isOpen: boolean;
  onRequestClose: () => void;
  handleSave: ({
    inputCode,
    answerCode,
  }: {
    inputCode: string;
    answerCode: string;
  }) => void;
}

export const ApplyCaptchaModal = ({
  isOpen,
  onRequestClose,
  handleSave,
}: ApplyCaptchaModalProps) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Modal
      className="captcha-modal"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
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
        <div className="flex flex-col justify-center align-center">
          <span className="text-center text-lg">
            신청 접수 중입니다. 잠시만 기다려주세요.
          </span>
          <span className="text-center text-lg">
            새로고침 시 신청이 취소됩니다.
          </span>
          <div className="w-full">
            <Spinner />
          </div>
        </div>
      ) : (
        <Suspense>
          <CaptchaForm
            handleSave={handleSave}
            handleSubmitLoading={() => setIsLoading(true)}
          />
        </Suspense>
      )}
    </Modal>
  );
};
