import { DirectionType } from "../components/Tooltip/Tooltip.tsx";

type GetContentPosition = <T extends DirectionType>(
  direction: T,
  triggerRect: DOMRect,
  tooltipRect: DOMRect,
  margin?: number,
) => {
  top: number;
  left: number;
};

export const getContentPosition: GetContentPosition = (
  direction,
  triggerRect,
  contentRect,
  margin = 0,
) => {
  switch (direction) {
    case "topLeft":
      return {
        top: triggerRect.top - contentRect.height + window.scrollY - margin,
        left: triggerRect.left + window.scrollX,
      };
    case "top":
      return {
        top: triggerRect.top - contentRect.height + window.scrollY - margin,
        left:
          triggerRect.left +
          triggerRect.width / 2 -
          contentRect.width / 2 +
          window.scrollX,
      };
    case "topRight":
      return {
        top: triggerRect.top - contentRect.height + window.scrollY - margin,
        left:
          triggerRect.left +
          triggerRect.width -
          contentRect.width +
          window.scrollX,
      };
    case "leftTop":
      return {
        top: triggerRect.top + window.scrollY,
        left: triggerRect.left - contentRect.width + window.scrollX - margin,
      };
    case "left":
      return {
        top:
          triggerRect.top -
          contentRect.height / 2 +
          triggerRect.height / 2 +
          window.scrollY,
        left: triggerRect.left - contentRect.width + window.scrollX - margin,
      };
    case "leftBottom":
      return {
        top:
          triggerRect.top -
          contentRect.height +
          triggerRect.height +
          window.scrollY,
        left: triggerRect.left - contentRect.width + window.scrollX - margin,
      };
    case "rightTop":
      return {
        top: triggerRect.top + window.scrollY,
        left: triggerRect.left + triggerRect.width + window.scrollX + margin,
      };
    case "right":
      return {
        top:
          triggerRect.top -
          contentRect.height / 2 +
          triggerRect.height / 2 +
          window.scrollY,
        left: triggerRect.left + triggerRect.width + window.scrollX + margin,
      };
    case "rightBottom":
      return {
        top:
          triggerRect.top -
          contentRect.height +
          triggerRect.height +
          window.scrollY,
        left: triggerRect.left + triggerRect.width + window.scrollX + margin,
      };
    case "bottomLeft":
      return {
        top: triggerRect.top + triggerRect.height + window.scrollY + margin,
        left: triggerRect.left + window.scrollX,
      };
    case "bottom":
      return {
        top: triggerRect.top + triggerRect.height + window.scrollY + margin,
        left:
          triggerRect.left +
          triggerRect.width / 2 -
          contentRect.width / 2 +
          window.scrollX,
      };
    case "bottomRight":
      return {
        top: triggerRect.top + triggerRect.height + window.scrollY + margin,
        left:
          triggerRect.left -
          contentRect.width +
          triggerRect.width +
          window.scrollX,
      };
    default:
      throw new Error(`Unsupported content position ${direction}`);
  }
};
