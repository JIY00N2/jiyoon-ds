import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { useClient } from '../../hooks/useClient';

export const ModalPortal = ({
  children,
  container = document.body,
}: PropsWithChildren<{ container?: HTMLElement }>) => {
  const isClient = useClient();

  return <>{isClient && createPortal(children, container)}</>;
};
