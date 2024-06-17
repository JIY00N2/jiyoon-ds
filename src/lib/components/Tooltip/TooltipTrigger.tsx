import { ComponentProps } from 'react';
import { useTooltipContext } from './contexts/TooltipContext';

export const TooltipTrigger = ({
  children,
  style,
  ...props
}: ComponentProps<'div'>) => {
  const { triggerRef, handleTriggerMouseOver, handleTriggerMouseOut } =
    useTooltipContext();
  return (
    <div
      {...props}
      style={{ position: 'relative', ...style }}
      ref={triggerRef}
      onMouseOver={handleTriggerMouseOver}
      onMouseOut={handleTriggerMouseOut}
    >
      {children}
    </div>
  );
};
