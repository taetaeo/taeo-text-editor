import * as R from "react";

import type { OptionsClass } from "../../types";
import { cn } from "../../lib";

interface Props extends R.HTMLAttributes<HTMLDivElement> {
  optionClass?: OptionsClass;
}

const ToolbarSection = R.forwardRef<HTMLDivElement, Props>(function Components(
  { className = "edit_btline", optionClass, style, children, ...rest },
  forwardedRef
) {
  return (
    <div ref={forwardedRef!} className={cn(className, optionClass)} style={style} {...rest}>
      {children}
    </div>
  );
});

export default ToolbarSection;
