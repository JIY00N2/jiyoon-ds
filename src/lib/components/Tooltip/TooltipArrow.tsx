import { ComponentProps } from "react";
import { useTooltipContext } from "./contexts/TooltipContext";

export const TooltipArrow = ({ style, ...props }: ComponentProps<"div">) => {
  const { arrowPosition, arrowShape } = useTooltipContext();

  return (
    <div
      style={{
        borderTop: `${arrowShape.borderTop}`,
        borderLeft: `${arrowShape.borderLeft}`,
        borderRight: `${arrowShape.borderRight}`,
        borderBottom: `${arrowShape.borderBottom}`,
        position: "absolute",
        bottom: `${arrowPosition.bottom}px` || undefined,
        left: `${arrowPosition.left}px` || undefined,
        ...style,
      }}
      {...props}
    />
  );
};
