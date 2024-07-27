import { ComponentProps } from "react";

type DropdownMenuSeparatorProps = {
  orientation?: "horizontal" | "vertical";
} & ComponentProps<"div">;

export const DropdownMenuSeparator = ({
  orientation = "horizontal",
  style,
  ...props
}: DropdownMenuSeparatorProps) => {
  const orientationStyle =
    `${orientation}` === "horizontal"
      ? { height: "1px", width: "100%" }
      : { width: "1px", height: "auto" };

  return (
    <div
      {...props}
      style={{
        ...orientationStyle,
        backgroundColor: "black",
        ...style,
      }}
    />
  );
};
