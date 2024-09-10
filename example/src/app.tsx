import * as React from "react";
import { EditorModel } from "taeo-text-editor";

import TextEditor from "./textEditor/textEditor";

const editorModel = new EditorModel();

function App() {
  const [editorState, setEditorState] = React.useState(editorModel._state.editorState);

  return <TextEditor editorState={editorState} setEditorState={setEditorState} />;
}

export default App;
