import * as R from "react";
import { EditorState } from "draft-js";
import TextEditor from "./textEditor";

function App() {
  const [editorState, setEditorState] = R.useState(() => EditorState.createEmpty());

  R.useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  return (
    <R.Fragment>
      <TextEditor editorState={editorState} setEditorState={setEditorState} />
    </R.Fragment>
  );
}

export default App;
