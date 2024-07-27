import { PropsWithChildren, useRef, useEffect, useState } from "react";
import { DropdownMenuContextProvider } from "./contexts/DropdownMenuContext.tsx";
import { DropdownMenuContent } from "./DropdownMenuContent.tsx";
import { DropdownMenuTrigger } from "./DropdownMenuTrigger.tsx";
import { DropdownMenuPortal } from "./DropdownMenuPortal.tsx";
import { DropdownMenuItem } from "./DropdownMenuItem.tsx";
import { DropdownMenuSeparator } from "./DropdownMenuSeparator.tsx";
import { DropdownMenuSub } from "./DropdownMenuSub.tsx";
import { DropdownMenuSubTrigger } from "./DropdownMenuSubTrigger.tsx";
import { DropdownMenuSubContent } from "./DropdownMenuSubContent.tsx";
import { useBoolean } from "../../hooks/useBoolean.ts";
import { useClientRect } from "../../hooks/useClientRect.ts";
import { DropdownMenuArrow } from "./DropdownMenuArrow.tsx";
import { getArrowShape } from "../../utils/getArrowShape.ts";
import { getArrowPosition } from "../../utils/getArrowPosition.ts";
import { ArrowPositionType, ArrowShapeType, PositionType } from "../../types";
import { getContentPosition } from "../../utils/getContentPosition.ts";

export type AlignType = "left" | "center" | "right";

export type DirectionType = "top" | "left" | "right" | "bottom";

type DropdownMenuProps = PropsWithChildren<{
  direction?: DirectionType;
  align?: AlignType;
  defaultOpen?: boolean;
  margin?: number;
  offset?: number;
  arrowColor?: string;
  subDirection?: "left" | "right";
  subMargin?: number;
}>;

const _DropdownMenu = ({
  children,
  direction = "bottom",
  align = "center",
  defaultOpen = false,
  margin: initialMargin,
  offset = 10,
  arrowColor = "black",
}: DropdownMenuProps) => {
  const margin = initialMargin ? offset + initialMargin : offset * 2;
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const [contentRect, contentCallbackRef] = useClientRect<HTMLDivElement>();
  const [position, setPosition] = useState<PositionType>({});
  const [arrowShape, setArrowShape] = useState<ArrowShapeType>({});
  const [arrowPosition, setArrowPosition] = useState<ArrowPositionType>({});

  const { value: isOpen, toggle } = useBoolean();

  useEffect(() => {
    if (!triggerRef.current || !contentRect) {
      return;
    }

    const trigger = triggerRef.current;
    const triggerRect = trigger.getBoundingClientRect();

    setPosition(
      getContentPosition(direction, triggerRect, contentRect, margin),
    );

    setArrowPosition(getArrowPosition(direction, contentRect, offset));

    setArrowShape(getArrowShape(direction, offset, arrowColor));
  }, [arrowColor, contentRect, direction, margin, offset]);

  return (
    <DropdownMenuContextProvider
      value={{
        triggerRef,
        contentRef: contentCallbackRef,
        isOpen,
        defaultOpen,
        toggle,
        position,
        direction,
        align,
        arrowPosition,
        arrowShape,
      }}
    >
      {children}
    </DropdownMenuContextProvider>
  );
};

const DropdownMenu = {
  Root: _DropdownMenu,
  Trigger: DropdownMenuTrigger,
  Portal: DropdownMenuPortal,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  Separator: DropdownMenuSeparator,
  Arrow: DropdownMenuArrow,
  Sub: DropdownMenuSub,
  SubTrigger: DropdownMenuSubTrigger,
  SubContent: DropdownMenuSubContent,
};

export default DropdownMenu;
