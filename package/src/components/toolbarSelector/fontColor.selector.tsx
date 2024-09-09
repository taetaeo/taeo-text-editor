import * as R from "react";

import type { SelectOptionList } from "../../types";
import ToolbarSection from "../ui/ToolbarSection";

export interface FontColorSelectorProps {
  fontColorList: SelectOptionList;
  onChange: (event: R.ChangeEvent<HTMLSelectElement>) => void;
}

const FontColorSelector: R.FC<FontColorSelectorProps> = ({ fontColorList = [], onChange }) => {
  if (fontColorList.length === 0) return null;
  return (
    <ToolbarSection>
      <select onChange={onChange}>
        {fontColorList.map((fontColor, i) => {
          return (
            <option key={`font_color_selector-${i}`} value={fontColor.style}>
              {fontColor.value}
            </option>
          );
        })}
      </select>
    </ToolbarSection>
  );
};

export default FontColorSelector;
