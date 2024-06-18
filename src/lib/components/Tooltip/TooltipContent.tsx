import { ComponentProps } from 'react';
import { createPortal } from 'react-dom';
import { useTooltipContext } from './contexts/TooltipContext';
import { useClient } from '../../hooks/useClient';

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
  const isClient = useClient();

  if (forceInvisible) {
    return <></>;
  }

  return (
    <>
      {isClient &&
        isTooltipVisible &&
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
