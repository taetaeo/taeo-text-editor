import * as R from "react";

import {
  EditorSizeButtonGroup,
  FontAlignButtonGroup,
  FontAlignSelector,
  FontColorButtonGroup,
  FontColorSelector,
  FontFamilySelector,
  FontSizeButtonGroup,
  FontSizeSelector,
  FontStyleButtonGroup,
} from "../components";
import { cn } from "../lib";

export interface ToolbarViewProps extends R.HTMLAttributes<HTMLElement> {
  marginBottom: number;
}

const ToolbarContainer: React.FC<React.PropsWithChildren<ToolbarViewProps>> = ({ className = "", marginBottom = 12, children, style, ...rest }) => {
  return (
    <div className={cn(className, { [`m-b-${marginBottom}`]: true })} style={style} {...rest}>
      {children}
    </div>
  );
};

const ToolbarView = Object.assign(ToolbarContainer, {
  EditorSizeButtonGroup,

  FontAlignButtonGroup,
  FontColorButtonGroup,
  FontSizeButtonGroup,
  FontStyleButtonGroup,

  FontSizeSelector,
  FontColorSelector,
  FontAlignSelector,
  FontFamilySelector,
});

export default ToolbarView;
