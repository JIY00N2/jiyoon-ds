import { ComponentProps } from "react";
import { createPortal } from "react-dom";
import { useTooltipContext } from "./contexts/TooltipContext";
import { useMobile } from "../../hooks/useMobile";

export const TooltipContent = ({
  children,
  style,
  ...props
}: ComponentProps<"div">) => {
  const isMobile = useMobile();
  const {
    isTooltipVisible,
    position,
    tooltipCallbackRef,
    handleTooltipMouseOver,
    handleTooltipMouseOut,
    forceInvisible,
  } = useTooltipContext();

  if (forceInvisible || isMobile) {
    return <></>;
  }

  return (
    <>
      {isTooltipVisible &&
        createPortal(
          <div
            ref={tooltipCallbackRef}
            onMouseOver={handleTooltipMouseOver}
            onMouseOut={handleTooltipMouseOut}
            style={{
              position: "absolute",
              top: `${position.top}px` || undefined,
              left: `${position.left}px` || undefined,
              ...style,
            }}
            {...props}
          >
            {children}
          </div>,
          document.body,
        )}
    </>
  );
};
