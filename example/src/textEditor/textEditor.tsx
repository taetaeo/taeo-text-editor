import type { CustomStyleMapType, UseEditorProps } from "taeo-text-editor";
import { EditorView, useEditor, styledMap, toolbarConfigs, ExtractObjectButton, useColorPicker, ColorPicker } from "taeo-text-editor";
import * as R from "react";

import "taeo-text-editor/dist/css/text-editor.css";
import TextEditorPrev from "./textEditorPrev";

const { select, button } = toolbarConfigs;

const styleMapList = [...select.fontColors, ...select.fontFamilies, ...select.fontSizes, ...select.fontStyles];

function TextEditor(props: UseEditorProps) {
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
    changeHandler,
  } = useEditor({
    ...props,
  });
  const { ref: colorPickerRef, currentColor, onChangeColor, isActive, toggle, onActive, onInactive } = useColorPicker({ initialColor: "#ffffff" });

  const onChangeFontColor = (e: R.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const targetColor = e.target.value;

    if (!targetColor) {
      return onActive();
    }
    const fontColor = `FONT_COLOR_${targetColor}`;
    toggleInlineStyle(fontColor);
    onInactive();
  };

  const _onCallbackFontColor = (color: string) => {
    changeHandler.onChangeFontColor(color);
    setCustomStyleMap((prev: CustomStyleMapType) => ({ ...prev, ...editorModel.editorModel.styleMap }));
  };

  return (
    <>
      <div className="text-editor gap_16">
        <div className="text-editor-toolbar m-b-12">
          {/* 사이즈 옵션 */}
          {/* <div className="toolbar_btn_wrapper gap_4">
            {button.editorSize.map((size, index) => (
              <button key={`editor_size_btn-${index}`} className="toolbar_btn btn_s bg_white">
                {size.label}
              </button>
            ))}
          </div> */}
          {/* 사이즈 옵션 */}

          {/* 글꼴 형태 Start*/}
          <div className="toolbar_btn_wrapper gap_4">
            <select className="toolbar_selector bg_white" onChange={changeHandler.onChangeFontSize}>
              {select.fontFamilies.map((fontFamily, i) => {
                return (
                  <option key={`font_size_selector-${i}`} value={fontFamily.label}>
                    {fontFamily.style}
                  </option>
                );
              })}
            </select>
          </div>

          {/* 글꼴 형태 End*/}

          {/* 글자 정렬 - 시작 */}
          <div className="toolbar_btn_wrapper gap_4">
            {button.fontAlign.map((fontAlign, index) => (
              <button
                key={`editor_size_btn-${index}`}
                className="toolbar_btn btn_s bg_white"
                onClick={(e) => {
                  if (toggleBlockType && typeof toggleBlockType === "function") {
                    toggleBlockType(fontAlign.eventLabel);
                  }
                }}
              >
                {fontAlign.label}
              </button>
            ))}
          </div>
          {/* 글자 정렬 - 끝 */}

          {/* 글자 스타일 - 시작 */}
          <div className="toolbar_btn_wrapper gap_4">
            {button.fontStyle.map((fontStyle, index) => (
              <button
                key={`editor_size_btn-${index}`}
                className="toolbar_btn btn_s bg_white"
                onClick={(e) => {
                  if (toggleInlineStyle && typeof toggleInlineStyle === "function") {
                    toggleInlineStyle(fontStyle.eventLabel);
                  }
                }}
              >
                {fontStyle.label}
              </button>
            ))}
          </div>
          {/* 글자 스타일 - 끝 */}

          {/* 글자 색상 - 시작 */}
          <div className="toolbar_btn_wrapper gap_4">
            {button.fontColor.map((fontColor, index) => (
              <button
                key={`editor_size_btn-${index}`}
                className="toolbar_btn btn_s bg_white"
                onClick={(e) => {
                  if (toggleInlineStyle && typeof toggleInlineStyle === "function") {
                    toggleInlineStyle(fontColor.eventLabel);
                  }
                }}
                style={{ color: fontColor.label }}
              >
                {"가"}
              </button>
            ))}
          </div>
          <div className="toolbar_btn_wrapper gap_4">
            <select className="toolbar_selector bg_white" onChange={onChangeFontColor}>
              {[...select.fontColors, { label: "", style: "", type: "fontColor", value: "더보기" }].map((fontSize, i) => {
                return (
                  <option key={`font_size_selector-${i}`} value={fontSize.label}>
                    {fontSize.value}
                  </option>
                );
              })}
            </select>
          </div>
          {/* 글자 색상 - 끝 */}

          {/* 글자 사이즈 - 시작 */}
          <div className="toolbar_btn_wrapper gap_4">
            {button.fontSize.map((fontSize, index) => (
              <button
                key={`editor_size_btn-${index}`}
                className="toolbar_btn btn_s bg_white"
                onClick={(e) => {
                  if (toggleInlineStyle && typeof toggleInlineStyle === "function") {
                    toggleInlineStyle(fontSize.eventLabel);
                  }
                }}
              >
                {fontSize.label}
              </button>
            ))}
          </div>
          <div className="toolbar_btn_wrapper gap_4">
            <select className="toolbar_selector bg_white" onChange={changeHandler.onChangeFontSize}>
              {[...select.fontSizes, { label: "", style: "", type: "fontSize", value: "직접입력" }].map((fontSize, i) => {
                return (
                  <option key={`font_size_selector-${i}`} value={fontSize.label}>
                    {fontSize.value}
                  </option>
                );
              })}
            </select>
          </div>
          {/* 글자 사이즈 - 끝 */}

          <ExtractObjectButton
            className="toolbar_btn btn_s bg_white"
            editorViewModel={editorModel}
            setState={setExtractState}
            onClick={() => {
              alert(JSON.stringify(extractState));
            }}
          >
            미리보기
          </ExtractObjectButton>
        </div>

        {isActive && (
          <div>
            <span className="color-picker_wrapper" ref={colorPickerRef}>
              <ColorPicker type="chrome" initialColor={currentColor} onColorChange={onChangeColor} onCallbackFontColor={_onCallbackFontColor} />
            </span>
          </div>
        )}

        <div className="gap_8 p-8" style={{ display: "flex", flex: 1 }}>
          <div className="text-editor-container p-8">
            <EditorView
              ref={editorRef}
              editorState={editorState!}
              handleChange={onChange}
              handleKeyCommand={handleKeyCommand}
              keyBindingFn={keyBindingFn}
              blockStyleFn={editorModel.handleBlockStyleFn}
              customStyleMap={customStyleMap}
              placeholder={"내용을 입력해주세요......"}
            />
          </div>
          <div className="text-editor-divider bg_black" />
          <div className="text-prev_wrap w-100 p-8 bg_white">
            <TextEditorPrev previewList={extractState} width={1200} height={200} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TextEditor;
