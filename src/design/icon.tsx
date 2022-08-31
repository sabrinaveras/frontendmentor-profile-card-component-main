import { BgPatternBottom } from "./icons/bgPatternBottom";
import { BgPatternTop } from "./icons/bgPatternTop";
import { BgPatternCard } from "./icons/bgPatternCard";

import { Color } from "./color";

export type Icon = (props: {
  width?: string;
  height?: string;
  color?: Color;
}) => JSX.Element;
export type SvgComponent = (props: {
  style: object;
  color: string;
}) => JSX.Element;

const iconWrapper = (Component: SvgComponent): Icon => {
  return ({
    width,
    height,
    color,
  }: {
    width?: string;
    height?: string;
    color?: Color;
  }) => {
    const style: any = {};

    const fill = color ? color.color : "white";

    if (width) {
      style["width"] = width;
    }

    if (height) {
      style["height"] = height;
    }

    return <Component style={style} color={fill} />;
  };
};

export const icons: { [key: string]: Icon } = {
  BgPatternBottom: iconWrapper(BgPatternBottom),
  BgPatternTop: iconWrapper(BgPatternTop),
  BgPatternCard: iconWrapper(BgPatternCard),
};
