import { Button, InputText, Modal, Txt } from '@quokka/design-system';
import { PropsWithChildren, Suspense, useState } from 'react';
import ErrorBoundary from '../common/ErrorBoundray';
import Delete from '../../assets/delete.svg';

interface ApplyCaptchaModalProps extends PropsWithChildren {
  isOpen: boolean;
  onRequestClose: () => void;
  onSave: () => void;
}

const CaptchaForm = ({ onSubmit }: { onSubmit: () => void }) => {
  return (
    <div>
      <Txt size="h3" className="block text-center pb-4">
        자동 신청 방지
      </Txt>
      <img src="https://www.imperva.com/learn/wp-content/uploads/sites/13/2020/07/textbasierte-captchas.png" />
      <div className="w-full flex justify-center align-center py-4">
        <InputText
          type="text"
          placeholder="정답"
          pattern="[0-9]*"
          className="w-full max-w-lg text-center"
        />
      </div>
      <div className="flex justify-center align-center pt-4">
        <Button
          onClick={onSubmit}
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

export const ApplyCaptchaModal = ({
  isOpen,
  onRequestClose,
  onSave,
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
      {isLoading ? <div>loading</div> : <CaptchaForm onSubmit={onSave} />}
    </Modal>
  );
};
