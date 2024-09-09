import * as R from "react";

import type { ButtonGroupList, OptionsClass, ToggleInlineStyle } from "../../types";
import { ButtonGroupWrapper, ButtonGroupColorButton as Button } from "../../components";

export interface FontColorButtonGroupProps {
  className?: string;
  fontColorList: ButtonGroupList;

  wrapperClass?: OptionsClass;
  buttonClass?: OptionsClass;

  selected?: boolean;
  disabled?: boolean;

  toggleInlineStyle: ToggleInlineStyle;
  onClick?: (e: R.MouseEvent) => void;
}

const FontColorButtonGroup: R.FC<FontColorButtonGroupProps> = ({
  className = "text-Editor-toolbar-btn",

  fontColorList = [],
  wrapperClass,
  buttonClass,
  selected = false,
  disabled = false,

  toggleInlineStyle = () => {},
  onClick = undefined,
}) => {
  if (fontColorList.length === 0) return null;
  return (
    <ButtonGroupWrapper optionClass={wrapperClass}>
      {fontColorList.map((fontColor, i) => {
        return (
          <Button
            key={`font_color_btn-${i}`}
            variant="secondary"
            onClick={(e) => {
              if (toggleInlineStyle && typeof toggleInlineStyle === "function") {
                toggleInlineStyle(fontColor.eventLabel);
              }

              if (onClick && typeof onClick === "function") {
                onClick(e);
              }
            }}
            color={fontColor.label}
            selected={selected}
            disabled={disabled}
            optionsClass={buttonClass}
          >
            가
          </Button>
        );
      })}
    </ButtonGroupWrapper>
  );
};

export default FontColorButtonGroup;
