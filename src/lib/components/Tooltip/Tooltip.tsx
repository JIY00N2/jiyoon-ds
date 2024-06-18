import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { TooltipContextProvider } from './contexts/TooltipContext';
import { TooltipArrow } from './TooltipArrow';
import { TooltipContent } from './TooltipContent';
import { getArrowShape } from '../../utils/getArrowShape';
import { TooltipTrigger } from './TooltipTrigger';
import { TooltipDirectionToArrowDirectionMap } from './constants/converter';
import { useClientRect } from '../../hooks/useClientRect';
import { getTooltipPosition } from './utils/getTooltipPosition';
import { getArrowPosition } from './utils/getArrowPosition';

export type PositionType = {
  top?: number;
  left?: number;
};

export type ArrowPositionType = {
  bottom?: number;
  left?: number;
};

export type ArrowShapeType = {
  borderTop?: string;
  borderLeft?: string;
  borderRight?: string;
  borderBottom?: string;
};

export type DirectionType =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom';

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
  arrowColor = 'black',
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

  const [tooltipRect, tooltipCallbackRef] = useClientRect<HTMLDivElement>();

  const handleTriggerMouseOver = useCallback(() => {
    clearTimeout(enterDelayTimeoutRef.current);
    clearTimeout(leaveDelayTimeoutRef.current);

    enterDelayTimeoutRef.current = setTimeout(
      () => setIsTooltipVisible(true),
      enterDelay
    );
  }, [enterDelay]);

  const handleTriggerMouseOut = useCallback(() => {
    clearTimeout(enterDelayTimeoutRef.current);
    clearTimeout(leaveDelayTimeoutRef.current);

    if (hoverVisible) {
      leaveDelayTimeoutRef.current = setTimeout(() => {
        setIsTooltipVisible(false);
      }, Math.max(200, leaveDelay));
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
    if (!triggerContainerRef.current || !tooltipRect) {
      return;
    }

    const trigger = triggerContainerRef.current;
    const triggerRect = trigger.getBoundingClientRect();

    setPosition(
      getTooltipPosition(direction, triggerRect, tooltipRect, margin)
    );
    setArrowShape(
      getArrowShape(
        TooltipDirectionToArrowDirectionMap[direction],
        offset,
        arrowColor
      )
    );
    setArrowPosition(getArrowPosition(direction, tooltipRect, offset));
  }, [direction, tooltipRect, margin, offset, arrowColor]);

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
