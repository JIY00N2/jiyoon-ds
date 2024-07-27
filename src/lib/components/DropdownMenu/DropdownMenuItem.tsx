import { ComponentProps } from "react";

export const DropdownMenuItem = ({
  children,
  style,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      {...props}
      style={{ ...style }}
    >
      {children}
    </div>
  );
};
