import {
  PropsWithChildren,
  RefCallback,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { ModalClose } from './ModalClose';
import { ModalContent } from './ModalContent';
import { ModalOverlay } from './ModalOverlay';
import { ModalPortal } from './ModalPortal';
import { ModalTrigger } from './ModalTrigger';
import { useKeyDown } from './hooks/useKeyDown';
import { ModalContextProvider } from './contexts/ModalContext';
import { useOutsideClick } from './hooks/useOutsideClick';
import { useBoolean } from '../../hooks/useBoolean';

type ModalProps = PropsWithChildren<{
  defaultOpen?: boolean;
  closeOnEscape?: boolean;
  closeOnOutsideClick?: boolean;
}>;

const _Modal = ({
  defaultOpen = false,
  closeOnEscape = false,
  closeOnOutsideClick = false,
  children,
}: ModalProps) => {
  const { value: isOpen, setTrue: open, setFalse: close } = useBoolean();
  const [modalContent, setModalContent] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (defaultOpen) {
      open();
    }
  }, [defaultOpen, open]);

  const modalContentCallbackRef: RefCallback<HTMLDivElement> = useCallback(
    (node) => setModalContent(node),
    []
  );

  const closeModalEscape = useCallback(() => {
    if (!closeOnEscape) {
      return;
    }
    close();
  }, [closeOnEscape, close]);

  useKeyDown('Escape', closeModalEscape);

  const closeModalOnOutsideClick = useCallback(() => {
    if (!closeOnOutsideClick) {
      return;
    }
    close();
  }, [closeOnOutsideClick, close]);

  useOutsideClick<HTMLDivElement>(modalContent, closeModalOnOutsideClick);

  return (
    <ModalContextProvider
      value={{
        modalContentRef: modalContentCallbackRef,
        isOpen,
        open,
        close,
      }}
    >
      {children}
    </ModalContextProvider>
  );
};

const Modal = {
  Root: _Modal,
  Trigger: ModalTrigger,
  Portal: ModalPortal,
  Overlay: ModalOverlay,
  Content: ModalContent,
  Close: ModalClose,
};

export default Modal;
