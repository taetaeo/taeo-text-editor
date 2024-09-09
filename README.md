# Text Editor Library

## Tech Stack

- Draft.js
- React.js
- Typescript

## Example Code.

```tsx
import type { CustomStyleMapType } from "text-editor";
import { ToolbarView, EditorView, useEditor, styledMap, toolbarConfigs, ExtractObjectButton, useColorPicker, ColorPicker } from "text-editor";
import * as R from "react";

import "text-editor/dist/css/text-editor.css";

const { select, button } = toolbarConfigs;

const styleMapList = [...select.fontColors, ...select.fontFamily, ...select.fontSizes, ...select.fontStyle];

function RichTextEditor() {
  const [extractState, setExtractState] = R.useState({});
  const [customStyleMap, setCustomStyleMap] = R.useState<CustomStyleMapType>(() => styledMap(styleMapList));

  const {
    editorRef,
    editorState,
    editorModel,
    onChange,
    toggleBlockType,
    toggleInlineStyle,
    handleKeyCommand,
    keyBindingFn,
    handleChangeFontSize,
    handleChangeFontColor,
  } = useEditor();
  const { ref: colorPickerRef, currentColor, onChangeColor, isActive, toggle, onActive, onInactive } = useColorPicker({ initialColor: "#ffffff" });

  const onChangeFontColor = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const targetColor = e.target.value;

    if (!targetColor) {
      return onActive();
    }
    const fontColor = `FONT_COLOR_${targetColor}`;
    toggleInlineStyle(fontColor);
    onInactive();
  };

  const _onCallbackFontColor = (color: string) => {
    handleChangeFontColor(color);
    setCustomStyleMap((prev: CustomStyleMapType) => ({ ...prev, ...editorModel.editorModel.styleMap }));
  };

  return (
    <R.Fragment>
      <ToolbarView>
        {/* 글꼴 형태 Start*/}
        {/* <ToolbarView.FontFamilySelector fontFamilyList={select.fontFamily} /> */}
        {/* 글꼴 형태 End*/}

        {/* 글자 정렬 Start */}
        <ToolbarView.FontAlignButtonGroup fontAlignList={button.fontAlign} toggleBlockType={toggleBlockType} />
        {/* <ToolbarView.FontAlignSelector fontAlignList={select.} /> */}
        {/* 글자 정렬 End */}

        {/* 글자 스타일 Start */}
        <ToolbarView.FontStyleButtonGroup fontStyleList={button.fontStyle} toggleInlineStyle={toggleInlineStyle} />

        {/* 글자 스타일 End */}

        {/* 글자 색상 Start */}
        <ToolbarView.FontColorButtonGroup fontColorList={button.fontColor} toggleInlineStyle={toggleInlineStyle} />
        <ToolbarView.FontColorSelector
          fontColorList={[...select.fontColors, { label: "", style: "", type: "fontColor", value: "더보기" }]}
          onChange={onChangeFontColor}
        />

        {/* 글자 색상 End*/}

        {/* 글자 사이즈 Start */}
        <ToolbarView.FontSizeButtonGroup fontSizeList={button.fontSize} toggleInlineStyle={toggleInlineStyle} />
        <ToolbarView.FontSizeSelector
          fontSizeList={[...select.fontSizes, { label: "", style: "", type: "fontSize", value: "직접입력" }]}
          onChange={handleChangeFontSize}
        />
        {/* 글자 사이즈 End */}
      </ToolbarView>

      {isActive && (
        <div>
          <span className="color-picker_wrapper" ref={colorPickerRef}>
            <ColorPicker type="chrome" initialColor={currentColor} onColorChange={onChangeColor} onCallbackFontColor={_onCallbackFontColor} />
          </span>
        </div>
      )}

      <ExtractObjectButton editorViewModel={editorModel} setState={setExtractState}>
        데이터 추출하기
      </ExtractObjectButton>

      <EditorView
        ref={editorRef}
        editorState={editorState}
        onChange={onChange}
        handleKeyCommand={handleKeyCommand}
        keyBindingFn={keyBindingFn}
        blockStyleFn={editorModel.handleBlockStyleFn}
        customStyleMap={customStyleMap}
        placeholder={"내용을 입력해주세요......"}
      />
    </R.Fragment>
  );
}
```

1. EditorContainer : Text Editor의 기능을 담당하는 컴포넌트
2. ToolbarContainer : Toolbar의 기능을 담당하는 컴포넌트
3. useEditor : Editor의 데이터 로직을 담당하는 훅
4. style : `text-editor/dist/css/text-editor.css` 경로를 통해서 css 파일 import
