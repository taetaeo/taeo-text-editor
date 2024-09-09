import * as R from "react";

import type { ButtonGroupList, OptionsClass, ToggleInlineStyle } from "../../types";
import { ButtonGroupWrapper, ButtonGroupButton as Button } from "../../components";

export interface FontStyleButtonGroupProps {
  className?: string;
  fontStyleList: ButtonGroupList;
  wrapperClass?: OptionsClass;
  buttonClass?: OptionsClass;

  selected?: boolean;
  disabled?: boolean;

  toggleInlineStyle: ToggleInlineStyle;
  onClick?: (e: R.MouseEvent) => void;
}

const FontStyleButtonGroup: R.FC<FontStyleButtonGroupProps> = ({
  className = "text-Editor-toolbar-btn",
  fontStyleList = [],

  wrapperClass,
  buttonClass,
  selected = false,
  disabled = false,

  toggleInlineStyle = () => {},
  onClick = undefined,
}) => {
  if (fontStyleList.length === 0) return null;
  return (
    <ButtonGroupWrapper optionClass={wrapperClass}>
      {fontStyleList.map((fontStyle, i) => {
        return (
          <Button
            key={`font_style_btn-${i}`}
            variant="primary"
            onClick={(e) => {
              if (toggleInlineStyle && typeof toggleInlineStyle === "function") {
                toggleInlineStyle(fontStyle.eventLabel);
              }

              if (onClick && typeof onClick === "function") {
                onClick(e);
              }
            }}
            selected={selected}
            disabled={disabled}
            optionsClass={buttonClass}
          >
            {fontStyle.label}
          </Button>
        );
      })}
    </ButtonGroupWrapper>
  );
};

export default FontStyleButtonGroup;
