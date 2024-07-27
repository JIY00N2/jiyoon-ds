import {
  PropsWithChildren,
  useRef,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useBoolean } from "../../hooks/useBoolean.ts";
import { useClientRect } from "../../hooks/useClientRect.ts";
import { DropdownMenuSubContextProvider } from "./contexts/DropdownMenuSubContext.tsx";
import { DirectionType } from "./DropdownMenu.tsx";
import { PositionType } from "../../types";
import { getContentPosition } from "../../utils/getContentPosition.ts";

export type AlignType = "left" | "center" | "right";

type DropdownMenuProps = PropsWithChildren<{
  direction?: DirectionType;
  margin?: number;
  align?: AlignType;
}>;

export const DropdownMenuSub = ({
  children,
  direction = "right",
  margin = 10,
  align = "center",
}: DropdownMenuProps) => {
  const subTriggerRef = useRef<HTMLDivElement | null>(null);
  const [subContentRect, subContentCallbackRef] =
    useClientRect<HTMLDivElement>();
  const [subPosition, setSubPosition] = useState<PositionType>({});

  const leaveDelayTimeoutRef = useRef<ReturnType<typeof setInterval>>(-1);

  const { value: isOpen, setTrue: open, setFalse: close } = useBoolean();

  const handleSubTriggerMouseOver = useCallback(() => {
    clearTimeout(leaveDelayTimeoutRef.current);
    open();
  }, [open]);

  const handleSubTriggerMouseOut = useCallback(() => {
    clearTimeout(leaveDelayTimeoutRef.current);

    if (isOpen) {
      leaveDelayTimeoutRef.current = setTimeout(() => {
        close();
      }, 200);
    }
  }, [isOpen, close]);

  const handleSubContentMouseOver = useCallback(() => {
    clearTimeout(leaveDelayTimeoutRef.current);
    open();
  }, [open]);

  const handleSubContentMouseOut = useCallback(() => {
    close();
  }, [close]);

  useEffect(() => {
    if (!subTriggerRef.current || !subContentRect) {
      return;
    }
    const subTrigger = subTriggerRef.current;
    const subTriggerRect = subTrigger.getBoundingClientRect();

    setSubPosition(
      getContentPosition(direction, subTriggerRect, subContentRect, margin),
    );
  }, [direction, margin, subContentRect]);

  return (
    <DropdownMenuSubContextProvider
      value={{
        isOpen,
        direction,
        subTriggerRef,
        handleSubTriggerMouseOver,
        handleSubTriggerMouseOut,
        handleSubContentMouseOver,
        handleSubContentMouseOut,
        subContentRef: subContentCallbackRef,
        subPosition,
        align,
      }}
    >
      {children}
    </DropdownMenuSubContextProvider>
  );
};
