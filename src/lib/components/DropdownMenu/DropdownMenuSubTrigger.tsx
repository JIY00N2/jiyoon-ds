import { ComponentProps } from "react";
import { useDropdownMenuSubContext } from "./contexts/DropdownMenuSubContext.tsx";

export const DropdownMenuSubTrigger = ({
  children,
  style,
  ...props
}: ComponentProps<"div">) => {
  const { subTriggerRef, handleSubTriggerMouseOver, handleSubTriggerMouseOut } =
    useDropdownMenuSubContext();

  return (
    <div
      ref={subTriggerRef}
      onMouseOver={handleSubTriggerMouseOver}
      onMouseOut={handleSubTriggerMouseOut}
      {...props}
      style={{ position: "relative", ...style }}
    >
      {children}
    </div>
  );
};
