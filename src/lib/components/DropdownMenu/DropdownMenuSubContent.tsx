import { ComponentProps } from "react";
import { useDropdownMenuSubContext } from "./contexts/DropdownMenuSubContext.tsx";

export const DropdownMenuSubContent = ({
  children,
  style,
  ...props
}: ComponentProps<"div">) => {
  const {
    isOpen,
    subContentRef,
    handleSubContentMouseOver,
    handleSubContentMouseOut,
    subPosition,
    align,
  } = useDropdownMenuSubContext();

  let alignItem: "flex-start" | "flex-end" | "center" = "flex-start";
  if (align === "right") alignItem = "flex-end";
  else if (align === "center") alignItem = "center";

  return (
    <>
      {isOpen && (
        <div
          ref={subContentRef}
          onMouseOver={handleSubContentMouseOver}
          onMouseOut={handleSubContentMouseOut}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: `${alignItem}`,
            position: "absolute",
            top: `${subPosition.top}px` || undefined,
            left: `${subPosition.left}px` || undefined,
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
