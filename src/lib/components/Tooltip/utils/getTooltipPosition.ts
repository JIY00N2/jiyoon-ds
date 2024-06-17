import { DirectionType } from '../Tooltip';

type GetTooltipPosition = (
  direction: DirectionType,
  triggerRect: DOMRect,
  tooltipRect: DOMRect,
  margin?: number
) => {
  top: number;
  left: number;
};

export const getTooltipPosition: GetTooltipPosition = (
  direction,
  triggerRect,
  tooltipRect,
  margin = 0
) => {
  switch (direction) {
    case 'topLeft':
      return {
        top: triggerRect.top - tooltipRect.height + window.scrollY - margin,
        left: triggerRect.left + window.scrollX,
      };
    case 'top':
      return {
        top: triggerRect.top - tooltipRect.height + window.scrollY - margin,
        left:
          triggerRect.left +
          triggerRect.width / 2 -
          tooltipRect.width / 2 +
          window.scrollX,
      };
    case 'topRight':
      return {
        top: triggerRect.top - tooltipRect.height + window.scrollY - margin,
        left:
          triggerRect.left +
          triggerRect.width -
          tooltipRect.width +
          window.scrollX,
      };
    case 'leftTop':
      return {
        top: triggerRect.top + window.scrollY,
        left: triggerRect.left - tooltipRect.width + window.scrollX - margin,
      };
    case 'left':
      return {
        top:
          triggerRect.top -
          tooltipRect.height / 2 +
          triggerRect.height / 2 +
          window.scrollY,
        left: triggerRect.left - tooltipRect.width + window.scrollX - margin,
      };
    case 'leftBottom':
      return {
        top:
          triggerRect.top -
          tooltipRect.height +
          triggerRect.height +
          window.scrollY,
        left: triggerRect.left - tooltipRect.width + window.scrollX - margin,
      };
    case 'rightTop':
      return {
        top: triggerRect.top + window.scrollY,
        left: triggerRect.left + triggerRect.width + window.scrollX + margin,
      };
    case 'right':
      return {
        top:
          triggerRect.top -
          tooltipRect.height / 2 +
          triggerRect.height / 2 +
          window.scrollY,
        left: triggerRect.left + triggerRect.width + window.scrollX + margin,
      };
    case 'rightBottom':
      return {
        top:
          triggerRect.top -
          tooltipRect.height +
          triggerRect.height +
          window.scrollY,
        left: triggerRect.left + triggerRect.width + window.scrollX + margin,
      };
    case 'bottomLeft':
      return {
        top: triggerRect.top + triggerRect.height + window.scrollY + margin,
        left: triggerRect.left + window.scrollX,
      };
    case 'bottom':
      return {
        top: triggerRect.top + triggerRect.height + window.scrollY + margin,
        left:
          triggerRect.left +
          triggerRect.width / 2 -
          tooltipRect.width / 2 +
          window.scrollX,
      };
    case 'bottomRight':
      return {
        top: triggerRect.top + triggerRect.height + window.scrollY + margin,
        left:
          triggerRect.left -
          tooltipRect.width +
          triggerRect.width +
          window.scrollX,
      };
  }
};
