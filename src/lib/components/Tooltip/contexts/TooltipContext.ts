import {
  MouseEventHandler,
  PropsWithChildren,
  RefCallback,
  RefObject,
  createContext,
  useContext,
} from 'react';
import { ArrowPositionType, ArrowShapeType, PositionType } from '../Tooltip';

type TooltipContextValue = {
  arrowPosition: ArrowPositionType;
  arrowShape: ArrowShapeType;
  triggerRef: RefObject<HTMLDivElement>;
  isTooltipVisible: boolean;
  position: PositionType;
  tooltipCallbackRef: RefCallback<HTMLDivElement>;
  handleTooltipMouseOver: MouseEventHandler;
  handleTooltipMouseOut: MouseEventHandler;
  handleTriggerMouseOver: MouseEventHandler;
  handleTriggerMouseOut: MouseEventHandler;
  forceInvisible?: boolean;
};

const TooltipContext = createContext<TooltipContextValue | null>(null);

export const useTooltipContext = () => {
  const value = useContext(TooltipContext);

  if (value === null) {
    throw Error('Cannot find TooltipContext');
  }

  return value;
};

export const TooltipContextProvider = ({
  value,
  children,
}: PropsWithChildren<{ value: TooltipContextValue }>) => {
  return (
    <TooltipContext.Provider value={value}>{children}</TooltipContext.Provider>
  );
};
