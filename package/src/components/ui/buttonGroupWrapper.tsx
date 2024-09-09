import * as R from "react";

import type { OptionsClass } from "../../types";
import { cn } from "../../lib";

export interface ButtonGroupWrapperProps extends R.HTMLAttributes<HTMLDivElement> {
  optionClass?: OptionsClass;
}

export const ButtonGroupWrapper = R.forwardRef<HTMLDivElement, ButtonGroupWrapperProps>(function Components(
  { className = "edit_btline", optionClass, style, children, ...rest },
  forwardedRef
) {
  return (
    <div ref={forwardedRef!} className={cn(className, optionClass)} style={style} {...rest}>
      {children}
    </div>
  );
});
export default ButtonGroupWrapper;
