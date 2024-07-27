import {
  createContext,
  PropsWithChildren,
  RefCallback,
  RefObject,
  useContext,
} from "react";

import { AlignType, DirectionType } from "../DropdownMenu.tsx";
import { PositionType } from "../../../types";

type DropdownMenuSubContextValue = {
  isOpen: boolean;
  direction: DirectionType;
  subTriggerRef: RefObject<HTMLDivElement>;
  subContentRef: RefCallback<HTMLDivElement>;
  subPosition: PositionType;
  handleSubTriggerMouseOver: VoidFunction;
  handleSubTriggerMouseOut: VoidFunction;
  handleSubContentMouseOver: VoidFunction;
  handleSubContentMouseOut: VoidFunction;
  align: AlignType;
};

const DropdownMenuSubContext =
  createContext<DropdownMenuSubContextValue | null>(null);

export const useDropdownMenuSubContext = () => {
  const value = useContext(DropdownMenuSubContext);

  if (value === null) {
    throw Error("Cannot find DropdownMenuSubContext");
  }

  return value;
};

export const DropdownMenuSubContextProvider = ({
  children,
  value,
}: PropsWithChildren<{ value: DropdownMenuSubContextValue }>) => {
  return (
    <DropdownMenuSubContext.Provider value={value}>
      {children}
    </DropdownMenuSubContext.Provider>
  );
};
