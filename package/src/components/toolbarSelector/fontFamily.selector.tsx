import * as R from "react";

import type { SelectOptionList } from "../../types";
import ToolbarSection from "../ui/ToolbarSection";

export interface FontFamilySelectorProps {
  fontFamilyList: SelectOptionList;
  onChange: (event: R.ChangeEvent<HTMLSelectElement>) => void;
}

const FontFamilySelector: R.FC<FontFamilySelectorProps> = ({ fontFamilyList, onChange }) => {
  if (fontFamilyList.length === 0) return null;
  return (
    <ToolbarSection>
      <select onChange={onChange}>
        {fontFamilyList.map((fontFamily, i) => {
          return (
            <option key={`font_family_selector-${i}`} value={fontFamily.style}>
              {fontFamily.value}
            </option>
          );
        })}
      </select>
    </ToolbarSection>
  );
};

export default FontFamilySelector;
