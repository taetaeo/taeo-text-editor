import * as R from "react";

import type { ButtonGroupList, OptionsClass, ToggleInlineStyle } from "../../types";
import { ButtonGroupWrapper, ButtonGroupButton as Button } from "../../components";

export interface FontSizeButtonGroupProps {
  className?: string;
  fontSizeList: ButtonGroupList;

  wrapperClass?: OptionsClass;
  buttonClass?: OptionsClass;

  selected?: boolean;
  disabled?: boolean;

  toggleInlineStyle: ToggleInlineStyle;
  onClick?: (e: R.MouseEvent) => void;
}

const FontSizeButtonGroup: R.FC<FontSizeButtonGroupProps> = ({
  className = "text-Editor-toolbar-btn",
  fontSizeList = [],
  wrapperClass,
  buttonClass,
  selected = false,
  disabled = false,
  toggleInlineStyle = () => {},
  onClick = undefined,
}) => {
  if (fontSizeList.length === 0) return null;
  return (
    <ButtonGroupWrapper optionClass={wrapperClass}>
      {fontSizeList.map((fontSize, i) => {
        return (
          <Button
            key={`font_size_btn-${i}`}
            variant="primary"
            onClick={(e) => {
              if (toggleInlineStyle && typeof toggleInlineStyle === "function") {
                toggleInlineStyle(fontSize.eventLabel);
              }

              if (onClick && typeof onClick === "function") {
                onClick(e);
              }
            }}
            selected={selected}
            disabled={disabled}
            optionsClass={buttonClass}
          >
            {fontSize.label}
          </Button>
        );
      })}
    </ButtonGroupWrapper>
  );
};

export default FontSizeButtonGroup;
