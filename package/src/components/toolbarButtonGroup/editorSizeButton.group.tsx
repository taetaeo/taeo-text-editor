import * as R from "react";

import type { ButtonGroupList, OptionsClass, ToggleBlockType } from "../../types";
import { ButtonGroupWrapper, ButtonGroupButton as Button } from "../../components";

export interface EditorSizeButtonGroupProps {
  className?: string;
  editorSizeList: ButtonGroupList;

  wrapperClass?: OptionsClass;
  buttonClass?: OptionsClass;

  selected?: boolean;
  disabled?: boolean;

  /**
   * @description label : 버튼명, eventLabel : 인라인스타일 적용할 이벤트명
   */
  onClick?: (e: R.MouseEvent) => void;
}

const EditorSizeButtonGroup: R.FC<EditorSizeButtonGroupProps> = ({
  className = "text-Editor-toolbar-btn",
  editorSizeList = [],
  wrapperClass,
  buttonClass,
  selected = false,
  disabled = false,
  onClick = undefined,
}) => {
  if (editorSizeList.length === 0) return null;
  return (
    <ButtonGroupWrapper optionClass={wrapperClass}>
      {editorSizeList.map((editorSize, i) => {
        return (
          <Button
            key={`editor_size_btn-${i}`}
            variant="primary"
            onClick={(e) => {
              if (onClick && typeof onClick === "function") {
                onClick(e);
              }
            }}
            selected={selected}
            disabled={disabled}
            optionsClass={buttonClass}
          >
            {editorSize.label}
          </Button>
        );
      })}
    </ButtonGroupWrapper>
  );
};

export default EditorSizeButtonGroup;
