import { ComponentProps } from 'react';
import { createPortal } from 'react-dom';
import { useTooltipContext } from './contexts/TooltipContext';

export const TooltipContent = ({
  children,
  style,
  ...props
}: ComponentProps<'div'>) => {
  const {
    isTooltipVisible,
    position,
    tooltipCallbackRef,
    handleTooltipMouseOver,
    handleTooltipMouseOut,
    forceInvisible,
  } = useTooltipContext();

  if (forceInvisible) {
    return <></>;
  }

  return (
    <>
      {isTooltipVisible &&
        createPortal(
          <div
            {...props}
            ref={tooltipCallbackRef}
            onMouseOver={handleTooltipMouseOver}
            onMouseOut={handleTooltipMouseOut}
            style={{
              position: 'absolute',
              top: `${position.top}px` || undefined,
              left: `${position.left}px` || undefined,
              ...style,
            }}
          >
            {children}
          </div>,
          document.body
        )}
    </>
  );
};
