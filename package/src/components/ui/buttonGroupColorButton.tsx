import * as R from "react";

import type { ButtonVariant, OptionsClass } from "../../types";
import { cn } from "../../lib";

export interface ButtonGroupColorButtonProps extends R.HTMLAttributes<HTMLButtonElement>, R.PropsWithChildren {
  id?: string;
  value?: string | number;
  variant?: ButtonVariant;

  selected?: boolean;
  disabled?: boolean;

  color?: string;

  /*
   * Key : class-name ,
   * value : active state
   *  - true : active,
   *  -false : inactive
   */
  optionsClass?: OptionsClass;
}

const ButtonGroupColorButton = R.forwardRef<HTMLButtonElement, ButtonGroupColorButtonProps>(function Component(
  { id, value, variant = "secondary", color = "red", className = "btn", selected = false, disabled = false, optionsClass, style, children, ...rest },
  forwardedRef
) {
  return (
    <button
      id={id}
      value={value}
      ref={forwardedRef}
      className={cn(`${className}_${variant}`, ["btn_s_w28h28", { [`edit_${color}`]: true, editor: true, selected, disabled, ...optionsClass }])}
      style={style}
      {...rest}
    >
      {children}
    </button>
  );
});

export default ButtonGroupColorButton;
