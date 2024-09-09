import * as R from "react";

import type { ButtonVariant, OptionsClass } from "../../types";
import { cn } from "../../lib";

export interface ButtonGroupButtonProps extends R.HTMLAttributes<HTMLButtonElement>, R.PropsWithChildren {
  id?: string;
  value?: string | number;
  variant?: ButtonVariant;

  selected?: boolean;
  disabled?: boolean;

  /*
   * Key : class-name ,
   * value : active state
   *  - true : active,
   *  -false : inactive
   */
  optionsClass?: OptionsClass;
}

const ButtonGroupButton = R.forwardRef<HTMLButtonElement, ButtonGroupButtonProps>(function Component(
  { id, value, variant = "secondary", className = "btn", selected = false, disabled = false, optionsClass, style, children, ...rest },
  forwardedRef
) {
  return (
    <button
      id={id}
      value={value}
      ref={forwardedRef}
      className={cn(`${className}_${variant}`, ["btn_ms", { editor: true, selected, disabled, ...optionsClass }])}
      style={style}
      {...rest}
    >
      {children}
    </button>
  );
});

export default ButtonGroupButton;
