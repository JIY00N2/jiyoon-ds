import { ComponentProps } from "react";
import { useModalContext } from "./contexts/ModalContext";

export const ModalContent = ({
  children,
  style,
  ...props
}: ComponentProps<"div">) => {
  const { modalContentRef, isOpen } = useModalContext();

  if (!isOpen) {
    return <></>;
  }

  return (
    <>
      <style>
        {`
          @keyframes modalOpen {
            0% {
              opacity: 0;
              transform: translate(-50%, -48%) scale(0.96);
            }
            100% {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }
          }
          .modal-content {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            animation: modalOpen 150ms cubic-bezier(0.16, 1, 0.3, 1) 1 normal none running;
            box-shadow: rgba(14, 18, 22, 0.35) 0px 10px 38px -10px, rgba(14, 18, 22, 0.2) 0px 10px 20px -15px;
          }
        `}
      </style>
      <div
        ref={modalContentRef}
        className="modal-content"
        style={{ ...style }}
        {...props}
      >
        {children}
      </div>
    </>
  );
};
