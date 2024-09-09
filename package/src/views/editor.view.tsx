import * as R from "react";
import { ContentBlock, DraftEditorCommand, DraftStyleMap, EditorState } from "draft-js";
import { Editor } from "draft-js";

import { cn } from "@/lib";

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

const EditorView = R.forwardRef<Editor, EditorViewProps>(function RTEditor(
  {
    editorState,
    handleChange = () => {},
    onFocus = () => {},
    handleKeyCommand,
    keyBindingFn,
    blockStyleFn,
    customStyleMap = {},
    placeholder = "내용을 입력해주세요...",
    style,
    children,
    className = "",
    ...rest
  },
  forwardedRef
) {
  return (
    <div className={cn("editor-container", className)} onClick={onFocus} style={style} {...rest}>
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
    </div>
  );
});
export default EditorView;
