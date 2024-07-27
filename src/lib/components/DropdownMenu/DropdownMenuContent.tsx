import { ComponentProps } from "react";
import { useDropdownMenuContext } from "./contexts/DropdownMenuContext.tsx";

export const DropdownMenuContent = ({
  children,
  style,
  ...props
}: ComponentProps<"div">) => {
  const { contentRef, isOpen, defaultOpen, position, align } =
    useDropdownMenuContext();

  let alignItem: "flex-start" | "flex-end" | "center" = "flex-start";
  if (align === "right") alignItem = "flex-end";
  else if (align === "center") alignItem = "center";

  return (
    <>
      {(isOpen || defaultOpen) && (
        <div
          ref={contentRef}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: `${alignItem}`,
            position: "absolute",
            top: `${position.top}px` || undefined,
            left: `${position.left}px` || undefined,
            ...style,
          }}
          {...props}
        >
          {children}
        </div>
      )}
    </>
  );
};
