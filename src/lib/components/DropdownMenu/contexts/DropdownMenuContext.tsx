import {
  createContext,
  PropsWithChildren,
  RefCallback,
  RefObject,
  useContext,
} from "react";
import { AlignType, DirectionType } from "../DropdownMenu.tsx";
import {
  ArrowPositionType,
  ArrowShapeType,
  PositionType,
} from "../../../types";

type DropdownMenuContextValue = {
  triggerRef: RefObject<HTMLDivElement>;
  contentRef: RefCallback<HTMLDivElement> | null;
  isOpen: boolean;
  defaultOpen: boolean;
  toggle: VoidFunction;
  direction: DirectionType;
  position: PositionType;
  align: AlignType;
  arrowPosition: ArrowPositionType;
  arrowShape: ArrowShapeType;
};

const DropdownMenuContext = createContext<DropdownMenuContextValue | null>(
  null,
);

export const useDropdownMenuContext = () => {
  const value = useContext(DropdownMenuContext);

  if (value === null) {
    throw Error("Cannot find DropdownMenuContext");
  }

  return value;
};

export const DropdownMenuContextProvider = ({
  children,
  value,
}: PropsWithChildren<{ value: DropdownMenuContextValue }>) => {
  return (
    <DropdownMenuContext.Provider value={value}>
      {children}
    </DropdownMenuContext.Provider>
  );
};
