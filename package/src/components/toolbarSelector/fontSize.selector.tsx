import * as R from "react";

import type { SelectOptionList } from "../../types";
import ToolbarSection from "../ui/ToolbarSection";

export interface FontSizeSelectorProps {
  fontSizeList: SelectOptionList;
  onChange: (event: R.ChangeEvent<HTMLSelectElement>) => void;
}

const FontSizeSelector: R.FC<FontSizeSelectorProps> = ({ fontSizeList, onChange }) => {
  if (fontSizeList.length === 0) return null;
  return (
    <ToolbarSection>
      <select onChange={onChange}>
        {fontSizeList.map((fontSize, i) => {
          return (
            <option key={`font_size_selector-${i}`} value={fontSize.label}>
              {fontSize.value}
            </option>
          );
        })}
      </select>
    </ToolbarSection>
  );
};

export default FontSizeSelector;
