import { Modal, Txt } from '@quokka/design-system';
import { Suspense, useState } from 'react';
import { CaptchaForm } from './CaptchaForm';
import { Spinner } from '../../assets/Spinner';
import ErrorBoundary from '../common/ErrorBoundray';
import { useCaptchaForm } from '../../hooks/apply/useCaptchaForm';

interface ApplyCaptchaModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const ApplyCaptchaModal = ({
  isOpen,
  onRequestClose,
}: ApplyCaptchaModalProps) => {
  const { isLoading, input, handleInput, captchaImageUrl, handleSubmit } =
    useCaptchaForm({
      closeModal: onRequestClose,
    });

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
          <Txt size="h6" className="text-center">
            신청 접수 중입니다. 잠시만 기다려주세요.
          </Txt>
          <Txt size="h6" className="text-center">
            새로고침 시 신청이 취소됩니다.
          </Txt>
          <div className="w-full">
            <Spinner />
          </div>
        </div>
      ) : (
        <CaptchaForm
          codeInput={input}
          handleCodeInput={handleInput}
          captchaImageUrl={captchaImageUrl}
          handleSubmit={handleSubmit}
        />
      )}
    </Modal>
  );
};
