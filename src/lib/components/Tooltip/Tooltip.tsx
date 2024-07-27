import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { TooltipContextProvider } from "./contexts/TooltipContext";
import { TooltipArrow } from "./TooltipArrow";
import { TooltipContent } from "./TooltipContent";
import { getArrowShape } from "../../utils/getArrowShape";
import { TooltipTrigger } from "./TooltipTrigger";
import { TooltipDirectionToArrowDirectionMap } from "./constants/converter";
import { getArrowPosition } from "../../utils/getArrowPosition";
import { ArrowPositionType, ArrowShapeType, PositionType } from "../../types";
import { getContentPosition } from "../../utils/getContentPosition.ts";
import { useCallbackRef } from "../../hooks/useCallbackRef.ts";

export type DirectionType =
  | "top"
  | "left"
  | "right"
  | "bottom"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"
  | "leftTop"
  | "leftBottom"
  | "rightTop"
  | "rightBottom";

type TooltipProps = PropsWithChildren<{
  direction: DirectionType;
  margin?: number;
  offset?: number;
  enterDelay?: number;
  leaveDelay?: number;
  hoverVisible?: boolean;
  arrowColor?: string;
  forceInvisible?: boolean;
}>;

const _Tooltip = ({
  direction,
  margin: initialMargin,
  offset = 5,
  children,
  enterDelay = 0,
  leaveDelay = 0,
  hoverVisible = false,
  arrowColor = "black",
  forceInvisible = false,
}: TooltipProps) => {
  const margin = initialMargin ? offset + initialMargin : offset * 2;

  const triggerContainerRef = useRef<HTMLDivElement | null>(null);
  const enterDelayTimeoutRef = useRef<number>(-1);
  const leaveDelayTimeoutRef = useRef<number>(-1);

  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);
  const [arrowPosition, setArrowPosition] = useState<ArrowPositionType>({});
  const [arrowShape, setArrowShape] = useState<ArrowShapeType>({});
  const [position, setPosition] = useState<PositionType>({});

  const [tooltipEl, tooltipCallbackRef] = useCallbackRef<HTMLDivElement>();

  const handleTriggerMouseOver = useCallback(() => {
    clearTimeout(enterDelayTimeoutRef.current);
    clearTimeout(leaveDelayTimeoutRef.current);

    enterDelayTimeoutRef.current = setTimeout(
      () => setIsTooltipVisible(true),
      enterDelay,
    );
  }, [enterDelay]);

  const handleTriggerMouseOut = useCallback(() => {
    clearTimeout(enterDelayTimeoutRef.current);
    clearTimeout(leaveDelayTimeoutRef.current);

    if (hoverVisible) {
      leaveDelayTimeoutRef.current = setTimeout(
        () => {
          setIsTooltipVisible(false);
        },
        Math.max(200, leaveDelay),
      );
    } else {
      leaveDelayTimeoutRef.current = setTimeout(() => {
        setIsTooltipVisible(false);
      }, leaveDelay);
    }
  }, [leaveDelay, hoverVisible]);

  const handleTooltipMouseOver = useCallback(() => {
    if (!hoverVisible) {
      return;
    }

    clearTimeout(enterDelayTimeoutRef.current);
    clearTimeout(leaveDelayTimeoutRef.current);

    setIsTooltipVisible(true);
  }, [hoverVisible]);

  const handleTooltipMouseOut = useCallback(() => {
    if (!hoverVisible) {
      return;
    }
    setIsTooltipVisible(false);
  }, [hoverVisible]);

  useEffect(() => {
    if (!triggerContainerRef.current || !tooltipEl) {
      return;
    }

    const trigger = triggerContainerRef.current;
    const triggerRect = trigger.getBoundingClientRect();
    const tooltipRect = tooltipEl.getBoundingClientRect();

    setPosition(
      getContentPosition(direction, triggerRect, tooltipRect, margin),
    );
    setArrowShape(
      getArrowShape(
        TooltipDirectionToArrowDirectionMap[direction],
        offset,
        arrowColor,
      ),
    );
    setArrowPosition(getArrowPosition(direction, tooltipRect, offset));
  }, [direction, tooltipEl, margin, offset, arrowColor]);

  return (
    <TooltipContextProvider
      value={{
        triggerRef: triggerContainerRef,
        isTooltipVisible,
        tooltipCallbackRef,
        handleTriggerMouseOver,
        handleTriggerMouseOut,
        handleTooltipMouseOver,
        handleTooltipMouseOut,
        position,
        arrowPosition,
        arrowShape,
        forceInvisible,
      }}
    >
      {children}
    </TooltipContextProvider>
  );
};

const Tooltip = {
  Root: _Tooltip,
  Trigger: TooltipTrigger,
  Content: TooltipContent,
  Arrow: TooltipArrow,
};

export default Tooltip;
