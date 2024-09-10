import * as React from "react";
import { EditorState } from "draft-js";
import TextEditor from "./textEditor/textEditor";

function App() {
  const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty());

  return <TextEditor editorState={editorState} setEditorState={setEditorState} />;
}

export default App;
