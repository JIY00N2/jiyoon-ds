import { ComponentProps } from "react";
import { useModalContext } from "./contexts/ModalContext";

export const ModalTrigger = ({
  children,
  style,
  ...props
}: ComponentProps<"div">) => {
  const { open } = useModalContext();

  return (
    <div
      onClick={open}
      style={{ ...style }}
      {...props}
    >
      {children}
    </div>
  );
};
