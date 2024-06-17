import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

export const ModalPortal = ({
  children,
  container = document.body,
}: PropsWithChildren<{ container?: HTMLElement }>) => {
  return <>{createPortal(children, container)}</>;
};
