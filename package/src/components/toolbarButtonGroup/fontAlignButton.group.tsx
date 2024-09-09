import * as R from "react";

import type { ButtonGroupList, OptionsClass, ToggleBlockType } from "../../types";
import { ButtonGroupWrapper, ButtonGroupButton as Button } from "../../components";

export interface FontAlignButtonGroupProps {
  className?: string;
  fontAlignList: ButtonGroupList;

  wrapperClass?: OptionsClass;
  buttonClass?: OptionsClass;

  selected?: boolean;
  disabled?: boolean;

  /**
   * @description label : 버튼명, eventLabel : 인라인스타일 적용할 이벤트명
   */
  toggleBlockType: ToggleBlockType;
  onClick?: (e: R.MouseEvent) => void;
}

const FontAlignButtonGroup: R.FC<FontAlignButtonGroupProps> = ({
  className = "text-Editor-toolbar-btn",
  fontAlignList = [],
  wrapperClass,
  buttonClass,
  selected = false,
  disabled = false,
  toggleBlockType = () => {},
  onClick = undefined,
}) => {
  if (fontAlignList.length === 0) return null;
  return (
    <ButtonGroupWrapper optionClass={wrapperClass}>
      {fontAlignList.map((fontAlign, i) => {
        return (
          <Button
            key={`font_align_btn-${i}`}
            variant="primary"
            onClick={(e) => {
              if (toggleBlockType && typeof toggleBlockType === "function") {
                toggleBlockType(fontAlign.eventLabel);
              }

              if (onClick && typeof onClick === "function") {
                onClick(e);
              }
            }}
            selected={selected}
            disabled={disabled}
            optionsClass={buttonClass}
          >
            {fontAlign.label}
          </Button>
        );
      })}
    </ButtonGroupWrapper>
  );
};

export default FontAlignButtonGroup;
