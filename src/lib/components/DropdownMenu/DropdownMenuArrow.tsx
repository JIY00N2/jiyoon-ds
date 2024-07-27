import { ComponentProps } from "react";
import { useDropdownMenuContext } from "./contexts/DropdownMenuContext.tsx";

export const DropdownMenuArrow = ({
  style,
  ...props
}: ComponentProps<"div">) => {
  const { arrowPosition, arrowShape } = useDropdownMenuContext();

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
