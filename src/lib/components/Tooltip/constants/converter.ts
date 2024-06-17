import { ArrowDirectionType } from '../../../utils/getArrowShape';
import { DirectionType } from '../Tooltip';

export const TooltipDirectionToArrowDirectionMap: Record<
  DirectionType,
  ArrowDirectionType
> = {
  topLeft: 'top',
  top: 'top',
  topRight: 'top',
  leftTop: 'left',
  left: 'left',
  leftBottom: 'left',
  rightTop: 'right',
  right: 'right',
  rightBottom: 'right',
  bottomLeft: 'bottom',
  bottom: 'bottom',
  bottomRight: 'bottom',
};
