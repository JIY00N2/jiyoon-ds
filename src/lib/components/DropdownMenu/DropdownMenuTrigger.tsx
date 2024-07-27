import { ComponentProps } from "react";
import { useDropdownMenuContext } from "./contexts/DropdownMenuContext.tsx";

export const DropdownMenuTrigger = ({
  children,
  style,
  ...props
}: ComponentProps<"div">) => {
  const { triggerRef, toggle } = useDropdownMenuContext();

  return (
    <div
      ref={triggerRef}
      onClick={toggle}
      style={{ position: "relative", ...style }}
      {...props}
    >
      {children}
    </div>
  );
};
