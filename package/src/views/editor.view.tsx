import { Editor } from "draft-js";
import * as R from "react";
import { ContentBlock, DraftEditorCommand, DraftStyleMap, EditorState } from "draft-js";

export interface EditorViewProps extends R.HTMLAttributes<HTMLElement> {
  onFocus?: () => void;
  editorState: EditorState;
  handleChange: (newEditorState: EditorState) => void;
  handleKeyCommand: (command: DraftEditorCommand, state: EditorState) => "handled" | "not-handled";
  keyBindingFn: (e: React.KeyboardEvent) => DraftEditorCommand | null;
  blockStyleFn: (contentBlock: ContentBlock) => string;
  customStyleMap?: DraftStyleMap;
  placeholder?: string;
}

const EditorView = R.forwardRef<Editor, EditorViewProps>(
  (
    {
      editorState,
      handleChange = () => {},
      onFocus = () => {},
      handleKeyCommand,
      keyBindingFn,
      blockStyleFn,
      customStyleMap = {},
      placeholder = "내용을 입력해주세요...",

      className,
      style,
      children,
      ...rest
    },

    forwardedRef
  ) => {
    return (
      <Editor
        ref={forwardedRef}
        editorState={editorState}
        onChange={handleChange}
        handleKeyCommand={handleKeyCommand}
        keyBindingFn={keyBindingFn}
        blockStyleFn={blockStyleFn}
        customStyleMap={customStyleMap}
        placeholder={placeholder}
      />
    );
  }
);
export default EditorView;
