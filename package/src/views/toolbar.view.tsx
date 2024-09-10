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

export interface ToolbarViewProps extends R.HTMLAttributes<HTMLElement>, R.PropsWithChildren {}

const ToolbarContainer = <T extends HTMLDivElement>(
  { className, children, style, ...rest }: ToolbarViewProps,

  forwardedRef: R.ForwardedRef<T>
) => {
  return (
    <div ref={forwardedRef} className={`text-editor-toolbar ${className}`} style={style} {...rest}>
      {children}
    </div>
  );
};

const ToolbarView = Object.assign(R.forwardRef(ToolbarContainer), {
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
