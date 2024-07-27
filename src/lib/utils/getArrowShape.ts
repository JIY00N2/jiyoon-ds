export type ArrowDirectionType = "top" | "left" | "right" | "bottom";

type GetArrowShape = (
  direction: ArrowDirectionType,
  offset: number,
  arrowColor: string,
) => {
  borderTop?: string;
  borderLeft?: string;
  borderRight?: string;
  borderBottom?: string;
};

export const getArrowShape: GetArrowShape = (direction, offset, arrowColor) => {
  switch (direction) {
    case "top":
      return {
        borderTop: `${offset}px solid ${arrowColor}`,
        borderLeft: `${offset}px solid transparent`,
        borderRight: `${offset}px solid transparent`,
      };
    case "left":
      return {
        borderTop: `${offset}px solid transparent`,
        borderLeft: `${offset}px solid ${arrowColor}`,
        borderBottom: `${offset}px solid transparent`,
      };
    case "right":
      return {
        borderTop: `${offset}px solid transparent`,
        borderRight: `${offset}px solid ${arrowColor}`,
        borderBottom: `${offset}px solid transparent`,
      };
    case "bottom":
      return {
        borderLeft: `${offset}px solid transparent`,
        borderRight: `${offset}px solid transparent`,
        borderBottom: `${offset}px solid ${arrowColor}`,
      };
  }
};
