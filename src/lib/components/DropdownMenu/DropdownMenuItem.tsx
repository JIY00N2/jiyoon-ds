import { ComponentProps } from "react";

export const DropdownMenuItem = ({
  children,
  style,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      style={{ ...style }}
      {...props}
    >
      {children}
    </div>
  );
};
