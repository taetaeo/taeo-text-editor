import type { CustomStyleMapType, UseEditorProps } from "text-editor";
import { ToolbarView, EditorView, useEditor, styledMap, toolbarConfigs, ExtractObjectButton, useColorPicker, ColorPicker } from "text-editor";
import * as R from "react";

import "text-editor/dist/css/text-editor.css";

const { select, button } = toolbarConfigs;

const styleMapList = [...select.fontColors, ...select.fontFamilies, ...select.fontSizes, ...select.fontStyles];

function TextEditor(props: UseEditorProps) {
  const [extractState, setExtractState] = R.useState({});
  const [customStyleMap, setCustomStyleMap] = R.useState<CustomStyleMapType>(() => styledMap(styleMapList));

  const { editorRef, editorState, editorModel, onChange, toggleBlockType, toggleInlineStyle, handleKeyCommand, keyBindingFn, changeHandler } = useEditor({
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
    <R.Fragment>
      <div className="dflx_ac col_gap8 dashed_box p-8 m-b-8 m-r-8">
        <dl className="comp_dl m-0">
          <dd>
            <article className="">
              <ToolbarView marginBottom={12}>
                {/* 글꼴 형태 Start*/}
                {/* <ToolbarView.FontFamilySelector fontFamilyList={select.fontFamily} /> */}
                {/* 글꼴 형태 End*/}

                <div className="dflx_ac gap_colm8 m-b-12">
                  <ToolbarView.EditorSizeButtonGroup editorSizeList={button.editorSize} />
                </div>

                <div className="dflx_ac gap_colm8 m-b-12">
                  {/* 글자 정렬 - 시작 */}
                  <ToolbarView.FontAlignButtonGroup fontAlignList={button.fontAlign} toggleBlockType={toggleBlockType} />
                  {/* 글자 정렬 End */}
                  {/* <ToolbarView.FontAlignSelector fontAlignList={select.} /> */}

                  {/* 글자 스타일 Start */}
                  <ToolbarView.FontStyleButtonGroup fontStyleList={button.fontStyle} toggleInlineStyle={toggleInlineStyle} />

                  {/* 글자 스타일 End */}

                  {/* 글자 색상 Start */}
                  <ToolbarView.FontColorButtonGroup fontColorList={button.fontColor} toggleInlineStyle={toggleInlineStyle} />
                  <ToolbarView.FontColorSelector
                    fontColorList={[...select.fontColors, { label: "", style: "", type: "fontColor", value: "더보기" }]}
                    onChange={onChangeFontColor}
                  />
                </div>

                {/* 글자 색상 End*/}

                {/* 글자 사이즈 Start */}
                <div className="dflx_ac gap_colm8 m-b-12">
                  <ToolbarView.FontSizeButtonGroup fontSizeList={button.fontSize} toggleInlineStyle={toggleInlineStyle} />
                  <ToolbarView.FontSizeSelector
                    fontSizeList={[...select.fontSizes, { label: "", style: "", type: "fontSize", value: "직접입력" }]}
                    onChange={changeHandler.onChangeFontSize}
                  />
                </div>
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

              <div style={{ height: "300px", overflow: "auto" }}>
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
            </article>
          </dd>
        </dl>
      </div>
    </R.Fragment>
  );
}

export default TextEditor;
