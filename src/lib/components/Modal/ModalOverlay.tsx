import { ComponentProps } from 'react';
import { useModalContext } from './contexts/ModalContext';

export const ModalOverlay = ({ style, ...props }: ComponentProps<'div'>) => {
  const { isOpen } = useModalContext();

  if (!isOpen) {
    return <></>;
  }

  return (
    <div
      {...props}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        position: 'fixed',
        inset: '0px',
        ...style,
      }}
    />
  );
};
