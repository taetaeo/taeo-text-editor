import * as R from "react";
import { EditorState } from "draft-js";
import TextEditor from "./textEditor";

function App() {
  const [editorState, setEditorState] = R.useState(() => EditorState.createEmpty());

  return (
    <R.Fragment>
      <TextEditor editorState={editorState} setEditorState={setEditorState} />
    </R.Fragment>
  );
}

export default App;
