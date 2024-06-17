import {
  MouseEventHandler,
  PropsWithChildren,
  Ref,
  createContext,
  useContext,
} from 'react';

type ModalContextValue = {
  modalContentRef: Ref<HTMLDivElement>;
  isOpen: boolean;
  open: MouseEventHandler;
  close: MouseEventHandler;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export const useModalContext = () => {
  const value = useContext(ModalContext);

  if (value === null) {
    throw Error('Cannot find ModalContext');
  }

  return value;
};

export const ModalContextProvider = ({
  children,
  value,
}: PropsWithChildren<{ value: ModalContextValue }>) => {
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
