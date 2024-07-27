import { ComponentProps } from "react";
import { useModalContext } from "./contexts/ModalContext";

export const ModalClose = ({
  children,
  style,
  ...props
}: ComponentProps<"div">) => {
  const { close } = useModalContext();

  return (
    <div
      onClick={close}
      style={{ cursor: "pointer", ...style }}
      {...props}
    >
      {children}
    </div>
  );
};
