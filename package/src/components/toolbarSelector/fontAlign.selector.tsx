import * as R from "react";

import type { SelectOptionList } from "../../types";
import ToolbarSection from "../ui/ToolbarSection";

export interface FontAlignSelectorProps {
  fontAlignList: SelectOptionList;
  onChange: (event: R.ChangeEvent<HTMLSelectElement>) => void;
}

const FontAlignSelector: R.FC<FontAlignSelectorProps> = ({ fontAlignList = [], onChange }) => {
  if (fontAlignList.length === 0) return null;
  return (
    <ToolbarSection>
      <select onChange={onChange}>
        {fontAlignList.map((fontAlign, i) => {
          return (
            <option key={`font_align_selector-${i}`} value={fontAlign.style}>
              {fontAlign.value}
            </option>
          );
        })}
      </select>
    </ToolbarSection>
  );
};

export default FontAlignSelector;
