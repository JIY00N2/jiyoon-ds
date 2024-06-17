import { DirectionType } from '../Tooltip';

type GetArrowPosition = (
  direction: DirectionType,
  tooltipRect: DOMRect,
  offset?: number
) => {
  bottom: number;
  left: number;
};

export const getArrowPosition: GetArrowPosition = (
  direction,
  tooltipRect,
  offset = 0
) => {
  switch (direction) {
    case 'topLeft':
      return {
        bottom: -offset,
        left: 0,
      };
    case 'top':
      return {
        bottom: -offset,
        left: tooltipRect.width / 2 - offset,
      };
    case 'topRight':
      return {
        bottom: -offset,
        left: tooltipRect.width - 2 * offset,
      };
    case 'leftTop':
      return {
        bottom: tooltipRect.height - offset * 2,
        left: tooltipRect.width,
      };
    case 'left':
      return {
        bottom: tooltipRect.height / 2 - offset,
        left: tooltipRect.width,
      };
    case 'leftBottom':
      return {
        bottom: 0,
        left: tooltipRect.width,
      };
    case 'rightTop':
      return {
        bottom: tooltipRect.height - offset * 2,
        left: -offset,
      };
    case 'right':
      return {
        bottom: tooltipRect.height / 2 - offset,
        left: -offset,
      };
    case 'rightBottom':
      return {
        bottom: 0,
        left: -offset,
      };
    case 'bottomLeft':
      return {
        bottom: tooltipRect.height,
        left: 0,
      };
    case 'bottom':
      return {
        bottom: tooltipRect.height,
        left: tooltipRect.width / 2 - offset,
      };
    case 'bottomRight':
      return {
        bottom: tooltipRect.height,
        left: tooltipRect.width - offset * 2,
      };
  }
};
