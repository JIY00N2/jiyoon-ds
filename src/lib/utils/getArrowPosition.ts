import { DirectionType } from "../components/Tooltip/Tooltip.tsx";

type GetArrowPosition = (
  direction: DirectionType,
  contentRect: DOMRect,
  offset?: number,
) => {
  bottom: number;
  left: number;
};

export const getArrowPosition: GetArrowPosition = (
  direction,
  contentRect,
  offset = 0,
) => {
  switch (direction) {
    case "topLeft":
      return {
        bottom: -offset,
        left: 0,
      };
    case "top":
      return {
        bottom: -offset,
        left: contentRect.width / 2 - offset,
      };
    case "topRight":
      return {
        bottom: -offset,
        left: contentRect.width - 2 * offset,
      };
    case "leftTop":
      return {
        bottom: contentRect.height - offset * 2,
        left: contentRect.width - 2,
      };
    case "left":
      return {
        bottom: contentRect.height / 2 - offset,
        left: contentRect.width - 2,
      };
    case "leftBottom":
      return {
        bottom: 0,
        left: contentRect.width - 2,
      };
    case "rightTop":
      return {
        bottom: contentRect.height - offset * 2,
        left: -offset,
      };
    case "right":
      return {
        bottom: contentRect.height / 2 - offset,
        left: -offset,
      };
    case "rightBottom":
      return {
        bottom: 0,
        left: -offset,
      };
    case "bottomLeft":
      return {
        bottom: contentRect.height - 2,
        left: 0,
      };
    case "bottom":
      return {
        bottom: contentRect.height - 2,
        left: contentRect.width / 2 - offset,
      };
    case "bottomRight":
      return {
        bottom: contentRect.height - 2,
        left: contentRect.width - offset * 2,
      };
  }
};
