import { PropsWithChildren } from 'react';
import ReactModal from 'react-modal';

export interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onRequestClose: () => void;
  className: string;
  overLayCss: React.CSSProperties;
  contentCss: React.CSSProperties;
}

export function Modal({
  children,
  isOpen,
  onRequestClose,
  className,
  overLayCss,
  contentCss,
}: ModalProps) {
  const modalElement = document.getElementById('modal-root') ?? undefined;

  return (
    <ReactModal
      className={className}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      appElement={modalElement}
      style={{ overlay: overLayCss, content: contentCss }}
    >
      {children}
    </ReactModal>
  );
}

export default Modal;
